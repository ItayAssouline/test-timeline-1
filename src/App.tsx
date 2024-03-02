import {useEffect, useRef, useState} from 'react'

import './App.css'
import {TimelineApi} from "./api/timelineApi.ts";


function App() {

    const apiRef = useRef(new TimelineApi());
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current && !apiRef.current.didInit) {
            apiRef.current.init(containerRef.current)
        }
    }, [containerRef]);

    return <>
        <div className="container" ref={containerRef}>


        </div>
    </>;
}

export default App
