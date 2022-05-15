import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import avatar from ".//Avatar/avatar.png"
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import UserService from '../api/UserService.js';
import { useNavigate, Link } from "react-router-dom";

class HeadComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
          user:"",
          level:"",
          keyword:""
        }
        this.searchClicked = this.searchClicked.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    searchClicked() {
        this.props.navigate(`/search/${this.state.keyword}`)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    componentDidMount() {
        UserService.updateScore().then(response=>console.log(response.data))
        let useremail = AuthenticationService.getLoggedInUser()
        this.setState({user:useremail})
        UserService.retrieveUserStatus(useremail)
        .then(response => this.setState({level:response.data}))
    }

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        return (
            <div className="HeaderComponent">
                <Box sx={{m: 0,display: 'flex', pl:0, borderBottom: 2, borderColor: '#5f87c6'} }>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', pb: 3, pl: 2 }}>
                        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <input type = "keyword" name = "keyword" value ={this.state.keyword} onChange={this.handleChange}/>
                        <button onClick={this.searchClicked}>search</button>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end', pb: 3, pl: 2 }}>
                        {isUserLoggedIn && <Link to= "/initial/{this.state.user}" >home page</Link>}
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end', pb: 3, pl: 2 }}>
                        {!isUserLoggedIn && <Link to="/login">Login</Link>}
                        {isUserLoggedIn && <Link to="/logout" onClick={AuthenticationService.logout}>Logout</Link>}
                    </Box>


                    {isUserLoggedIn && 
                    <Box sx={{display:'flex', flexDirection:'column', alignItems: 'flex-start', ml: 1}}>
                        <Box sx={{display:'flex', flexDirection: 'row' , typography: 'subtitle',   mb: 2, fontWeight: 'bold'}}>
                            User: 
                            <Box id='userName' sx={{display:'flex', flexDirection: 'row' , typography: 'subtitle',   ml: 1, fontWeight: 'regular'}}>{this.state.user}</Box>
                        </Box>
                        <Box sx={{display:'flex', flexDirection: 'row' ,  typography: 'subtitle',   mb: 2, fontWeight: 'bold'}}>
                            Status:
                            <Box id='userStatus' sx={{display:'flex', flexDirection: 'row' , typography: 'subtitle',   ml: 1, fontWeight: 'regular'}}>Level {this.state.level}</Box>
                        </Box>
                    </Box>}
                    {isUserLoggedIn && 
                    <IconButton href="/profile" sx={{ml: 4}}>
                        <Avatar  src={avatar} sx={{width: 72, height: 72, border:2, borderColor: '#5f87c6' }}/>
                    </IconButton>}
                    
                </Box>
                <Outlet />
            </div>                  
                
            
        )
    }
}



function HeaderComponent(props) {
    const navigate = useNavigate();
    return <HeadComponent {...props} navigate={navigate} />
}
export default HeaderComponent;