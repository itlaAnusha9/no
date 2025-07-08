
// import React, { useState } from "react";

// function ChildProfile() {
//   const [child, setChild] = useState({
//     name: "",
//     class: "",
//     gender: "",
//     dob: "",
//     contact: "",
//     email: "",
//     guardian: "",
//     address: "",
//   });

//   const [isEditing, setIsEditing] = useState(true);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setChild((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsEditing(false);
//   };

//   // Styles
//   const styles = {
//     container: {
//       maxWidth: "900px",
//       margin: "0 auto",
//       padding: "2rem",
//       fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     },
//     title: {
//       textAlign: "center",
//       color: "#333",
//       marginBottom: "2rem",
//       fontSize: "2rem",
//     },
//     accent: {
//       color: "#2D5D7B",
//     },
//     form: {
//       background: "#fff",
//       padding: "2rem",
//       borderRadius: "8px",
//       boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//     },
//     section: {
//       marginBottom: "2rem",
//     },
//     sectionTitle: {
//       color: "#2D5D7B",
//       marginBottom: "1rem",
//       paddingBottom: "0.5rem",
//       borderBottom: "1px solid #eee",
//     },
//     formGrid: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//       gap: "1.5rem",
//     },
//     formGroup: {
//       marginBottom: "1rem",
//     },
//     label: {
//       display: "block",
//       marginBottom: "0.5rem",
//       color: "#555",
//       fontWeight: "500",
//     },
//     input: {
//       width: "100%",
//       padding: "0.75rem",
//       border: "1px solid #ddd",
//       borderRadius: "4px",
//       fontSize: "1rem",
//       transition: "border-color 0.3s",
//     },
//     inputFocus: {
//       outline: "none",
//       borderColor: "#2D5D7B",
//     },
//     actions: {
//       textAlign: "center",
//       marginTop: "2rem",
//     },
//     button: {
//       backgroundColor: "#2D5D7B",
//       color: "white",
//       border: "none",
//       padding: "0.75rem 2rem",
//       fontSize: "1rem",
//       borderRadius: "4px",
//       cursor: "pointer",
//       transition: "background-color 0.3s",
//     },
//     buttonHover: {
//       backgroundColor: "#1a3a52",
//     },
//     profileView: {
//       background: "#fff",
//       padding: "2rem",
//       borderRadius: "8px",
//       boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//     },
//     profileSections: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//       gap: "2rem",
//     },
//     infoItem: {
//       marginBottom: "1rem",
//       paddingBottom: "1rem",
//       borderBottom: "1px solid #f5f5f5",
//     },
//     infoLabel: {
//       fontWeight: "600",
//       color: "#555",
//       marginRight: "0.5rem",
//     },
//     infoValue: {
//       color: "#333",
//     },
//     highlight: {
//       color: "#2D5D7B",
//       fontWeight: "500",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>
//         Child <span style={styles.accent}>Profile</span>
//       </h2>

//       {isEditing ? (
//         <form onSubmit={handleSubmit} style={styles.form}>
//           <div style={styles.section}>
//             <h3 style={styles.sectionTitle}>Personal Information</h3>
//             <div style={styles.formGrid}>
//               <div style={styles.formGroup}>
//                 <label style={styles.label}>Full Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={child.name}
//                   onChange={handleChange}
//                   required
//                   style={styles.input}
//                 />
//               </div>
//               <div style={styles.formGroup}>
//                 <label style={styles.label}>Class</label>
//                 <input
//                   type="text"
//                   name="class"
//                   value={child.class}
//                   onChange={handleChange}
//                   required
//                   style={styles.input}
//                 />
//               </div>
//               <div style={styles.formGroup}>
//                 <label style={styles.label}>Gender</label>
//                 <select
//                   name="gender"
//                   value={child.gender}
//                   onChange={handleChange}
//                   required
//                   style={styles.input}
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>
//               <div style={styles.formGroup}>
//                 <label style={styles.label}>Date of Birth</label>
//                 <input
//                   type="date"
//                   name="dob"
//                   value={child.dob}
//                   onChange={handleChange}
//                   required
//                   style={styles.input}
//                 />
//               </div>
//             </div>
//           </div>

