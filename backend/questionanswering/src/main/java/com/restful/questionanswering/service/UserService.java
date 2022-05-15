package com.restful.questionanswering.service;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.restful.questionanswering.Answer;
import com.restful.questionanswering.Profiles;
import com.restful.questionanswering.Question;
import com.restful.questionanswering.dao.UserDao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


@Service
public class UserService {
	@Autowired
	UserDao userDao;
	
	public Boolean authentication(String useremail,String password) {
		try {
			String realpassword = userDao.retrievePassword(useremail);
			System.out.print(realpassword);
			System.out.print(password);
			if (password.equals(realpassword)) {
				return true;
			}
			else {
				return false;
			}
		}
		catch (Exception e) {
			return false;
		}
	}
	
	public Profiles retrieveProfiles(String useremail) {
		return userDao.retrieveProfile(useremail);
	}
	
	public String register(Profiles profiles) {
		try {
			userDao.register(profiles);
			return "Register succeeded.";
		}catch (Exception e) {
			System.out.print(e);
			return "Register failed.";
		}
	
	}

	
	public List<Question> retrieveQuestions(String useremail){
		return userDao.retrieveQuestions(useremail);
	}
	
	public Question getQuestion(int qid) {
		return userDao.getQuestion(qid);
	}
	
	public List<Answer> retrieveAnswers(String useremail){
		return userDao.retrieveAnswers(useremail);
	}
	
	public List<Answer> getAnswerstoquestion(int qid){
		return userDao.getAnswerstoquestion(qid);
	}
	
	public int getStatus(String useremail) {
		return userDao.getStatus(useremail);
	}
	
	public List<Question> searchQuestions(String keyword){
		keyword = "%" + keyword + "%";
		return userDao.searchQuestions(keyword);
	}
	
	public String updateProfile(Profiles profile) {
		try {
			userDao.updateProfile(profile);
			return "Update succeeded.";
		}catch (Exception e) {
			System.out.print(e);
			return "Update failed.";
		}
	}
	
	public String createQuestion(Question question) {
		try {
			userDao.createQuestion(question);
			return "Insert succeeded.";
		}catch (Exception e) {
			System.out.print(e);
			return "Insert failed.";
		}
	}
	
	public String createAnswer(Answer answer) {
		try {
			userDao.createAnswer(answer);
			return "Insert succeeded.";
		}catch (Exception e) {
			System.out.print(e);
			return "Insert failed.";
		}
	}
	
	public String likes(String useremail, int aid) {
		try {
			userDao.likes1(useremail, aid);
			userDao.likes2(aid);
			return "Insert succeeded.";
		}catch (Exception e) {
			System.out.print(e);
			return "Insert failed.";
		}
	}
	
	public String updateSocre() {
		try {
			userDao.updateSocre();
			userDao.updateStatus();
			return "Update Score Succeeded.";
		}catch (Exception e) {
			System.out.print(e);
			return "Update Score Failed.";
		}
	}
	
	public String resolved(int qid) {
		try {
			userDao.resolved(qid);
			return "Update resolved Succeeded.";
		}catch (Exception e) {
			return "Update resolved Failed.";
		}
	}
}





