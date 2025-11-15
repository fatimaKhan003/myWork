import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function ClientPage() {
  const [params] = useSearchParams();
  const username = params.get("username") || "";
  const review = params.get("review") || "";
  const logo = params.get("logo") || "/logo.jpg";

  const [showServices, setShowServices] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);

  const categories = [
    { title: "Makeups 💄", items: ["Bridal Makeups", "Bridal Makeups with Services", "Party Makeup"] },
    { title: "Hair Cuts ✂️", items: ["Basic Cut", "Face Forming", "Long Hair", "Short Layer", "Baby Hair Cuts"] },
    { title: "Keratin 🧴", items: ["Shoulder Length", "Short Length", "Long Length"] },
    { title: "Hair Colour 🎨", items: ["Roots", "Glossing 1", "Glossing 2", "Glossing 3", "Full Length 1", "Full Length 2"] },
    { title: "Treatments 🌿", items: ["Head Oiling w/ Shoulders", "Shoulder Massage"] },
    { title: "Massage 💆‍♀️", items: ["Hand Massage", "Foot Massage", "Body Massage", "Body Polisher", "Body Scrub", "Body Ubtan", "Full Body Fruit Wax", "Full Arms", "Full Legs Thin", "Full Legs Thick"] },
    { title: "Sugar Wax 🍯", items: ["Full Body", "Full Arms", "Full Legs", "Under Arms", "Under Legs"] },
    { title: "Threading 🧵", items: ["Eye Brow", "Upper Lips", "Chin Wax", "Side Wax", "Forehead", "Low Lips", "Chin Threading"] },
    { title: "Face Polisher ✨", items: ["Whitening", "Brightening", "Janssen", "Gold", "Herbal"] },
    { title: "Hair Styling 💇‍♀️", items: ["Basic Hair Do", "Hair Style", "Blow Dry", "Without Wash", "With Wash"] },
    { title: "Manicure-Pedicure 💅", items: ["Basic", "Whitening", "Roma Spa"] },
    { title: "Facials 🧖‍♀️", items: ["Basic Facial", "Supreme Whitening", "24K Gold Facial", "Hydra Facial", "Whitening Facial", "Crystal Whitening", "Brightening Facial", "Janssen Facial"] }
  ];

  function toggleCategory(i) {
    setOpenCategory(openCategory === i ? null : i);
  }

  function openInstagram() {
    if (!username) return alert("Instagram username not provided.");
    const app = `instagram://user?username=${username}`;
    const web = `https://instagram.com/${username}`;
    window.location.href = app;
    setTimeout(() => (window.location.href = web), 1200);
  }

  return (
    <div style={{
      maxWidth: 520,
      margin: "40px auto",
      padding: 20,
      fontFamily: "Inter, system-ui, sans-serif",
      textAlign: "center",
      background: "linear-gradient(135deg, #F7F5F2, #FFF7F0)",
      borderRadius: 20,
      boxShadow: "0 10px 30px rgba(0,0,0,0.12)"
    }}>
      {logo && (
        <img
          src={logo}
          alt="Salon logo"
          style={{
            width: 130,
            height: 130,
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: 14,
            border: "4px solid #F7F5F2",
            boxShadow: "0 6px 18px rgba(0,0,0,0.25)"
          }}
        />
      )}

      <h1 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: "#B7687A" }}>
        Thank You For Choosing US! 💖
      </h1>
      <p style={{ color: "#555", marginTop: 6, fontSize: 15 }}>
        Hey beautiful! 💕 Follow us on Instagram and sprinkle a little love with a quick review ✨
      </p>

      {/* Instagram Button */}
      <button
        onClick={openInstagram}
        style={{
          background: "#D8A4A9",
          color: "white",
          padding: "12px 16px",
          fontSize: 18,
          borderRadius: 12,
          width: "100%",
          marginTop: 16,
          boxShadow: "0 4px 12px rgba(216,164,169,0.45)",
          border: "none"
        }}
      >
        Follow us on Instagram {username ? `@${username}` : ""}
      </button>

      {/* Review Button */}
      <button
        onClick={() => review && window.open(review, "_blank")}
        style={{
          background: "#8CB662",
          color: "white",
          padding: "12px 16px",
          fontSize: 18,
          borderRadius: 12,
          width: "100%",
          marginTop: 12,
          boxShadow: "0 4px 12px rgba(140,182,98,0.45)",
          border: "none"
        }}
      >
        Leave a Google Review ⭐
      </button>

      {/* Services Button */}
      <button
        onClick={() => setShowServices(true)}
        style={{
          background: "#CFAF63",
          color: "white",
          padding: "12px 16px",
          fontSize: 18,
          borderRadius: 12,
          width: "100%",
          marginTop: 12,
          boxShadow: "0 4px 12px rgba(207,175,99,0.45)",
          border: "none"
        }}
      >
        View Services 💅
      </button>

      {/* Services Panel */}
      {showServices && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "rgba(255,255,255,0.92)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          zIndex: 50,
          overflowY: "auto"
        }}>
          <div style={{
            width: "100%",
            maxWidth: 500,
            borderRadius: 16,
            padding: 20,
            textAlign: "left",
            boxShadow: "0 8px 28px rgba(0,0,0,0.2)",
            background: "linear-gradient(135deg, #FFF7F0, #F7F5F2)"
          }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#B7687A", marginBottom: 16 }}>
              AARA Salon — Services
            </h2>

            {/* Category Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12
            }}>
              {categories.map((cat, i) => (
                <div key={i} style={{
                  borderRadius: 12,
                  background: "#FDF5F1",
                  padding: "12px 16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  border: openCategory === i ? "2px solid #B7687A" : "1px solid #E0E0E0"
                }}
                  onClick={() => toggleCategory(i)}
                >
                  <div style={{ fontWeight: 600, fontSize: 16, display: "flex", justifyContent: "space-between" }}>
                    {cat.title}
                    <span>{openCategory === i ? "▲" : "▼"}</span>
                  </div>

                  {openCategory === i && (
                    <ul style={{ marginTop: 8, paddingLeft: 16, color: "#555", fontSize: 14 }}>
                      {cat.items.map((item, x) => (
                        <li key={x} style={{ margin: "4px 0" }}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowServices(false)}
              style={{
                marginTop: 20,
                width: "100%",
                padding: "12px 16px",
                borderRadius: 12,
                background: "#B7687A",
                color: "white",
                fontSize: 16,
                border: "none",
                boxShadow: "0 4px 12px rgba(183,104,122,0.4)"
              }}
            >
              Close ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
