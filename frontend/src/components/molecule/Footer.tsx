import { useEffect, useState } from "react";
import type { FooterData } from "../../types/datatypes";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [footerData, setFooterData] = useState<FooterData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/sections/footerSection")
      .then((res) => setFooterData(res.data.content))
      .catch((error) => console.log("Error Fetching BlogData", error));
  }, []);

  if (!footerData) return <div>Loading...</div>;

  return (
    <>
      <div className="footer-sub"       onClick={() => {
        navigate("/edit/footerSection");
      }}>
        <div className="footer-sub-right-section">
          <div className="footer-sub-right-section-content-wrapper">
            <div className="right-section-content-column-one">
              <h3>Shop</h3>
              <span className="down-arrow"></span>
              <ul className="column-one-list">
                {footerData.shopLinks.map((link, index) => (
                  <li key={index}>{link.text}</li>
                ))}
              </ul>
            </div>
            <div className="right-section-content-column-one">
              <h3>Sell</h3>
              <span className="down-arrow"></span>
              <ul className="column-one-list">
                {footerData.sellLinks.map((link, index) => (
                  <li key={index}>{link.text}</li>
                ))}
              </ul>
            </div>
            <div className="right-section-content-column-one">
              <h3>About</h3>
              <span className="down-arrow"></span>
              <ul className="column-one-list">
                {footerData.aboutLinks.map((link, index) => (
                  <li key={index}>{link.text}</li>
                ))}
              </ul>
            </div>
            <div className="right-section-content-column-one footer-spacing">
              <h3>Help</h3>
              <span className="down-arrow"></span>
              <ul className="column-one-list">
                {footerData.helpLinks.map((link, index) => (
                  <li key={index}>{link.text}</li>
                ))}
                <li className="footer-logos-container">
                  <div className="footer-logos-sub-container">
                    <span className="footer-logos-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M12,5.447c2.136,0,2.389,0.008,3.233,0.047c0.78,0.036,1.204,0.166,1.485,0.275c0.373,0.145,0.64,0.318,0.92,0.598 c0.28,0.28,0.453,0.546,0.598,0.92c0.11,0.282,0.24,0.706,0.275,1.485c0.038,0.844,0.047,1.097,0.047,3.233 s-0.008,2.389-0.047,3.233c-0.036,0.78-0.166,1.204-0.275,1.485c-0.145,0.373-0.318,0.64-0.598,0.92 c-0.28,0.28-0.546,0.453-0.92,0.598c-0.282,0.11-0.706,0.24-1.485,0.275c-0.843,0.038-1.096,0.047-3.233,0.047 s-2.389-0.008-3.233-0.047c-0.78-0.036-1.204-0.166-1.485-0.275c-0.373-0.145-0.64-0.318-0.92-0.598 c-0.28-0.28-0.453-0.546-0.598-0.92c-0.11-0.282-0.24-0.706-0.275-1.485c-0.038-0.844-0.047-1.097-0.047-3.233 S5.45,9.616,5.488,8.773c0.036-0.78,0.166-1.204,0.275-1.485c0.145-0.373,0.318-0.64,0.598-0.92c0.28-0.28,0.546-0.453,0.92-0.598 c0.282-0.11,0.706-0.24,1.485-0.275C9.611,5.455,9.864,5.447,12,5.447 M12,4.005c-2.173,0-2.445,0.009-3.298,0.048 C7.85,4.092,7.269,4.227,6.76,4.425C6.234,4.63,5.787,4.903,5.343,5.348C4.898,5.793,4.624,6.239,4.42,6.765 c-0.198,0.509-0.333,1.09-0.372,1.942C4.009,9.56,4,9.833,4,12.005c0,2.173,0.009,2.445,0.048,3.298 c0.039,0.852,0.174,1.433,0.372,1.942c0.204,0.526,0.478,0.972,0.923,1.417c0.445,0.445,0.891,0.718,1.417,0.923 c0.509,0.198,1.09,0.333,1.942,0.372c0.853,0.039,1.126,0.048,3.298,0.048s2.445-0.009,3.298-0.048 c0.852-0.039,1.433-0.174,1.942-0.372c0.526-0.204,0.972-0.478,1.417-0.923c0.445-0.445,0.718-0.891,0.923-1.417 c0.198-0.509,0.333-1.09,0.372-1.942C19.991,14.45,20,14.178,20,12.005s-0.009-2.445-0.048-3.298 c-0.039-0.852-0.174-1.433-0.372-1.942c-0.204-0.526-0.478-0.972-0.923-1.417c-0.445-0.445-0.891-0.718-1.417-0.923 c-0.509-0.198-1.09-0.333-1.942-0.372C14.445,4.014,14.173,4.005,12,4.005L12,4.005z"></path>
                        <path d="M12,7.897c-2.269,0-4.108,1.839-4.108,4.108S9.731,16.113,12,16.113s4.108-1.839,4.108-4.108S14.269,7.897,12,7.897z  M12,14.672c-1.473,0-2.667-1.194-2.667-2.667S10.527,9.339,12,9.339s2.667,1.194,2.667,2.667S13.473,14.672,12,14.672z"></path>
                        <circle cx="16.27" cy="7.735" r="0.96"></circle>
                      </svg>
                    </span>
                    <span className="footer-logos-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M20,5V19a1.007,1.007,0,0,1-1,1H15V13.776h2l0.336-2.3H15V9.659a0.912,0.912,0,0,1,1-1.031h1.5V6.55a11.284,11.284,0,0,0-1.641-.109c-2.2,0-3.3,1.219-3.3,3.039v1.992h-2v2.3h2V20H5a1.007,1.007,0,0,1-1-1V5A1.007,1.007,0,0,1,5,4H19A1.007,1.007,0,0,1,20,5Z"></path>
                      </svg>
                    </span>
                    <span className="footer-logos-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M12 3c-4.97 0-9 4.03-9 9 0 3.813 2.372 7.072 5.72 8.384-.08-.712-.15-1.807.03-2.585.164-.703 1.056-4.475 1.056-4.475s-.27-.54-.27-1.336c0-1.252.726-2.187 1.63-2.187.768 0 1.14.577 1.14 1.268 0 .773-.493 1.928-.746 2.998-.212.896.45 1.626 1.333 1.626 1.6 0 2.83-1.687 2.83-4.12 0-2.156-1.55-3.663-3.76-3.663-2.56 0-4.064 1.922-4.064 3.907 0 .773.297 1.603.67 2.054.073.09.083.168.06.26-.067.283-.22.895-.25 1.02-.038.165-.13.2-.3.12-1.124-.523-1.827-2.167-1.827-3.487 0-2.84 2.063-5.446 5.947-5.446 3.122 0 5.548 2.225 5.548 5.198 0 3.102-1.956 5.598-4.67 5.598-.912 0-1.77-.474-2.063-1.033l-.56 2.14c-.204.78-.753 1.76-1.12 2.358.842.26 1.737.402 2.665.402 4.97 0 9-4.03 9-9s-4.03-9-9-9"></path>
                      </svg>
                    </span>
                    <span className="footer-logos-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M20,12c0,5.664,0,5.664-8,5.664s-8,0-8-5.664,0-5.664,8-5.664S20,6.333,20,12Zm-5,0L10,9v6Z"></path>
                      </svg>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="right-section-content-column-one footer-spacing">
              <div className="footer-logos-container-mobile footer-logos-container">
                <div className="footer-logos-sub-container">
                  <span className="footer-logos-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M12,5.447c2.136,0,2.389,0.008,3.233,0.047c0.78,0.036,1.204,0.166,1.485,0.275c0.373,0.145,0.64,0.318,0.92,0.598 c0.28,0.28,0.453,0.546,0.598,0.92c0.11,0.282,0.24,0.706,0.275,1.485c0.038,0.844,0.047,1.097,0.047,3.233 s-0.008,2.389-0.047,3.233c-0.036,0.78-0.166,1.204-0.275,1.485c-0.145,0.373-0.318,0.64-0.598,0.92 c-0.28,0.28-0.546,0.453-0.92,0.598c-0.282,0.11-0.706,0.24-1.485,0.275c-0.843,0.038-1.096,0.047-3.233,0.047 s-2.389-0.008-3.233-0.047c-0.78-0.036-1.204-0.166-1.485-0.275c-0.373-0.145-0.64-0.318-0.92-0.598 c-0.28-0.28-0.453-0.546-0.598-0.92c-0.11-0.282-0.24-0.706-0.275-1.485c-0.038-0.844-0.047-1.097-0.047-3.233 S5.45,9.616,5.488,8.773c0.036-0.78,0.166-1.204,0.275-1.485c0.145-0.373,0.318-0.64,0.598-0.92c0.28-0.28,0.546-0.453,0.92-0.598 c0.282-0.11,0.706-0.24,1.485-0.275C9.611,5.455,9.864,5.447,12,5.447 M12,4.005c-2.173,0-2.445,0.009-3.298,0.048 C7.85,4.092,7.269,4.227,6.76,4.425C6.234,4.63,5.787,4.903,5.343,5.348C4.898,5.793,4.624,6.239,4.42,6.765 c-0.198,0.509-0.333,1.09-0.372,1.942C4.009,9.56,4,9.833,4,12.005c0,2.173,0.009,2.445,0.048,3.298 c0.039,0.852,0.174,1.433,0.372,1.942c0.204,0.526,0.478,0.972,0.923,1.417c0.445,0.445,0.891,0.718,1.417,0.923 c0.509,0.198,1.09,0.333,1.942,0.372c0.853,0.039,1.126,0.048,3.298,0.048s2.445-0.009,3.298-0.048 c0.852-0.039,1.433-0.174,1.942-0.372c0.526-0.204,0.972-0.478,1.417-0.923c0.445-0.445,0.718-0.891,0.923-1.417 c0.198-0.509,0.333-1.09,0.372-1.942C19.991,14.45,20,14.178,20,12.005s-0.009-2.445-0.048-3.298 c-0.039-0.852-0.174-1.433-0.372-1.942c-0.204-0.526-0.478-0.972-0.923-1.417c-0.445-0.445-0.891-0.718-1.417-0.923 c-0.509-0.198-1.09-0.333-1.942-0.372C14.445,4.014,14.173,4.005,12,4.005L12,4.005z"></path>
                      <path d="M12,7.897c-2.269,0-4.108,1.839-4.108,4.108S9.731,16.113,12,16.113s4.108-1.839,4.108-4.108S14.269,7.897,12,7.897z  M12,14.672c-1.473,0-2.667-1.194-2.667-2.667S10.527,9.339,12,9.339s2.667,1.194,2.667,2.667S13.473,14.672,12,14.672z"></path>
                      <circle cx="16.27" cy="7.735" r="0.96"></circle>
                    </svg>
                  </span>
                  <span className="footer-logos-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M20,5V19a1.007,1.007,0,0,1-1,1H15V13.776h2l0.336-2.3H15V9.659a0.912,0.912,0,0,1,1-1.031h1.5V6.55a11.284,11.284,0,0,0-1.641-.109c-2.2,0-3.3,1.219-3.3,3.039v1.992h-2v2.3h2V20H5a1.007,1.007,0,0,1-1-1V5A1.007,1.007,0,0,1,5,4H19A1.007,1.007,0,0,1,20,5Z"></path>
                    </svg>
                  </span>
                  <span className="footer-logos-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M12 3c-4.97 0-9 4.03-9 9 0 3.813 2.372 7.072 5.72 8.384-.08-.712-.15-1.807.03-2.585.164-.703 1.056-4.475 1.056-4.475s-.27-.54-.27-1.336c0-1.252.726-2.187 1.63-2.187.768 0 1.14.577 1.14 1.268 0 .773-.493 1.928-.746 2.998-.212.896.45 1.626 1.333 1.626 1.6 0 2.83-1.687 2.83-4.12 0-2.156-1.55-3.663-3.76-3.663-2.56 0-4.064 1.922-4.064 3.907 0 .773.297 1.603.67 2.054.073.09.083.168.06.26-.067.283-.22.895-.25 1.02-.038.165-.13.2-.3.12-1.124-.523-1.827-2.167-1.827-3.487 0-2.84 2.063-5.446 5.947-5.446 3.122 0 5.548 2.225 5.548 5.198 0 3.102-1.956 5.598-4.67 5.598-.912 0-1.77-.474-2.063-1.033l-.56 2.14c-.204.78-.753 1.76-1.12 2.358.842.26 1.737.402 2.665.402 4.97 0 9-4.03 9-9s-4.03-9-9-9"></path>
                    </svg>
                  </span>
                  <span className="footer-logos-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M20,12c0,5.664,0,5.664-8,5.664s-8,0-8-5.664,0-5.664,8-5.664S20,6.333,20,12Zm-5,0L10,9v6Z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-sub-applink-left-section">
          <div className="logo-container">
            <svg
              width="60px"
              height="60px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M6.5 3.1v6s2.1 0 3.2-.1c.6.1 1.1-.3 1.2-.9.1-.1.1-.1.1-.2l.3-1.3h1l-.2 2.8.1 2.9h-1l-.2-1.1c-.1-.6-.6-1.1-1.2-1.1C9 10 6.5 10 6.5 10v5c0 1 .5 1.4 1.6 1.4h3.4c1.2.2 2.4-.5 2.8-1.6l.9-2h.8c-.1.4-.5 4-.6 4.8 0 0-3.1-.1-4.4-.1H5.2l-3.5.1v-.9l1.1-.2c.9-.1 1.2-.3 1.2-1 0 0 .1-2.2.1-5.9S4 3.9 4 3.9c0-.8-.3-.9-1.1-1.1l-1.1-.2v-.9l3.4.1h6.5c1.3 0 3.5-.2 3.5-.2s-.1 1.3-.2 4.5h-.9L13.8 5c-.3-1.5-.8-2.2-1.7-2.2H7c-.5 0-.5.1-.5.3zm13.2.7h1v3.4L24 7l-.2 1.5-3.2-.2v6c0 1.7.6 2.4 1.5 2.4.7 0 1.4-.3 1.8-.9l.5.6c-.6 1.1-1.9 1.8-3.2 1.7-1.5.1-2.8-1-2.9-2.5V8.4h-1.9v-.8c1.6-.2 2.8-1.2 3.3-3.8zm7 10.4l.6 1.5c.3.9 1.2 1.4 2.1 1.3 1.4 0 2-.7 2-1.6 0-2.8-5.4-2-5.4-5.7 0-2.1 1.7-3.1 3.9-3.1 1.1 0 2.1.2 3.2.5-.2.9-.2 1.8-.2 2.7l-.9.1-.6-1.6c-.4-.5-1-.8-1.6-.7-1 0-2 .4-2 1.5 0 2.5 5.6 2 5.6 5.7 0 2.1-1.9 3.2-4.1 3.2-1.2 0-2.3-.3-3.4-.7.1-1 .1-2.1 0-3.1h.8zM33 22c.2-1 .4-2 .6-3.1l.9-.1.3 1.7c.1.5.5.8 1 .7 1.1 0 2.4-.6 3.7-2.9-.6-1.4-2.3-5.8-3.8-9.3-.4-.9-.5-1-1-1.1l-.4-.2V7l2.4.1 3-.2v.8l-.7.2c-.4 0-.8.3-.8.7 0 .1 0 .2.1.3.2.5 1.5 4.1 2.4 6.6.8-1.7 2.4-5.5 2.6-6.2.1-.2.1-.4.2-.6 0-.4-.4-.8-.8-.8l-.7-.1v-.9l2.3.1 2.1-.1v.8l-.4.4c-.6.1-1 .5-1.2 1.1l-3.6 8.4c-2.1 4.8-4.3 5.2-5.9 5.2-.8-.1-1.6-.3-2.3-.8z"></path>
            </svg>
          </div>
          <div className="download-btn">
            <span>Download the Etsy App</span>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-section-one">
          <div className="footer-section-one-wrapper">
            <div className="footer-section-one-left">
              <div className="footer-section-one-left-container">
                <div className="footer-flag">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <title>INDIA</title>
                    <defs>
                      <path
                        d="M.003 10c0 5.516 4.485 10.002 10 10.002s10-4.486 10-10c0-5.516-4.485-10-10-10s-10 4.484-10 10z"
                        id="a"
                      ></path>
                      <path
                        d="M10.003 20.002c5.515 0 10-4.486 10-10 0-5.516-4.485-10-10-10s-10 4.484-10 10c0 5.514 4.485 10 10 10z"
                        id="d"
                      ></path>
                      <filter
                        x="-2.5%"
                        y="-2.5%"
                        width="105%"
                        height="105%"
                        filterUnits="objectBoundingBox"
                        id="c"
                      >
                        <feGaussianBlur
                          stdDeviation=".5"
                          in="SourceAlpha"
                          result="shadowBlurInner1"
                        ></feGaussianBlur>
                        <feOffset
                          in="shadowBlurInner1"
                          result="shadowOffsetInner1"
                        ></feOffset>
                        <feComposite
                          in="shadowOffsetInner1"
                          in2="SourceAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                          result="shadowInnerInner1"
                        ></feComposite>
                        <feColorMatrix
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                          in="shadowInnerInner1"
                        ></feColorMatrix>
                      </filter>
                    </defs>
                    <g fill="none" fill-rule="evenodd">
                      <mask id="b" fill="#fff">
                        <use xlinkHref="#a"></use>
                      </mask>
                      <path
                        fill="green"
                        mask="url(#b)"
                        d="M0 20h20v-6H0"
                      ></path>
                      <path fill="#FFF" mask="url(#b)" d="M0 14V6h20v8"></path>
                      <path fill="orange" mask="url(#b)" d="M0 6h20V0H0"></path>
                      <use filter="url(#c)" xlinkHref="#d" fill="#000"></use>
                    </g>
                    <g transform="translate(10,10)">
                      <circle r="0.8" fill="#008"></circle>
                      <circle r="0.5" fill="#fff"></circle>
                      <circle r="0.8" fill="#008"></circle>
                      <g id="j">
                        <g id="i">
                          <g id="h">
                            <g id="g">
                              <circle
                                r="0.3"
                                fill="#008"
                                transform="rotate(2.5) translate(2.5)"
                              ></circle>
                              <path
                                fill="#008"
                                d="M 0, 0.9, C 0.6,4 0,2 0,2 0,2 -0.6,0 -0.6, L 0,12 z"
                              ></path>
                            </g>
                            <use xlinkHref="#g" transform="rotate(15)"></use>
                          </g>
                          <use xlinkHref="#h" transform="rotate(30)"></use>
                        </g>
                        <use xlinkHref="#i" transform="rotate(60)"></use>
                      </g>
                      <use xlinkHref="#j" transform="rotate(120)"></use>
                      <use xlinkHref="#j" transform="rotate(-120)"></use>
                    </g>
                  </svg>
                </div>
                <span>
                  <span className="footer-text">
                    {footerData.countryInfo.country}
                  </span>
                  |{" "}
                  <span className="footer-text">
                    {footerData.countryInfo.language}
                  </span>
                  |
                  <span className="footer-text">
                    {" "}
                    {footerData.countryInfo.currency}
                  </span>
                </span>
              </div>
              <div className="footer-section-one-right-container">
                <span className="copyright-span">{footerData.copyright}</span>
                <ul>
                  <span>
                    {footerData.footerBottomLinks
                      .slice(0, 3)
                      .map((link, index) => (
                        <li key={index}>{link}</li>
                      ))}
                  </span>
                  {footerData.footerBottomLinks.slice(3).map((link, index) => (
                    <li key={index + 3}>{link}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
