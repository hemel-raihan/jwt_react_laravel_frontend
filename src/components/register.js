import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser";

export default function Register()
{
    const navigate = useNavigate();
    const {http} = AuthUser();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitForm = () =>{
        http.post('/register',{name,email,password}).then((res) =>{
            navigate('/login');
        })
    }

    return(
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <div className="form-group mt-3">
                        <label>Name</label>
                        <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group mt-3">
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