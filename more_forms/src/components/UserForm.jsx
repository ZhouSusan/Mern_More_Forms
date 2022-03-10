import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [pswErr, setPswErr] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [cpsw, setCPsw] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be 2 characters or longer!")
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be 2 characters or longer!")
        }  else {
            setLastNameError("");
        }
    }

    const handleEmailError = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters or longer!");
        } else {
            setEmailError("");
        }
    }

    const handlePasswordError = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPswErr("Password is required!");
        } else if (e.target.value.length < 8) {
            setPswErr("Password must be at least 8 characters or longer!");
        } else {
            setPswErr("");
        }
    }

    const handleConfirmPasswordError = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            setCPsw("Password is required!");
        } else if (e.target.value.length < 8) {
            setCPsw("Password must be at least 8 characters or longer!");
        } else if (password !== confirmPassword) {
            setCPsw("Password must be match!");
        } else {
            setCPsw("");
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };
    return(
        <div>
            <form onSubmit={createUser}>
                {
                    hasBeenSubmitted ? 
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3>
                }
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstName" onChange={handleFirstName}/>
                    {
                        firstNameError ?
                        <p style={{color:"red"}}>{firstNameError}</p> :
                        ""
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" name="lastName" onChange={handleLastName}/>
                    {
                        lastNameError ?
                        <p style={{color:"red"}}>{lastNameError}</p> :
                        ""
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" name="email" onChange={handleEmailError}/>
                    {
                        emailError ? 
                        <p style={{color:"red"}}>{emailError}</p> :
                        ""
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" onChange={handlePasswordError}/>
                    {
                        pswErr ?
                        <p style={{color:"red"}}>{pswErr}</p> :
                        ""
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" name="confirmPassword" onChange={handleConfirmPasswordError}/>
                    {
                        cpsw ?
                        <p style={{color:"red"}}>{cpsw}</p> :
                        ""
                    }
                </div>
                <input type="submit" value="Create User"/>
            </form>
            <div>
            <h1>Your Form Data</h1>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    )
}

export default UserForm;