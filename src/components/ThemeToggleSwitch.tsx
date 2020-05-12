import React, { ReactElement, useContext } from 'react';
import { Switch } from 'antd';
import { Theme } from '../interfaces';
import { ThemeContext } from '../App';

interface Props {}

export default function ThemeToggleSwitch({}: Props): ReactElement {
  const { theme, setTheme }: any = useContext(ThemeContext);
  const handleOnChange = (checked) => {
    if (checked) {
      setTheme(Theme.LIGHT);
    } else {
      setTheme(Theme.DARK);
    }
  };
  return (
    <Switch
      checkedChildren="🌞"
      unCheckedChildren="🌚"
      defaultChecked={theme === Theme.LIGHT}
      onChange={handleOnChange}
    />
  );
}
