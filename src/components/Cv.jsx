import '../styles/cv.css';
import pass from '../assets/passport.jpg';

export default function Cv({data, onBack}){
    return(
        <>
        <div className='background-container'>
            <div className="left-content-container">
                <div className='passportImg'>
                    <img src={pass} alt="passport photo" />
                </div>
                <div className='contact'>
                    <h2>Contact</h2>
                    <p>Lilongwe, Malawi</p>
                    <p>
                        <strong>Mobile: </strong>(+265) 887 36 55 79, (+265) 999 34 21 66
                    </p>
                    <p>joseph2003dzanja@gmail.com</p>
                </div>
                <div className='education'>
                    <h2>Education</h2>
                    <p>
                        Degree obtained: Field of Study <br />
                        <strong>school name</strong> city and state where the school is located <br />
                        <strong>certification of additional</strong> <br />
                        <strong>Training:</strong>field of study <br />
                    </p>
                    <ul>
                        <li>ggggggggggggggggggggffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</li>
                        <li>1ggggggggggggggggggg</li>
                        <li>1ggggggggggggggggggg</li>
                        <li>1ggggggggggggggggggg</li>
                    </ul>
                </div>
                <div className="certifications">
                    <h2>Certifications</h2>
                    <ul>
                        <li>2gggggggggggggggggggggggggggggggggggggggggggg</li>
                        <li>2gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</li>
                    </ul>
                </div>
                <div className="publications">
                    <h2>Publications</h2>
                    <p>
                        fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    </p>
                </div>
            </div>
            <div className="right-content-container">
                <div className='nameHeader'>
                    <h1 className='h1'>JOSEPH DZANJA</h1>
                    <hr className='hRule'/>
                </div>
                <div className='summaryStatement'>
                    <h2>Summary Statement</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, repudiandae. Neque eligendi obcaecati numquam consequatur ad dolores soluta. Quo molestias explicabo quaerat eos qui accusamus, amet eaque! Exercitationem, quam omnis.</p>
                </div>
                <div className="coreQ">
                    <h2>Core Qualifications</h2>
                    <div>
                        <li>4</li>
                        <li>4</li>
                        <li>4</li>
                    </div>
                </div>
                <div className="wExperience">
                    <h2>Work Experience</h2>
                    <p>
                        Date-Date <br />
                        <strong>Position, Company</strong>, Company City, Company State <br />
                        <ul>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                        </ul>
                    </p>
                </div>
                <div className="rExperience">
                    <h2>Research Experience</h2>
                    <p>

                    </p>
                </div>
            </div>
        </div>
        <button onClick={onBack}>Edit</button>
        </>
    )
}