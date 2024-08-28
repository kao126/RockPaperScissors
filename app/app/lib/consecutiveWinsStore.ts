import { create } from 'zustand';

type State = {
  winsNum: number;
  clickCount: number;
};

type Action = {
  resetWins: () => void;
  changeClickCount: () => void;
  incrementWins: () => void;
};

const useConsecutiveWinsStore = create<State & Action>((set) => {
  const initialState = { winsNum: 0, clickCount: 0 };
  return {
    ...initialState,
    resetWins: () => set(initialState),
    changeClickCount: () =>
      set((state) => ({ clickCount: state.clickCount + 1 })),
    incrementWins: () => set((state) => ({ winsNum: state.winsNum + 1 })),
  };
});

export default useConsecutiveWinsStore;
