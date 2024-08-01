import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/HomePage/HomePage'
import LayoutCommon from './pages/LayoutCommon/LayoutCommon';
import CustomPage from './pages/CustomPage/CustomPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' Component={LayoutCommon}>
          <Route index Component={HomePage} />
          <Route path='custom' Component={CustomPage} />
        </Route>
      </Routes>
    </Router>    
  )
}

export default App
