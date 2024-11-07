import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/HomePage/HomePage'
import LayoutCommon from './pages/LayoutCommon/LayoutCommon';
import FranchisePage from "./pages/FranchisePage/FranchisePage.tsx";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' Component={LayoutCommon}>
          <Route index Component={HomePage} />
          <Route path='/nhuong-quyen' Component={FranchisePage} />
        </Route>
      </Routes>
    </Router>    
  )
}

export default App
