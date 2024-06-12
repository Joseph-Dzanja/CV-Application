import '../styles/form.css'

export default function Form(){
    return(
        <form action="" className='form'>
            <div className="formHeader">
                <h1 className='formH1'>Curriculum Vitae Form</h1>
                <p>Fill out the form below and press submit to generate a CV</p>
            </div>
            <hr />
            <div className="formContainer">
                <h2 className='basicH2'>Basic Information</h2>
                <div className="namesContainer">
                    <label htmlFor="">Name</label>
                    <div className='nameInputs'>
                        <span id='fnameContainer'>
                            <input type="text" id='fname'/>
                            <small className='littleTitles'>First Name</small>
                        </span>
                        <span id='lnameContainer'>
                            <input type="text" id='lname'/>
                            <small className='littleTitles'>Last Name</small>
                        </span>
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
            <br />
            <hr className='hr'/>
            <div className='formContainer'>
                <h2 className='educationH2'>Education</h2>
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
                    <span id='startDateContainer'>
                        <input type="date" id='startDate'/>
                        <small className='littleTitles'>Start Date</small> 
                    </span>              
                    <span id='endDateContainer'>
                        <input type="date" id='endDate'/>
                        <small className='littleTitles'>End Date</small>
                    </span>
                </div>
            </div>
            <br />
            <hr className='hr'/>
            <div className='formContainer'>
                <h2 className='experienceH2'>Experience</h2>
                <div className="companyInput">
                    <input type="text" placeholder='Company' id='company'/>
                </div>
                <div className="positionInput">
                    <input type="text" placeholder='Position Title' id='position'/>
                </div>
                <textarea name="" id="responsibilities" cols="30" rows="10" placeholder='Responsibilities'></textarea>
            </div>
            <div className='formContainer submit'>
                <button type='submit' onClick={''}>Submit</button>
            </div>
        </form>
    )
}