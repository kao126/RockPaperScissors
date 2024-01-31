import React from 'react';

import Button from '../commons/button';

import Rock from '/public/Rock.png'
import Paper from '/public/Paper.png'
import Scissors from '/public/Scissors.png'

import RockB from '/public/Rock_B.png'
import PaperB from '/public/Paper_B.png'
import ScissorsB from '/public/Scissors_B.png'



const Dealer = () => {
  return (
    <div className='flex flex-col h-full justify-center items-center gap-y-36'>
      <Button imageData={Rock} alt="グー" disable={true} />
      <Button imageData={PaperB} alt="パー" disable={true} />
      {/* <Button imageData={Scissors} /> */}
    </div>
  );
};

export default Dealer;