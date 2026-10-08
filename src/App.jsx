import { useState } from 'react'
import './App.css'
import recruitingPipelinePreview from './assets/Screenshot 2026-10-08 140207.png'
import profilePhoto from './assets/LouisRafael.jpg'
import {
  navItems,
  services,
  toolGroups,
  processSteps,
  reasons,
  projects,
  contactDetails,
} from './data/siteContent'

function ProjectArtwork({ project, projectPreview, onPreviewUpload }) {
  if (project.id === 'supplier-catalog') {
    return (
      <div className="project-artwork catalog-artwork" aria-label="Product catalog workflow preview">
        <div className="artwork-window-bar"><span></span><span></span><span></span><b>CATALOG QA / SUPPLIER IMPORT</b></div>
        <div className="catalog-toolbar"><strong>Product review</strong><span>Batch 04 <i>Ready for QA</i></span></div>
        <div className="catalog-metrics">
          <div><small>PRODUCTS</small><strong>3,808</strong><span>extracted</span></div>
          <div><small>VARIANTS</small><strong>6,315</strong><span>identified</span></div>
          <div><small>IMAGES</small><strong>6,793</strong><span>processed</span></div>
        </div>
        <div className="catalog-table">
          <div className="table-head"><span>PRODUCT</span><span>VARIANTS</span><span>IMAGES</span><span>REVIEW</span></div>
          <div><span><i className="product-swatch swatch-one"></i>Ribbed knit top</span><span>6</span><span>4</span><em>Verified</em></div>
          <div><span><i className="product-swatch swatch-two"></i>Everyday tote</span><span>3</span><span>7</span><em>Verified</em></div>
          <div><span><i className="product-swatch swatch-three"></i>Relaxed linen shirt</span><span>8</span><span>5</span><em className="review-flag">Review</em></div>
        </div>
        <div className="catalog-footer"><span>QA checks complete</span><strong>3,786 proposed for import <b>↗</b></strong></div>
      </div>
    )
  }

  if (project.id === 'influencer-outreach') {
    return (
      <div className="project-artwork outreach-artwork" aria-label="Lead qualification workflow preview">
        <div className="artwork-window-bar"><span></span><span></span><span></span><b>CREATOR PIPELINE / AUTOMATION</b></div>
        <div className="flow-canvas">
          <div className="flow-node"><small>01 / SOURCE</small><strong>Creator<br />research</strong><span>Profile data</span></div>
          <b className="flow-arrow">→</b>
          <div className="flow-node flow-node-blue"><small>02 / VALIDATE</small><strong>Check &amp;<br />qualify</strong><span>Rules + duplicates</span></div>
          <b className="flow-arrow">→</b>
          <div className="flow-node flow-node-teal"><small>03 / ROUTE</small><strong>Outreach<br />ready</strong><span>Google Sheets</span></div>
        </div>
        <div className="flow-caption"><span className="flow-live"></span> Make.com + Sheets <span>Structured lead handoff</span></div>
      </div>
    )
  }

  if (project.id === 'recruiting-pipeline') {
    const previewContent = projectPreview ? (
      <img src={projectPreview} alt="Recruiting pipeline preview" className="project-custom-preview" />
    ) : (
      <div className="project-preview-placeholder">
        <span className="placeholder-label">Preview placeholder</span>
        <strong>Recruiting pipeline preview</strong>
        <p>Add your actual pipeline screenshot or mockup here.</p>
        <label className="placeholder-upload" htmlFor={`preview-upload-${project.id}`}>
          <input
            id={`preview-upload-${project.id}`}
            type="file"
            accept="image/*"
            onChange={onPreviewUpload}
          />
          Upload preview
        </label>
      </div>
    )

    return (
      <div className="project-artwork recruiting-artwork" aria-label="Recruiting lead pipeline preview">
        {previewContent}
      </div>
    )
  }

  return (
    <div className="project-artwork shopify-artwork" aria-label="Shopify catalog concept preview">
      <div className="artwork-window-bar"><span></span><span></span><span></span><b>STORE OPERATIONS / CATALOG</b></div>
      <div className="store-preview"><div className="store-sidebar"><b>STUDIO / GOODS</b><span>New arrivals</span><span>Clothing</span><span>Accessories</span><span>Inventory</span></div><div className="store-products"><small>SPRING COLLECTION / 24 ITEMS</small><div className="store-product-grid"><div><i className="garment garment-one"></i><strong>Linen overshirt</strong><span>12 variants · In stock</span></div><div><i className="garment garment-two"></i><strong>Everyday tote</strong><span>3 variants · In stock</span></div><div><i className="garment garment-three"></i><strong>Ribbed knit</strong><span>6 variants · Check QA</span></div></div></div></div>
    </div>
  )
}

