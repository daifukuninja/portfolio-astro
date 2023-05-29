import { writable } from "svelte/store";

export type langType = "jp" | "en" | "es"

export const langStore = writable<langType>("jp")
