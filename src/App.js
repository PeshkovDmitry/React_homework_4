import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='*' element={<p>Страница не найдена</p>} />
      </Routes>
    </Router>
  );
}

export default App;
