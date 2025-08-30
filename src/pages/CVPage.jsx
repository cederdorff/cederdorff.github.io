import { Link } from "react-router";

export default function CVPage() {
  return (
    <section className="links">
      <figure>
        <img src="../img/race_2024.webp" alt="Rasmus Cederdorff" />
      </figure>
    <nav style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "1rem" }}>
            justifyContent: "center",
            marginTop: "1rem"
          }}>
          <Link to="/">Forside</Link>
          <Link to="/links">Links</Link>
        <article style={{ maxWidth: "700px", margin: "2rem auto", padding: "2rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
          <h2>CV</h2>
          <section style={{ marginBottom: "2rem" }}>
            <h3>Profil</h3>
            <p>Experienced JavaScript Developer with an eye for UX and UI Design. Demonstrated history of working in the software industry as a Freelance Web App Developer.</p>
            <p>Currently working as Senior Lecturer at EAAA – Business Academy Aarhus, teaching Web Development, JavaScript, React, BaaS & Node.js.</p>
          </section>
          <section style={{ marginBottom: "2rem" }}>
            <h3>Kompetencer</h3>
            <ul>
              <li>JavaScript, React, React Native, Remix/React Router v7+, TypeScript</li>
              <li>Ionic React, Capacitor.js, Single Page Applications</li>
              <li>Node.js, Express.js, Headless CMS, Firebase, REST API, JSON</li>
              <li>WordPress, WooCommerce, Shopify</li>
              <li>MySQL, MongoDB</li>
              <li>UX & UI Design, Design Thinking</li>
            </ul>
          </section>
          <section style={{ marginBottom: "2rem" }}>
            <h3>Erfaring</h3>
            <ul>
              <li><strong>Senior Lecturer</strong>, EAAA – Business Academy Aarhus (Oct 2023 - Present)<br />Teaching JavaScript, Frontend and Web Development, including React, Remix, REST, Firebase and BaaS, Node.js, Express, MySQL and MongoDB.</li>
              <li><strong>Senior Lecturer</strong>, EAAA – Business Academy Aarhus (Aug 2024 - Oct 2024)<br />Leave of absence - Contestant on the danish TV show "Nybyggerne 2025".</li>
              <li><strong>Senior Lecturer</strong>, EAAA – Business Academy Aarhus (Oct 2022 - Sep 2023)<br />Leave of absence.</li>
              <li><strong>Senior Lecturer</strong>, EAAA – Business Academy Aarhus (Dec 2021 - Oct 2022)<br />Teaching in Frontend Development, Web App Development, JavaScript, React, Single Page Applications, Mobile App Development, Ionic React, Firebase, UI, UX & Design Thinking.</li>
              <li><strong>Lecturer</strong>, EAAA – Business Academy Aarhus (Sep 2018 - Dec 2021)<br />Teaching in Frontend Development, Web App Development, JavaScript, Single Page Applications, UI, UX & Design Thinking.</li>
              <li><strong>Web App Developer</strong>, Cederdorff (Jul 2010 - Present)<br />Freelance web app development, shop solutions, and consulting.</li>
              <li><strong>Web Developer</strong>, House of Vincent (Mar 2018 - Present)<br />Freelance web development for House of Vincent.</li>
              <li><strong>External Examiner</strong>, Various Danish Academies (2023-2025)<br />External examiner in programming, software architecture, web development, user experience, cloud, and more.</li>
              <li><strong>Freelance App Developer</strong>, theBIGfridge APP (Aug 2017 - Oct 2022)</li>
              <li><strong>Freelance Web & App Developer</strong>, BouMatic (2014 - Oct 2022)</li>
              <li><strong>Freelance Web & App Developer</strong>, CPH Cloud Company (Jun 2017 - Jun 2019)</li>
              <li><strong>Web Developer</strong>, Café Sidewalk (2019)</li>
              <li><strong>Software Developer</strong>, Getinge Cetrea A/S (Sep 2015 - Oct 2015)</li>
              <li><strong>Co-Founder & Developer</strong>, One Arm Away I/S (Aug 2014 - Mar 2015)</li>
              <li><strong>App Developer</strong>, Visiolink (Jan 2013 - Dec 2013)</li>
            </ul>
          </section>
          <section style={{ marginBottom: "2rem" }}>
            <h3>Uddannelse</h3>
            <ul>
              <li><strong>Master of Science (MSc) in Information Technology</strong>, Syddansk Universitet (2015 - 2018)<br />Specialisation in Web Architecture and Mobile App Development Methods</li>
              <li><strong>Professional Bachelor's Degree in Web Development</strong>, Erhvervsakademi Aarhus (2013 - 2015)<br />Frontend Development, Backend Development, Frameworks, Mobile Development, Interface Design</li>
              <li><strong>Academy Profession Degree in Computer Science</strong>, Erhvervsakademi Aarhus (2011 - 2013)<br />Computer Programming</li>
              <li><strong>STX, Samfundsfag A, Engelsk A & Matematik B</strong>, Holstebro Gymnasium & HF (2007 - 2010)</li>
            </ul>
          </section>
        </article>
          maxWidth: "700px",
          margin: "2rem auto",
          padding: "2rem",
          background: "#fff",
          borderRadius: "1rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
        }}>
        <h2>CV</h2>
        {/* Her kan du indsætte dit CV-indhold, fx uddannelse, erfaring, kompetencer osv. */}
        <p>Her kommer dit CV-indhold...</p>
      </article>
    </section>
  );
}
