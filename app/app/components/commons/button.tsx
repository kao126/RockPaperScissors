'use client';
import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

import { useHandSignStore } from '../../lib/store';

type Props = {
  imageData: StaticImageData;
  value: string;
  alt: string;
  disable: boolean;
};

const Button = ({ imageData, value, alt, disable }: Props) => {
  const style = disable ? '' : 'active:translate-y-1';
  const handleButton = useHandSignStore((state) => state.clickHandSign);

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
