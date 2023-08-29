import React, { useState, useEffect } from "react";
import { getProjects } from "../../api/api.components";
import PastProjectList from "../projectList/ProjectsList.components";
import SearchBox from "../projectList/SearchBox.components";
import "../../pages/projects/projects.css";

let PastProjects = () => {
  const [projects, setProjects] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    getProjects().then((response) => {
      setProjects(response.data);
    });
  }, []);

  let onSearchChange = (event) => {
    let searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  let filteredList = projects.filter((project) => {
    const projectNameLower = project.project_name.toLowerCase();
    const contributorNamesLower = project.project_Contributors.map(
      (contributor) => contributor.toLowerCase()
    );

    return (
      projectNameLower.includes(searchField) ||
      contributorNamesLower.some((contributorName) =>
        contributorName.includes(searchField)
      )
    );
  });

  console.log(projects);
  console.log("test");
  return (
    <div className="projects">
      <SearchBox onChangeHandler={onSearchChange} />
      <PastProjectList projects={filteredList} />;
    </div>
  );
};

export default PastProjects;
