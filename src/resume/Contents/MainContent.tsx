"use client";

import styled from "styled-components";
import { IconContext } from "react-icons";
import { SiNotion, SiGithub } from "react-icons/si";
import { RiNotionFill, RiGithubFill } from "react-icons/ri";
import { useState } from "react";
import MenuTitle from "../menuTitle";
import { ATag, GrayText, Grid, Line, StyledLinked, Text } from "./ElementStyle";

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
  background-color: lightgrey;
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

const Github = styled(RiGithubFill)`
  width: 45px;
  height: 45px;
  cursor: pointer;
  color: ${(props) => props.color || "black"};
  transform: scale(${(props) => props.transform || "0.9"});

  transition-property: color, transform;
  transition-duration: 0.3s, 0.3s;
`;

const Notion = styled(RiNotionFill)`
  width: 45px;
  height: 45px;
  cursor: pointer;
  color: ${(props) => props.color || "black"};
  transform: scale(${(props) => props.transform || "0.9"});

  transition-property: color, transform;
  transition-duration: 0.3s, 0.3s;
`;

const Education = styled.div`
  margin-top: 190px;
  max-width: 350px;
`;

const LinkBox = styled.div`
  margin: 30px 0;
`;

const MainContent = () => {
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isNotionHovered, setIsNotionHovered] = useState(false);

  return (
    <>
      <Container>
        <Profile></Profile>
        <ContactBox>
          <QuoteBox>
            <Quote />
            <Quote />
          </QuoteBox>
          <Title>
            <Bold>협업</Bold>할 줄 아는 <br /> <Bold>프론트엔드</Bold> 개발자
            <br />
            정하연입니다.
          </Title>
          <ShortLine />
          <Contact>
            M. 010 9137 7375 <br />
            E. jungdev07@gmail.com
          </Contact>
          <IconBox>
            <Github
              transform={isGithubHovered ? "1" : "0.9"}
              onMouseOver={() => setIsGithubHovered(true)}
              onMouseOut={() => setIsGithubHovered(false)}
              color={isGithubHovered ? "#f5b32e" : "black"}
            />
            <Notion
              transform={isNotionHovered ? "1" : "0.9"}
              onMouseOver={() => setIsNotionHovered(true)}
              onMouseOut={() => setIsNotionHovered(false)}
              color={isNotionHovered ? "#f5b32e" : "black"}
            />
          </IconBox>
        </ContactBox>
        <Education>
          <MenuTitle Kr="학력" Eng="Education" />
          <Line width="350px" />
          <Grid columns="70px 1fr" gap="0px" rowgap="0">
            <GrayText fontSize="14px">2016. 02</GrayText>
            <Text fontSize="14px">삼각산고등학교 졸업</Text>
            <GrayText fontSize="14px">2020. 03</GrayText>
            <Text fontSize="14px">대진대학교 한국화 입학</Text>
            <GrayText fontSize="14px">2024. 03</GrayText>
            <Text fontSize="14px">
              대진대학교 시각디자인 전공 <br />
              컴퓨터공학 복수전공 재학 (4학년)
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
            <ATag href={`https://github.com/Hayeon-Jung`} target="_blank">
              https://github.com/Hayeon-Jung
            </ATag>
          </GrayText>
          <GrayText fontWeight={700} fontSize="12px">
            Notion
          </GrayText>
          <GrayText fontSize="12px">
            <ATag href={`https://github.com/Hayeon-Jung`} target="_blank">
              https://battle-wolverine-ec2.notion.site/401b7e2fbab64630902e8f9d42daf596
            </ATag>
          </GrayText>
        </Grid>
      </LinkBox>
    </>
  );
};

export default MainContent;
