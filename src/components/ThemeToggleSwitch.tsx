import React, { ReactElement, useContext } from 'react';
import { Switch } from 'antd';
import { Theme } from '../interfaces';
import { ThemeContext } from '../App';

export default function ThemeToggleSwitch(): ReactElement {
  const { theme, toggleTheme }: any = useContext(ThemeContext);
  const handleOnClickToggle = () => {
    toggleTheme();
  };
  return (
    <Switch
      checkedChildren="🌞"
      unCheckedChildren="🌚"
      checked={theme === Theme.LIGHT}
      onClick={handleOnClickToggle}
    />
  );
}
