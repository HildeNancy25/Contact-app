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
                    path= '/:id'
                    element= {<ViewContact />}
                />
                <Route
                    path= '/UpdateContact/:id'
                    element= {<UpdateContact />}
                />
                <Route
                    path= '/AddContact'
                    element= {<AddContact />}
                />
                <Route 
                    path='/SignUp'
                    element={<SignUp />}
                />
                <Route 
                    path='/SignIn'
                    element={<SignIn />}
                />
            </Routes>
        </Router>
    </>
  )
}

export default App