import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaGraduationCap, 
  FaBook, 
  FaLaptop, 
  FaUsers,
  FaChartLine,
  FaGlobe,
  FaCalendarAlt,
  FaCertificate
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [servicesRef, servicesInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const services = [
    {
      icon: <FaGraduationCap />,
      title: "Academic Tutoring",
      description: "Personalized one-on-one and group tutoring sessions in all subjects from elementary to university level.",
      features: ["Subject-specific tutoring", "Homework help", "Test preparation", "Study skills development"]
    },
    {
      icon: <FaBook />,
      title: "Test Preparation",
      description: "Comprehensive preparation for standardized tests including SAT, ACT, IELTS, TOEFL, and more.",
      features: ["Practice tests", "Strategy sessions", "Score improvement tracking", "Mock exams"]
    },
    {
      icon: <FaLaptop />,
      title: "Online Learning",
      description: "Flexible online courses and virtual tutoring sessions accessible from anywhere in the world.",
      features: ["Virtual classrooms", "Interactive sessions", "Recorded lessons", "24/7 support"]
    },
    {
      icon: <FaUsers />,
      title: "Career Counseling",
      description: "Professional guidance to help students make informed decisions about their academic and career paths.",
      features: ["Career assessment", "University applications", "Resume building", "Interview preparation"]
    },
    {
      icon: <FaChartLine />,
      title: "Study Skills",
      description: "Develop essential study techniques and time management skills for academic success.",
      features: ["Note-taking methods", "Memory techniques", "Time management", "Goal setting"]
    },
    {
      icon: <FaGlobe />,
      title: "International Education",
      description: "Support for international students and those seeking education opportunities abroad.",
      features: ["Visa guidance", "Cultural orientation", "Language support", "University partnerships"]
    }
  ];

  const features = [
    {
      icon: <FaCertificate />,
      title: "Certified Tutors",
      description: "All our tutors are certified educators with extensive experience in their respective fields."
    },
    {
      icon: <FaCalendarAlt />,
      title: "Flexible Scheduling",
      description: "Sessions available at times that work for you, including evenings and weekends."
    },
    {
      icon: <FaUsers />,
      title: "Personalized Approach",
      description: "Customized learning plans tailored to each student's unique needs and learning style."
    },
    {
      icon: <FaChartLine />,
      title: "Progress Tracking",
      description: "Regular assessments and detailed progress reports to monitor student improvement."
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero section">
        <div className="container">
          <motion.div 
            className="services-hero-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="section-title">Our Services</h1>
            <p className="section-subtitle">
              Comprehensive educational services designed to support students at every stage of their academic journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid section" ref={servicesRef}>
        <div className="container">
          <div className="services-container">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card card"
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section" ref={featuresRef}>
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Why Choose Our Services</h2>
            <p className="section-subtitle">
              We provide exceptional educational support with proven results
            </p>
          </motion.div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card card"
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
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
            <h2>Ready to Get Started?</h2>
            <p>Contact us today to discuss your educational needs and find the perfect program for you.</p>
            <a href="/contact" className="btn btn-primary">Get Started</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 