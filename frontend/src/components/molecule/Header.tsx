import axios from "axios";
import type { HeaderData } from "../../types/datatypes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const Header = () => {
  const [header, setHeader] = useState<HeaderData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/sections/header`)
      .then((res) => setHeader(res.data.content))
      .catch((error) => console.log("Error Fetching HeroSection", error));
  }, []);

  if (!header) return <div>Loading...</div>;

  return (
    <div
      className="wrappery"
      onClick={() => {
        navigate("/edit/header");
      }}
    >
      <header>
        <div className="logo-wrapper">
          <div className="logo-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 24"
              aria-hidden="true"
              focusable="false"
              aria-label={header.logo.altText}
            >
              <path d="M6.547,3.125v6.008c0,0,2.117,0,3.25-0.086c0.891-0.156,1.055-0.242,1.219-1.133l0.328-1.305h0.969l-0.164,2.852 l0.086,2.922h-0.977l-0.242-1.141c-0.242-0.812-0.57-0.977-1.219-1.055c-0.812-0.086-3.25-0.086-3.25-0.086v5.039 c0,0.969,0.492,1.383,1.625,1.383h3.414c1.055,0,2.109-0.086,2.766-1.625l0.883-1.953h0.82c-0.086,0.406-0.492,3.984-0.57,4.789 c0,0-3.086-0.078-4.383-0.078H5.25l-3.492,0.078v-0.883l1.133-0.25c0.82-0.164,1.062-0.406,1.062-1.055 c0,0,0.086-2.195,0.086-5.852c0-3.648-0.086-5.844-0.086-5.844c0-0.727-0.242-0.891-1.062-1.055L1.758,2.555V1.664l3.414,0.07h6.5 c1.297,0,3.484-0.234,3.484-0.234s-0.078,1.375-0.164,4.625h-0.891l-0.328-1.141c-0.32-1.461-0.805-2.188-1.703-2.188H6.961 C6.547,2.797,6.547,2.875,6.547,3.125z M19.703,3.766h0.977V7.18l3.336-0.164l-0.164,1.547l-3.25-0.25v6.016 c0,1.703,0.57,2.359,1.547,2.359c0.883,0,1.539-0.492,1.781-0.898l0.484,0.57c-0.484,1.133-1.859,1.703-3.164,1.703 c-1.617,0-2.93-0.969-2.93-2.836V8.398h-1.938V7.586C18.008,7.422,19.219,6.445,19.703,3.766z M26.695,14.242l0.648,1.547 c0.242,0.648,0.812,1.305,2.109,1.305c1.383,0,1.953-0.734,1.953-1.625c0-2.766-5.445-1.953-5.445-5.688c0-2.109,1.703-3.094,3.898-3.094c0.977,0,2.438,0.164,3.172,0.492c-0.164,0.812-0.25,1.867-0.25,2.68l-0.805,0.078l-0.57-1.625 c-0.164-0.398-0.82-0.727-1.625-0.727c-0.977,0-1.953,0.406-1.953,1.461c0,2.516,5.609,1.953,5.609,5.688c0,2.117-1.867,3.25-4.148,3.25c-1.703,0-3.414-0.656-3.414-0.656c0.164-0.969,0.086-2.023,0-3.086H26.695z M33.031,22.039 c0.242-0.891,0.406-2.023,0.57-3.086l0.891-0.078l0.328,1.703c0.078,0.406,0.32,0.734,0.969,0.734c1.055,0,2.438-0.648,3.742-2.922 c-0.578-1.383-2.281-5.844-3.828-9.258c-0.406-0.898-0.484-0.977-1.047-1.141l-0.414-0.156v-0.82l2.445,0.086l3-0.164V7.75 l-0.734,0.164c-0.57,0.078-0.805,0.398-0.805,0.727c0,0.086,0,0.164,0.078,0.328c0.156,0.492,1.461,4.141,2.438,6.578c0.805-1.703,2.352-5.523,2.594-6.172c0.086-0.328,0.164-0.406,0.164-0.648c0-0.414-0.242-0.656-0.805-0.812L42.039,7.75V6.938 l2.281,0.078l2.109-0.078V7.75l-0.406,0.32c-0.812,0.328-0.898,0.406-1.219,1.062l-3.57,8.359 c-2.117,4.797-4.312,5.203-5.852,5.203C34.406,22.695,33.672,22.445,33.031,22.039z"></path>
            </svg>
          </div>
        </div>
        <nav className="categories-section">
          <div className="categories-nav-wrapper">
            <button className="categories-btn">
              <span className="burger-nav">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 18 18"
                >
                  <rect x="2" y="8" width="14" height="2"></rect>
                  <rect x="2" y="13" width="14" height="2"></rect>
                  <rect x="2" y="3" width="14" height="2"></rect>
                </svg>
              </span>
              {header.categories.button}
            </button>
          </div>
        </nav>
        <div className="search-bar-container">
          <div className="search-bar-wrapper">
            <form>
              <div className="search-bar-bg">
                <input placeholder={header.search.placeholder} type="text" />
                <button className="search-icon-btn">
                  <div className="search-icon-bg"></div>
                  <span className="search-icon-span">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.5 19a8.46 8.46 0 0 0 5.262-1.824l4.865 4.864 1.414-1.414-4.865-4.865A8.5 8.5 0 1 0 10.5 19m0-2a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="right-section">
          <ul className="header-right-list">
            <li>
              <span className="sign-in-div">{header.navigation.signIn}</span>
            </li>
            <li>
              <span className="country-icon-div">
                <span className="flag-svg-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <title>{header.navigation.country}</title>
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
                </span>
              </span>
            </li>
            <li className="fav-container">
              <span className="fav-div-wrapper fav-div-margin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"
                  ></path>
                </svg>
              </span>
            </li>
            <li className="fav-container">
              <span className="fav-div-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.535 7A4 4 0 0 1 12 2.354 4 4 0 0 1 18.465 7H22v9h-1v6H3v-6H2V7zm9.466 0H13V5a2 2 0 1 1 2.001 2M11 5a2 2 0 1 0-2.001 2H11zm-.764 4c-.55.614-1.348 1-2.236 1v2a4.98 4.98 0 0 0 3-1v3H4V9zM13 11c.836.628 1.874 1 3 1v-2a3 3 0 0 1-2.236-1H20v5h-7zm-8 5v4h6v-4zm8 4v-4h6v4z"
                  ></path>
                </svg>
              </span>
            </li>
            <li className="fav-container">
              <span className="fav-div-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="m5.766 5-.618-3H1v2h2.518l2.17 10.535L6.18 17h14.307l2.4-12zM7.82 15l-1.6-8h14.227l-1.6 8z"
                  ></path>
                  <path d="M10.667 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8.333 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
                </svg>
              </span>
            </li>
          </ul>
        </div>
      </header>
      <div className="tablet-search-container">
        <div className="tablet-burger-nav">
          <span className="nav-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M21 7H3V5h18zm-5 6H3v-2h13zm5 6H3v-2h18z"></path>
            </svg>
          </span>
        </div>
        <div className="search-bar-wrapper">
          <form>
            <div className="search-bar-bg">
              <input placeholder={header.search.placeholder} type="text" />

              <button className="search-icon-btn">
                <div className="search-icon-bg"></div>
                <span className="search-icon-span">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.5 19a8.46 8.46 0 0 0 5.262-1.824l4.865 4.864 1.414-1.414-4.865-4.865A8.5 8.5 0 1 0 10.5 19m0-2a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <nav className="sub-header">
        <div className="sub-footer-container">
          <ul className="sub-footer-list">
            <li className="sub-footer-list-item">
              <div className="item-wrapper">
                <span className="gift-image-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.535 7A4 4 0 0 1 12 2.354 4 4 0 0 1 18.465 7H22v9h-1v6H3v-6H2V7zm9.466 0H13V5a2 2 0 1 1 2.001 2M11 5a2 2 0 1 0-2.001 2H11zm-.764 4c-.55.614-1.348 1-2.236 1v2a4.98 4.98 0 0 0 3-1v3H4V9zM13 11c.836.628 1.874 1 3 1v-2a3 3 0 0 1-2.236-1H20v5h-7zm-8 5v4h6v-4zm8 4v-4h6v4z"
                    ></path>
                  </svg>
                </span>
                <span className="subfooter-text-wrapper">
                  {header.subHeader.gifts}
                </span>
              </div>
            </li>
            <li className="sub-footer-list-item">
              <div className="item-wrapper">
                <span className="subfooter-text-wrapper">
                  {header.subHeader.charmShop}
                </span>
              </div>
            </li>

            <li className="sub-footer-list-item">
              <div className="item-wrapper">
                <span className="subfooter-text-wrapper">
                  {header.subHeader.homeFavorites}
                </span>
              </div>
            </li>

            <li className="sub-footer-list-item">
              <div className="item-wrapper">
                <span className="subfooter-text-wrapper">
                  {header.subHeader.fashionFinds}
                </span>
              </div>
            </li>

            <li className="sub-footer-list-item">
              <div className="item-wrapper">
                <span className="subfooter-text-wrapper registry-word">
                  {header.subHeader.registry}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
