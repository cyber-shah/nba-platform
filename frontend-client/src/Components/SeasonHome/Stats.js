import React from 'react';
import { Table, Grid, Image, Paper } from '@mantine/core';


export default function Stats(props) {
  const stat = props.players.leaders.categories[0];



  const rows = stat.leaders.map((leader, index) => {
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

  // const tableHeader = stat.map((stat) => {
  const tableHeader = () => {
    return (
      <Table.Tr>
        <Table.Th key="SerialNumber">#</Table.Th>
        <Table.Th key="Player"> Player </Table.Th>
        <Table.Th key={stat.abbreviation}> {stat.abbreviation}</Table.Th>
      </Table.Tr>
    );
  };


  return (
    <Paper shadow="xl" radius="lg" p={10}>

      <Table striped highlightOnHover captionSide="top">
        <Table.Caption>{stat.displayName}</Table.Caption>
        <Table.Thead>{tableHeader()}</Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>

      </Table>
    </Paper >
  );


}
