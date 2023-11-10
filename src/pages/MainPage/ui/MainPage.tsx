import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div data-testid="MainPage">
            <div>123123123123123123</div>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
