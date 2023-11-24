import './styles/styles.css'
import { HomeCover } from './components/HomeCover'
import { About } from './components/About'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeCover/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
