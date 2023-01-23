import {useState, useEffect} from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
    const onToggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
    const isDarkTheme = theme === 'dark';
    return {isDarkTheme, onToggleTheme};

}