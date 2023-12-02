import React from "react";
import {
  Box,
  DataTable,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "grommet";

export default function SeasonsStandings(props) {
  return (
    <div>
      <Box elevation="large" round="medium" pad="medium">
        <DataTable>
          <TableHeader>
            <TableRow>
              <TableCell scope="col" border="bottom">
                Rank
              </TableCell>
              <TableCell scope="col" border="bottom">
                Team
              </TableCell>
              <TableCell scope="col" border="bottom">
                Wins
              </TableCell>
              <TableCell scope="col" border="bottom">
                Losses
              </TableCell>
              <TableCell scope="col" border="bottom">
                Win %
              </TableCell>
              <TableCell scope="col" border="bottom">
                Games Behind
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell scope="row">1</TableCell>
              <TableCell>Dallas Mavericks</TableCell>
              <TableCell>20</TableCell>
              <TableCell>5</TableCell>
              <TableCell>80%</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row">2</TableCell>
              <TableCell>Los Angeles Lakers</TableCell>
              <TableCell>18</TableCell>
              <TableCell>7</TableCell>
              <TableCell>72%</TableCell>
              <TableCell>2</TableCell>
            </TableRow>
            {/* Add more rows as needed */}
          </TableBody>
        </DataTable>
      </Box>
    </div>
  );
}
