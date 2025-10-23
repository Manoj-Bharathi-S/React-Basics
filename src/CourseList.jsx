import Course from "./Course";
import { useEffect, useState } from "react";

// Data List

function CourseList() {
  const [courses, setCourses] = useState(null);

  const [error, setError] = useState(null);
  // UseEffect is called when the state of a variable changes

  // Here fetch is used to get data from api as a promise and passed to the set method
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3000/courses")
        .then((response) => {
          if (!response.ok) {
            throw Error("Could not fetch the data");
          }
          console.log(response);
          return response.json();
        })
        .then((data) => {
          setCourses(data);
        })
        .catch((error) => {
          console.log(error);
          if (error.message.includes("Failed")) {
            setError("Server Can't be reached at the moment");
          } else {
            setError(error.message);
          }
        });
    }, 2000);
  }, []);

  if (!courses) {
    return (
      <>
        {!error && <center><img src="data\assets\loading.gif"></img></center>}
        {error && <p>{error}</p>}
      </>
    );
  }
  /*
UseEffect is called when only if the state of a variable is changed
UseEffect(function,[dependencies]) - runs only if the dependencies state is changed
UseEffect(function,[]) - runs only when the page is loaded after that it won't run
UseEffect(function) - run when any variable state is changed

*/

  function HandleDelete(id) {
    console.log(id);
    const afterDeletion = courses.filter((course) => course.id != id);
    setCourses(afterDeletion);
  }

  // Mapping the data to Course element
  const CourseList = courses.map((course) => (
    <Course
      key={course.id}
      img={course.img}
      course={course.course}
      o_price={course.o_price}
      n_price={course.n_price}
      rating={course.rating}
      handle_delete={() => HandleDelete(course.id)}
    />
  ));

  return <>{CourseList}</>;
}

export default CourseList;
