import styled from 'styled-components';

export const SwitcherButtonStyles = styled.form`
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  width: 100px;

  label {
    user-select: none;
    padding: 10px;
    cursor: pointer;
    will-change: transform;
    transform: translateZ(0px);
    transition: transform 125ms ease-in-out, filter 125ms ease-in-out;

    &:hover {
      transform: scale(1.15);
    }

    &.light {
      color: white;
    }
  }

  input[type='radio'] {
    display: none;

    &#light ~ div {
      transform-origin: right center;
    }

    &#dark ~ div {
      transform-origin: left center;
    }

    &#light:checked {
      ~ div {
        background: var(--extra-color);
        animation-name: stretchyRev;
      }
    }

    &#dark:checked {
      ~ div {
        background-color: #1ee41e;
        animation-name: stretchy;
      }
    }
  }
  div {
    top: 0;
    left: 0;
    width: 50px;
    height: 40px;
    position: absolute;
    z-index: -1;
    border-radius: 4rem;
    animation-duration: 0.5s;
    animation-direction: forwards;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    transition: all 150ms ease;

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
