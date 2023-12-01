import React from "react";
import {
  Box,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "grommet";

export default function SeasonsStandings(props) {
  return (
    <div>
      <Box elevation="large" round="medium" pad="medium">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell scope="col" border="bottom">
                Name
              </TableCell>
              <TableCell scope="col" border="bottom">
                Flavor
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell scope="row">
                <strong>Eric</strong>
              </TableCell>
              <TableCell>Coconut</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row">
                <strong>Chris</strong>
              </TableCell>
              <TableCell>Watermelon</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </div>
  );
}
