import styled from 'styled-components';

const SwitcherWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 2rem;
  min-width: 42px;

  position: relative;
  z-index: 3;

  align-self: center;
  @media screen and (min-width: 1280px) {
    align-self: flex-end;
    transform: translate(0, -20%);
    margin-right: auto;
  }
  @media screen and (max-width: 767px) {
    transform: translate(0, -5%);
  }
`;
const SwitcherList = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  cursor: pointer;

  min-width: 36px;
  max-height: 30px;
  padding: 8px;

  position: absolute;
  top: 0;

  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 26px;
    height: 0%;
    box-shadow: 0 4px 12px 0 transparent;
    background-color: #fff;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    border-radius: 6px;
    background: 0 0;
    box-shadow: none;
  }
  &.open {
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 10%);
    background-color: ${props => props.theme.langMenuColor};
    max-height: unset;

    &::before {
      height: 100%;
      box-shadow: 0 4px 12px 0 rgb(0 0 0 / 10%);
      background-color: ${props => props.theme.langMenuColor};
    }

    button {
      line-height: 1;
      margin: 4px 0;
      display: flex;
      opacity: 1;
      cursor: pointer;

      &.active {
        &::after {
          transform: translateY(-80%) scaleY(-1.1) rotate(45deg);
        }
      }
      &:not(.active) {
        width: 100%;
        opacity: 1;
        pointer-events: all;
      }
    }
  }
`;

const LangButton = styled.button`
  border: none;
  background: transparent;
  color: ${props => props.theme.langButtonColor};
  text-transform: capitalize;
  position: relative;
  transition: all 0.3s ease;
  width: 100%;
  z-index: 5;
  cursor: pointer;

  display: flex;
  gap: 4px;

  &:hover {
    color: ${props => props.theme.langButtonHoverColor};
  }

  span {
    opacity: 0;
  }

  &.active {
    order: -1;
    pointer-events: all;

    &::after {
      opacity: 1;
      transform: translateY(-70%) scaleY(1.1) rotate(45deg);
    }

    span {
      opacity: 1;
    }
  }
  &:not(.active) {
    width: 0%;
    pointer-events: none;
    opacity: 0;
  }
`;

export { SwitcherWrapper, SwitcherList, LangButton };