//           <div style={styles.section}>
//             <h3 style={styles.sectionTitle}>Contact Information</h3>
//             <div style={styles.formGrid}>
//               <div style={styles.formGroup}>
//                 <label style={styles.label}>Contact Number</label>
//                 <input
//                   type="tel"
//                   name="contact"
//                   value={child.contact}
//                   onChange={handleChange}
//                   required
//                   style={styles.input}
//                 />
//               </div>
//               <div style={styles.formGroup}>
//                 <label style={styles.label}>Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={child.email}
//                   onChange={handleChange}
//                   required
//                   style={styles.input}
//                 />
//               </div>
//               <div style={styles.formGroup}>
//                 <label style={styles.label}>Parent/Guardian</label>
//                 <input
//                   type="text"
//                   name="guardian"
//                   value={child.guardian}
//                   onChange={handleChange}
//                   required
//                   style={styles.input}
//                 />
//               </div>
//               <div style={styles.formGroup}>
//                 <label style={styles.label}>Address</label>
//                 <input
//                   type="text"
//                   name="address"
//                   value={child.address}
//                   onChange={handleChange}
//                   required
//                   style={styles.input}
//                 />
//               </div>
//             </div>
//           </div>

//           <div style={styles.actions}>
//             <button type="submit" style={styles.button}>
//               Save Profile
//             </button>
//           </div>
//         </form>
//       ) : (
//         <div style={styles.profileView}>
//           <div style={styles.profileSections}>
//             <div>
//               <h3 style={styles.sectionTitle}>Personal Information</h3>
//               <div style={styles.infoItem}>
//                 <span style={styles.infoLabel}>Name:</span>
//                 <span style={styles.infoValue}>{child.name}</span>
//               </div>
//               <div style={styles.infoItem}>
//                 <span style={styles.infoLabel}>Class:</span>
//                 <span style={styles.infoValue}>{child.class}</span>
//               </div>
//               <div style={styles.infoItem}>
//                 <span style={styles.infoLabel}>Gender:</span>
//                 <span style={styles.infoValue}>{child.gender}</span>
//               </div>
//               <div style={styles.infoItem}>
//                 <span style={styles.infoLabel}>Date of Birth:</span>
//                 <span style={styles.infoValue}>{child.dob}</span>
//               </div>
//             </div>

//             <div>
//               <h3 style={styles.sectionTitle}>Contact Information</h3>
//               <div style={styles.infoItem}>
//                 <span style={styles.infoLabel}>Contact No:</span>
//                 <span style={{ ...styles.infoValue, ...styles.highlight }}>{child.contact}</span>
//               </div>
//               <div style={styles.infoItem}>
//                 <span style={styles.infoLabel}>Email:</span>
//                 <span style={{ ...styles.infoValue, ...styles.highlight }}>{child.email}</span>
//               </div>
//               <div style={styles.infoItem}>
//                 <span style={styles.infoLabel}>Parent/Guardian:</span>
//                 <span style={styles.infoValue}>{child.guardian}</span>
//               </div>
//               <div style={styles.infoItem}>
//                 <span style={styles.infoLabel}>Address:</span>
//                 <span style={styles.infoValue}>{child.address}</span>
//               </div>
//             </div>
//           </div>

//           <div style={styles.actions}>
//             <button
//               onClick={() => setIsEditing(true)}
//               style={styles.button}
//             >
//               Edit Profile
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ChildProfile;

import React, { useState } from "react";

