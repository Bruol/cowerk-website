<script lang="ts">
	import { page } from '$app/state';
	import { translations, type Locale } from '$lib/i18n';

	const queryLocale = $derived(page.url.searchParams.get('lang'));
	const locale = $derived(
		queryLocale === 'de' || queryLocale === 'en'
			? queryLocale
			: ((page.data.locale as Locale) ?? 'de')
	);
	const l = $derived(translations[locale]);
	const nextLocale = $derived((locale === 'de' ? 'en' : 'de') as Locale);
	const languageHref = (target: Locale) => {
		const params = new URLSearchParams(page.url.searchParams);
		params.set('lang', target);

		return `${page.url.pathname}?${params.toString()}${page.url.hash}`;
	};
</script>

<svelte:head>
	<title>{l.title}</title>
	<meta name="description" content={l.metaDescription} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&family=Archivo+Black&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div
	class="min-h-screen overflow-x-hidden bg-bg font-['JetBrains_Mono',monospace] text-dark"
	style="background-image:none;"
>
	<!-- Nav -->
	<nav
		class="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b-4 border-secondary bg-dark px-5 py-3 text-cloud md:px-8"
	>
		<div class="font-['Archivo_Black',sans-serif] text-xl">
			COWERK<span class="text-secondary">_5</span>
		</div>
		<div class="flex items-center gap-4">
			<div class="hidden items-center gap-6 md:flex">
				<a
					href="#konzept"
					class="text-xs text-cloud no-underline transition-colors hover:text-secondary"
					>{l.navKonzept}</a
				>
				<a
					href="#raeume"
					class="text-xs text-cloud no-underline transition-colors hover:text-secondary"
					>{l.navRaeume}</a
				>
				<a
					href="#community"
					class="text-xs text-cloud no-underline transition-colors hover:text-secondary"
					>{l.navCommunity}</a
				>
				<a
					href="#kontakt"
					class="text-xs text-cloud no-underline transition-colors hover:text-secondary"
					>{l.navKontakt}</a
				>
				<a href="#probewoche" class="text-xs font-bold text-secondary no-underline"
					>{l.navProbewoche}</a
				>
			</div>
			<a
				href={languageHref(nextLocale)}
				class="relative block h-7 w-16 border-2 border-secondary font-['JetBrains_Mono',monospace] text-[0.65rem] font-bold tracking-widest no-underline"
				aria-label={`Switch language to ${nextLocale === 'de' ? 'German' : 'English'}`}
			>
				<span
					class={`absolute top-0.5 left-0.5 h-5 w-7 bg-secondary transition-transform duration-300 ease-out ${
						locale === 'en' ? 'translate-x-7' : 'translate-x-0'
					}`}
				></span>
				<span class="relative z-10 grid h-full grid-cols-2 place-items-center">
					<span class={locale === 'de' ? 'text-dark' : 'text-cloud'}>DE</span>
					<span class={locale === 'en' ? 'text-dark' : 'text-cloud'}>EN</span>
				</span>
			</a>
		</div>
	</nav>

	<!-- Hero -->
	<section
		class="grid grid-cols-1 border-b-4 border-dark pt-14 lg:min-h-screen lg:grid-cols-[1.35fr_0.85fr]"
	>
		<div class="flex flex-col justify-between p-8 md:p-12 lg:border-r-4 lg:border-dark">
			<h1
				class="m-0 font-['Archivo_Black',sans-serif] text-[clamp(2.5rem,7vw,7rem)] leading-[0.95] uppercase"
			>
				{@html l.heroHeading}
			</h1>
			<div class="mt-8">
				<div class="flex gap-4 border-t border-black/15 py-2 text-xs">
					<span class="min-w-20 font-bold">{l.heroStatusLabel}</span>
					<span class="text-muted-warm">{l.heroStatusValue}</span>
				</div>
				<div class="flex gap-4 border-t border-black/15 py-2 text-xs">
					<span class="min-w-20 font-bold">{l.heroOrtLabel}</span>
					<span class="text-muted-warm">{l.heroOrtValue}</span>
				</div>
				<div class="flex gap-4 border-t border-b border-black/15 py-2 text-xs">
					<span class="min-w-20 font-bold">{l.heroTypLabel}</span>
					<span class="text-muted-warm">{l.heroTypValue}</span>
				</div>
			</div>
		</div>
		<div class="flex flex-col">
			<img
				src="/imgs/overview_kuche.jpg"
				alt="COWERK_5"
				class="block h-72 w-full border-b-4 border-dark object-cover md:h-[30rem] lg:h-[58vh]"
			/>
			<div class="border-b-4 border-dark p-6 md:p-10">
				<p class="m-0 text-sm leading-relaxed">
					{l.heroDescription}
				</p>
			</div>
			<div class="flex flex-wrap gap-4 p-6 md:p-10">
				<a
					href="#probewoche"
					class="inline-block border-4 border-dark bg-dark px-6 py-4 text-xs font-bold text-cloud uppercase no-underline transition-colors hover:border-secondary hover:bg-secondary hover:text-dark"
					>{l.heroCta}</a
				>
				<a
					href="#kontakt"
					class="inline-block border-4 border-dark bg-transparent px-6 py-4 text-xs font-bold text-dark uppercase no-underline transition-colors hover:bg-dark hover:text-cloud"
					>{l.heroContact}</a
				>
			</div>
		</div>
	</section>

	<!-- Probewoche -->
	<section id="probewoche" class="border-b-4 border-dark p-8 md:p-12">
		<div class="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
			<div class="pt-0">
				<div
					class="-mb-4 font-['Archivo_Black',sans-serif] text-7xl leading-none text-black/5 md:text-8xl"
				>
					{l.trialSectionNum}
				</div>
				<h2
					class="mb-8 font-['Archivo_Black',sans-serif] text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] uppercase"
				>
					{@html l.trialHeading}
				</h2>
				<p class="mb-8 text-base leading-relaxed">
					{l.trialIntro}
				</p>
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
					<div class="border-2 border-dark bg-black/2 p-6">
						<h3 class="mb-3 text-sm font-bold text-secondary uppercase">{l.trialGetTitle}</h3>
						<ul class="list-none space-y-1 p-0">
							<li class="text-sm">--&gt; {l.trialGet1}</li>
							<li class="text-sm">--&gt; {l.trialGet2}</li>
							<li class="text-sm">--&gt; {l.trialGet3}</li>
							<li class="text-sm">--&gt; {l.trialGet4}</li>
						</ul>
					</div>
					<div class="border-2 border-dark bg-black/2 p-6">
						<h3 class="mb-3 text-sm font-bold text-secondary uppercase">{l.trialExpectTitle}</h3>
						<ul class="list-none space-y-1 p-0">
							<li class="text-sm">--&gt; {l.trialExpect1}</li>
							<li class="text-sm">--&gt; {l.trialExpect2}</li>
							<li class="text-sm">--&gt; {l.trialExpect3}</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="lg:mt-20">
				<form class="border-4 border-dark bg-surface p-6 md:p-8">
					<div class="mb-6 border-b-2 border-dark pb-3 font-['Archivo_Black',sans-serif] text-2xl">
						{l.trialFormTitle}
					</div>
					<div class="mb-4">
						<label
							for="trial-name"
							class="mb-1 block text-[0.7rem] font-bold tracking-wider uppercase"
							>{l.trialLabelName}</label
						>
						<input
							id="trial-name"
							type="text"
							name="name"
							required
							placeholder="_____________"
							class="w-full border-2 border-dark bg-bg px-3 py-2.5 font-['JetBrains_Mono',monospace] text-sm focus:border-secondary focus:bg-surface focus:outline-none"
						/>
					</div>
					<div class="mb-4">
						<label
							for="trial-email"
							class="mb-1 block text-[0.7rem] font-bold tracking-wider uppercase"
							>{l.trialLabelEmail}</label
						>
						<input
							id="trial-email"
							type="email"
							name="email"
							required
							placeholder="_____________"
							class="w-full border-2 border-dark bg-bg px-3 py-2.5 font-['JetBrains_Mono',monospace] text-sm focus:border-secondary focus:bg-surface focus:outline-none"
						/>
					</div>
					<div class="mb-4">
						<label
							for="trial-work"
							class="mb-1 block text-[0.7rem] font-bold tracking-wider uppercase"
							>{l.trialLabelWork}</label
						>
						<input
							id="trial-work"
							type="text"
							name="work"
							placeholder="_____________"
							class="w-full border-2 border-dark bg-bg px-3 py-2.5 font-['JetBrains_Mono',monospace] text-sm focus:border-secondary focus:bg-surface focus:outline-none"
						/>
					</div>
					<div class="mb-4">
						<label
							for="trial-seeking"
							class="mb-1 block text-[0.7rem] font-bold tracking-wider uppercase"
							>{l.trialLabelSeeking}</label
						>
						<textarea
							id="trial-seeking"
							name="seeking"
							rows="3"
							placeholder="_____________"
							class="w-full resize-y border-2 border-dark bg-bg px-3 py-2.5 font-['JetBrains_Mono',monospace] text-sm focus:border-secondary focus:bg-surface focus:outline-none"
						></textarea>
					</div>
					<div class="mb-4">
						<label
							for="trial-date"
							class="mb-1 block text-[0.7rem] font-bold tracking-wider uppercase"
							>{l.trialLabelDate}</label
						>
						<input
							id="trial-date"
							type="date"
							name="date"
							class="w-full border-2 border-dark bg-bg px-3 py-2.5 font-['JetBrains_Mono',monospace] text-sm focus:border-secondary focus:bg-surface focus:outline-none"
						/>
					</div>
					<div class="mb-4">
						<label
							for="trial-source"
							class="mb-1 block text-[0.7rem] font-bold tracking-wider uppercase"
							>{l.trialLabelSource}</label
						>
						<input
							id="trial-source"
							type="text"
							name="source"
							placeholder="_____________"
							class="w-full border-2 border-dark bg-bg px-3 py-2.5 font-['JetBrains_Mono',monospace] text-sm focus:border-secondary focus:bg-surface focus:outline-none"
						/>
					</div>
					<button
						type="submit"
						class="mt-2 w-full cursor-pointer border-4 border-secondary bg-secondary px-6 py-4 font-['JetBrains_Mono',monospace] text-xs font-bold text-dark uppercase transition-colors hover:border-dark hover:bg-dark hover:text-cloud"
						>{l.trialSubmit}</button
					>
					<p class="mt-3 text-center text-xs text-muted">{l.trialConfirm}</p>
				</form>
			</div>
		</div>
	</section>

	<!-- Konzept -->
	<section id="konzept" class="border-b-4 border-dark p-8 md:p-12">
		<div class="mb-8 grid grid-cols-1 items-start gap-10 md:grid-cols-[0.9fr_1.1fr] lg:gap-16">
			<div>
				<div
					class="-mb-4 font-['Archivo_Black',sans-serif] text-7xl leading-none text-black/5 md:text-8xl"
				>
					{l.konzeptSectionNum}
				</div>
				<h2
					class="mb-8 font-['Archivo_Black',sans-serif] text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] uppercase"
				>
					{@html l.konzeptHeading}
				</h2>
				<p class="text-base leading-[1.7]">
					{l.konzeptDescription}
				</p>
			</div>
			<div class="flex flex-col gap-6 md:pt-20">
				<div class="border-l-4 border-secondary pl-5">
					<span class="text-xs font-bold text-secondary">[A]</span>
					<h4 class="mt-1 mb-1 text-sm font-bold uppercase">{l.konzeptValueATitle}</h4>
					<p class="m-0 text-xs text-muted-warm">
						{l.konzeptValueADesc}
					</p>
				</div>
				<div class="border-l-4 border-secondary pl-5">
					<span class="text-xs font-bold text-secondary">[B]</span>
					<h4 class="mt-1 mb-1 text-sm font-bold uppercase">{l.konzeptValueBTitle}</h4>
					<p class="m-0 text-xs text-muted-warm">
						{l.konzeptValueBDesc}
					</p>
				</div>
				<div class="border-l-4 border-secondary pl-5">
					<span class="text-xs font-bold text-secondary">[C]</span>
					<h4 class="mt-1 mb-1 text-sm font-bold uppercase">{l.konzeptValueCTitle}</h4>
					<p class="m-0 text-xs text-muted-warm">
						{l.konzeptValueCDesc}
					</p>
				</div>
			</div>
		</div>
		<img
			src="/imgs/overview_eingang.jpeg"
			alt="COWERK_5 SPACE"
			class="mx-auto block h-72 w-full max-w-6xl border-4 border-dark object-cover contrast-110 grayscale-[30%] md:h-[30rem] lg:h-[44vh]"
		/>
	</section>

	<!-- Räume -->
	<section id="raeume" class="border-b-4 border-dark p-8 md:p-12 lg:min-h-screen">
		<div
			class="-mb-4 -translate-y-3 font-['Archivo_Black',sans-serif] text-7xl leading-none text-black/5 md:text-8xl"
		>
			{l.raeumeSectionNum}
		</div>
		<h2
			class="mb-8 font-['Archivo_Black',sans-serif] text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] uppercase"
		>
			{@html l.raeumeHeading}
		</h2>
		<div class="grid grid-cols-1 border-4 border-dark md:grid-cols-2">
			<div class="border-b-2 border-dark md:border-r-2 md:border-b-2">
				<img
					src="/imgs/schreibtische.jpg"
					alt="COWORKING"
					class="block h-64 w-full border-b-2 border-dark object-cover md:h-72 lg:h-[34vh]"
				/>
				<div class="p-6">
					<h3 class="mb-2 text-sm font-bold uppercase">{l.raeumeCoworkTitle}</h3>
					<p class="text-xs text-muted-warm">
						{l.raeumeCoworkDesc}
					</p>
				</div>
			</div>
			<div class="border-b-2 border-dark md:border-b-2">
				<img
					src="/imgs/werkstatt.webp"
					alt="WERKSTATT"
					class="block h-64 w-full border-b-2 border-dark object-cover md:h-72 lg:h-[34vh]"
				/>
				<div class="p-6">
					<h3 class="mb-2 text-sm font-bold uppercase">{l.raeumeWerkstattTitle}</h3>
					<p class="text-xs text-muted-warm">
						{l.raeumeWerkstattDesc}
					</p>
				</div>
			</div>
			<div class="border-b-2 border-dark md:border-r-2 md:border-b-0">
				<img
					src="/imgs/kuche.jpg"
					alt="KÜCHE"
					class="block h-64 w-full border-b-2 border-dark object-cover md:h-72 lg:h-[34vh]"
				/>
				<div class="p-6">
					<h3 class="mb-2 text-sm font-bold uppercase">{l.raeumeKuecheTitle}</h3>
					<p class="text-xs text-muted-warm">
						{l.raeumeKuecheDesc}
					</p>
				</div>
			</div>
			<div>
				<img
					src="/imgs/wohnzimmer.jpg"
					alt="RUHE"
					class="block h-64 w-full border-b-2 border-dark object-cover md:h-72 lg:h-[34vh]"
				/>
				<div class="p-6">
					<h3 class="mb-2 text-sm font-bold uppercase">{l.raeumeRuheTitle}</h3>
					<p class="text-xs text-muted-warm">
						{l.raeumeRuheDesc}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Organisation -->
	<section class="border-b-4 border-secondary bg-dark p-8 text-cloud md:p-12">
		<div class="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_0.75fr] lg:gap-16">
			<div>
				<div
					class="-mb-4 font-['Archivo_Black',sans-serif] text-7xl leading-none text-white/5 md:text-8xl"
				>
					{l.orgSectionNum}
				</div>
				<h2
					class="mb-8 font-['Archivo_Black',sans-serif] text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] uppercase"
				>
					{l.orgHeading}
				</h2>
				<p class="leading-relaxed text-coffee">
					{l.orgDescription}
				</p>
				<div class="mt-8 space-y-0">
					<div class="flex gap-4 border-t border-white/10 py-3 text-sm">
						<span class="font-bold text-secondary">&gt;&gt;</span>
						<span>{l.orgTask1}</span>
					</div>
					<div class="flex gap-4 border-t border-white/10 py-3 text-sm">
						<span class="font-bold text-secondary">&gt;&gt;</span>
						<span>{l.orgTask2}</span>
					</div>
					<div class="flex gap-4 border-t border-b border-white/10 py-3 text-sm">
						<span class="font-bold text-secondary">&gt;&gt;</span>
						<span>{l.orgTask3}</span>
					</div>
				</div>
			</div>
			<div class="md:mt-20">
				<img
					src="/imgs/diskokugel.jpg"
					alt="ORGANISATION"
					class="mx-auto h-[30rem] w-full max-w-md border-4 border-secondary object-cover grayscale-[50%] md:h-[36rem] lg:h-[40rem] lg:max-w-sm"
				/>
			</div>
		</div>
	</section>

	<!-- Events -->
	<section id="community" class="border-b-4 border-dark p-8 md:p-12">
		<div
			class="-mb-4 font-['Archivo_Black',sans-serif] text-7xl leading-none text-black/5 md:text-8xl"
		>
			{l.eventsSectionNum}
		</div>
		<h2
			class="mb-8 font-['Archivo_Black',sans-serif] text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] uppercase"
		>
			{@html l.eventsHeading}
		</h2>
		<div class="grid grid-cols-1 border-4 border-dark md:grid-cols-3">
			<div class="border-b-2 border-dark p-8 md:border-r-2 md:border-b-0">
				<span class="text-[0.7rem] font-bold tracking-widest text-secondary"
					>{l.eventsFreqMonthly}</span
				>
				<h3 class="mt-2 mb-2 text-sm font-bold uppercase">{l.eventsKinoTitle}</h3>
				<p class="text-xs text-muted-warm">{l.eventsKinoDesc}</p>
			</div>
			<div class="border-b-2 border-dark p-8 md:border-r-2 md:border-b-0">
				<span class="text-[0.7rem] font-bold tracking-widest text-secondary"
					>{l.eventsFreqRegular}</span
				>
				<h3 class="mt-2 mb-2 text-sm font-bold uppercase">{l.eventsWorkshopTitle}</h3>
				<p class="text-xs text-muted-warm">{l.eventsWorkshopDesc}</p>
			</div>
			<div class="p-8">
				<span class="text-[0.7rem] font-bold tracking-widest text-secondary"
					>{l.eventsFreqOccasional}</span
				>
				<h3 class="mt-2 mb-2 text-sm font-bold uppercase">{l.eventsMeetingTitle}</h3>
				<p class="text-xs text-muted-warm">{l.eventsMeetingDesc}</p>
			</div>
		</div>
	</section>

	<!-- Fit -->
	<section class="grid grid-cols-1 border-b-4 border-dark md:grid-cols-2">
		<div class="bg-secondary p-8 text-dark md:p-12">
			<h2
				class="mb-6 font-['Archivo_Black',sans-serif] text-[clamp(1.8rem,3vw,3rem)] leading-[0.95] uppercase"
			>
				{@html l.fitForYouHeading}
			</h2>
			<ul class="list-none space-y-2 p-0">
				<li class="text-sm text-dark/75">--&gt; {l.fitForYou1}</li>
				<li class="text-sm text-dark/75">--&gt; {l.fitForYou2}</li>
				<li class="text-sm text-dark/75">--&gt; {l.fitForYou3}</li>
				<li class="text-sm text-dark/75">--&gt; {l.fitForYou4}</li>
			</ul>
		</div>
		<div class="bg-dark p-8 text-cloud md:p-12">
			<h2
				class="mb-6 font-['Archivo_Black',sans-serif] text-[clamp(1.8rem,3vw,3rem)] leading-[0.95] uppercase"
			>
				{@html l.fitNotForYouHeading}
			</h2>
			<ul class="list-none space-y-2 p-0">
				<li class="text-sm text-muted">--&gt; {l.fitNotForYou1}</li>
				<li class="text-sm text-muted">--&gt; {l.fitNotForYou2}</li>
			</ul>
		</div>
	</section>

	<!-- Kontakt -->
	<section id="kontakt" class="border-b-4 border-dark p-8 md:p-12">
		<div class="grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:gap-16">
			<div>
				<div
					class="-mb-4 font-['Archivo_Black',sans-serif] text-7xl leading-none text-black/5 md:text-8xl"
				>
					{l.kontaktSectionNum}
				</div>
				<h2
					class="mb-8 font-['Archivo_Black',sans-serif] text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] uppercase"
				>
					{l.kontaktHeading}
				</h2>
				<p class="text-base leading-relaxed">{l.kontaktLocation}</p>
				<p class="text-sm text-muted-warm">{l.kontaktCta}</p>
			</div>
			<form class="border-4 border-dark bg-surface p-6 md:mt-20 md:p-8">
				<div class="mb-4">
					<label
						for="contact-name"
						class="mb-1 block text-[0.7rem] font-bold tracking-wider uppercase"
						>{l.kontaktLabelName}</label
					>
					<input
						id="contact-name"
						type="text"
						name="name"
						required
						placeholder="_____________"
						class="w-full border-2 border-dark bg-bg px-3 py-2.5 font-['JetBrains_Mono',monospace] text-sm focus:border-secondary focus:bg-surface focus:outline-none"
					/>
				</div>
				<div class="mb-4">
					<label
						for="contact-email"
						class="mb-1 block text-[0.7rem] font-bold tracking-wider uppercase"
						>{l.kontaktLabelEmail}</label
					>
					<input
						id="contact-email"
						type="email"
						name="email"
						required
						placeholder="_____________"
						class="w-full border-2 border-dark bg-bg px-3 py-2.5 font-['JetBrains_Mono',monospace] text-sm focus:border-secondary focus:bg-surface focus:outline-none"
					/>
				</div>
				<div class="mb-4">
					<label
						for="contact-message"
						class="mb-1 block text-[0.7rem] font-bold tracking-wider uppercase"
						>{l.kontaktLabelMessage}</label
					>
					<textarea
						id="contact-message"
						name="message"
						rows="4"
						placeholder="_____________"
						class="w-full resize-y border-2 border-dark bg-bg px-3 py-2.5 font-['JetBrains_Mono',monospace] text-sm focus:border-secondary focus:bg-surface focus:outline-none"
					></textarea>
				</div>
				<button
					type="submit"
					class="w-full cursor-pointer border-4 border-secondary bg-secondary px-6 py-4 font-['JetBrains_Mono',monospace] text-xs font-bold text-dark uppercase transition-colors hover:border-dark hover:bg-dark hover:text-cloud"
					>{l.kontaktSubmit}</button
				>
			</form>
		</div>
	</section>

	<!-- Footer -->
	<footer class="border-t-4 border-secondary bg-dark px-5 py-6 text-cloud md:px-8">
		<div class="flex flex-wrap justify-between gap-4 text-xs tracking-widest uppercase">
			<span>COWERK_5</span>
			<span>{l.footerLocation}</span>
			<span>{l.footerTagline}</span>
		</div>
	</footer>
</div>
