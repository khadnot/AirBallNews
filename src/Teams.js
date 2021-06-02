import React from 'react';
import './Teams.css'
import * as NBAIcons from 'react-nba-logos';

const NBA = require('nba');
const curry = NBA.findPlayer('Stephen Curry');

function Teams() {
    console.log(curry);
  return (
    <div className='team-names'>
      <h1>Welcome to the Teams Page!</h1>
      <p>Please choose your favorite team:</p>
      <div>
        <NBAIcons.ATL size='125' />
        <NBAIcons.BKN size='125' />
        <NBAIcons.BOS size='125' />
        <NBAIcons.CHA size='125' />
        <NBAIcons.CHI size='125' />
        <NBAIcons.CLE size='125' />
        <NBAIcons.DAL size='125' />
        <NBAIcons.DEN size='125' />
        <NBAIcons.DET size='125' />
        <NBAIcons.GSW size='125' />
      </div>
      <div>
        <NBAIcons.HOU size='125' />
        <NBAIcons.IND size='125' /> 
        <NBAIcons.LAC size='125' />
        <NBAIcons.LAL size='125' />
        <NBAIcons.MEM size='125' />
        <NBAIcons.MIA size='125' />
        <NBAIcons.MIL size='125' />
        <NBAIcons.MIN size='125' />
        <NBAIcons.NOP size='125' />
        <NBAIcons.NYK size='125' />
      </div>
      <div>
        <NBAIcons.OKC size='125' />  
        <NBAIcons.ORL size='125' />
        <NBAIcons.PHI size='125' />
        <NBAIcons.PHX size='125' />  
        <NBAIcons.POR size='125' />
        <NBAIcons.SAC size='125' />  
        <NBAIcons.SAS size='125' />
        <NBAIcons.TOR size='125' />
        <NBAIcons.UTA size='125' />
        <NBAIcons.WAS size='125' />
      </div>
    </div>
  );
}

export default Teams;
