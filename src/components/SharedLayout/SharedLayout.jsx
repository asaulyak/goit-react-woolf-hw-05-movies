import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';
import Header from '../Header/Header';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <div className={css.container}>
          <Outlet />
        </div>
      </Suspense>
    </>
  );
};
