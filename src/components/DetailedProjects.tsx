import "./styles/DetailedProjects.css";

const projectData = [
  {
    company: "Synopsys Inc.",
    date: "Sept 2024 – Present",
    role: "Senior R&D Physical Design Engineer",
    projects: [
      {
        title: "Glitch Detector IP",
        image: "/images/glitch_detector.png",
        points: [
          "Led full RTL-to-GDSII physical design and PNR signoff.",
          "Delivered 5 GHz timing closure on critical N3P designs with custom clock tree strategies, achieving zero setup/hold violations and a fully signoff-clean GDSII for ARM.",
          "Drove TNS to zero via targeted ECO optimizations while meeting power/area budgets, enabling on-time tape-out to Google.",
          "Enhanced power integrity and closure efficiency through optimized grid design and automation, reducing IR drop (<5%) and improving TAT by 30% across N3P programs.",
          "Currently working on the N2P tech node with major architectural changes in the same IP.",
          "Resolved LEC-related issues and complex LUP violations, achieving full DRC/LVS and PERC clean signoff."
        ]
      },
      {
        title: "SLM Subsystem Soft IP",
        image: "/images/slm_subsystem.png",
        points: [
          "Owned full ownership of PVTC SIP releases which involves TOP/SDA/wrapper level STA signoff for PVTC Soft IP.",
          "Authored and maintained SDC constraints, managed Design Compiler synthesis flows, and resolved complex customer JIRAs.",
          "Ensured clean netlist handoff to P&R with zero constraint regressions across five consecutive releases."
        ]
      },
      {
        title: "Process Detector IP",
        image: "/images/process_detector.png",
        points: [
          "Led full RTL-to-GDSII physical design and PNR signoff for high-speed SLM subsystems in the SF2A, N3A, and N5 nodes.",
          "Delivered fully optimized, DRC/LVS-clean implementations with zero waived violations directly to Google, achieving all contractual PPA targets.",
          "Resolved 100% of routing DRC violations in a congestion-critical SLM subsystem by implementing an advanced cell spreading and layer assignment strategy during detailed routing, achieving clean Calibre signoff.",
          "Built and deployed custom automation scripts for RO chain routing standardization, reducing per-block design closure time and enabling consistent power-grid implementation."
        ]
      }
    ]
  },
  {
    company: "AlphawaveSemi",
    date: "Jan 2024 – Sept 2024",
    role: "Engineer II ASIC Physical Design",
    projects: [
      {
        title: "Company's 1st Chiplet Implementation",
        image: "/images/chiplet_22fdx.png",
        points: [
          "Worked as Sub-System Level owner for the total RTL2GDS flow.",
          "Interacted with Leaf-level block owners on pin placement and dimensions calculations, guiding them on implementation.",
          "Fixed low-node placement congestion by using different floorplan methods and manual placement.",
          "Resolved leaf-level block pin routing congestion at the sub-system level.",
          "Worked closely with RTL and DFT teams for constraint development.",
          "Independently worked on LEC issues, DRC/LVS cleaning, LDL & PERC, and subsystem-level timing signoff."
        ]
      }
    ]
  },
  {
    company: "AlphawaveSemi",
    date: "Jan 2023 – Jan 2024",
    role: "Engineer I ASIC Physical Design",
    projects: [
      {
        title: "GF - 22FDX Hierarchical Block Implementation",
        isSvg: true,
        points: [
          "Worked on various techniques of logical and physical synthesis to get best results on timing and area optimization.",
          "Analysed check_timing reports for constraint cleanup and LEC debugging, providing feedback to customers on RTL datatypes.",
          "Proposed SDC changes based on analysis of complex clocking, Clock Domain Crossings (CDC), and Reset Domain Crossings (RDC).",
          "Developed hierarchical block-level SDC by integrating block-level SDC and aligning with Top-Level Chip Architecture.",
          "Helped on partitioning and pin placement of leaf-level blocks while floorplanning, implementing 3.8 Million standard cell instances at 500MHz.",
          "Worked on soft and hard IP implementations with automated custom powerplan for eMRAM, PLL, EFUSE, and PVT Sensor.",
          "Implemented custom clock tree with high drive strength buffers and flexible H-tree designs.",
          "Handled ECO and timing signoff, DRC/LVS cleaning, IR drop, and EM violations for final GDS release."
        ]
      }
    ]
  },
  {
    company: "OpenFive (later AlphawaveSemi)",
    date: "Jan 2021 – Dec 2022",
    role: "ASIC Physical Design Engineer",
    projects: [
      {
        title: "Memory Wrapper Block TSMC 12ffc",
        isSvg: true,
        svgType: "memory-wrapper",
        points: [
          "PnR and timing convergence of Memory Wrapper block in TSMC 12ffc (RTL to GDS implementation).",
          "Implemented memory dense blocks and memory placement in 4mm X 4mm blocks with an 800MHz clock.",
          "Built custom clock trees and resolved timing closure issues using crosstalk reduction fixes.",
          "Worked on physical verification (DRC/LVS) and static/dynamic IR analysis."
        ]
      },
      {
        title: "Memory Dense Block GF 40nm",
        isSvg: true,
        svgType: "memory-dense",
        points: [
          "PnR and timing convergence of Memory dense block in GF 40nm (RTL to GDS implementation).",
          "Implemented standard cell dense blocks and memory placement.",
          "Performed manual timing ECO fixes, IR analysis, and physical verification (DRC/LVS/Antenna)."
        ]
      }
    ]
  },
  {
    company: "Open-Silicon Research Pvt. Ltd (later AlphawaveSemi)",
    date: "Jul 2020 – Dec 2020",
    role: "Trainee Physical Design Engineer",
    projects: [
      {
        title: "VT Cell & PPA Optimization Analysis",
        isSvg: true,
        svgType: "vt-ppa",
        points: [
          "Analyzed company projects statistics with various projects data to generate a comparison for using better flavours of VT cell to get better PPA for different nodes: 12nm, 7nm, and 6nm.",
          "Responsible for synthesis and PnR of PPA implementation.",
          "Learned the process of running commands and implementing Synthesis, PnR, and Physical Verification from RTL-to-GDSII."
        ]
      }
    ]
  }
];

