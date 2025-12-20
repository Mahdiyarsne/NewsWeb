import Login from './admin/auth/Login';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ViewNews from './admin/dashboard/components/news/ViewNews';
import Main from './admin/dashboard/components/main/Main';
import AddNews from './admin/dashboard/components/news/AddNews';
import EditNews from './admin/dashboard/components/news/EditNews';
import ViewCategory from './admin/dashboard/components/category/ViewCategory';
import AddCategory from './admin/dashboard/components/category/AddCategory';
import EditCategory from './admin/dashboard/components/category/EditCategory';
import ViewVideo from './admin/dashboard/components/video/ViewVideo';
import AddVideo from './admin/dashboard/components/video/AddVideo';
import ViewUsers from './admin/dashboard/components/users/ViewUsers';
import AddUsers from './admin/dashboard/components/users/AddUsers';
import EditUsers from './admin/dashboard/components/users/EditUsers';
import UpdateProfile from './admin/dashboard/components/users/UpdateProfile';
import HomeScreen from './pages/HomeScreen';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Detail from './pages/Detail';

function App() {
  return (
    <>
      <Routes>
        {/* مسیرهای صفحه اصلی */}
        <Route
          path='/'
          element={<HomeScreen />}
        />
        <Route
          path='/about-us'
          element={<AboutUs />}
        />
        <Route
          path='/contact-us'
          element={<ContactUs />}
        />

        <Route
          path='/detail/:id'
          element={<Detail />}
        />

        {/* مسیره های پنل آدمین */}
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
        <Route
          path='/edit-category/:id'
          element={<EditCategory />}
        />

        {/* مسیرهای ویدیو */}
        <Route
          path='/view-video'
          element={<ViewVideo />}
        />
        <Route
          path='/add-video'
          element={<AddVideo />}
        />

        {/* مسیره های کاربران */}
        <Route
          path='/view-users'
          element={<ViewUsers />}
        />

        <Route
          path='/add-users'
          element={<AddUsers />}
        />
        <Route
          path='/edit-users/:id'
          element={<EditUsers />}
        />

        <Route
          path='/update-profile/:id'
          element={<UpdateProfile />}
        />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
