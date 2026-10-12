"use client"

import { use } from 'react';

import { ToastContainer } from 'react-toastify';
import Wallets from '@/components/Wallets';
import RecoverySecretCard from '@/components/RecoverySecretCard';

export default function Page({
  params,
}: {
  params: Promise<{ accountId: string; recoveryKey: string }>;
}) {
  const { accountId, recoveryKey } = use(params);

  const seedPhrase = decodeURIComponent(recoveryKey);

  return (
    <main className="bg-[color:#f2f1ea]">
      <section className="text-center container mx-auto px-4 py-12 flex flex-col items-center">
        <h1 className="text-4xl md:text-3xl text-gray-900 mb-6">
          Recover your <span className='font-bold'>{accountId}</span> account
        </h1>
        <RecoverySecretCard secret={seedPhrase} kind="phrase" />
        <ToastContainer />
      </section>
      <section className="text-center container mx-auto px-4 py-4">
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Use the seed phrase to import your account into one of the following wallets
        </p>
      </section>
      <Wallets />
    </main>
  );
};