<style>

</style>

<script>
  import { beforeUpdate } from 'svelte';
  import AuthModal from '../../components/auth/AuthModal.svelte';
  import core from '../../stores/core.ts';
</script>

<AuthModal visible="{$core.auth.visible}">AuthModalContainer</AuthModal>
