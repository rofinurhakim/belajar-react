import {useState} from 'react'
import InputLogin from './inputlogin';
import Submitlog from './SubmitLogin';
import './login.scss'


const FromLogin = (props) => {

    const [form, setform] = useState ({
        YourEmail: '',
        password: '',
       
    });
    const {YourEmail, password } = useState (form);
    


    const onChangeInput = (e) => {
        setform ({
            ...form,
            [e.target.name] : e.target.value
        });
    }
    console.log (form)
    
    return (
        <>
        <div className="image">
         
        <div className="form">
        <button onClick="Login">Login</button>
            <button onClick="Register">Register</button>
            <h1>LOG IN</h1>
        <div className="email">
            <input
            type="text"
            name="name"
            onChange={onChangeInput}
            value={YourEmail}>
            </input>
        </div>
        <div className="password">
        <InputLogin
            type="text"
            name="name"
            fungsi={onChangeInput}
            value={password}/>
        </div>
        <div>
            <Submitlog text="SUBMIT"  fungsi={() => alert ('fungsi')}/>
        </div>
        </div>
        </div>
        </>
    )
    }

    export default FromLogin
