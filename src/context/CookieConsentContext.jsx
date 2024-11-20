import { createContext, useState, useContext, useEffect } from "react";
import {
  getCookieConsentValue,
  resetCookieConsentValue,
} from "react-cookie-consent";

const CookieConsentContext = createContext();

export const useCookieConsent = () => {
  return useContext(CookieConsentContext);
};

export const CookieConsentProvider = ({ children }) => {
  const [cookieConsentGiven, setCookieConsentGiven] = useState(
    getCookieConsentValue("userConsent")
  );

  useEffect(() => {
    if (cookieConsentGiven) {
      setBannerVisible("hidden");
    }
  }, [cookieConsentGiven]);

  const [bannerVisible, setBannerVisible] = useState("byCookieValue");

  const hideBanner = () => {
    setBannerVisible("hidden");
  };

  const handleDecline = () => {
    setCookieConsentGiven(false);
    hideBanner();
  };

  const handleAccept = () => {
    setCookieConsentGiven(true);
    hideBanner();
  };

  const handleReset = () => {
    resetCookieConsentValue();
    setBannerVisible("show");
    console.log("got here");
  };

  return (
    <CookieConsentContext.Provider
      value={{
        cookieConsentGiven,
        bannerVisible,
        hideBanner,
        handleAccept,
        handleDecline,
        handleReset,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};
