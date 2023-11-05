import { css } from "@emotion/react";

const flexItemsCenter = `
    display: flex;  
    align-items: center;`;

const flexJustifyCenter = `
    display: flex; 
    justify-content: center;`;

const flexCenter = `
    display: flex;
    align-items: center;
    justify-content: center;`;

const flexBetween = `
  display: flex;
  justify-content: space-between;
`;

const propsSettings = (params: string) => css`
  ${params}
`;

const extendStyled = {
  flexItemsCenter: propsSettings(flexItemsCenter),
  flexJustifyCenter: propsSettings(flexJustifyCenter),
  flexCenter: propsSettings(flexCenter),
  flexBetween: propsSettings(flexBetween),
};

export default extendStyled;
