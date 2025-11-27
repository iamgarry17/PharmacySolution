import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css"; // Tailwind
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Your Stripe test publishable key
const stripePromise = loadStripe("pk_test_51ImS3GJCpsVNZ8fG6bZCCocTPzCrYB5RQNxkBnsg2ZGp247Dj52jHgHup7Y8oG57J9sHUMtbqnM8ojJ2I5JnW6a00ZsvwqE0S");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>
);
