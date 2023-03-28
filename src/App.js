import './App.css';
import Header from './component/Header/Header';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NotFoundPage from './component/NotFoundPage/NotFoundPage';
import LoginPage from './component/LoginPage/LoginPage';
import TaskPage from './component/TaskPage/TaskPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useNavigate();

  return (
    localStorage.getItem('token') ? (
      <>
        <div>
          <Header />
          <div className='content'>
            <Routes>
              <Route path="/" element={<TaskPage show={false}/>} />
              <Route path="/:id" element={<TaskPage show={true} />} />
            </Routes>
          </div>
        </div>
      </>
    ) : (
      <>
        <Routes>
          <Route path="/login/" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </>
    )
  );
}

export default App;