import { useEffect, useState } from "react";

export function useScrollToTop() {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [isBlackTheme, setIsBlackTheme] = useState<boolean>(false);

  useEffect(() => {
    const theme = document.documentElement.getAttribute("data-theme");
    window.addEventListener("scroll", function () {
      let y = window.pageYOffset;
      setIsScroll(y > 100 ? true : false);
      setIsBlackTheme(isScroll && theme === "dark");
    });
  }, [isScroll]);

  return {
    isScroll,
    isBlackTheme,
  };
}
