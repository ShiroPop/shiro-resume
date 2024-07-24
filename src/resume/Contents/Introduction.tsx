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
        <Text fontSize="14px">
          개발자 15명 사이 1인 디자이너와 함께 작업을 할때, 디자인 속도가 개발
          속도를 따라오지 못하고, 디자인 변경사항도 많았던 상황으로 업무가 밀린
          상황이었습니다. 저는 디자이너님을 도와
          <MText> 디자인 시스템</MText>을 제안하며 일부 시스템을 제시하였고,
          버튼이나 텍스트 필드와 같은 유사한 요소를 모아
          <MText> 컴포넌트화</MText> 하여 디자인 피드백 수용이 용이하도록 개발
          규칙을 제안하여 관리하였습니다.
        </Text>
        <div>
          <BTextQuote>″안돼요″</BTextQuote>
          <BText fontSize="14.5px">
            보다는
            <br />
            문제를 파악하고 해결하려는 사람
          </BText>
        </div>
        <Text fontSize="14px">
          조금 부끄러운 사례지만, 개발 실력이 부족하여 두 개의 배열 사이 값을
          교환하는데 어려움이 있었던 시점의 일입니다. 팀장님께 프로세스를
          바꾸어도 괜찮은지 여쭙고 백엔드에 양해를 구하여 배열의 값이 수정 될
          때마다 서버에 데이터를 저장하여 refetch로 값을 관리 했습니다.{" "}
          <MText>
            '못하겠다'는 말보다는 다른 해결법을 찾아보고 주변에 의견을 구하여
            문제를 해결
          </MText>
          하고자 합니다.
        </Text>
        <BText fontSize="14.5px">
          해야할 일을 정돈하고
          <br />
          놓치지 않으려는 꼼꼼한 사람
        </BText>
        <Text fontSize="14px">
          사소한 부분에서 통일성이 흐트러져 오류나 문구를 수정하며 일정이
          지연되는 상황이었습니다. 수정이 필요한 부분에 대한 의견을 정리하고,
          수정 사항을 제시하며 많은 부분을 컴포넌트화 하거나 문서화를
          담당했습니다. 조회 Table, Date Picker 등을 컴포넌트화 하였으며, 에러
          문구 또한 따로 정리하여 문서화 하는 작업을 진행했습니다.
        </Text>
      </Grid>
    </Container>
  );
};

export default Introduction;
