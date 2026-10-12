"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { readLegacyKeys } from "@/lib/legacyKeys";

export default function SavedKeysBanner() {
  const pathname = usePathname();
  const [hasSavedKeys, setHasSavedKeys] = useState(false);

  useEffect(() => {
    if (pathname === "/recover") return;
    try {
      setHasSavedKeys(readLegacyKeys(window.localStorage).length > 0);
    } catch {
      // Storage may be blocked. Keep other pages quiet in that case.
      setHasSavedKeys(false);
    }
  }, [pathname]);

  if (!hasSavedKeys || pathname === "/recover") return null;

  return (
    <aside aria-label="Saved account keys" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Saved account keys found in this browser
        </h2>
        <Link href="/recover" className="shrink-0 bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
          View saved keys
        </Link>
      </div>
    </aside>
  );
}
