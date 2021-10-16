package com.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.demo.beans.Event;
import com.demo.dao.AdminDao;
import com.demo.exception.CategoryNotFoundException;
import com.demo.exception.EventExistsExcpetion;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	AdminDao adminDao;
	
	@Override
	public Event fetchEvents(String eventname) {
		Event e = adminDao.findByEventname(eventname);
				if(e==null)
				{
					throw new CategoryNotFoundException("Event Not Found...");
				}
				return e;
	}

	@Override
	public List<Event> getAllEvents() {
		List<Event> elist= adminDao.findAll();
		elist.forEach((e) ->e.getEventname());
		for(Event e: elist)
		{
		System.out.print(e);
		}
		return elist;
	}

	@Override
	public Event save(Event e) {
		Optional<Event> ev = adminDao.findByEvent(e.getEventname());
		if(ev.isPresent()) {
			throw new EventExistsExcpetion("Event Already Exists Excpetion");
		}
		return adminDao.save(e);
	}

	@Override
	public Event update(Event e, String eventname) {
		Event event = adminDao.findByEvent(eventname)
				.orElseThrow(() -> new CategoryNotFoundException("Event Not Found..."));
		if(eventname!=null) {
			event.setEventid(e.getEventid());
			event.setEventname(e.getEventname());
			event.setEventdate(e.getEventdate());
			event.setAvailabilty(e.getAvailabilty());
			event.setPrice(e.getPrice());
		}
		return adminDao.save(event);
	
	}

	@Override
	public String deletebyId(int eventid) {
		Event e = adminDao.findById(eventid)
		.orElseThrow(() -> new CategoryNotFoundException("Event Not Found..."));
		adminDao.delete(e);
		return "Event Id "+eventid+" deleted";
	}
}
