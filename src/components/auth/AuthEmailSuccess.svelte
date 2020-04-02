<style>
  .AuthEmailSuccess {
    display: flex;
    align-items: center;
    background: #c3fae8;
    border: 1px solid #96f2d7;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    height: 3rem;
    color: #0ca678;
  }
  .icon {
    width: 24px;
    height: 24px;
  }
  .description {
    font-size: 0.875rem;
    flex: 1;
    text-align: center;
  }
</style>

<script>
  import MdCheck from 'svelte-icons/md/MdCheck.svelte';
  export let registered;

  $: text = registered ? '로그인' : '회원가입';
</script>

<div class="AuthEmailSuccess">
  <div class="icon">
    <MdCheck />
  </div>
  <div class="description">{text} 링크가 이메일로 전송되었습니다.</div>
</div>
