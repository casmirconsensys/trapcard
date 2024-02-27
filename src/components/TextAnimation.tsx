'use client'
import React, { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Music you can control', 'Pay the way you want', 'Control the playlist', 'Contribute directly to the artist', 'No middle man'];

function getRandomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const TextAnimation = () => {
    const [index, setIndex] = useState(0);
    // const [randomIndex, setRandomIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => {
                // setRandomIndex(getRandomNumber(0, TEXTS.length));
                setIndex((index) => index + 1)
            }, 6000, 
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <>
            <TextTransition springConfig={presets.molasses} inline={true} className='uppercase font-black whitespace-normal tracking-tighter md:tracking-normal md:text-2xl'>{TEXTS[index % TEXTS.length]}</TextTransition>
            {/* {`${TEXTS[randomIndex]}`.split("").map((txt, i) => (
                <TextTransition key={i} delay={i * 100} className="big" inline>
                    {txt}
                </TextTransition>
            ))} */}
        </>
    );
}

export default TextAnimation