import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import styles from './style.module.css'; // Import the CSS module

export default function Services() {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        setShowText(true);
    }, []);

    return (
        <div className="relative h-screen items-center justify-center flex" style={{ paddingTop: '80px' }}>
            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-70">
                <div className="relative text-center">
                    <h2 className='text-green-400 text-4xl mb-4' style={{ fontFamily: "'Times New Roman', serif" }}>
                        SandBox Software Company, <span className='text-white font-serif'>Unlocking Infinite Possibilities</span>
                    </h2>

                    {showText && (
                        <Typewriter className="text-2xl"
                            options={{
                                strings: [
                                    'Welcome to SandBox Software Company!',
                                    'We craft solutions for your business needs.',
                                    'Transforming ideas into reality.',
                                    'Innovating the future.'
                                ],
                                autoStart: true,
                                loop: true,
                                cursor: ' ',
                                delay: 50,
                            }}
                        />
                    )}
                    <button className={`mt-4 py-2 px-4 border-black rounded-full bg-green-500 text-white font-bold text-lg ${styles['animate-blink']}`}>
                       KARIBU
                    </button>
                </div>
            </div>
        </div>
    )
}
