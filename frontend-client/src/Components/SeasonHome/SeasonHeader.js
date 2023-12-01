import React, { useState } from "react";
import { Tab, Tabs, Box } from "grommet";

export default function SeasonHeader() {
  const [index, setIndex] = useState();
  const onActive = (index) => setIndex(index);

  return (
    <div>
      <Box pad="none">
        <Tabs
          flex="true"
          activeIndex={index}
          onActive={onActive}
          alignControls="start"
          margin="small"
        >
          <Tab title="Game" border="black"></Tab>
                  <Tab title="Teams"></Tab>
                  <Tab title="Standings"></Tab>
        </Tabs>
      </Box>
    </div>
  );
}
