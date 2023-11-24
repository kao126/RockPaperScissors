import React from 'react';
import Image from 'next/image';


import Rock from '../../public/Rock.png'
import Paper from '../../public/Paper.png'
import Scissors from '../../public/Scissors.png'

interface ButtonProps {
  // プロパティの型などを定義
  // id: Number;
  // symbol: String;
}

const Button: React.FC<ButtonProps> = (props) => {
  // コンポーネントの実装
  return (
    <div>
      {/* コンポーネントの内容 */}
      <button>
        <Image
          src={Rock}
          alt="Rock"
          width={100}
          height={24}
        />
      </button>
      <button>
        <Image
          src={Paper}
          alt="Paper"
          width={100}
          height={24}
        />
      </button>
      <button>
        <Image
          src={Scissors}
          alt="Scissors"
          width={100}
          height={24}
        />
      </button>
    </div>
  );
};

export default Button;