<script>
export let title;
export let body;

let toggle = false;

const handleClick = function(event) {
  this.classList.toggle("active");
  let body = this.nextElementSibling;
  if (body.style.maxHeight) {
    body.style.maxHeight = null;
  } else {
    body.style.maxHeight = body.scrollHeight + "px";
  }
}
</script>

<style lang="scss">
@import 'src/styles/theme';

#shade {
  border: 1px solid black;
  overflow: hidden;
  & #title {
    grid-area: title;
    cursor: pointer;
    min-width: 300px;
    padding: 18px 18px;
    text-align: left;
    @include themed-background;
    &:after {
      content: '\02795';
      float: right;
    }
  }
  & button {
    grid-area: toggle;
  }
  & #body {
    grid-area: body;
    padding: 0 18px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    background-color: #f1f1f1;
    text-align: left;
  }

}
</style>

<div id="shade">
  <button on:click={handleClick} id="title">{title}</button>
  <div id="body">
    {body}
  </div>
</div>
