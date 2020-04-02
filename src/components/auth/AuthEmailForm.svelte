<style>
  .AuthEmailForm {
    width: 100%;
    display: flex;
    height: 3rem;
  }

  input {
    flex: 1;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    padding: 1rem;
    font-size: 1rem;
    border: 1px solid #dee2e6;
    border-right: none;
  }

  input::placeholder {
    color: #868e96;
  }

  input:disabled {
    background: #f1f3f5;
  }

  button {
    background: #12b886;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    outline: none;
    border: none;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    width: 6rem;
    word-break: keep-all;
    cursor: pointer;
  }

  button:hover {
    background: #12b886;
  }

  button:focus {
    background: #12b886;
  }

  button:disabled {
    background: #adb5bd;
    color: #dee2e6;
    cursor: default;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let mode = '';
  export let email = '';
</script>

<form class="AuthEmailForm" on:submit|preventDefault>
  <input tabIndex="{2}" value="{email}" placeholder="이메일을 입력하세요." on:keyup />
  <button tabIndex="{3}">{mode === 'REGISTER' ? '회원가입' : '로그인'}</button>
</form>
