import { SwitcherButtonStyles } from './SwitcherButton.Styled';

export const SwitcherButton = ({ switchTheme }) => {
  return (
    <SwitcherButtonStyles onClick={e => switchTheme(e.target.className)}>
      <label htmlFor="light" className="light">
        Day
      </label>
      <input
        id="light"
        name="food"
        className="light"
        type="radio"
        defaultChecked
      />
      <label htmlFor="dark" className="dark">
        Night
      </label>
      <input className="dark" id="dark" name="food" type="radio" />
      <div></div>
    </SwitcherButtonStyles>
  );
};
