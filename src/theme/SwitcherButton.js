import { SwitcherButtonStyles } from './SwitcherButton.Styled';
import { useState } from 'react';

export const SwitcherButton = ({ switchTheme }) => {
  // eslint-disable-next-line no-unused-vars
  const [savedTheme, setSavedTheme] = useState(
    localStorage.getItem('app-theme') || 'light'
  );
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
        defaultChecked={savedTheme === 'light' ? true : false}
      />
      <label htmlFor="dark" className="dark">
        Night
      </label>
      <input
        className="dark"
        id="dark"
        name="food"
        type="radio"
        defaultChecked={savedTheme === 'dark' ? true : false}
      />
      <div></div>
    </SwitcherButtonStyles>
  );
};
