
import React from 'react';
import { Table } from '@mantine/core';

export default function ScoreBlock(props) {
  const competition = props.event.competitions.competitors;
  console.log(props.event);


  const tableHeader = () => {
    return (
      <Table.Tr>
        <Table.Th key="FINAL">FINAL</Table.Th>
        <Table.Th key="1">1</Table.Th>
        <Table.Th key="2">2</Table.Th>
        <Table.Th key="3">3</Table.Th>
        <Table.Th key="4">4</Table.Th>
        <Table.Th key="T">T</Table.Th>
      </Table.Tr>
    );
  };

  const rows = props.event.competitions[0].competitors.map((entry) => {
    return (
      <Table.Tr key={entry.team.displayName}>
        <Table.Td>{entry.team.displayName}</Table.Td>
        <Table.Td>{entry.linescores[0].value}</Table.Td>
        <Table.Td>{entry.linescores[1].value}</Table.Td>
        <Table.Td>{entry.linescores[2].value}</Table.Td>
        <Table.Td>{entry.linescores[3].value}</Table.Td>
        <Table.Td>{entry.score}</Table.Td>

      </Table.Tr >
    );
  });



  return (
    /* Score Block */
    <Table>
      <Table.Thead>{tableHeader()}</Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

