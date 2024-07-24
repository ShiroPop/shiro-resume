import {
  FlexBetween,
  MenuTitleENG,
  MenuTitleKR,
} from "./Contents/ElementStyle";

const MenuTitle = ({
  Kr,
  Eng,
  children,
}: {
  Kr: string;
  Eng: string;
  children?: React.ReactNode;
}) => {
  return (
    <>
      <FlexBetween>
        <div>
          <MenuTitleKR>{Kr} </MenuTitleKR>
          <MenuTitleENG>{Eng}</MenuTitleENG>
        </div>
        <div>{children}</div>
      </FlexBetween>
    </>
  );
};

export default MenuTitle;
