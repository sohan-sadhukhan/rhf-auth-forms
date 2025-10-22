import z from "zod";

export const registerSchema = z.object({
	name: z
		.string()
		.min(2, { error: "Name must be at least 2 characters" })
		.max(24, { error: "Name must be at most 24 characters" }),
	email: z.email({ error: "Invalid email" }),
	password: z
		.string()
		.min(8, { error: "Password must be at least 8 characters" })
		.max(16, { error: "Password must be at most 16 characters" }),
});

export const loginSchema = z.object({
	email: z.email({ error: "Invalid email" }),
	password: z
		.string()
		.min(8, { error: "Password must be at least 8 characters" })
		.max(16, { error: "Password must be at most 16 characters" }),
});
