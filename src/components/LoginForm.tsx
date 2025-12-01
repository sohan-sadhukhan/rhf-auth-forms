"use client";

import { registerAtom } from "@/lib/atom";
import { LoginType } from "@/lib/types";
import { loginSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtomValue } from "jotai";
import { FingerprintIcon, LoaderIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "./shadcnui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./shadcnui/form";
import { Input } from "./shadcnui/input";

const LoginForm = () => {
	const register = useAtomValue(registerAtom);

	const loginForm = useForm<LoginType>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "all",
	});

	const handleLogin = async (data: LoginType) => {
		await new Promise((data) => setTimeout(data, 1500));

		if (
			data.email === register.email &&
			data.password === register.password
		) {
			toast.success(`Welcome, ${register.name}🤗`);

			loginForm.reset();
		} else {
			if (
				data.email !== register.email &&
				data.password !== register.password
			) {
				toast.error("Invalid email and password😓");
			} else {
				if (data.email !== register.email) {
					toast.error("Invalid email😓");
				}

				if (data.password !== register.password) {
					toast.error("Invalid password😓");
				}
			}
		}
	};

	return (
		<Form {...loginForm}>
			<form
				onSubmit={loginForm.handleSubmit(handleLogin)}
				className="grid gap-6">
				<FormField
					control={loginForm.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									type="email"
									placeholder="Enter your email"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={loginForm.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="Enter your password"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type="submit"
					className="cursor-pointer"
					disabled={loginForm.formState.isSubmitting}>
					{loginForm.formState.isSubmitting ? (
						<>
							<LoaderIcon className="animate-spin" />
							Submitting...
						</>
					) : (
						<>
							<FingerprintIcon /> Login
						</>
					)}
				</Button>
			</form>
		</Form>
	);
};

export default LoginForm;
