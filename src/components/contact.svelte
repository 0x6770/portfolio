<script>
  export let name = ""
  export let link = ""
</script>

<a href={link}>{name}</a>

<style lang="scss">
  a {
    color: var(--theme-color);
    background-color: transparent;
    border: 0px;
    font-weight: 600;
  }
</style>
