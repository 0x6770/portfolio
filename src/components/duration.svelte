<script>
  export let start = ""
  export let end = ""

  const options = {year: 'numeric', month: 'long'};

  const formatDate = (_date) => {
    const date = new Date(_date);
    const  dateFormat = new Intl.DateTimeFormat('en-US', options);
    return dateFormat.format(date);
  };
</script>

<div>
  {formatDate(start)} - {formatDate(end)}
</div>

<style lang="scss">
  div {
    font-style: oblique;
  }
</style>
