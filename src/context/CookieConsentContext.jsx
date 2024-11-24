import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsentContext = createContext();

export const useCookieConsent = () => {
  return useContext(CookieConsentContext);
};

export const CookieConsentProvider = ({ children }) => {
  const [cookieCategories, setCookieCategories] = useState({
    marketing: false,
    analytics: false,
    functional: false,
    necessary: true, // "necessary" cookies are always true
  });

  const [cookieConsentGiven, setCookieConsentGiven] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  // Check if the user already provided consent
  useEffect(() => {
    const consentStatus = Cookies.get("cookieInteraction");
    if (consentStatus === "true") {
      setBannerVisible(false); // Hide the banner if consent was already given
      setCookieConsentGiven(true); // Update the consent state
    }
  }, []);

  // Save cookies to browser
  const updateCookies = (categories) => {
    Cookies.set("necessaryCookie", "true", { expires: 365 }); // "necessary" is always true
    Cookies.set("analyticsCookie", categories.analytics.toString(), {
      expires: 365,
    });
    Cookies.set("marketingCookie", categories.marketing.toString(), {
      expires: 365,
    });
    Cookies.set("functionalCookie", categories.functional.toString(), {
      expires: 365,
    });
    Cookies.set("cookieInteraction", "true", { expires: 365 });
  };

  // Save preferences and close the banner
  const handleSavePreferences = () => {
    updateCookies(cookieCategories); // Update cookies based on the current state
    setBannerVisible(false); // Hide the banner after saving preferences
    setCookieConsentGiven(true);
  };

  // Accept all cookies and close the banner
  const handleAcceptAll = () => {
    // Set all cookies to true for "Accept All" action
    const updatedCategories = {
      marketing: true,
      analytics: true,
      functional: true,
      necessary: true, // "necessary" stays true
    };

    // Update the state and immediately update the cookies
    setCookieCategories(updatedCategories); // Update state
    updateCookies(updatedCategories); // Set cookies based on the updated state
    setBannerVisible(false); // Hide the banner
    setCookieConsentGiven(true);
  };

  // Decline all non-essential cookies and close the banner
  const handleDecline = () => {
    const updatedCategories = {
      marketing: false,
      analytics: false,
      functional: false,
      necessary: true, // "necessary" stays true
    };
    setCookieCategories(updatedCategories); // Update state
    updateCookies(updatedCategories); // Set cookies based on the updated state
    setBannerVisible(false); // Hide the banner
    setCookieConsentGiven(false);
  };

  // Reset cookies and state to initial values
  const handleReset = () => {
    // Remove all cookies
    Cookies.remove("necessaryCookie");
    Cookies.remove("analyticsCookie");
    Cookies.remove("marketingCookie");
    Cookies.remove("functionalCookie");
    Cookies.remove("cookieInteraction");

    // Reset cookie categories and banner visibility
    setCookieCategories({
      marketing: false,
      analytics: false,
      functional: false,
      necessary: true, // "necessary" stays true
    });
    setBannerVisible(true); // Show the banner again
    setCookieConsentGiven(false); // Reset consent state
  };

  // Change individual cookie category
  const handleCategoryChange = (category, isAccepted) => {
    setCookieCategories((prevState) => ({
      ...prevState,
      [category]: isAccepted,
    }));
  };

  return (
    <CookieConsentContext.Provider
      value={{
        cookieConsentGiven,
        bannerVisible,
        cookieCategories,
        handleSavePreferences,
        handleAcceptAll,
        handleDecline,
        handleReset,
        handleCategoryChange,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};
