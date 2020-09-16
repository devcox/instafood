import React from 'react';


const TextareaField = ({
    label,
    id,
    name,
    value,
    classCSS,
    placeholder,
    rows,
    cols,
    onChange
}) => {
    return (
        <>
            <textarea
                name={name}
                rows={rows}
                cols={cols}
                placeholder={placeholder}
                className={classCSS}>
            </textarea>
        </>
    )
}

export default TextareaField;
