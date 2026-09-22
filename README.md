# Y Concierge — YMCA of Metro Atlanta concept

An interactive, family-first sales prototype. `demo-requirements.md` is the source of truth and is unchanged.

**Concept Prototype — Not a Live YMCA System.** All household data, catalog fixtures, prices, eligibility rules, capacity checks, memberships, enrollments and handoffs are fictional. No APIs, credentials, analytics, storage, payments or production connections are used.

## Run

Open `index.html` directly, or serve this directory with `python3 -m http.server 8765`. No build step or runtime dependencies. GitHub Pages can serve the repository root; all asset paths are relative and work under a repository subpath.

## Present the primary journey

1. Select **Find a program**.
2. Choose **Legend · Age 5**.
3. Choose **Beginner / water confidence**.
4. Review three explained matches and choose the best match.
5. Compare Family Membership and Youth Program Membership; choose Family.
6. Review the child, program, location, schedule, membership and illustrative costs.
7. Select **Confirm Registration**. Watch simulated capacity, duplicate and enrollment checks, followed by the fictional confirmation.
8. **Restart demo** clears the complete journey, including in-flight timers, with one click.

Coast has age-appropriate caregiver lessons. Legend's stroke goals ask prerequisite questions; a negative/uncertain answer recommends a beginner starting point. All three programs and both memberships work. Back controls allow changes. The broader capability cards and Y team link open a scoped preview with a simulated handoff and return path.

## Structure

- `index.html`: semantic page shell, family context and native help dialog.
- `assets/styles.css`: responsive design, focus indicators and reduced-motion support; no external fonts or images.
- `assets/app.js`: deterministic in-memory journey, fictional fixtures and cancellable simulation timers.
- `tests/journey.cjs`: Chrome/Playwright browser regression suite. With Node, Playwright and Chrome available, run `node tests/journey.cjs` while the server runs on port 8765. If Playwright is installed outside this directory, set `NODE_PATH` to its containing node_modules directory.

## Validation

The browser suite covers the complete primary journey, every goal, both children, each program, both memberships, prerequisite branching, back/edit, restart during processing, all help dialogs, Escape dismissal, and complete journeys at 320, 390 and 768 pixel widths. It checks horizontal overflow, JavaScript errors and external network requests. Desktop, recommendation, success and mobile screenshots are produced in the OS temporary directory for visual inspection.

This is a guided experience prototype, not a live AI assistant. Recommendations and checks run against fictional local fixtures. No enrollment or case persists after reset or reload. The typography-based Y mark is a concept treatment; final identity and real offers would require YMCA approval before production use.
