<script>
  export let name = ""
  export let link = ""
</script>

{#if (link == "")}
  <a>{name}</a>
{:else}
  <a href={link}>{name}</a>
{/if}

<style lang="scss">
  a {
    font-weight: 600;
  }
</style>
