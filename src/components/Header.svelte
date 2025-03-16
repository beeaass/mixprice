<script lang="ts">
  import { onMount } from 'svelte';
  import { initThemeToggle } from '../scripts/theme';
  import { initSearch } from '../scripts/search'
  import { initializeNavigation } from '../scripts/sidebar';

  onMount(() => {
    initSearch();
    initThemeToggle();
    initializeNavigation();
  });
</script>
  
<div class="header">
  <input class="search-bar" type="text" id="searchInput" placeholder="Поиск...">
  <div class="sidebar">
    <ul>
      <li><a href="#AdvancedSolarPanel"><img src="./images/bar/advslr.png" alt="Advanced Solar Panel"><span>Advanced Solar Panel</span></a></li>
      <li><a href="#IndustrialCraft"><img src="./images/bar/ic2.png" alt="Industrial Craft"><span>Industrial Craft</span></a></li>
      <li><a href="#GraviSuite"><img src="./images/bar/GraviSuite.png" alt="GraviSuite"><span>GraviSuite</span></a></li>
      <li><a href="#AppliedEnergistics"><img src="./images/bar/ae2.png" alt="Applied Energistics"><span>Applied Energistics</span></a></li>
      <li><a href="#CompactWindmils"><img src="./images/bar/CompactWindmils.png" alt="Compact Windmils"><span>Compact Windmils</span></a></li>
      <li><a href="#ChargePads"><img src="./images/bar/ChargePads.png" alt="Charge Pads"><span>Charge Pads</span></a></li>
      <li><a href="#BuildCraft"><img src="./images/bar/BuildCraft.png" alt="BuildCraft"><span>BuildCraft</span></a></li>
      <li><a href="#ComboArmors"><img src="./images/bar/ComboArmors.png" alt="Combo Armors"><span>Combo Armors</span></a></li>
      <li><a href="#BaseResource"><img src="./images/bar/BaseResource.png" alt="Base Resource"><span>Base Resource</span></a></li>
      <li><a href="#Exchange"><img src="./images/bar/Exchange.png" alt="Exchange"><span>Обмен руд</span></a></li>
    </ul>
  </div>
  <div id="themeToggle" class="toggle">
    <div class="toggle-knob"></div>
  </div>  
</div>


