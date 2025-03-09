const Block = () => {
  const blocks = [
    {
      iconSrc: "/images/icon/icon_40.svg",
      bgColor: "#EBF8F8",
      title: "Web Applications",
      desc: "React • TypeScript • Next.js",
    },
    {
      iconSrc: "/images/icon/icon_55.svg",
      bgColor: "#FFF8F8",
      title: "Mobile Apps",
      desc: "React Native • Firebase • Algolia",
    },
    {
      iconSrc: "/images/icon/icon_39.svg",
      bgColor: "#F3F5FF",
      title: "Full-stack Solutions",
      desc: "Golang • Node.js • MongoDB",
    },
  ];

  return (
    <>
      {blocks.map((block, index) => (
        <div
          key={index}
          className="col-md-4 "
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div
            className="card-style-six md-mt-30 text-center"
            style={{ backgroundColor: block.bgColor }}
          >
            <div className="icon d-flex align-items-end justify-content-center">
              <img src={block.iconSrc} alt="icon" className="lazy-img" />
            </div>
            <h4 className="mt-55 lg-mt-30">{block.title}</h4>
          </div>
          {/* /.card-style-six */}
        </div>
      ))}
    </>
  );
};

export default Block;
