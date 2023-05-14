import { Link, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage.lazy';
import { ProductPage } from './pages/ProductPage/ProductPage.lazy';
import { Suspense } from 'react';
import { UseTheme } from './theme/useTheme';
import cn from 'classnames';

export const App = () => {
    const { theme, toggleTheme } = UseTheme();

    return (
        <div className={cn('app', theme)}>
            <button onClick={toggleTheme}>Change theme</button>
            <Link to='/'>Main</Link>
            <Link to='/product'>Product</Link>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/product' element={<ProductPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};
