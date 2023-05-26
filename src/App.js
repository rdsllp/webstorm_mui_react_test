import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Link from "@mui/material/Link";
import TestCard from "./Card";
import Typography from "@mui/material/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Test CRA app
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
function App() {
  return (
    <Container maxWidth="sm">
      <Grid container pt={3}>
        <Grid item xs={12}>
          <TestCard />
        </Grid>
      </Grid>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Create React App example
        </Typography>
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;
