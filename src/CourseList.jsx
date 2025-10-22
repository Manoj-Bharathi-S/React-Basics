import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/js.png";
import Course from "./Course";
import { useEffect, useState } from "react";

// Data List

function CourseList() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      img: html,
      course: "HTML",
      o_price: "$ 499",
      n_price: 299,
      rating: "4.5",
    },
    {
      id: 2,
      img: css,
      course: "CSS",
      o_price: "$ 499",
      n_price: 199,
      rating: "4.2",
    },
    {
      id: 3,
      img: js,
      course: "JavaScript",
      o_price: "$ 499",
      n_price: 349,
      rating: "4.5",
    },
    {
      id: 4,
      img: js,
      course: "React",
      o_price: "$ 199",
      n_price: 149,
      rating: "4.5",
    },
  ]);

// UseEffect is called when the state of a variable changes

  useEffect(()=>{
      console.log("Use Effect Called");
      console.log(courses); // State variables can be accessed
      // Using set methods are not recommended since they cause infinite loops
  });
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
  // Sort the data by price
  // courses.sort((x,y) => x.n_price - y.n_price)

  // Sort the data by rating
  // courses.sort((x,y) => x.rating-y.rating)

  // Filter the data
  // const under_200 = courses.filter((course) => course.n_price <= 200)

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
