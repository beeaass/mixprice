<script lang="ts">
  import Header from './components/Header.svelte';
  import SearchResults from './components/SearchResults.svelte';
  import Table from './components/Table.svelte';
  import MobileWarning from './components/MobileWarning.svelte';
  import Preloader from './components/Preloader.svelte';
  let isLoaded = false;
  function handleLoaded() {
    isLoaded = true;
  }
</script>

{#if !isLoaded}
  <Preloader on:loaded={handleLoaded} />
{/if}

{#if isLoaded}
  <MobileWarning>
    <Header />
    <SearchResults />
    <Table jsonFilePath="Table.json" />
  </MobileWarning>
{/if}
