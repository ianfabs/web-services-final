<script>
  import Manager from './Manager.svelte';
  import Shade from './Shade.svelte';
  export let name;
</script>

<style>
  h1 {
    text-align: center;
  }
  span {
    font-family: 'Courier New', sans-serif;
    background: #F2F3F9;
    border-radius: 5px;
    padding: 8px 20px;
    box-shadow: inset 0px 0px 10px -5px #2E2E2E;
  }
</style>

<h1>Welcome to <i>{name}</i>!</h1>

<span>With <b><i>ToDone!</i></b> You'll be able to manage todos faster than you can think!</span>
<br/>
<Shade
  title={"Get cat litter"}
  body={"The cats are out of litter."}
/>
