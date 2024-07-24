import styled from "styled-components";
import { ATag, IconAnimation } from "../Contents/ElementStyle";
import { useState } from "react";

interface stylesProps {
  width?: string;
  height?: string;
  color?: string;
  transform?: string;
  margin?: string;
}

const IconBox = styled.div<stylesProps>`
  cursor: pointer;
  color: ${(props) => props.color || "black"};
  transform: scale(${(props) => props.transform || "0.9"});
  margin: ${(props) => props.margin || "0"};

  ${IconAnimation};
`;

const IconComp = ({
  url,
  margin,
  children,
}: {
  url?: string;
  margin?: string;
  children: React.ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ATag href={url} target="_blank">
      <IconBox
        margin={margin}
        transform={isHovered ? "1" : "0.9"}
        color={isHovered ? "#f5b32e" : "black"}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        {children}
      </IconBox>
    </ATag>
  );
};

export default IconComp;
