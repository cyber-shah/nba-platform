import React from 'react';
import { Grid, Stack, Text, Title, Paper, Tabs, rem } from '@mantine/core';
import { useState } from 'react';


//TODO: set background color to team color
export default function TeamHeader(props) {


  const styles = {
    background: {
      width: "100%",
      maxHeight: "350px",
      display: "flex",
      justifyContent: "center",
      paddingTop: "20px",
    },
    gridContainer: {
      width: "auto",
      margin: "auto",
    },
    col: {
      display: "flex",
      alignItems: "center", // Vertical centering
    },
  };

  return (
    <Paper shadow="xl" style={styles.background}>
      <Stack gap={rem(1)} >
        <Grid style={styles.gridContainer}>

          <Grid.Col span="content" style={styles.col}>
            <img src={props.teamData.team.logos[0].href} alt="Team Logo"
              width="150px"
              height="150px" />
          </Grid.Col>

          <Grid.Col span="content" style={styles.col}>
            <Stack
              gap={rem(0.5)}
            >
              <Title order={2} style={{ color: `#${props.teamData.team.color}` }}>
                {props.teamData.team.displayName}
              </Title>
              <Text size="sm" style={{ color: `#${props.teamData.team.color}` }}>
                {props.teamData.team.standingSummary}
              </Text>
              <Text size="sm" c="dimmed" style={{ color: `#${props.teamData.team.color}` }}>
                {props.teamData.team.record.items[0].description} : {props.teamData.team.record.items[0].summary}
              </Text>
            </Stack>
          </Grid.Col>

        </Grid>


        <Tabs
          color={`#${props.teamData.team.color}`}
          value={props.activeTab}
          onChange={props.setActiveTab}>
          <Tabs.List
            style={{
              display: 'flex',
              justifyContent: 'space-around',
            }} >
            {/** <Tabs.Tab value="home">Home</Tabs.Tab> */}
            <Tabs.Tab value="stats">Stats</Tabs.Tab>
            {/** <Tabs.Tab value="schedule">Schedule</Tabs.Tab> */}
            <Tabs.Tab value="roster">Roster</Tabs.Tab>
          </Tabs.List>
        </Tabs>

      </Stack>
    </Paper >
  );
}
