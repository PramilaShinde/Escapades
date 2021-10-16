package com.demo.beans;


import javax.persistence.CascadeType;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;


@Entity
public class Payment {
	@Id
	@GeneratedValue(generator="gen1")
	private int pid;
	@NotNull
	private String name;
	@NotNull
	private String paydate;
	
	
	@OneToOne(cascade = {CascadeType.ALL})
	@JoinColumn(name="eventbook_fk")
	private Eventbook eventbook;
	
	
	
	public Payment() {
		super();
	}

	

	public Payment(int pid) {
		super();
		this.pid = pid;
	}



	public Payment(@NotNull String name, @NotNull String paydate, Eventbook eventbook) {
		super();
		this.name = name;
		this.paydate = paydate;
		this.eventbook = eventbook;
	}



	public int getPid() {
		return pid;
	}



	public void setPid(int pid) {
		this.pid = pid;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getPaydate() {
		return paydate;
	}



	public void setPaydate(String paydate) {
		this.paydate = paydate;
	}



	public Eventbook  getEventbook () {
		return eventbook;
	}



	public void setEventbook (Eventbook  eventbook ) {
		this.eventbook = eventbook;
	}



	@Override
	public String toString() {
		return "Payment [pid=" + pid + ", name=" + name + ", paydate=" + paydate + ", eventbook=" + eventbook + "]";
	}



	

	

}