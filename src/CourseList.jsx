import Course from "./Course";
import useFetch from "./useFetch";


function CourseList() {
  // Destructuring the data from the useFetch
  
  const [courses, error] = useFetch("http://localhost:3000/courses");

  if (!courses) {
    return (
      <>
        {!error && (
          <center>
            <img src="data\assets\loading.gif"></img>
          </center>
        )}
        {error && <p>{error}</p>}
      </>
    );
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
