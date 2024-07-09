import { Children } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage';

export const App = () => {
  return (
    <SharedLayout>
      <HomePage />
    </SharedLayout>
  );
};
