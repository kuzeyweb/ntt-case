import extendStyled from "./extend.styled";
import { mediaStyled } from "./media.styled";
import { variablesStyled } from "./variables.styled";

const constantsStyled = {
  ...mediaStyled,
  ...variablesStyled,
  ...extendStyled,
};

export default constantsStyled;
