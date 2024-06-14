import '../styles/form.css'
import { useState } from 'react'
import Cv from './Cv';


export default function Form({onSwap, basicInfo, setBasicInfo}){
    

    const handleClick = () => {
        onSwap(basicInfo);
    }

    function handleInputChange(props, e){
        const { id, value } = e.target;
        setBasicInfo((basicInfo) => ({...basicInfo, [props.id]: value }));
    }
    return(
        <form action="" className='form'>
            <div className="formHeader">
                <h1 className='formH1'>Curriculum Vitae Form for {basicInfo.firstname} {basicInfo.lastname}</h1>
                <p>Fill out the form below and press submit to generate a CV</p>
            </div>
            <hr />
            <div className="formContainer">
                <h2 className='basicH2'>Basic Information</h2>
                <div className="namesContainer">
                    <label htmlFor="">Name</label>
                    <div className='nameInputs'>
                        <span id='fnameContainer'>
                            <input type="text" id='fname' value={basicInfo.firstname} onChange={(e) => {handleInputChange({id:'firstname'}, e)}}/>
                            <small className='littleTitles'>First Name</small>
                        </span>
                        <span id='lnameContainer'>
                            <input type="text" id='lname' value={basicInfo.lastname} onChange={(e) => {handleInputChange({id:'lastname'}, e)}}/>
                            <small className='littleTitles'>Last Name</small>
                        </span>
                    </div>
                </div>
                <div className="emailContainer">
                    <label htmlFor="">E-mail</label>
                    <div className="emailInput">
                        <input type="email" id='email' value={basicInfo.email} onChange={(e) => {handleInputChange({id:'email'}, e)}}/>
                    </div>
                </div>
                <div className="pNumber">
                    <label htmlFor="">Phone Number</label>
                    <div className='phoneNumberInput'>
                        <input type="tel" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}-[0-9]{2}" id='phoneNumber' value={basicInfo.phoneNumber} onChange={(e) => {handleInputChange({id:'phoneNumber'}, e)}}/>
                    </div>
                </div>
            </div>
            <br />
            <hr className='hr'/>
            <div className='formContainer'>
                <h2 className='educationH2'>Education</h2>
                <label htmlFor="">Primary School</label>
                <div className="primarySInput">
                    <input type="text" id='primary' onChange={(e) => {handleInputChange({id:'primaryS'}, e)}}/>
                </div>
                <label htmlFor="">Secondary School</label>
                <div className="secondaryEInput">
                    <input type="text" id='secondary' onChange={(e) => {handleInputChange({id:'secondaryS'}, e)}}/>
                </div>
                <label htmlFor="">Tertiary Education</label>
                <div className="tertiaryEInput">
                    <input type="text" id='tertiary' placeholder='University' onChange={(e) => {handleInputChange({id:'university'}, e)}}/>
                </div>
                <div className="tertiaryPInput">
                    <input type="text" id='program' placeholder='Program of Study' onChange={(e) => {handleInputChange({id:'program'}, e)}}/>
                </div>
                <div className='tertiaryDates'>
                    <span id='startDateContainer'>
                        <input type="date" id='startDate' onChange={(e) => {handleInputChange({id:'dateJoined'}, e)}}/>
                        <small className='littleTitles'>Start Date</small> 
                    </span>              
                    <span id='endDateContainer'>
                        <input type="date" id='endDate' onChange={(e) => {handleInputChange({id:'dateEnded'}, e)}}/>
                        <small className='littleTitles'>End Date</small>
                    </span>
                </div>
            </div>
            <br />
            <hr className='hr'/>
            <div className='formContainer'>
                <h2 className='experienceH2'>Experience</h2>
                <div className="companyInput">
                    <input type="text" placeholder='Company' id='company' onChange={(e) => {handleInputChange({id:'company'}, e)}}/>
                </div>
                <div className="positionInput">
                    <input type="text" placeholder='Position Title' id='position' onChange={(e) => {handleInputChange({id:'position'}, e)}}/>
                </div>
                <textarea name="" id="responsibilities" cols="30" rows="10" placeholder='Responsibilities' onChange={(e) => {handleInputChange({id:'responsibilities'}, e)}}></textarea>
            </div>
            <div className='formContainer submit'>
                <button type='submit' onClick={handleClick}>Submit</button>
            </div>
        </form>
    )
}