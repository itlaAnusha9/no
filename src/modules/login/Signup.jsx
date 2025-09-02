
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    role: "student",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #2D5D7B, #A62D69)",
        position: "relative",
        overflow: "hidden",
        padding: "20px",
      }}
    >
      {/* Animated floating circles */}
      <svg
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.circle
            key={i}
            cx={Math.random() * 100 + "%"}
            cy={Math.random() * 100 + "%"}
            r={5 + Math.random() * 12}
            fill={i % 2 === 0 ? "#2D5D7B" : "#A62D69"}
            animate={{ cy: ["-10%", "110%"] }}
            transition={{
              repeat: Infinity,
              duration: 12 + Math.random() * 8,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </svg>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: "white",
          width: "100%",
          maxWidth: "500px",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 5px 25px rgba(0,0,0,0.2)",
          zIndex: 1,
          position: "relative",
        }}
      >
        <h4
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#2D5D7B",
          }}
        >
          Create Account
        </h4>

        <form onSubmit={handleSubmit}>
          {/* First + Last Name */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
            <div style={{ flex: 1 }}>
              <label htmlFor="firstName">First Name</label>
              <motion.input
                id="firstName"
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #2D5D7B",
                  marginTop: "5px",
                }}
                whileFocus={{ scale: 1.02, borderColor: "#A62D69" }}
                required
              />
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="lastName">Last Name</label>
              <motion.input
                id="lastName"
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #2D5D7B",
                  marginTop: "5px",
                }}
                whileFocus={{ scale: 1.02, borderColor: "#A62D69" }}
                required
              />
            </div>
          </div>

          {/* Phone */}
          <label htmlFor="phone">Phone Number</label>
          <motion.input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #2D5D7B",
              marginTop: "5px",
              marginBottom: "15px",
            }}
            whileFocus={{ scale: 1.02, borderColor: "#A62D69" }}
            required
          />

          {/* Email */}
          <label htmlFor="email">Email</label>
          <motion.input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter Email"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #2D5D7B",
              marginTop: "5px",
              marginBottom: "15px",
            }}
            whileFocus={{ scale: 1.02, borderColor: "#A62D69" }}
            required
          />

          {/* Role */}
          <label htmlFor="role">Role</label>
          <motion.select
            id="role"
            name="role"
            value={form.role}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #2D5D7B",
              marginTop: "5px",
              marginBottom: "15px",
            }}
            whileFocus={{ scale: 1.02, borderColor: "#A62D69" }}
          >
            <option value="student">Student</option>
            <option value="parent">Parent</option>
          </motion.select>

          {/* Username */}
          <label htmlFor="username">
            {form.role === "student" ? "Username" : "Username"}
          </label>
          <motion.input
            id="username"
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Create a username"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #2D5D7B",
              marginTop: "5px",
              marginBottom: "15px",
            }}
            whileFocus={{ scale: 1.02, borderColor: "#A62D69" }}
            required
          />

          {/* Password */}
          <label htmlFor="password">Password</label>
          <motion.input
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Create Password"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #2D5D7B",
              marginTop: "5px",
              marginBottom: "10px",
            }}
            whileFocus={{ scale: 1.02, borderColor: "#A62D69" }}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <motion.input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #2D5D7B",
              marginTop: "5px",
              marginBottom: "20px",
            }}
            whileFocus={{ scale: 1.02, borderColor: "#A62D69" }}
            required
          />

          <motion.button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              background: "#2D5D7B",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Sign Up
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Signup;