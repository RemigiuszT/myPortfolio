"use client";

import React from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonialData = [
    {
      id: 1,
      name: "Grzegorz Dyl",
      role: "Tech Lead @ Virtesoft",
      rating: 5,
      content:
        "Remigiusz was a core member of our project team, rapidly growing his skills while maintaining excellent cooperation. His deep product understanding and loyalty were invaluable assets.",
      color: "#2F80ED",
      icon: "/images/icon/icon_42.svg",
    },
    {
      id: 2,
      name: "Michal Lesinski",
      role: "Project Manager",
      rating: 5,
      content:
        "A truly committed developer who consistently delivers innovative ideas and meets deadlines. His approach keeps the whole team engaged and productive.",
      color: "#9B51E0",
      icon: "/images/icon/icon_42.svg",
    },
    {
      id: 3,
      name: "Katja Bender",
      role: "Product Director",
      rating: 5,
      content:
        "Despite joining briefly, Remek integrated seamlessly into our team. His motivation and quality-focused approach delivered exceptional results in short time.",
      color: "#56CCF2",
      icon: "/images/icon/icon_42.svg",
    },
    {
      id: 4,
      name: "Pawel Soja",
      role: "Team Leader",
      rating: 5,
      content:
        "From day one, Remek showed remarkable self-motivation and technical growth. He transformed into a developer who could tackle any complex challenge effectively.",
      color: "#219653",
      icon: "/images/icon/icon_42.svg",
    },
  ];

  return (
    <Slider {...settings} arrows={false}>
      {testimonialData.map((testimonial) => (
        <div className="item" key={testimonial.id}>
          <div className="feedback-block-four position-relative">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center">
              <img src={testimonial.icon} alt="icon" />
            </div>
            <p className="tx-dark">{testimonial.content}</p>
            <div className="d-flex align-items-center justify-content-between">
              <h6 className="name fs-20 fw-500 m0 tx-dark">
                {testimonial.name}
                <span className="fw-normal opacity-50 fs-16">
                  {" "}
                  {testimonial.role}
                </span>
              </h6>
              <ul className="style-none d-flex rating">
                {[...Array(testimonial.rating)].map((star, index) => (
                  <li key={index}>
                    <i className="bi bi-star-fill" />
                  </li>
                ))}
              </ul>
            </div>
            <span
              className="ribbon position-absolute"
              style={{ background: testimonial.color }}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonial;
