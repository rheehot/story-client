<script>
  import AuthModal from '../../components/auth/AuthModal.svelte';
  import AuthForm from '../../components/auth/AuthForm.svelte';
  import core from '../../stores/core.ts';
  import { sendAuthEmail } from '../../lib/apis/auth.ts';

  let registered = null;

  const onClose = () => {
    core.closeAuthModal();
  };

  const onToggleModel = event => {
    core.changeAuthModalMode(event.detail.nextMode);
  };

  const onSendAuthEmail = async event => {
    const { email } = event.detail;
    const { data } = await sendAuthEmail(email);
    registered = data && data.registered;
  };
</script>

<AuthModal visible="{$core.auth.visible}" on:close="{onClose}">
  <AuthForm
    {registered}
    mode="{$core.auth.mode}"
    on:toggleModel="{onToggleModel}"
    on:sendAuthEmail="{onSendAuthEmail}"
  />
</AuthModal>
