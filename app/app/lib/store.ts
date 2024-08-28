import { create } from 'zustand';

type State = {
  reset: () => void;
  handSign: string | null;
};

type Action = {
  clickHandSign: (value: string) => void;
};

const useHandSignStore = create<State & Action>((set) => {
  const initialState = { handSign: null };
  return {
    ...initialState,
    reset: () => set(() => initialState),
    clickHandSign: (value) => set(() => ({ handSign: value })),
  };
});

export default useHandSignStore;
