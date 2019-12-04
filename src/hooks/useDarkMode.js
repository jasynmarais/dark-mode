import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = initialValue => {
    const [isDarkMode, setIsDarkMode] = useLocalStorage('darkMode', initialValue);

    useEffect(() => {
        const bodyA = document.querySelector('body');
        if (isDarkMode) {
            bodyA.classList.add('dark-mode');
        } else {
            bodyA.classList.remove('dark-mode');
        }
    }, [isDarkMode]);
    
    return [isDarkMode, setIsDarkMode];
};

export default useDarkMode;