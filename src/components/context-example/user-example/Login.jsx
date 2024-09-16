import React, { useState, useContext } from 'react';
import UserContext from '../../context/UserContext';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        setUser({ username, password })
    }

    return (
        <>
            <div className='container flex flex-col items-center mt-4 '>
                <h2 className='text-4xl text-center text-red-400 '>Login</h2>
                <input
                    type='text'
                    name='username'
                    placeholder='username'
                    value={username}
                    onChange={(e) => setUsername(e?.target?.value)}
                    className='border block my-3 rounded-md px-5 py-2'
                />
                <input
                    type='text'
                    name='password'
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e?.target?.value)}
                    className='border block my-3 rounded-md px-5 py-2 '
                />
                <button onClick={handleSubmit} className='border-lime-950 bg-red-400 px-8 my-3 text-white py-2 rounded-lg'>
                    Submit
                </button>
            </div>
        </>
    )
}
