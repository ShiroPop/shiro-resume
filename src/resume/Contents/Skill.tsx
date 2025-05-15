import styled from "styled-components";
import { Grid, Text, Line, BText, Li, Ul } from "./ElementStyle";
import MenuTitle from "../menuTitle";

const Container = styled.div`
  padding: 30px 80px 40px 0;
`;

const Skill = () => {
  return (
    <Container>
      <MenuTitle Kr="스킬" Eng="Skill" />
      <Line />
      <Grid rowgap="20px">
        <BText>React</BText>
        <Text>
          <Ul>
            <Li>Hook을 사용해 비즈니스 로직을 적절히 분리해 낼 수 있습니다.</Li>
            <Li>
              Recoil, React-query, React-hook-form 등을 이용한 상태 관리를 할 수
              있습니다.
            </Li>
          </Ul>
        </Text>

        <BText>HTML/CSS</BText>
        <Text>
          <Ul>
            <Li>웹 표준을 지키려 노력합니다.</Li>
            <Li>css-in-js(Styled-Component)를 활용할 수 있습니다.</Li>
          </Ul>
        </Text>

        <BText>JavaScript/TypeScript</BText>
        <Text>
          <Ul>
            <Li>ES2015 이후 자바스크립트 문법에 익숙합니다.</Li>
            <Li>typescript를 사용하며 적절한 타입을 활용할 수 있습니다.</Li>
          </Ul>
        </Text>

        <BText>Figma</BText>
        <Text>
          <Ul>
            <Li>디자인 시스템을 정리하여 적용할 수 있습니다.</Li>
            <Li>컴포넌트화하여 상태를 관리할 수 있습니다.</Li>
          </Ul>
        </Text>
      </Grid>
    </Container>
  );
};

export default Skill;
