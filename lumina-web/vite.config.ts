import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves project sites at https://<user>.github.io/<repo>/
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const githubPagesBase =
  process.env.GITHUB_ACTIONS && repoName ? `/${repoName}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  base: githubPagesBase,
  plugins: [react()],
})
