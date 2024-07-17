import styled from "styled-components";
import { Grid, Text, Line } from "./ElementStyle";
import MenuTitle from "../menuTitle";

const Container = styled.div`
  padding: 30px 80px 50px 0;
`;

const Project = () => {
  return (
    <Container>
      <MenuTitle Kr="프로젝트" Eng="Project" />
      <Line />
      <Grid></Grid>
    </Container>
  );
};

export default Project;
