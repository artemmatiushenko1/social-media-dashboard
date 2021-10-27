import React, { useState } from 'react';
import './ToogleButton.css';

export default function ToogleButton() {
  const [darkMode, setDarkMode] = useState(false);

  const colors = [
    '--color-card',
    '--color-bc',
    '--color-bc-after',
    '--color-heading',
    '--color-card-hover',
  ];

  const changeTheme = () => {
    colors.forEach((color) => {
      document.documentElement.style.setProperty(
        color,
        !darkMode ? `var(${color}-dark)` : `var(${color}-light)`
      );
    });
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <input type="checkbox" className="checkboxBtn" onChange={changeTheme} />
    </div>
  );
}
