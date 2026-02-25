import React, { useState } from 'react';
const [variable, setVariable] = useState(initialValue);

function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
    import { useState } from 'react';

    function LoginPage() {
        // State to store email and password
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');

        const handleLogin = () => {
            // Check if fields are empty
            if (!email || !password) {
                setError('Please fill all fields');
                return;
            }

            // Login logic here
            console.log('Logging in with:', email, password);
        };

        return (
            <div>
                <h2>Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <button onClick={handleLogin}>Login</button>
            </div>
        );
    }
}
export default Counter