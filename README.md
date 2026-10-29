# The Listening Room

Study site for the M.Sc. counselling practical record.

- **Theory:** 16 viva topics from the record's Introduction to Counselling, each with key points, an animated diagram and the full text
- **Skills lab:** "name that skill" game built from the real counsellor turns
- **Case sessions:** Case 1 (5 sessions) and Case 2 (pro bono) as skill-tagged chat transcripts, skill charts, live supervisor prompts, reflections, and a progress view
- **Flashcards** (40) and **viva quiz** (30 questions, 15 per round)

Client first names are replaced with initials. The transcripts are still personal, so keep the repo **private** and don't deploy publicly without the clients' consent.

## Edit and rebuild

Edit `src/app.js`, `src/template.html` or `data/*.json`, then run `python3 build.py` to regenerate `index.html`.

## Deploy

Push to a private GitHub repo, then on vercel.com: Add New → Project → import → Framework "Other" → Deploy.
