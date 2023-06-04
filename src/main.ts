import { setLocalStorage } from 'utils/LocalStorage';
import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
})

export default app

setLocalStorage('last-visit', Date.now());