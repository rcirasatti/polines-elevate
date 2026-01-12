# Politeknik Negeri Semarang - Website Redesign

## Project Info

**Website**: https://polines.ac.id

## Development Setup

There are several ways of working with this project.

**Using Local IDE**

You can clone this repo and work locally using your preferred IDE.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Deploy to GitHub Pages (Automatic)

1. **Push to GitHub**:
   ```sh
   git add .
   git commit -m "Deploy website"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository → Settings → Pages
   - Under "Build and deployment", select:
     - Source: `GitHub Actions`
   - The workflow will automatically deploy when you push to `main`

3. **Access your site**:
   - Your site will be available at: `https://YOUR_USERNAME.github.io/polines-elevate/`

### Deploy Locally

To test the build locally:

```sh
npm run build
npm run preview
```

Then open `http://localhost:4173` in your browser.

### Connect Custom Domain

To connect a custom domain (e.g., polines.ac.id):

1. Go to Settings → Pages
2. Under "Custom domain", enter your domain
3. Update your domain's DNS records to point to GitHub Pages

Read more: [GitHub Pages Documentation](https://docs.github.com/en/pages)
