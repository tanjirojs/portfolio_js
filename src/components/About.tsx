import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Senior Physical Design Engineer with 6 years of end-to-end RTL-to-GDSII experience across ultra-advanced FinFET and FD-SOI process nodes—ranging from 2nm (N2P), 3nm (N3P/N3A), 5nm, 7nm, to GF22FDX, TSMC 12ffc, and GF 40nm. Proven track record of owning block-level and subsystem-level physical design closure for high-frequency, power-sensitive IPs delivered to Tier-1 customers including Google and ARM, with a documented achievement of 5GHz timing closure on glitch-detector critical paths.
        </p>
      </div>
    </div>
  );
};

export default About;
