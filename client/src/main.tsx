import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';

import ErrorPage from './pages/ErrorPage.tsx';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import SignUp from './pages/SignUp.tsx';
import Calendar from './pages/Calendar.tsx';
// import GameBrowser from './pages/GameBrowser.tsx';
import Groups from './pages/Groups.tsx';
import Summary from './pages/Summary.tsx';
import HotGames from './pages/HotStuff.tsx';
import Group from './pages/Group.tsx';
import VillainList from './pages/VillianList.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/calendar',
        element: <Calendar />,
      },
      // {
      //   path: '/game-browser',
      //   element: <GameBrowser />,
      // },
      {
        path: '/groups',
        element: <Groups />,
      },
      {
        path: '/groups/:name',
        element: <Group />,
      },
      {
        path: '/summary',
        element: <Summary />,
      },
      {
        path: '/villian-list',
        element: <VillainList />,
      },
      {
        path: '/hot-games',
        element: <HotGames />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
