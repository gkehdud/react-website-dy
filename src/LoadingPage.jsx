import React from 'react'
import { useEffect } from 'react';
import { useState } from "react";
import { redirect } from 'react-router';
const LoadingPage = () => {

    const [state, setData] = useState([]);
    const [done, setDone] = useState(undefined);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                setData(json);
                setDone(true);
            })
    }, [])
    return (
        <>Preload</>
    )
}

export default LoadingPage
