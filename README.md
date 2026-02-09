# GlueTemplate — a simple Express.js + TypeScript template

A lightweight starter template for building Express.js apps in TypeScript. It includes a ready-to-use folder structure, a sample API endpoint, a static frontend, basic CORS/HTTPS setup, and configuration files.

## Requirements
- Node.js 18+ (LTS recommended)

## Quick start
1. Install dependencies:
   ```bash
   npm install
   ```
   

2. Configure settings in `src/configs/settings.ts`:


3. (Optional) Environment variables:
   

4. Run the app in development mode:
   ```bash
   npm start
   ```
   

5. Open in your browser: `http://localhost:2137/` (or according to your `domain`/`PORT` settings).


## Endpoints
- `GET /` — serves the static page at `src/public/views/test.html`.
- `POST /api/test` — sample API endpoint.


## Project structure (short)
```
.
├─ src/
│  ├─ app.ts                     # Express app entry
│  ├─ configs/
│  │  ├─ settings.ts             # basic settings (PORT, CORS, HTTPS)
│  │  ├─ database.ts             # database config scaffold (if you use one)
│  │  ├─ ssl.ts                  # SSL certificates config (HTTPS)
│  │  ├─ example_secrets.env     # example environment variables
│  │  └─ secrets.env             # (optional) your variables
│  ├─ controllers/
│  │  └─ testController.ts       # logic for /api/test endpoint
│  ├─ routes/
│  │  └─ test.ts                 # router for POST /api/test
│  └─ public/
│     ├─ views/test.html         # simple test page
│     └─ js/GlueTemplate.js      # example frontend script
├─ package.json                  # npm scripts and dependencies
└─ tsconfig.json                 # TypeScript configuration
```


## HTTPS (optional)
1. Fill in certificates in `src/configs/ssl.ts` (key, cert, etc.).


2. Set `httpsMode` to `true` in `src/configs/settings.ts`.


3. In `src/app.ts`, uncomment the import and HTTPS server creation (and make sure the import path points to `./configs/ssl`).


## License

The MIT License (MIT). Please see [License File](../GlueTemplate4/LICENSE.md) for more information.



<p align="center">
Made with ❤ by <a href="https://github.com/Glueeeeed">Glueeed</a>
</p>