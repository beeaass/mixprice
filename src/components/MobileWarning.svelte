<script lang="ts">
  import { onMount } from 'svelte';
  import { checkMobile, showMobileWarning } from '../scripts/mobileWarning';

  onMount(() => {
    if (checkMobile()) {
      showMobileWarning();
    }
  });
</script>
<slot></slot>
