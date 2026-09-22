# YMCA of Metro Atlanta — Y Concierge Demo Requirements

## Purpose

Build an executive-quality, interactive future-state prototype for YMCA of Metro Atlanta's proposed Y Concierge.

This is a SALES / EXPERIENCE PROTOTYPE.

It is NOT a functioning Salesforce implementation and must not imply that the demonstrated integrations or actions have already been built.

Use fictional demonstration data only.

Include a visible but unobtrusive label:

"Concept Prototype — Not a Live YMCA System"

The purpose of the prototype is to help YMCA stakeholders visualize what the future member experience could feel like.

---

# 1. Product Vision

Y Concierge is the proposed external, member-facing AI concierge.

The broader implementation is intended to use Salesforce Agentforce and Salesforce / Traction Rec.

The real implementation is expected to support both:

- unauthenticated website visitors
- authenticated members

The prototype should focus primarily on the authenticated member experience.

Y Concierge should feel like a natural extension of the YMCA digital experience rather than a standalone chatbot.

---

# 2. Core Demo Story

The primary demo should tell one compelling story:

A parent wants to find and register their child for a YMCA program.

Instead of forcing the parent to:

1. select a location
2. search a large program catalog
3. determine eligibility
4. determine whether membership is required
5. understand membership options
6. navigate separate registration steps

Y Concierge uses household context to guide the parent through the journey.

The experience should demonstrate:

Household → Child → Need → Recommendations → Program → Membership → Registration → Confirmation

---

# 3. Family-First Experience

This is a critical requirement.

The desired experience is FAMILY-FIRST, not LOCATION-FIRST.

The current registration-agent approach begins with a location and returns available classes.

The desired Y Concierge experience should instead:

1. identify the authenticated user
2. identify their household
3. identify eligible household members
4. know the household's primary YMCA location
5. ask who the parent is registering
6. understand what they are looking for
7. recommend programs for that specific child

The parent should NOT have to re-enter information the system would reasonably already know.

---

# 4. Demo Household

All information below is fictional demo data.

Parent:
Matt

Children:

Legend
Age: 5

Coast
Age: 2

The prototype should visually demonstrate that Y Concierge understands the household relationship.

Example:

"Hi Matt! I found your household. Who are we registering today?"

Then show selectable child cards.

---

# 5. Primary Demo Scenario

The parent asks:

"I want to find swim lessons for my son."

Y Concierge should NOT immediately guess what "swim lessons" means.

It should intelligently clarify the request.

Example:

"When you say swim lessons, what are you hoping Legend works on?"

Possible choices:

- Beginner / water confidence
- Learning basic strokes
- Improving existing swim skills
- I'm not sure

This demonstrates ambiguity handling.

---

# 6. Household Grounding

After selecting Legend, Y Concierge should demonstrate that it already knows relevant context.

For example:

"I've got Legend's age and your household's home Y, so you don't need to enter those again."

The experience should imply the future-state system could use:

- authenticated user
- Contact
- Account / household
- household members
- primary location

Do not imply that this prototype is actually retrieving Salesforce records.

---

# 7. Program Search

The future implementation is intended to search program/catalog information including:

- Course
- Course Session
- Course Option

The prototype should simulate this search.

Programs shown should:

- be active
- have registration availability
- fit the selected child's age
- respect relevant prerequisites
- be associated with an appropriate YMCA location

Do not build a real Salesforce integration.

Use fictional demo data.

---

# 8. Personalized Recommendations

This is one of the most important "wow" moments.

Do NOT simply show search results.

Y Concierge should transform results into recommendations.

Present three options:

1. Best Match
2. Second Match
3. Third Match

Each recommendation should include a short human-readable explanation of WHY it was recommended.

Recommendation factors may include:

- age fit
- skill / level fit
- schedule
- location proximity
- stated parent need

Example:

BEST MATCH

Swim Basics — Stage 1

Saturday · 9:00 AM
Carl E. Sanders Family YMCA

Why this fits Legend:
Beginner-friendly, designed for his age, available on weekends, and offered at your home Y.

The experience should visually distinguish the best recommendation.

---

# 9. Membership Requirement

Some programs may require an eligible membership.

