import React, { useState } from 'react'
import './Login.css'

function Login() {
    const [name, setName] = useState("")
    const handleClick = () =>  {
        if(name.length < 3){
            alert("Your name length can not be lower than 3")
        }else{
            localStorage.setItem('name', JSON.stringify(name));
            setName({ userName: name });
        }}  
    return (
        <>
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login">
                            <div className="login__field">
                                <i className="login__icon fas fa-user" />
                                <input type="text" className="login__input" placeholder="User name" onChange={e => setName(e.target.value)} />
                            </div>
                            <button className="button login__submit" onClick={() => handleClick()}>
                                <span className="button__text">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right" />
                            </button>
                        </form>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4" />
                        <span className="screen__background__shape screen__background__shape3" />
                        <span className="screen__background__shape screen__background__shape2" />
                        <span className="screen__background__shape screen__background__shape1" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login