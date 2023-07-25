import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'widgets/ui/ThemeProvider/lib/useTheme';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { onChangeTheme } = useTheme();

  const changeThemeHandler = () => {
    onChangeTheme();
  };
  return (
    <div onClick={changeThemeHandler} className={classNames(cls.ThemeSwitcher, {}, [className])}>
      Click to change theme!
    </div>
  );
};
