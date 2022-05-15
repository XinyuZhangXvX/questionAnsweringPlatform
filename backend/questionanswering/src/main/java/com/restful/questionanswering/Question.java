package com.restful.questionanswering;

import java.sql.Date;

public class Question {
	private int qid;
	private String qtitle;
	private String qbody;
	private int stid;
	private Date qposttime;
	private String email;
	private int isresolved;
	
	public Question() {
		
	}
	public Question(int qid, String qtitle, String qbody, int stid, Date qposttime, String email, int isresolved) {
		super();
		this.qid = qid;
		this.qtitle = qtitle;
		this.qbody = qbody;
		this.stid = stid;
		this.qposttime = qposttime;
		this.email = email;
		this.isresolved = isresolved;
	}
	public int getQid() {
		return qid;
	}
	public void setQid(int qid) {
		this.qid = qid;
	}
	public String getQtitle() {
		return qtitle;
	}
	public void setQtitle(String qtitle) {
		this.qtitle = qtitle;
	}
	public String getQbody() {
		return qbody;
	}
	public void setQbody(String qbody) {
		this.qbody = qbody;
	}
	public int getStid() {
		return stid;
	}
	public void setStid(int stid) {
		this.stid = stid;
	}
	public Date getQposttime() {
		return qposttime;
	}
	public void setQposttime(Date qposttime) {
		this.qposttime = qposttime;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getIsresolved() {
		return isresolved;
	}
	public void setIsresolved(int isresolved) {
		this.isresolved = isresolved;
	}
	
	
	
	
	
}
