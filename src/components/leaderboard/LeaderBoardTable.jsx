import React from 'react';
import { Table } from 'react-bootstrap';

export const LeaderBoardTable = () => {
  return (<Table striped bordered variant="dark">
    <thead>
      <tr>
        <th>Plassering</th>
        <th>Lagnavn</th>
        <th>Progresjon</th>
        <th>Nåværende oppgave</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>4/8</td>
        <td>Champs-Élysées</td>

      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>3/8</td>
        <td>La Planche des Belles Filles</td>
      </tr>

    </tbody>
  </Table>)
};

export default LeaderBoardTable;