import lumina from './lumina-web/vite.config'

// Ao rodar `npx vite` na raiz do repo, aponta o projeto para lumina-web.
export default {
  ...lumina,
  root: 'lumina-web',
}
