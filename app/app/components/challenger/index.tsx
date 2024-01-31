import React from 'react';

import RockB from '/public/Rock_B.png'
import PaperB from '/public/Paper_B.png'
import ScissorsB from '/public/Scissors_B.png'

import Button from '../commons/button';

const Challenger = () => {
  // コンポーネントの実装
  return (
    <div className='w-3/4 h-full flex justify-evenly my-0 mx-auto'>
      <Button imageData={RockB} disable={false} />
      <Button imageData={PaperB} disable={false} />
      <Button imageData={ScissorsB} disable={false} />
    </div>
  );
};

export default Challenger;