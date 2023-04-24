"use client";
import React from "react";
import { useSupabase } from "../supabase-provider";

export default function Auth() {
	const { supabase } = useSupabase();

	return (
		<div className="h-screen flex justify-center items-center">
			<button
				className="bg-black text-white px-5 py-3 rounded-md"
				onClick={() =>
					supabase.auth.signInWithOAuth({ provider: "github" })
				}
			>
				Login with Github
			</button>
		</div>
	);
}
