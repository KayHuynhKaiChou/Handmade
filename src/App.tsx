import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/HomePage/HomePage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' Component={HomePage} />
      </Routes>
    </Router>    
  )
}

export default App
