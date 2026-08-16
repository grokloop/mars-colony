# Mars Colony

A public, walkable first-settlement on Mars. Not a game. No scores, quests, or win state. It is a place you walk.

This follows the Elon Musk / SpaceX civilize-Mars plan only: Starship is the truck. Uncrewed cargo Starships land first, prove they land intact, and deliver cargo and surface systems. First human jobs are survey, prepare landing surfaces, set up power, and build habitats. Power is solar. Ice is mined for water. ISRU is Sabatier — Mars CO2 + water ice → CH4 and O2, which is why Starship is methalox. A city comes later, not now.

Day one is an early cargo-then-crew outpost on an ice-rich northern plain (Arcadia Planitia). Starships are the early habs and cargo. This is a living world. The settlement grows as people send PRs.

Public site: https://grokloop.github.io/mars-colony/
Source: https://github.com/grokloop/mars-colony

## How to start

Clone the repo, install dependencies, then start the Vite dev server.

```
git clone https://github.com/grokloop/mars-colony.git
cd mars-colony
npm install
npm run dev
```

Open http://localhost:5173 after the dev server starts.

- Home: /  (public landing)
- Walk: /walk.html  (click, WASD, mouse look, Shift run, Space jump)
- Spectator: /preview.html  (cinematic camera, no controls)

Package scripts: dev -> vite, build -> vite build, preview -> vite preview.

No backend. No accounts. No analytics.

## Deploy

Default Vite `base` is `/`, so a static host at the domain root works.

- Vercel: import the GitHub repo. The included `vercel.json` points the platform at a static `dist` output. One-click.
- Railway: after a production build, serve the `dist` folder as static files.
- GitHub Pages: published from `gh-pages` at https://grokloop.github.io/mars-colony/ . When rebuilding for Pages, pass Vite `--base /mars-colony/` so asset URLs stay under that path. Internal links are relative (`./preview.html`, `./walk.html`, `./`) so the same HTML works on Pages and at `/`.

Pages rebuild: npm run build -- --base /mars-colony/

## Controls

- Click: start walking
- Mouse: look
- WASD: walk
- Shift: run
- Space: jump
- Esc: release pointer

Spawn is on the landing pad berm, looking at the Starships.

## Day-one landmarks

- Six Starships across two synodic windows: pad crew hab plus five cargo landings (three unloading). Window 2 sits west and east of the first campaign.
- Pad Starship fitted as the first crew hab: side airlock, access stairs, ground vestibule, CREW HAB / AIRLOCK labels, occupied deck lights
- Cargo Starships on prepared pads and near landing-prep, hatches/ramps and crates being offloaded
- Prepared landing surfaces: graded pads, blast berms, approach markers, a pad still being prepped, and an empty second pad marked for the next 26-month window (no ship on it yet)
- Solar farm east of the pad (expanded rows plus second, third, and fourth fields), with power lines to the Sabatier plant and extra battery yards for night
- Sabatier ISRU west: CO2 intake, ice/water feed, CH4 and O2 tanks
- Hab cluster, pressure habs, and hab street (HAB 2–6) linked by pressurized corridors, with a crew-access tube toward the pad Starship. HAB 6 is occupied off the yard. Crew ops / medical and a cargo-assembled commons / mess are tubed into the neighborhood. Early settlement, not a city.
- CO2 greenhouse / life support: Mars atmosphere intake and compressor, plant rows in compressed CO2, small O2 tank, plus a second food grow vault
- Pad is the spaceport: methalox transfer lines from Sabatier, CH4/O2 load stand, and a visible methalox stockpile for return flights
- Resource survey on the ice-rich northern plain: stakes, sample caches, ice/water and deposit flags, survey rover tracks
- Workshop hangar (early cargo / construction)
- Comms tower plus a large Earth-pointing dish (DSN / Starship-era link; light-time delay, not real-time)
- Ice-mining rig with a water-ice pile and a feed line to Sabatier
- Ice/cargo haul loop: loaded trailers on the road from the mine to a transfer yard, Sabatier ISRU, and the pad
- Grow vaults for food: the original CO2 greenhouse, a second vault, and a hab-street vault so six ships and HAB 3–5 can eat
- Visible water loop: ice melt and filter on the mine road, potable tanks at the habs, pipes ice → ISRU and ice → crew
- Battery / night store by the solar farm and a smaller pack at the habs so the plant and crew run after dark
- Small EVA/crew presence at the pad airlock: suited figures, tool cart, suitport
- Optimus-class robots on cargo offload, landing prep, survey, and hab assembly
- Graded/packed-regolith roads and plank paths linking pad, cargo, ISRU, habs, greenhouse, survey, and both solar fields

## Stack

Vite + vanilla JavaScript + Three.js. No extra runtime dependencies. Multi-page: `index.html` (home), `preview.html`, `walk.html`.

## Contribute

See CONTRIBUTING.md. This world is meant to be forked and improved.

## License

MIT. See LICENSE.
