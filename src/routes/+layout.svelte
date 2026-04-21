<script lang="ts">
	import { onMount } from 'svelte';

	import './layout.css';

	let { children } = $props();

	onMount(async () => {
		const { init } = await import('@plausible-analytics/tracker');

		init({
			domain: 'co-werk5.ch',
			endpoint: 'https://plausible.bruol.me/api/event'
		});
	});
</script>

{@render children()}
