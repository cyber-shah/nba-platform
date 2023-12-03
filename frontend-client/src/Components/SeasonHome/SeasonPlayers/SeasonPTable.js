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
      <DataTable columns={columns} data={transformedData} />
    </div>
  );
}
