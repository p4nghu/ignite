import { motion } from "framer-motion";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
//IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const Details = ({ details: { details, screenShots } }) => {
  const isLoading = useSelector((state) => state.details.isLoading);

  const platforms = details.platforms || [];
  const platformsName = platforms.reduce((accumulator, currentValue) => {
    return [...accumulator, currentValue.platform.name];
  }, []);

  const history = useHistory();
  const handleExitDetail = (e) => {
    if (e.target.id === "shadow") {
      history.push("/");
      document.body.style.overflow = "auto";
    }
  };

  //Get Stars
  const getStars = (rating) => {
    const stars = [];
    const r = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= r) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

  //GET PLATFORM IMAGES
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  return (
    !isLoading && (
      <StyledDetailsWrap onClick={handleExitDetail} id="shadow">
        <StyledDetails>
          <Header>
            <div className="meta">
              <h2>{details.name}</h2>
              <div className="rating">
                {getStars(details.rating).map((t) => t)}
              </div>
            </div>
            <StyledPlatforms>
              <h3>Platforms</h3>
              {platformsName.map((p,i) => {
                return <img src={getPlatform(p)} alt="p" key={i} />;
              })}
            </StyledPlatforms>
          </Header>
          <div className="description">
            <p>{details.description_raw}</p>
          </div>
          <div className="gallery">
            {screenShots.map((screenShot) => {
              return (
                <img
                  src={screenShot.image}
                  alt={details.name}
                  key={screenShot.id}
                />
              );
            })}
          </div>
        </StyledDetails>
      </StyledDetailsWrap>
    )
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledPlatforms = styled.div`
  h3 {
    text-align: right;
  }
  img {
    padding-left: 2rem;
  }
`;

const StyledDetailsWrap = styled(motion.div)`
  h2 {
    margin: 1rem 0;
  }
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 2020;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;
const StyledDetails = styled(motion.div)`
  width: 80%;
  padding: 2rem 5rem;
  margin: 0 auto;
  background: #fff;
  .gallery {
    img {
      padding-bottom: 4rem;
      width: 100%;
      vertical-align: middle;
    }
  }
  .description {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

export default Details;
