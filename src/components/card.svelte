<script>
  import Duration from "./duration.svelte"
  export let title = ""
  export let subtitle = ""
  export let content = ""
  export let start = ""
  export let end = ""

  const mdlink = (data) => {
    let re = /\[([\w\s\d/-]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#-]+)\)/g
    let result = data.replaceAll(re, "<a href='$2'>$1</a>");
    return result;
  }
</script>

<div class="card">
  <div class="info">
    <div class="primary">{title}</div>
    <div class="secondary">{@html mdlink(subtitle)}</div>
    {#if (start != "")} 
      <Duration start={start} end={end}/>
    {/if}
  </div>
  <div>{@html mdlink(content)}</div>
</div>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    color: var(--fg-color);
    padding: 10px;
    border-radius: 10px;
    border: 1px solid var(--fg-color2);
    .info {
      display: flex;
      flex-direction: column;
      margin-bottom: 5px;
      .primary {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1px;
      }
      .secondary {
        font-style: oblique;
        margin-bottom: 1px;
      }
      .duration {
        color: var(--fg-color2);
        width: fit-content;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
      }
    }
    .detail {
    }
  }
</style>
