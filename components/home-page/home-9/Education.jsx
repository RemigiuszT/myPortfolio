import React from "react";

const Education = () => {
  const educationItems = [
    {
      degree: "IT in Business, Cybersecurity (Masters)",
      university: "WSB Merito University, Toruń",
    },
    {
      degree: "IT in Business, Front-end (Bachelors)",
      university: "WSB Merito University, Toruń",
    },
  ];

  return (
    <>
      {educationItems.map((item, i) => (
        <React.Fragment key={i}>
          <p className="text-lg tx-dark">{item.degree}</p>
          <div className="tx-sp2 text-uppercase">{item.university}</div>
        </React.Fragment>
      ))}
    </>
  );
};

export default Education;
