import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import NewCarsPage from '@/pages/NewCarsPage';
import ContactsPage from '@/pages/ContactsPage';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-cars" element={<NewCarsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
