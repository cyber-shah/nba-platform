
import React from 'react';
import { Table, Grid, Image } from '@mantine/core';

export default function StandingsTable(props) {
  const entries = props.standings.children[0].standings.entries;
  const FirstStats = entries[2].stats;

  const dataStats = (
    <Table.Tr>
      <Table.Th key="Team">Team</Table.Th>
      {FirstStats.map((stat) => (
        <Table.Th key={stat.shortDisplayName}>{stat.shortDisplayName}</Table.Th>
      ))}
    </Table.Tr>
  );

  const body = entries.map((entry) => (
    <Table.Tr key={entry.team.displayName}>

      <Table.Td>
        <Grid>
          <Grid.Col span={8} >
            <Image src={entry.team.logos[0].href} />

          </Grid.Col>
          <Grid.Col span={4}>
            {entry.team.displayName}
          </Grid.Col>
        </Grid>

      </Table.Td>
      {
        entry.stats.map((stat, index) => (
          <Table.Td key={index}>{stat.displayValue}</Table.Td>
        ))
      }

    </Table.Tr >
  ));





  return (
    <div style={{ overflowX: 'auto' }}>
      <Table striped highlightOnHover>
        <Table.Thead>{dataStats}</Table.Thead>
        <Table.Tbody>{body}</Table.Tbody>
      </Table>
    </div>
  );
}

