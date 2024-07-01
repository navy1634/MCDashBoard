'use client';
import { playerType } from "@/models/types";


function PlayerPage(players: any) {
  console.log("kk", players)
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>PlayerName</th>
            <th>LastIn</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* {players.map((player: playerType) => {
            <tr><td>{player.name}</td></tr>
          })} */}
        </tbody>
      </table>
    </>
  );
}

export default PlayerPage;
