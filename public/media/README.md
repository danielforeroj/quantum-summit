# Media Partner Logos

Use this folder for all media partner logos displayed on the main landing page.

## Where to upload files (GitHub web UI)
1. Open this repository on GitHub.
2. Navigate to `public/media/`.
3. Click **Add file** → **Upload files**.
4. Upload your logo files and commit directly to your branch.

## Recommended file rules
- Prefer SVG (best), PNG, or WebP.
- Use lowercase, hyphenated filenames (example: `blockchain-news.svg`).
- Keep transparent backgrounds for PNG/WebP.

## How to make a logo appear on the site
After uploading the logo file, edit `src/data/mediaPartners.ts` and add a new item:

```ts
{
  name: "Partner Name",
  logoSrc: "/media/your-file-name.svg",
  href: "https://partner-site.com" // optional
}
```

- `name` is used for alt text and fallback text.
- `logoSrc` must point to `/media/<filename>`.
- `href` is optional; include only if you want the logo to be clickable.
