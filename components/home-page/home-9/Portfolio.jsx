"use client";

import { useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  const [filter, setFilter] = useState("*");

  const portfolioItems = [
    {
      id: 1,
      category: "web-development",
      name: "Dance Studio FLY",
      tag: "Full Stack",
      image: "/images/project_1.jpg",
      url: "https://www.studiotancafly.pl",
      projectInfo: {
        date: "2024-Present",
        clientName: "Dance Studio FLY",
        projectType: "Next.js • Firebase • SEO",
      },
    },
    {
      id: 2,
      category: "web-development",
      name: "Zalesie Resort",
      tag: "WIP",
      image: "/images/project_2.jpg",
      projectInfo: {
        date: "2024-Present",
        clientName: "Private Client",
        projectType: "Next.js • Firebase • SEO",
      },
    },
  ];

  const filteredItems =
    filter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4">
          <div className="title-style-five text-center text-lg-start md-mb-20">
            <h2 className="main-title font-recoleta fw-500 tx-dark">
              My
              <span className="d-inline-block position-relative">
                Recent
                <span
                  className="mark-bg"
                  style={{ backgroundColor: "#D9F5F8" }}
                />
              </span>
              Work.
            </h2>
          </div>
        </div>

        <div className="col-lg-8">
          <ul className="style-none text-center text-lg-end isotop-menu-wrapper g-control-nav-one">
            <li
              className={filter === "*" ? "is-checked" : ""}
              onClick={() => setFilter("*")}
            >
              All
            </li>
            <li
              className={filter === "web-development" ? "is-checked" : ""}
              onClick={() => setFilter("web-development")}
            >
              Web Apps
            </li>
          </ul>
        </div>
      </div>

      <div className="grid-2column pt-50 lg-pt-20 row">
        {filteredItems.map((item) => (
          <div
            className={`isotop-item ${item.category} col-lg-6 col-md-6`}
            key={item.id}
          >
            <div className="portfolio-block-one mt-40 xs-mt-30">
              <div className="img-meta position-relative">
                <Image
                  width={640}
                  height={666}
                  src={item.image}
                  alt={item.name}
                  className="w-100"
                />

                {item.url && (
                  <div className="hover-state tran3s position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fancybox tran3s"
                      title="Visit live website"
                    >
                      <i className="bi bi-box-arrow-up-right fs-1 text-white rounded-circle p-3" />
                    </a>
                  </div>
                )}
              </div>
              <div className="title tran3s d-flex flex-column justify-content-center align-items-center">
                <span className="tag">{item.tag}</span>
                <span className="pj-name tran3s fw-500">{item.name}</span>
                <div className="project-details fs-14 mt-2">
                  {item.projectInfo.projectType}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="confidential-notice mt-60 text-center">
        <div className="fs-18 tx-dark mb-20">
          <i className="bi bi-file-lock fs-3 d-block mb-3" />
          Additional case studies available in CV
          <br />
          <span className="opacity-75">
            (protected by non-disclosure agreements)
          </span>
        </div>
        <a
          href="https://github.com/RemigiuszT"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-eight d-inline-flex align-items-center"
        >
          <i className="bi bi-github me-2" />
          View Public Repositories
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
