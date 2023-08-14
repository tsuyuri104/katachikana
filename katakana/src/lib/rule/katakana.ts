export type Part = '｜' | '‐' | 'レ' | 'ノ';
export const Parts: Part[] = ['｜', '‐', 'レ', 'ノ'];

export const katakana: {
	parts: Part[];
	char: string;
}[] = [
	{
		parts: ['レ', 'ノ'],
		char: 'ア',
	},
	{
		parts: ['ノ', '｜'],
		char: 'イ',
	},
	{
		parts: ['｜', '｜', 'レ'],
		char: 'ウ',
	},
	{
		parts: ['‐', '｜', '‐'],
		char: 'エ',
	},
	{
		parts: ['‐', '｜', 'ノ'],
		char: 'オ',
	},
	{
		parts: ['レ', 'ノ'],
		char: 'カ',
	},
	{
		parts: ['‐', '‐', '｜'],
		char: 'キ',
	},
	{
		parts: ['｜', 'レ'],
		char: 'ク',
	},
	{
		parts: ['｜', '‐', 'ノ'],
		char: 'ケ',
	},
	{
		parts: ['‐', '｜', '‐'],
		char: 'コ',
	},
	{
		parts: ['‐', '｜', 'ノ'],
		char: 'サ',
	},
	{
		parts: ['｜', '｜', '｜'],
		char: 'シ',
	},
	{
		parts: ['レ', '｜'],
		char: 'ス',
	},
	{
		parts: ['レ', 'レ'],
		char: 'セ',
	},
	{
		parts: ['｜', 'ノ'],
		char: 'ソ',
	},
	{
		parts: ['｜', 'レ', '｜'],
		char: 'タ',
	},
	{
		parts: ['ノ', '‐', 'ノ'],
		char: 'チ',
	},
	{
		parts: ['｜', '｜', 'ノ'],
		char: 'ツ',
	},
	{
		parts: ['‐', '‐', 'ノ'],
		char: 'テ',
	},
	{
		parts: ['｜', '‐'],
		char: 'ト',
	},
	{
		parts: ['‐', 'ノ'],
		char: 'ナ',
	},
	{
		parts: ['‐', '‐'],
		char: 'ニ',
	},
	{
		parts: ['レ', '｜'],
		char: 'ヌ',
	},
	{
		parts: ['｜', 'レ', '｜', '｜'],
		char: 'ネ',
	},
	{
		parts: ['ノ'],
		char: 'ノ',
	},
	{
		parts: ['ノ', '｜'],
		char: 'ハ',
	},
	{
		parts: ['‐', 'レ'],
		char: 'ヒ',
	},
	{
		parts: ['レ'],
		char: 'フ',
	},
	{
		parts: ['レ'],
		char: 'ヘ',
	},
	{
		parts: ['‐', '｜', '｜', '｜'],
		char: 'ホ',
	},
	{
		parts: ['レ', '‐'],
		char: 'マ',
	},
	{
		parts: ['‐', '‐', '‐'],
		char: 'ミ',
	},
	{
		parts: ['レ', '‐'],
		char: 'ム',
	},
	{
		parts: ['ノ', '｜'],
		char: 'メ',
	},
	{
		parts: ['‐', '‐', 'レ'],
		char: 'モ',
	},
	{
		parts: ['レ', '｜'],
		char: 'ヤ',
	},
	{
		parts: ['‐', '｜', '‐', '｜'],
		char: 'ヰ',
	},
	{
		parts: ['‐', '｜', '‐'],
		char: 'ユ',
	},
	{
		parts: ['レ', '｜', '‐'],
		char: 'ヱ',
	},
	{
		parts: ['‐', '｜', '‐', '‐'],
		char: 'ヨ',
	},
	{
		parts: ['‐', 'レ'],
		char: 'ラ',
	},
	{
		parts: ['｜', '｜'],
		char: 'リ',
	},
	{
		parts: ['ノ', 'レ'],
		char: 'ル',
	},
	{
		parts: ['レ'],
		char: 'レ',
	},
	{
		parts: ['‐', '｜', '｜', '‐'],
		char: 'ロ',
	},
	{
		parts: ['｜', 'レ'],
		char: 'ワ',
	},
	{
		parts: ['レ', '‐'],
		char: 'ヲ',
	},
	{
		parts: ['｜', '｜'],
		char: 'ン',
	},
];
