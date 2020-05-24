import React from 'react';


const Login = (props) => {
    return ( 
        <div>
            {/* Form Starts Here*/}
            <form>
                <input 
                name = "email"
                placeholder = "Email:"
                >
                </input>

                <input
                name = "password"
                placeholder = "Password:">
                </input>

                <button 
                name="button"
                >
                Submit
                </button>
            </form>
        </div>
     );
}
 
export default Login;