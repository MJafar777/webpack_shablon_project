import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return <div data-testid="MainPage" />;
};

export default MainPage;
