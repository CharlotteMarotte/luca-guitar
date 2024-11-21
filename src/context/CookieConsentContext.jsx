import { createContext, useState, useContext, useEffect } from "react";
import { Cookies } from "react-cookie-consent";

const CookieConsentContext = createContext();

export const useCookieConsent = () => {
  return useContext(CookieConsentContext);
};

export const CookieConsentProvider = ({ children }) => {
  const [cookieCategories, setCookieCategories] = useState({
    marketing: false,
    analytics: false,
    functional: false,
    necessary: true,
  });

  const [cookieConsentGiven, setCookieConsentGiven] = useState(null);
  const [bannerVisibility, setBannerVisibility] = useState("show");

  useEffect(() => {
    const consentExists = Cookies.get("cookieInteraction") === "true";
    if (consentExists) {
      setBannerVisibility("hidden");
      setCookieConsentGiven(true);
    } else {
      setBannerVisibility("show");
    }
  }, []);

  const updateCookies = () => {
    Cookies.set("analyticsCookie", cookieCategories.analytics.toString(), {
      expires: 365,
    });
    Cookies.set("marketingCookie", cookieCategories.marketing.toString(), {
      expires: 365,
    });
    Cookies.set("functionalCookie", cookieCategories.functional.toString(), {
      expires: 365,
    });
    Cookies.set("cookieInteraction", "true", { expires: 365 });
  };

  const handleConsentChange = (consent) => {
    setCookieConsentGiven(consent);
    updateCookies();
    setBannerVisibility("hidden");
  };

  const handleCategoryChange = (category, isAccepted) => {
    setCookieCategories((prevState) => ({
      ...prevState,
      [category]: isAccepted,
    }));
  };

  const handleSavePreferences = () => {
    handleConsentChange(true);
  };

  const handleAcceptAll = () => {
    setCookieCategories({
      marketing: true,
      analytics: true,
      functional: true,
      necessary: true,
    });
    handleConsentChange(true);
  };

  const handleDecline = () => {
    setCookieCategories({
      marketing: false,
      analytics: false,
      functional: false,
      necessary: true,
    });
    handleConsentChange(false);
  };

  const handleReset = () => {
    Cookies.remove("analyticsCookie");
    Cookies.remove("marketingCookie");
    Cookies.remove("functionalCookie");
    Cookies.remove("cookieInteraction");
    setBannerVisibility("show");
    setCookieConsentGiven(null);
    setCookieCategories({
      marketing: false,
      analytics: false,
      functional: false,
      necessary: true,
    });
  };

  return (
    <CookieConsentContext.Provider
      value={{
        cookieConsentGiven,
        bannerVisibility,
        cookieCategories,
        handleConsentChange,
        handleCategoryChange,
        handleSavePreferences,
        handleAcceptAll,
        handleDecline,
        handleReset,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};
