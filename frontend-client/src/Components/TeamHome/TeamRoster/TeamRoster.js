import React from 'react';
import { DataTable, Grommet, Text, Box } from 'grommet';

export default function TeamRoster(props) {
  const players = props.resultSets[0].rowSet;
  console.log(props.resultSets[0].rowSet);

  const columns = [
    { property: 'fullName', header: <Text>Full Name</Text> },
    { property: 'position', header: <Text>Position</Text> },
    { property: 'height', header: <Text>Height</Text> },
    { property: 'weight', header: <Text>Weight</Text> },
    { property: 'birthDate', header: <Text>Birth Date</Text> },
    { property: 'age', header: <Text>Age</Text> },
    { property: 'experience', header: <Text>Experience</Text> },
    { property: 'college', header: <Text>College</Text> },
    { property: 'Acquired', header: <Text>Acquired via</Text> },
  ];

  return (
    <Grommet>
      <Box align="center" pad="large">
        <DataTable
          columns={columns}
          data={players.map((player, index) => ({
            id: player[0],
            fullName: player[3],
            position: player[7],
            height: player[8],
            weight: player[9],
            birthDate: player[10],
            age: player[11],
            experience: player[12],
            college: player[13],
            Acquired: player[15],
          }))}
        />
      </Box>
    </Grommet>
  );
}
