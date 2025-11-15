// Updated ClientPage with auto-loaded services from charges.pdf data
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

// Restructured Services List (Parsed & Categorized)
const SERVICES = [
  {
    category: "Hair Cuts",
    items: [
      { name: "Basic Cut", price: 2000 },
      { name: "Face Forming", price: 3000 },
      { name: "Long Hair", price: 4500 },
      { name: "Short Layer", price: 4500 },
      { name: "Baby Hair Cuts", price: 3000 },
    ],
  },
  {
    category: "Keratin",
    items: [
      { name: "Shoulder Length", price: 25000 },
      { name: "Short Length", price: 30000 },
      { name: "Long Length", price: 45000 },
    ],
  },
  {
    category: "Hair Color",
    items: [
      { name: "Roots", price: 5500 },
      { name: "Glossing 1", price: 6000 },
      { name: "Glossing 2", price: 8000 },
      { name: "Glossing 3", price: 10000 },
      { name: "Full Length 1", price: 18000 },
      { name: "Full Length 2", price: 35000 },
    ],
  },
  {
    category: "Treatments",
    items: [
      { name: "Head Oiling with Shoulders", price: 2500 },
      { name: "Shoulder Massage", price: 1500 },
    ],
  },
  {
    category: "Massage",
    items: [
      { name: "Hand Massage", price: 1200 },
      { name: "Foot Massage", price: 1200 },
      { name: "Body Massage", price: 9000 },
      { name: "Body Polisher", price: 12000 },
      { name: "Body Scrubbing", price: 8000 },
      { name: "Body Ubtan", price: 7500 },
      { name: "Full Body Fruit Wax", price: 9000 },
      { name: "Full Arms", price: 1500 },
      { name: "Full Legs Thin", price: 1500 },
      { name: "Full Legs Thick", price: 2500 },
    ],
  },
  {
    category: "Sugar Wax",
    items: [
      { name: "Full Body", price: 7500 },
      { name: "Full Arms", price: 1500 },
      { name: "Full Legs", price: 2500 },
      { name: "Under Arms", price: 500 },
      { name: "Under Legs", price: 2500 },
    ],
  },
  {
    category: "Threading",
    items: [
      { name: "Eye Brow", price: 350 },
      { name: "Upper Lips", price: 150 },
      { name: "Chin Wax", price: 200 },
      { name: "Side Wax", price: 1500 },
      { name: "Forehead", price: 300 },
      { name: "Low Lips", price: 200 },
      { name: "Chin Threading", price: 200 },
    ],
  },
  {
    category: "Face Polisher",
    items: [
      { name: "Whitening Polisher", price: 2000 },
      { name: "Brightening Polisher", price: 2000 },
      { name: "Janssen Polisher", price: 2500 },
      { name: "Gold Polisher", price: 2500 },
      { name: "Herbal Polisher", price: 2000 },
    ],
  },
  {
    category: "Hair Styling",
    items: [
      { name: "Basic Hair Do", price: 3500 },
      { name: "Hair Style", price: 4500 },
      { name: "Blow Dry (Without Wash)", price: 2500 },
      { name: "Blow Dry (With Wash)", price: 3000 },
    ],
  },
  {
    category: "Meni Pedi",
    items: [
      { name: "Basic Meni Pedi", price: 2000 },
      { name: "Whitening Meni Pedi", price: 3000 },
      { name: "Roma Spa", price: 5500 },
    ],
  },
  {
    category: "Facial",
    items: [
      { name: "Basic Facial", price: 4500 },
      { name: "Supreme Whitening Facial", price: 7500 },
      { name: "24K Gold Facial", price: 9000 },
      { name: "Hydra Facial", price: 9000 },
      { name: "Hydra Facial (Advance)", price: 12000 },
      { name: "Whitening Facial", price: 6500 },
      { name: "Crystal Whitening Facial", price: 7000 },
      { name: "Brightening Facial", price: 8500 },
      { name: "Janssen Brightening Facial", price: 3000 },
    ],
  },
  {
    category: "Bridal Package",
    items: [
      { name: "Nikkah + Engagement", price: 25000 },
      { name: "Mehndi + Mayo", price: 30000 },
      { name: "Barat", price: 45000 },
      { name: "Walima", price: 35000 },
    ],
  },
  {
    category: "Special Deals",
    items: [
      { name: "Deal 01", price: 2499 },
      { name: "Deal 02", price: 4699 },
      { name: "Deal 03", price: 8999 },
      { name: "Deal 04", price: 4500 },
      { name: "Deal 05", price: 1500 },
      { name: "Deal 06 (Mid-Length)", price: "25000 - 30000" },
      { name: "Deal 06 (Waist-Length)", price: "30000 - 40000" },
      { name: "Deal 07 (Shoulder-Length)", price: "15000 - 18000" },
      { name: "Deal 07 (Mid-Length)", price: "22000 - 25000" },
      { name: "Deal 07 (Waist-Length)", price: "25000 - 40000" },
    ],
  },
];

export default function ClientPage() {
  const [params] = useSearchParams();
  const username = params.get("username") || "";
  const review = params.get("review") || "";
  const logo = params.get("logo") || "/logo.jpg";

  const [showServices, setShowServices] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto p-5 text-center font-inter">
      {logo && (
        <img
          src={logo}
          alt="Salon Logo"
          className="w-28 h-28 rounded-full object-cover mx-auto mb-4"
        />
      )}

      <h1 className="text-2xl font-bold">Welcome to AARA Salon ✨</h1>
      <p className="text-gray-600 mt-1">
        Follow us on Instagram & leave us a quick Google review!
      </p>

      {/* Instagram */}
      <button
        onClick={() => {
          if (!username) return alert("Instagram username missing");
          const app = `instagram://user?username=${username}`;
          const web = `https://instagram.com/${username}`;
          window.location.href = app;
          setTimeout(() => (window.location.href = web), 1200);
        }}
        className="w-full bg-pink-600 text-white py-3 rounded-xl text-lg mt-4"
      >
        Follow on Instagram {username ? `@${username}` : ""}
      </button>

      {/* Google Review */}
      <button
        onClick={() => review && window.open(review, "_blank")}
        className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg mt-3"
      >
        Leave a Google Review
      </button>

      {/* Services Button */}
      <button
        onClick={() => setShowServices(true)}
        className="w-full bg-emerald-600 text-white py-3 rounded-xl text-lg mt-3"
      >
        View Services & Prices
      </button>

      {/* Popup */}
      {showServices && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl w-full max-w-lg p-5 max-h-[80vh] overflow-y-auto text-left">
            <h2 className="text-xl font-bold mb-4">AARA Salon — Services</h2>

            {SERVICES.map((section) => (
              <div key={section.category} className="mb-5">
                <h3 className="text-lg font-semibold mb-2">{section.category}</h3>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex justify-between border-b pb-1 text-sm"
                    >
                      <span>{item.name}</span>
                      <span className="font-medium">
                        Rs {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <button
              onClick={() => setShowServices(false)}
              className="w-full bg-gray-900 text-white py-3 rounded-xl text-md mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
