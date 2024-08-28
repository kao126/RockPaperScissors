'use client';
import React from 'react';
import useConsecutiveWinsStore from '@/app/lib/consecutiveWinsStore';

const Count = () => {
  const { winsNum } = useConsecutiveWinsStore();

  return <div>{winsNum}連勝</div>;
};

export default Count;
