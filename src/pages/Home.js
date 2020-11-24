import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";
import Details from "../components/Details";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import Nav from "../components/Nav";

const Home = () => {
  const location = useLocation();
  const pathID = location.pathname.split("/")[2];
  const { upcoming, newGames, popular, search } = useSelector(
    (state) => state.games
  );
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames);
  }, [dispatch]);
  return (
    <StyledHome>
      <Nav />
      {pathID && <Details details={details} />}
      {search.length > 0 && (
        <GamesListWrap>
          <h2>search</h2>
          <GamesList>
            {search.map((game) => {
              return (
                <Game
                  key={game.id}
                  name={game.name}
                  date={game.released}
                  image={game.background_image}
                  id={game.id}
                />
              );
            })}
          </GamesList>
        </GamesListWrap>
      )}

      <GamesListWrap>
        <h2>Best Of The Year</h2>
        <GamesList>
          {popular.map((game) => {
            return (
              <Game
                key={game.id}
                name={game.name}
                date={game.released}
                image={game.background_image}
                id={game.id}
              />
            );
          })}
        </GamesList>
      </GamesListWrap>
      <GamesListWrap>
        <h2>UpComing</h2>
        <GamesList>
          {upcoming.map((game) => {
            return (
              <Game
                key={game.id}
                name={game.name}
                date={game.released}
                image={game.background_image}
                id={game.id}
              />
            );
          })}
        </GamesList>
      </GamesListWrap>
      <GamesListWrap>
        <h2>newGames</h2>
        <GamesList>
          {newGames.map((game) => {
            return (
              <Game
                key={game.id}
                name={game.name}
                date={game.released}
                image={game.background_image}
                id={game.id}
              />
            );
          })}
        </GamesList>
      </GamesListWrap>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  @media (min-width: 768px) {
    width: 95%;
    margin: 0 auto;
  }
`;

const GamesListWrap = styled(motion.div)`
  padding-left: 15px;
  padding-right: 15px;
  h2 {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;
const GamesList = styled(motion.div)`
  margin-left: -15px;
  margin-right: -15px;
  display: flex;
  flex-wrap: wrap;
`;

export default Home;
