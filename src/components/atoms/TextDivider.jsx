import React from 'react';

const TextDivider = ({ text, alignment, color, icon, style }) => {
    const dividerClasses = ['divider'];

    if (alignment) {
        dividerClasses.push(`text-${alignment}`);
    }

    if (color) {
        dividerClasses.push(`divider-${color}`);
    }

    if (style) {
        dividerClasses.push(`divider-${style}`);
    }

    return (
        <div className={dividerClasses.join(' ')}>
            <div className="divider-text">
                {icon && <i className={`bx ${icon}`}></i> }
                {text}
            </div>
        </div>
    );
};

export default TextDivider;
