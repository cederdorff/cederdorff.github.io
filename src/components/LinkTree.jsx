export default function LinkTree() {
  return (
    <nav className="link-tree" aria-label="Social and profile links">
      <a href="https://cederdorff.com/#work" title="See selected work">
        <i className="ion-ios-bolt" aria-hidden="true"></i>
        Selected work
      </a>
      <a
        href="https://cederdorff.com/"
        title="This is a link to my Website, Cederdorff.com">
        <i className="ion-ios-world" aria-hidden="true"></i>
        Website
      </a>
      <a
        href="https://www.instagram.com/cederdorff/"
        title="This is a link to my Instagram Account, Cederdorff">
        <i className="ion-social-instagram" aria-hidden="true"></i>
        Instagram
      </a>
      <a
        href="https://www.linkedin.com/in/cederdorff/"
        title="This is a link to my LinkedIn Account, Cederdorff">
        <i className="ion-social-linkedin" aria-hidden="true"></i>
        LinkedIn
      </a>
      <a
        href="https://github.com/cederdorff"
        title="This is a link to my GitHub Account, Cederdorff">
        <i className="ion-social-github" aria-hidden="true"></i>
        GitHub
      </a>
      <a
        href="https://www.facebook.com/rcederdorff/"
        title="This is a link to my Facebook Account, Cederdorff">
        <i className="ion-social-facebook" aria-hidden="true"></i>
        Facebook
      </a>
      <a
        href="https://www.eaaa.dk/"
        title="This is a link to Erhvervsakademi Aarhus, EAAA">
        <i className="ion-ios-people" aria-hidden="true"></i>
        Business Academy Aarhus
      </a>
    </nav>
  );
}
