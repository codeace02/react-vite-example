import React, { useState, useCallback, useEffect, useRef } from 'react';

export default function PasswordGenerator() {

    const [length, setLength] = useState(8);
    const [numeric, setNumeric] = useState(false);
    const [specialChar, setSpecialChar] = useState(false);
    const [password, setPassword] = useState('');

    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(() => {

        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdrfghijklmnopqrstuvwxyz";

        if (numeric) str += "0123456789";
        if (specialChar) str += "!@#$%^&*-_+=[]~()`";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }

        setPassword(pass);

    }, [length, numeric, specialChar, setPassword]);

    const handleCopyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        // passwordRef.current?.setSelectionRange(0, 3)
        window.navigator.clipboard.writeText(password);
        
    }, [password])

    useEffect(() => {
        passwordGenerator()
    }, [length, numeric, specialChar, passwordGenerator])

    return (
        <>
            <div className='h-screen bg-black py-4 duration-300'>
                <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-8 text-orange-400 bg-gray-700'>
                    <h1 className='text-white text-center text-4xl my-3'>
                        Password Generator
                    </h1>
                    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                        <input
                            type='text'
                            value={password}
                            className='outline-none w-full py-1 px-3'
                            placeholder='password'
                            readOnly
                            ref={passwordRef}
                        />
                        <button
                            className='outline-none bg-blue-600 text-white py-0.5 px-3 shrink-0'
                            onClick={handleCopyPasswordToClipboard}
                        >
                            copy
                        </button>
                    </div>

                    <div className='flex text-sm gap-x-2'>
                        <div className='flex items-center gap-x-1'>
                            <input
                                type='range'
                                min={6}
                                max={50}
                                name='length'
                                value={length}
                                id='length'
                                className='cursor-pointer'
                                onChange={(e) => setLength(e.target.value)}
                            />
                            <label htmlFor='length'>Length :{length}</label>
                        </div>

                        <div className='flex items-center gap-x-1'>
                            <input
                                type='checkbox'
                                defaultChecked={numeric}
                                id='numberInput'
                                value={length}
                                className='cursor-pointer'
                                onChange={() => setNumeric((prev) => !prev)}
                            />
                            <label htmlFor='numberInput'>Numbers</label>
                        </div>

                        <div className='flex items-center gap-x-1'>
                            <input
                                type='checkbox'
                                defaultChecked={specialChar}
                                id='characterInput'
                                value={specialChar}
                                className='cursor-pointer'
                                onChange={() => setSpecialChar((prev) => !prev)}
                            />
                            <label htmlFor='characterInput'>Characers</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
