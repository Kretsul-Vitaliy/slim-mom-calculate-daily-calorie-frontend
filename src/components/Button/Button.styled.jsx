import styled from "styled-components";

export const ButtonStyled = styled.button`
  background: ${(props) =>
    props.active ? `var(--extra-color)` : `var(--text-extra-btn-color)`};
  color: ${(props) =>
    props.active ? `var(--color-white)` : `var(--extra-color)`};
  border: ${(props) =>
    props.active ? "none" : "2px solid var(--extra-color)"};
  box-shadow: ${(props) =>
    props.active ? "0px 4px 10px rgba(252, 132, 45, 0.5)" : "none"};
  border-radius: 30px;
  cursor: pointer;
  ${(props) => {
    switch (props.size) {
      case "short":
        return `padding:13px 51px;
                width: 182px;
                height: 44px;
            `;
      case "long":
        return `padding:13px 25px;
                width:210px;
            `;
      case "addBtn":
        return `padding:13px 46px;
                width:176px;
            `;
      case "addRoundBtn":
        return `padding:12.48px
                width:48px;`;
      default:
        return `
            padding:13px 51px;
            width:13px 51px;
        `;
    }
  }};
`;
