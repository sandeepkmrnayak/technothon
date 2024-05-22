import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./Login.css";
import { height } from "@mui/system";


export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div className="my-container">

    <Container component="main" maxWidth="xs" style={{boxShadow:'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px', backgroundColor: 'whitesmoke',borderRadius:'5px'}}>
      <Box
        sx={{  
          marginTop: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        style={{ backgroundColor: 'whitesmoke' ,height:'400px'}}
      >
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button  className="my-btn"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            style={{backgroundColor:'#6809dc'}}
            
          >
            Log In
          </Button>
          {/* <button className="my-btn">Log in</button> */}
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" style={{color:'#6809dc',float:'left'}}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item >
              <Link href="#" variant="body2" style={{color:'#6809dc'}}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    </div>
  );
}