 
import './App.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import BookList from './pages/bookList'
import AddBook from './pages/addBook'
import BookDetails from './pages/bookDetails'
import ContactUs from './pages/contactUs'

function App() {
   
  const router = createBrowserRouter([
    {
      path:"/",
      element:<BookList/>
    },
    {
      path:"/add-new",
      element:<AddBook/>
    },
    // {
    //   path:"/books/:id",
    //   element:<BookDetails/>
    //
    // form title,author,genre,available:true/false radio button
    //summary, image submit 
    // },
    {
      path:"/books/details",
      element:<BookDetails/>
    },
    {
      path:"/contact-us",
      element:<ContactUs/>
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
     </>
      
  )
}

export default App
