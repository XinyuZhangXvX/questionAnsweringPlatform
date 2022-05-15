package com.restful.questionanswering.controller;
import com.restful.questionanswering.service.*;
import com.restful.questionanswering.Profiles;
import com.restful.questionanswering.*;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
@RestController
@CrossOrigin(origins="http://localhost:4200")
public class UserController {
	
	@Autowired
	private UserService userservice;
	
	@GetMapping("/users/authentication/{useremail}/{password}")
	public Boolean authentication(@PathVariable String useremail, @PathVariable String password) {
		return userservice.authentication(useremail,password);
	}
	
	@GetMapping("/users/{useremail}/profile")
	public Profiles getProfiles(@PathVariable String useremail) {
		return userservice.retrieveProfiles(useremail);
	}
	
	@GetMapping("/users/{useremail}/questions")
	public List<Question> getAllQuestions(@PathVariable String useremail) {
		return userservice.retrieveQuestions(useremail);
	}
	
	@GetMapping("/users/questions/{qid}")
	public Question getQuestion(@PathVariable int qid) {
		return userservice.getQuestion(qid);
	}
	
	@GetMapping("/users/{useremail}/answers")
	public List<Answer> getAllAnswers(@PathVariable String useremail) {
		return userservice.retrieveAnswers(useremail);
	}
	
	@GetMapping("/users/answers/{qid}")
	public List<Answer> getAnswerstoquestion(@PathVariable int qid) {
		return userservice.getAnswerstoquestion(qid);
	}
	
	@GetMapping("/users/{useremail}/status")
	public int getStatus(@PathVariable String useremail) {
		try {
			return userservice.getStatus(useremail);
		} catch (Exception e) {
			return -1;
		}
	}
	
	@GetMapping("/users/searchquestions/{keyword}")
	public List<Question> searchQuestions(@PathVariable String keyword) {
		return userservice.searchQuestions(keyword);
	}
 
	@PostMapping("/users/{useremail}/createquestion")
	public String createQuestion(@PathVariable String useremail, @RequestBody Question question) {
		question.setEmail(useremail);
		System.out.print("come in");
		return userservice.createQuestion(question);
	}
	
	@PostMapping("/users/{useremail}/createanswer")
	public String createAnswer(@PathVariable String useremail, @RequestBody Answer answer) {
		answer.setEmail(useremail);
		return userservice.createAnswer(answer);
	}
	
	@PostMapping("/users/register")
	public String register(@RequestBody Profiles profiles) {
		return userservice.register(profiles);
	}
	
	@PutMapping("/users/{useremail}/updateprofile")
	public String updateProfile(@PathVariable String useremail, @RequestBody Profiles profile){
		profile.setEmail(useremail);
		return userservice.updateProfile(profile);
	}
	
	@PutMapping("/users/{useremail}/Likes/{aid}")
	public String likes(@PathVariable String useremail, @PathVariable int aid){
		return userservice.likes(useremail, aid);
	}
	
	@PutMapping("/users/resolved/{qid}")
	public String resolved(@PathVariable int qid){
		return userservice.resolved(qid);
	}
	
	@PutMapping("/users/updatescore")
	public String updateSocre(){
		return userservice.updateSocre();
	}
}
