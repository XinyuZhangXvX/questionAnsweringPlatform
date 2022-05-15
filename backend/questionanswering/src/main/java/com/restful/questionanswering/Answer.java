package com.restful.questionanswering;
import java.sql.Date;

public class Answer {
	private int aid;
	private String abody;
	private Date aposttime;
	private int qid;
	private int numlikes;
	private String email;
	private String qtitle;
	public Answer() {
		
	}
	public Answer(int aid, String abody, Date aposttime, int qid, int numlikes, String email, String qtitle) {
		super();
		this.aid = aid;
		this.abody = abody;
		this.aposttime = aposttime;
		this.qid = qid;
		this.numlikes = numlikes;
		this.email = email;
		this.qtitle = qtitle;
	}
	public int getAid() {
		return aid;
	}
	public void setAid(int aid) {
		this.aid = aid;
	}
	public String getAbody() {
		return abody;
	}
	public void setAbody(String abody) {
		this.abody = abody;
	}
	public Date getAposttime() {
		return aposttime;
	}
	public void setAposttime(Date aposttime) {
		this.aposttime = aposttime;
	}
	public int getQid() {
		return qid;
	}
	public void setQid(int qid) {
		this.qid = qid;
	}
	public int getNumlikes() {
		return numlikes;
	}
	public void setNumlikes(int numlikes) {
		this.numlikes = numlikes;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getQtitle() {
		return qtitle;
	}
	public void setQtitle(String qtitle) {
		this.qtitle = qtitle;
	}
	
	
	
}
