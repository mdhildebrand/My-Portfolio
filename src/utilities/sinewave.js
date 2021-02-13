import React, { useCallback, useMemo } from 'react';

export const SineWave = () => {

    const oneWave = 2 * Math.PI;
    const frequencyPerSide = 3;
    const amplitude = 10;
    const numberOfSides = 4;

    const totalPoints = Math.floor(
        oneWave * frequencyPerSide * amplitude * numberOfSides
    );
    const paddingOffset = 11;
    const svgPathD = [];

    const pathFunction = useCallback(point => {
        return Math.sin(point / 10) * amplitude;
    }, [amplitude])

    const calculateTop = useCallback(
        point => {
            const xyPoint = {
                x: paddingOffset + point,
                y: paddingOffset - pathFunction(point)
            };
            return['L', xyPoint.x, xyPoint.y].join(' ');
        }, [paddingOffset, pathFunction]
    );

    const calculateRight = useCallback(
        point => {
            const xyPoint = {
                x: paddingOffset + (totalPoints * 0.25) + pathFunction(point),
                y: paddingOffset + (point - (totalPoints * 0.25))
            };
            return ['L', xyPoint.x, xyPoint.y].join(' ');
        }, [paddingOffset, pathFunction, totalPoints]
    );

    const calculateBottom = useCallback(
        point => {
            const xyPoint = {
                x: paddingOffset + (totalPoints * 0.25) - (point - (totalPoints/2)),
                y: paddingOffset + (totalPoints * 0.25) + pathFunction(point)
            };
            return ['L', xyPoint.x, xyPoint.y].join(' ');
        }, [paddingOffset, pathFunction, totalPoints]
    )

    const calculateLeft = useCallback(
        point => {
            const xyPoint = {
                x: -pathFunction(point) + paddingOffset,
                y: paddingOffset + (totalPoints * 0.25) - (point - (totalPoints * 0.75))
            };
            return ['L', xyPoint.x, xyPoint.y].join(' ');
        }, [paddingOffset, pathFunction, totalPoints]
    )

    const createWave = useCallback(() => {
        svgPathD.push(['M', paddingOffset, paddingOffset].join(' '));

        for(let point = 1; point < totalPoints; point++){
            if(point < totalPoints * 0.25){
                svgPathD.push(calculateTop(point))
            } else if(totalPoints * 0.25 <= point && point < totalPoints * 0.5){
                svgPathD.push(calculateRight(point))
            } else if(totalPoints * 0.5 <= point && point < totalPoints * 0.75){
                svgPathD.push(calculateBottom(point))
            } else {
                svgPathD.push(calculateLeft(point))
        }}
        svgPathD.push(['L', paddingOffset, paddingOffset].join(' '));
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
            stroke="teal"
            opacity="0.5"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            d={svgPathD.join(' ')}
            />
        );
    }, [svgPathD]);

    return (
        <>
            <div style={{ maxWidth: "100%", paddingBottom: 12 }}>
                SVG sine wave animation. <br />
            </div>
            <svg
                width={250}
                height={250}
            >
                {path}
            </svg>
        </>
    )
}

export default SineWave