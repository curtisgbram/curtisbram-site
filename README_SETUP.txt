Curtis Bram static site rebuild
===============================

What is inside
--------------
- index.html and 5 subpages matching the old site structure
- assets/css/styles.css and assets/js/site.js
- assets/img/ with the headshot and media image used on the old site
- s/ with CV.pdf plus the four publication PDFs that were directly linked on the old publications page
- CNAME already set to www.curtisbram.com
- .nojekyll so GitHub Pages serves the files as plain static assets

Critical note
-------------
This build is made to work in both places:
1. the temporary GitHub Pages repo URL (username.github.io/repo-name/)
2. the final custom domain (www.curtisbram.com)

That means you should upload the FILES themselves to the repo root.
Do not upload one extra outer folder level.

Fastest clean setup
-------------------
1. Make a brand-new public GitHub repo.
2. Upload every file from this folder to the repo root.
3. GitHub -> Settings -> Pages -> Deploy from a branch -> main -> /(root)
4. GitHub -> Settings -> Pages -> Custom domain -> www.curtisbram.com
5. In GoDaddy DNS, add the four apex A records and set www as a CNAME to your GitHub Pages default domain.

If the preview URL looks wrong, the usual cause is that the repo contains an extra outer folder.
You want index.html visible immediately at the top level of the repo.
