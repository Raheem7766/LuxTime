// CookieConsent.js
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  useEffect(() => {
    // Check if the user has already given consent
    const consent = Cookies.get("cookie-consent");
    if (consent === "accepted") {
      setIsConsentGiven(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookie-consent", "accepted", { expires: 365 }); // Store consent for 1 year
    setIsConsentGiven(true); // Hide the banner
  };

  const handleReject = () => {
    Cookies.set("cookie-consent", "rejected", { expires: 365 }); // Store rejection for 1 year
    setIsConsentGiven(true); // Hide the banner
  };

  if (isConsentGiven) return null; // Hide the banner if consent is given

  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-400 text-white py-4 px-6 sm:px-8 flex justify-between items-center z-50 shadow-lg">
      <p className="text-sm sm:text-base">
        We use cookies to improve your experience. By using our site, you agree to our{" "}
        <a href="/privacy-policy" className="underline">privacy policy</a>.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={handleAccept}
          className="bg-slate-800 text-white py-2 px-4 rounded-lg text-sm sm:text-base hover:bg-green-600 focus:outline-none"
        >
          Accept
        </button>
        <button
          onClick={handleReject}
          className="bg-slate-700 text-white py-2 px-4 rounded-lg text-sm sm:text-base hover:bg-red-600 focus:outline-none"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
