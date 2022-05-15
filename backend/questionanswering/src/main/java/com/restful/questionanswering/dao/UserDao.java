package com.restful.questionanswering.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.context.annotation.Profile;

import com.restful.questionanswering.Answer;
import com.restful.questionanswering.Profiles;
import com.restful.questionanswering.Question;

@Mapper
public interface UserDao {
	Profiles retrieveProfile(String useremail);
	List<Question> retrieveQuestions(String useremail);
	List<Answer> retrieveAnswers(String useremail);
	List<Answer> getAnswerstoquestion(int qid);
	int getStatus(String useremail);
	List<Question> searchQuestions(String keyword);
	void updateProfile(Profiles profile);
	void createQuestion(Question question);
	void createAnswer(Answer answer);
	void register(Profiles profile);
	void likes1(String useremail, int aid);
	void likes2(int aid);
	void updateSocre();
	void updateStatus();
	Question getQuestion(int qid);
	String retrievePassword(String useremail);
	void resolved(int qid);
}

