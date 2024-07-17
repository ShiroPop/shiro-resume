import styled from "styled-components";
import { Grid, Text, Line } from "./ElementStyle";
import MenuTitle from "../menuTitle";

const Container = styled.div`
  padding: 30px 80px 50px 0;
`;

const Career = () => {
  return (
    <Container>
      <MenuTitle Kr="경력" Eng="Career" />
      <Line />
      <Grid></Grid>
    </Container>
  );
};

export default Career;
