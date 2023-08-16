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

<slot />
