<style>
  .block {
    display: flex;
    margin: -1rem;
    flex-wrap: wrap;
  }

  @media (max-width: 767px) {
    .block {
      margin: 0;
    }
  }
</style>

<script>
  import PostCard from './PostCard.svelte';
  import posts from '../../lib/fakeData.ts';
</script>

<div class="block">
  {#each posts as post, key}
    <PostCard {key} {post} />
  {/each}
</div>
