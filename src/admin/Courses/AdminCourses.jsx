import React, { useState } from "react";
import Layout from "../Utils/Layout";
import { useNavigate } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";
import "./AdminCourses.css";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../../main";

const categories = [
  "Technology",
  "Designing",
  "Business, Management Marketing",
];

const AdminCourses = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");
 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [learn, setLearn] = useState("");
  const [benefits, setBenefits] = useState("");
  const [demand, setDemand] = useState("");
  const [scope, setScope] = useState("");
  const [ positions, setPositions] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const { courses, fetchCourses } = CourseData();

  const submitHandler = async (e) => {
    e.preventDefault();
    setBtnLoading(true);

    const myForm = new FormData();

    
 
    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("learn", learn);
    myForm.append("benefits", benefits);
    myForm.append("demand", demand);
    myForm.append("scope", scope);
    myForm.append("positions", positions);
    myForm.append("category", category);
    myForm.append("price", price);
    myForm.append("duration", duration);
    myForm.append("file", image);

    try {
      const { data } = await axios.post(`${server}/api/course/new`, myForm, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      toast.success(data.message);
      setBtnLoading(false);
      await fetchCourses();
      setImage("");
      setTitle("");
      setDescription("");
      setLearn("");
      setBenefits("");
      setDemand("");
      setScope("");
      setPositions("");
      setDuration("");
      setImagePrev("");
      setPrice("");
      setCategory("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Layout>
      <div className="admin-courses">
        <div className="left">
          <h3>All Courses</h3>
          <div className="dashboard-content">
            {courses && courses.length > 0 ? (
              courses.map((e) => {
                return <CourseCard key={e._id} course={e} />;
              })
            ) : (
              <p>No Courses Yet</p>
            )}
          </div>
        </div>

        <div className="right">
          <div className="add-course">
            <div className="course-form">
              <h2>Add Course</h2>
              <form onSubmit={submitHandler}>
                <label htmlFor="text">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />

                <label htmlFor="text">Description</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />

                 <label htmlFor="text">Who Can Learn This Course</label>
                <input
                  type="text"
                  value={learn}
                  onChange={(e) => setLearn(e.target.value)}
                  required
                />

                <label htmlFor="text">Benefits</label>
                <input
                  type="text"
                  value={benefits}
                  onChange={(e) => setBenefits(e.target.value)}
                  required
                />
                
                <label htmlFor="text">Demands</label>
                  <input
                  type="text"
                  value={demand}
                  onChange={(e) => setDemand(e.target.value)}
                  required
                />

                 <label htmlFor="text">Scope</label>
                <input
                  type="text"
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  required
                />

                  
                <label htmlFor="text">Positions</label>
                <input
                  type="text"
                  value={positions}
                  onChange={(e) => setPositions(e.target.value)}
                  required
                />
              
                <label htmlFor="text">Price</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value={""}>Select Category</option>
                  {categories.map((e) => (
                    <option value={e} key={e}>
                      {e}
                    </option>
                  ))}
                </select>

                <label htmlFor="text">Duration</label>
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                />

                <input type="file" required onChange={changeImageHandler} />
                {imagePrev && <img src={imagePrev} alt="" width={300} />}

                <button
                  type="submit"
                  disabled={btnLoading}
                  className="common-btn"
                >
                  {btnLoading ? "Please Wait..." : "Add"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminCourses;
