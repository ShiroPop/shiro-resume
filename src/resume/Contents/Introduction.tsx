import styled from "styled-components";
import { Grid, BText, Text, Line, MText } from "./ElementStyle";
import MenuTitle from "../menuTitle";

const Container = styled.div`
  padding: 30px 80px 40px 0;
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
          클리브웍스 프로젝트는 15명의 개발자와 1인 디자이너가 함께 작업을
          했습니다. 다수의 개발자 사이 한 명의 디자이너가 작업을 하는 과정에서
          디자인 속도는 늦어질 수 밖에 없었고, 이런 상황에서 저는 전공 지식을
          살려 디자이너님을 도와
          <MText> 디자인 시스템</MText>을 제안드리며 정리를 도왔습니다. 뿐만
          아니라 개발을 진행하며 디자인 피드백 수용이 용이하도록 디자인 시스템에
          맞추어
          <MText> 컴포넌트화</MText>하는 등 개발 규칙을 제안하고 관리했습니다.
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
          개발 실력이 부족하여 두 개의 배열 사이 값을 교환하는 데 어려움을
          겪었던 때의 일입니다. 팀장님께 프로세스를 바꾸어도 괜찮은지 여쭙고
          백엔드에 양해를 구하여 배열의 값이 수정될 때마다 서버에 데이터를
          저장하여 refetch로 값을 관리했습니다.{" "}
          <MText>
            '못하겠다'라는 말보다 다른 방안을 찾아보고 주변에 의견을 구하여
            문제를 해결
          </MText>
          하고자 했습니다.
        </Text>
        <BText fontSize="14.5px">
          해야할 일을 정돈하고
          <br />
          놓치지 않으려는 꼼꼼한 사람
        </BText>
        <Text fontSize="14px">
          사소한 부분에서 통일성이 흐트러져 오류를 바로잡고 문구를 수정하느라
          일정이 지연되는 상황이었습니다. 수정이 필요한 부분에 대한 의견을
          정리하고, 수정 사항을 제시하면서 많은 부분을 컴포넌트화하거나 문서화를
          담당했습니다. 조회 Table, Date Picker 등을 공통으로 사용할 수 있도록
          하였으며, 에러 문구 또한 따로 정리하여 문서화하는 작업을 진행했습니다.
          이런 성격 덕에 이전 직장에서 팀장님과 팀원들 사이에서{" "}
          <MText>'의지가 되었던 직원'</MText>이라는 이야기를 들을 수 있었습니다.
        </Text>
      </Grid>
    </Container>
  );
};

export default Introduction;
