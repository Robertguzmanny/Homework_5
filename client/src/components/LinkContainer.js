import { useState } from "react";
import Table from "./Table";
import Form from "./Form";

const LinkContainer = (props) => {
  const [project, getprojects] = useState([]);
  const [web, getWeb] = useState("");
  const [links, getLink] = useState("");

  const handleRemove = (index) => {
    const updateprojects = [...project];
    updateprojects.splice(index, 1);
    getprojects(updateprojects);
  };

  const handleSubmit = () => {
    if (links === "") {
      alert("Enter a link");
    }

    if (web === "") {
      alert("Enter a web");
    }

    if (web === "" && links === "") {
      alert("Fill the with a link and a name");
    }

    if (web !== "" && links !== "") {
      const obj = { web: web, links: links };
      getprojects([...project, obj]);
      getWeb("");
      getLink("");
    }
  };

  return (
    <div className="container" style={{ display: "block" }}>
      <h1 style={{ marginLeft: "200px", color: "orange" }}>
        My Favorite Links
      </h1>
      <p style={{ marginLeft: "200px", color: "orange" }}>
        Add a new url with a name and link to the table.
      </p>
      <Table removeLink={handleRemove} props={project} />
      <br />
      <h3 style={{ marginLeft: "200px", color: "orange" }}>Add New</h3>
      <Form
        handleSubmit={handleSubmit}
        getWeb={getWeb}
        web={web}
        links={links}
        setLink={getLink}
      />
    </div>
  );
};

export default LinkContainer;
