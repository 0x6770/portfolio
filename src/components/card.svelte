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
  <div class="detail">{@html mdlink(content)}</div>
</div>

<style lang="scss">
  .card {
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
        text-decoration: underline;
        margin-bottom: 1px;
      }
    }
    .detail {
    }
  }
</style>
