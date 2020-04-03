<style>
  .block {
    display: flex;
    margin-top: 2rem;
  }

  main {
    flex: 1;
  }

  aside {
    margin-left: 6rem;
    width: 16rem;
  }

  @media (max-width: 1440px) {
    aside {
      margin-left: 3rem;
      width: 12rem;
    }
  }

  @media (max-width: 944px) {
    aside {
      display: none;
    }
  }
</style>

<script>

</script>

<div class="block">
  <main>
    <slot name="main">
      <!-- optional fallback -->
    </slot>
  </main>
  <aside>
    <slot name="side">
      <!-- optional fallback -->
    </slot>
  </aside>
</div>
