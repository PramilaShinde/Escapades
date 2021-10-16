package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Event;
import com.demo.dto.ResponseDTO;
import com.demo.services.AdminService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdminEventController {
	
		@Autowired
		AdminService adminService;
		
		@GetMapping("/{eventname}")
		public ResponseEntity<?> fetchEvents(@PathVariable String eventname){
			//Event event = adminService.fetchEvents(eventname);
			System.out.println(eventname);
			return ResponseEntity.ok(new ResponseDTO<>(adminService.fetchEvents(eventname)));
		}
		
		@GetMapping
		public ResponseEntity<?> getEvents() {
			return ResponseEntity.ok(new ResponseDTO<>(adminService.getAllEvents()));
		}
		
		@PostMapping
		public ResponseEntity<?> addEvent(@RequestBody Event e) {
			return new ResponseEntity<>(new ResponseDTO<>(adminService.save(e)), HttpStatus.CREATED);
		}
		
		@PutMapping("/update/{eventname}")
		public ResponseEntity<?> updateUser(@PathVariable String eventname,  @RequestBody  Event e) {
			System.out.println(e);
			return ResponseEntity.ok(new ResponseDTO<>(adminService.update(e,eventname)));
		}
		
		@DeleteMapping("/delete/{eventid}")
		public ResponseEntity<?> deleteEvent(@PathVariable int eventid) {
			return ResponseEntity.ok(new ResponseDTO<>(adminService.deletebyId(eventid)));
		}
		

}
  


