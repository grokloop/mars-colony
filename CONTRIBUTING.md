# Contributing to Mars Colony

This is a living settlement. Strangers can land a new hab, a better rover, a less-janky Starship, or a fix — and people walking the world tomorrow will see it.

## What belongs here

- Structures, vehicles, and props that fit an early SpaceX-flavored Mars base
- Terrain, sky, lighting, and performance improvements
- Accessibility and control polish
- Documentation

## What does not

- Scores, quests, inventory, combat, or a win state
- Backends, multiplayer, analytics, trackers, or secrets
- Heavy new dependencies without a strong reason
- Megacity sprawl that erases the first-settlement feeling

Invent freely around the Musk / SpaceX spine: Starship as the truck, solar, ice / ISRU, habs, greenhouses, then city.

## How to add a structure

1. Fork and create a branch.
2. Build the mesh in src/world/settlement.js (or a new module imported from there). Reuse materials from src/world/materials.js.
3. Place it on the flattened settlement plateau. Use getHeight(x, z) from src/world/terrain.js if you leave the pad.
4. If it is solid, add a collider so walkers do not ghost through it.
5. If it is a landmark, add a beat to the cinematic path in src/camera/cinematic.js.
6. Mention it in the README landmarks list.

Keep geometry modest. Instancing and simple PBR materials beat huge textures. Aim for about 60fps on a laptop.

Walk your change at /. Check the tour at /preview.html. Run a production build before you open a PR.

One idea per PR when you can. Screenshots help. MIT: by contributing you license your work the same way.

Welcome to Mars. Build something people will walk over to look at.
