import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Routes/routes';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div>
      {/* <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}

      <RouterProvider router={routes}>

      </RouterProvider>

    </div>
  );
}

export default App;
