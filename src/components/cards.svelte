<script>
  import Card from "./card.svelte"
  export let cards = []
  export let title = ""
</script>

<section>
  <h2>{title}</h2>
  <div class="cards">
  {#each cards as card}
    <Card 
      title={card.title} 
      subtitle={card.subtitle} 
      content={card.content}
      start={card.start}
      end={card.end}
    />
  {/each}
  </div>
</section>

<style lang="scss">
  section {
    margin-bottom: 10px;
    .cards {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    h2 {
      position: relative;
      width: fit-content;
      opacity: 0.999;
      &:after {
        content: "";
        position: absolute;
        z-index: -1;
        top: 65%;
        left: -5%;
        width: 110%;
        height: 35%;
        background-color: var(--theme-color);
        opacity: 0.75;
      }
    }
  }
</style>
