<script>
  import Contact from "./contact.svelte"
  export let contacts = []
</script>

<section>
{#each contacts as contact}
  <Contact name={contact.name} link={contact.link} />
{/each}
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
</style>
