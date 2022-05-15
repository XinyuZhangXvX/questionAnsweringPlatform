import React, { Component } from 'react';
import HeaderComponent from './header.jsx';
import UserService from '../api/UserService.js';
import { useParams } from "react-router-dom";
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

class SearchResultComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
        keyword:"",
        questions:[]
    }
    this.mapstid = this.mapstid.bind(this)
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

  componentDidMount() {
    
      const getkeyword = this.props.params.keyword;
      this.setState({keyword:getkeyword});
      UserService.retrieveSearchResults(getkeyword)
      .then(response => this.setState({questions:response.data}))
  }

    render() {
      return (
        // <div className="SearchResultComponent">
        //   <HeaderComponent></HeaderComponent>
        //   <h1>Questions</h1>
        //     <table className="table">
        //       <thead>
        //         <tr>
        //           <th>Title</th>  
        //           <th>Body</th>
        //           <th>Topic</th>
        //           <th>PostTime</th>
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
        //           </tr>
        //         )
        //       }
        //       </tbody>  
        //     </table>
        // </div>

        <div className="SearchResultComponent">
           <HeaderComponent></HeaderComponent>
           <Typography variant="h5" component="h5"  sx={{color: '#607d8b', mt: 2, borderBottom: 1}}>
               Results for:  {this.state.keyword}
            </Typography>

            <Grid container justifyContent="center" spacing= {1} sx={{mt: 2}}>
          <Grid item>
          <Card sx={{ minWidth: 1650, minHeight: 700, maxWidth: 700, ml:0 , mt: 0,  border: 2, borderColor: '#e1f5fe', overflow: 'auto' }}>
          <CardContent>
            <Box component="div"  sx={{ maxHeight: 700, display: 'flex', flexDirection:'column',  ml: 0,
              overflow: 'auto',  my: 2, p: 1}}>
            {
                this.state.questions.map(  question =>
                <Card sx={{  maxHeight: 80,minHeight: 60, minWidth: 700, mt:2 , mb: 0,  border: 2, borderColor: 'grey.500',
                 bgcolor: (theme) =>theme.palette.mode === 'dark' ? '#101010' : 'grey.100',color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '1px solid',
                borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 1,
                fontSize: '0.875rem',
                fontWeight: '700'}}>
                <CardActionArea  onClick={() => this.toQuestionClicked(question.qid)}>
                <CardContent >
                <Grid container spacing= {1} sx={{ borderColor: 'grey.500' }}>
                  <Grid item xs={1} sx={{ borderRight: 1,  borderColor: 'grey.500'}} >
                    <Typography sx={{fontsize: 3}}>
                      {this.mapstid(question.stid)}
                   </Typography>
                  </Grid>   
                  <Grid item xs={3} sx={{  borderRight:1, borderColor: 'grey.500' }}>
                      {question.qtitle} 
                  </Grid> 
                  <Grid item xs={5} sx={{  borderRight:1, borderColor: 'grey.500', textOverflow: 'ellipsis', overflow:'hidden' }}>
                      {question.qbody} 
                  </Grid> 
                  <Grid item xs={2} sx={{  borderRight:1,borderColor: 'grey.500'}}>
                    <Typography sx={{ ml:2, fontsize: 20,mt: 1, ml: 4 }}>
                      Posted: {question.qposttime}
                    </Typography>
                  </Grid>
                  <Grid item xs={1} sx={{ borderColor: 'grey.500'}}>
                       {question.isresolved ?   <CheckBoxIcon  sx={{ color: 'action.active', mt:2}}/> :  <CheckBoxOutlineBlankIcon  sx={{ color: 'action.active', mt:2}}/>}
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

function SearchResultComponentwithParams(props) {
  const param = useParams();
  const navigate = useNavigate();
  return <SearchResultComponent {...props} params={param} navigate={navigate}/>
}

export default SearchResultComponentwithParams;
