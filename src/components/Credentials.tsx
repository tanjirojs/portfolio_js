import "./styles/Credentials.css";
import { TbCertificate, TbBook, TbLayersUnion } from "react-icons/tb";

const certifications = [
  {
    title: "Physical Design Flow",
    issuer: "ASIC & VLSI Signoff Training",
    desc: "Comprehensive training on RTL-to-GDSII flow, floorplanning, placement, clock tree synthesis (CTS), routing, and physical verification (DRC/LVS).",
  },
  {
    title: "CMOS Digital VLSI Design",
    issuer: "VLSI Architecture & Circuits",
    desc: "Deep dive into CMOS logic gates, standard cell layout design, delay modeling, power optimization, and latch/flip-flop design characteristics.",
  },
  {
    title: "Hardware Modelling with Verilog & Python",
    issuer: "Digital Systems Design",
    desc: "RTL modeling of digital architectures using advanced Verilog HDL and Python script-based hardware verification/generation tools.",
  },
  {
    title: "VT on Railway Communication System",
    issuer: "Industrial Signalling & Telecom",
    desc: "Technical training on modern railway communication systems, signal routing, signalling protocols, and safety-critical hardware reliability.",
  },
];

const publications = [
  {
    title: "A Comparative Study of Support Vector Machine and Naive Bayes Classifier for Sentiment Analysis on Amazon Product Reviews",
    authors: "Jayjeet Sarkar (Co-Author)",
    tech: "Python, Amazon Database, SVM, Naive Bayes",
    desc: "Researched and implemented comparative machine learning models to analyze consumer sentiment on large-scale e-commerce datasets, optimizing feature extraction and classification accuracy.",
  },
];

const Credentials = () => {
  return (
    <div className="credentials-section section-container" id="credentials">
      <div className="credentials-container">
        <h2>
          Credentials <span>&</span>
          <br /> Research
        </h2>

        <div className="credentials-grid">
          {/* Certifications Column */}
          <div className="credentials-column">
            <h3 className="column-title">
              <TbCertificate className="icon-main" /> Certifications
            </h3>
            <div className="cards-list">
              {certifications.map((cert, index) => (
                <div className="credential-card" key={index} data-cursor="disable">
                  <div className="card-header">
                    <TbLayersUnion className="card-icon" />
                    <div>
                      <h4>{cert.title}</h4>
                      <h5>{cert.issuer}</h5>
                    </div>
                  </div>
                  <div className="details-popup">
                    <p>{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publications Column */}
          <div className="credentials-column">
            <h3 className="column-title">
              <TbBook className="icon-main" /> Publications
            </h3>
            <div className="cards-list">
              {publications.map((pub, index) => (
                <div className="credential-card publication-card" key={index} data-cursor="disable">
                  <div className="card-header">
                    <TbLayersUnion className="card-icon" />
                    <div>
                      <h4>{pub.title}</h4>
                      <h5>{pub.authors}</h5>
                      <span className="tech-badge">{pub.tech}</span>
                    </div>
                  </div>
                  <div className="details-popup">
                    <p>{pub.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
