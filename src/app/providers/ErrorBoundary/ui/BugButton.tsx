import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Компонент для тестирования ErrorBoundary
// ErrorBundary-ni sinab ko'rish uchun komponent
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    // eslint-disable-next-line react/button-has-type
    return <button onClick={onThrow}>{t('throw error')}</button>;
};
