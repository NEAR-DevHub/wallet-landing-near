export default function Page() {
  return (
    <main className="bg-[color:#f2f1ea] flex-1">
      <section className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Looking for your NEAR account?
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            This link was originally used to claim NEAR and create an account.
          </p>
          <p className="text-gray-600 mb-6">
            If you chose email recovery, search your inbox for
            {" "}<strong>&quot;Near Wallet Recovery&quot;</strong>,
            {" "}<strong>&quot;important near.org&quot;</strong>, or
            {" "}<strong>&quot;Recover my account&quot;</strong>.
            The recovery email contains a separate link to access your account.
          </p>
        </div>
      </section>
    </main>
  );
}
