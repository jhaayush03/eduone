import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaUsers, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import './Workshops.css';

const Workshops = () => {
  const [workshopsRef, workshopsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const workshops = [
    {
      title: "Study Skills Mastery",
      duration: "2 hours",
      location: "EngageHub Center",
      capacity: "15 students",
      description: "Learn effective study techniques, note-taking methods, and time management strategies.",
      topics: ["Note-taking strategies", "Memory techniques", "Time management", "Goal setting"]
    },
    {
      title: "College Essay Writing",
      duration: "3 hours",
      location: "EngageHub Center",
      capacity: "12 students",
      description: "Master the art of writing compelling college application essays that stand out.",
      topics: ["Essay structure", "Personal statement", "Common App", "Editing techniques"]
    },
    {
      title: "Math Problem Solving",
      duration: "2.5 hours",
      location: "Online",
      capacity: "20 students",
      description: "Develop critical thinking and problem-solving skills in mathematics.",
      topics: ["Algebra strategies", "Geometry concepts", "Calculus basics", "Test strategies"]
    },
    {
      title: "Public Speaking Confidence",
      duration: "2 hours",
      location: "EngageHub Center",
      capacity: "10 students",
      description: "Build confidence and improve public speaking skills for academic presentations.",
      topics: ["Speech preparation", "Body language", "Voice projection", "Audience engagement"]
    }
  ];

  return (
    <div className="workshops-page">
      <section className="workshops-hero section">
        <div className="container">
          <motion.div 
            className="workshops-hero-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="section-title">Educational Workshops</h1>
            <p className="section-subtitle">
              Interactive workshops designed to enhance specific skills and knowledge areas.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="workshops-grid section" ref={workshopsRef}>
        <div className="container">
          <div className="workshops-container">
            {workshops.map((workshop, index) => (
              <motion.div 
                key={index}
                className="workshop-card card"
                initial={{ opacity: 0, y: 30 }}
                animate={workshopsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="workshop-header">
                  <h3 className="workshop-title">{workshop.title}</h3>
                </div>
                
                <div className="workshop-details">
                  <div className="workshop-info">
                    <FaClock />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="workshop-info">
                    <FaMapMarkerAlt />
                    <span>{workshop.location}</span>
                  </div>
                  <div className="workshop-info">
                    <FaUsers />
                    <span>{workshop.capacity}</span>
                  </div>
                </div>
                
                <p className="workshop-description">{workshop.description}</p>
                
                <div className="workshop-topics">
                  <h4>Topics Covered:</h4>
                  <ul>
                    {workshop.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>{topic}</li>
                    ))}
                  </ul>
                </div>
                
                <button className="btn btn-primary">Register for Workshop</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshops; 