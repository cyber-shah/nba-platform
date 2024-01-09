import React from 'react';
import { Table, Box, Paper, Text, Title } from '@mantine/core'


export default function TeamRoster(props) {
  console.log(props.teamRoster);

  const styles = {
    background: { maxWidth: '900px', margin: 'auto' }
  };

  const tableHeaders = (
    <Table.Tr>
      <Table.Th key="Headshot"> </Table.Th>
      <Table.Th key="Name"> Name </Table.Th>
      <Table.Th key="Position"> Position </Table.Th>
      <Table.Th key="Height"> Height </Table.Th>
      <Table.Th key="Weight"> Weight </Table.Th>
      <Table.Th key="Age"> Age </Table.Th>
      <Table.Th key="Salary"> Salary </Table.Th>
    </Table.Tr>
  );

  const tableRows = props.teamRoster.athletes.map((athlete) => (
    <Table.Tr key={athlete.id}>
      <Table.Td>
        {athlete.headshot ? (
          <img src={athlete.headshot.href} alt="Headshot" width="100px" height="72px" />
        ) : (
          <img src='https://a.espncdn.com/combiner/i?img=/i/headshots/nophoto.png&w=110&h=80&scale=crop' alt="Headshot" width="100px" height="72px" />
        )}
      </Table.Td>
      <Table.Td>
        <Text>{athlete.displayName}</Text>
      </Table.Td>
      <Table.Td>
        <Text c="dimmed"> {athlete.position.abbreviation} </Text>
      </Table.Td>
      <Table.Td>
        <Text c="dimmed"> {athlete.displayHeight} </Text>
      </Table.Td>
      <Table.Td>
        <Text c="dimmed"> {athlete.displayWeight} </Text>
      </Table.Td>
      <Table.Td>
        <Text c="dimmed"> {athlete.age} </Text>
      </Table.Td>
      <Table.Td>
        <Text c="dimmed"> ${athlete.contracts[0].salary} </Text>
      </Table.Td>
    </Table.Tr>
  ));


  return (
    <Paper shadow="md" radius="xl" p="xl" style={styles.background}>

      <Title order={2} py="xl">
        {props.teamRoster.team.displayName} Roster | {props.teamRoster.team.seasonSummary}
      </Title>
      <div style={{ overflowX: 'auto', overflowY: 'clip' }} >
        <Table striped highlightOnHover>
          <Table.Tbody>{tableRows}</Table.Tbody>
          <Table.Thead>{tableHeaders}</Table.Thead>
        </Table>
      </div>
    </Paper>
  )
}
