import React from 'react'
import Contact from './home'
import AddContact from './addContact'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ViewContact from './viewContact'
import UpdateContact from './updateContact'
import Home from './home';

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
                    path= '/UpdateContact'
                    element= {<UpdateContact />}
                />
                <Route
                    path= '/AddContact'
                    element= {<AddContact />}
                />
            </Routes>
        </Router>
    </>
  )
}

export default App