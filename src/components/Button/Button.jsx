import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styled";

export default function Button({
  children,
  disabled,
  active = false,
  onClick,
  ...attrs
}) {
  return (
    <ButtonStyled
      {...attrs}
      active={active ? active : null}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

Button.defaultProps = {
  children: "Default button",
  onClick: () => {},
  disabled: false,
  active: false,
};
