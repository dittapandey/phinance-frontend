import Container from '@mui/material/Container';
import { Button, Grid, IconButton, InputBase, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import BasicTabs from './TabPanel';
import { Search } from '@mui/icons-material';
// import {Search} from '@mui/icons-material';

const LandingPage = () => {
    return ( 
        <Container sx={{marginTop: "15px"}}>
      <Stack>
        <Grid container justifyContent="center">
          <Grid item md={2} justifyContent="center">
            icon
          </Grid>
          <Grid item md={8} justifyContent="center">
          <Box sx={{display:"flex", justifyContent:"center",flexDirection:"row"}}>
                <InputBase sx={{ width:"30vw", backgroundColor:"#F7F7F7", p:'10px' , borderRadius:"10px 0 0 10px"}}
                    placeholder="Search companies topics, tickers or filings..."
                    inputProps={{ 'aria-label': 'search google maps' }}/>
                <Button type="submit" sx={{ p: '10px' , backgroundColor:"black", color:"white",borderRadius:"0 10px 10px 0", '&:hover':{backgroundColor:"gray"}}} aria-label="search">
                    <Search/>
                </Button>
              </Box>
          </Grid>
          <Grid item md={2} justifyContent="center">
          <Box sx={{display:"flex", justifyContent:"center",flexDirection:"row"}}>
                <Button sx={{ p: '10px' , backgroundColor:"black", color:"white", '&:hover':{backgroundColor:"gray"}}} aria-label="logIn">
                    Log In
                </Button>
              </Box>
          </Grid>
        </Grid>
        <Box md={12}  sx={{
          minHeight:"400px",
          maxheight:"60vh",
          marginTop:"15px",
          background:"linear-gradient(135deg, #E5FEDF 0%, #84D7E9 100%)",
          display:"flex",
          flexDirection:"column",
          justifyContent: "center"
          }}>
              <Box md={4} sx={{display:"flex", justifyContent:"center"}}>
                <Typography variant="h3">
                  {"Finding the next big thing\njust got easy"}
                </Typography>
              </Box>

              <Box sx={{display:"flex", justifyContent:"center", marginTop:"15px"}}>
                <Typography variant='h6'>
                View 300+ SaaS platform filings
                </Typography>
                <Typography variant='h6'>
                and guide your portfolio to the moon.
                </Typography>
              </Box>
              <Box sx={{display:"flex", justifyContent:"center",flexDirection:"row", marginTop:"30px"}}>
                <InputBase sx={{ width:"30vw", backgroundColor:"#F7F7F7", p:'10px' , borderRadius:"10px 0 0 10px"}}
                    placeholder="Search companies topics, tickers or filings..."
                    inputProps={{ 'aria-label': 'search google maps' }}/>
                <Button type="submit" sx={{ p: '10px' , backgroundColor:"black", color:"white",borderRadius:"0 10px 10px 0", '&:hover':{backgroundColor:"gray"}}} aria-label="search">
                    <Search/>
                </Button>
              </Box>
        </Box>
        <Box sx={{padding:"5px", margin:"5px"}}>
          <Typography variant="h4" color="gray">
            The Market
          </Typography>
        </Box>
        <Box sx={{marginTop:"15px", paddingTop:"5px", paddingBottom:"5px"}}>
          <Container>
            <Grid container spacing={2}>
              <Grid item md={3} xs={4} >
                <Grid container>
                    <Grid item md={12} xs={12} sx={{height: "300px" , border: "1px solid gray", borderRadius:"5px"}}> Top 5 performers</Grid>
                    <Grid item md={12} xs={12} sx={{height: "200px" , border: "1px solid gray", borderRadius:"5px", marginTop: "10px"}}> Recently Viewed</Grid>
                </Grid>
              </Grid>
              <Grid item md={9} xs ={8} sx ={{height: "500px", marginTop:"5px"}}> 
              <Box>
                <BasicTabs/>
              </Box>
                
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Stack>
      
    </Container>
    );
}
 
export default LandingPage;