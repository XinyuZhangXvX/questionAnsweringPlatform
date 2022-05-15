import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponentWithNavigate from './login.jsx';
import InitialpageComponentwithParams from './initialpage.jsx';
import RegisterComponent from './register.jsx';
import CreatQuestionComponentWithNavigate from './postQuestion.jsx';

//import HeaderwithNavigate from './header.jsx';
import FooterComponent from './footer.jsx';
import LogoutComponent from './logout.jsx';
import ProfileComponent from './profile.jsx';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import HeaderComponent from './header.jsx';
import QuestionAnswerComponentwithParams from './questionAnswer.jsx';
import SearchResultComponentwithParams from './searchResult.jsx';
import CreatAnswerComponentWithNavigate from './postAnswer.jsx';


export default class QuestionAnsweringPlatform extends Component {
    render() {
        return (
            <div className="QuestionAnsweringPlatform">
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigate />}/>
                        <Route path="/login" element={<LoginComponentWithNavigate />}/>
                        <Route path="/register" element={<RegisterComponent />}/>
                        <Route path="*" element={<ErrorComponent />}/>
                        <Route exact path='/' element={<AuthenticatedRoute/>}>
                            <Route path='/initial/:email' element={<InitialpageComponentwithParams />}/>
                            <Route path="/logout"  element={<LogoutComponent />}/>
                            <Route path="/search/:keyword" element={<SearchResultComponentwithParams/>}/> 
                            <Route path="/profile" element={<ProfileComponent /> }/>
                            <Route path="/question/:qid" element={<QuestionAnswerComponentwithParams /> }/>
                            <Route path="/createQuestion" element={<CreatQuestionComponentWithNavigate /> }/>
                            <Route path="/createAnswer/:qid" element={<CreatAnswerComponentWithNavigate /> }/>
                        </Route>
                    </Routes>
                    <FooterComponent/>
                </Router>
            </div>
        );
    }
}

function ErrorComponent() {
    return <div><HeaderComponent></HeaderComponent> An Error Occurred.</div>
}