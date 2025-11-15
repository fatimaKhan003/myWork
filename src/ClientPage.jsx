import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function ClientPage() {
  const [params] = useSearchParams();
  const username = params.get("username") || "";
  const review = params.get("review") || "";
  const logo = params.get("logo") || "/logo.jpg"; // <-- should be in public folder
  
  const [showServices, setShowServices] = useState(false);

  function openInstagram() {
    if (!username) {
      alert("Instagram username not provided.");
      return;
    }
    const appLink = `instagram://user?username=${username}`;
    const webLink = `https://instagram.com/${username}`;
    window.location.href = appLink;
    setTimeout(() => (window.location.href = webLink), 1200);
  }

  return (
    <div
      style={{
        maxWidth: 520,
        margin: "40px auto",
        padding: 20,
        textAlign: "center",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {logo && (
        <img
          src={logo}
          alt="Salon logo"
          style={{
            width: 120,
            height: 120,
            borderRadius: 999,
            objectFit: "cover",
            marginBottom: 14,
          }}
        />
      )}

      <h1 style={{ margin: 0 }}>Welcome to our Salon ✨</h1>
      <p style={{ color: "#555" }}>
        Follow us on Instagram and leave a quick review — it helps a lot!
      </p>

      <button
        onClick={openInstagram}
        style={{
          background: "#E1306C",
          color: "white",
          padding: "12px 16px",
          fontSize: 18,
          borderRadius: 10,
          width: "100%",
          marginTop: 10,
        }}
      >
        Follow on Instagram {username ? `@${username}` : ""}
      </button>

      <button
        onClick={() => {
          if (!review) {
            alert("Review link missing.");
            return;
          }
          window.open(review, "_blank");
        }}
        style={{
          background: "#4285F4",
          color: "white",
          padding: "12px 16px",
          fontSize: 18,
          borderRadius: 10,
          width: "100%",
          marginTop: 12,
        }}
      >
        Leave a Google Review
      </button>

      {/* Services Button */}
      <button
        onClick={() => setShowServices(true)}
        style={{
          background: "#10B981",
          color: "white",
          padding: "12px 16px",
          fontSize: 18,
          borderRadius: 10,
          width: "100%",
          marginTop: 12,
        }}
      >
        View Services & Prices
      </button>

      {/* █████ SERVICES POPUP █████ */}
      {showServices && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "white",
              width: "100%",
              maxWidth: 450,
              borderRadius: 12,
              padding: 20,
              textAlign: "left",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <h2 style={{ marginTop: 0 }}>AARA Salon — Services & Prices</h2>

            <h3>Hair Cuts</h3>
            <ul>
              <li>Basic Cut</li>
              <li>Face Forming</li>
              <li>Long Hair</li>
              <li>Short Layer</li>
              <li>Baby Hair Cuts</li>
            </ul>

            <h3>Keratin</h3>
            <ul>
              <li>Shoulder Length</li>
              <li>Short Length</li>
              <li>Long Length</li>
            </ul>
            <h3>Hair Colour</h3>
            <ul>
              <li>Roots</li>
              <li>Glossing 1</li>
              <li>Glossing 2</li>
              <li>Glossing 3</li>
              <li>Full Length 1</li>
              <li>Full Length 2</li>
            </ul>
            <h3>Treatments</h3>
            <ul>
              <li>Head Oiling with Shoulders</li>
              <li>Shoulder Massage</li>
            </ul>
            <h3>Massage</h3>
            <ul>
              <li>Hand Massage</li>
              <li>Foot Massage</li>
              <li>Body Massage</li>
              <li>Body Polisher</li>
              <li>Body Scrubing</li>
              <li>Body Ubtan</li>
              <li>Full Body Fruit Wax</li>
              <li>Full Arms</li>
              <li>Full Legs Thin</li>
              <li>Full Legs Thick</li>
            </ul>
            <h3>Sugar Wax</h3>
            <ul>
              <li>Full Body</li>
              <li>Full Arms</li>
              <li>Full Legs</li>
              <li>Under Arms</li>
              <li>Under Legs</li>
            </ul>
            <h3>Threading</h3>
            <ul>
              <li>Eye Brow</li>
              <li>Upper Lips</li>
              <li>Chin Wax</li>
              <li>Side Wax</li>
              <li>Forehead</li>
              <li>Low Lips</li>
              <li>Chin Threading</li>
            </ul>
            <h3>Face Polisher</h3>
            <ul>
              <li>Whitening Polisher</li>
              <li>Brightening Polisher</li>
              <li>Janssen Polisher</li>
              <li>Gold Polisher</li>
              <li>Harbel Polisher</li>
            </ul>
            <h3>Hair Styling</h3>
            <ul>
              <li>Basic Hair Do</li>
              <li>Hair Style</li>
              <li>Blow Dry</li>
              <li>Without Wash</li>
              <li>With Wash</li>
            </ul>
            <h3>Manicure-Pedicure</h3>
            <ul>
              <li>Mani-Pedi Basic</li>
              <li>Mani-Pedi Whitening</li>
              <li>Roma Spa</li>
            </ul>
            <h3>Facials</h3>
            <ul>
              <li>Basic Facial</li>
              <li>Supreme Whitening Facial</li>
              <li>24K Gold Facial</li>
              <li>Hydra Facial</li>
              <li>Whitening Facial</li>
              <li>Crystal Whitening Facial</li>
              <li>Brightening Facial</li>
              <li>Janssen Brightening Facial</li>
            </ul>

            <button
              onClick={() => setShowServices(false)}
              style={{
                marginTop: 20,
                width: "100%",
                padding: "12px 16px",
                borderRadius: 10,
                background: "#111827",
                color: "white",
                fontSize: 16,
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
