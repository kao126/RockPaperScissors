import { create } from 'zustand';

type State = {
  handSign: string | null;
};

type Action = {
  clickHandSign: (value: string) => void;
};

export const useHandSignStore = create<State & Action>((set) => ({
  handSign: null,
  clickHandSign: (value) => set(() => ({ handSign: value })),
}));
