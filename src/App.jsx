import {HomeLayout, Landing, SingleCardPage, SetsPage, SingleSetPage, Cards, Error, SinglePageError, Series, DeckPage} from './pages/pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout/>,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing/>,
        errorElement: <SinglePageError/>,
      },
      {
        path: 'sets',
        element: <SetsPage/>,
        errorElement: <SinglePageError/>,
      },
      {
        path: 'series',
        element: <Series/>,
        errorElement: <SinglePageError/>,
      },
      {
        path: 'cards',
        element: <Cards/>,
        errorElement: <SinglePageError/>,
      },
      {
        path: 'deck',
        element: <DeckPage/>,
        errorElement: <SinglePageError/>,
      },
      {
        path: 'card/:id',
        element: <SingleCardPage/>,
        errorElement: <SinglePageError/>,
      },
      {
        path: 'sets/:id',
        element: <SingleSetPage/>,
        errorElement: <SinglePageError/>,
      },
      
    ]
  }
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
