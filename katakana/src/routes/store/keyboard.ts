import type { Part } from '$lib/rule/katakana';
import { writable } from 'svelte/store';

export const inputParts = writable<Part[]>([]);
export const suggest = writable<string[]>([]);
export const value = writable<string>('');
