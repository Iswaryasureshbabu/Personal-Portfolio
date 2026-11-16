# Iswarya S — Portfolio (React + Vite)

A responsive software developer portfolio with light/dark themes, filterable projects, an education timeline, internship experience and certification cards.

## Folder structure
```
index.html              page title, meta description, favicon, pre-paint theme script
vite.config.js          base './' so it deploys to GitHub Pages or Vercel
public/
  Iswarya_S_Resume.pdf  resume download target
  favicon.svg
  profile.jpg           default profile photo
  projects/             project thumbnails / covers
src/
  data.js               ALL content: profile, education, skills, projects, experience, certifications
  styles.css            light + dark design tokens and all styles
  App.jsx               theme state (localStorage + system preference), page layout, footer
  components/           Header, Hero, Sections (About..Certifications), Contact, ui helpers
```

## Run locally
```
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview
```

## Replace the profile photo
Either:
1. Save a portrait (about 4:5, under 1.5 MB) as `public/profile.jpg` and refresh, or
2. Use the **Upload photo** button in the hero to save a photo in the browser (localStorage).

To use another default file name, change `photo` in `src/data.js`.

## Add or edit projects
All project content is in the `projects` array in `src/data.js`. Each project supports:
- `title`, `category`, `desc`, `tech`, `image`, `github`, `demo`, `note`
- Categories used by the filters: `Web Development`, `Full Stack`, `UI/UX` (see `projectFilters`)

Add a new object to the array and it appears automatically in the cards and filters.

Project thumbnails live in `public/projects/`. Recommended size: 1200 x 750. Set `image: 'projects/file-name.png'`. If `demo` is `null`, only the GitHub button is shown.

## Update the resume
Replace `public/Iswarya_S_Resume.pdf` with the new file, keeping the same name.

## Deploy
**Vercel:** push the folder to GitHub, import the repo at vercel.com. Framework preset "Vite" is detected automatically.

**GitHub Pages:** push to GitHub, then Settings > Pages > Source: GitHub Actions, and use the "Vite static site" workflow template (build command `npm run build`, publish folder `dist`). Because `base` is `./`, no repo-name config is needed.

## Contact form
There is no backend. Submitting validates the fields, then opens the visitor's email app with a pre-filled message (mailto). For direct delivery, add a service such as Formspree later.
"# Personal-Portfolio" 
