<script>
  import Router from 'svelte-spa-router';
  import HomePage from './pages/home/HomePage.svelte';
  import Core from './containers/base/Core.svelte';

  const routes = {
    '/:mode?': HomePage,
  };
</script>

<Router {routes} />
<Core />
