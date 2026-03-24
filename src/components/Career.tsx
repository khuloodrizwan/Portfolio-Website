import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.B.C.A. Student</h4>
                <h5>Arihant College of Arts, Commerce and Science</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Pursuing Bachelor of Business Communication &amp; Computer
              Application with a CGPA of 9.17/10.0. Building a strong
              foundation in computer science, web technologies, and business
              communication.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Full Stack Developer Intern</h4>
                <h5>Softtrine Solutions Pvt. Ltd.</h5>
              </div>
              <h3>Jun – Dec 2025</h3>
            </div>
            <p>
              Built and maintained full-stack web applications using Node.js,
              Express, MySQL, and GitHub in a production environment. Developed
              and optimized 5+ REST APIs, implemented database schema design,
              and collaborated in an agile team to deliver features on schedule.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Freelance / Personal Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing full-stack applications with AI integration using Groq
              AI (Llama 3.3 70B) and OpenAI APIs. Building intelligent,
              user-centric web apps featuring real-time dashboards, JWT
              authentication, and payment gateway integration via Razorpay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
