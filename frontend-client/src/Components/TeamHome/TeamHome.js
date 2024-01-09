import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Paper } from '@mantine/core'
import TeamHeader from './TeamHeader';
import GET from "../../EspnAPI/TeamData/TeamAPI.js"
import { useEffect, useState } from 'react';
import TeamRoster from './TeamRoster';
import NewsSideBar from '../SeasonHome/SeasonNews/NewsSideBar';
import TeamStats from './TeamStats';

export default function TeamHome(props) {
  const { teamId } = useParams();
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState('roster');

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
        <TeamHeader teamData={data.teamData} activeTab={activeTab} setActiveTab={setActiveTab} />
      )}

      {data !== null && (
        <Grid py="md" style={{ width: '70vw', maxWidth: '1200px', margin: 'auto' }}>
          <Grid.Col span={9}>
            {activeTab === 'roster' && (
              <TeamRoster teamRoster={data.teamRoster} />
            )}
            {activeTab === 'stats' && (
              <TeamStats teamStats={data.teamStats} teamLeaders={data.teamLeaders} teamPlayerStats={data.teamPlayerStats} />
            )}
          </Grid.Col>

          <Grid.Col span={3}>
            <NewsSideBar newsData={data.teamNews} />
          </Grid.Col>

        </Grid>
      )}
    </div>
  )
}
