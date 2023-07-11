"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import React from "react";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button type="button" className="slick-prev slick-arrow" onClick={onClick}>
      <i className="fa fa-angle-left "></i>
    </button>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button type="button" className="slick-next slick-arrow" onClick={onClick}>
      <i className="fa fa-angle-right "></i>
    </button>
  );
}
interface ISlickCarousel {
  data: any[];
  isSkills?: boolean;
}
const SlickCarousel = (props: ISlickCarousel) => {
  const { data, isSkills } = props;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    draggable: false,
    dots: true,
    prevArrow: <SampleNextArrow />,
    nextArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {/* <!-- <i className="fa fa-angle-left silder-prev"></i> --> */}
      {data.map((item, index) =>
        !isSkills ? (
          <div className="projects_info" key={item.name}>
            <a target="blank" href={item.href}>
              <div className="projects_thumnail">
                <Image
                  src={item.image}
                  alt="image"
                  className="projects_img"
                  width={500}
                  height={500}
                />
                <div className="projects_overlay"></div>
                {/* <!-- <button className="projects_btn">Xem thử</button> --> */}
              </div>
            </a>
            <h2 className="projects_title">
              <a target="blank" href={item.href}>
                <p className="projects_name">{item.name}</p>
              </a>
            </h2>
          </div>
        ) : (
          <React.Fragment key={index}>
            <div className="skills_icon">
              {/* <i className="fab fa-html5 fa-7x" style={{ color: "red" }}></i> */}
              {/* <BiLogoHtml5
                className="fab fa-html5 fa-7x"
                style={{ color: "red" }}
              /> */}
              {item.icon}
            </div>
          </React.Fragment>
        )
      )}

      {/* <!-- <i className="fa fa-angle-right silder-next"></i> --> */}
    </Slider>
  );
};
export default SlickCarousel;
