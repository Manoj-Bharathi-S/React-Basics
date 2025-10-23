import './App.css'
import CourseList from './CourseList';
import { Link } from 'react-router-dom';

function App() {

  return (
    <>
      <CourseList/>
      <Link className="btn btn-primary" to="/login">Login</Link>
    </>
  );
}

export default App
