"use client";
import React from "react";
import { useSupabase } from "../supabase-provider";

export default function Logout() {
	const { supabase } = useSupabase();

	return (
		<div>
			<button
				className="bg-black text-white px-5 py-3 rounded-md"
				onClick={async () => await supabase.auth.signOut()}
			>
				Logout
			</button>
		</div>
	);
}
