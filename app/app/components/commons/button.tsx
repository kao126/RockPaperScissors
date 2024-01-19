import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from "next/image";

type Props = {
  imageData: StaticImageData;
  disable: Boolean;
};


const Button = ({ imageData, disable }: Props) => {
  return (
    <button disabled={false} >
      <Image
        src={imageData}
        alt="RCP"
        className='rounded-full shadow-md'
      />
    </button>
  );
};

export default Button;