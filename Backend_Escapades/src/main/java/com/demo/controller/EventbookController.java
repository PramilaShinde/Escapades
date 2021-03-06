package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Customer;
import com.demo.beans.Eventbook;
import com.demo.dto.ResponseDTO;
import com.demo.services.EventbookService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/eventbook")
public class EventbookController {

	@Autowired
	EventbookService es;
	
	@PostMapping
	public ResponseEntity<?> addevent(@RequestBody Eventbook e) 
	{
		return new ResponseEntity<>(new ResponseDTO<>(es.save(e)), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/user/delete/{bookid}")
	public  ResponseEntity<?> deleteEvent(@PathVariable int bookid)
	{
		return new ResponseEntity<>(new ResponseDTO<>(es.delete(bookid)), HttpStatus.CREATED);
	}
	
	
}
