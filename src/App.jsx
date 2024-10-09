 
import './App.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import BookList from './pages/bookList'
import AddBook from './pages/addBook'
import BookDetails from './pages/bookDetails'
import ContactUs from './pages/contactUs'
import AboutUs from './pages/aboutUs'
import Categories from './pages/Categories'
import HomePage from './pages/homePage'

function App() {
   
  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/booklist",
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
      path:"/categories",
      element:<Categories/>
    },
    {
      path:"/about",
      element:<AboutUs/>
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
