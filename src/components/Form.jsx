import '../styles/form.css'

export default function Form(){
    return(
        <form action="" className='form'>
            <div className="formContainer">
                <h2>Basic Information</h2>
                <div className="namesContainer">
                    <label htmlFor="">Name</label>
                    <div className='nameInputs'>
                        <input type="text" id='fname'/>
                        <input type="text" id='lname'/>
                    </div>
                </div>
                <div className="emailContainer">
                    <label htmlFor="">E-mail</label>
                    <div className="emailInput">
                        <input type="email" id='email'/>
                    </div>
                </div>
                <div className="pNumber">
                    <label htmlFor="">Phone Number</label>
                    <div className='phoneNumberInput'>
                        <input type="tel" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}-[0-9]{2}" id='phoneNumber'/>
                    </div>
                </div>
            </div>
            <hr className='hr'/>
            <div className='formContainer'>
                <h2>Education</h2>
                <label htmlFor="">Primary School</label>
                <div className="primarySInput">
                    <input type="text" id='primary'/>
                </div>
                <label htmlFor="">Secondary School</label>
                <div className="secondaryEInput">
                    <input type="text" id='secondary'/>
                </div>
                <label htmlFor="">Tertiary Education</label>
                <div className="tertiaryEInput">
                    <input type="text" id='tertiary' placeholder='University'/>
                </div>
                <div className="tertiaryPInput">
                    <input type="text" id='program' placeholder='Program of Study'/>
                </div>
                <div className='tertiaryDates'>
                    <input type="date" id='startDate'/>               
                    <input type="date" id='endDate'/>
                </div>
            </div>
            <div className='formContainer'>
                
            </div>
        </form>
    )
}