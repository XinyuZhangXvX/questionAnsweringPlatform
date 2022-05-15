import React, { Component } from 'react';
import { useParams } from "react-router-dom";
import HeaderComponent from "./header.jsx";
import { useNavigate } from "react-router-dom";

import UserService from '../api/UserService.js';

import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { CardActionArea } from '@mui/material';
import AuthenticationService from './AuthenticationService.js';
class QuestionAnswerComponent extends Component {

    constructor(props) {
        super(props);
        this.state={
        qid:'',
        message:'',
        question:[],
        answers:[]};
        this.onLikeClick = this.onLikeClick.bind(this)
        this.toPostAnswerClicked = this.toPostAnswerClicked.bind(this)
    }

    onLikeClick(aid){
        let email = AuthenticationService.getLoggedInUser();
        if (email!=null){
          UserService.likeAnswer(email,aid).then(response => 
            {if(response.data === "Insert failed."){
              this.setState({message:'You can only like an answer once.'})
            }
            })
        }
    }

    toPostAnswerClicked(qid) {
      this.props.navigate(`/createAnswer/${qid}`)
    }

    componentDidMount() {
        const getqid = this.props.params.qid;
        this.setState({qid:getqid});
        
        UserService.retrieveAQuestion(getqid)
        .then(response => this.setState({question:response.data}))
        UserService.retrieveAnswerstoQuestion(getqid)
        .then(response => this.setState({answers:response.data}))
        
    }
    
    render(){
       
        
        return(
            // <div> 
            // <HeaderComponent></HeaderComponent>
            // <h1>Question</h1>
            // <table className="table">
            //   <thead>
            //     <tr>
            //       <th>Title</th>  
            //       <th>Body</th>
            //       <th>Topic</th>
            //       <th>PostTime</th>
            //     </tr>  
            //   </thead>   
            //   <tbody>
              
                
                  
            //         <tr>
            //         <td>{this.state.question.qtitle}</td>
            //         <td>{this.state.question.qbody}</td>
            //         <td>{this.state.question.stid}</td>
            //         <td>{this.state.question.qposttime}</td>
            //       </tr>
                
              

                
            //   </tbody>           

            // </table>

            // <td><button className="btn btn-success" onClick={() => this.toPostAnswerClicked(this.state.question.qid)}>Post an answer</button></td>

            // <h1>Answers</h1>
            // <table className="table">
            //   <thead>
            //     <tr>
            //       <th>Body</th>
            //       <th>PostTime</th>
            //       <th>NumLikes</th>
            //       <th>Answer Poster</th>
            //     </tr>
            //   </thead>
            //   <tbody>
            //     {
            //       this.state.answers.map(
            //         answer =>
            //         <tr>
            //           <td>{answer.abody}</td>
            //           <td>{answer.aposttime}</td>
            //           <td>{answer.numlikes}</td>
            //           <td>{answer.email}</td>
            //         </tr>
            //       )
            //     }
            //   </tbody>
            // </table>
            // </div>


            <div> 
              <HeaderComponent></HeaderComponent>
              <Grid container justifyContent="center" spacing= {1} sx={{mt: 2,borderBottom: 1}}>
                <Grid item>
                <Typography variant="h5" component="h5" sx={{mb:3 , color: '#37474f'}}>
                  {this.state.question.qtitle}
                </Typography>
                </Grid>   
              </Grid>
              <Grid container justifyContent="center" spacing= {1} sx={{}}>
              <Grid item>
              <Card sx={{  maxWidth:1200,  maxHeight: 200,minHeight: 200, minWidth: 600, mt:2 , mb: 0,  border: 2, borderColor: 'grey.500',overflow: 'auto',
                bgcolor: (theme) =>theme.palette.mode === 'dark' ? '#101010' : 'grey.100',color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '1px solid',
                borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 1,
                fontSize: '0.875rem',
                fontWeight: '700'}}>
                <CardContent >
                  <Grid container justifyContent="center" spacing= {1} sx={{mt: 1}}>
                      <Grid item>
                      <Typography variant="h5" component="h5" sx={{mb:3 , color: '#37474f'}}>
                          {this.state.question.qbody}
                      </Typography>
                      </Grid>   
                    </Grid>
                </CardContent>
              </Card>
              </Grid>   
              </Grid> 

              <Grid item  sx={{mt: 2, ml: 20}}>
              <Button variant="contained" onClick={() => this.toPostAnswerClicked(this.state.question.qid)}>Post an answer</Button>
          </Grid>  



              <div>{this.state.message}</div>
              {/* Answer Section */}
          <Grid container justifyContent="center" spacing= {1} sx={{mt: 2}}>
          <Grid item>
          <Card sx={{ minWidth: 1650, minHeight: 600, maxWidth: 600, ml:0 , mt: 0,mb: 2,  border: 2, borderColor: '#e1f5fe', overflow: 'auto' }}>
          <CardContent>
            <Box component="div"  sx={{ maxHeight: 600, display: 'flex', flexDirection:'column',  ml: 0,
              overflow: 'auto',  my: 2, p: 1}}>
            {
                this.state.answers.map(  answer =>
                <Card sx={{  maxHeight: 180,minHeight: 180, minWidth: 400, mt:2 , mb: 0,  border: 2, borderColor: 'grey.500',
                overflow:'auto',
                 bgcolor: (theme) =>theme.palette.mode === 'dark' ? '#101010' : 'grey.100',color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '1px solid',
                borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 1,
                fontSize: '0.875rem',
                fontWeight: '700'}}>
                <CardContent>
                <Grid container spacing= {1} sx={{ borderColor: 'grey.500' }}>
                  <Grid item xs={2} sx={{ borderRight: 1,  borderColor: 'grey.500', fontsize: 30,mt:3}} >        
                      {answer.email}
                  </Grid>   
                  <Grid item xs={7} sx={{  borderRight:1, borderColor: 'grey.500' }}>
                      {answer.abody} 
                  </Grid>
                
                  <Grid item xs={1} sx={{  borderRight:1, borderColor: 'grey.500', textOverflow: 'ellipsis', overflow:'hidden' }}>
                    <CardActionArea  sx={{  maxHeight: 180,minHeight: 180}} xs={1}  onClick={() => this.onLikeClick(answer.aid)}>
                      <Box sx={{ display: 'flex',flexDirection:'row', alignItems: 'flex-end', pb: 3, pl: 2, fontsize: 20 }}>
                        <ThumbUpIcon sx={{ color: 'action.active', mr: 1, mt: 1}} />
                        <Typography sx={{ ml:2, fontsize: 20,mt: 1, ml: 2 }}>
                            {answer.numlikes} 
                        </Typography>
                     </Box>
                    </CardActionArea >
                  </Grid>
                
                  <Grid item xs={2} sx={{  textOverflow: 'ellipsis', overflow:'hidden' }}>
                    <Typography sx={{ ml:2, fontsize: 20,mt: 1, ml: 4 }}>
                      Posted: {answer.aposttime}
                    </Typography>
                  </Grid> 
                </Grid>
                </CardContent>

                </Card> 
                
              )
            }
            </Box>
          </CardContent>
          </Card> 
          </Grid>   
          </Grid>

           

            </div>
        );
    }
}

function QuestionAnswerComponentwithParams(props) {
    const param = useParams();
    const navigate = useNavigate();
    return <QuestionAnswerComponent {...props} params={param} navigate={navigate}/>
    
  }

export default QuestionAnswerComponentwithParams;