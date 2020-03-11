<script>
  import { onMount } from 'svelte';
  onMount(() => {
    document.body.style.backgroundColor = '#F8F9FA';
  });
  // your script goes here
</script>

<div class="HomeTemplate">
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
<!-- markup (zero or more items) goes here -->
