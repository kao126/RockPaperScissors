'use client';
import React from 'react';

import Button from '../commons/button';

import Rock from '/public/Rock.png';
import Paper from '/public/Paper.png';
import Scissors from '/public/Scissors.png';

import RockB from '/public/Rock_B.png';
import PaperB from '/public/Paper_B.png';
import ScissorsB from '/public/Scissors_B.png';
import { useHandSignStore } from '@/app/lib/store';

const Dealer = () => {
  const handSign = useHandSignStore((state) => state.handSign);
  const challengerHandSign = (handSign: string) => {
    switch (handSign) {
      case 'rock':
        return RockB;
      case 'paper':
        return PaperB;
      case 'scissors':
        return ScissorsB;
      default:
        return RockB;
    }
  };

  return handSign ? (
    <div className="flex flex-col h-full justify-center items-center gap-y-36">
      <Button imageData={Rock} value="rock" alt="グー" disable={true} />
      <Button
        imageData={challengerHandSign(handSign)}
        value={handSign}
        alt={handSign}
        disable={true}
      />
    </div>
  ) : null;
};

export default Dealer;
