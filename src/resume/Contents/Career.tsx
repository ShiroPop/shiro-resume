import styled from "styled-components";
import {
  Grid,
  Text,
  Line,
  GrayText,
  BText,
  FlexBetween,
  Ul,
  Li,
  FlexRight,
} from "./ElementStyle";
import MenuTitle from "../menuTitle";

const Container = styled.div`
  padding: 30px 80px 40px 0;
`;

const Career = () => {
  const careerArray = [
    {
      public: true,
      startDate: new Date(2022, 9, 24),
      endDate: new Date(2023, 5, 24),
      company: "RMSoft",
      rename: "Akiaka",
      job: "프론트엔드개발 매니저",
      story: "",
      work: [
        "프로젝트 기획",
        "규칙·명세서·디자인시스템 제안",
        "공통 컴포넌트(모달 및 오프캔버스 등 제작)",
        "가데이터(Prisma)를 활용한 테스트",
      ],
    },
  ];
  return (
    <Container>
      <MenuTitle
        Kr="경력"
        Eng="Career"
        children={<GrayText fontSize="12px">8 개월</GrayText>}
      />
      <Line />
      <Grid>
        <div>
          <GrayText>2022. 10. 24 ~ 2023. 06. 24</GrayText>
          <FlexRight>
            <GrayText fontSize="12px">8 개월</GrayText>
          </FlexRight>
        </div>
        <div>
          <FlexBetween>
            <div>
              <BText>RMSoft </BText>
              <GrayText fontSize="12px">
                (<GrayText fontSize="10px"> ⇒</GrayText> Akiaka)
              </GrayText>
            </div>
            <GrayText>프론트엔드개발 매니저</GrayText>
          </FlexBetween>
          <Text>
            음성 데이터 정제(데이터 라벨링) 프로젝트에 필요한 기본적인 웹 서비스
            개발을 담당하였습니다. 뿐만 아니라 프로젝트 개발에 필요한 각종
            규칙들을 만들고 문서화하여 정리하고 관리하는 일을 주도적으로
            맡았습니다.
          </Text>
          <Ul padding="5px 0 0 20px">
            <Li>React 기본 개념서 작성</Li>
            <Li>클리브웍스 프로젝트 참여</Li>
          </Ul>
        </div>
      </Grid>
    </Container>
  );
};

export default Career;
