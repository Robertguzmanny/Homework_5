import React, { Component } from "react";

class Form extends Component {
  render() {
    const { handleSubmit, getWeb, web, links, setLink } = this.props;

    return (
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          handleSubmit();
          const name = web;
          const url = links;
          const response = await fetch("http://localhost:5001/links", {
            method: "POST",
            headers: { "Content-Type": "apllication/jason" },
            body: JSON.stringify(name, url),
          });
          window.location = "/";
        }}
      >
        <div style={{ marginLeft: "210px" }}>
          <div style={{ marginBottom: "12px" }}>
            <div
              style={{
                fontSize: "16px",
                fontWeight: 500,
                marginBottom: "6px",
                color: "orange",
              }}
            >
              {" "}
              Web{" "}
            </div>
            <input
              value={web}
              onChange={(event) => getWeb(event.target.value)}
              type="web"
              name="Project"
              style={{ width: "95%", padding: "5px", borderRadius: "3px" }}
            />
          </div>
          <div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: 500,
                marginBottom: "6px",
                color: "orange",
              }}
            >
              {" "}
              HyperLink{" "}
            </div>
            <input
              value={links}
              onChange={(event) => setLink(event.target.value)}
              type="link"
              name="link"
              style={{ width: "95%", padding: "5px", borderRadius: "3px" }}
            />
          </div>
          <div
            style={{
              width: "40px",
              height: "50px",
              marginTop: "6px",
            }}
          >
            <button
              type="submit"
              style={{
                backgroundColor: "orange",
                color: "black",
                fontSize: "14px",
                fontWeight: "none",
                width: "90px",
                height: "45px",
                cursor: "pointer",
                borderRadius: "1px",
              }}
            >
              Click me!
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
