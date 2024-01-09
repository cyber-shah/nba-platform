import React from 'react';
import { Table, Box, Paper, Text, Title, Grid, Stack } from '@mantine/core'

export default function TeamStats(props) {
  console.log(props.teamLeaders);
  console.log(props.teamPlayerStats);

  const genLeaders = props.teamPlayerStats.results[0].leaders;

  // make headers based on first leader
  const tableHeaders = (
    <Table.Tr>
      <Table.Th key="Headshot"> </Table.Th>
      <Table.Th key="Name"> Name </Table.Th>
      {genLeaders[0].statistics[0].stats.map((stat) => (
        <Table.Th key={stat.name}>{stat.shortDisplayName}</Table.Th>
      ))}
    </Table.Tr>
  );

  // for each leader in general category, make a row
  const tableRows = genLeaders.map((leader) => (
    <Table.Tr key={leader.athlete.id}>
      <Table.Td>
        {leader.athlete.headshot ? (
          <img src={leader.athlete.headshot.href} alt="Headshot" width="52px" height="36px" />
        ) : (
          <img src='https://a.espncdn.com/combiner/i?img=/i/headshots/nophoto.png&w=110&h=80&scale=crop' alt="Headshot" width="52px" height="36px" />
        )}
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
      <Title order={2} py="sm">
        Team Leaders
      </Title>

      <Grid>
        {props.teamLeaders.leaders.categories.map((category, index) => {
          if (index < 9) {
            return (
              <Grid.Col span={4} key={index}>
                {leadersBlock(category)}
              </Grid.Col>
            );
          } else {
            return null; // or some other fallback if needed
          }
        })}
      </Grid>

      <Title order={2} py="xl">
        General Split Stats
      </Title>

      <div style={{ overflowX: 'auto', overflowY: 'clip' }} >
        <Table striped highlightOnHover>
          <Table.Thead>{tableHeaders}</Table.Thead>
          <Table.Tbody>{tableRows}</Table.Tbody>
          <Table.Tfoot>{tableFooter}</Table.Tfoot>
        </Table>
      </div>
    </Paper>
  )
}


const leadersBlock = (category) => {
  return (
    <>
      <Paper p="md">
        <Text> {category.abbreviation}</Text>
        <Grid>
          <Grid.Col span={6}>
            {category.leaders[0].athlete.headshot ? (
              <img src={category.leaders[0].athlete.headshot.href} alt="Headshot" width="100px" height="72px" />
            ) : (
              <img src='https://a.espncdn.com/combiner/i?img=/i/headshots/nophoto.png&w=110&h=80&scale=crop' alt="Headshot" width="100px" height="72px" />
            )}
          </Grid.Col>

          <Grid.Col span={6}>
            <Stack>
              <Text size="sm"> {category.leaders[0].athlete.displayName}</Text>
              <Title order={2} align="center"> {category.leaders[0].displayValue}</Title>
            </Stack>
          </Grid.Col>
        </Grid>
      </Paper>
    </>
  );
};
