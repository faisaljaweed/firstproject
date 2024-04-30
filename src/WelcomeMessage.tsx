import { FC } from "react";

type WelcomeMessageProps={
isLoggedIn:boolean;
user?:{
    name:string;
    type:"admin" | "guest" | "moderator";
}
}
const WelcomeMessage: FC<WelcomeMessageProps>=({isLoggedIn,user})=>{
    if(user && user.type==="moderator"){
        return<p>Ask admin for access</p>
    }
    else if(user?.type==="guest"){
        return<p>No access</p>
    }
  return(
        <div>
            {isLoggedIn?<h1>Heello EveryOne</h1>:<h1>Soory</h1>}
            {user&&<h2>Name {user.name}</h2>}
        </div>
    );
}
export default WelcomeMessage;