const renderSvgGraphic = (type: string | undefined) => {
  if (type === "memory-wrapper") {
    return (
      <svg viewBox="0 0 100 100" className="project-svg-graphic">
        <rect x="10" y="10" width="80" height="80" rx="6" fill="none" stroke="#5eead4" strokeWidth="2" strokeDasharray="4,4" />
        <rect x="25" y="25" width="20" height="20" rx="3" fill="rgba(94, 234, 212, 0.1)" stroke="#5eead4" strokeWidth="2" />
        <rect x="55" y="25" width="20" height="20" rx="3" fill="rgba(94, 234, 212, 0.1)" stroke="#5eead4" strokeWidth="2" />
        <rect x="25" y="55" width="20" height="20" rx="3" fill="rgba(94, 234, 212, 0.1)" stroke="#5eead4" strokeWidth="2" />
        <rect x="55" y="55" width="20" height="20" rx="3" fill="rgba(94, 234, 212, 0.1)" stroke="#5eead4" strokeWidth="2" />
        <path d="M 50,10 L 50,90 M 10,50 L 90,50" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="4" fill="#a383ff" />
      </svg>
    );
  }
  if (type === "memory-dense") {
    return (
      <svg viewBox="0 0 100 100" className="project-svg-graphic">
        <rect x="15" y="15" width="70" height="70" rx="4" fill="none" stroke="#a383ff" strokeWidth="2" />
        <line x1="15" y1="35" x2="85" y2="35" stroke="#a383ff" strokeWidth="1" strokeDasharray="2,2" />
        <line x1="15" y1="55" x2="85" y2="55" stroke="#a383ff" strokeWidth="1" strokeDasharray="2,2" />
        <line x1="35" y1="15" x2="35" y2="85" stroke="#a383ff" strokeWidth="1" strokeDasharray="2,2" />
        <line x1="60" y1="15" x2="60" y2="85" stroke="#a383ff" strokeWidth="1" strokeDasharray="2,2" />
        <rect x="20" y="20" width="10" height="10" fill="#5eead4" opacity="0.8" />
        <rect x="40" y="40" width="15" height="10" fill="#5eead4" opacity="0.8" />
        <rect x="65" y="20" width="15" height="30" fill="#a383ff" opacity="0.3" />
        <rect x="20" y="60" width="35" height="20" fill="#a383ff" opacity="0.3" />
      </svg>
    );
  }
  if (type === "vt-ppa") {
    return (
      <svg viewBox="0 0 100 100" className="project-svg-graphic">
        <line x1="15" y1="85" x2="85" y2="85" stroke="#ffffff" strokeWidth="2" />
        <line x1="15" y1="15" x2="15" y2="85" stroke="#ffffff" strokeWidth="2" />
        {/* curve 1: LVT */}
        <path d="M 15,35 Q 40,38 80,80" fill="none" stroke="#a383ff" strokeWidth="2" />
        {/* curve 2: RVT */}
        <path d="M 15,48 Q 45,52 80,82" fill="none" stroke="#5eead4" strokeWidth="2" />
        {/* curve 3: HVT */}
        <path d="M 15,62 Q 50,65 80,84" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3,3" strokeOpacity="0.6" />
        <text x="50" y="30" fill="#a383ff" fontSize="6" fontWeight="bold">LVT</text>
        <text x="60" y="48" fill="#5eead4" fontSize="6" fontWeight="bold">RVT</text>
        <text x="68" y="70" fill="rgba(255,255,255,0.6)" fontSize="6" fontWeight="bold">HVT</text>
      </svg>
    );
  }
  // Default general schematic graphic for GF-22FDX or others
  return (
    <svg viewBox="0 0 100 100" className="project-svg-graphic">
      <rect x="20" y="20" width="60" height="60" rx="4" fill="none" stroke="#5eead4" strokeWidth="2" />
      <circle cx="50" cy="50" r="15" fill="none" stroke="#a383ff" strokeWidth="2" />
      <line x1="20" y1="50" x2="35" y2="50" stroke="#5eead4" strokeWidth="2" />
      <line x1="65" y1="50" x2="80" y2="50" stroke="#5eead4" strokeWidth="2" />
      <line x1="50" y1="20" x2="50" y2="35" stroke="#5eead4" strokeWidth="2" />
      <line x1="50" y1="65" x2="50" y2="80" stroke="#5eead4" strokeWidth="2" />
      <circle cx="50" cy="50" r="4" fill="#5eead4" />
      <rect x="10" y="45" width="10" height="10" fill="rgba(94, 234, 212, 0.1)" stroke="#5eead4" strokeWidth="1" />
      <rect x="80" y="45" width="10" height="10" fill="rgba(94, 234, 212, 0.1)" stroke="#5eead4" strokeWidth="1" />
    </svg>
  );
};

