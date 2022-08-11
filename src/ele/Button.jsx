import React from "react";
import styled,{css} from "styled-components";
const Buttons = (props) => {
  return (
    <StyledButton {...props} disabled={props.disabled}>
      {props.children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: black;
  background: white;
  margin: 0 10px;

  ${({size}) => {
    switch (size) {
      case "large":
        return css`
        width: 20%;
        `;
        case "medium":
          return css`
          width: 13%;
          height: 35px;
          `;
          default:
            return css`
            width: 120px;`
          
    }
  }}

`;
export default Buttons;
