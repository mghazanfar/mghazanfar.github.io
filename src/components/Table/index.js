import React from "react";
import MaterialTable from "material-table";
import { initial } from "./data";

const Table = props => {
  return (
    <MaterialTable
      components={{
        Toolbar: props => <div style={{ backgroundColor: "transparent" }} />,
        // Pagination: props => <div style={{ backgroundColor: "transparent" }} />,
        Container: props => (
          <div style={{ marginTop: 16 }}>{props.children}</div>
        )
      }}
      columns={[
        {
          title: (
            <div style={{ color: "#3b3765", fontWeight: "bold" }}>Name</div>
          ),
          field: "name",
          cellStyle: { borderWidth: 0 }
        },
        {
          title: (
            <div style={{ color: "#3b3765", fontWeight: "bold" }}>Vehicle</div>
          ),
          field: "vehicle",
          cellStyle: { borderWidth: 0 },
          filtering: false
        },
        {
          title: (
            <div style={{ color: "#3b3765", fontWeight: "bold" }}>Time</div>
          ),
          field: "time",
          cellStyle: { borderWidth: 0 }
        },
        {
          title: (
            <div style={{ color: "#3b3765", fontWeight: "bold" }}>Driver</div>
          ),
          field: "driver",

          cellStyle: { borderWidth: 0 }
        },
        {
          title: (
            <div style={{ color: "#3b3765", fontWeight: "bold" }}>Helper</div>
          ),
          field: "helper",

          cellStyle: { borderWidth: 0 }
        },
        {
          title: (
            <div style={{ color: "#3b3765", fontWeight: "bold" }}>
              Performance
            </div>
          ),
          field: "performance",

          cellStyle: { borderWidth: 0 }
        },
        {
          title: (
            <div style={{ color: "#3b3765", fontWeight: "bold" }}>Status</div>
          ),
          field: "status",

          cellStyle: { borderWidth: 0 }
        }
      ]}
      data={initial}
      title="Customizing Toolbar"
      options={{
        columnsButton: true,
        filtering: true,
        headerStyle: { backgroundColor: "transparent", borderWidth: 0 },
        rowStyle: {
          backgroundColor: "white",
          borderBottom: "5px solid #cfcfcf"
        },
        searchFieldStyle: { backgroundColor: "white" }
      }}
    />
  );
};

export default Table;
