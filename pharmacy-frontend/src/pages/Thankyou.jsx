import React, { useEffect } from "react";

export default function ThankYou() {

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 120000); // 2 minutes

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-green-600">Thank you for your order!</h1>
      <p className="mt-4 text-lg">You will be redirected to the homepage shortly.</p>
    </div>
  );
}