const DetailedProjects = () => {
  return (
    <div className="detailed-projects-section section-container" id="detailed-projects">
      <div className="detailed-projects-container">
        <h2>
          Detailed <span>Projects</span>
          <br /> & Block Closures
        </h2>

        <div className="companies-timeline">
          {projectData.map((companyGroup, cIdx) => (
            <div className="company-group" key={cIdx}>
              {/* Company Header */}
              <div className="company-header-sticky">
                <div className="company-info-panel">
                  <h3>{companyGroup.company}</h3>
                  <h4>{companyGroup.role}</h4>
                  <span className="timeline-date">{companyGroup.date}</span>
                </div>
              </div>

              {/* Projects List */}
              <div className="company-projects-list">
                {companyGroup.projects.map((project, pIdx) => (
                  <div className="detailed-project-item" key={pIdx}>
                    <div className="project-text-content">
                      <h3>{project.title}</h3>
                      <ul className="project-bullet-points">
                        {project.points.map((pt, ptIdx) => (
                          <li key={ptIdx}>{pt}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-visual-frame" data-cursor="disable">
                      <div className="visual-container">
                        <div className="grid-overlay"></div>
                        {project.isSvg ? (
                          renderSvgGraphic(project.svgType)
                        ) : (
                          <img src={project.image} alt={project.title} className="project-visual-image" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedProjects;
