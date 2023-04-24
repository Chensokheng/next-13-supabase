import Auth from "../components/Auth";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
	const supabase = createServerComponentSupabaseClient({
		headers,
		cookies,
	});
	const { data } = await supabase.auth.getSession();
	if (data.session) {
		return redirect("/");
	}
	return <Auth />;
}
