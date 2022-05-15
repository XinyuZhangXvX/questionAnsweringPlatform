import axios from "axios"

class UserService{

    authentication(email,password){
        return axios.get(`http://localhost:8080/users/authentication/${email}/${password}`)
    }
    retrieveUserProfile(email){
        return axios.get(`http://localhost:8080/users/${email}/profile`)
    }
    retrieveUserQuestions(email){
        return axios.get(`http://localhost:8080/users/${email}/questions`)
    }
    retrieveUserAnswers(email){
        return axios.get(`http://localhost:8080/users/${email}/answers`)
    }
    retrieveUserStatus(email){
        return axios.get(`http://localhost:8080/users/${email}/status`)
    }
    retrieveAnswerstoQuestion(qid){
        return axios.get(`http://localhost:8080/users/answers/${qid}`)
    }
    retrieveSearchResults(keyword){
        return axios.get(`http://localhost:8080/users/searchquestions/${keyword}`)
    }
    retrieveAQuestion(qid){
        return axios.get(`http://localhost:8080/users/questions/${qid}`)
    }
    createAQuestion(email,question){
        console.log('come in')
        return axios.post(`http://localhost:8080/users/${email}/createquestion`,question)
    }
    createAnAnswer(email,answer){
        return axios.post(`http://localhost:8080/users/${email}/createanswer`,answer)
    }
    updateProfile(email,profile){
        return axios.put(`http://localhost:8080/users/${email}/updateprofile`,profile)
    }
    likeAnswer(email,aid) {
        return axios.put(`http://localhost:8080/users/${email}/Likes/${aid}`)
    }
    updateScore(){
        return axios.put(`http://localhost:8080/users/updatescore`)
    }
    register(profiles){
        return axios.post(`http://localhost:8080/users/register`,profiles)
    }
    resolved(qid){
        return axios.put(`http://localhost:8080/users/resolved/${qid}`)
    }

}

export default new UserService()