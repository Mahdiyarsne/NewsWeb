import Login from './admin/auth/Login';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './admin/dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import ViewNews from './admin/dashboard/components/news/ViewNews';
import Main from './admin/dashboard/components/main/Main';
import AddNews from './admin/dashboard/components/news/AddNews';
import EditNews from './admin/dashboard/components/news/EditNews';
import ViewCategory from './admin/dashboard/components/category/ViewCategory';
import AddCategory from './admin/dashboard/components/category/AddCategory';

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
        <Route
          path='/edit-news/:id'
          element={<EditNews />}
        />

        {/* مسیر دسته بندی */}
        <Route
          path='/view-category'
          element={<ViewCategory />}
        />
        <Route
          path='/add-category'
          element={<AddCategory />}
        />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
