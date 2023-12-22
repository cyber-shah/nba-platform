
import React from 'react';
import { Table, Grid, Text, Image, Stack, Button, SimpleGrid } from '@mantine/core';

export default function ScoreBlock(props) {

  const tableHeader = () => {
    return (
      <Table.Tr>
        <Table.Th key="FINAL" style={{ width: '90%' }}>
          FINAL
        </Table.Th>
        <Table.Th key="1" style={{ width: '2%' }}>
          1
        </Table.Th>
        <Table.Th key="2" style={{ width: '2%' }}>
          2
        </Table.Th>
        <Table.Th key="3" style={{ width: '2%' }}>
          3
        </Table.Th>
        <Table.Th key="4" style={{ width: '2%' }}>
          4
        </Table.Th>
        <Table.Th key="T" style={{ width: '2%' }}>
          T
        </Table.Th>
      </Table.Tr>
    );
  };

  const rows = props.event.competitions[0].competitors.map((entry) => {
    return (
      <Table.Tr key={entry.team.displayName}>
        <Table.Td style={{ width: '90%' }}>
          <Grid cols={2}>
            <Grid.Col span={3}>
              <Image src={entry.team.logo} h={30} w={30} />
            </Grid.Col>
            <Grid.Col span={2}>
              <Text size="xs" style={{ whiteSpace: 'nowrap' }}>
                {entry.team.displayName}
              </Text>
            </Grid.Col>
          </Grid>
        </Table.Td>
        <Table.Td style={{ width: '2%' }}>
          <Text size="xs">{entry.linescores[0].value}</Text>
        </Table.Td>
        <Table.Td style={{ width: '2%' }}>
          <Text size="xs">{entry.linescores[1].value}</Text>
        </Table.Td>
        <Table.Td style={{ width: '2%' }}>
          <Text size="xs">{entry.linescores[2].value}</Text>
        </Table.Td>
        <Table.Td style={{ width: '2%' }}>
          <Text size="xs">{entry.linescores[3].value}</Text>
        </Table.Td>
        <Table.Td style={{ width: '2%' }}>
          <Text size="md">{entry.score}</Text>
        </Table.Td>
      </Table.Tr>
    );
  });

  console.log(props.event.competitions[0].competitors[0]);
  return (
    /* Score Block */
    <Grid cols={3}>
      <Grid.Col span={6} >
        <Table withRowBorders={false}   >
          <Table.Thead>{tableHeader()}</Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Grid.Col>

      {/** 
      <Grid.Col span={4} >
        <iframe
          src={props.event.competitions[0].headlines[0].video[0].links.source.HD.href}
          frameBorder="0"
          allowFullScreen />
      </Grid.Col> */ }

      <Grid.Col span={2.5} >
        <Stack>
          <Text> Top Performers </Text>
          {props.event.competitions[0].competitors.map((teams, index) => {
            return (
              <SimpleGrid key={index + 1} cols={2} spacing="xs" >
                <Image src={teams.leaders[0].leaders[0].athlete.headshot} w={30} h={30} />
                <Text size="xs"> {teams.leaders[0].leaders[0].athlete.shortName} <br /> {teams.leaders[0].leaders[0].displayValue} {teams.leaders[0].displayName} </Text>
              </SimpleGrid>
            );
          })}
        </Stack>
      </Grid.Col>

      <Grid.Col span={2} >
        <Stack gap="xs" >
          <Button variant="outline" radius="xl" href={props.event.links[0].href} style={{ width: '120px' }}>{props.event.links[0].shortText}</Button>
          <Button variant="outline" radius="xl" href={props.event.links[1].href} style={{ width: '120px' }} >{props.event.links[1].shortText}</Button>
          <Button variant="outline" radius="xl" href={props.event.links[2].href} style={{ width: '120px' }}>{props.event.links[2].shortText}</Button>
        </Stack>
      </Grid.Col>

    </Grid>

  );
}

