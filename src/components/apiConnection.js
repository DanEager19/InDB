import React, { useEffect, useState } from "react";

export default function ApiConnection() {
    const [json, setJson] = useState({});

    const getJSON = async () => {
        const res = await fetch("http://localhost:5000/games/6169d3364ed6a95733f872ba");
        const data = await res.json();
        setJson(data);
    };

    useEffect(() => {
        getJSON();
    }, []);

    return <div>{JSON.stringify(json)}</div>;
}