import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/js.png";
import Course from "./Course";

// Data List

function CourseList() {
  const courses = [
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
  ];

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
    />
  ));

  return <>{CourseList}</>;
}

export default CourseList;
