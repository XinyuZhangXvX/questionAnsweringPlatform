import React, { Component } from 'react';
import HeaderComponent from './header.jsx';
import UserService from '../api/UserService.js';
import AuthenticationService from './AuthenticationService.js';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import avatar from ".//Avatar/avatar.png"
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';

export default class ProfileComponent extends Component {
    constructor(props){
      super(props)
      this.state = {
        profiles:
        [

        ]
      }
    }

    componentDidMount() {
      UserService.updateScore().then(response=>console.log(response.data))
      let useremail = AuthenticationService.getLoggedInUser()
      UserService.retrieveUserProfile(useremail)
      .then(response => this.setState({profiles:response.data}))
    }

    render() {
      return (
        // <div className="ProfileComponent">
        //     <HeaderComponent></HeaderComponent>
        //     <h1>Profile</h1>
        //     {this.state.profiles.email}
        //     <br></br>
        //     {this.state.profiles.username}
        //     <br></br>
        //     {this.state.profiles.status}
        //     <br></br>
        //     {this.state.profiles.score}
        //     <br></br>
        //     {this.state.profiles.city}
        //     <br></br>
        //     {this.state.profiles.state}
        //     <br></br>
        //     {this.state.profiles.country}
        //     <br></br>
        //     {this.state.profiles.profile}
        //     <br></br>


        // </div>
        <div>
        <HeaderComponent></HeaderComponent>
          <Grid container justifyContent="center">
            <Grid item>
              <IconButton sx={{ml:0, mt: 5}}>
                    <Avatar  src={avatar} sx={{width: 150, height: 150,  border:2, borderColor: '#5f87c6' }}/>
              </IconButton>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" >
            <Grid item>
              <Box sx={{display:'flex', flexDirection: 'row' , alignItems: 'flex-end', typography: 'subtitle',  textAlign: 'right', ml:0,mb: 2, fontWeight: 'bold', fontSize: 40}}>
                <Box id='userName' sx={{display:'flex', flexDirection: 'row' , alignItems: 'flex-end', typography: 'subtitle',  textAlign: 'right', ml: 1, fontWeight: 'regular'}}>{this.state.profiles.username}</Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" spacing= {20} >
          <Grid item>
            <Card sx={{ minWidth: 600, maxWidth: 600, ml:0 , mt: 0,  border: 2, borderColor: '#5f87c6' }}>
            <CardContent>
            <Box sx={{ display: 'flex', flexDirection:'column',alignItems: 'flex-start', ml: 0, pl: 2, borderBottom: 1}}>
                <Box sx={{display:'flex', flexDirection:'column', alignItems: 'flex-start', ml: 0, typography: 'subtitle',  textAlign: 'right', mb: 2, fontWeight: 'bold', fontSize: 20}}>
                    User Information:
                </Box>
                <Box sx={{display:'flex', flexDirection: 'row' , alignItems: 'flex-start', typography: 'subtitle',  textAlign: 'right', ml: 0,mb: 2,fontSize: 18 }}>
                      UserName: 
                      <Box id='userName' sx={{display:'flex', flexDirection: 'row' , alignItems: 'flex-end', typography: 'subtitle',  textAlign: 'right', ml: 2, fontWeight: 'regular'}}>{this.state.profiles.username}</Box>
                  </Box>
                <Box sx={{display:'flex', flexDirection:'column', alignItems: 'flex-start', ml: 0}}>
                    <Box sx={{display:'flex', flexDirection: 'row' , typography: 'subtitle',  textAlign: 'right', ml: 0, mb: 2, fontSize: 18}}>
                        E-mail:
                        <Box id='userStatus' sx={{display:'flex', flexDirection: 'row' , alignItems: 'flex-end', typography: 'subtitle',  textAlign: 'right', ml: 2, fontWeight: 'regular'}}>{this.state.profiles.email}</Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection:'column',alignItems: 'flex-start', ml: 0,mt: 2, pl: 2, borderBottom: 1}}>
                <Box sx={{display:'flex', flexDirection:'column', alignItems: 'flex-start', ml: 0, typography: 'subtitle',  textAlign: 'right', mb: 2, fontWeight: 'bold', fontSize: 20}}>
                    Status Information: 
                </Box>
                <Box sx={{display:'flex', flexDirection: 'row' , alignItems: 'flex-start', typography: 'subtitle',  textAlign: 'right', ml: 0,mb: 2,fontSize: 18 }}>
                      Status: 
                      <Box id='userName' sx={{display:'flex', flexDirection: 'row' , alignItems: 'flex-end', typography: 'subtitle',  textAlign: 'right', ml: 2, fontWeight: 'regular'}}>Level {this.state.profiles.status}</Box>
                  </Box>
                <Box sx={{display:'flex', flexDirection:'column', alignItems: 'flex-start', ml: 0}}>
                    <Box sx={{display:'flex', flexDirection: 'row' , typography: 'subtitle',  textAlign: 'right', ml: 0, mb: 2, fontSize: 18}}>
                        Score:
                        <Box id='userStatus' sx={{display:'flex', flexDirection: 'row' , alignItems: 'flex-end', typography: 'subtitle',  textAlign: 'right', ml: 2, fontWeight: 'regular'}}>{this.state.profiles.score}</Box>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection:'column',alignItems: 'flex-start', ml: 0,mt: 2, pl: 2, borderBottom: 1}}>
                <Box sx={{display:'flex', flexDirection:'column', alignItems: 'flex-start', ml: 0, typography: 'subtitle',  textAlign: 'right', mb: 2, fontWeight: 'bold', fontSize: 20}}>
                    Other Information: 
                </Box>
                <Box sx={{display:'flex', flexDirection: 'row' , alignItems: 'flex-start', typography: 'subtitle',  textAlign: 'right', ml: 0,mb: 2,fontSize: 18 }}>
                      City: 
                      <Box id='userName' sx={{display:'flex', flexDirection: 'row' , alignItems: 'flex-end', typography: 'subtitle',  textAlign: 'right', ml: 2, fontWeight: 'regular'}}>{this.state.profiles.city}</Box>
                  </Box>
                <Box sx={{display:'flex', flexDirection:'column', alignItems: 'flex-start', ml: 0}}>
                    <Box sx={{display:'flex', flexDirection: 'row' , typography: 'subtitle',  textAlign: 'right', ml: 0, mb: 2, fontSize: 18}}>
                        State:
                        <Box id='userStatus' sx={{display:'flex', flexDirection: 'row' , alignItems: 'flex-end', typography: 'subtitle',  textAlign: 'right', ml: 2, fontWeight: 'regular'}}>{this.state.profiles.state}</Box>
                    </Box>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', alignItems: 'flex-start', ml: 0}}>
                    <Box sx={{display:'flex', flexDirection: 'row' , typography: 'subtitle',  textAlign: 'right', ml: 0, mb: 2, fontSize: 18}}>
                        Country:
                        <Box id='userStatus' sx={{display:'flex', flexDirection: 'row' , alignItems: 'flex-end', typography: 'subtitle',  textAlign: 'right', ml: 2, fontWeight: 'regular'}}>{this.state.profiles.country}</Box>
                    </Box>
                </Box>
            </Box>
          
            </CardContent>
        
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ minWidth: 600, minHeight: 200, maxWidth: 600, ml:0 , mt: 0,  border: 2, borderColor: '#5f87c6' }}>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection:'column',alignItems: 'flex-start', ml: 0, pl: 2}}>
                <Box sx={{display:'flex', flexDirection:'column', alignItems: 'flex-start', ml: 0, typography: 'subtitle',  textAlign: 'right', mb: 2, fontWeight: 'bold', fontSize: 20}}>
                    About Me: 
                </Box>
                <Box sx={{display:'flex', flexDirection: 'row' , alignItems: 'flex-start', typography: 'subtitle',  textAlign: 'right', ml: 0,mb: 2,fontSize: 18 }}>
                      <Box id='userName' sx={{display:'flex', flexDirection: 'row' , alignItems: 'flex-end', typography: 'subtitle',  textAlign: 'right', ml: 2, fontWeight: 'regular'}}>{this.state.profiles.profile}</Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        </Grid>
         


      </div>
      );
    }
}
