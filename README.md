# cederdorff.com

My portfolio. React and Vite, deployed to GitHub Pages from `main`.

## Development

```bash
npm install
npm run dev
```

`npm run lint` checks the source, `npm run build` makes the production build.

## Structure

```
src/
  pages/        Home and Links
  components/   one folder per section: hero, about, teaching, work, contact
                plus layout (nav, footer), links and ui
  styles/       one stylesheet per section, imported in order from index.css
  data/         projects, teaching repos and the hero playground settings
  hooks/        active nav section and scroll reveal
public/         files served as they are: images, og.jpg, cv, manifest
```

Project images are 2400×1525 WebP with a `-1200` variant next to each.
