import React, { ChangeEvent, FormEvent } from "react";
import "./InputForm.css";

interface InputFormProps {
    value: string | undefined;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    placeholder: string;
    className?: string;
}

function InputForm({value, onSubmit, onChange, placeholder, className}: InputFormProps) {
    return (
        <form className="custom-form" onSubmit={onSubmit}>
            <input className={(className ?? "") + " input-form"} value={value} onChange={onChange}
                   placeholder={placeholder}/>
        </form>
    )
}

export default React.memo(InputForm);

