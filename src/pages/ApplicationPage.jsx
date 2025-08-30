import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ApplicationPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: "700px", margin: "0 auto", padding: "2rem" }}>
        <section style={{ marginTop: "2rem" }}>
          <h1>Ansøgning</h1>
          <h2
            style={{
              fontSize: "1.3rem",
              fontWeight: 600,
              marginTop: "0.5rem",
              marginBottom: "2rem",
              letterSpacing: "0.02em"
            }}>
            Uddannelsesleder for multimediedesigneruddannelsen
          </h2>
          <h3>Kære Anne, Maria, Hanne og kollegaer</h3>
          <p>
            Jeg sidder her på mit røde kontor og tænker: “Nu skal du da have et
            år med ro på, ikke?” Men det varer som altid kun få sekunder. Da
            mailen om sammenlægningen og den nye uddannelseslederstilling
            tikkede ind, vidste jeg, at det her var en udfordring, jeg ikke
            kunne lade passere.
          </p>
          <p>
            Jeg søger derfor stillingen som uddannelsesleder for
            multimediedesigneruddannelsen – og jeg kan mærke, at det faktisk
            rører mig at skrive de ord. For jeg brænder for uddannelsen, for
            fagligheden og for at gøre en forskel for både studerende og
            kollegaer.
          </p>
          <h3>Hvorfor mig?</h3>
          <p>
            Som underviser i programmering på multimediedesign og webudvikling
            kender jeg både uddannelsens styrker, potentialer og udfordringer.
            Jeg er struktureret og styrende, men altid med humor og blik for den
            enkelte. Min vigtigste rolle har altid været at klæde de studerende
            bedst muligt på til det arbejdsmarked, de møder – og det ansvar vil
            jeg gerne løfte videre som leder.
          </p>
          <p>
            Jeg har ikke klassisk ledelseserfaring, men jeg har i årevis stået
            med ansvar for planlægning, facilitering og styring af
            undervisningsforløb og studenterprojekter – og det kræver både
            overblik, tydelig kommunikation og evnen til at motivere. Jeg er
            helt klar over, at jeg kommer til at lære nyt og også begå fejl
            undervejs, men jeg er mindst lige så klar til at vokse med opgaven
            og tage ansvar for, at vi lykkes sammen. Ellers lover jeg, at det
            røde kontor altid står klar som kommandocentral – med kaffe på
            kanden og plads til nye idéer.
          </p>
          <h3>Hvorfor uddannelsesleder?</h3>
          <p>
            Fordi jeg elsker undervisningssektoren og EAAA – og fordi det føles
            som det naturlige næste skridt. Jeg holder meget af undervisningen,
            men mærker også en stigende lyst til at tage del i den strategiske
            udvikling og bidrage til kollegaernes trivsel. Jeg vil gerne være
            med til at sikre, at vi står stærkt i den kommende reform, at vi
            fortsat udvikler fagligheden, og at vi bevarer vores gode, uformelle
            arbejdsmiljø. Og hvis I leder efter en leder, der både kan holde
            styr på planerne og holde humøret højt – så har I fundet ham.
          </p>
          <p>
            Jeg håber, at min ansøgning og CV vækker jeres interesse, og at I
            har lyst til at se mig til en samtale. Jeg er klar til at give den
            hele armen – og jeg kan love engagement, struktur, masser af grin og
            en leder, der altid går forrest.
          </p>
          <p style={{ marginTop: "2rem", fontWeight: "bold" }}>
            De bedste og kærligste hilsner
            <br />
            RACE / Rasmus Cederdorff
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
