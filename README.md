# HARVEST Workshop Website

Website for the **HARVEST** workshop series &mdash; International Workshops on Applications of
HPC and AI in Agriculture, supported by the [NSF ICICLE AI Institute](https://icicle.osu.edu/).

Live at **https://icicle-ai.github.io/harvest/**

## Editions

| Edition | Workshop | Hosted at | Site section |
| --- | --- | --- | --- |
| 3rd (current) | HARVEST-India 2026 | HiPC 2026 (half-day) | Root routes (`#/`, `#/call-for-papers`, …) |
| 2nd | HARVEST-Vision 2026 | WACV 2026, Tucson, AZ | `#/past-events/harvest-vision-2026` |
| 1st | HARVEST 2025 | ICPP 2025, San Diego, CA | `#/past-events/2025` |

## Stack

A **Vite + React 19** single-page app in [`my-website/`](my-website). Routing is `react-router-dom`
with `HashRouter`, so all deep links carry a `#` (e.g.
`https://icicle-ai.github.io/harvest/#/call-for-papers`). Content is authored directly as JSX.

## Local development

```bash
cd my-website
npm install
npm run dev      # http://localhost:5173/harvest/
npm run build    # production build into my-website/dist
npm run preview  # serve the production build locally
```

## Layout

```
my-website/src/
  App.jsx                        all routes and the nav link list
  components/
    NavBar.jsx  Drawer.jsx  Footer.jsx  IcicleTraining.jsx   shared chrome
    PastEvents.jsx                                           index of past editions
    HarvestIndia2026/    3rd edition (current) — served at the root routes
    HarvestVision2026/   2nd edition (archived)
    Harvest2025/         1st edition (archived)
    Exacomm*/            inherited ExaComm archive, not routed
  assets/
    css/ font/ json/     shared across all editions
    img/lab/             shared portraits and logos
    img/HarvestVision2026/  pdfs/HarvestVision2026/   2nd edition media
    img/Harvest2025/        pdfs/Harvest2025/         1st edition media
```

Unresolved content is marked with `<span className="tbd">TBD</span>`. Grep for `tbd` to find
every open item.

### Adding a new edition

Copy the current edition's folder to a new `Harvest<Name><Year>/`, point the root routes in
`App.jsx` at it, add a `Page.jsx` to the outgoing edition's folder (see
`HarvestVision2026/Page.jsx`), and register it in `PastEvents.jsx` plus the Past Events dropdown in
both `NavBar.jsx` and `Drawer.jsx`.

## Deployment

Pushing to the **`docusaurus-demo`** branch triggers
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds `my-website` and
publishes `my-website/dist` via GitHub Pages. The branch name is historical &mdash; the site is not
Docusaurus.

> The `gh-pages` branch is a stale leftover from an older deployment method and is no longer
> served. Do not publish to it.
