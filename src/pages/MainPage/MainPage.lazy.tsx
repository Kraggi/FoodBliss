import { lazy } from 'react';

const MainPageLazy = lazy(() => import('./MainPage'));

export { MainPageLazy as MainPage };
