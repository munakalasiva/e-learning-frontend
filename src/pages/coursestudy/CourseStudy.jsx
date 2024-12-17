import React, { useEffect } from "react";
import "./coursestudy.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";

const CourseStudy = ({ user }) => {
  const params = useParams();

  const { fetchCourse, course } = CourseData();
  const navigate = useNavigate();

  if (user && user.role !== "admin" && !user.subscription.includes(params.id))
    return navigate("/");

  useEffect(() => {
    fetchCourse(params.id);
  }, []);
  return (
    <>
      {course && (
        <div className="course-study-page">
          <img src={`${server}/${course.image}`} alt="" width={300} />
          <div className="content">
          <h2><span className="main">Title  :  </span> {course.title}</h2>
          <h4><span className="main">Description:</span>   {course.description}</h4>
          <h4><span className="main">Learn:</span>    {course.learn}</h4>
          <h4><span className="main">Benefits:</span>    {course.benefits}</h4>
          <h4><span className="main">Demand:</span>    {course.demand}</h4>
          <h4><span className="main">Scope:</span>    {course.scope}</h4>
          <h4><span className="main">Positions:</span>    {course.positions}</h4>

          <h5><span className="main">Duration :</span>    {course.duration} weeks</h5>
          </div>
          
          <Link to={`/lectures/${course._id}`}>
            <button className="lec-btn">Lectures</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default CourseStudy;
