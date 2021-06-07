import React, { useState } from "react";
import { Link } from "gatsby";
import styled, { keyframes } from "styled-components";

// Assets
import css from "../assets/main.css";
import heroBG from "../assets/ID-Hero.jpg";
import heroMobile from "../assets/ID-Mobile.jpg";
import chairsSample from "../assets/chairs-sample.jpeg";
import lightingDesk from "../assets/lighting-desk.jpeg";

// Icons
const tagIcon = (color) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <path
        d="M30.41,20.58 L21.41,11.58 C21.05,11.22 20.55,11 20,11 L13,11 C11.9,11 11,11.9 11,13 L11,20 C11,20.55 11.22,21.05 11.59,21.42 L20.59,30.42 C20.95,30.78 21.45,31 22,31 C22.55,31 23.05,30.78 23.41,30.41 L30.41,23.41 C30.78,23.05 31,22.55 31,22 C31,21.45 30.77,20.94 30.41,20.58 Z M14.5,16 C13.67,16 13,15.33 13,14.5 C13,13.67 13.67,13 14.5,13 C15.33,13 16,13.67 16,14.5 C16,15.33 15.33,16 14.5,16 Z"
        id="path-1"
      ></path>
    </defs>
    <g
      id="Desktop"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g transform="translate(-269.000000, -443.000000)">
        <g transform="translate(258.000000, 432.000000)">
          <mask fill={color}>
            <use xlinkHref="#path-1"></use>
          </mask>
          <use fill={color} fillRule="nonzero" xlinkHref="#path-1"></use>
        </g>
      </g>
    </g>
  </svg>
);

const arrowIcon = (color) => (
  <svg
    width="18px"
    height="12px"
    viewBox="0 0 18 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-153.000000, -595.000000)" fill={color}>
        <g transform="translate(30.000000, 513.000000)">
          <polygon points="133.6 83.4 137.2 87 123 87 123 89 137.2 89 133.6 92.6 135 94 141 88 135 82" />
        </g>
      </g>
    </g>
  </svg>
);

// Products
const productList = [
  {
    id: "358",
    name: "Jason Wu Chair",
    variation: "Performance Velvet Rust",
    itemUrl: "#/jason-wu-chair",
    itemBtnText: "Shop now",
    categoryURL: "#/shop/chairs",
    categoryBtnText: "Shop all chairs",
    transform: {
      mobile: {
        top: "18.5rem",
        left: "6rem",
      },
      desktop: {
        top: "23rem",
        left: "10rem",
      },
    },
  },
  {
    id: "749",
    name: "Sloan Sectional",
    variation: "Vintage Plush Pewter",
    itemUrl: "#/sloan-sectional",
    itemBtnText: "Shop now",
    categoryURL: "#/shop/sectionals",
    categoryBtnText: "Shop all sectionals",
    transform: {
      mobile: {
        top: "19.5rem",
        left: "35rem",
      },
      desktop: {
        top: "23.5rem",
        left: "54rem",
      },
    },
  },
  {
    id: "949",
    name: "Brooks Coffee Table",
    variation: "White Wash Oak",
    itemUrl: "#/brooks-coffee-table",
    itemBtnText: "Shop now",
    categoryURL: "#/shop/tables",
    categoryBtnText: "Shop all tables",
    transform: {
      mobile: {
        top: "22rem",
        left: "13rem",
      },
      desktop: {
        top: "29rem",
        left: "20rem",
      },
    },
  },
  {
    id: "756",
    name: "Payton",
    variation: "Hand knotted rug",
    itemUrl: "#/payton-rug",
    itemBtnText: "Shop now",
    categoryURL: "#/shop/rugs",
    categoryBtnText: "Shop all rugs",
    transform: {
      mobile: {
        top: "28rem",
        left: "12rem",
      },
      desktop: {
        top: "39rem",
        left: "20rem",
      },
    },
  },
  {
    id: "756",
    name: "Reese Side Table",
    variation: "Painted Black",
    itemUrl: "#/reese-table",
    itemBtnText: "Shop now",
    categoryURL: "#/shop/tables",
    categoryBtnText: "Shop all tables",
    transform: {
      mobile: {
        top: "22rem",
        left: "52rem",
      },
      desktop: {
        top: "28rem",
        left: "82rem",
      },
    },
  },
];

