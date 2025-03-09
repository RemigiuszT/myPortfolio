"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { FaReact, FaMobileAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

const counters = [
  {
    icon: <FaReact />,
    title: "React Apps",
    value: 10,
    suffix: "+",
    description: "Production apps built",
  },
  {
    icon: <SiTypescript />,
    title: "TypeScript",
    value: 3,
    suffix: "yrs",
    description: "Commercial experience",
  },
  {
    icon: <SiNextdotjs />,
    title: "Next.js",
    value: 5,
    suffix: "SEO",
    description: "Optimized projects",
  },
  {
    icon: <FaMobileAlt />,
    title: "React Native",
    value: 2,
    suffix: "apps",
    description: "Mobile deployments",
  },
];

const Counter = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <>
      {counters.map((counter, index) => (
        <div key={index} className="col-lg-3 col-sm-6">
          <div
            className="counter-block-one text-center"
            ref={ref}
            data-aos="fade-up"
            data-aos-delay={`${100 * index}`}
          >
            <div className="icon-bg">
              <div className="icon-img d-flex justify-content-center">
                <div className="tech-icon">
                  {React.cloneElement(counter.icon, {
                    size: 40,
                    color: "#2F2F2F",
                  })}
                </div>
              </div>
              <div className="icon-title text-uppercase fs-18 tx-dark mt-25 lg-mt-30">
                {counter.title}
              </div>
            </div>
            <div className="main-count font-recoleta fw-light tx-dark mt-25 lg-mt-20">
              {inView ? (
                <CountUp
                  end={counter.value}
                  suffix={" " + counter.suffix}
                  duration={2}
                />
              ) : (
                <span>0{counter.suffix}</span>
              )}
            </div>
            <div className="fs-16 opacity-75 mt-2">{counter.description}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Counter;
