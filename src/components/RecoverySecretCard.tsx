"use client";

import { Copy, Eye, EyeSlash } from "@phosphor-icons/react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function RecoverySecretCard({ secret, kind }: {
  secret: string;
  kind: "key" | "phrase";
}) {
  const label = kind === "phrase" ? "Seed phrase" : "Access key";
  const secretName = kind === "phrase" ? "seed phrase" : "private key";
  const [visible, setVisible] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(secret);
      toast.success(`${label} copied to clipboard`, { position: "bottom-right" });
    } catch {
      toast.error(`Could not copy the ${secretName}. Reveal it and copy it manually.`, {
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6 w-full max-w-xl text-left">
      <div className="flex items-center mb-4 gap-2">
        <h3 className="text-xl font-semibold text-gray-900 mr-auto">{label}</h3>
        <button
          type="button"
          aria-label={`${visible ? "Hide" : "Reveal"} ${label.toLowerCase()}`}
          aria-pressed={visible}
          className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300 active:bg-gray-400 transition-colors"
          onClick={() => setVisible((previous) => !previous)}
        >
          {visible ? <EyeSlash className="h-6 w-6" /> : <Eye className="h-6 w-6" />}
        </button>
        <button
          type="button"
          aria-label={`Copy ${label.toLowerCase()}`}
          className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300 active:bg-gray-400 transition-colors"
          onClick={copyToClipboard}
        >
          <Copy className="h-6 w-6" />
        </button>
      </div>
      <p className="text-gray-600 font-mono break-all" style={{ userSelect: visible ? "text" : "none" }}>
        {visible ? secret : "••••••••••••••••••••••••"}
      </p>
      <p className="text-xs text-red-600 mt-2">
        This {secretName} is highly sensitive like a password. Keep it secure and do not share it with anyone.
      </p>
    </div>
  );
}
