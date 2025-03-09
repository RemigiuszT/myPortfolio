import Link from "next/link";
import { navItems } from "@/data/menu";

const Sidebar = () => {
  const socialIcons = [
    {
      icon: "fab fa-facebook-f",
      url: "https://www.facebook.com/remigiusz.terek",
    },
    { icon: "fab fa-github", url: "https://github.com/RemigiuszT" },
    {
      icon: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/in/remigiusz-terek-b6266b230/",
    },
  ];

  return (
    <div
      className="offcanvas offcanvas-end sidebar-nav d-flex flex-column"
      tabIndex={-1}
      id="offcanvasRight"
    >
      <div className="offcanvas-header">
        <div className="logo">
          <Link href="/" className="d-block">
            <h3 style={{ marginRight: 10 }}>
              Remigiusz <br />
              Terek
            </h3>
          </Link>
        </div>
        <button
          type="button"
          className="close-btn tran3s"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="bi bi-x-lg" />
        </button>
      </div>
      {/* End header */}

      <div className="sidebar-nav-item">
        <ul className="style-none">
          {navItems.map((item, index) => (
            <li className="nav-item" key={index}>
              {item.submenuItems ? (
                <>
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                  >
                    {item.label}
                  </a>
                  <ul className="dropdown-menu">
                    {item.submenuItems.map((subitem, index) => (
                      <li key={index}>
                        <Link href={subitem.link} className="dropdown-item">
                          <span>{subitem.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a href={item.link}>{item.title}</a>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* End .sidebar-nav-item */}

      <ul className="d-flex social-icon style-none mt-auto">
        {socialIcons.map((item, index) => (
          <li key={index}>
            <a href={item.url}>
              <i className={item.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
