
import React from 'react';
import { Table, Grid, Image, Paper, Anchor, Title, Box } from '@mantine/core';
import { Link } from 'react-router-dom';

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
    <Table.Tr key={""}>
      <Table.Th key="SerialNumber">#</Table.Th>
      <Table.Th key="Team" >
        Team
      </Table.Th>
      <Table.Th key="Name">
        Name
      </Table.Th>
      {conferences[0].standings.entries[2].stats.map((stat) => (
        <Table.Th key={stat.displayName}>{stat.shortDisplayName}</Table.Th>
      ))}
    </Table.Tr>
  );

  // For each conference, cerate a table
  const tables = conferences.map((conference, conferenceIndex) => {
    const entries = conference.standings.entries;

    const tableRows = entries.map((entry, index) => (
      // Rows : for each team name create the following rows
      // 1. Show the team logo, and Team Name
      // 2. Map through each stat and display it in a table cell

      <Table.Tr key={index}>
        <Table.Td>{index + 1}</Table.Td>

        <Table.Td >
          <Image src={entry.team.logos[0].href} />
        </Table.Td>

        <Table.Td>
          <Link to={`/team/${entry.team.id}`} style={{ textDecoration: 'none' }}>
            <Anchor size='sm' underline="hover" style={{ whiteSpace: 'nowrap' }}> {entry.team.displayName} </Anchor>
          </Link>
        </Table.Td>

        { /** Map 1through each stat and display it in a table cell */}
        {
          entry.stats.map((stat, statIndex) => (
            <Table.Td key={statIndex}>{stat.displayValue}</Table.Td>
          ))
        }

      </Table.Tr >
    ));

    return (
      <Box key={conferenceIndex}>
        <Title order={2} p="lg" > {conference.name}</Title>
        <div style={{ overflowX: 'auto', overflowY: 'clip' }}>

          <Table striped highlightOnHover key={conference}>
            <Table.Thead>{tableHeaders}</Table.Thead>
            <Table.Tbody>{tableRows}</Table.Tbody>
          </Table>

        </div>
      </Box>
    );
  });

  return <div>{tables}</div>;
}

