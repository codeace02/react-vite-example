import React from 'react'
import { useState } from 'react'

export default function BgChanger() {

    const [color, setColor] = useState("olive");

    return (
        <>
            <div
                className='w-full h-screen duration-300'
                style={{
                    backgroundColor: color
                }}
            >
                <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                        <button
                            className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-600 '
                            onClick={() => setColor('#dc2626')}
                        >
                            Red
                        </button>

                        <button
                            className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-600 '
                            onClick={() => setColor('#16a34a')}
                        >
                            Green
                        </button>

                        <button
                            className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-600 '
                            onClick={() => setColor('#2563eb')}
                        >
                            Blue
                        </button>

                        <button
                            className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-violet-600 '
                            onClick={() => setColor('#7c3aed')}
                        >
                            Violet
                        </button>

                        <button
                            className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-400 '
                            onClick={() => setColor('#c084fc')}
                        >
                            Lavendar
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
