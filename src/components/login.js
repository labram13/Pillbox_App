import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export function Login(props) {
    const [logged, setIsLogged] = useState(false)

    const handleSetIsLogged = (changeLogStatus) => {
        setIsLogged(changeLogStatus);
    }

    return (


        <div>
            {logged ? (
                <Redirecting />
            ) : (
                <SignInForm handleSetIsLogged={handleSetIsLogged} handleSetOrganizedPillbox={props.handleSetOrganizedPillbox} handleSetUser={props.handleSetUser} handleSetUserPrescriptions={props.handleSetUserPrescriptions} />

            )}
        </div>

    )
}

function SignInForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            // implementation
            fetch('/data/users.json')
                .then((response) => {
                    const dataPromise = response.json();
                    return dataPromise;
                }).then((response) => {
                    const data = response;
                    const email = e.target.email.value;
                    const password = e.target.password.value;
                    const user = data.filter((userObj) => {
                        return userObj.email === email;
                    })

                    console.log(user[0].password);

                    if (user.length === 0) {
                        toast.error("Invalid email");
                    }
                    if (user[0].password !== password) {
                        toast.error("Invalid password");
                    }

                    if (user[0].password === password && user[0].email === email) {
                        toast.success('Login successful');
                        setUsername(user[0].user);
                    }
                    const weeklyPills = { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] };
                    user[0].prescriptions.forEach(pillObj => {
                        pillObj.days.forEach(day => {
                            weeklyPills[day].push(pillObj)
                        });
                    });

                    props.handleSetOrganizedPillbox(weeklyPills);
                    props.handleSetUser(user[0].user);
                    props.handleSetUserPrescriptions(user[0].prescriptions);
                    props.handleSetIsLogged(true);

                }).catch((error) => {
                    toast.error('Failed to Login due to : ' + error.message)
                    console.log(error);
                });

        }
    }


    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Your Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Your Password');
        }
        return result;
    }


    return (
        <div className='row'>
            <ToastContainer />
            <div className='offset-lg-3 col-lg-6'>
                <form onSubmit={ProceedLogin} className='container'>
                    <div className='card customMargin'>
                        <div className='card-header'>
                            <h2>User Login</h2>
                        </div>
                        <div className='card-body'>
                            <div className='form-group'>
                                <label className='col-sm-3 col-form-label'>Email<span className='errormsg'>*</span></label>
                                <input className='form-group' name='email' value={username} onChange={e => setUsername(e.target.value)}></input>
                            </div>
                            <div className='form-group'>
                                <label className='col-sm-3 col-form-label'>Password <span className='errormsg'>*</span></label>
                                <input className='form-group' name='password' type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <button type='submit' className='btn btn-primary'>Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

function Redirecting(props) {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/mypillbox');
        }, 2000)
    })
    return (
        <div className='row'>
            <h1>Redirecting you your prescription!</h1>
        </div>
    )
}


