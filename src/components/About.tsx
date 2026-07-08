import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Senior Physical Design Engineer with 6 years of end-to-end RTL-to-GDSII experience across ultra-advanced FinFET and FD-SOI process nodes — 2nm (N2P), 3nm (N3P/N3A), 5nm, 7nm, GF22FDX, TSMC 12ffc, and GF 40nm. Proven track record of owning block-level and subsystem-level physical design closure for high-frequency, power-sensitive IPs delivered to Tier-1 customers including Google and ARM, with a documented achievement of 5GHz timing closure on glitch-detector critical paths. Expert in multi-corner multi-mode (MCMM) Static Timing Analysis (STA), power-grid integrity (static/dynamic IR drop), and Clock Tree Synthesis (CTS) optimization for low-skew, high-speed clock networks. Consistently accelerates tape-out schedules through Python/TCL-driven flow automation, reducing manual design-closure iterations and standardizing methodologies across large cross-functional teams.
        </p>
      </div>
    </div>
  );
};

export default About;
