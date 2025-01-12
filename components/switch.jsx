import React, { useState } from 'react';
import Switch from 'react-switch';
import styles from './darkmodetoggle.module.css';

export default function ThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = (checked) => {
    setIsDarkMode(checked);
    const theme = checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <div className={styles.themeSwitch}>
      <Switch
        checked={isDarkMode}
        onChange={toggleTheme}
        onColor="#000"
        offColor="#fff"
      />
    </div>
  );
}
