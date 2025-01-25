<script>
    let { data } = $props()
    console.log(data)
</script>
Adatok az adatbázisból:<br>
{#each data.title as row}
    {row.nev}<br>
{/each}