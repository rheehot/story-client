<style>
  .MainResponsive {
    width: 1728px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 1919px) {
    .MainResponsive {
      width: 1376px;
    }
  }

  @media (max-width: 1440px) {
    .MainResponsive {
      width: 1280px;
    }
  }

  @media (max-width: 1312px) {
    .MainResponsive {
      width: 912px;
    }
  }

  @media (max-width: 944px) {
    .MainResponsive {
      width: calc(100% - 2rem);
    }
  }

  @media (max-width: 767) {
    .MainResponsive {
      width: calc(100% - 2rem);
    }
  }
</style>

<script>

</script>

<div class="MainResponsive">
  <slot>
    <!-- children Main -->
  </slot>
</div>
