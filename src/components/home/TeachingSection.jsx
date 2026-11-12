import { useState } from "react";
import { teachingResources, teachingTopics } from "../../data/homeContent";
import Arrow from "../ui/Arrow";

const ALL = "All";

function repoPath(url) {
  return new URL(url).pathname.slice(1);
}

export default function TeachingSection() {
  const [topic, setTopic] = useState(ALL);
  const resources = topic === ALL ? teachingResources : teachingResources.filter((item) => item.topics.includes(topic));

  return (
    <section className="teaching-work" aria-labelledby="teaching-work-heading">
      <div className="teaching-intro reveal">
        <p className="section-label">Teaching in practice</p>
        <h2 id="teaching-work-heading">The examples from class live on GitHub.</h2>
        <p>
          I build exercises and starter projects so students have something concrete to explore, break and rebuild.
          Much of the material is shared openly on GitHub.
        </p>
      </div>

      <div className="repo-browser">
        <div className="repo-toolbar reveal">
          <div className="repo-filters" role="group" aria-label="Filter repositories by topic">
            {[ALL, ...teachingTopics].map((name) => (
              <button type="button" aria-pressed={topic === name} onClick={() => setTopic(name)} key={name}>
                {name}
              </button>
            ))}
          </div>
          <p className="repo-count" aria-live="polite">
            {resources.length} of {teachingResources.length} repos
          </p>
        </div>

        <ul className="repo-grid">
          {resources.map((resource, index) => (
            <li style={{ "--i": index }} key={`${topic}-${resource.name}`}>
              <a className="repo-card" href={resource.url} target="_blank" rel="noreferrer">
                <span className="repo-topic">{resource.topics.join(" · ")}</span>
                <span className="repo-name">{resource.name}</span>
                <span className="repo-detail">{resource.detail}</span>
                <span className="repo-path">
                  {repoPath(resource.url)} <Arrow />
                </span>
              </a>
            </li>
          ))}
          <li style={{ "--i": resources.length }} key={`${topic}-all`}>
            <a
              className="repo-card repo-card--all"
              href="https://github.com/cederdorff?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <span className="repo-topic">More on GitHub</span>
              <span className="repo-name">Browse all repositories</span>
              <span className="repo-path">
                cederdorff <Arrow />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
