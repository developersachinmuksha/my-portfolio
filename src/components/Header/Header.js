import "../../App.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <span className="header-logo-img">
          <img src="logo.png" height={30} />
        </span>
      </div>

      <div className="header-menu">
        <a href="#tech-stack" className="header-menu-option">
          Tech stack
        </a>
        <a href="#projects" className="header-menu-option">
          Projects
        </a>
        <a href="#contact" className="header-menu-option">
          Contact
        </a>
        <div className="header-menu-social-icons">
          <a
            href="https://in.linkedin.com/in/sachin-muksha-3a004313b"
            target="_blank"
          >
            <svg
              className="header-menu-social-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clip-path="url(#clip0_14_33)">
                <path
                  d="M15.0001 0.599976C7.0471 0.599976 0.600098 7.04698 0.600098 15C0.600098 22.953 7.0471 29.4 15.0001 29.4C22.9531 29.4 29.4001 22.953 29.4001 15C29.4001 7.04698 22.9531 0.599976 15.0001 0.599976ZM11.4751 20.9685H8.5591V11.5845H11.4751V20.9685ZM9.9991 10.4325C9.0781 10.4325 8.4826 9.77997 8.4826 8.97297C8.4826 8.14948 9.0961 7.51648 10.0366 7.51648C10.9771 7.51648 11.5531 8.14948 11.5711 8.97297C11.5711 9.77997 10.9771 10.4325 9.9991 10.4325ZM22.1251 20.9685H19.2091V15.768C19.2091 14.5575 18.7861 13.7355 17.7316 13.7355C16.9261 13.7355 16.4476 14.292 16.2361 14.8275C16.1581 15.018 16.1386 15.288 16.1386 15.5565V20.967H13.2211V14.577C13.2211 13.4055 13.1836 12.426 13.1446 11.583H15.6781L15.8116 12.8865H15.8701C16.2541 12.2745 17.1946 11.3715 18.7681 11.3715C20.6866 11.3715 22.1251 12.657 22.1251 15.42V20.9685Z"
                  fill="#A7A7A7"
                />
              </g>
              <defs>
                <clipPath id="clip0_14_33">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
