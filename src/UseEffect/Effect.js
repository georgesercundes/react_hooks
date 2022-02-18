import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Effect() {
    const [data, setData] = useState("")
    const [count, setCount] = useState(0)

    useEffect(() => {
        async function getData() {
            const response = await axios.get("https://jsonplaceholder.typicode.com/comments")
            setData(response.data[count].email)
        }
        getData()
    }, [count])

    return (
        <div>
            <h1>{data}</h1>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>
                Click
            </button>
        </div>
    )
}