<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';
    import { simulateLoading } from '../scripts/loader';
    const dispatch = createEventDispatcher();
    let isFadingOut = false;
    onMount(() => {
      simulateLoading(() => {
        isFadingOut = true;
        setTimeout(() => {
          dispatch('loaded');
        }, 300);
      });
    });
  </script>
  
  <div class="preloader" class:is-fading-out={isFadingOut}>
    <div class="spinner">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  
  