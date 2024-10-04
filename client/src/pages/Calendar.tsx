// import { useState, useEffect, useLayoutEffect } from "react";
// import { retrieveUsers } from "../api/userAPI";
// import type { UserData } from "../interfaces/UserData";
// import ErrorPage from "./ErrorPage";
// import UserList from "../components/Users";
// import auth from "../utils/auth";
// import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

const calendar = () => {
  return (
    <>
      <div>Header</div>
      <div> Board Game Browesing</div>
      <main>
        <div className="Calendar">
          <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                </tr>
            </thead>
            <tbody>
                <tr> 
                    <td>Game 1</td>
                    <td>Game 2</td>
                    <td>Game 3</td>
                    <td>Game 4</td>
                    <td>Game 5</td>
                    <td>Game 6</td>
                    <td>Game 7</td>
                </tr>
                <tr>
                    <td>Game 8</td>
                    <td>Game 9</td>
                    <td>Game 10</td>
                    <td>Game 11</td>
                    <td>Game 12</td>
                    <td>Game 13</td>
                    <td>Game 14</td>
                </tr>
                <tr>
                    <td>Game 15</td>
                    <td>Game 16</td>
                    <td>Game 17</td>
                    <td>Game 18</td>
                    <td>Game 19</td>
                    <td>Game 20</td>
                    <td>Game 21</td>
                </tr>
            </tbody>
          </Table>
        </div>
      </main>
      <div>Game Notes</div>
    </>
  );
};

export default calendar;
