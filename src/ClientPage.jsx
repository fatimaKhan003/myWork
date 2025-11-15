import React from "react";
import { useSearchParams } from "react-router-dom";

export default function ClientPage() {
  const [params] = useSearchParams();
  const username = params.get("username") || "";
  const review = params.get("review") || "";
  const logo = params.get("logo") || "";

  function openInstagram() {
    if (!username) {
      alert("Instagram username not provided.");
      return;
    }

    const appLink = `instagram://user?username=${username}`;
    const webLink = `https://instagram.com/${username}`;

    // Replace so user cannot come back using Back button
    window.location.replace(appLink);

    // Fallback to web after short delay
    setTimeout(() => {
      window.location.replace(webLink);
    }, 1200);
  }

  function openReview() {
    if (!review) {
      alert("Review link missing.");
      return;
    }

    // Replace to prevent coming back to selection page
    window.location.replace(review);
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
        onClick={openReview}
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

      <p style={{ fontSize: 13, color: "#777", marginTop: 14 }}>
        Tip: Instagram will open the app if installed, otherwise the browser.
      </p>
    </div>
  );
}