function ChildProfile() {
  const [child, setChild] = useState({
    name: "",
    class: "",
    gender: "",
    dob: "",
    contact: "",
    email: "",
    guardian: "",
    address: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChild((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const styles = {
    container: {
      maxWidth: "900px",
      margin: "0 auto",
      padding: "2rem",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    title: {
      textAlign: "center",
      color: "#333",
      marginBottom: "2rem",
      fontSize: "2rem",
    },
    accent: {
      color: "#2D5D7B",
    },
    form: {
      background: "#fff",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
    section: {
      marginBottom: "2rem",
    },
    sectionTitle: {
      color: "#2D5D7B",
      marginBottom: "1rem",
      paddingBottom: "0.5rem",
      borderBottom: "1px solid #eee",
      fontSize: "1.2rem",
    },
    formGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1.5rem",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
    },
    label: {
      marginBottom: "0.5rem",
      color: "#555",
      fontWeight: "500",
      fontSize: "0.95rem",
    },
    input: {
      width: "100%",
      padding: "0.75rem",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "1rem",
      transition: "border-color 0.3s",
    },
    actions: {
      textAlign: "center",
      marginTop: "2rem",
    },
    button: {
      backgroundColor: "#2D5D7B",
      color: "white",
      border: "none",
      padding: "0.75rem 2rem",
      fontSize: "1rem",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    profileView: {
      background: "#fff",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
    profileSections: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
    },
    infoItem: {
      marginBottom: "1rem",
      paddingBottom: "1rem",
      borderBottom: "1px solid #f5f5f5",
    },
    infoLabel: {
      fontWeight: "600",
      color: "#555",
      marginRight: "0.5rem",
    },
    infoValue: {
      color: "#333",
    },
    highlight: {
      color: "#2D5D7B",
      fontWeight: "500",
    },

    // Responsive styles
    '@media only screen and (max-width: 600px)': {
      container: {
        padding: "1rem",
      },
      form: {
        padding: "1.5rem",
      },
      profileView: {
        padding: "1.5rem",
      },
      title: {
        fontSize: "1.5rem",
      },
      sectionTitle: {
        fontSize: "1rem",
      },
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        Child <span style={styles.accent}>Profile</span>
      </h2>

      {isEditing ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Personal Information</h3>
            <div style={styles.formGrid}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={child.name}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Class</label>
                <input
                  type="text"
                  name="class"
                  value={child.class}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Gender</label>
                <select
                  name="gender"
                  value={child.gender}
                  onChange={handleChange}
                  required
                  style={styles.input}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={child.dob}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
            </div>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Contact Information</h3>
            <div style={styles.formGrid}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Contact Number</label>
                <input
                  type="tel"
                  name="contact"
                  value={child.contact}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={child.email}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Parent/Guardian</label>
                <input
                  type="text"
                  name="guardian"
                  value={child.guardian}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Address</label>
                <input
                  type="text"
                  name="address"
                  value={child.address}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
            </div>
          </div>

          <div style={styles.actions}>
            <button type="submit" style={styles.button}>
              Save Profile
            </button>
          </div>
        </form>
      ) : (
        <div style={styles.profileView}>
          <div style={styles.profileSections}>
            <div>
              <h3 style={styles.sectionTitle}>Personal Information</h3>
              <div style={styles.infoItem}>
                <span style={styles.infoLabel}>Name:</span>
                <span style={styles.infoValue}>{child.name}</span>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.infoLabel}>Class:</span>
                <span style={styles.infoValue}>{child.class}</span>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.infoLabel}>Gender:</span>
                <span style={styles.infoValue}>{child.gender}</span>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.infoLabel}>Date of Birth:</span>
                <span style={styles.infoValue}>{child.dob}</span>
              </div>
            </div>

            <div>
              <h3 style={styles.sectionTitle}>Contact Information</h3>
              <div style={styles.infoItem}>
                <span style={styles.infoLabel}>Contact No:</span>
                <span style={{ ...styles.infoValue, ...styles.highlight }}>{child.contact}</span>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.infoLabel}>Email:</span>
                <span style={{ ...styles.infoValue, ...styles.highlight }}>{child.email}</span>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.infoLabel}>Parent/Guardian:</span>
                <span style={styles.infoValue}>{child.guardian}</span>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.infoLabel}>Address:</span>
                <span style={styles.infoValue}>{child.address}</span>
              </div>
            </div>
          </div>

          <div style={styles.actions}>
            <button onClick={() => setIsEditing(true)} style={styles.button}>
              Edit Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChildProfile;
