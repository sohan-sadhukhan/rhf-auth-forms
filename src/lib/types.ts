import { ReactNode } from "react";
import z from "zod";
import { loginSchema, registerSchema } from "./zodSchema";

export type RootLayoutProps = Readonly<{
	children: ReactNode;
}>;

export type RegisterType = z.infer<typeof registerSchema>;
export type LoginType = z.infer<typeof loginSchema>;
