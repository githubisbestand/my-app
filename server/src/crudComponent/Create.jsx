import React, { useEffect, useState } from "react";
import { createUser } from "../react-crud/slice/userDetails";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Create() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        profile_image_path: null  // Initialize file input state to null
    });

    const handleChange = (e) => {
        if (e.target.name === "profile_image_path") {
            // Update file input state with selected file
            setValues({ ...values, [e.target.name]: e.target.files[0] });
        } else {
            setValues({ ...values, [e.target.name]: e.target.value });
        }
    };

    const validateForm = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("password", values.password);
        formData.append("profileImage", values.profile_image_path); // Append file to FormData

        dispatch(createUser(formData));
        navigate("/");
    };

    return (
        <div className="container">
            <h2>Sign Up</h2>
            <form onSubmit={validateForm}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required autoComplete="off" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required autoComplete="off" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required autoComplete="new-password" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="file" id="profile_image_path" name="profile_image_path" onChange={handleChange} />
                </div>
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    );
}

export default Create;
