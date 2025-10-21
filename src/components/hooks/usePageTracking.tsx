import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const usePageTracking = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.gtag !== "function")
      return;
    window.gtag("event", "page_view", {
      page_path: pathname + search,
    });
  }, [pathname, search]);
};
