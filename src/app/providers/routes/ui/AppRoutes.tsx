import { Routes, Route } from 'react-router-dom';
import { RouteOptions } from 'widgets/config/routeConfig/routeConfig';
import { Suspense } from 'react';

interface AppRoutesProps {
  className?: string;
}

export const AppRoutes = ({ className }: AppRoutesProps) => {
  return (
    <Routes>
      {Object.values(RouteOptions).map((route) => {
        return (
          <Route
            path={route.path}
            element={<Suspense fallback="Loading...">{route.element}</Suspense>}
          />
        );
      })}
    </Routes>
  );
};
