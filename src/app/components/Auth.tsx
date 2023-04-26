"use client";
import React from "react";
import { useSupabase } from "../supabase-provider";

export default function Auth() {
	const { supabase } = useSupabase();

	const handleCreateUser = async () => {
		const { data, error } = await supabase.auth.signUp({
			email: "example@email.com",
			password: "example-password",
		});
	};

	const handleLogin = async () => {
		const { data, error } = await supabase.auth.signInWithPassword({
			email: "example@email.com",
			password: "example-password",
		});
	};

	return (
		<div className="h-screen flex justify-center items-center flex-col">
			<button
				className="bg-black text-white px-5 py-3 rounded-md"
				onClick={() =>
					supabase.auth.signInWithOAuth({ provider: "github" })
				}
			>
				Login with Github
			</button>
			<button onClick={handleCreateUser}>Sign Up new User</button>
			<button onClick={handleLogin}>Sign IN new User</button>
		</div>
	);
}
