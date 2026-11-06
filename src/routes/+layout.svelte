<script lang="ts">
	import { onMount } from 'svelte';

	import './layout.css';

	let { children } = $props();

	onMount(async () => {
		const { init } = await import('@plausible-analytics/tracker');

		init({
			domain: 'co-werk5.ch',
			endpoint: '/a/e'
		});
	});
</script>

{@render children()}
