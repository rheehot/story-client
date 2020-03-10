<style>
  /* your styles go here */
  .Responsive {
    width: 1728px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 1919px) {
    .Responsive {
      width: 1376px;
    }
  }

  @media (max-width: 1440px) {
    .Responsive {
      width: 1280px;
    }
  }

  @media (max-width: 1312px) {
    .Responsive {
      width: 912px;
    }
  }

  @media (max-width: 944px) {
    .Responsive {
      width: calc(100% - 2rem);
    }
  }

  @media (max-width: 767) {
    .Responsive {
      width: calc(100% - 2rem);
    }
  }
</style>

<script>
  // your script goes here
</script>

<div class="Responsive">
  <slot>
    <!-- responsive props-->
  </slot>
</div>
<!-- markup (zero or more items) goes here -->
