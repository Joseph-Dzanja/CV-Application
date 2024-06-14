import { useState } from "react";
import Cv from "./Cv";
import Form from "./Form";

export default function Display(){
    const [showForm, setShowForm] = useState(true);
    const[basicInfo, setBasicInfo] = useState({firstname:'',lastname:'', email:'', phoneNumber:'', primaryS:'', secondaryS:'', university:'', program:'', dateJoined:'', dateEnded:'', company:'', position:'', responsibilities:''})

    const handleSwap = (inputData) => {
        setBasicInfo(inputData);
        setShowForm(false);
    }

    const handleback = () => {
        // setData(data);
        setShowForm(true);
    }

    return(
        <>
            {showForm ? (
                <Form basicInfo={basicInfo} setBasicInfo={setBasicInfo} onSwap={handleSwap}/>
            ) : (<Cv basicInfo={basicInfo} onBack={handleback} />)
            }
        </>
    )
}