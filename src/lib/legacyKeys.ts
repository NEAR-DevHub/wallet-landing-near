type ReadOnlyStorage = Pick<Storage, "length" | "key" | "getItem">;

export type LegacyKey = { accountId: string; privateKey: string };

// Only inspect legacy mainnet entries. Never change or remove stored data.
export function readLegacyKeys(storage: ReadOnlyStorage): LegacyKey[] {
  const prefix = "nearlib:keystore:";
  const suffix = ":mainnet";
  const keys: LegacyKey[] = [];

  for (let index = 0; index < storage.length; index++) {
    const name = storage.key(index);
    if (!name?.startsWith(prefix) || !name.endsWith(suffix)) continue;

    const accountId = name.slice(prefix.length, -suffix.length);
    if (!accountId) continue;
    const privateKey = storage.getItem(name);
    if (privateKey?.startsWith("ed25519:")) keys.push({ accountId, privateKey });
  }

  return keys.sort((a, b) => a.accountId.localeCompare(b.accountId));
}
