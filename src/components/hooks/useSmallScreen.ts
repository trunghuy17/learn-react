/*
- function use hooks of react
- name function is start with 'use'
*/

import { useEffect, useState } from "react";

export const useSmallScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    function checkSmallSreen() {
      setIsSmallScreen(window.innerWidth < 750);
    }
    window.addEventListener("resize", checkSmallSreen);
    return () => {
      window.addEventListener("resize", checkSmallSreen);
    };
  }, []);
  return { isSmallScreen };
};
