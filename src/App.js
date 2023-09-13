
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/ReduxStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import VideoContainer from './components/VideoContainer';
import MainContainer from './components/MainContainer';
import WatchPage from "./components/WatchPage.js"
import SearchComponent from './components/SearchComponent';

const approuter = createBrowserRouter([
  {
      path:"/",
      element:<Body/>,
      children:[{
        path:"/",
        element:<MainContainer/>
      },{
        path:"watch",
        element:<WatchPage/>
      }]
  },
]) 
function App() {
  return (
    <Provider store={store}>
    <div className="App bg-slate-100">
      <BrowserRouter>
      <Head/>
      <Routes>
      <Route path='/'element={<Body/>}>
      <Route path='/'element={<MainContainer/>}></Route>
      <Route path='watch'element={<WatchPage/>}></Route>
      <Route path='/search/:search' element ={<SearchComponent/>}></Route>
      </Route>
      
      
    
      </Routes>
     </BrowserRouter>
    </div>
    </Provider>
  );
}



/*
Head
Body
 Sidebar
   Menu items
 Main body
   button
   videocards
     video

*/

export default App;
