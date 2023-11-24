import React from 'react';
import Image from 'next/image';


import RockB from '../../public/Rock_B.png'
import PaperB from '../../public/Paper_B.png'
import ScissorsB from '../../public/Scissors_B.png'

interface ChallengerButtonProps {
  // プロパティの型などを定義
  id: Number;
  symbol: String;
}

const ChallengerButton: React.FC<ChallengerButtonProps> = (props) => {
  // コンポーネントの実装
  return (
    <div>
      {/* コンポーネントの内容 */}
      <button>
        <Image
          src={RockB}
          alt="Rock"
          width={100}
          height={24}
        />
      </button>
      <button>
        <Image
          src={PaperB}
          alt="Paper"
          width={100}
          height={24}
        />
      </button>
      <button>
        <Image
          src={ScissorsB}
          alt="Scissors"
          width={100}
          height={24}
        />
      </button>
    </div>
  );
};

export default ChallengerButton;