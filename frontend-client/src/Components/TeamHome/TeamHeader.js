import React from 'react';
import { Grid, Stack, Text, Title, Paper, Tabs, rem } from '@mantine/core';
import { useState } from 'react';


//TODO: set background color to team color
export default function TeamHeader(props) {
  console.log(props);
  console.log(props.teamData.team.color.toString());

  const [activeTab, setActiveTab] = useState('home');

  const styles = {
    background: {
      width: "100%",
      height: "19vh",
      maxHeight: "350px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "50px",
    },
    gridContainer: {
      width: "500px",
    },
    col: {
      display: "flex",
      alignItems: "center", // Vertical centering
    },
  };

  return (
    <Paper shadow="xl" style={styles.background} p="xl">
      <Stack >
        <Grid style={styles.gridContainer}>

          <Grid.Col span={3} style={styles.col}>
            <img src={props.teamData.team.logos[0].href} alt="Team Logo"
              width="100px"
              height="100px" />
          </Grid.Col>

          <Grid.Col span={9} style={styles.col}>
            <Stack
              gap="sm"
            >
              <Title order={2} style={{ color: `#${props.teamData.team.color}` }}>
                {props.teamData.team.displayName}
              </Title>
              <Text size="md" style={{ color: `#${props.teamData.team.color}` }}>
                {props.teamData.team.record.items[0].summary} | {props.teamData.team.standingSummary}
              </Text>
            </Stack>
          </Grid.Col>

        </Grid>


        <Tabs color={`#${props.teamData.team.color}`} value={activeTab} onChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab value="home">Home</Tabs.Tab>
            <Tabs.Tab value="stats">Stats</Tabs.Tab>
            <Tabs.Tab value="schedule">Schedule</Tabs.Tab>
            <Tabs.Tab value="roster">Roster</Tabs.Tab>
          </Tabs.List>
        </Tabs>

      </Stack>
    </Paper>
  );
}
