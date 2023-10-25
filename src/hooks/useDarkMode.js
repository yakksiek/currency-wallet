import { useState } from 'react';
import { useDispatch } from 'react-redux';

function useDarkMode(setDarkModeAction) {
    const [darkMode, setDarkMode] = useState(true);
    const dispatch = useDispatch();

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        dispatch(setDarkModeAction());
    };

    return { toggleTheme };
}

export default useDarkMode;
