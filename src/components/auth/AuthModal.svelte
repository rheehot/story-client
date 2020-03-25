<style>
  .AuthModal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
  }

  .Wrapper {
    width: 606px;
    height: 480px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
    display: flex;
    animation: popInFromBottom 0.4s forwards ease-in-out;
  }

  .Wrapper > .visible {
    animation: popOutToBottom 0.4s forwards ease-in-out;
  }

  .Gray_Block {
    width: 216px;
    background: #f1f3f5;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .Welcome {
    font-size: 2.25rem;
    margin-top: 1.5rem;
    color: #495057;
    text-align: center;
    font-weight: 400;
    font-size: 2rem;
  }

  .White_Block {
    flex: 1 1 0%;
    background: white;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
  }

  .Exit_Wrapper {
    display: flex;
    -moz-box-pack: end;
    justify-content: flex-end;
    color: rgb(134, 142, 150);
    margin-bottom: 2.25rem;
    cursor: pointer;
  }

  .Exit_Wrapper .icon {
    width: 25px;
    height: 25px;
  }

  .Block_Content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    .Wrapper {
      flex: 1;
      width: auto;
      height: 100%;
    }
    .Gray_Block {
      display: none;
    }

    .White_Block {
      overflow-y: auto;
    }
    .Exit_Wrapper {
      margin-bottom: 0;
    }
  }

  @keyframes popInFromBottom {
    0% {
      opacity: 0;
      transform: translateY(400px) scale(0.75);
    }
    75% {
      opacity: 1;
      transform: translateY(-16px) scale(1);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes popOutToBottom {
    0% {
      opacity: 1;
      transform: translateY(0px) scale(1);
    }
    100% {
      opacity: 0;
      transform: translateY(400px) scale(0.75);
    }
  }
</style>

<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import CloseIcon from 'svelte-icons/md/MdClose.svelte';
  import UndrawJoyride from '../../statics/svg/undraw_joyride_hnno.svg';
  // props
  export let visible;

  const dispatch = createEventDispatcher();

  let closed = true;
  onMount(() => {
    let timeoutId = null;
    if (visible) {
      closed = false;
    } else {
      timeoutId = setTimeout(() => {
        closed = true;
      }, 200);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  });

  const onCloseAction = () => {
    dispatch('close');
  };
</script>

{#if visible && closed}
  <div class="AuthModal" class:visible>
    <div class="Wrapper">
      <div class="Gray_Block">
        <div>
          <UndrawJoyride width="100%" height="100%" />
          <div class="Welcome">환영합니다!</div>
        </div>
      </div>
      <div class="White_Block">
        <div class="Exit_Wrapper">
          <div class="icon" on:click="{onCloseAction}">
            <CloseIcon />
          </div>
        </div>
        <div class="Block_Content">
          <slot>
            <!-- auth modal chilren -->
          </slot>
        </div>
      </div>
    </div>
  </div>
{/if}
