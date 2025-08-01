import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import ClientWrapper from "@/components/ClientWrapper";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col items-center space-y-6 text-center">
        <img
          src="https://cdn.sanity.io/images/qxrxmo3r/adverteren-prd/f42d441d658b4bb759a26bceb30f23bd0bbfbf7c-989x396.png"
          alt="AutoTulip banner"
          className="max-w-full h-auto w-[400px] md:w-[600px]"
        />
        <ClientWrapper />
      </div>
    </main>
  );
}
