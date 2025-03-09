<script lang="ts">
  import { onMount } from 'svelte';
  import type { Section } from '../scripts/table';
  import { loadSections } from '../scripts/table';

  export let jsonFilePath: string;

  let sections: Section[] = [];
  let error: string | null = null;

  onMount(async () => {
    try {
      sections = await loadSections(jsonFilePath);
    } catch (err: unknown) {
      if (err instanceof Error) {
        error = err.message;
      } else {
        error = 'Неизвестная ошибка';
      }
      console.error('Ошибка загрузки данных:', err);
    }
  });
</script>

{#if error}
  <p>Ошибка: {error}</p>
{/if}

{#each sections as section}
  <section class="section" id={section.id}>
    <h1 class="combo">{section.title}</h1>
    <table>
      <thead>
        <tr>
          <th>Предмет</th>
          <th>ID</th>
          <th>Количество</th>
          <th>Стоимость</th>
        </tr>
      </thead>
      <tbody>
        {#each section.items as item}
          <tr>
            <td>
              <img src={item.image} alt={item.name}> {item.name}
            </td>
            <td>{item.id}</td>
            <td>{item.quantity}</td>
            <td>
              {item.cost} <img src={item.costImage} alt="">
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </section>
{/each}