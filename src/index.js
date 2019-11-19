import App from './components/App.svelte';
import "./style.scss";

const app = new App({
  target: document.body,
  props: {
    name: 'ToDone',
  },
});

export default app;
