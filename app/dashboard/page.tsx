import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Welkom, {session.user?.name}</h1>
        <p className="text-gray-700 mb-6">
          Je bent succesvol ingelogd met <span className="font-mono">{session.user?.email}</span>
        </p>
        <Link
          href="/ads"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Ga naar Google Ads Management
        </Link>
      </div>
    </main>
  );
}
