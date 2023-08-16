<script lang="ts">
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
	import { firebaseConfig } from '$lib/firebase/config';
	import 'destyle.css/destyle.css';
	import { getAnalytics } from 'firebase/analytics';
	import { initializeApp } from 'firebase/app';
	import { onMount } from 'svelte';
	import OGP from './_images/ogp.png';

	onMount(() => {
		// Initialize Firebase
		if (!dev) {
			const app = initializeApp(firebaseConfig);
			getAnalytics(app);
		}
	});
</script>

<svelte:head>
	<title>KATA-CHI-KANA</title>
	<meta
		property="og:url"
		content={$page.url}
	/>
	<meta
		property="og:type"
		content="article"
	/>
	<meta
		property="og:title"
		content="KATA-CHI-KANA"
	/>
	<meta
		property="og:description"
		content="You can type KataKana by symbols."
	/>
	<meta
		property="og:site_name"
		content="KATA-CHI-KANA"
	/>
	<meta
		property="og:image"
		content={`${OGP}`}
	/>
</svelte:head>

<main class="main">
	<slot />
</main>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

	.main {
		width: 100svw;
		height: 100svh;
		margin-inline: auto;
		font-family: 'Noto Sans JP', sans-serif;

		// for PC
		@media (400px <= width) {
			width: 375px;
			height: 750px;
			border: 1px solid #808080;
			border-radius: 1em;
			box-shadow: rgba(#000000, 0.1) 0px 4px 0.8em;
		}
	}
</style>
