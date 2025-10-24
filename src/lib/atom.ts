import { atomWithStorage } from "jotai/utils";

export const registerAtom = atomWithStorage("registerAtom", {
	name: "",
	email: "",
	password: "",
});
