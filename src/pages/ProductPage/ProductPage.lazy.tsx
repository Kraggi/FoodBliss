import { lazy } from 'react';

const ProductPageLazy = lazy(() => import('./ProductPage'));

export { ProductPageLazy as ProductPage };
