export default function WorkBanner() {
  return (
    <figure className="work-banner reveal">
      <img
        src="/img/banner_web.webp"
        srcSet="/img/banner_web-1250.webp 1250w, /img/banner_web.webp 2500w"
        sizes="100vw"
        loading="lazy"
        decoding="async"
        alt="A desk with a laptop, ruler, coffee and scattered letterforms"
      />
    </figure>
  );
}
