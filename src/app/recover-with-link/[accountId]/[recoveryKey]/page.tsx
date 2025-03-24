"use client"

import { Copy, Eye, EyeSlash } from '@phosphor-icons/react';
import { useState, use } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import Wallets from '@/components/Wallets';

export default function Page({
  params,
}: {
  params: Promise<{ accountId: string; recoveryKey: string }>;
}) {
  const { accountId, recoveryKey } = use(params);

  const [privateKeyVisible, setPrivateKeyVisible] = useState(false);
  const keys = decodeURIComponent(recoveryKey)
  const notify = () => toast.success(" Access key copied to clipboard", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: false,
    theme: "light",
  });

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      notify();
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <main className="bg-[color:#f2f1ea]">
      <section className="text-center container mx-auto px-4 py-12 flex flex-col items-center">
        <h1 className="text-4xl md:text-3xl text-gray-900 mb-6">
          Recover your <span className='font-bold'>{accountId}</span> account
        </h1>
        <div className="bg-white rounded-xl shadow-md p-6 mt-6 max-w-96">
          <div className="flex items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-900 mr-auto">Secret Phrase</h3>
            <button
              className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300 active:bg-gray-400 transition-colors duration-200"
              onClick={() => setPrivateKeyVisible((prev) => !prev)}
            >
              {privateKeyVisible ? <EyeSlash className="h-6 w-6" /> : <Eye className="h-6 w-6" />}
            </button>
            <button
              className="bg-gray-200 p-2 rounded-full ml-2 cursor-pointer hover:bg-gray-300 active:bg-gray-400 transition-colors duration-200"
              onClick={() => copyToClipboard(keys)}
            >
              <Copy className="h-6 w-6" />
            </button>
          </div>
          <p
            className={`text-gray-600 font-mono transition-all duration-200 ${privateKeyVisible ? 'blur-none' : 'blur-xs'}`}
            style={{ userSelect: privateKeyVisible ? 'text' : 'none' }}
          >
            {keys}
          </p>
          <p className="text-xs text-red-600 mt-2">
            This private key is highly sensitive like a password. Keep it secure and do not share it with anyone.
          </p>
        </div>
        <ToastContainer />
      </section>
      <section className="text-center container mx-auto px-4 py-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          NEAR Ecosystem Wallets
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We recommend using one of the following wallets
        </p>
      </section>
      <Wallets />
    </main>
  );
};