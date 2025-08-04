import styled from "styled-components";
import {
  Grid,
  Text,
  Line,
  GrayText,
  FlexBetween,
  BText,
  Ul,
  Li,
  FlexRight,
  ATag,
  MText,
  ButtonStyle,
} from "./ElementStyle";
import MenuTitle from "../menuTitle";
import { RiNotionFill, RiGithubFill } from "react-icons/ri";
import { AiOutlineGlobal } from "react-icons/ai";

import IconComp from "../components/iconComp";

const Container = styled.div`
  padding: 30px 80px 120px 0;
`;

const SkillBox = styled.div`
  margin: 12px 0 8px 0;
`;

const Project = () => {
  return (
    <Container>
      <MenuTitle Kr="프로젝트" Eng="Project" />
      <Line />
      <Grid>
        <div>
          <GrayText fontWeight={500}>2024. 01. 12 ~ 2024. 01. 13</GrayText>
          <FlexRight padding="4px 25px 0 0">
            <GrayText fontSize="14px">총 4인 - FE1, BE2, ML1</GrayText>
          </FlexRight>
          <FlexRight padding="8px 25px 0 0">
            <IconComp url={`https://battle-wolverine-ec2.notion.site/1f5db94fab5c42659d30013248ffe9ea?pvs=4`}>
              <RiNotionFill size="30px" />
            </IconComp>
            <IconComp url={`https://github.com/GDSC-NewYear-TEAM-U/frontend`}>
              <RiGithubFill size="30px" />
            </IconComp>
          </FlexRight>
        </div>
        <div>
          <FlexBetween>
            <div>
              <BText>기쁨펀치 </BText>
              <GrayText fontSize="12px"> GDSC NewYear 해커톤 참여</GrayText>
            </div>
          </FlexBetween>
          <Text fontSize="14px">
            연인의 취향을 히트! 연인 선물 추천해 줄 수 있는 Google Cloud Platform의 Vertex AI를 사용한 서비스입니다. 4인
            중 홀로 프론트를 담당하여 디자인부터 프론트 개발까지 담당하였습니다.
          </Text>
          <Ul padding="8px 0 0 20px" fontSize="14px">
            <Li>프로젝트 아이디어 기획</Li>
            <Li>힉-하이먼 법칙을 고려한 인터랙션 디자인 및 목업</Li>
            <Li>소셜 로그인 및 문답 답변에 대한 상태 관리</Li>
            <Li>Naver OpenAPI의 검색 API 사용</Li>
            <Li>무료 아이콘 사이트(Flaticon)에서 키워드 관련 이미지 크롤링</Li>
            <Li>GDSC NewYear 해커톤 입선</Li>
          </Ul>
          <SkillBox>
            <ButtonStyle>NextJS</ButtonStyle>
            <ButtonStyle>Typescript</ButtonStyle>
            <ButtonStyle>Styled Components</ButtonStyle>
            <ButtonStyle>Recoil</ButtonStyle>
            <ButtonStyle>React Query</ButtonStyle>
            <ButtonStyle>GitHub</ButtonStyle>
            <ButtonStyle>Swagger</ButtonStyle>
            <ButtonStyle>Notion</ButtonStyle>
          </SkillBox>
        </div>

        <GrayText fontWeight={500}>2022. 11. 21 ~ 2023. 06. 23</GrayText>
        <div>
          <FlexBetween>
            <div>
              <BText>클리브웍스 </BText>
              <GrayText fontSize="12px">(서비스 종료)</GrayText>
            </div>
          </FlexBetween>
          <Text fontSize="14px">
            음성 데이터 정제(데이터 라벨링) 프로젝트에 필요한 기본적인 웹 서비스 개발을 담당했습니다.
          </Text>
          <Ul padding="8px 0 0 20px" fontSize="14px">
            <Li>프로젝트 화면 기획</Li>
            <Li>개발 규칙·명세서·디자인 시스템 제안을 통한 UI 통일</Li>
            <Li>공통 컴포넌트(모달 및 오프캔버스 등)제작</Li>
            <Li>랜딩 페이지, 계좌 등록 및 인증, 관리자 작업 등록 및 조회, 알림 페이지 개발</Li>
            <Li>React-Query 를 이용한 비동기 데이터 캐싱 관리</Li>
            <Li>useInfiniteQuery를 사용한 무한 스크롤 테이블</Li>
            <Li>가 데이터(Prisma)를 활용한 테스트</Li>
          </Ul>
          <SkillBox>
            <ButtonStyle>NextJS</ButtonStyle>
            <ButtonStyle>Typescript</ButtonStyle>
            <ButtonStyle>Styled Components</ButtonStyle>
            <ButtonStyle>React Hook Form</ButtonStyle>
            <ButtonStyle>Recoil</ButtonStyle>
            <ButtonStyle>React Query</ButtonStyle>
            <ButtonStyle>Prisma</ButtonStyle>
            <ButtonStyle>GitHub</ButtonStyle>
            <ButtonStyle>Swagger</ButtonStyle>
            <ButtonStyle>Jira</ButtonStyle>
            <ButtonStyle>Slack</ButtonStyle>
            <ButtonStyle>Notion</ButtonStyle>
          </SkillBox>
        </div>

        <div>
          <GrayText fontWeight={500}>2022. 09. 05 ~ 2022. 11. 25</GrayText>
          <FlexRight padding="4px 25px 0 0">
            <GrayText fontSize="14px">총 9인 - FE4, 자료조사5</GrayText>
          </FlexRight>
          <FlexRight padding="8px 25px 0 0">
            <IconComp margin="1px 0 0 0" url={`https://arty0928.github.io/Oracle-Postgresql-/`}>
              <AiOutlineGlobal size="27px" />
            </IconComp>
            <IconComp
              url={`https://battle-wolverine-ec2.notion.site/RMSoft-Query-Converter-a5d4e1cecb68487cb71dd4c952c04ff5?pvs=4`}
            >
              <RiNotionFill size="30px" />
            </IconComp>
            <IconComp url={`https://github.com/arty0928/Oracle-Postgresql-`}>
              <RiGithubFill size="30px" />
            </IconComp>
          </FlexRight>
        </div>
        <div>
          <FlexBetween>
            <div>
              <BText>Query Converter </BText>
            </div>
          </FlexBetween>
          <Text fontSize="14px">
            Oracle 쿼리문을 PostgreSQL 쿼리문으로 변환해 주는 서비스로, DB 이관을 도와줄 수 있는 웹 Query 번역기를
            제작하는 프로젝트에서 웹 개발 영역을 담당했습니다.
          </Text>
          <Ul padding="8px 0 0 20px" fontSize="14px">
            <Li>팀장으로써 팀원들의 개발 환경 통일</Li>
            <Li>
              <ATag
                href={`https://battle-wolverine-ec2.notion.site/Github-c4978239320844dc95f09cbc59d88c9c`}
                target="_blank"
              >
                <MText cursor="pointer">Github 사용방법 </MText>
              </ATag>
              정리 및 공유
            </Li>
            <Li>쿼리문 변환 과정 알고리즘 구상</Li>
            <Li>TailwindCSS를 사용하여 반응형 웹 적용</Li>
          </Ul>
          <SkillBox>
            <ButtonStyle>React</ButtonStyle>
            <ButtonStyle>Javascript</ButtonStyle>
            <ButtonStyle>DBeaver</ButtonStyle>
            <ButtonStyle>TailwindCSS</ButtonStyle>
            <ButtonStyle>GitHub</ButtonStyle>
            <ButtonStyle>Notion</ButtonStyle>
          </SkillBox>
        </div>

        <div>
          <GrayText fontWeight={500}>2022. 05. 28 ~ 2022. 06. 15</GrayText>
          <FlexRight padding="4px 25px 0 0">
            <GrayText fontSize="14px"> 1인 - FE, BE</GrayText>
          </FlexRight>
          <FlexRight padding="8px 25px 0 0">
            <IconComp url={`https://battle-wolverine-ec2.notion.site/8fd12168a3334d1ab8b947766f3c02c5?pvs=4`}>
              <RiNotionFill size="30px" />
            </IconComp>
          </FlexRight>
        </div>
        <div>
          <FlexBetween>
            <div>
              <BText>나만의 영화관 </BText>
            </div>
          </FlexBetween>
          <Text fontSize="14px">
            첫 프로젝트로 영화관 웹서비스를 리디자인하여 클론 코딩해 보았습니다. 소외받는 노년층을 대상으로 화면 구성을
            간략화하여 UIUX 디자인했습니다.
          </Text>
          <Ul padding="8px 0 0 20px" fontSize="14px">
            <Li>최신 영화 등록 서비스</Li>
            <Li>영화 소개의 트레일러 자동 재생</Li>
            <Li>간략화 한 영화 예매 시스템</Li>
            <Li>flex를 사용한 반응형 웹 디자인</Li>
            <Li>데이터베이스 설계</Li>
            <Li>리뷰의 별점순, 최신순 노출 설계</Li>
            <Li>PHP와 mySQL을 사용한 CRUD 작업</Li>
          </Ul>
          <SkillBox>
            <ButtonStyle>HTML/CSS/JS</ButtonStyle>
            <ButtonStyle>PHP</ButtonStyle>
            <ButtonStyle>MySQL</ButtonStyle>
          </SkillBox>
        </div>
      </Grid>
    </Container>
  );
};

export default Project;
