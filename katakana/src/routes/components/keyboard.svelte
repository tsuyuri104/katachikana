<script lang="ts">
	import { Parts, katakana, type Part } from '$lib/rule/katakana';
	import backspace from './../images/backspace.svg';
	import { inputParts, suggest, value } from './../store/keyboard';

	function addPart(value: Part) {
		$inputParts = [...$inputParts, value];
		updateSuggest();
	}

	function deletePart() {
		if ($inputParts.length === 0) {
			$value = $value.slice(0, -1);
		}

		$inputParts = $inputParts.slice(0, -1);
		updateSuggest();
	}

	function updateSuggest() {
		const inputLength = $inputParts.length;
		let matches: {
			char: string;
			point: number;
		}[] = [];
		katakana.forEach((rule) => {
			let matchPoint = -1;
			for (let i = 0; i < inputLength; i++) {
				if ($inputParts[i] === rule.parts[i]) {
					matchPoint = i;
				} else {
					break;
				}
			}
			if (matchPoint > -1) {
				matches.push({
					char: rule.char,
					point: matchPoint,
				});
			}
		});
		const maxPoint = matches.reduce((max, match) => (match.point > max ? match.point : max), 0);
		$suggest = matches
			.filter((match) => match.point >= maxPoint - 1)
			.sort((a, b) => b.point - a.point)
			.map((match) => match.char);
	}

	function clearPart() {
		$inputParts = [];
		$suggest = [];
	}

	function addValue(char: string) {
		$value += char;
		clearPart();
	}
</script>

<div class="suggest">
	<div class="inputed">
		{#each $inputParts as part}
			<div class="inputed-value">{part}</div>
		{/each}
	</div>
	<div class="suggest-button-wrapper">
		{#each $suggest as char}
			<button
				type="button"
				class="char"
				on:click={() => addValue(char)}
			>
				{char}
			</button>
		{/each}
	</div>
</div>
<div class="keyboard">
	{#each Parts as part}
		<button
			type="button"
			class="keytop"
			on:click={() => addPart(part)}
		>
			{part}
		</button>
	{/each}
	<button
		type="button"
		class="keytop backspace"
		on:click={() => deletePart()}
	>
		<img
			src={backspace}
			alt="backspace"
		/>
	</button>
</div>

<style lang="scss">
	.inputed {
		display: flex;
		&-value {
			padding: 0.5em;
			color: #ffffff;
			background-color: #b4b4b4;
		}
	}

	.suggest {
		display: flex;
		flex-direction: column;
		justify-content: end;
		&-button-wrapper {
			display: grid;
			grid-template-columns: repeat(5, auto);
			gap: 0.8em;
			justify-content: center;
			background-color: #f8f9ff;
		}
	}

	.char {
		font-size: 1.8em;
		font-family: 'Noto Sans JP', sans-serif;
		padding: 0.5em;
		display: grid;
		place-items: center;
		height: 2.25em;
		width: 100%;
	}

	.keyboard {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(3, 1fr);
		gap: 0.8em;
		width: 100%;
		box-sizing: border-box;
		padding: 1em 10%;
		margin-inline: auto;
		background-color: #f8f9ff;

		--keycolor: #ffffff;

		// for PC
		@media (400px <= width) {
			border-radius: 0 0 1em 1em;
		}
	}

	.keytop {
		font-size: 2.5em;
		background-color: var(--keycolor);
		border: 1px solid var(--keycolor);
		border-radius: 0.25em;
		box-shadow: rgba(33, 35, 38, 0.3) 5px 5px 10px -5px;
		display: grid;
		place-items: center;
	}

	.backspace {
		grid-column-start: 1;
		grid-column-end: 3;
		--keycolor: #e1e2e8;
	}
</style>
