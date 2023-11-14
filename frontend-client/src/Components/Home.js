// DataTableExample.js
import React, { useState } from "react";
import {
  Box,
  DataTable,
  Heading,
  Meter,
  Text,
  ResponsiveContext,
  Form,
  FormField,
  TextInput,
  Button,
} from "grommet";
import {queryAPI} from '../api'


const data = [];
const columns = [];

function DataTableExample() {
    const [inputText, setInputText] = useState('');
    
    const handleOnChange = (e) => {
        setInputText(e.target.value);
    }
    
    const handleOnClick = async () => {
        const queryOutput = await queryAPI(inputText);
        console.log(JSON.stringify(queryOutput, null, 2));
    }


  return (
    <>
      <Box align="center" marginTop="low">
        <FormField label="Query">
          <TextInput id="query" placeholder="Write queries here" onChange={handleOnChange}/>
        </FormField>
        <Button label="Execute" primary onClick={handleOnClick} />
      </Box>

      <Heading
        id="storage-pools-heading"
        level={3}
        margin={{ bottom: "small", top: "none" }}
      >
        Storage pools
      </Heading>
      <Box overflow="auto">
        <DataTable
          aria-describedby="storage-pools-heading"
          data={data}
          columns={[...columns]}
          fill
          pin
          sortable
        />
      </Box>
    </>
  );
}

export {DataTableExample};