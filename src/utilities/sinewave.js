import React, { useCallback, useMemo, useState, useEffect } from 'react';

export const SineWave = () => {

    const [scrollHeight, setScrollHeight] = useState(window.pageYOffset)
    const [winHeight, setWinHeight] = useState(Math.round(window.innerHeight / 6))

    useEffect(() => {
        function scrollLog() {
            setScrollHeight(window.pageYOffset)
        }
        window.addEventListener("scroll", scrollLog);

        function heightLog() {
            setWinHeight(Math.round(window.innerHeight / 6))
            console.log("hello")
        }
        window.addEventListener("resize", heightLog);

        return () => {
            window.removeEventListener("scroll", scrollLog);
            window.removeEventListener("resize", heightLog);
        };
    })

    const oneWave = 2 * Math.PI;
    const frequencyPerSide = 10;
    const amplitude = 28;
    const numberOfSides = 4;
    const origin = Math.sin(scrollHeight / winHeight) * amplitude


    const totalPoints = Math.floor(
        oneWave * frequencyPerSide * amplitude * numberOfSides
    );
    const paddingOffset = 50;
    const svgPathD = [];

    const pathFunction = useCallback(point => {
        return Math.sin((point + scrollHeight) / winHeight) * amplitude;
    }, [amplitude, scrollHeight, winHeight])

    const calculateLeft = useCallback(
        point => {
            const xyPoint = {
                x: paddingOffset + pathFunction(point),
                y: (point)
            };
            return ['L', xyPoint.x, xyPoint.y].join(' ');
        }, [paddingOffset, pathFunction, totalPoints]
    )

    const calculateBottom = useCallback(
        point => {
            const xyPoint = {
                x: paddingOffset + point,
                y: (totalPoints * 0.25)
            };
            return ['L', xyPoint.x, xyPoint.y].join(' ');
        }, [paddingOffset, pathFunction, totalPoints]
    )

    const calculateRight = useCallback(
        point => {
            const xyPoint = {
                x: paddingOffset + (totalPoints * 0.25),
                y: ((totalPoints * 0.25) - (point - totalPoints / 2))
            };
            return ['L', xyPoint.x, xyPoint.y].join(' ');
        }, [paddingOffset, pathFunction, totalPoints]
    );

    const calculateTop = useCallback(
        point => {
            const xyPoint = {
                x: paddingOffset + origin + totalPoints * 0.25 - (point - totalPoints * 0.75),
                y: 0
            };
            return['L', xyPoint.x, xyPoint.y].join(' ');
        }, [paddingOffset, pathFunction]
    );

    const createWave = useCallback(() => {
        svgPathD.push(['M', paddingOffset + origin, 0].join(' '));

        for(let point = 1; point < totalPoints; point++){
            if(point < totalPoints * 0.25){
                svgPathD.push(calculateLeft(point))
            } else if(totalPoints * 0.25 <= point && point < totalPoints * 0.5){
                svgPathD.push(calculateBottom(point))
            } else if(totalPoints * 0.5 <= point && point < totalPoints * 0.75){
                svgPathD.push(calculateRight(point))
            } else {
                svgPathD.push(calculateTop(point))
        }}
        svgPathD.push(['L', paddingOffset + origin, 0].join(' '));
    }, [
        svgPathD,
        paddingOffset,
        totalPoints,
        calculateLeft,
        calculateRight,
        calculateTop,
        calculateBottom
    ])

    const path = useMemo(() => {
        createWave();
        return (
            <path
            id="wave"
            stroke="white"
            opacity="1.0"
            strokeWidth="2"
            strokeLinecap="round"
            fill="white"
            d={svgPathD.join(' ')}
            />
        );
    }, [svgPathD]);

    return (
        <div id="sine-wave">
            <svg
                width={1000}
                height={1000}
            >
                {path}
            </svg>
        </div>
    )
}

export default SineWave