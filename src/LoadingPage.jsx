import React from 'react'
import { useEffect } from 'react';
import { useState } from "react";
import { redirect } from 'react-router';
import ReactLoading from 'react-loading'
const LoadingPage = () => {

    const [data, setData] = useState([]);
    const [done, setDone] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                setData(json);
                setDone(true);
            })
        }, 3000);
    }, [])
    return (
        <>
            {
                !done ?
                    (<ReactLoading type={"bars"} color={"#03fce4e"} height={100} width={100} />)
                    :
                    (
                        <ul>
                            {data.map((post) => (<li key={post.id}>{post.title}</li>
                            ))}
                        </ul>
                    )
            }


        </>
    )
}

export default LoadingPage
