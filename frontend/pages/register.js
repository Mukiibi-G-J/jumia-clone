import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  ThemeProvider,
  Typography,
} from "@material-ui/core";

import { Copyright } from "@material-ui/icons";
import { TextField } from "@mui/material";
import React from "react";
import { theme } from "../utils/theme";
import { FacebookLoginButton } from "react-social-login-buttons";

function register() {
  const handleSubmit = (e) => {};
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 60,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="images/myjumia-top-logo.png"
            alt="log"
            height={60}
            width={60}
          />
          <Typography component="h1" variant="h5" color="#000">
            What's your email address?
          </Typography>
          <Typography
            component="h1"
            variant="body2"
            color="#504A4A"
            sx={{ mt: 4 }}
          >
            Type your email to log in or create a Jumia account.
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
            style={{ width : "450px"}}
          >
            <Grid container spacing={2}   >
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  sx={{color:"#F7962C"}}
                />
              </Grid>
              <Box flex={1} />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt:6, mb: 2 }}
              style={{ marginTop: 10}}
              color="secondary"
            >
              Continue
            </Button>

            <Link href="#" variant="body" color="secondary"  underline="none" style={{marginTop:6 }}>
              Already have an account? Login
            </Link>
            <FacebookLoginButton style={{ marginTop:40}}/>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default register;
