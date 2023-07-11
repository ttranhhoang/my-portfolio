"use client";
import { useScrollToTop } from "@/hook/useScrollToTop";
import { RiArrowUpDoubleLine } from "react-icons/ri";

const ScrollTopButton = () => {
  const { isScroll } = useScrollToTop();
  const onClickScrollToTop = () => window.scrollTo(0, 0);

  return (
    <div
      className={`scrollTop ${isScroll ? "sticky" : ""}`}
      onClick={onClickScrollToTop}
    >
      <RiArrowUpDoubleLine className="scrollTop-arrow" aria-hidden="true" />
    </div>
  );
};

export default ScrollTopButton;
