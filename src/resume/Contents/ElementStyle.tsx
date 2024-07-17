import { Link } from "react-router-dom";
import styled from "styled-components";

interface stylesProps {
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
  font-weight: 700;
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
`;

export const GrayText = styled.span<stylesProps>`
  color: #9b9b9b;
  font-size: ${(props) => props.fontSize || "15px"};
  font-weight: ${(props) => props.fontWeight || 400};
  cursor: ${(props) => props.cursor || "default"};
`;

export const Line = styled.div<stylesProps>`
  width: ${(props) => props.width || "100%"};
  height: 14px;
  margin-top: 3px;
  border-top: black solid;
`;

export const Grid = styled.div<stylesProps>`
  display: grid;
  grid-template-columns: ${(props) => props.columns || "1.6fr 4.4fr"};
  gap: ${(props) => props.gap || "40px"};
  row-gap: ${(props) => props.rowgap || "40px"};
`;

export const StyledLinked = styled(Link)`
  all: unset;
  cursor: pointer;
`;

export const ATag = styled.a`
  all: unset;
  cursor: pointer;
`;
