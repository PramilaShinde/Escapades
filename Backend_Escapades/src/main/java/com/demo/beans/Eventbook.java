package com.demo.beans;


import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.Cascade;



@Entity
public class Eventbook {
		@Id
		@GeneratedValue(generator="gen")  //(strategy=GenerationType.AUTO)
		private int bookid;
		@NotNull
		private String bookdate;
		@NotNull
		private int noofperson;
		
		
		@OneToOne(cascade = {CascadeType.ALL})
		@JoinColumn(name="customer_fk")
		private Customer customer;
		


		public Eventbook() {
			super();
		}

		

		public Eventbook(int bookid) {
			super();
			this.bookid = bookid;
		}



		public Eventbook(@NotNull String bookdate, @NotNull int noofperson, Customer customer) {
			super();
			this.bookdate = bookdate;
			this.noofperson = noofperson;
			this.customer = customer;
		}



		public int getBookid() {
			return bookid;
		}



		public void setBookid(int bookid) {
			this.bookid = bookid;
		}



		public String getBookdate() {
			return bookdate;
		}



		public void setBookdate(String bookdate) {
			this.bookdate = bookdate;
		}



		public int getNoofperson() {
			return noofperson;
		}



		public void setNoofperson(int noofperson) {
			this.noofperson = noofperson;
		}



		public Customer getCustomer() {
			return customer;
		}



		public void setCustomer(Customer customer) {
			this.customer = customer;
		}



		@Override
		public String toString() {
			return "Eventbook [bookid=" + bookid + ", bookdate=" + bookdate + ", noofperson=" + noofperson
					+ ", customer=" + customer + "]";
		}



		
		

}
