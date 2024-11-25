import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

const COOKIE_EXPIRY_DAYS = 365;
const CookieConsentContext = createContext();

export const useCookieConsent = () => useContext(CookieConsentContext);

export const CookieConsentProvider = ({ children }) => {
  const [cookieCategoriesConsent, setcookieCategoriesConsent] = useState({
    marketing: false,
    analytics: false,
    functional: false,
  });

  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const consentStatus = Cookies.get("cookieInteraction");
    if (consentStatus === "true") {
      setBannerVisible(false);
    }
  }, []);

  const updateCookies = (categories) => {
    Cookies.set("analyticsCookie", categories.analytics.toString(), {
      expires: COOKIE_EXPIRY_DAYS,
    });
    Cookies.set("marketingCookie", categories.marketing.toString(), {
      expires: COOKIE_EXPIRY_DAYS,
    });
    Cookies.set("functionalCookie", categories.functional.toString(), {
      expires: COOKIE_EXPIRY_DAYS,
    });
    Cookies.set("cookieInteraction", "true", { expires: COOKIE_EXPIRY_DAYS });
  };

  const updateAndSet = (updatedCategories) => {
    setcookieCategoriesConsent(updatedCategories);
    updateCookies(updatedCategories);
    setBannerVisible(false);
  };

  const handleSavePreferences = () => {
    updateCookies(cookieCategoriesConsent);
    setBannerVisible(false);
  };

  const handleAcceptAll = () => {
    updateAndSet({ marketing: true, analytics: true, functional: true }, true);
  };

  const handleDecline = () => {
    updateAndSet(
      {
        marketing: false,
        analytics: false,
        functional: false,
      },
      true
    );
  };

  const handleReset = () => {
    Cookies.remove("analyticsCookie");
    Cookies.remove("marketingCookie");
    Cookies.remove("functionalCookie");
    Cookies.remove("cookieInteraction");
    updateAndSet(
      {
        marketing: false,
        analytics: false,
        functional: false,
      },
      false
    );
    setBannerVisible(true);
  };

  const handleCategoryChange = (category, isAccepted) => {
    setcookieCategoriesConsent((prevState) => ({
      ...prevState,
      [category]: isAccepted,
    }));
  };

  return (
    <CookieConsentContext.Provider
      value={{
        bannerVisible,
        cookieCategoriesConsent,
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
