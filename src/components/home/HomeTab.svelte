<style>
  .Wrapper {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .block {
    display: flex;
    position: relative;
    width: 14rem;
  }

  a {
    width: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.125rem;
    text-decoration: none;
    color: #868e96;
    height: 3rem;
  }

  :global(a.active) {
    color: #343a40;
    font-weight: bold;
  }

  .icon {
    width: 24px;
    margin-right: 0.5rem;
  }

  .indicator {
    width: 50%;
    height: 2px;
    position: absolute;
    bottom: 0px;
    background: #343a40;
  }

  @media (max-width: 944px) {
    .block {
      width: 10rem;
    }

    a {
      font-size: 1rem;
      width: 5rem;
    }
    .icon {
      width: 20px;
    }
  }
</style>

<script>
  import { spring } from 'svelte/motion';
  import { link, location } from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';
  import MdTrendingUp from 'svelte-icons/md/MdTrendingUp.svelte';
  import MdAccessTime from 'svelte-icons/md/MdAccessTime.svelte';

  let size = spring(50, {
    stiffness: 0.1,
    damping: 0.25,
  });

  $: $location === '/' ? size.set(0) : size.set(50);
</script>

<div class="Wrapper">
  <div class="block">
    <a href="/" use:link use:active="{{ path: '/', className: 'active' }}">
      <div class="icon">
        <MdTrendingUp />
      </div>
      트렌딩
    </a>
    <a href="/recent" use:link use:active="{{ path: '/recent', className: 'active' }}">
      <div class="icon">
        <MdAccessTime />
      </div>
      최신
    </a>
    <div class="indicator" style="left:{$size}%;"></div>
  </div>
  <!-- 모바일로 변경 컴포넌트 생성 -->
</div>
