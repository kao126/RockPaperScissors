'use client';
import React from 'react';

import Button from '../commons/button';

import Rock from '/public/Rock.png';
import Paper from '/public/Paper.png';
import Scissors from '/public/Scissors.png';

import RockB from '/public/Rock_B.png';
import PaperB from '/public/Paper_B.png';
import ScissorsB from '/public/Scissors_B.png';
import useHandSignStore from '@/app/lib/store';

const HAND_SIGN_ARR = ['rock', 'paper', 'scissors'];

const Dealer = () => {
  const handSign = useHandSignStore((state) => state.handSign);
  const selectHandSign = (handSign: string, dealer: boolean) => {
    switch (handSign) {
      case 'rock':
        return dealer ? Rock : RockB;
      case 'paper':
        return dealer ? Paper : PaperB;
      case 'scissors':
        return dealer ? Scissors : ScissorsB;
      default:
        return dealer ? Rock : RockB;
    }
  };

  const randomHandSign =
    HAND_SIGN_ARR[Math.floor(Math.random() * HAND_SIGN_ARR.length)];

  return handSign ? (
    <div className="flex flex-col h-full justify-center items-center gap-y-36">
      <Button
        imageData={selectHandSign(randomHandSign, true)}
        value={randomHandSign}
        alt={randomHandSign}
        disable={true}
      />
      <Button
        imageData={selectHandSign(handSign, false)}
        value={handSign}
        alt={handSign}
        disable={true}
      />
    </div>
  ) : null;
};

export default Dealer;
