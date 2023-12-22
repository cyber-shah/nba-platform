
import React from 'react';
import { Table, Grid, Image, Paper, Anchor } from '@mantine/core';

export default function StandingsTable(props) {
  return (
    <Paper shadow="xl" radius="lg" p={10}>
      <StandingsTableDisplay standings={props.standings} />
    </Paper>

  );
}


function StandingsTableDisplay(props) {
  const conferences = props.standings.children;

  // Table Headers : Th
  const tableHeaders = (
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

    const tableRows = entries.map((entry, index) => (

      <Table.Tr key={entry.team.displayName}>
        <Table.Td>{index + 1}</Table.Td>

        <Table.Td colSpan={2}>
          <Grid>
            <Grid.Col span={3} style={{ whiteSpace: 'nowrap' }}>
              <Image src={entry.team.logos[0].href} />
            </Grid.Col>
            <Grid.Col span={6} style={{ whiteSpace: 'nowrap' }}>
              <Anchor size='sm' co> {entry.team.displayName} </Anchor>
            </Grid.Col>
          </Grid>
        </Table.Td>

        { /** Map 1through each stat and display it in a table cell */}
        {entry.stats.map((stat, statIndex) => (
          <Table.Td key={statIndex}>{stat.displayValue}</Table.Td>
        ))}

      </Table.Tr>
    ));

    return (
      <>
        <h4>{conference.name} Standings</h4>
        <div style={{ overflowX: 'auto', overflowY: 'clip' }}>

          <Table striped highlightOnHover>
            <Table.Thead>{tableHeaders}</Table.Thead>
            <Table.Tbody>{tableRows}</Table.Tbody>
          </Table>

        </div>
      </>
    );
  });

  return <div>{tables}</div>;
}

