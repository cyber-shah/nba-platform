import React from "react";
import { DataTable } from "grommet";

export default function SeasonPTable(props) {
  const headers = props.headers;
  const data = props.data;

  // NOTE: need to do this only because its not a json object
  const transformedData = data.map((row) => {
    return headers.reduce((obj, header, index) => {
      obj[header] = row[index];
      return obj;
    }, {});
  });

  const columns = headers.map((header) => ({
    property: header,
    header: header,
  }));

  return (
    <div>
      <DataTable
        margin="medium"
        columns={columns}
        data={transformedData}
        pad={{ horizontal: "medium", vertical: "xsmall" }}
        background={{
          header: { color: "white", opacity: "strong" },
          body: ["light-1", "white"],
          footer: { color: "dark-1", opacity: "strong" },
        }}
        border={{ body: "bottom" }}
      />
    </div>
  );
}
