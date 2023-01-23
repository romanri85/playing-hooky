import React from "react";
import{useTheme} from "../hooks/useTheme";

const Header = () => {
    const {isDarkTheme, onToggleTheme} = useTheme();

    return (
        <header className="header">
            <h2>Todos</h2>
            <section className="actionsContainer">
                <button
                    onClick={() => onToggleTheme()}
                >
                    {isDarkTheme ? 'Light' : 'Dark'} Theme
                </button>
            </section>
        </header>
    );
};

export default Header;
