"use client";

import styled from "styled-components";
import { RiNotionFill, RiGithubFill } from "react-icons/ri";
import MenuTitle from "../menuTitle";
import { ATag, GrayText, Grid, Line, Text } from "./ElementStyle";
import IconComp from "../components/iconComp";
import profileImage from "./profile.jpg";

const Container = styled.div`
  max-width: 900px;
  height: 350px;
  display: flex;
  justify-content: space-between;
`;

const Profile = styled.div`
  width: 260px;
  height: 350px;
  border-radius: 100%;
`;

const ProfileImg = styled.img`
  background-image: url(${profileImage});
  width: 260px;
  height: 350px;
  background-size: cover;
  background-position: center;
  border-radius: 100%;
`;

const ContactBox = styled.div`
  margin-top: 45px;
`;

const QuoteBox = styled.div`
  display: flex;
`;

const Quote = styled.div`
  margin: 0 1px;
  width: 8px;
  height: 8px;
  position: relative;
  right: 16px;
  bottom: 1px;
  background-color: black;
  transform: scale(0.85);
  &:before {
    content: " ";
    display: inline-block;
    margin-top: -6px;
    position: absolute;
    width: 8px;
    height: 6px;
    background-color: black;
    border-radius: 90% 0 0 0;
  }
  &:after {
    content: " ";
    display: inline-block;
    margin: -3px 0 0 4px;
    position: absolute;
    width: 4px;
    height: 3px;
    background-color: white;
    border-radius: 100% 0 0 0;
  }
`;

const Title = styled.div`
  font-size: 28px;
  line-height: 30px;
  cursor: default;
`;
const Bold = styled.span`
  font-weight: 700;
  color: #f5b32e;
  cursor: default;
`;

const ShortLine = styled.div`
  width: 17px;
  height: 55px;
  border-bottom: black solid;
`;

const Contact = styled.div`
  margin-top: 12px;
  font-size: 14px;
  cursor: default;
`;

const IconBox = styled.div`
  margin-top: 33px;
  display: flex;
  gap: 6px;
`;

const Education = styled.div`
  margin-top: 190px;
  max-width: 350px;
`;

const LinkBox = styled.div`
  margin: 30px 0;

  // @media screen and (max-width: 639px) {
  //   display: none;
  // }
`;

const MainContent = () => {
  return (
    <>
      <Container>
        <Profile>
          <ProfileImg />
        </Profile>
        <ContactBox>
          <QuoteBox>
            <Quote />
            <Quote />
          </QuoteBox>
          <Title>
            <Bold>함께 </Bold>성취 할 줄 아는 <br /> <Bold>프론트엔드</Bold>{" "}
            개발자
            <br />
            정하연입니다.
          </Title>
          <ShortLine />
          <Contact>
            M. 010 9137 7375 <br />
            E. jhy000714@gmail.com
          </Contact>
          <IconBox>
            <IconComp url={`https://github.com/ShiroPop`}>
              <RiGithubFill size="45px" />
            </IconComp>
            <IconComp
              url={`https://battle-wolverine-ec2.notion.site/401b7e2fbab64630902e8f9d42daf596`}
            >
              <RiNotionFill size="45px" />
            </IconComp>
          </IconBox>
        </ContactBox>
        <Education>
          <MenuTitle Kr="학력" Eng="Education" />
          <Line width="350px" />
          <Grid columns="70px 1fr" gap="0px" rowgap="0">
            <GrayText fontSize="14px">2019. 02</GrayText>
            <Text fontSize="14px">삼각산고등학교 졸업</Text>
            <GrayText fontSize="14px">2020. 03</GrayText>
            <Text fontSize="14px">대진대학교 한국화 입학</Text>
            <GrayText fontSize="14px">2025. 02</GrayText>
            <Text fontSize="14px">
              대진대학교 시각디자인 전공 <br />
              컴퓨터공학 복수전공 졸업
            </Text>
          </Grid>
        </Education>
      </Container>
      <LinkBox>
        <Grid columns="55px 1fr" gap="0" rowgap="0">
          <GrayText fontWeight={700} fontSize="12px">
            Github
          </GrayText>
          <GrayText fontSize="12px">
            <ATag href={`https://github.com/ShiroPop`} target="_blank">
              https://github.com/ShiroPop
            </ATag>
          </GrayText>
          <GrayText fontWeight={700} fontSize="12px">
            Notion
          </GrayText>
          <GrayText fontSize="12px">
            <ATag
              href={`https://battle-wolverine-ec2.notion.site/401b7e2fbab64630902e8f9d42daf596`}
              target="_blank"
            >
              https://battle-wolverine-ec2.notion.site/401b7e2fbab64630902e8f9d42daf596
            </ATag>
          </GrayText>
        </Grid>
      </LinkBox>
    </>
  );
};

export default MainContent;
