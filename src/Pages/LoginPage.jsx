import { Link, useNavigate } from 'react-router-dom';
import { useFormHook } from '../hooks/useFormHook';
import '../styles/Login.css';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';


export function LoginPage(){
    const {currentData,updateData,clearData}  = useFormHook({email:"",password:""})
    const {login} = useContext(UserContext);
    const navigator = useNavigate();
    

    const submitCredentials = async(event)=>{
        event.preventDefault();
        const data = await login(currentData.email,currentData.password);
        navigator("/dashboard",{replace:true});
    }


    const updateForm = ({target})=>{
        const {value,name} = target;
        updateData(name,value);
        console.log("these are REAL DATA : ", currentData);
    }

    return (<>
            <div className="container-login">
                <div className="login-form">
                    <form action="" onSubmit={submitCredentials}>
                        <legend>Sing In</legend>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label label-login">Email address</label>
                            <input type="email" className="form-control input-login" id="email" name="email" aria-describedby="email" onChange={updateForm}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label label-login">Password</label>
                            <input type="password" className="form-control input-login" id="password" name="password" onChange={updateForm}/>
                        </div>
                        <button type="submit" className="btn button-login">Submit</button>
                        <Link href="#" className='link-forgot-password'> Forgot your password?</Link>

                    </form>
                </div>
            </div>
    </>);

}