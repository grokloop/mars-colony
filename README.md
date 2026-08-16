# Mars Colony

A public, walkable first-settlement on Mars. Not a game. No scores, quests, or win state. It is a place you walk.

This follows the Elon Musk / SpaceX civilize-Mars plan only: Starship is the truck. Uncrewed cargo Starships land first, prove they land intact, and deliver cargo and surface systems. First human jobs are survey, prepare landing surfaces, set up power, and build habitats. Power is solar. Ice is mined for water. ISRU is Sabatier — Mars CO2 + water ice → CH4 and O2, which is why Starship is methalox. A city comes later, not now.

Day one is an early cargo-then-crew outpost on an ice-rich northern plain (Arcadia Planitia). Starships are the early habs and cargo. This is a living world. The settlement grows as people send PRs.

## How to start

Clone this repo, install dependencies, then start the Vite dev server.

Package scripts: dev -> vite, build -> vite build, preview -> vite preview.
Install with the node package manager, then run the dev script.

Open http://localhost:5173 after the dev server starts.

- Walk: /  (click, WASD, mouse look, Shift run, Space jump)
- Spectator: /preview.html  (cinematic camera, no controls)

No backend. No accounts. No analytics.

## Controls

- Click: start walking
- Mouse: look
- WASD: walk
- Shift: run
- Space: jump
- Esc: release pointer

Spawn is on the landing pad berm, looking at the Starships.

## Day-one landmarks

- Pad Starship on landing legs (stainless, flaps, nose, heat-shield tiles, Raptor bells)
- Second uncrewed cargo Starship already landed, hatch open, ramp and crates being offloaded
- Prepared landing surfaces: graded pads, blast berms, approach markers, and a third pad still being prepped
- Solar farm east of the pad (expanded rows plus a second field), with power lines to the Sabatier plant
- Sabatier ISRU west: CO2 intake, ice/water feed, CH4 and O2 tanks
- Hab cluster north along the road, plus hab modules being assembled from cargo kits
- CO2 greenhouse / life support: Mars atmosphere intake and compressor, plant rows in compressed CO2, small O2 tank
- Pad is the spaceport: methalox transfer lines from Sabatier, CH4/O2 load stand, return-propellant labels
- Resource survey on the ice-rich northern plain: stakes, sample caches, ice/water and deposit flags, survey rover tracks
- Workshop hangar (early cargo / construction)
- Comms tower
- Ice-mining rig with a water-ice pile and a feed line to Sabatier
- Optimus-class robots on cargo offload, landing prep, survey, and hab assembly
- Graded/packed-regolith roads and plank paths linking pad, cargo, ISRU, habs, greenhouse, survey, and both solar fields

## Stack

Vite + vanilla JavaScript + Three.js. No extra runtime dependencies.

## Contribute

See CONTRIBUTING.md. This world is meant to be forked and improved.

## License

MIT. See LICENSE.
