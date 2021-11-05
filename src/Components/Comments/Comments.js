import React, { useState } from "react";
import './comments.css'
import { db } from "../../firebase_config";
import { collection, addDoc } from "firebase/firestore";
import ShowComments from "./ShowComments";

function Comments() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [loading, setLoading] = useState(false);
  const date = new Date().toLocaleDateString();

  const AddComments = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "Comments"), {
        Name: name,
        Email: email,
        Comment: comments,
        Date: date,
      });
      console.log("Comments added at", docRef.id);
    } catch (e) {
      console.log(e.message);
    }
    setLoading(false);
  };

  return (
    <>
      <div className='container-fluid comments_wrapper'>
        <div className="container text-center" id='com_he'>
          <span className='comments'>Comments</span>
        </div>
        <div className="container">
          <form className="form-group">
            <label className='label_color'>Name</label>
            <input
              type="text"
              className='form-control input_field'
              required
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />{" "}
            <br />
            <label className='label_color'>Email</label>
            <input
              type="email"
              className='form-control input_field'
              required
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <br />
            <label className='label_color'>Comments | Suggestions</label>
            <textarea
              className='form-control input_field'
              placeholder="Enter your comments | suggestion here"
              cols="30"
              rows="7"
              required
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            ></textarea>{" "}
            <br />
            <button onClick={AddComments} className='com_btn'>
              {loading ? "Adding Comment..." : "Add Comment"}
            </button>
          </form>
        </div>
        <br />
        <div className="container">
          <ShowComments />
        </div>
      </div>
    </>
  );
}

export default Comments;
