import React, { useContext } from 'react';
import Switch from 'react-switch';
import { BsMoon } from 'react-icons/bs';
import { IoMdSunny } from 'react-icons/io';

import { ThemeSwitcher as ThemeSwitcherContext } from '../../context/ThemeSwitcher';

const ThemeSwitcher = () => {
  const switcher = useContext(ThemeSwitcherContext);

  function handleToggleTheme() {
    if (switcher.theme === 'dark') {
      switcher.setTheme('light');
      localStorage.setItem('@theme', 'light');
    } else {
      switcher.setTheme('dark');
      localStorage.setItem('@theme', 'dark');
    }
  }

  return (
    <div style={{ marginTop: '12px' }}>
      <Switch
        onChange={handleToggleTheme}
        checked={switcher.theme === 'dark'}
        checkedIcon={<IoMdSunny style={{ marginLeft: '10px' }} />}
        uncheckedIcon={<BsMoon color="#252527" style={{ marginLeft: '8px' }} />}
        height={25}
        handleDiameter={20}
        onColor="#000"
        offHandleColor="#ccc"
        offColor="#F3F3F5"
      />
    </div>
  );
};

export default ThemeSwitcher;
