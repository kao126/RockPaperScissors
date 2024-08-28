import { create } from 'zustand';

type State = {
  challengerHandSign: string | null;
  dealerHandSign: string | null;
};

type Action = {
  reset: () => void;
  changeChallengerHandSign: (value: string) => void;
  changeDealerHandSign: (value: string) => void;
};

const useHandSignStore = create<State & Action>((set) => {
  const initialState = { challengerHandSign: null, dealerHandSign: null };
  return {
    ...initialState,
    reset: () => set(initialState),
    changeChallengerHandSign: (value) =>
      set(() => ({ challengerHandSign: value })),
    changeDealerHandSign: (value) => set(() => ({ dealerHandSign: value })),
  };
});

export default useHandSignStore;
