import { useEffect, useState } from "react";

export function APIConnection(port: number, route: string) {
    const [json, setJson] = useState([]);
    const getJSON = async () => {
        const response = await fetch(`http://localhost:${port}/${route}`)
        const data = await response.json();
        setJson(data);
    };

    useEffect(() => {
        getJSON();
    }, []);
    
    return json;
}