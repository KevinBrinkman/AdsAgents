'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button
        onClick={() => signOut()}
        className="px-6 py-2 rounded border border-gray-300 hover:bg-gray-100 transition text-sm"
      >
        Uitloggen ({session.user?.email})
      </button>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="px-6 py-2 rounded border border-gray-800 text-gray-800 hover:bg-gray-100 transition text-sm"
    >
      Inloggen met Google
    </button>
  );
}