// The Refresh Page
const RefreshSale = () => {
  const [state, setState] = useState({
    openDialog: -1,
    currentProduct: {},
  });

  // Product Tag/Circle
  const ProdInfo = (props) => {
    const tagColor = props.id === state.openDialog ? "#fff" : "#676564";
    return (
      <TagImg onClick={() => handleTagClick(props)} transform={props.transform} active={props.id === state.openDialog}>
        {tagIcon(tagColor)}
      </TagImg>
    );
  };

  // Handle click on product tag
  const handleTagClick = (props) => {
    console.log(props);
    const prodID = props.id;
    const currentProd = props;
    setState({
      ...state,
      openDialog: prodID,
      currentProduct: currentProd,
    });
  };

  // Invisible overlay behind content, click and closes all dialogs
  const handleBackgroundClick = () => {
    setState({
      ...state,
      openDialog: -1,
    });
  };

  // Dialog component
  const DialogComponent = (prod) => {
    if (!prod) return "";
    return (
      <Dialog show={prod.id === state.openDialog} transform={prod.transform}>
        <div className="dialog">
          <div className="dialog-top">
            <div className="dialog-title">
              <h3>{prod.name}</h3>
              <p>{prod.variation}</p>
            </div>

            <Link to={prod.itemUrl}>
              <IDButton>{prod.itemBtnText}</IDButton>
            </Link>
          </div>

          <Link className="link--arrow" to={prod.categoryURL}>
            {prod.categoryBtnText}
            {arrowIcon("#676564")}
          </Link>
        </div>
      </Dialog>
    );
  };

  // Render main page
  return (
    <div className="refresh-page">
      <div style={{ position: "relative" }}>
        <HeroCTA>
          <div className="cta-inner">
            <h1>the refresh sale</h1>
            <p style={{ fontWeight: "bold" }}>
              15% off sitewide to recharge your living space. Ends Friday, 2/19
            </p>
            <p className="hero-subtitle">
              15+ collections, 100+ fabrics, 20+ legs
            </p>
            <IDButton callout>
              Start customizing
              {arrowIcon("#fff")}
            </IDButton>
          </div>
        </HeroCTA>
        <DragPrompt>
          <span style={{ transform: "rotate(180deg)" }}>
            {arrowIcon("#fff")}
          </span>
          Drag to explore
          {arrowIcon("#fff")}
        </DragPrompt>
        <MobileDialog>
          {state.openDialog !== -1 && DialogComponent(state.currentProduct)}
        </MobileDialog>
        <div
          style={{
            overflow: "scroll",
            width: "100vw",
          }}
        >
          <RoomPreview>
            {productList.map((product) => ProdInfo(product, state))}
            <BackdropButton onClick={() => handleBackgroundClick()} />
            <DesktopDialog>
              {state.openDialog !== -1 && DialogComponent(state.currentProduct)}
            </DesktopDialog>
          </RoomPreview>
        </div>
      </div>

      {/* Bonus content */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 1rem" }}>
        <h2 style={{ textAlign: "center", margin: "2em 0" }}>
          Here’s what’s new
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "#633343",
              maxWidth: "580px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <img style={{ width: "100%" }} src={chairsSample} />
            <div style={{ padding: "0 1em 1em" }}>
              <h4
                style={{
                  color: "#fff",
                  fontSize: "1.75rem",
                  margin: "1rem 0 0.5rem",
                }}
              >
                Accent Chairs
              </h4>
              <p style={{ color: "#fff", fontSize: "1rem" }}>
                Add personality to your space with the Henley, Kinsley, and
                Rowan.
              </p>
            </div>
          </div>
          <div
            style={{
              background: "#344659",
              maxWidth: "580px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <img style={{ width: "100%" }} src={lightingDesk} />
            <div style={{ padding: "0 1em 1em" }}>
              <h4
                style={{
                  color: "#fff",
                  fontSize: "1.75rem",
                  margin: "1rem 0 0.5rem",
                }}
              >
                Lighting
              </h4>
              <p style={{ color: "#fff", fontSize: "1rem" }}>
                Let there be light
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const IDButton = styled.button`
  background: #dc6666;
  border-radius: ${(props) => (props.callout ? "30px" : "5px")};
  color: #fff;
  padding: ${(props) => (props.callout ? "1rem 2rem" : "0.5rem 1rem")};
`;

const breatheAnimation = keyframes`
  0% { opacity: 0 }
  5% { opacity: 0.5 }
  10% { opacity: 1 }
  80% { opacity: 1 }
  100% { opacity: 0 }
`;

const DragPrompt = styled.div`
  max-width: 216px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  color: #fff;
  font-size: 0.9rem;
  padding: 0.75rem 1rem;
  opacity: 0;
  animation-name: ${breatheAnimation};
  animation-duration: 6s;
  animation-iteration-count: 1;
  transition: 0.3s opacity ease-in-out;
`;

const HeroCTA = styled.div`
  position: absolute;
  text-align: center;
  z-index: 10;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 550px;

  h1 {
    color: #dc6666;
  }
  p {
    font-size: 1rem;
    margin-bottom: 0.9rem;
  }
  ${IDButton} {
    display: flex;
    margin: 0 auto;
    align-items: center;
    margin-top: 0.8rem;
    font-size: 1.0625rem;
    letter-spacing: 0.025rem;
    font-weight: 300;

    svg {
      margin-left: 1rem;
    }
  }
  .cta-inner {
    padding: 3rem 1rem 0;
  }
  .hero-subtitle {
    font-size: 0.9rem;
  }
`;

const RoomPreview = styled.div`
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 643px;
  width: 900px;
  background-image: url(${heroMobile});
  @media (min-width: 920px) {
    height: 880px;
    width: 1440px;
    margin: 0 auto;
    background-image: url(${heroBG});
  }
`;

const TagImg = styled.div`
  display: flex;
  background: ${(props) => (props.active ? "#dc6666" : "white")};
  box-shadow: 0 0 2px 0 rgba(21, 21, 21, 0.05),
    0 1px 5px 0 rgba(21, 21, 21, 0.15);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  transform: translate(
    ${(props) => props.transform.mobile.left},
    ${(props) => props.transform.mobile.top}
  );
  position: relative;
  z-index: 20;
  svg {
    width: 16px;
  }

  @media (min-width: 920px) {
    width: 40px;
    height: 40px;
    transform: translate(
      ${(props) => props.transform.desktop.left},
      ${(props) => props.transform.desktop.top}
    );
    svg {
      width: 20px;
    }
  }
`;

const Dialog = styled.div`
  position: absolute;
  display: ${(props) => (props.show ? "block" : "none")};
  margin: 0;
  border-radius: 5px;
  width: 100%;
  max-width: 320px;
  bottom: 1rem;
  left: 50%;
  background: #ffffff;
  box-shadow: 0 0 2px 0 rgba(21, 21, 21, 0.05),
    0 1px 5px 0 rgba(21, 21, 21, 0.15);
  z-index: 50;
  transform: translateX(-50%);

  @media (min-width: 920px) {
    left: ${(props) => props.transform.desktop.left};
    top: ${(props) => props.transform.desktop.top};
    bottom: auto;
  }

  h3 {
    font-weight: 400;
    font-size: 1.0625rem;
    line-height: 1.3;
    color: #676564;
    letter-spacing: 0.025rem;
  }
  p {
    font-size: 0.8125rem;
    margin: 0;
  }
  .dialog {
    padding: 0.875rem 1.25rem;
  }
  .dialog-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #dddddd;
  }
  .link--arrow {
    display: block;
    color: #676564;
    position: relative;
    line-height: 1;
    transition: color 400ms cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 0.8125rem;
    svg {
      margin-left: 1rem;
      margin-bottom: -2px;
    }
  }
`;

const MobileDialog = styled.div`
  display: block;
  @media (min-width: 920px) {
    display: none;
  }
`;
const DesktopDialog = styled.div`
  display: none;
  @media (min-width: 920px) {
    display: block;
  }
`;

const BackdropButton = styled.button`
  position: absolute;
  background: transparent;
  border: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  cursor: auto;
`;

export default RefreshSale;
