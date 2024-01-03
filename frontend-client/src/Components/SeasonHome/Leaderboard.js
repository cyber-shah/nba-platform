import React from 'react';
import { Table, Grid, Image, Paper, Text } from '@mantine/core';

/**
* Displays a table of stats
* @param {Object} props contains the stat to display
* @returns {JSX.Element} the table of stats
*/
function StatsTableDisplay(props) {
  // for each leader, create a row
  const rows = props.stat.leaders.map((leader, index) => {
    return (
      <Table.Tr key={leader.athlete.displayName}>
        <Table.Td>{index + 1}</Table.Td>

        <Table.Td>
          <Grid align="center">
            <Grid.Col span={3} style={{ whiteSpace: 'nowrap' }}>
              {leader.athlete.headshot && leader.athlete.headshot.href && (
                <Image src={leader.athlete.headshot.href} h={50} w={50} />
              )}
            </Grid.Col>
            <Grid.Col span={6} style={{ whiteSpace: 'nowrap' }}>
              <Text> {leader.athlete.displayName} </Text>
              <Text c="dimmed" size="sm">{leader.athlete.position.displayName} @ {leader.team.displayName}</Text>
            </Grid.Col>
          </Grid>
        </Table.Td>

        <Table.Td>
          <Text fw={700}>{leader.displayValue}  </Text>
        </Table.Td>

      </Table.Tr>
    );
  });

  // create the table header
  const tableHeader = () => {
    return (
      <Table.Tr>
        <Table.Th key="SerialNumber">#</Table.Th>
        <Table.Th key="Player"> Player </Table.Th>
        <Table.Th key={props.stat.abbreviation}> {props.stat.abbreviation}</Table.Th>
      </Table.Tr>
    );
  };

  // eventually return the table with all the rows
  return (
    <Table striped highlightOnHover captionSide="top">
      <Table.Caption>{props.stat.displayName}</Table.Caption>
      <Table.Thead>{tableHeader()}</Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}


/**
* For all categories, create a StatsTableDisplay table
* @param {Object} props contains the players object
* @returns {JSX.Element} the table of stats
*/
export default function Stats(props) {
  return (
    <Paper shadow="xl" radius="lg" p={10}>
      <Grid>
        {/* for each category, create a StatsTableDisplay table */}
        {props.players.leaders.categories.map((stat) => (
          <Grid.Col key={stat.displayName} span={6}>
            <StatsTableDisplay stat={stat} />
          </Grid.Col>
        ))}
      </Grid>
    </Paper>
  );
}
