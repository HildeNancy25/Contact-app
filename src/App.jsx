import React from 'react'
import AddContact from './addContact'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ViewContact from './viewContact'
import UpdateContact from './updateContact'
import Home from './home';
import SignIn from './Authentication/signIn';
import SignUp from './Authentication/signUp';

function App() {
  
  return (
    <>
        <Router>
            <Routes>
                <Route 
                    path= '/'
                    element= {<SignIn />}
                /> 
                <Route 
                    path= '/sign-up'
                    element= {<SignUp/>}
                /> 
                <Route 
                    path= '/home'
                    element= {<Home />}
                />
                <Route
                    path= '/view/:id'
                    element= {<ViewContact />}
                />
                <Route
                    path= '/update-contact/:id'
                    element= {<UpdateContact />}
                />
                <Route
                    path= '/add-contact'
                    element= {<AddContact />}
                />
               
            </Routes>
        </Router>
    </>
  )
}

export default App