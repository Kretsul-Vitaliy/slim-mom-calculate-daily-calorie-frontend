import styled from 'styled-components';
// import url from 'https://fonts.googleapis.com/css?family=Concert+One&display=swap';

const FormSwitcher = styled.form`
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
`;

const LabelSwitcher = styled.label`
  user-select: none;
  padding: 3rem;
  cursor: pointer;
  will-change: transform;
  transform: translateZ(0px);
  transition: transform 125ms ease-in-out, filter 125ms ease-in-out;
  filter: blur(0.25rem);

  &:hover {
    transform: scale(1.15);
    filter: blur(0px);
  }
`;

const InputSwitcher = styled.input`
  display: none;

  // static
  &#t1 {
    transform-origin: right center;
  }

  &#t2 {
    transform-origin: left center;
  }

  // animated
  &#t1:checked {
    background: cornflowerblue;
    animation-name: stretchyRev;
  }

  &#t2:checked {
    background-color: skyblue;
    animation-name: stretchy;
  }
`;

const DivSwitcher = styled.div`
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  position: absolute;
  z-index: -1;
  border-radius: 4rem;
  animation-duration: 0.5s;
  animation-direction: forwards;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  transition: transform 150ms ease, background 150ms ease;
  filter: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1"><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" /><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" /><feComposite in="SourceGraphic" in2="goo" operator="atop"/></filter></defs></svg>#goo');

  &:before,
  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    background-color: inherit;
    height: 100%;
    width: 50%;
    border-radius: 100%;
    transform: scale(1.15);
    transition: transform 150ms ease;
    animation-name: pulse;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  &:before {
    left: 0;
    animation-delay: 0.15s;
  }

  &:after {
    right: 0;
  }

  @keyframes stretchy {
    0% {
      transform: translateX(0) scaleX(1);
    }
    50% {
      transform: translateX(0) scaleX(2);
    }
    100% {
      transform: translateX(100%) scaleX(1);
    }
  }

  @keyframes stretchyRev {
    0% {
      transform: translateX(100%) scaleX(1);
    }
    50% {
      transform: translateX(0) scaleX(2);
    }
    100% {
      transform: translateX(0) scaleX(1);
    }
  }

  @keyframes pulse {
    0%,
    50% {
      transform: scaleX(1);
    }
    25%,
    75% {
      transform: scaleX(1.5);
    }
  }
`;

export const SwitcherButton = () => {
  return (
    <FormSwitcher>
      <LabelSwitcher>Light</LabelSwitcher>
      <InputSwitcher
        id="t1"
        name="toggleBtn"
        type="radio"
        checked
      ></InputSwitcher>
      <LabelSwitcher>Night</LabelSwitcher>
      <InputSwitcher id="t2" name="toggleBtn" type="radio"></InputSwitcher>
      <DivSwitcher></DivSwitcher>
    </FormSwitcher>
  );
};
