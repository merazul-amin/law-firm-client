import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Routes/routes';

function App() {
  return (
    <div className="App">
      <h1 className='text-8xl'>Hello World</h1>
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  );
}

export default App;
