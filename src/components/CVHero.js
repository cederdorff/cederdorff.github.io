import { Link } from "react-router-dom";

export default function CVHero() {
    function scrollToContact() {
        const element = document.getElementById("contact");
        element.scrollIntoView({
            behavior: "smooth"
        });
    }

    return (
        <section className="hero">
            <article>
                <h2>
                    Do you
                    <br /> need more?
                </h2>
                <p>
                    Download my{" "}
                    <a href="/CV-2024.pdf" rel="noreferrer" target="_blank">
                        curriculum vitae here
                    </a>
                    ,<br /> visit my{" "}
                    <a href="https://www.instagram.com/cederdorff/" rel="noreferrer" target="_blank">
                        Instragram Profile{" "}
                    </a>
                    or let's{" "}
                    <Link to="/#contact" onClick={scrollToContact}>
                        get in touch
                    </Link>
                </p>
            </article>
        </section>
    );
}
