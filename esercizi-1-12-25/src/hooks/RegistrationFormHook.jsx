import useRegistrationForm from '../components/Registration';

export default function RegistrationForm() {
    const { formData, errors, updateField, handleSubmit } = useRegistrationForm();

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

            <pre>{JSON.stringify(formData, null, 2)}</pre>
        </form>
    );
}