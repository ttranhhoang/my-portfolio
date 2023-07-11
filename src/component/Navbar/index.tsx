"use client";
import { useScrollSpy } from "@/hook/useScrollSpy";
import { useScrollToTop } from "@/hook/useScrollToTop";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { BsFacebook, BsFillEnvelopeAtFill, BsGithub } from "react-icons/bs";
import SwitchDarkMode from "../SwitchDarkMode";

const Navbar = () => {
  const [toggleButton, setToggleButton] = useState<boolean>(false);
  const { isScroll, isBlackTheme } = useScrollToTop();
  const routes = ["about", "skills", "projects", "contact"];
  const activeId = useScrollSpy(routes, 54);
  const handleClassNameBody = () => {
    const body = document.querySelector("body");
    if (!body) return;
    body.classList.toggle("menu-active");
  };
  const onClickMenuToggle = () => {
    setToggleButton(!toggleButton);
    handleClassNameBody();
  };

  return (
    <nav
      id="mainNav"
      className={clsx(
        "navbar",
        isScroll && "navbar-scrolled",
        isBlackTheme && "dark"
      )}
    >
      <div className="navbar-center">
        {/* <!-- nav header --> */}
        <div className="navbar_header">
          <Link
            href="/"
            className="navbar_title"
            onClick={() => window.scrollTo(0, 0)}
          >
            H2T
          </Link>
          <div
            className={clsx("menu-toggle", toggleButton && "is-active")}
            onClick={onClickMenuToggle}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* <!-- links --> */}
        <ul className={clsx("menu", toggleButton && "is-active")}>
          {routes.map((route) => (
            <li className="menu-item" key={route}>
              <a
                href={`#${route}`}
                className={clsx("menu-link", activeId === route && "active")}
              >
                {route}
              </a>
            </li>
          ))}

          <div className={clsx("navbar_social", toggleButton && "is-active")}>
            <li>
              <a href="" target="_blank">
                <BsGithub className="icon" />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <BsFillEnvelopeAtFill className="icon" />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <BsFacebook className="icon" />
              </a>
            </li>
          </div>
          <SwitchDarkMode />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
