import Course from "./Course";
import { useEffect, useState } from "react";

// Data List

function CourseList() {
  const [courses, setCourses] = useState(null);

// UseEffect is called when the state of a variable changes

// Here fetch is used to get data from api as a promise and passed to the set method
  useEffect(()=>{
      fetch("http://localhost:3000/courses")
      .then(response => {
        console.log(response)
        return response.json()
      }).then(data => {setCourses(data)})
  },[]);

  if (!courses){
    return <></>
  }
/*
UseEffect is called when only if the state of a variable is changed
UseEffect(function,[dependencies]) - runs only if the dependencies state is changed
UseEffect(function,[]) - runs only when the page is loaded after that it won't run
UseEffect(function) - run when any variable state is changed

*/

  function HandleDelete(id){
    console.log(id);
    const afterDeletion = courses.filter((course) => course.id != id);
    setCourses(afterDeletion);
  };

  // Mapping the data to Course element
  const CourseList = courses.map((course) => (
    <Course
      key={course.id}
      img={course.img}
      course={course.course}
      o_price={course.o_price}
      n_price={course.n_price}
      rating={course.rating}
      handle_delete = {()=> HandleDelete(course.id)}
    />
  ));

  return <>{CourseList}</>;
}

export default CourseList;
