import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers } from 'react-icons/fa';
import './Events.css';

const Events = () => {
  const [eventsRef, eventsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const events = [
    {
      title: "College Application Workshop",
      date: "December 15, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "EngageHub Center",
      description: "Learn the ins and outs of college applications, essay writing, and interview preparation.",
      attendees: "25/30",
      category: "Workshop"
    },
    {
      title: "SAT Preparation Bootcamp",
      date: "December 20-22, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Online",
      description: "Intensive 3-day SAT preparation program with practice tests and strategy sessions.",
      attendees: "15/20",
      category: "Bootcamp"
    },
    {
      title: "Parent Information Session",
      date: "January 5, 2025",
      time: "6:00 PM - 7:30 PM",
      location: "EngageHub Center",
      description: "Information session for parents about our programs and how to support their children's education.",
      attendees: "40/50",
      category: "Information Session"
    },
    {
      title: "Study Skills Seminar",
      date: "January 12, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "EngageHub Center",
      description: "Learn effective study techniques, time management, and note-taking strategies.",
      attendees: "30/35",
      category: "Seminar"
    }
  ];

  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="events-hero section">
        <div className="container">
          <motion.div 
            className="events-hero-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="section-title">Upcoming Events</h1>
            <p className="section-subtitle">
              Join us for educational events, workshops, and seminars designed to enhance your learning journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="events-grid section" ref={eventsRef}>
        <div className="container">
          <div className="events-container">
            {events.map((event, index) => (
              <motion.div 
                key={index}
                className="event-card card"
                initial={{ opacity: 0, y: 30 }}
                animate={eventsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="event-header">
                  <span className="event-category">{event.category}</span>
                  <h3 className="event-title">{event.title}</h3>
                </div>
                
                <div className="event-details">
                  <div className="event-info">
                    <FaCalendarAlt />
                    <span>{event.date}</span>
                  </div>
                  <div className="event-info">
                    <FaClock />
                    <span>{event.time}</span>
                  </div>
                  <div className="event-info">
                    <FaMapMarkerAlt />
                    <span>{event.location}</span>
                  </div>
                  <div className="event-info">
                    <FaUsers />
                    <span>{event.attendees} registered</span>
                  </div>
                </div>
                
                <p className="event-description">{event.description}</p>
                
                <button className="btn btn-primary">Register Now</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter to receive updates about upcoming events and educational opportunities.</p>
            <a href="/newsletter" className="btn btn-primary">Subscribe</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events; 