import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <main className="form-signin w-100 m-auto">
            <form>
                <img className="logo-image" src="/logo.png" alt="Dogger app logo"/>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Your login" />
                            <label htmlFor="floatingInput">Login</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                    </div>


                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </main>
);
}

export default App;
