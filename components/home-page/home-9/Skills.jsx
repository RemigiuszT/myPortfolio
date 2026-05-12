const Skills = () => {
  const skills = [
    { name: "React/React Native", bgColor: "#FFF8F8" },
    { name: "TypeScript", bgColor: "#E4FCF9" },
    { name: "JavaScript", bgColor: "#E5F4FB" },
    { name: "Next.js", bgColor: "#F0F9E0" },
    { name: "Angular", bgColor: "#FFF0F0" },
    { name: "PHP", bgColor: "#F9EDFF" },
    { name: "Node.js", bgColor: "#E4FCF9" },
    { name: "Golang", bgColor: "#FFF9E6" },
    { name: "Python", bgColor: "#E5F4FB" },
    { name: "SQL/MySQL", bgColor: "#FFF8F8" },
    { name: "MongoDB", bgColor: "#F0F9E0" },
    { name: "Firebase", bgColor: "#F9EDFF" },
    { name: "Google Cloud", bgColor: "#E4FCF9" },
    { name: "Playwright", bgColor: "#FFF9E6" },
  ];

  return (
    <ul className="d-flex flex-wrap align-items-center style-none skils-list">
      {skills.map((skill, index) => (
        <li key={index}>
          <span style={{ backgroundColor: skill.bgColor }}>{skill.name}</span>
        </li>
      ))}
      <li>&amp; more…</li>
    </ul>
  );
};

export default Skills;
