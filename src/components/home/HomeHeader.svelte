<style>
  .HomeHeader {
    height: 4rem;
  }

  .Header_Inner {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  /* your styles go here */
</style>

<script>
  import HomeResponsive from './HomeResposive.svelte';
  import Logo from '../../statics/svg/logo.svg';
  // your script goes here
  export let user: any | null = null;
</script>

<div class="HomeHeader">
  <div class="Header_Inner">
    <HomeResponsive>
      <Logo width="71" height="24" fill="none" />
      {#if !user}{:else}{/if}
    </HomeResponsive>
  </div>
</div>
<!-- markup (zero or more items) goes here -->
