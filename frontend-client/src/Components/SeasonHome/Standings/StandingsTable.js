
import React from 'react';
import { Table, Grid, Image, Paper } from '@mantine/core';

export default function StandingsTable(props) {
  const conferences = props.standings.children;

  const dataStats = (
    <Table.Tr>
      <Table.Th key="SerialNumber">#</Table.Th>
      <Table.Th key="Team" colSpan={2}>
        Team
      </Table.Th>
      {conferences[0].standings.entries[2].stats.map((stat) => (
        <Table.Th key={stat.shortDisplayName}>{stat.shortDisplayName}</Table.Th>
      ))}
    </Table.Tr>
  );

  const tables = conferences.map((conference, conferenceIndex) => {
    const entries = conference.standings.entries;

    const body = entries.map((entry, index) => (
      <Table.Tr key={entry.team.displayName}>
        <Table.Td>{index + 1}</Table.Td>
        <Table.Td colSpan={2}>
          <Grid>
            <Grid.Col span={3} style={{ whiteSpace: 'nowrap' }}>
              <Image src={entry.team.logos[0].href} />
            </Grid.Col>
            <Grid.Col span={6} style={{ whiteSpace: 'nowrap' }}>
              {entry.team.displayName}
            </Grid.Col>
          </Grid>
        </Table.Td>
        {entry.stats.map((stat, statIndex) => (
          <Table.Td key={statIndex}>{stat.displayValue}</Table.Td>
        ))}
      </Table.Tr>
    ));

    return (
      <Paper shadow="xl" radius="xl" p="sm">

        <h4>{conference.name} Standings</h4>
        <div style={{ overflowX: 'auto' }}>

          <Table striped highlightOnHover>
            <Table.Thead>{dataStats}</Table.Thead>
            <Table.Tbody>{body}</Table.Tbody>
          </Table>

        </div>

      </Paper>
    );
  });

  return <div>{tables}</div>;
}

