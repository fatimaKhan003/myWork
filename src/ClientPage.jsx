import React from "react";
import { useSearchParams } from "react-router-dom";

export default function ClientPage() {
  const [params] = useSearchParams();
  const username = params.get("username") || "";   
  const review = params.get("review") || "";       
  const logo = params.get("logo") || "./assets/logo.jpg";           
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
    <div style={{ maxWidth: 520, margin: "40px auto", padding: 20, textAlign: "center", fontFamily: "Inter, system-ui, sans-serif" }}>
      {logo && (
        <img src={logo} alt="Salon logo" style={{ width: 120, height: 120, borderRadius: 999, objectFit: "cover", marginBottom: 14 }} />
      )}
      <h1 style={{ margin: 0 }}>Welcome to our Salon ✨</h1>
      <p style={{ color: "#555" }}>Follow us on Instagram and leave a quick review — it helps a lot!</p>

      <button onClick={openInstagram} style={{ background: "#E1306C", color: "white", padding: "12px 16px", fontSize: 18, borderRadius: 10, width: "100%", marginTop: 10 }}>
        Follow on Instagram{username ? ` @${username}` : ""}
      </button>

      <button onClick={() => { if (!review) { alert("Review link missing."); return; } window.open(review, "_blank"); }} style={{ background: "#4285F4", color: "white", padding: "12px 16px", fontSize: 18, borderRadius: 10, width: "100%", marginTop: 12 }}>
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
      {/* ████████ SERVICES POPUP ████████ */}
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

            <h3>💄 Makeup</h3>
            <ul>
              <li>Party Makeup — Rs 3,000</li>
              <li>Engagement Makeup — Rs 7,000</li>
              <li>Bridal Makeup — Rs 20,000</li>
            </ul>

            <h3>💇 Hair</h3>
            <ul>
              <li>Haircut — Rs 1,000</li>
              <li>Blow Dry — Rs 700</li>
              <li>Keratin Treatment — Rs 10,000</li>
            </ul>

            <h3>🌿 Facial</h3>
            <ul>
              <li>Normal Facial — Rs 2,000</li>
              <li>Whitening Facial — Rs 3,500</li>
              <li>Hydra Facial — Rs 6,000</li>
            </ul>

            <h3>✋ Mehndi</h3>
            <ul>
              <li>Simple Mehndi — Rs 500</li>
              <li>Full Hand Mehndi — Rs 1,500</li>
              <li>Bridal Mehndi — Rs 6,000</li>
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
