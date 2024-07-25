import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Routes } from '~/routes/Routes';

const routes = createRoutesFromElements(Routes);
const router = createBrowserRouter(routes);

// TODO: Error boundary
// TODO: 404 page
// TODO: Permissions component
// TODO: Admin user-cards
// TODO: Logic check
// TODO: Create cards component
// TODO: Style
// TODO: Linter

function App() {
  return <RouterProvider router={router} />;
}

export default App
