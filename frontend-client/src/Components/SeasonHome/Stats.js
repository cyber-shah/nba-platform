import React from 'react';
import { Table, Grid, Image, Paper } from '@mantine/core';


/**
* Displays a table of stats
* @param {Object} props contains the stat to display
* @returns {JSX.Element} the table of stats
*/
function StatsTableDisplay(props) {

  const rows = props.stat.leaders.map((leader, index) => {
    return (
      <Table.Tr key={leader.athlete.displayName}>
        <Table.Td>{index + 1}</Table.Td>
        <Table.Td>
          <Grid>
            <Grid.Col span={3} style={{ whiteSpace: 'nowrap' }}>
              <Image src={leader.athlete.headshot.href} h={50} w={50} />
            </Grid.Col>
            <Grid.Col span={6} style={{ whiteSpace: 'nowrap' }}>
              {leader.athlete.displayName}
            </Grid.Col>
          </Grid>
        </Table.Td>
        <Table.Td>{leader.displayValue}</Table.Td>
      </Table.Tr>
    );
  });

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




export default function Stats(props) {
  return (
    <Paper shadow="xl" radius="lg" p={10}>
      {/* for each category, create a StatsTableDisplay table */}
      {props.players.leaders.categories.map((stat) => (
        <StatsTableDisplay key={stat.displayName} stat={stat} />
      ))}
    </Paper >
  );
}
