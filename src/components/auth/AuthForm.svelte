<style>
  .AuthForm {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    line-height: 1.5;
  }
  h2,
  h4 {
    margin: 0;
  }
  h2 {
    font-size: 1.3125rem;
    color: #343a40;
  }
  h4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #868e96;
  }
  section + section {
    margin-top: 2.5rem;
  }

  .foot {
    text-align: right;
  }

  span {
    margin-right: 0.25rem;
  }

  .link {
    display: inline-block;
    font-weight: bold;
    color: #12b886;
    cursor: pointer;
  }

  .link:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .Upper-Wrapper {
      margin-top: 2rem;
    }

    .foot {
      margin-top: 2rem;
    }
  }
</style>

<script>
  import AuthEmailForm from './AuthEmailForm.svelte';
  export let mode = 'REGISTER';

  let email = '';
  const onChangeEmail = e => {
    email = e.target.value;
  };

  $: modeText = mode === 'REGISTER' ? '회원가입' : '로그인';
</script>

<div class="AuthForm">
  <div class="Upper-Wrapper">
    <h2>{modeText}</h2>
    <section>
      <h4>이메일로 {modeText}</h4>
      <AuthEmailForm {mode} {email} on:keyup="{onChangeEmail}" />
    </section>
    <section>
      <h4>소셜 계정으로 {modeText}</h4>
    </section>
  </div>
  <div class="foot">
    <span>{mode === 'LOGIN' ? '아직 회원이 아니신가요?' : '계정이 이미 있으신가요?'}</span>
    <div class="link" tabIndex="{7}">{mode === 'LOGIN' ? '회원가입' : '로그인'}</div>
  </div>
</div>
