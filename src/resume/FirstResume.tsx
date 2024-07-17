"use client";

import styled from "styled-components";
import MainContent from "./Contents/MainContent";
import Introduction from "./Contents/Introduction";
import Activities from "./Contents/Activities";
import Skill from "./Contents/Skill";
import Career from "./Contents/Career";
import Project from "./Contents/Project";

const Container = styled.div`
  background-color: white;
  max-width: 900px;
  padding: 140px 0 0 80px;
  box-shadow: 0px 7px 8px gray;
`;

const FirstResume = () => {
  return (
    <Container>
      <MainContent />
      <Introduction />
      <Activities />
      <Skill />
      <Career />
      <Project />
    </Container>
  );
};

export default FirstResume;
