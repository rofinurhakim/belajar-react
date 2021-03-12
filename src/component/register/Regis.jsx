import {useState} from 'react'
import SubmitRegister from './submitRegis';
import Submit from './submitRegis'
import InputRegis from './input'
import './regis.scss'
import './tokyo.jpg'
const From = (props) => {

    const [form, setform] = useState ({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        
    });
    const {firstName, lastName, email, phoneNumber, password } = useState (form);
    


    const onChangeInput = (e) => {
        setform ({
            ...form,
            [e.target.name] : e.target.value
        });
    }
    console.log (form)
    
    return (
        <>
        <div>
            <img src="./tokyo.jpg"></img>
        </div> 
            
        <div>
            <form className="form">
            <button onClick="Login">Login</button>
            <button onClick="Register">Register</button>
            <h3>SIGN UP FOR FREE</h3> 
             <div className="firstname">
             <label htmlFor="id">  </label>
             <br></br>
             <input type="text" 
             name="id" 
             onChange={onChangeInput}
             value={firstName}>
             </input>
             <label htmlFor="password"> </label>
             <input type="text" 
             name="password" 
             onChange={onChangeInput}
             value={lastName}>
             </input>
            </div>
            <div>
             <label htmlFor="password">  </label>
             <input className="email" type="text" 
             name="email" 
             onChange={onChangeInput}
             value={email}>
             </input>
            </div>
            <div>
             <label htmlFor="password"></label>
             <input class="phonenumber" type="text" 
             name="phonenumber" 
             onChange={onChangeInput}
             value={phoneNumber}>
             </input>
            </div>
            <div>
             <label htmlFor="password"></label>
             <InputRegis type="text" 
             name="password" 
             onChange={onChangeInput}
             value={password}/>
             <div>
                 <SubmitRegister text="Submit" fungsi={() => alert ('fungsi')}/>
             </div>
            </div>
            </form>
        </div>
        </>
    )
}

export default From