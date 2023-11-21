import React, { useState } from "react";
import {
  Box,
  DataTable,
  Heading,
  Form,
  FormField,
  TextInput,
  Button,
} from "grommet";
import { queryAPI } from "../Api/ServerApi";





function DataTableExample() {
  // State for user input and query results, empty initally
  const [inputText, setInputText] = useState('');
  const [queryResults, setQueryResults] = useState([]);

    // Event handler for input text change
    // whenever text box changes inputext is updated
  const handleOnChange = (e) => {
    setInputText(e.target.value);
  };

    // Event handler for button click to execute the query
    // whenver execute is clicked
  const handleOnClick = async () => {
    try {
      // Call the queryAPI function to send the SQL query to the server
      const queryOutput = await queryAPI(inputText);
      console.log("From react " + JSON.stringify(queryOutput));
 
      // update the state with the result
      setQueryResults(queryOutput.result || []);
    } catch (err) {
      // Handle errors that may occur during the query execution
      console.log("Error from react" + err);
    }
  };

  // Dynamically generate columns based on the keys of the first object 
  // in the result array
  const columns =
    queryResults.length > 0
      ? Object.keys(queryResults[0]).map((key) => ({
          property: key,
          header: key,
        }))
      : [];

  // Render the DataTableExample component
  return (
    <>
      <Box align="center" marginTop="low">
        {/* Form for user input */}
        <FormField label="Query">
          <TextInput
            id="query"
            placeholder="Write queries here"
            onChange={handleOnChange}
          />
        </FormField>
        {/* Button to execute the query */}
        <Button label="Execute" primary onClick={handleOnClick} />
      </Box>

      {/* Heading for the query results */}
      <Heading
        id="storage-pools-heading"
        level={3}
        margin={{ bottom: "small", top: "none" }}>
        Query Results
      </Heading>

      {/* Box containing the DataTable to display query results */}
      <Box overflow="auto">
        <DataTable
          aria-describedby="storage-pools-heading"
          data={queryResults}
          columns={columns}
          fill
          pin
          sortable
        />
      </Box>
    </>
  );
}

// Export the DataTableExample component for external use
export { DataTableExample };
