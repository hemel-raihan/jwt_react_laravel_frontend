import { useState } from "react";
import AuthUser from "./AuthUser";

export default function Login()
{
    const {http, setToken} = AuthUser();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitForm = () =>{
        http.post('/login',{email,password}).then((res) =>{
            setToken(res.data.user,res.data.access_token);
        })
    }

    return(
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <div className="form-group">
                        <label>Email address</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    )
}