import { useDispatch } from 'react-redux';

function useDarkMode(setDarkModeAction) {
    const dispatch = useDispatch();

    const toggleTheme = () => {
        dispatch(setDarkModeAction());
    };

    return { toggleTheme };
}

export default useDarkMode;
