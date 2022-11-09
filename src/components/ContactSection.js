import SocialIcons from "./SocialIcons";
export default function ContactSection() {
    return (
        <section id="contact">
            <article>
                <h2>
                    Get in
                    <br />
                    touch
                </h2>
                <article className="tagline">
                    <p>
                        And let us talk about how I<br /> can help you look your best online
                    </p>
                </article>

                <address>
                    <p>
                        Rasmus Cederdorff
                        <br />
                        Freelance Web App developer
                        <br />
                    </p>
                    <p>
                        Senior Lecturer at <br />
                        <a href="https://www.kea.dk/" rel="noreferrer" target="_blank">
                            KEA - Copenhagen School of Design and Technology
                        </a>
                    </p>
                    <p>
                        <a href="mailto:rasmus@cederdorff.com">rasmus@cederdorff.com</a>
                        <br />
                    </p>
                    <p>
                        <a href="http://cederdorff.com">cederdorff.com</a>
                    </p>
                    <SocialIcons />
                </address>
            </article>
            <figure>
                <img src="img/rasmus_new.webp" alt="Rasmus Cederdorff" />
            </figure>
        </section>
    );
}
