<script>
  export let skills = []
</script>

<section>
  <h2>Skills</h2>
  <ul>
  {#each skills as skill}
    <li><span>{skill}</span></li>
  {/each}
  </ul>
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
      // background-color: transparent;
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
    ul {
      li {
        border: 0px;
        padding: 0px;
        display: list-item;
        list-style: square;
        color: var(--theme-color);
        span {
          color: var(--fg-color);
        }
      }
    }
  }
</style>
