<style>
  .HomeHeader {
    height: 4rem;
  }

  .Header_Right {
    display: flex;
    align-items: center;
    position: relative;
  }

  @media (max-width: 376) {
    .Header_Right .write-button {
      display: none;
    }
  }

  .Search_Button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    outline: none;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 0.75rem;
  }

  .Search_Button:hover {
    background: rgba(0, 0, 0, 0.045);
  }
</style>

<script>
  import RouterLink from '@spaceavocado/svelte-router/component/link';
  import HomeResponsive from './HomeResposive.svelte';
  import RoundButton from '../common/RoundButton.svelte';

  import core from '../../stores/core.ts';

  import Logo from '../../statics/svg/logo.svg';
  import Search2 from '../../statics/svg/search2.svg';

  const onLoginClick = () => {
    core.showAuthModal('LOGIN');
  };
</script>

<div class="HomeHeader">
  <HomeResponsive>
    <Logo width="71" height="24" fill="none" />
    {#if !$core.user}
      <div class="Header_Right">
        <div class="Search_Button">
          <RouterLink to="/search">
            <Search2 width="17" height="17" viewBox="0 0 17 17" />
          </RouterLink>
        </div>
        <RoundButton on:dispatch="{onLoginClick}">로그인</RoundButton>
      </div>
    {:else}
      <div class="Header_Right">오른쪽</div>
    {/if}
  </HomeResponsive>
</div>
<!-- markup (zero or more items) goes here -->
