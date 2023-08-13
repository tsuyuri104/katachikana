<script lang="ts">
	import { dev } from '$app/environment';
	import { firebaseConfig } from '$lib/firebase/config';
	import 'destyle.css/destyle.css';
	import { getAnalytics } from 'firebase/analytics';
	import { initializeApp } from 'firebase/app';
	import { onMount } from 'svelte';

	onMount(() => {
		// Initialize Firebase
		if (!dev) {
			const app = initializeApp(firebaseConfig);
			getAnalytics(app);
		}
	});
</script>

<slot />
