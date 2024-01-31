import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from "next/image";

type Props = {
  imageData: StaticImageData;
  alt: string;
  disable: boolean;
};

const Button = ({ imageData, alt, disable }: Props) => {
  return (
    <button
      disabled={disable}
    >
      <Image
        src={imageData}
        alt={alt}
        className='rounded-full shadow-md'
      />
    </button>
  );
};

export default Button;