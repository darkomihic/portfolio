# mihic.dev

Personal portfolio of Darko Mihić, styled as a Windows 98 desktop. Built with React, TypeScript and Vite.

- **Desktop:** click an icon to open its window; drag windows by the title bar, click to bring one to the front, close with the X button (or Escape).
- **Phone (< 768px):** icons sit in a two-column grid and windows open fixed in place.

## Development

```bash
npm install
npm run dev
```

`npm run build` type-checks and outputs the production build to `dist/`.

## Where things live

- `src/data/` — projects, work experience and education content
- `src/windows/` — one component per window
- `src/components/Window.tsx` — window chrome, dragging and the phone layout
- `public/` — icons and images exported from the Figma design
