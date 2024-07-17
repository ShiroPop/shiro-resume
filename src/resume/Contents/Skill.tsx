import styled from "styled-components";
import { Grid, Text, Line } from "./ElementStyle";
import MenuTitle from "../menuTitle";

const Container = styled.div`
  padding: 30px 80px 50px 0;
`;

const Skill = () => {
  return (
    <Container>
      <MenuTitle Kr="스킬" Eng="Skill" />
      <Line />
      <Grid></Grid>
    </Container>
  );
};

export default Skill;
