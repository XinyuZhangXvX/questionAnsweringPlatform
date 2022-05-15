package com.restful.questionanswering;

public class Profiles {
	private String email;
	private String username;
	private String status;
	private String score;
	private String city;
	private String state;
	private String country;
	private String profile;
	private String password;
	public Profiles(String email, String username, String status, String score, String city, String state,
			String country, String profile, String password) {
		super();
		this.email = email;
		this.username = username;
		this.status = status;
		this.score = score;
		this.city = city;
		this.state = state;
		this.country = country;
		this.profile = profile;
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getScore() {
		return score;
	}
	public void setScore(String score) {
		this.score = score;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getProfile() {
		return profile;
	}
	public void setProfile(String profile) {
		this.profile = profile;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	

}
