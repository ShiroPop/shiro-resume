import styled from "styled-components";
import { Grid, BText, Text, Line, MText } from "./ElementStyle";
import MenuTitle from "../menuTitle";

const Container = styled.div`
  padding: 30px 80px 50px 0;
`;
const BTextQuote = styled.span`
  font-size: 15px;
  font-weight: 700;
  cursor: default;
  margin-left: -9px;
`;

const Introduction = () => {
  return (
    <Container>
      <MenuTitle Kr="소개" Eng="Introduction" />
      <Line />
      <Grid>
        <BText fontSize="14.5px">
          다양한 전공에 대한
          <br /> 높은 이해도를 가진 사람
        </BText>
        <Text fontSize="14px"></Text>
        <div>
          <BTextQuote>″안돼요″</BTextQuote>
          <BText fontSize="14.5px">
            보다는
            <br />
            문제를 파악하고 해결하려는 사람
          </BText>
        </div>
        <Text fontSize="14px"></Text>
        <BText fontSize="14.5px">의지할 수 있는 사람</BText>
        <Text fontSize="14px"></Text>
      </Grid>
    </Container>
  );
};

export default Introduction;
