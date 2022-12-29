import './App.css';
import {Routes, Route} from 'react-router-dom';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';

function App() {
  return (
   <>
      <Routes>
          <Route path="/" element={<Posts/>}/>
          <Route path="/createPost" element={<CreatePost/>}/>
      </Routes>
    </>
  );
}

export default App;
