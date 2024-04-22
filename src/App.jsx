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
                <Route 
                    path='/sign-up'
                    element={<SignUp />}
                />
                <Route 
                    path='/sign-in'
                    element={<SignIn />}
                />
            </Routes>
        </Router>
    </>
  )
}

export default App