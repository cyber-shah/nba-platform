import React from "react";
import { Data, DataTable, Toolbar, DataTableColumns } from "grommet";

export default function SeasonsStandings(props) {
  return (
    <div>
      <Data
        data={[
          { id: 1, name: "Scott", age: 12 },
          { id: 2, name: "Zelda", age: 91 },
        ]}
      >
        <Toolbar>
          <DataTableColumns options={["id", "name", "age"]} drop />
        </Toolbar>
        <DataTable />
      </Data>
    </div>
  );
}
