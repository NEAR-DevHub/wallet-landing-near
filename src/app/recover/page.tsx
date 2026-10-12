"use client";

import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import RecoverySecretCard from "@/components/RecoverySecretCard";
import { readLegacyKeys, type LegacyKey } from "@/lib/legacyKeys";
import Wallets from "@/components/Wallets";

export default function Page() {
  const [keys, setKeys] = useState<LegacyKey[]>([]);
  const [loading, setLoading] = useState(true);
  const [storageUnavailable, setStorageUnavailable] = useState(false);

  useEffect(() => {
    try {
      setKeys(readLegacyKeys(window.localStorage));
    } catch {
      setStorageUnavailable(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <main className="bg-[color:#f2f1ea] flex-1">
      <section className="text-center container mx-auto px-4 py-12 flex flex-col items-center">
        <p className="text-gray-600 max-w-xl">
          If you have previously used the NEAR Wallet in this browser, your access keys may be available here.
        </p>
        <div className="w-full max-w-xl" role="status" aria-live="polite">
          {loading ? (
            <p className="text-gray-600 mt-6">Checking this browser for saved keys…</p>
          ) : storageUnavailable ? (
            <div className="bg-white rounded-xl p-6 mt-6 text-gray-600">
              <p className="font-semibold text-gray-900 mb-2">Browser storage is unavailable</p>
              <p>Allow this site to access browser storage, then reload this page. You can also recover using your seed phrase or email/text recovery link.</p>
            </div>
          ) : keys.length === 0 ? (
            <div className="bg-white rounded-xl p-6 mt-6 text-gray-600">
              <p className="font-semibold text-gray-900 mb-2">No saved mainnet keys found</p>
              <p>Try using the browser in which you originally created your account.</p>
              <p className="mt-3">Search your email for &quot;Near Wallet Recovery&quot; to find a recovery backup.</p>
            </div>
          ) : null}
        </div>
        {!loading && !storageUnavailable && keys.map(({ accountId, privateKey }) => (
          <article key={accountId} className="w-full max-w-xl mt-8">
            <h2 className="text-xl font-semibold text-gray-900 break-all">{accountId}</h2>
            <RecoverySecretCard secret={privateKey} kind="key" />
          </article>
        ))}
        <ToastContainer />
      </section>
      <section className="text-center container mx-auto px-4 py-4">
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Use the key to import your account into one of the following wallets
        </p>
      </section>
      <Wallets />
      
    </main>
  );
}
