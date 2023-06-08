import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homes from "./src/pages/homes";
import Menu from "./src/pages/menu";
import Platillos from "./src/pages/platillos";
import Reservar from "./src/pages/reservar";
import './src/styles/root.css'


function App() {

  const root = createBrowserRouter([
    {
      path: "/",
      element: <Homes />
    },
    {
      path: "/menu",
      element: <Menu />,

    },
    {
      path: '/menu/:id',
      element: <Platillos />
    },
    {
      path:'/reservar',
      element:<Reservar/>
    }
  ])


  return <RouterProvider router={root} />;
}

export default App;
