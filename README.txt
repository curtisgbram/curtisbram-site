CurtisBram.com static site (no Squarespace)

This folder is a simple static replacement for your current Squarespace site.

Local preview options:
- Fastest: open index.html in your browser (some links that start with / may not work with the file:// protocol).
- Better: run a tiny local server in this folder:
    python3 -m http.server 8000
  Then open http://localhost:8000/

Important:
- PDFs like /s/poq.pdf are NOT included (except /s/CV.pdf). Put them in the /s/ folder if you want those links to work.
- If you don’t want to host publisher PDFs, edit publications/index.html and remove/replace the PDF links.

Deploy:
- Upload EVERYTHING in this folder to the root of your web host (so that index.html ends up at the site root, not inside a subfolder).
