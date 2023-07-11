"use client";
import React from "react";
import { BsFacebook, BsFillEnvelopeAtFill, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <p className="footer_text">
          Copyright Trương Trần Huy Hoàng - H2T
          <span>
            <a href="https://github.com/ttranhhoang" target="_blank">
              <BsGithub className="icon" />
            </a>
          </span>
          <span>
            <a href="" target="_blank">
              <BsFillEnvelopeAtFill className="icon" />
            </a>
          </span>
          <span>
            <a href="https://www.facebook.com/tt.hhoang.168" target="_blank">
              <BsFacebook className="icon" />
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
