import { useRef, useState } from "react";
import { teachingResources, teachingTopics } from "../../data/teaching";
import Arrow from "../ui/Arrow";

const ALL = "All";
const LIMIT = 7;

function repoPath(url) {
  return new URL(url).pathname.slice(1);
}

export default function TeachingResources() {
  const [topic, setTopic] = useState(ALL);
  const [expanded, setExpanded] = useState(false);
  const browserRef = useRef(null);

  const toggleExpanded = () => {
    const collapsing = expanded;

    setExpanded(!expanded);

    // back to the top of the list when it collapses
    if (collapsing) {
      requestAnimationFrame(() => browserRef.current?.scrollIntoView({ block: "start" }));
    }
  };
  const resources = topic === ALL ? teachingResources : teachingResources.filter((item) => item.topics.includes(topic));
  const visible = expanded ? resources : resources.slice(0, LIMIT);

  return (
    <section className="resources" aria-labelledby="resources-heading">
      <div className="resources-intro reveal">
        <p className="section-label">Teaching in practice</p>
        <h2 id="resources-heading">The examples from class live on GitHub.</h2>
        <p>
          I build exercises and starter projects so students have something concrete to explore, break and rebuild.
          Much of the material is shared openly on GitHub.
        </p>
      </div>

      <div className="repo-browser" ref={browserRef}>
        <div className="repo-toolbar reveal">
          <div className="repo-filters" role="group" aria-label="Filter repositories by topic">
            {[ALL, ...teachingTopics].map((name) => (
              <button type="button" aria-pressed={topic === name} onClick={() => setTopic(name)} key={name}>
                {name}
              </button>
            ))}
          </div>
          <p className="repo-count" aria-live="polite">
            {topic === ALL ? `${resources.length} repos` : `${resources.length} of ${teachingResources.length} repos`}
          </p>
        </div>

        <ul className="repo-grid" id="repo-grid">
          {visible.map((resource, index) => (
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
          <li style={{ "--i": visible.length }} key={`${topic}-all`}>
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
        {resources.length > LIMIT && (
          <button
            type="button"
            className="repo-more"
            aria-controls="repo-grid"
            aria-expanded={expanded}
            onClick={toggleExpanded}
          >
            {expanded ? "Show fewer" : `Show all ${resources.length} repos`}
          </button>
        )}
      </div>
    </section>
  );
}
