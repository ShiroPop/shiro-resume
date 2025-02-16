import styled from "styled-components";
import MenuTitle from "../menuTitle";
import { BText, FlexBetween, GrayText, Grid, Line, Text } from "./ElementStyle";
import React from "react";

const Container = styled.div`
  padding: 30px 80px 40px 0;
`;

interface activitiesType {
  public: boolean;
  startDate: Date;
  endDate?: Date;
  content: string;
  result?: string;
}

const Activities = () => {
  const activitiesArray = [
    {
      public: true,
      startDate: new Date(2023, 5, 3),
      endDate: new Date(2024, 6, 24),
      content: "CS - Network 스터디",
    },
    {
      public: true,
      startDate: new Date(2024, 2, 9),
      endDate: new Date(2024, 11, 16),
      content: "반려동물 레시피 프로젝트",
      result: "디자인 및 프론트엔드 담당",
    },
    {
      public: false,
      startDate: new Date(2024, 0, 25),
      endDate: new Date(2024, 5, 5),
      content: "감정일기 프로젝트",
      result: "디자인 및 프론트엔드 담당",
    },
    {
      public: false,
      startDate: new Date(2024, 0, 25),
      endDate: new Date(2024, 3, 5),
      content: "웹 러닝 프로젝트",
      result: "디자인 및 프론트엔드 담당",
    },

    {
      public: true,
      startDate: new Date(2024, 0, 12),
      endDate: new Date(2024, 0, 13),
      content: "GDSC NewYear 해커톤",
      result: "U팀 프론트엔드 담당, 입선",
    },
    {
      public: false,
      startDate: new Date(2023, 10, 2),
      endDate: new Date(2024, 0, 21),
      content: "Github 스터디",
    },
    {
      public: true,
      startDate: new Date(2023, 9, 1),
      endDate: new Date(2024, 6, 26),
      content: "GDSC DJU 3기 ",
      result: "프론트엔드 포지션 합격",
    },
    {
      public: true,
      startDate: new Date(2023, 5, 15),
      endDate: new Date(2023, 11, 1),
      content: "청년 유네스코 세계유산 지킴이",
      result: "탈탈몽팀의 디자이너, 최우수상 수상",
    },
    {
      public: true,
      startDate: new Date(2022, 8, 1),
      endDate: new Date(2022, 10, 29),
      content: "ESG 일경험 프로그램",
      result: "SW엔지니어 트랙, RMSoft 기업 - B팀 팀장",
    },
    {
      public: true,
      startDate: new Date(2022, 5, 15),
      endDate: new Date(2022, 7, 25),
      content: "ESG 교육 프로그램",
      result: "SW엔지니어 트랙, 우수 훈련생 및 우수팀 선정",
    },
  ];

  const formatDate = (date: Date) => {
    const year = new Date(date).getFullYear();
    const monthBase = new Date(date).getMonth() + 1;
    const month =
      monthBase.toString().length === 1 ? "0" + monthBase : monthBase;
    const day =
      new Date(date).getDate().toString().length === 1
        ? "0" + new Date(date).getDate()
        : new Date(date).getDate();
    return year + ". " + month + ". " + day;
  };
  return (
    <Container>
      <MenuTitle Kr="대내외활동" Eng="Activities" />
      <Line />
      <Grid rowgap="8px">
        {activitiesArray.map((ele, index) => (
          <React.Fragment key={index}>
            {ele.public === true ? (
              <>
                <GrayText key={"date" + index}>
                  {formatDate(ele.startDate)} ~{" "}
                  {ele.endDate ? formatDate(ele.endDate) : ""}
                </GrayText>
                <FlexBetween key={"content" + index}>
                  <BText>{ele.content}</BText>
                  <Text>{ele.result}</Text>
                </FlexBetween>
              </>
            ) : (
              <></>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default Activities;
