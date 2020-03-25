<style>

</style>

<script>
  import AuthModal from '../../components/auth/AuthModal.svelte';
  import AuthForm from '../../components/auth/AuthForm.svelte';
  import core from '../../stores/core.ts';

  const onClose = () => {
    core.closeAuthModal();
  };
</script>

<AuthModal visible="{$core.auth.visible}" on:close="{onClose}">
  <AuthForm mode="{$core.auth.mode}" />
</AuthModal>
