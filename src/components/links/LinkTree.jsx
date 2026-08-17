const links = [
  { label: "Selected work", url: "https://cederdorff.com/#work", icon: "ion-ios-bolt" },
  { label: "Website", url: "https://cederdorff.com/", icon: "ion-ios-world" },
  { label: "Instagram", url: "https://www.instagram.com/cederdorff/", icon: "ion-social-instagram" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/cederdorff/", icon: "ion-social-linkedin" },
  { label: "GitHub", url: "https://github.com/cederdorff", icon: "ion-social-github" },
  { label: "Facebook", url: "https://www.facebook.com/rcederdorff/", icon: "ion-social-facebook" },
  { label: "Business Academy Aarhus", url: "https://www.eaaa.dk/", icon: "ion-ios-people" }
];

export default function LinkTree() {
  return (
    <nav className="link-tree" aria-label="Social and profile links">
      {links.map((link) => (
        <a href={link.url} key={link.label}>
          <i className={link.icon} aria-hidden="true"></i>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
