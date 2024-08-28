'use client';
import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import useHandSignStore from '@/app/lib/handSignStore';
import useConsecutiveWinsStore from '@/app/lib/consecutiveWinsStore';

type Props = {
  imageData: StaticImageData;
  value: string;
  alt: string;
  disable: boolean;
};

const HAND_SIGN_ARR = ['rock', 'paper', 'scissors'];

const Button = ({ imageData, value, alt, disable }: Props) => {
  const style = disable ? '' : 'active:translate-y-1';
  const { changeChallengerHandSign, changeDealerHandSign } = useHandSignStore();
  const { changeClickCount } = useConsecutiveWinsStore();

  const handleButton = (clickHandSign: string) => {
    const randomHandSign =
      HAND_SIGN_ARR[Math.floor(Math.random() * HAND_SIGN_ARR.length)];
    changeChallengerHandSign(clickHandSign);
    changeDealerHandSign(randomHandSign);
    changeClickCount();
  };

  return (
    <button
      className={style}
      disabled={disable}
      value={value}
      onClick={() => handleButton(value)}
    >
      <Image src={imageData} alt={alt} className="rounded-full shadow-md" />
    </button>
  );
};

export default Button;
