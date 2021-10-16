package com.demo.services;

import java.util.List;

import com.demo.beans.Event;

public interface AdminService {
	Event fetchEvents(String eventname);

	List<Event> getAllEvents();

	Event save(Event e);

	Event update(Event e, String eventname);

	String deletebyId(int eventid);

}
