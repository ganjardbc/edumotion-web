# Tako SVG + Rigging Starter Pack

## Files
- `tako_master.svg`: layered master character with stable group IDs.
- `parts/`: individual SVG component files. Every part shares the same 800x800 viewBox.
- `rig_manifest.json`: layer order, palette, and suggested pivot coordinates.

## Layer order
Back to front:
1. leg_left
2. leg_right
3. body_head
4. antenna
5. arm_left
6. arm_right
7. eye_left
8. eye_right
9. brow_left
10. brow_right
11. mouth

## Remotion integration
Import the master SVG as an asset for a static preview, or render the component SVGs as separate `<Img>` layers inside a React component. Keep all layers aligned at the same width, height, and viewBox. Animate each layer with `interpolate()` / `spring()` and CSS transforms.

Suggested pivot points are in `rig_manifest.json`. For arms and legs, wrap each SVG in a positioned container and set `transform-origin` to the normalized pivot location. Test pivots visually before building walk cycles.

## Important
This is version 0.1: a clean, simplified vector interpretation of the approved concept. Before production, review proportions and approve the SVG appearance. Alternate expression assets (mouth/eyebrows) and proper joint-separated limbs are the next rigging pass.
