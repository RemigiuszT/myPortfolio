const Tools = () => {
  const toolNames = [
    "Git & GitHub",
    "Docker",
    "Playwright",
    "Google Cloud",
    "JIRA",
    "Figma",
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
