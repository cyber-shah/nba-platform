import React from 'react';
import { Table, Box, Paper } from '@mantine/core'


export default function TeamRoster(props) {
  console.log(props.teamRoster);

  const styles = {
    background: { width: '80vw', maxWidth: '900px', margin: 'auto' }
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
        {athlete.displayName}
      </Table.Td>
      <Table.Td>
        {athlete.position.abbreviation}
      </Table.Td>
      <Table.Td>
        {athlete.displayHeight}
      </Table.Td>
      <Table.Td>
        {athlete.displayWeight}
      </Table.Td>
      <Table.Td>
        {athlete.age}
      </Table.Td>
      <Table.Td>
        ${athlete.contracts[0].salary}
      </Table.Td>
    </Table.Tr>
  ));


  return (
    <Paper shadow="md" my="lg" radius="xl" style={styles.background}>
      <Table striped highlightOnHover>
        <Table.Tbody> {tableRows}</Table.Tbody>
        <Table.Thead> {tableHeaders} </Table.Thead>
      </Table>
    </Paper>
  )
}
