import { useState } from "react";
import Cv from "./Cv";
import Form from "./Form";

export default function Display(){
    const [showForm, setShowForm] = useState(true);
    const [data, setData] = useState('');

    const handleSwap = (inputData) => {
        setData(inputData);
        setShowForm(false);
    }

    const handleback = () => {
        setShowForm(true)
    }

    return(
        <>
            {showForm ? (
                <Form onSwap={handleSwap}/>
            ) : (<Cv data={data} onBack={handleback} />)
            }
        </>
    )
}