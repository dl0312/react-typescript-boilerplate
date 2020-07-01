import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import ThemeToggleSwitch from './ThemeToggleSwitch';

test('check init theme toggle switch', () => {
  const { getByText } = render(<ThemeToggleSwitch />);

  // 기존 상태가 🌞인지
  const titleElement = getByText('🌞');
  expect(titleElement).toBeInTheDocument();

  // 스위치 클릭
  const switchButton = getByText('🌞');
});
