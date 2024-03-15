import React from "react";
import "./button.css";

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: Boolean;
    /**
     * Button contents
     */
    label?: String;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, label, ...props }: ButtonProps) => {
    const mode = primary
        ? "storybook-button--primary"
        : "storybook-button--secondary";
    return (
        <button
            type="button"
            className={["storybook-button", mode].join(" ")}
            {...props}
        >
            {label}
        </button>
    );
};
