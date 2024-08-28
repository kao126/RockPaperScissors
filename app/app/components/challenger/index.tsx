import React from 'react';

import RockB from '/public/Rock_B.png';
import PaperB from '/public/Paper_B.png';
import ScissorsB from '/public/Scissors_B.png';

import Button from '../commons/button';

const Challenger = () => {
  // コンポーネントの実装
  return (
    <div className="w-full h-full flex justify-center gap-4 my-0 mx-auto">
      <Button imageData={RockB} value="rock" alt="グー" disable={false} />
      <Button imageData={PaperB} value="paper"  alt="パー" disable={false} />
      <Button imageData={ScissorsB} value="scissors" alt="チョキ" disable={false} />
    </div>
  );
};

export default Challenger;
