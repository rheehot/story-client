<style>
  /* your styles go here */
</style>

<script>
  import HomeTemplate from '../../components/home/HomeTemplate.svelte';
  import HomeHeader from '../../components/home/HomeHeader.svelte';
  import MainResponsive from '../../components/main/MainResponsive.svelte';
  import HomeTab from '../../components/home/HomeTab.svelte';
  import HomeLayout from '../../components/home/HomeLayout.svelte';

  import TrendingPostsPage from './TrendingPostsPage.svelte';
  // your script goes here
</script>

<!-- markup (zero or more items) goes here -->
<HomeTemplate>
  <HomeHeader />
  <MainResponsive>
    <HomeTab />
    <HomeLayout>
      <div slot="main">
        <TrendingPostsPage />
      </div>
      <div slot="side">사이드</div>
    </HomeLayout>
  </MainResponsive>
</HomeTemplate>
