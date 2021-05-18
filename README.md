# Capstone 2 Proposal  
  
# ABN - Air Ball News  
  
## Overview
- Web application that shows news, games, stats, and standings for the current 2020-2021 NBA season. My app is geared towards fans of the NBA who want to keep track of their favorite teams' progress in the season. After a user creates an account or signs in with a previously created account they'll see a page with the logos and names of all the teams in the NBA. They'll pick their favorite or whichever team they want to look up stats on. The team page will show information such as current/most recent game played, players/player stats, team related news, and current standings in their division. 

## Tech Stack
- I'll be using the MERN stack for my project. MongoDB, Express, React, and Node.js

## Schema
- I'll have a table for user information such as username, password, first name, last name, email, and favorite team.
- There will also be a table for teams that includes the name and team id.

## Potential API Issues
- Missing or incomplete team/player data.
- Missing or incomplete game data.
- The API being down for maintenance or other issues.

## Functionality/User Flow
- Upon entering the site, a user can either sign up for an account or log in to their previous account.
- To sign up for an account you'll need a username, password, first name, last name, email, and favorite team.
- After signing up you'll see a page asking if you'd like to see the team page of your favorite team or you can choose to see the team page of another team.
- Once on the team page you'll see team news, player info/stats, and previous/current game information.
- Clicking a news article will open that article in a new window.
- If a current game is being played you'll see score updates and possibly a link to watch the game live.
- If you want to change your favorite team, you can do so in the settings along with changing your username, first name, last name, and email.

## API Used
- For team/player stats and game information I'll be using API-NBA (https://rapidapi.com/api-sports/api/api-nba)
- For team news I'll be using News API (https://newsapi.org/)

## Stretch Goals
- Integrate Twitter so users and live tweet during a game.
- Create a mobile version of my site using React Native.
- Track/edit fantasy sports leagues.