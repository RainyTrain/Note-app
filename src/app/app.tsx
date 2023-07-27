import { noteSliceAction } from 'entities/Note/model/slice/noteSlice';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/appDispatch';
import { Navbar } from 'widgets/ui/Navbar/ui/Navbar';
import { classNames } from '../shared/lib/classNames/classNames';
import { useTheme } from '../widgets/ui/ThemeProvider/lib/useTheme';
import { AppRoutes } from './providers/routes/ui/AppRoutes';

export const App = () => {
  const { theme } = useTheme();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(noteSliceAction.initializeData());
  }, []);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
