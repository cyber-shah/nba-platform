import React from 'react';
import { Table } from '@mantine/core';

export default function StandingsTable(props) {
  const entries = props.standings.children[0].standings.entries;
  const stats = entries[0].stats;

  const dataStats = stats.map((stat) => (
    <Table.Th key={stat.shortDisplayName} style={{ fontSize: '10px', margin: '2px', padding: '2px' }}>
      {stat.shortDisplayName}
    </Table.Th>
  ));

  const body = entries.map((entry) => (
    <Table.Tr key={entry.team.displayName}>
      <Table.Td style={{ fontSize: '12px', margin: '2px', padding: '2px' }}>
        {entry.team.displayName}
      </Table.Td>
      {entry.stats.map((stat, index) => (
        <Table.Td key={index} style={{ fontSize: '12px', margin: '2px', padding: '2px' }}>
          {stat.displayValue}
        </Table.Td>
      ))}
    </Table.Tr>
  ));

  return (
    <Table
      striped
      highlightOnHover
    >
      <Table.Thead>{dataStats}</Table.Thead>
      <Table.Tbody>{body}</Table.Tbody>
    </Table>
  );
}
