import { renderHook, act } from '@testing-library/react-hooks';
import useDarkMode from './useDarkMode';
import { Theme } from '../interfaces';

test('should toggle theme', () => {
  const { result } = renderHook(() => useDarkMode(Theme.LIGHT));

  act(() => {
    result.current.toggleTheme();
  });

  expect(result.current.theme).toBe(Theme.DARK);
});
