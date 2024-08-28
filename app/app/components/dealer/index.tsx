'use client';
import React, { useEffect } from 'react';

import Button from '../commons/button';
import useHandSignStore from '@/app/lib/handSignStore';

import Rock from '/public/Rock.png';
import Paper from '/public/Paper.png';
import Scissors from '/public/Scissors.png';

import RockB from '/public/Rock_B.png';
import PaperB from '/public/Paper_B.png';
import ScissorsB from '/public/Scissors_B.png';
import useConsecutiveWinsStore from '@/app/lib/consecutiveWinsStore';

const Dealer = () => {
  const { challengerHandSign, dealerHandSign } = useHandSignStore();
  const { resetWins, clickCount, incrementWins } = useConsecutiveWinsStore();

  useEffect(() => {
    console.log(Boolean(challengerHandSign && dealerHandSign));

    Boolean(challengerHandSign && dealerHandSign)
      ? judgeResult(challengerHandSign, dealerHandSign)
      : null;
  }, [clickCount]);

  const judgeResult = (challenger: string | null, dealer: string | null) => {
    // 勝敗なし（あいこ）
    if (challenger == dealer) {
      return;
    }

    // 勝敗あり
    switch (challenger) {
      case 'rock':
        if (dealer == 'scissors') {
          return incrementWins();
        } else {
          return resetWins();
        }
      case 'paper':
        if (dealer == 'rock') {
          return incrementWins();
        } else {
          return resetWins();
        }
      case 'scissors':
        if (dealer == 'paper') {
          return incrementWins();
        } else {
          return resetWins();
        }
      default:
        return;
    }
  };

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

  return challengerHandSign && dealerHandSign ? (
    <div className="flex flex-col h-full justify-center items-center gap-y-36">
      <Button
        imageData={selectHandSign(dealerHandSign, true)}
        value={dealerHandSign}
        alt={dealerHandSign}
        disable={true}
      />
      <Button
        imageData={selectHandSign(challengerHandSign, false)}
        value={challengerHandSign}
        alt={challengerHandSign}
        disable={true}
      />
    </div>
  ) : null;
};

export default Dealer;
