import React from 'react';


const TextField = ({
    label,
    id,
    name,
    value,
    classCSS,
    placeholder,
    onChange
}) => {
    return (
        <>
            <label htmlFor={label}>{label}</label>
            <input type="text"
                id={id}
                name={name}
                value={value}
                className={classCSS}
                placeholder={placeholder}
                onChange={onChange} />
        </>
    )
}

export default TextField;