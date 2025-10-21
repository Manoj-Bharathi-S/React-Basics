import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.png'
import Course from './Course';

function CourseList() {
    const courses = [
      {
        img: html,
        course: "HTML",
        o_price: "$ 499",
        n_price: "$ 299",
        rating: "4.5",
      },
      {
        img: css,
        course: "CSS",
        o_price: "$ 499",
        n_price: "$ 299",
        rating: "4.5",
      },
      {
        img: js,
        course: "JavaScript",
        o_price: "$ 499",
        n_price: "$ 349",
        rating: "4.5",
      },
      {
        img: js,
        course: "React",
        o_price: "$ 199",
        n_price: "$ 149",
        rating: "4.5",
      },
    ];
    
    const CourseList = courses.map((course) => 
    <Course img={course.img} 
    course={course.course} 
    o_price={course.o_price} 
    n_price={course.n_price} 
    rating={course.rating}/>)

  return (
    <>
    {CourseList}
    </>
  );
}

export default CourseList;