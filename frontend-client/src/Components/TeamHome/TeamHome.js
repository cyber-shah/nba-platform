import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Paper } from '@mantine/core'
import TeamHeader from './TeamHeader';
import GET from "../../EspnAPI/TeamData/TeamAPI.js"
import { useEffect, useState } from 'react';
import TeamRoster from './TeamRoster';


export default function TeamHome(props) {
  const { teamId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await GET({
        teamId: teamId, seasonYear: '2024'
      });
      setData(result);
    }
    fetchData();
  }, []);


  return (
    <div>
      {data !== null && (
        <>
          <TeamHeader teamData={data.teamData} />
          <TeamRoster teamRoster={data.teamRoster} />
        </>
      )}

    </div>
  )
}
