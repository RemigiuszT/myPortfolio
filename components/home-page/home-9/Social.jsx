const Social = () => {
  const socialIcons = [
    {
      href: "https://www.facebook.com/remigiusz.terek",
      iconClass: "fab fa-facebook-square",
    },
    {
      href: "https://www.linkedin.com/in/remigiusz-terek-b6266b230/",
      iconClass: "fab fa-linkedin",
    },
    {
      href: "https://github.com/RemigiuszT",
      iconClass: "fab fa-github",
    },
  ];

  return (
    <ul className="d-flex justify-content-center social-icon style-none">
      {socialIcons.map((socialIcon, index) => (
        <li key={index}>
          <a href={socialIcon.href}>
            <i className={socialIcon.iconClass} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
