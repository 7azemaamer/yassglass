import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import Home from "./Components/Home/Home"
import NotFound from "./Components/NotFound/NotFound"
import ContactUs from "./Components/ContactUS/ContactUS"
import FAQ from "./Components/FAQ/FAQ"

let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home />, index: true },
      { path: "/FAQs", element: <FAQ /> },
      { path: "/Contact-us", element: <ContactUs /> },
      { path: "*", element: <NotFound /> },
    ],
  },
])

function App() {
  return <RouterProvider router={routers}></RouterProvider>
}
export default App
