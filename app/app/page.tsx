import React from 'react';

import Header from './components/commons/header';
import Dealer from './components/dealer';
import Footer from './components/commons/footer';

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen max-w-screen-lg my-0 mx-auto text-center">
      <Header />
      <main className='h-full bg-slate-50'>
        <Dealer />
      </main>
      <Footer />
    </div>
  )
}
