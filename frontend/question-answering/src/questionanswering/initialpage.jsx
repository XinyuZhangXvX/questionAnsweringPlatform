import React, { Component } from 'react';
import { useParams } from "react-router-dom";
import UserService from '../api/UserService.js';
import HeaderComponent from './header.jsx';
import AuthenticationService from './AuthenticationService.js';
import { useNavigate} from "react-router-dom";
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CardActions from '@mui/material/CardActions';
class InitialpageComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
        questions:[],
        answers:[]
    }
    this.toQuestionClicked = this.toQuestionClicked.bind(this)
    this.toPostQuestionClicked = this.toPostQuestionClicked.bind(this)
    this.mapstid = this.mapstid.bind(this)
    this.solveClicked = this.solveClicked.bind(this)
  }

  componentDidMount() {
    let useremail = AuthenticationService.getLoggedInUser()
    UserService.retrieveUserQuestions(useremail)
    .then(response => this.setState({questions:response.data}))
    UserService.retrieveUserAnswers(useremail)
    .then(response => this.setState({answers:response.data}))
  }

  mapstid(stid){
    if (stid === 1) {
      return 'Math, Other'
    }
    else if (stid === 2) {
      return 'Computer Science, Other'
    }
    else if (stid === 3) {
      return 'Physics, Other'
    }
    else if (stid === 4) {
      return 'Computer Science, Programming'
    }
    else if (stid === 5) {
      return 'Computer Science, Databases'
    }
    else if (stid === 6) {
      return 'Math, Linear algebra'
    }
    else if (stid === 7) {
      return 'Physics, Mechanics'
    }
    else if (stid === 8) {
      return 'Physics, Optics'
    }
    else  {
      return ''
    }
  }


  toQuestionClicked(qid) {
    this.props.navigate(`/question/${qid}`)
  }

  toPostQuestionClicked() {
    this.props.navigate(`/createQuestion`)
  }

  solveClicked(qid){
    UserService.resolved(qid).then(response => console.log(response.data))

    const newQuestion = this.state.questions.map(question => {
      if (question.qid !== qid) return question;
      else{
        return { ...question, isresolved: 1};
      }
     
  });
    this.setState({questions: newQuestion});
  }


    render() {
      return (
        // <div className="InitialpageComponent">
        //     <HeaderComponent></HeaderComponent>
        //     <td><button className="btn btn-success" onClick={() => this.toPostQuestionClicked()}>Post a question</button></td>
        //     <h1>Questions</h1>
        //     <table className="table">
        //       <thead>
        //         <tr>
        //           <th>Title</th>  
        //           <th>Body</th>
        //           <th>Topic</th>
        //           <th>PostTime</th>
        //           <th>Link</th>
        //         </tr>  
        //       </thead>   
        //       <tbody>
        //       {
        //         this.state.questions.map(
        //           question =>
        //           <tr>
        //             <td>{question.qtitle}</td>
        //             <td>{question.qbody}</td>
        //             <td>{question.stid}</td>
        //             <td>{question.qposttime}</td>
        //             <td><button className="btn btn-success" onClick={() => this.toQuestionClicked(question.qid)}>Link</button></td>
        //           </tr>
        //         )
        //       }
        //       </tbody>           

        //     </table>
        //     <h1>Answers</h1>
        //     <table className="table">
        //       <thead>
        //         <tr>
        //           <th>question</th>
        //           <th>Body</th>
        //           <th>PostTime</th>
        //           <th>NumLikes</th>
        //           <th>Link</th>
        //         </tr>
        //       </thead>
        //       <tbody>
        //         {
        //           this.state.answers.map(
        //             answer =>
        //             <tr>
        //               <td>{answer.qtitle}</td>
        //               <td>{answer.abody}</td>
        //               <td>{answer.aposttime}</td>
        //               <td>{answer.numlikes}</td>
        //               <td><button className="btn btn-success" onClick={() => this.toQuestionClicked(answer.qid)}>Link</button></td>
        //             </tr>
        //           )
        //         }
        //       </tbody>
        //     </table>


        // </div>


        <div className="InitialpageComponent">
          <HeaderComponent></HeaderComponent>
          {/* Question Section  */}
           <Grid container justifyContent="center" spacing= {1} sx={{mt: 2, ml: 18}}>
            <Grid item>
              <Typography variant="h3" component="h3" sx={{color: '#607d8b'}}>
                Question
              </Typography>
            </Grid>   
            <Grid item  sx={{mt: 2, ml: 20}}>
                <Button variant="contained" onClick={() => this.toPostQuestionClicked()}>Ask Question</Button>
            </Grid>   
          </Grid>
          <Grid container justifyContent="center" spacing= {1} sx={{mt: 2}}>
          <Grid item>
          <Card sx={{ minWidth: 1650, minHeight: 600, maxWidth: 600, ml:0 , mt: 0,  border: 2, borderColor: '#e1f5fe', overflow: 'auto' }}>
          <CardContent>
            <Box component="div"  sx={{ maxHeight: 600, display: 'flex', flexDirection:'column',  ml: 0,
              overflow: 'auto',  my: 2, p: 1}}>
            {
                this.state.questions.map(  question =>
                <Card sx={{  maxHeight: 80,minHeight: 60, minWidth: 600, mt:2 , mb: 0,  border: 2, borderColor: 'grey.500',
                 bgcolor: (theme) =>theme.palette.mode === 'dark' ? '#101010' : 'grey.100',color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '1px solid',
                borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 1,
                fontSize: '0.875rem',
                fontWeight: '700'}}>
                <Box component="div"  sx={{display: 'flex', flexDirection:'row',alignItems: 'flex-start'}}>
                <CardActionArea onClick={() => this.toQuestionClicked(question.qid)}>
                <CardContent >
                <Grid container spacing= {1} sx={{ borderColor: 'grey.500' }}>
                  <Grid item xs={1} sx={{ borderRight: 1,  borderColor: 'grey.500'}} >
                    <Typography >
                      {this.mapstid(question.stid)}
                   </Typography>
                  </Grid>   
                  <Grid item xs={3} sx={{  borderRight:1, borderColor: 'grey.500' }}>
                      {question.qtitle} 
                  </Grid> 
                  <Grid item xs={6} sx={{  borderRight:1, borderColor: 'grey.500', textOverflow: 'ellipsis', overflow:'hidden' }}>
                      {question.qbody} 
                  </Grid> 
                  <Grid item xs={2} sx={{ borderColor: 'grey.500'}}>
                    <Typography sx={{ ml:2, fontsize: 20,mt: 1, ml: 4 }}>
                      Posted: {question.qposttime}
                    </Typography>
                  </Grid> 
                </Grid>
                </CardContent>
                </CardActionArea>
                <CardActions> 
                    <IconButton onClick={() => this.solveClicked(question.qid)} sx={{ml: 4}}>
                      {question.isresolved ?   <CheckBoxIcon  sx={{ color: 'action.active'}}/> :  <CheckBoxOutlineBlankIcon  sx={{ color: 'action.active'}}/>}
                </IconButton>
                </CardActions> 
                </Box>
                </Card> 
              )
            }
            </Box>
          </CardContent>
          </Card> 
          </Grid>   
          </Grid>

           {/* Answer Section  */}
          <Grid container justifyContent="center" spacing= {1} sx={{mt: 2}}>
            <Grid item>
              <Typography variant="h3" component="h3"  sx={{color: '#607d8b'}}>
                Answer
              </Typography>
            </Grid>   
          </Grid>
          <Grid container justifyContent="center" spacing= {1} sx={{mt: 2}}>
          <Grid item>
          <Card sx={{ minWidth: 1650, minHeight: 600, maxWidth: 600, ml:0 , mt: 0,  border: 2, borderColor: '#e1f5fe', overflow: 'auto' }}>
          <CardContent>
            <Box component="div"  sx={{ maxHeight: 600, display: 'flex', flexDirection:'column',  ml: 0,
              overflow: 'auto',  my: 2, p: 1}}>
            {
                this.state.answers.map(  answer =>
                <Card sx={{  maxHeight: 80,minHeight: 60, minWidth: 600, mt:2 , mb: 0,  border: 2, borderColor: 'grey.500',
                 bgcolor: (theme) =>theme.palette.mode === 'dark' ? '#101010' : 'grey.100',color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '1px solid',
                borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 1,
                fontSize: '0.875rem',
                fontWeight: '700'}}>
                <CardActionArea  onClick={() => this.toQuestionClicked(answer.qid)}>
                <CardContent>
                <Grid container spacing= {1} sx={{ borderColor: 'grey.500' }}>
                  <Grid item xs={3} sx={{ borderRight: 1,  borderColor: 'grey.500'}} >        
                      {answer.qtitle}
                  </Grid>   
                  <Grid item xs={6} sx={{  borderRight:1, borderColor: 'grey.500' }}>
                      {answer.abody} 
                  </Grid> 
                  <Grid item xs={1} sx={{  borderRight:1, borderColor: 'grey.500', textOverflow: 'ellipsis', overflow:'hidden' }}>
                      <Box sx={{ display: 'flex',flexDirection:'row', alignItems: 'flex-end', pb: 3, pl: 2, fontsize: 20 }}>
                        <ThumbUpIcon sx={{ color: 'action.active', mr: 1, mt: 1}} />
                        <Typography sx={{ ml:2, fontsize: 20,mt: 1, ml: 2 }}>
                            {answer.numlikes} 
                        </Typography>
                     </Box>
                  </Grid>
                  <Grid item xs={2} sx={{  textOverflow: 'ellipsis', overflow:'hidden' }}>
                    <Typography sx={{ ml:2, fontsize: 20,mt: 1, ml: 4 }}>
                      Posted: {answer.aposttime}
                    </Typography>
                  </Grid> 
                </Grid>
                </CardContent>
                </CardActionArea>
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

function InitialpageComponentwithParams(props) {
  const navigate = useNavigate();
  const param = useParams();
  return <InitialpageComponent {...props} params={param} navigate={navigate} />
}
 
export default InitialpageComponentwithParams;

