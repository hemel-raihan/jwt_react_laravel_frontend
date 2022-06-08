import { useEffect, useState } from "react";
import AuthUser from "./AuthUser";

export default function Dashboard()
{
    const {http} = AuthUser();
    const [userDetails,setUserdetails] = useState();

    useEffect(() =>{
        fetchUserDetail();
    },[]);

    const fetchUserDetail = () =>{
        http.post('/me').then((res)=>{
            setUserdetails(res.data);
        })
    }

    function renderElement(){
        if(userDetails){
            return <div>
                <h1>Dashboard Page</h1>
            <h4>Name</h4>
            <p>{userDetails.name}</p>
            <h4>Email</h4>
            <p>{userDetails.email}</p>
            </div>
        }
        else
        {
            return <p>Loading.....</p>
        }
    }

    return(
        <div>
            {renderElement()}
        </div>
    )
}