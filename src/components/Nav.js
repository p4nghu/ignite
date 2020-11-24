import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { SearchGames } from "../actions/gamesAction";
const Nav = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSearch = (e, text) => {
    e.preventDefault();
    if (text) {
      dispatch(SearchGames(text));
    }
    setText("");
  };
  return (
    <StyledNav>
      <form role="search">
        <label htmlFor="search">Search for stuff</label>
        <input
          id="search"
          type="text"
          placeholder="Search..."
          autoComplete="off"
          autoFocus
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" onClick={(e) => handleSearch(e, text)}>
          Go
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  form {
    position: relative;
    width: 30rem;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    background:  #57bd84;
    border-radius: 0.7rem;
  }
  input,
  button {
    height: 4rem;
    font-family: "Lato", sans-serif;
    border: 0;
    color:  #2f2f2f;
    font-size: 1.8rem;
  }
  input[type="text"] {
    outline: 0; // <-- shold probably remove this for better accessibility, adding for demo aesthetics for now.
    width: 100%;
    background:  #fff;
    padding: 0 1.6rem;
    border-radius: 0.7rem;
    appearance: none; //for iOS input[type="search"] roundedness issue. border-radius alone doesn't work
    transition: all 0.3s cubic-bezier(0, 0, 0.43, 1.49);;
    transition-property: width, border-radius;
    z-index: 1;
    position: relative;
  }
  button {
    display: none; // prevent being able to tab to it
    position: absolute;
    top: 0;
    right: 0;
    width: 6rem;
    font-weight: bold;
    background: #57bd84;
    border-radius: 0 0.7rem 0.7rem 0;
  }
  input:not(:placeholder-shown) {
    border-radius: 0.7rem 0 0 0.7rem;
    width: calc(100% - 6rem);
    + button {
      display: block;
    }
  }
  label {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }
`;

export default Nav;
