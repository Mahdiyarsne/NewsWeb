import Login from './admin/auth/Login';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './admin/dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import ViewNews from './admin/dashboard/components/news/ViewNews';
import Main from './admin/dashboard/components/main/Main';
import AddNews from './admin/dashboard/components/news/AddNews';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/administrator'
          element={<Login />}
        />
        <Route
          path='/dashboard'
          element={<Main />}
        />
        <Route
          path='/add-news'
          element={<AddNews />}
        />
        <Route
          path='/view-news'
          element={<ViewNews />}
        />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
