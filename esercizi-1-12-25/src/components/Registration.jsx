import { useState } from 'react';

export default function useRegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: ''
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;

    const validateField = (field, value, current) => {
        let message = '';

        if (field === 'username') {
            if (!value.trim()) message = 'Username obbligatorio.';
        }

        if (field === 'email') {
            if (!value.trim()) message = 'Email obbligatoria.';
            else if (!emailRegex.test(value)) message = 'Formato email non valido.';
            else if (current.confirmEmail && value !== current.confirmEmail) {
                // set the paired error immediately
                setErrors(prev => ({ ...prev, confirmEmail: 'Le email non coincidono.' }));
            } else {
                setErrors(prev => ({ ...prev, confirmEmail: prev.confirmEmail ? '' : prev.confirmEmail }));
            }
        }

        if (field === 'confirmEmail') {
            if (!value.trim()) message = 'Conferma email obbligatoria.';
            else if (value !== current.email) message = 'Le email non coincidono.';
        }

        if (field === 'password') {
            if (!value) message = 'Password obbligatoria.';
            else if (!passwordRegex.test(value)) message = 'La password deve avere almeno 8 caratteri, una maiuscola, una minuscola, un numero e un carattere speciale.';
            else if (current.confirmPassword && value !== current.confirmPassword) {
                setErrors(prev => ({ ...prev, confirmPassword: 'Le password non coincidono.' }));
            } else {
                setErrors(prev => ({ ...prev, confirmPassword: prev.confirmPassword ? '' : prev.confirmPassword }));
            }
        }

        if (field === 'confirmPassword') {
            if (!value) message = 'Conferma password obbligatoria.';
            else if (value !== current.password) message = 'Le password non coincidono.';
        }

        setErrors(prev => ({ ...prev, [field]: message }));
    };

    const updateField = (field, value) => {
        const next = { ...formData, [field]: value };
        setFormData(next);
        validateField(field, value, next);
    };

    const validateAll = () => {
        const current = formData;
        const newErrors = {
            username: '',
            email: '',
            confirmEmail: '',
            password: '',
            confirmPassword: ''
        };

        if (!current.username.trim()) newErrors.username = 'Username obbligatorio.';
        if (!current.email.trim()) newErrors.email = 'Email obbligatoria.';
        else if (!emailRegex.test(current.email)) newErrors.email = 'Formato email non valido.';
        if (!current.confirmEmail.trim()) newErrors.confirmEmail = 'Conferma email obbligatoria.';
        else if (current.email !== current.confirmEmail) newErrors.confirmEmail = 'Le email non coincidono.';

        if (!current.password) newErrors.password = 'Password obbligatoria.';
        else if (!passwordRegex.test(current.password)) newErrors.password = 'La password deve avere almeno 8 caratteri, una maiuscola, una minuscola, un numero e un carattere speciale.';
        if (!current.confirmPassword) newErrors.confirmPassword = 'Conferma password obbligatoria.';
        else if (current.password !== current.confirmPassword) newErrors.confirmPassword = 'Le password non coincidono.';

        setErrors(newErrors);
        return Object.values(newErrors).every(v => !v);
    };

    const handleSubmit = (e) => {
        if (e && e.preventDefault) e.preventDefault();
        if (!validateAll()) return false;
        // invio/dati di debug
        console.log('Dati form:', {
            username: formData.username,
            email: formData.email,
            password: formData.password
        });
        return true;
    };

    return {
        formData,
        errors,
        updateField,
        handleSubmit,
        validateAll,
        setFormData,
        setErrors
    };
}