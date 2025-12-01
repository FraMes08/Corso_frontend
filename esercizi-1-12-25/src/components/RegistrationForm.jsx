import { useState } from 'react';

export default function RegistrationForm() {
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

    // deve contenere una @ seguita da almeno un carattere e successivamente un . seguito a sua volta da un carattere
    // ex xxxxx@x.x
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // minimo 8 chars, 1 lowercase, 1 uppercase, 1 digit, 1 special char
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;

    const updateField = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

        // validate on change for immediate feedback
        validateField(field, value, { ...formData, [field]: value });
    };

    const validateField = (field, value, currentData) => {
        let message = '';

        if (field === 'username') {
            if (!value.trim()) message = 'Username obbligatorio.';
        }

        if (field === 'email') {
            if (!value.trim()) message = 'Email obbligatoria.';
            else if (!emailRegex.test(value)) message = 'Formato email non valido.';
            // also check confirmEmail match if present
            else if (currentData.confirmEmail && value !== currentData.confirmEmail) {
                setErrors(prev => ({ ...prev, confirmEmail: 'Le email non coincidono.' }));
            } else {
                setErrors(prev => ({ ...prev, confirmEmail: prev.confirmEmail && '' }));
            }
        }

        if (field === 'confirmEmail') {
            if (!value.trim()) message = 'Conferma email obbligatoria.';
            else if (value !== currentData.email) message = 'Le email non coincidono.';
        }

        if (field === 'password') {
            if (!value) message = 'Password obbligatoria.';
            else if (!passwordRegex.test(value)) message = 'La password deve avere almeno 8 caratteri, una maiuscola, una minuscola, un numero e un carattere speciale.';
            // also check confirmPassword match
            else if (currentData.confirmPassword && value !== currentData.confirmPassword) {
                setErrors(prev => ({ ...prev, confirmPassword: 'Le password non coincidono.' }));
            } else {
                setErrors(prev => ({ ...prev, confirmPassword: prev.confirmPassword && '' }));
            }
        }

        if (field === 'confirmPassword') {
            if (!value) message = 'Conferma password obbligatoria.';
            else if (value !== currentData.password) message = 'Le password non coincidono.';
        }

        setErrors(prev => ({ ...prev, [field]: message }));
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
        e.preventDefault();
        if (!validateAll()) return;
        console.log('Dati form:', {
            username: formData.username,
            email: formData.email,
            password: formData.password
        });
    };

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => updateField('username', e.target.value)}
                />
                {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
            </div>

            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                />
                {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
            </div>

            <div>
                <label>Conferma Email:</label>
                <input
                    type="email"
                    value={formData.confirmEmail}
                    onChange={(e) => updateField('confirmEmail', e.target.value)}
                />
                {errors.confirmEmail && <div style={{ color: 'red' }}>{errors.confirmEmail}</div>}
            </div>

            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => updateField('password', e.target.value)}
                />
                {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
            </div>

            <div>
                <label>Conferma Password:</label>
                <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => updateField('confirmPassword', e.target.value)}
                />
                {errors.confirmPassword && <div style={{ color: 'red' }}>{errors.confirmPassword}</div>}
            </div>

            <button type="submit">Registrati</button>

            {/* Debug: mostra i dati in tempo reale (rimuovere in produzione) */}
            <pre>{JSON.stringify(formData, null, 2)}</pre>
        </form>
    );
}
