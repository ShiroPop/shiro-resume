import styled from "styled-components";

const Icon = styled.div`
  margin: 20px;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50px;
  background-color: black;
  &:before {
    content: " ";
    display: inline-block;
    margin-top: -40px;
    position: absolute;
    width: 50px;
    height: 40px;
    background-color: black;
    border-radius: 90% 0 0 0;
  }
  &:after {
    content: " ";
    display: inline-block;
    margin: -20px 0 0 25px;
    position: absolute;
    width: 25px;
    height: 20px;
    background-color: white;
    border-radius: 100% 0 0 0;
  }
`;
