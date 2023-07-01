import {Route, Routes,BrowserRouter} from 'react-router-dom'
import LoginPage from "./Components/LoginPage"
import Dashboard from "./Components/Dashboard"

const App = () => (
  <BrowserRouter>
   <Routes>
    <Route exact path="/" Component={LoginPage} />
    <Route exact path="/dashboard" Component={Dashboard} />
  </Routes>
  </BrowserRouter>
 
)
export default App