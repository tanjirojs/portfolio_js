import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in ECE</h4>
                <h5>JGEC (Autonomous)</h5>
              </div>
              <h3>2016-20</h3>
            </div>
            <p>
              Acquired solid foundations in VLSI design, CMOS digital circuits, signal processing, and hardware modeling.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Engineer (ASIC)</h4>
                <h5>OpenFive / AlphawaveSemi</h5>
              </div>
              <h3>2021-24</h3>
            </div>
            <p>
              Owned physical design & timing convergence for TSMC 12ffc / GF 40nm memory wrapper blocks and GF-22FDX hierarchical blocks, implementing custom H-trees and integrating eMRAM/PLL IPs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Engineer II (ASIC)</h4>
                <h5>AlphawaveSemi</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Served as subsystem-level owner for the company's first chiplet product. Managed leaf-level block floorplans, pin routing/placement, and solved complex LEC, DRC, and LVS issues.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior R&D Engineer</h4>
                <h5>Synopsys Inc.</h5>
              </div>
              <h3>PRESENT</h3>
            </div>
            <p>
              Leading full RTL-to-GDSII PNR flow and timing closure on critical 3nm (N3P) and 2nm (N2P) designs for Tier-1 customers. Drove glitch detector IP to 5GHz with zero constraint violations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
