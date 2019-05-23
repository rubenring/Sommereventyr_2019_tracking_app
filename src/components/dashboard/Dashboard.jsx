import React from 'react';
import { LeaderBoardTable } from '../leaderboard';
import { LiveScore } from '../livescore';

export const Dashboard = () => {
  return (
    <div className='container'>
      <LiveScore />
      <LeaderBoardTable />
    </div>
  )
};

export default Dashboard;