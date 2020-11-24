import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";
import { Link } from "react-router-dom";
const Game = ({ name, date, image, id }) => {
  const dispatch = useDispatch();
  const handleClickCard = (id) => {
    dispatch(loadDetails(id));
    document.body.style.overflow = "hidden";
  };
  return (
    <StyledGame onClick={() => handleClickCard(id)}>
      <Card>
        <Link to={`/games/${id}`}>
          <h3>{name}</h3>
          <p>{date}</p>
          <img src={image} alt="game" />
        </Link>
      </Card>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 4rem;
  @media (min-width: 768px) {
    flex: 0 0 50%;
  }
  @media (min-width: 1200px) {
    flex: 0 0 33.3333%;
  }
`;
const Card = styled.div`
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  text-align: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    vertical-align: middle;
  }
  h3 {
    padding-top: 1.75rem;
    padding-bottom: 0em;
  }
  p {
    padding-bottom: 0.5rem;

  }
`;
export default Game;
