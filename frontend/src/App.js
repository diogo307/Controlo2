import {BrowserRouter, Routes, Route, Navigate, Switch} from 'react-router-dom'

// pages & components
import Control from './pages/Control'
import IdentitiesAdd from './pages/IdentitiesAdd'
import IdentitiesDashboard from './pages/IdentitiesDashboard'
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>  
      <div className="App">
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              exact path="/" 
              element={<Control />} 
            />
            <Route 
              path="/identities_add" 
              element={<IdentitiesAdd />} 
            />
            <Route 
              path="/identities_dashboard" 
              element={<IdentitiesDashboard />} 
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;