import React from 'react';
import { Table, Box, Paper, Text, Title } from '@mantine/core'

export default function TeamStats(props) {
  console.log(props.teamStats);
  console.log(props.teamLeaders);
  console.log(props.teamPlayerStats);

  const genLeaders = props.teamPlayerStats.results[0].leaders;

  const tableHeaders = (
    <Table.Tr>
      <Table.Th key="Headshot"> </Table.Th>
      <Table.Th key="Name"> Name </Table.Th>
      {genLeaders[0].statistics[0].stats.map((stat) => (
        <Table.Th key={stat.name}>{stat.shortDisplayName}</Table.Th>
      ))}
    </Table.Tr>
  );


  const tableRows = genLeaders.map((leader) => (
    <Table.Tr key={leader.athlete.id}>
      <Table.Td>
        <img src={leader.athlete.headshot.href} alt="Headshot" width="52px" height="36px" />
      </Table.Td>
      <Table.Td>{leader.athlete.displayName}</Table.Td>
      {leader.statistics[0].stats.map((stat) => (
        <Table.Td key={stat.name}>{stat.displayValue}</Table.Td>
      ))}
    </Table.Tr>
  ));

  const tableFooter = (
    <Table.Tr>
      <Table.Td> Totals</Table.Td>
      <Table.Td> </Table.Td>
      {props.teamPlayerStats.teamTotals[0].stats.map((stat) => (
        <Table.Td key={stat.name}>
          {stat.displayValue}
        </Table.Td>
      ))}
    </Table.Tr>
  );

  return (
    <Paper shadow="md" radius="xl" p="xl">

      <Table striped highlightOnHover>
        <Table.Thead>{tableHeaders}</Table.Thead>
        <Table.Tbody>{tableRows}</Table.Tbody>
        <Table.Tfoot>{tableFooter}</Table.Tfoot>
      </Table>
    </Paper>
  )
}
