import React from "react";

type FormFieldProps = {
    label?: string;
    name: string;
    type?: "text" | "email" | "tel" | "password" | "textarea";
    placeholder?: string;
    rows?: number;
    value?: string;
    onChange?: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
};

const FormField: React.FC<FormFieldProps> = ({
    label,
    name,
    type = "text",
    placeholder,
    rows = 3,
    value,
    onChange
}) => {
    return (
        <div className="form-base__group">
            {label && (
                <label className="form-base__label" htmlFor={name}>
                    {label}
                </label>
            )}

            {type === "textarea" ? (
                <textarea
                    className="form-base__textarea"
                    id={name}
                    name={name}
                    rows={rows}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            ) : (
                <input
                    className="form-base__input"
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            )}
        </div>
    );
};

export default FormField;
