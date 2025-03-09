const Tools = () => {
  const toolNames = [
    "Git & GitHub",
    "Jest & Cypress",
    "Docker",
    "JIRA",
    "Figma",
    "Node.js",
    "VS Code",
  ];

  return (
    <ul className="style-none tx-dark fs-20 tools-list">
      {toolNames.map((toolName) => (
        <li key={toolName}>{toolName}</li>
      ))}
    </ul>
  );
};

export default Tools;
