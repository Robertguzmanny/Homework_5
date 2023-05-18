import React from "react";

const TableHeader = () => {
  // boilerplate table header functional component

  return (
    <thead>
      <tr style={{ borderBottom: "1px solid #dcdced", color: "orange" }}>
        <td width={"30%"} style={{ fontWeight: 500 }}>
          Web
        </td>
        <td width={"50%"} style={{ fontWeight: 500 }}>
          HyperLink
        </td>
        <td width={"15%"} style={{ fontWeight: 500 }}>
          Delete
        </td>
      </tr>
    </thead>
  );
};

const TableBody = ({ props, removeLink }) => {
  // boilerplate table body functional component
  // we use Array.map to create table rows from LinkData passed via props
  const rows = props.map((row, index) => {
    return (
      <tr key={index} style={{ borderBottom: "1px solid #dcdced" }}>
        <td width={"30%"} style={{ padding: "15px 0px", fontWeight: 500 }}>
          {row.web}
        </td>
        <td width={"50%"} style={{ padding: "15px 0px" }}>
          <a style={{ color: "#318CE7" }} href={row.links} rel="noreferrer">
            {row.links}
          </a>
        </td>
        <td width={"15%"} style={{ padding: "0px 0px" }}>
          <button
            type="submit"
            style={{
              backgroundColor: "orange",
              color: "black",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: "pointer",
              width: "90px",
              borderRadius: "2px",
              height: "35px",
            }}
            onClick={() => removeLink(index)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = ({ props, removeLink }) => {
  // eslint-disable-next-line no-lone-blocks
  {
    return (
      <div style={{ marginLeft: "210px" }}>
        <table style={{ width: "82%", borderCollapse: "collapse" }}>
          <TableHeader />
          <TableBody props={props} removeLink={removeLink} />
        </table>
      </div>
    );
  }
};

export default Table;
