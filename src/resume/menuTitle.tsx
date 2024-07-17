import { MenuTitleENG, MenuTitleKR } from "./Contents/ElementStyle";

const MenuTitle = ({ Kr, Eng }: { Kr: string; Eng: string }) => {
  return (
    <>
      <MenuTitleKR>{Kr} </MenuTitleKR>
      <MenuTitleENG>{Eng}</MenuTitleENG>
    </>
  );
};

export default MenuTitle;
