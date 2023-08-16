<script lang="ts">
	import Keyboard from './_components/keyboard.svelte';
	import { value } from './_store/keyboard';
</script>

<div class="wrapper">
	<div class="form">
		<input
			type="text"
			inputmode="none"
			class="input"
			bind:value={$value}
		/>
		<div>
			<ul class="list">
				<li class="item">
					<a
						href="/about"
						class="link">What is this?</a
					>
				</li>
				<li class="item">
					<a
						href="https://forms.gle/yDfiM1Gdg6vHcJVZ8"
						class="link">Contact us</a
					>
				</li>
			</ul>
		</div>
	</div>
	<Keyboard />
</div>

<style lang="scss">
	.wrapper {
		height: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: [form] auto [suggest] auto [keyboard]40%;
	}

	.form {
		padding: 1em;
		display: flex;
		flex-direction: column;
		row-gap: 0.6em;
		overflow: hidden;
	}

	.input {
		font-size: 1.5em;
		padding: 0.2em;
		border: 1px solid #808080;
		border-radius: 0.25em;
		height: 2em;
	}

	.list {
		display: flex;
		flex-direction: row;
		column-gap: 2em;
	}

	.link {
		color: #4a5ece;
	}
</style>
