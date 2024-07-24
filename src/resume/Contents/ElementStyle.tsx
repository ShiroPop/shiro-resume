import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface stylesProps {
  padding?: string;
  fontSize?: string;
  fontWeight?: number | string;
  width?: string;
  columns?: string;
  gap?: string;
  rowgap?: string;
  cursor?: string;
}

export const MenuTitleKR = styled.span<stylesProps>`
  font-size: 18px;
  font-weight: 700;
  margin-right: 2px;
  cursor: default;
  cursor: ${(props) => props.cursor || "default"};
`;

export const MenuTitleENG = styled.span<stylesProps>`
  font-size: 15px;
  font-weight: 500;
  margin-left: 1px;
  cursor: ${(props) => props.cursor || "default"};
`;

export const BText = styled.span<stylesProps>`
  font-size: ${(props) => props.fontSize || "15px"};
  font-weight: ${(props) => props.fontWeight || 700};
  cursor: ${(props) => props.cursor || "default"};
`;

export const MText = styled.span<stylesProps>`
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: 500;
  cursor: ${(props) => props.cursor || "default"};
`;

export const Text = styled.span<stylesProps>`
  font-size: ${(props) => props.fontSize || "15px"};
  cursor: ${(props) => props.cursor || "default"};
  text-align: justify;
`;

export const GrayText = styled.span<stylesProps>`
  color: #9b9b9b;
  font-size: ${(props) => props.fontSize || "15px"};
  font-weight: ${(props) => props.fontWeight || 400};
  cursor: ${(props) => props.cursor || "default"};
`;

export const Ul = styled.ul<stylesProps>`
  list-style-type: circle;
  margin: 0;
  padding: ${(props) => props.padding || "0 0 0 20px"};
  font-size: ${(props) => props.fontSize || "15px"};
  cursor: default;
`;

export const Li = styled.li<stylesProps>`
  padding: ${(props) => props.padding || "2px"};
  font-size: ${(props) => props.fontSize || "15px"};
  cursor: ${(props) => props.cursor || "default"};
`;

export const Line = styled.div<stylesProps>`
  width: ${(props) => props.width || "100%"};
  height: 14px;
  margin-top: 3px;
  border-top: black solid;
`;

export const ButtonStyle = styled.button`
  all: unset;
  min-width: 10px;
  padding: 2px 12px;
  margin: 0 8px 4px 0;
  border-radius: 15px;
  background-color: #b6b6b6;
  color: white;
  font-size: 14px;
`;

export const Grid = styled.div<stylesProps>`
  display: grid;
  grid-template-columns: ${(props) => props.columns || "1.6fr 4.4fr"};
  gap: ${(props) => props.gap || "40px"};
  row-gap: ${(props) => props.rowgap || "40px"};
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FlexRight = styled.div<stylesProps>`
  display: flex;
  justify-content: flex-end;
  padding: ${(props) => props.padding || "0 30px 0 0 "};
`;

export const StyledLinked = styled(Link)`
  all: unset;
  cursor: pointer;
`;

export const ATag = styled.a`
  all: unset;
  cursor: pointer;
`;

export const IconAnimation = css`
  transition-property: color, transform;
  transition-duration: 0.3s, 0.3s;
`;
