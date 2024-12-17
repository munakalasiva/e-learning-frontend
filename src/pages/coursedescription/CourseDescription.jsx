import React, { useEffect, useState } from "react";
import "./coursedescription.css";
import { useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { UserData } from "../../context/UserContext";
import Loading from "../../components/loading/Loading";

const CourseDescription = ({ user }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { fetchUser } = UserData();

  const { fetchCourse, course, fetchCourses, fetchMyCourse } = CourseData();

  useEffect(() => {
    fetchCourse(params.id);
  }, []);

  const checkoutHandler = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);

    const {
      data: { order },
    } = await axios.post(
      `${server}/api/course/checkout/${params.id}`,
      {},
      {
        headers: {
          token,
        },
      }
    );

    const options = {
      key: "rzp_live_EJ1uL8fl3cvGHL", // Enter the Key ID generated from the Dashboard
      amount: order.id, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "E learning", //your business name
      description: "Learn with us",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1

      handler: async function (response) {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
          response;

        try {
          const { data } = await axios.post(
            `${server}/api/verification/${params.id}`,
            {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
            },
            {
              headers: {
                token,
              },
            }
          );
          console.log(`user id value${params.id}`);
          await fetchUser();
          await fetchCourses();
          await fetchMyCourse();
          toast.success(data.message);
          setLoading(false);
          navigate(`/payment-success/${razorpay_payment_id}`);
        } catch (error) {
          toast.error(error.response.data.message);
          setLoading(false);
        }
      },
      theme: {
        color: "#8a4baf",
      },
    };
    const razorpay = new window.Razorpay(options);

    razorpay.open();
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) :  (
        <>
          {course && (
            <div className="course-description">
              <div className="course-header">
                <img src={`${server}/${course.image}`} alt="" className="course-image" />
                <div className="course-info">
                  <h2 className="course-title">{course.title}</h2>
                  <p className="">Duration: {course.duration} weeks</p>
                </div>
              </div>
              <div className="course-container">
      
                <div className="course-section">
                <h3 className="section-title">Description:</h3> 
                <p className="section-content">{course.description}</p>
                </div>
      
                <div className="course-section">
                <h3 className="section-title">Who Can Learn This Course:</h3> 
                <p className="section-content">{course.learn}</p>
                </div>
                
                <div className="course-section">
                <h3 className="section-title">Benefits:</h3> 
                <p className="section-content">{course.benefits}</p>
                </div>
      
                <div className="course-section">
                <h3 className="section-title">Market Demand:</h3> 
                <p className="section-content">{course.demand}</p>
                </div>
      
                <div className="course-section">
                <h3 className="section-title">Scope:</h3> 
                <p className="section-content">{course.scope}</p>
                </div>
      
                <div className="course-section">
                <h3 className="section-title">Job Positions:</h3> 
                <p className="section-content">{course.positions}</p>
                </div>
      
                </div>
                
              <p className="price-para">Let's get started with the course at ₹{course.price}</p>
              {user && user.subscription.includes(course._id) ? (
                <button
                  onClick={() => navigate(`/course/study/${course._id}`)}
                  className="common-btn"
                >
                  STUDY
                </button>
              ) : (
                <button onClick={checkoutHandler} className="common-btn">
                  BUY NOW
                </button>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CourseDescription;





