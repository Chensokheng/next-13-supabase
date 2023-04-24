import React from "react";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";
import Logout from "./components/Logout";

export default async function Page() {
	const supabase = createServerComponentSupabaseClient({
		headers,
		cookies,
	});

	const { data: activeSession } = await supabase.auth.getSession();

	if (!activeSession.session) {
		return redirect("/auth");
	}

	const { data: testData } = await supabase.from("test").select("*");

	return (
		<>
			<div className="flex justify-center items-center h-96 flex-col gap-5">
				<h1 className="text-5xl">Next.js 13 + Supabase</h1>
				<h1 className="text-xl">Authentication</h1>
				<h1 className="text-xl">Data Fetching with policy</h1>
				<h1 className="text-xl">Page protection</h1>
			</div>
			<Logout />
			<pre>{JSON.stringify(testData, null, 2)}</pre>
		</>
	);
}
