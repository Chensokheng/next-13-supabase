import React from "react";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
	const supabase = createServerComponentSupabaseClient({
		headers,
		cookies,
	});

	const { data: activeSession } = await supabase.auth.getSession();

	if (!activeSession.session) {
		return redirect("/auth");
	}

	const { data: user } = await supabase.from("user").select("*").single();

	if (user?.role !== "admin") {
		return redirect("/");
	}

	const { data: post } = await supabase.from("post").select("*");

	return (
		<div>
			<h1 className="text-3xl font-bold">Admin role access only</h1>
			<pre>{JSON.stringify(user, null, 2)}</pre>

			<pre>{JSON.stringify(post, null, 2)}</pre>
		</div>
	);
}