function renderEvidenceVisual(item, expanded = false) {
  const tableRows = [
    ['Product A', 'product-a', '6', '4', 'Ready'],
    ['Product B', 'product-b', '3', '7', 'Ready'],
    ['Product C', 'product-c', '8', '5', 'Review'],
  ]

  if (item.id === 'extraction') {
    return (
      <div className={`evidence-visual evidence-table ${expanded ? 'expanded' : ''}`}>
        <div className="evidence-table-head"><span>Product</span><span>Handle</span><span>Variants</span><span>Images</span><span>Status</span></div>
        {tableRows.map((row, index) => (
          <div key={`${row[0]}-${index}`} className="evidence-table-row">
            <span>{row[0]}</span>
            <span>{row[1]}</span>
            <span>{row[2]}</span>
            <span>{row[3]}</span>
            <span className={row[4] === 'Review' ? 'warning' : 'success'}>{row[4]}</span>
          </div>
        ))}
        <div className="evidence-mini-metrics">
          {item.metrics.map((metric) => (
            <span key={metric}>{metric}</span>
          ))}
        </div>
      </div>
    )
  }

  if (item.id === 'qa') {
    return (
      <div className={`evidence-visual evidence-qa ${expanded ? 'expanded' : ''}`}>
        <div className="qa-header"><span>QA / VALIDATION</span><strong>3,808 rows reviewed</strong></div>
        <div className="qa-checks">
          <span>Product ID validation</span>
          <span>Handle validation</span>
          <span>Variant validation</span>
          <span>Image validation</span>
          <span>Duplicate checks</span>
          <span>Import readiness</span>
        </div>
        <div className="duplicate-grid">
          <div><small>Product IDs</small><strong>0 duplicates</strong></div>
          <div><small>Handles</small><strong>0 duplicates</strong></div>
          <div><small>Variant IDs</small><strong>0 duplicates</strong></div>
          <div><small>Image IDs</small><strong>0 duplicates</strong></div>
        </div>
      </div>
    )
  }

  if (item.id === 'exceptions') {
    return (
      <div className={`evidence-visual evidence-exception ${expanded ? 'expanded' : ''}`}>
        <div className="exception-table">
          <div className="exception-table-head"><span>Product</span><span>Issue</span><span>Action</span><span>Status</span></div>
          <div><span>Product A</span><span>Variant mismatch</span><span>Reviewed</span><span className="success">Resolved</span></div>
          <div><span>Product B</span><span>Image issue</span><span>Verified</span><span className="success">Resolved</span></div>
          <div><span>Product C</span><span>Missing data</span><span>Held</span><span className="warning">Review</span></div>
        </div>
        <div className="exception-flow">
          <div><strong>216</strong><small>INITIAL EXCEPTIONS</small></div>
          <span>↓</span>
          <div><strong>REVIEW &amp; VALIDATION</strong></div>
          <span>↓</span>
          <div><strong>19</strong><small>HELD FOR MANUAL REVIEW</small></div>
        </div>
      </div>
    )
  }

  if (item.id === 'import') {
    return (
      <div className={`evidence-visual evidence-import ${expanded ? 'expanded' : ''}`}>
        <div className="import-table">
          <div className="import-table-head"><span>Product</span><span>Variants</span><span>Images</span><span>Import Status</span></div>
          <div><span>Product A</span><span>6</span><span>4</span><span className="success">Ready</span></div>
          <div><span>Product B</span><span>3</span><span>7</span><span className="success">Ready</span></div>
          <div><span>Product C</span><span>8</span><span>5</span><span className="success">Ready</span></div>
        </div>
        <div className="import-result"><strong>3,786</strong><span>PRODUCTS PROPOSED FOR IMPORT</span></div>
      </div>
    )
  }

  return (
    <div className={`evidence-visual evidence-workflow ${expanded ? 'expanded' : ''}`}>
      <div className="workflow-stages">
        <span>SUPPLIER CATALOG</span>
        <span>↓</span>
        <span>EXTRACTION</span>
        <span>↓</span>
        <span>STRUCTURED PRODUCT DATA</span>
        <span>↓</span>
        <span>QA &amp; VALIDATION</span>
        <span>↓</span>
        <span>EXCEPTION REVIEW</span>
        <span>↓</span>
        <span>IMPORT PREPARATION</span>
      </div>
      <div className="workflow-summary">
        <div><strong>3,808</strong><small>products</small></div>
        <div><strong>6,315</strong><small>variants</small></div>
        <div><strong>6,793</strong><small>images</small></div>
      </div>
      <div className="final-import-tag">3,786 PRODUCTS PROPOSED FOR IMPORT</div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [selectedEvidence, setSelectedEvidence] = useState(null)
  const [projectPreviews, setProjectPreviews] = useState({
    'recruiting-pipeline': recruitingPipelinePreview,
  })

  const handleProjectPreviewUpload = (projectId) => (event) => {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    const reader = new FileReader()

    reader.onload = () => {
      setProjectPreviews((current) => ({
        ...current,
        [projectId]: reader.result,
      }))
    }

    reader.readAsDataURL(file)
    event.target.value = ''
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container nav-inner">
          <a href="#home" className="brand" aria-label="Louis Rafael home">
            <span className="brand-mark">LR</span>
            <span>
              <strong>Louis Rafael</strong>
              <small>Automation VA</small>
            </span>
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="primary-button nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
              Let&apos;s Work Together
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section section">
          <div className="container hero-editorial">
            <div className="hero-topline reveal"><span>Independent automation &amp; operations</span><span><i></i> Available for select projects</span></div>
            <div className="hero-title-row reveal">
              <h1>Make the busywork<br /><em>work better.</em></h1>
              <div className="hero-intro"><p>I&apos;m Louis Rafael, an operations specialist who brings structure to product data, e-commerce workflows, and the work between tools.</p><a href="#portfolio">Explore selected work <span>↘</span></a></div>
            </div>
            <div className="hero-foot reveal"><span>Automation <b>·</b> E-commerce <b>·</b> Product operations</span><span>Based in the Philippines <i>—</i> Working worldwide</span></div>
          </div>
        </section>

        <section id="about" className="section light-section">
          <div className="container content-grid">
            <div className="section-heading reveal">
              <p className="eyebrow">About Me</p>
              <h2>Operations-minded support with a practical automation perspective.</h2>
              <div className="about-panel reveal">
                <p>
                  I&apos;m an Information Technology graduate building my career as an Automation and E-commerce
                  Virtual Assistant. I enjoy turning repetitive, time-consuming tasks into organized workflows that
                  are easier to manage and scale.
                </p>
                <p>
                  My experience includes working with automation platforms, databases, spreadsheets, product data,
                  lead-generation workflows, and e-commerce operations.
                </p>
                <p>
                  I approach VA work from both an operations and technical perspective: I don&apos;t just complete tasks
                  manually—I look for ways to make the process more organized, repeatable, and efficient.
                </p>
              </div>
            </div>

            <div className="about-profile-column reveal">
              <figure className="profile-card">
                <div className="profile-photo-frame">
                  <div className="profile-photo-placeholder" aria-hidden="true">
                    <span>Portrait photo</span>
                  </div>
                  <img
                    src={profilePhoto}
                    alt="Louis Rafael Quiñones - Automation and E-commerce Virtual Assistant"
                    onError={(event) => {
                      event.currentTarget.hidden = true
                    }}
                  />
                </div>
                <figcaption className="profile-caption">
                  <strong>Louis Rafael Quiñones</strong>
                  <span>Automation &amp; E-commerce Virtual Assistant</span>
                </figcaption>
              </figure>

              <div className="what-i-bring" aria-label="Areas of expertise">
                <div className="bring-header">
                  <span className="bring-kicker">What I bring</span>
                </div>
                <div className="bring-grid">
                  <div className="bring-column">
                    <h3>Technical</h3>
                    <ul>
                      <li>Automation</li>
                      <li>Data</li>
                      <li>Systems</li>
                    </ul>
                  </div>
                  <div className="bring-column">
                    <h3>Operational</h3>
                    <ul>
                      <li>Organization</li>
                      <li>Research</li>
                      <li>Process</li>
                    </ul>
                  </div>
                  <div className="bring-column">
                    <h3>Business</h3>
                    <ul>
                      <li>Efficiency</li>
                      <li>Accuracy</li>
                      <li>Scalability</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-heading center reveal">
              <p className="eyebrow">Services</p>
              <h2>Support for the day-to-day work that slows businesses down.</h2>
            </div>

            <div className="card-grid services-grid">
              {services.map((service) => (
                <article key={service.title} className="info-card reveal">
                  <div className="card-icon">✓</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="section portfolio-section">
          <div className="container">
            <div className="portfolio-heading reveal"><div><p className="eyebrow">Selected work / 01—02</p><h2>Good systems make<br />complex work feel simple.</h2></div><p>Case studies in cleaner data, considered workflows, and more reliable operations.</p></div>
            <div className="portfolio-list">
              {[...projects]
                .filter((project) => ['supplier-catalog', 'recruiting-pipeline'].includes(project.id))
                .sort((left, right) => left.id === 'supplier-catalog' ? -1 : right.id === 'supplier-catalog' ? 1 : 0)
                .map((project, index) => (
                  <article key={project.id} className={`case-study reveal ${index === 0 ? 'case-study-featured' : ''}`}>
                    <div className="case-study-art">
                    <ProjectArtwork
                      project={project}
                      projectPreview={projectPreviews[project.id]}
                      onPreviewUpload={handleProjectPreviewUpload(project.id)}
                    />
                    <span className="artwork-index">0{index + 1} / PROJECT VISUALIZATION</span>
                  </div>
                    <div className="case-study-copy">
                      <div className="case-study-kicker"><span>0{index + 1}</span><span>{project.category}</span></div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      {project.id === 'supplier-catalog' && <div className="case-impact"><strong>3,786</strong><span>products proposed for import<br />after structured QA</span></div>}
                      <button type="button" className="text-link" onClick={() => setActiveProject(project)}>Read the case study <span>↗</span></button>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>

        <section id="tools" className="section">
          <div className="container">
            <div className="section-heading center reveal">
              <p className="eyebrow">Tools &amp; Technologies</p>
              <h2>Platforms and workflows I use to support business operations.</h2>
            </div>

            <div className="tool-grid">
              {toolGroups.map((group) => (
                <div key={group.title} className="tool-card reveal">
                  <div className="tool-head">
                    <h3>{group.title}</h3>
                    <span>{group.level}</span>
                  </div>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section process-section">
          <div className="container">
            <div className="section-heading center reveal">
              <p className="eyebrow">How I Work</p>
              <h2>A practical process for improving business workflows.</h2>
            </div>

            <div className="process-grid">
              {processSteps.map((step) => (
                <article key={step.number} className="process-card reveal">
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="section">
          <div className="container">
            <div className="section-heading center reveal">
              <p className="eyebrow">Why Work With Me</p>
              <h2>Reliable support for businesses that need structure and efficiency.</h2>
            </div>

            <div className="reason-grid">
              {reasons.map((reason) => (
                <div key={reason.title} className="reason-card reveal">
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section light-section">
          <div className="container resume-panel reveal">
            <div className="section-heading">
              <p className="eyebrow">Experience &amp; Background</p>
              <h2>Education and technical foundation supporting my operations work.</h2>
            </div>

            <div className="resume-content">
              <div>
                <p className="resume-label">Education</p>
                <h3>Caraga State University</h3>
                <p>College of Computing and Information Sciences</p>
                <p>Bachelor&apos;s degree in Information Technology</p>
                <p>Graduated 2026</p>
              </div>

              <div className="resume-actions">
                <a className="primary-button" href="/Quinones_LouisRafael_Resume.pdf" download>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-panel reveal">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2>Let&apos;s Make Your Workflow More Efficient.</h2>
              <p>
                If you need help with automation, e-commerce operations, product data, lead generation, or
                repetitive business tasks, I&apos;d be happy to discuss how I can help.
              </p>
              <div className="cta-row">
                <a className="primary-button" href={`mailto:${contactDetails.email}`}>
                  Contact Me
                </a>
                <a className="secondary-button light" href="#portfolio">
                  View My Work
                </a>
              </div>
            </div>

            <div className="contact-list">
              <a href={`mailto:${contactDetails.email}`}>
                <span>Email</span>
                <strong>{contactDetails.email}</strong>
              </a>
              <a href={contactDetails.linkedin} target="_blank" rel="noreferrer">
                <span>LinkedIn</span>
                <strong>www.linkedin.com/in/louisrafael-quinones</strong>
              </a>
              <a href={contactDetails.onlinejobs} target="_blank" rel="noreferrer">
                <span>OnlineJobs.ph</span>
                <strong>https://www.onlinejobs.ph/jobseekers/info/5254227</strong>
              </a>
            </div>
          </div>
        </section>
      </main>

      {selectedEvidence && (
        <div className="lightbox-overlay" onClick={() => setSelectedEvidence(null)}>
          <div className="lightbox-card" onClick={(event) => event.stopPropagation()}>
            <button className="close-button" type="button" onClick={() => setSelectedEvidence(null)} aria-label="Close evidence preview">
              ×
            </button>
            <div className="lightbox-visual">{renderEvidenceVisual(selectedEvidence, true)}</div>
            <div className="lightbox-copy">
              <small>{selectedEvidence.label}</small>
              <strong>{selectedEvidence.title}</strong>
              <p>{selectedEvidence.description}</p>
            </div>
          </div>
        </div>
      )}

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <h3>Louis Rafael</h3>
            <p>Automation &amp; E-commerce Virtual Assistant</p>
            <p className="footer-tag">Automation • E-commerce • Product Data • Lead Generation</p>
          </div>
          <p>© 2026 Louis Rafael. All rights reserved.</p>
        </div>
      </footer>

      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="modal-card" onClick={(event) => event.stopPropagation()}>
            <button className="close-button" type="button" onClick={() => setActiveProject(null)} aria-label="Close case study">
              ×
            </button>

            <div className="modal-header">
              <span className="case-label">{activeProject.label}</span>
              <h2>{activeProject.title}</h2>
              <p>{activeProject.category}</p>
            </div>

            <div className="modal-content">
              <div className="modal-section">
                <h3>Overview</h3>
                <p>{activeProject.summary || activeProject.description}</p>
              </div>

              {activeProject.id === 'supplier-catalog' && (
                <div className="modal-section">
                  <div className="evidence-header">
                    <span className="case-label">KEY METRICS</span>
                    <h3>Project Snapshot</h3>
                  </div>
                  <div className="key-metrics-grid">
                    <div className="key-metric-card">
                      <small>Products</small>
                      <strong>3,808</strong>
                    </div>
                    <div className="key-metric-card">
                      <small>Variants</small>
                      <strong>6,315</strong>
                    </div>
                    <div className="key-metric-card">
                      <small>Images</small>
                      <strong>6,793</strong>
                    </div>
                    <div className="key-metric-card featured">
                      <small>Proposed for import</small>
                      <strong>3,786</strong>
                    </div>
                  </div>
                </div>
              )}

              <div className="modal-section">
                <h3>The Problem</h3>
                <p>{activeProject.problem}</p>
              </div>

              <div className="modal-section">
                <h3>My Approach</h3>
                <p>{activeProject.approach}</p>
              </div>

              <div className="modal-section">
                <h3>Tools Used</h3>
                <ul className="tag-list">
                  {activeProject.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3>Workflow</h3>
                <ol>
                  {activeProject.workflow.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>

              {activeProject.id === 'supplier-catalog' && activeProject.evidence && (
                <div className="modal-section">
                  <div className="evidence-header">
                    <span className="case-label">PROJECT EVIDENCE</span>
                    <h3>Project Evidence</h3>
                    <p>A visual walkthrough of the extraction, QA, exception handling, and import preparation workflow.</p>
                  </div>

                  <div className="evidence-grid">
                    {activeProject.evidence.map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        className="evidence-card"
                        onClick={() => setSelectedEvidence(item)}
                      >
                        <div className="evidence-card-label">{item.label}</div>
                        <div className="evidence-card-heading">
                          <h4>{item.title}</h4>
                          <span>↗</span>
                        </div>
                        <p>{item.description}</p>
                        {renderEvidenceVisual(item)}
                        <div className="evidence-card-metrics">
                          {item.metrics.map((metric) => (
                            <span key={metric}>{metric}</span>
                          ))}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeProject.metrics && (
                <div className="modal-section">
                  <h3>Project Details</h3>
                  <ul className="check-list">
                    {activeProject.metrics.map((metric) => (
                      <li key={metric}>{metric}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="modal-section">
                <h3>Challenge</h3>
                <p>{activeProject.challenges}</p>
              </div>

              <div className="modal-section">
                <h3>Solution</h3>
                <p>{activeProject.solution}</p>
              </div>

              <div className="modal-section">
                <h3>Outcome</h3>
                <p>{activeProject.outcome}</p>
              </div>

              <div className="modal-section">
                <h3>What I Learned</h3>
                <p>{activeProject.learning}</p>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
