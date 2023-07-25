import { classNames } from 'shared/lib/classNames/classNames';
import { NotesField } from 'widgets/ui/NotesField';
import cls from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      <NotesField />
    </div>
  );
};

export default MainPage;
