import './App.css'
import CourseList from './CourseList';
import { Link } from 'react-router-dom';

function App() {

  return (
    <>
      <CourseList/>
      <Link className="btn btn-primary" to="/login">Login</Link>
      <Link className="btn btn-primary" to="/counter">Counter</Link>
    </>
  );
}

export default App
