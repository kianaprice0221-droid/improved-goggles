import { useState } from 'react';

function Work() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      client: "FitLife Gym",
      category: "instagram",
      categoryLabel: "Instagram",
      description: "Grew Instagram following from 2K to 45K in 6 months with engaging fitness content and community building.",
      results: [
        "2,150% increase in followers",
        "Average engagement rate: 8.5%",
        "Generated 150+ gym memberships"
      ],
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      client: "TechStartup Co",
      category: "tiktok",
      categoryLabel: "TikTok",
      description: "Created viral tech content strategy resulting in 5 videos hitting over 1M views each.",
      results: [
        "500K+ followers gained",
        "12M+ total video views",
        "350% increase in website traffic"
      ],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      client: "Bloom Beauty",
      category: "full",
      categoryLabel: "Full Package",
      description: "Complete social media transformation across Instagram, TikTok, and YouTube for beauty brand.",
      results: [
        "Combined 200K+ followers",
        "Product launch reached 2M people",
        "500% ROI on social ads"
      ],
      image: "https://images.pexels.com/photos/3373730/pexels-photo-3373730.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'instagram', label: 'Instagram' },
    { id: 'tiktok', label: 'TikTok' },
    { id: 'full', label: 'Full Package' }
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="page-content">
      <div className="work-hero">
        <h1 className="work-title">Our Work</h1>
        <p className="work-subtitle">Real results for real clients. See how we've helped brands grow their social presence.</p>
      </div>

      <div className="work-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`work-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="work-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="work-card" onClick={() => setSelectedProject(index)}>
            <div className="work-image-container">
              <img src={project.image} alt={project.client} className="work-image" />
              <div className="work-overlay">
                <span className="work-category">{project.categoryLabel}</span>
              </div>
            </div>
            <div className="work-content">
              <h3 className="work-client">{project.client}</h3>
              <p className="work-description">{project.description}</p>
              <div className="work-results">
                <h4 className="results-title">Results:</h4>
                <ul className="results-list">
                  {project.results.map((result, idx) => (
                    <li key={idx}>{result}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject !== null && (
        <div className="work-modal" onClick={() => setSelectedProject(null)}>
          <div className="work-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="work-modal-close" onClick={() => setSelectedProject(null)}>×</button>
            <div className="work-modal-body">
              <img src={filteredProjects[selectedProject].image} alt={filteredProjects[selectedProject].client} className="work-modal-image" />
              <div className="work-modal-info">
                <span className="work-modal-category">{filteredProjects[selectedProject].categoryLabel}</span>
                <h2 className="work-modal-client">{filteredProjects[selectedProject].client}</h2>
                <p className="work-modal-description">{filteredProjects[selectedProject].description}</p>
                <div className="work-modal-results">
                  <h4>Key Results:</h4>
                  <ul>
                    {filteredProjects[selectedProject].results.map((result, idx) => (
                      <li key={idx}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Work;