When the parent selects the recommended program, Y Concierge should recognize this.

Do not simply show an error saying membership is required.

Instead, transition naturally into membership guidance.

Example:

"This program requires an eligible YMCA membership. I can help you find the best option for your family."

---

# 10. Membership Recommendations

The future implementation is intended to evaluate household composition and membership rules.

The prototype should demonstrate two recommendations:

BEST VALUE

Family Membership

and

LOWEST COST

An appropriate eligible alternative.

Each should include a brief explanation.

The recommendation experience should consider, conceptually:

- number of adults
- number of children
- ages
- relevant membership rules

All prices and membership details in the prototype must be clearly fictional/demo information unless explicitly supplied from an approved source.

---

# 11. Registration

After the parent selects the membership path, continue naturally into registration.

Show a confirmation summary including:

- child
- program
- location
- schedule
- membership selection

Then provide:

"Confirm Registration"

The prototype should simulate:

- capacity re-check
- duplicate enrollment check
- enrollment creation

These actions are NOT actually occurring.

After confirmation, display a polished success state.

Example:

"You're registered!"

Include a fictional confirmation number.

---

# 12. Broader Y Concierge Capabilities

The broader project scope also includes experiences such as:

- membership questions
- membership purchase journeys
- program and camp discovery
- program and camp registration
- financial assistance request intake
- FAQs
- outstanding balance inquiries
- payments
- contact information updates
- payment update pathways
- program cancellations
- membership cancellation intake
- case creation
- human escalation

These can appear as additional options in the interface.

However:

DO NOT attempt to fully build every journey in the first version.

The primary polished journey is:

Find Program → Personalized Recommendation → Membership → Registration.

---

# 13. Human Escalation

The broader experience should support escalation when the concierge cannot confidently resolve something.

Where appropriate, demonstrate behavior such as:

"I want to make sure we get this right. Would you like me to connect you with the Y team?"

Potential future-state action:

Create Salesforce Case

This prototype should only simulate that behavior.

---

# 14. UX Direction

This should NOT look like:

- a hackathon project
- a Salesforce setup screen
- a developer demo
- a generic chatbot
- ChatGPT with YMCA colors

It SHOULD feel like:

- YMCA of Metro Atlanta's consumer digital experience
- welcoming
- family-oriented
- simple
- modern
- trustworthy
- polished enough for an executive presentation

The concierge should be embedded naturally into the broader digital experience.

Use cards, progressive disclosure, transitions, status indicators and other modern interaction patterns where they improve the experience.

Mobile responsiveness is important.

---

# 15. Demo Presentation Requirements

This will be screen-shared during sales presentations.

Optimize accordingly.

Include:

- obvious starting point
- clean transitions
- readable text
- large clickable targets
- predictable happy path
- no dead ends
- no technical errors visible to the presenter
- restart demo button

The presenter should be able to reset the entire experience with one click.

---

# 16. Prototype Safety / Accuracy

Never imply that the prototype is connected to production systems.

Never use actual member data.

Never store credentials.

Never expose API keys.

Never process real payments.

Never represent simulated actions as completed Salesforce transactions.

Maintain the visible designation:

"Concept Prototype — Not a Live YMCA System"

Where appropriate, indicate that records, transactions and recommendations are simulated.

---

# 17. Technical Freedom

You may substantially refactor the existing prototype.

You may replace the existing single-file architecture if a better structure will materially improve:

- maintainability
- visual polish
- interactions
- responsiveness

However, preserve compatibility with simple web hosting.

Avoid unnecessary complexity.

The priority is an impressive, reliable SALES DEMO, not production application architecture.

---

# Definition of Done

The prototype is successful when a YMCA executive can watch the primary journey and immediately understand:

1. Y Concierge knows the family.
2. The parent doesn't have to navigate the YMCA catalog manually.
3. The concierge understands what the parent actually needs.
4. It recommends programs rather than merely returning search results.
5. It explains why those programs fit the child.
6. It recognizes when membership is required.
7. It intelligently recommends a membership path.
8. It guides the parent through registration.
9. The experience feels dramatically simpler than navigating multiple disconnected systems.
10. It is obvious that this is a future-state concept prototype rather than a functioning production integration.
