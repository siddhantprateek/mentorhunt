import TeacherList from "../../components/teacher-list/teacherList.components";
import "./dashboard.style.css";
import { useState } from "react";
import { Select, InputLabel, MenuItem, FormControl } from "@mui/material";

import data from "../../assets/data.json";
const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [selectschool, setSchool] = useState("");
  const [selectTag, setTag] = useState("");



  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterTeacher = data.filter((teacher) =>
    teacher.Name.toLowerCase().includes(search.toLowerCase())
  );
  const tags = [
    "All",
    "Database",
    "Operating System",
    "Data Structure",
    "Object Oriented Programming",
    "Networking",
    "Automata and Formal lang.",
    "Web Technology",
    "Computer Architecture",
    "Machine Learning",
  ];

  const schools = [
    "All",
    "School of Computer Applications",
    "School of Civil Engineering",
    "School of Computer Engineering",
    "School of Electrical Engineering",
    "School of Electronics Engineering",
    "School of Mechanical Engineering",
    "School of Humanities and Social Sciences",
    "School of Applied Sciences",
    "School of Language",
    "School of Biotechnology",
    "School of Management",
    "School of Rural Management",
    "KIIT Law School",
    "School of Medicine (KIMS)",
    "School of Commerce & Economics",
    "School of Fashion Technology",
    "School of Film & Media Sciences",
    "School of Mass Communication",
  ];

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="selection-contanier">
        <div className="tag-container">
          <FormControl sx={{ minWidth: 320 }}>
            <InputLabel id="demo-simple-select-label">Subject</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectTag}
              label="Subject"
              className="select-content"
              onChange={(e) => setTag(e.target.value)}
            >
              {tags.map((tag) => (
                    <MenuItem value={tag}>{tag}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="select-school-div">
          <FormControl sx={{ minWidth: 320 }}>
            <InputLabel id="demo-simple-select-label">School</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectschool}
              label="School"
              className="select-content"
              onChange={(e) => setSchool(e.target.value)}
            >
              {schools.map((school) => (
                <MenuItem value={school}>
                  {school}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="input-div">
        <input type="text" onChange={handleChange} placeholder="Search ...." />
      </div>
      <TeacherList teacher={filterTeacher} />
    </div>
  );
};
export default Dashboard;
