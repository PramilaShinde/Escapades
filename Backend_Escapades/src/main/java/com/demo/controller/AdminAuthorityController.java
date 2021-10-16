package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.demo.dto.ResponseDTO;
import com.demo.services.AdminAuthorService;


@RestController
@RequestMapping("/authority")
public class AdminAuthorityController {
	@Autowired
	AdminAuthorService adminauthorService;
	
	@GetMapping("/{cname}")
	public ResponseEntity<?> fetchCustomers(@PathVariable String cname){
		System.out.println(cname);
		return ResponseEntity.ok(new ResponseDTO<>(adminauthorService.fetchCustomers(cname)));
	}
	
	@GetMapping
	public ResponseEntity<?> getCustomers() {
		return ResponseEntity.ok(new ResponseDTO<>(adminauthorService.getAllCustomers()));
	}
	
	
	@DeleteMapping("/delete/{c_id}")
	public ResponseEntity<?> deleteCustomer(@PathVariable int c_id) {
		return ResponseEntity.ok(new ResponseDTO<>(adminauthorService.deletebyCustomerId(c_id)));
	}
	


}
