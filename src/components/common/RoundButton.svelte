<style>
  .Round_Button {
    background: none;
    border: none;
    outline: none;
    font-weight: bold;
    word-break: keep-all;
    transition: 0.125s all ease-in;
    cursor: pointer;

    height: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    border-radius: 1rem;
    margin: 0px;

    background: #343a40;
    color: white;
  }

  .Round_Button:hover {
    background: #868e96;
  }

  .Round_Button:focus {
    box-shadow: 0px 2px 12px #00000030;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  import { push } from 'svelte-spa-router';

  export const to = '';
  const dispatch = createEventDispatcher();

  const onDispatchAction = () => {
    dispatch('dispatch');
  };

  const onRouteClick = () => {
    push(to);
  };
</script>

{#if to}
  <button type="button" class="Round_Button" on:click="{onRouteClick}">
    <slot />
  </button>
{:else}
  <button type="button" class="Round_Button" on:click="{onDispatchAction}">
    <slot />
  </button>
{/if}
<!-- markup (zero or more items) goes here -->
