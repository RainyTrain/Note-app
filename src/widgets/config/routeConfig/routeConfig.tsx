import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

type RouteConfig = RouteProps;

export enum Routes {
  MAIN = 'main',
  NOT_FOUND = 'not_found',
}

export const RoutesPaths: Record<Routes, string> = {
  [Routes.MAIN]: '/',
  [Routes.NOT_FOUND]: '/*',
};

export const RouteOptions: Record<Routes, RouteConfig> = {
  [Routes.MAIN]: { path: RoutesPaths.main, element: <MainPage /> },
  [Routes.NOT_FOUND]: { path: RoutesPaths.not_found, element: <NotFoundPage /> },
};
