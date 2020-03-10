<style>
  .Header_Right {
    display: flex;
    align-items: center;
    position: relative;
  }

  @media (max-width: 376) {
    .write-button {
      display: none;
    }
  }
  /* your styles go here */
</style>

<script>
  // your script goes here
</script>

<div class="Header_Right">
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
<!-- markup (zero or more items) goes here -->
