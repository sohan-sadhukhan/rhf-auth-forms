import LoginForm from "@/components/LoginForm";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Login | RHF Auth Form",
	description: "Login page of RHF Auth Form",
};

const page = () => {
	return (
		<section className="grid h-[80dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="text-center text-2xl">
						Login Form
					</CardTitle>
				</CardHeader>

				<CardContent>
					<LoginForm />
				</CardContent>

				<CardFooter className="justify-center">
					Don&apos;t have an account?
					<Link
						href={"/register"}
						className="mx-1 text-blue-500 underline">
						Create
					</Link>
					now
				</CardFooter>
			</Card>
		</section>
	);
};

export default page;
