import { Navbar } from 'widgets/ui/Navbar/ui/Navbar';
import { classNames } from '../shared/lib/classNames/classNames';
import { useTheme } from '../widgets/ui/ThemeProvider/lib/useTheme';
import { AppRoutes } from './providers/routes/ui/AppRoutes';

export const App = () => {
  const { theme } = useTheme();
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
