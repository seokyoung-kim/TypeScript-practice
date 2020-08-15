import React, { useState } from 'react';

interface MyFormProps {
    onSubmit: (form: { name: string; description: string}) => void;
};

const MyForm: React.FC<MyFormProps> = ({onSubmit}) => {
    const [ form, setForm ] = useState({
        name: '',
        description: ''
    })

    const { name, description } = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); //태그의 고유동작 중단
        onSubmit(form);
        setForm({
            name: '',
            description:''
        }) // 초기화
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange} />
            <input name="description" value={description} onChange={onChange} />
            <button type="submit">등록</button>
        </form>
    )
}

export default MyForm;