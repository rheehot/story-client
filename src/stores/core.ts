import { writable } from 'svelte/store';

export type AuthMode = 'REGISTER' | 'LOGIN';
export type CurrentUser = {
  id: string;
  username: string;
  profile: {
    id: string;
    thumbnail: string | null;
    displayName: string;
  };
  email: string;
};

interface CoreState {
  layer: boolean;
  auth: {
    visible: boolean;
    mode: AuthMode;
  };
  user: CurrentUser | null;
  popup: {
    title: string | undefined;
    message: string;
    visible: boolean;
  };
}

const initialState: CoreState = {
  layer: false,
  auth: {
    visible: false,
    mode: 'LOGIN',
  },
  user: null,
  popup: {
    visible: false,
    title: '',
    message: '',
  },
};

// example
// export const double = derived(count, ($count, set) => {
//   fetch(`https://jsonplaceholder.typicode.com/todos/${$count}`)
//     .then(response => response.json())
//     .then(json => set(json.title));
// });

function coreState() {
  const { update, subscribe } = writable(initialState);
  return {
    subscribe,
    closeAuthModal: () =>
      update(state => ({
        ...state,
        layer: false,
        auth: {
          mode: 'LOGIN',
          visible: false,
        },
      })),
    showAuthModal: (mode: AuthMode) =>
      update(state => ({
        ...state,
        layer: true,
        auth: {
          mode,
          visible: true,
        },
      })),
    changeAuthModalMode: (nextMode: AuthMode) =>
      update(state => ({
        ...state,
        auth: {
          mode: nextMode,
          visible: state.auth.visible,
        },
      })),
  };
}

const core = coreState();
export default core;
