import {create} from 'zustand';

type State = {
  userOptions: any | null;
};

type Action = {
  removeUserOptions: () => void;
  updateOptions: (userOptions: State['userOptions']) => void;
};

export const useStore = create<State & Action>(set => ({
  userOptions: null,
  removeUserOptions: () => set({userOptions: null}),
  updateOptions: (state: any) => set({userOptions: state}),
}));
