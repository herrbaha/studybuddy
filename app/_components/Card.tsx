import React from 'react';
import { cardDataType } from 'app/types/types';

interface CardProps {
  dashCardData: cardDataType[];
}

const Card: React.FC<CardProps> = ({ dashCardData }) => {
  return (
    <div className='flex justify-between gap-2 my-2'>
      {dashCardData.map((card, index) => (
        <div key={index} className='w-3/12 float-left my-auto'>
          <h3 className='text-center font-bold bg-customBlue text-white'>
            {card.cardHeader}
          </h3>
          <p className='text-center bg-slate-200'>
            {card.cardBody}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Card;
