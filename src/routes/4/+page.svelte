<svelte:head>
	<title>COWERK_5 — Workshop & Coworking</title>
	<meta name="description" content="Kollektiver Coworking-Space in Zürich-Altstetten" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Satoshi:wght@300;400;500;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="min-h-screen overflow-x-hidden bg-[#1a1a18] font-['Satoshi',sans-serif] text-[#e8e4dc]">
	<!-- Grain overlay -->
	<div
		class="pointer-events-none fixed inset-0 z-[100] opacity-[0.03]"
		style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22256%22 height=%22256%22 filter=%22url(%23n)%22 opacity=%221%22/%3E%3C/svg%3E'); background-repeat: repeat; background-size: 256px;"
	></div>

	<!-- Nav -->
	<nav
		class="fixed top-0 right-0 left-0 z-50 border-b border-[#e8e4dc]/8 bg-[#1a1a18]/95 backdrop-blur-md"
	>
		<div class="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:px-10">
			<a
				href="/4"
				class="font-['Clash_Display',sans-serif] text-lg font-semibold tracking-tight text-[#e8e4dc] no-underline"
			>
				cowerk<span class="text-[#b8a5e3]">_5</span>
			</a>
			<div class="hidden items-center gap-8 md:flex">
				<a
					href="#konzept"
					class="text-[13px] font-light tracking-wide text-[#e8e4dc]/40 no-underline transition-colors hover:text-[#b8a5e3]"
					>Konzept</a
				>
				<a
					href="#raeume"
					class="text-[13px] font-light tracking-wide text-[#e8e4dc]/40 no-underline transition-colors hover:text-[#b8a5e3]"
					>Räume</a
				>
				<a
					href="#community"
					class="text-[13px] font-light tracking-wide text-[#e8e4dc]/40 no-underline transition-colors hover:text-[#b8a5e3]"
					>Community</a
				>
				<a
					href="#kontakt"
					class="text-[13px] font-light tracking-wide text-[#e8e4dc]/40 no-underline transition-colors hover:text-[#b8a5e3]"
					>Kontakt</a
				>
			</div>
			<a
				href="#probewoche"
				class="border border-[#b8a5e3] px-5 py-2 text-[12px] font-medium tracking-wider text-[#b8a5e3] uppercase no-underline transition-all hover:bg-[#b8a5e3] hover:text-[#1a1a18]"
			>
				Probewoche
			</a>
		</div>
	</nav>

	<!-- Hero -->
	<section class="relative pt-16">
		<div class="mx-auto max-w-[1440px]">
			<div class="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr]">
				<div class="flex flex-col justify-center px-6 py-20 md:px-10 md:py-32 lg:pr-16">
					<div class="mb-8 flex items-center gap-3">
						<div class="h-px w-10 bg-[#b8a5e3]"></div>
						<span class="text-[11px] font-medium tracking-[0.2em] text-[#b8a5e3] uppercase"
							>Zürich-Altstetten</span
						>
					</div>
					<h1
						class="mb-8 font-['Clash_Display',sans-serif] text-[clamp(3rem,6vw,6rem)] leading-[0.95] font-semibold tracking-tight"
					>
						Werkstatt.<br />
						<span class="text-[#b8a5e3]">Workspace.</span><br />
						Kollektiv.
					</h1>
					<p class="mb-10 max-w-md text-[15px] leading-[1.8] font-light text-[#e8e4dc]/50">
						cowerk_5 ist ein gemeinschaftlich geführter Coworking-Space — fokussiertes Arbeiten,
						geteilte Infrastruktur und eine starke Kultur gegenseitiger Unterstützung.
					</p>
					<div class="flex flex-wrap gap-4">
						<a
							href="#probewoche"
							class="group inline-flex items-center gap-3 bg-[#b8a5e3] px-7 py-4 text-[12px] font-medium tracking-wider text-[#1a1a18] uppercase no-underline transition-all hover:bg-[#cdbef5]"
						>
							Kostenlose Probewoche
							<span class="transition-transform group-hover:translate-x-1">&rarr;</span>
						</a>
						<a
							href="#kontakt"
							class="inline-block border border-[#e8e4dc]/15 px-7 py-4 text-[12px] font-medium tracking-wider text-[#e8e4dc]/60 uppercase no-underline transition-all hover:border-[#e8e4dc]/40 hover:text-[#e8e4dc]"
						>
							Kontakt
						</a>
					</div>
				</div>
				<div class="relative">
					<img
						src="/imgs/cowerk_1.webp"
						alt="cowerk_5"
						class="block h-full min-h-[400px] w-full object-cover brightness-75 contrast-110 lg:min-h-[600px]"
					/>
					<div
						class="absolute inset-0 hidden bg-gradient-to-r from-[#1a1a18] via-transparent to-transparent lg:block"
					></div>
					<div
						class="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-[#1a1a18] to-transparent"
					></div>
				</div>
			</div>
		</div>

		<!-- Stats bar -->
		<div class="border-t border-b border-[#e8e4dc]/8 bg-[#1a1a18]">
			<div class="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4">
				<div class="border-r border-[#e8e4dc]/8 px-6 py-6 md:px-10">
					<div class="mb-1 font-['Clash_Display',sans-serif] text-2xl font-semibold text-[#b8a5e3]">
						1 min
					</div>
					<div class="text-[11px] tracking-wider text-[#e8e4dc]/30 uppercase">Bhf Altstetten</div>
				</div>
				<div class="border-r border-[#e8e4dc]/8 px-6 py-6 md:px-10">
					<div class="mb-1 font-['Clash_Display',sans-serif] text-2xl font-semibold text-[#b8a5e3]">
						~7 J.
					</div>
					<div class="text-[11px] tracking-wider text-[#e8e4dc]/30 uppercase">In Betrieb</div>
				</div>
				<div class="border-r border-[#e8e4dc]/8 px-6 py-6 md:px-10">
					<div class="mb-1 font-['Clash_Display',sans-serif] text-2xl font-semibold text-[#b8a5e3]">
						~20
					</div>
					<div class="text-[11px] tracking-wider text-[#e8e4dc]/30 uppercase">Mitglieder</div>
				</div>
				<div class="px-6 py-6 md:px-10">
					<div class="mb-1 font-['Clash_Display',sans-serif] text-2xl font-semibold text-[#b8a5e3]">
						3-in-1
					</div>
					<div class="text-[11px] tracking-wider text-[#e8e4dc]/30 uppercase">
						Work + Werkstatt + Küche
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Probewoche -->
	<section id="probewoche" class="border-b border-[#e8e4dc]/8">
		<div class="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
			<div class="mb-14 flex items-center gap-3">
				<div class="h-px w-10 bg-[#b8a5e3]"></div>
				<span class="text-[11px] font-medium tracking-[0.2em] text-[#b8a5e3] uppercase"
					>01 — Probewoche</span
				>
			</div>
			<div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
				<div>
					<h2
						class="mb-6 font-['Clash_Display',sans-serif] text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] font-semibold tracking-tight"
					>
						Kostenlose<br />Probewoche
					</h2>
					<p class="mb-10 text-[15px] leading-[1.8] font-light text-[#e8e4dc]/50">
						Neugierig, ob das dein Ort ist? Komm eine Woche hier arbeiten, lern die Leute kennen und
						erlebe den Rhythmus des Spaces.
					</p>
					<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
						<div class="border border-[#e8e4dc]/8 p-6">
							<h3 class="mb-4 text-[12px] font-medium tracking-wider text-[#b8a5e3] uppercase">
								Was du bekommst
							</h3>
							<ul class="list-none space-y-3 p-0">
								<li class="flex gap-3 text-[13px] font-light text-[#e8e4dc]/50">
									<span class="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8a5e3]"></span>
									Ein Schreibtisch / Arbeitsplatz tagsüber
								</li>
								<li class="flex gap-3 text-[13px] font-light text-[#e8e4dc]/50">
									<span class="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8a5e3]"></span>
									Zugang zur Gemeinschaftsküche
								</li>
								<li class="flex gap-3 text-[13px] font-light text-[#e8e4dc]/50">
									<span class="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8a5e3]"></span>
									Mitglieder kennenlernen
								</li>
								<li class="flex gap-3 text-[13px] font-light text-[#e8e4dc]/50">
									<span class="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8a5e3]"></span>
									Hands-on Kultur erleben
								</li>
							</ul>
						</div>
						<div class="border border-[#e8e4dc]/8 p-6">
							<h3 class="mb-4 text-[12px] font-medium tracking-wider text-[#b8a5e3] uppercase">
								Was wir erwarten
							</h3>
							<ul class="list-none space-y-3 p-0">
								<li class="flex gap-3 text-[13px] font-light text-[#e8e4dc]/50">
									<span class="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8a5e3]"></span>
									Respekt für gemeinsame Räume
								</li>
								<li class="flex gap-3 text-[13px] font-light text-[#e8e4dc]/50">
									<span class="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8a5e3]"></span>
									Bereitschaft, sich vorzustellen
								</li>
								<li class="flex gap-3 text-[13px] font-light text-[#e8e4dc]/50">
									<span class="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8a5e3]"></span>
									Optional: eine kleine Aufgabe
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div>
					<form class="border border-[#e8e4dc]/10 bg-[#222220] p-8 md:p-10">
						<h3 class="mb-8 font-['Clash_Display',sans-serif] text-xl font-semibold">Anmeldung</h3>
						<div class="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
							<div>
								<label
									for="pw-name"
									class="mb-2 block text-[11px] tracking-wider text-[#e8e4dc]/30 uppercase"
									>Name *</label
								>
								<input
									id="pw-name"
									type="text"
									name="name"
									required
									class="w-full border-0 border-b border-[#e8e4dc]/10 bg-transparent px-0 py-3 text-sm text-[#e8e4dc] transition-colors placeholder:text-[#e8e4dc]/15 focus:border-[#b8a5e3] focus:outline-none"
									placeholder="Dein Name"
								/>
							</div>
							<div>
								<label
									for="pw-email"
									class="mb-2 block text-[11px] tracking-wider text-[#e8e4dc]/30 uppercase"
									>E-Mail *</label
								>
								<input
									id="pw-email"
									type="email"
									name="email"
									required
									class="w-full border-0 border-b border-[#e8e4dc]/10 bg-transparent px-0 py-3 text-sm text-[#e8e4dc] transition-colors placeholder:text-[#e8e4dc]/15 focus:border-[#b8a5e3] focus:outline-none"
									placeholder="name@email.ch"
								/>
							</div>
						</div>
						<div class="mb-5">
							<label
								for="pw-work"
								class="mb-2 block text-[11px] tracking-wider text-[#e8e4dc]/30 uppercase"
								>Womit arbeitest du?</label
							>
							<input
								id="pw-work"
								type="text"
								name="work"
								class="w-full border-0 border-b border-[#e8e4dc]/10 bg-transparent px-0 py-3 text-sm text-[#e8e4dc] transition-colors placeholder:text-[#e8e4dc]/15 focus:border-[#b8a5e3] focus:outline-none"
								placeholder="Design, Code, Holz..."
							/>
						</div>
						<div class="mb-5">
							<label
								for="pw-seeking"
								class="mb-2 block text-[11px] tracking-wider text-[#e8e4dc]/30 uppercase"
								>Was suchst du?</label
							>
							<textarea
								id="pw-seeking"
								name="seeking"
								rows="3"
								class="w-full resize-none border-0 border-b border-[#e8e4dc]/10 bg-transparent px-0 py-3 text-sm text-[#e8e4dc] transition-colors placeholder:text-[#e8e4dc]/15 focus:border-[#b8a5e3] focus:outline-none"
								placeholder="Community, Werkstatt, Fokus..."
							></textarea>
						</div>
						<div class="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
							<div>
								<label
									for="pw-date"
									class="mb-2 block text-[11px] tracking-wider text-[#e8e4dc]/30 uppercase"
									>Gewünschte Woche</label
								>
								<input
									id="pw-date"
									type="date"
									name="date"
									class="w-full border-0 border-b border-[#e8e4dc]/10 bg-transparent px-0 py-3 text-sm text-[#e8e4dc] transition-colors focus:border-[#b8a5e3] focus:outline-none"
								/>
							</div>
							<div>
								<label
									for="pw-source"
									class="mb-2 block text-[11px] tracking-wider text-[#e8e4dc]/30 uppercase"
									>Woher kennst du uns?</label
								>
								<input
									id="pw-source"
									type="text"
									name="source"
									class="w-full border-0 border-b border-[#e8e4dc]/10 bg-transparent px-0 py-3 text-sm text-[#e8e4dc] transition-colors placeholder:text-[#e8e4dc]/15 focus:border-[#b8a5e3] focus:outline-none"
								/>
							</div>
						</div>
						<button
							type="submit"
							class="w-full cursor-pointer border-none bg-[#b8a5e3] py-4 text-[12px] font-medium tracking-wider text-[#1a1a18] uppercase transition-colors hover:bg-[#cdbef5]"
						>
							Probewoche buchen
						</button>
						<p class="mt-4 text-center text-[11px] text-[#e8e4dc]/25">
							Wir melden uns zur Bestätigung.
						</p>
					</form>
				</div>
			</div>
		</div>
	</section>

	<!-- Konzept -->
	<section id="konzept" class="border-b border-[#e8e4dc]/8">
		<div class="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
			<div class="mb-14 flex items-center gap-3">
				<div class="h-px w-10 bg-[#b8a5e3]"></div>
				<span class="text-[11px] font-medium tracking-[0.2em] text-[#b8a5e3] uppercase"
					>02 — Konzept</span
				>
			</div>
			<div class="grid grid-cols-1 gap-16 md:grid-cols-12">
				<div class="md:col-span-5">
					<h2
						class="mb-6 font-['Clash_Display',sans-serif] text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] font-semibold tracking-tight"
					>
						Ein Kollektiv,<br />kein Büro
					</h2>
					<p class="text-[15px] leading-[1.8] font-light text-[#e8e4dc]/50">
						cowerk_5 ist ein Kollektiv von etwa 20 Personen; etwa 12 arbeiten regelmässig vom Space
						aus. Wir führen den Ort als Verein mit geteilter Verantwortung. Der Space wird von
						seinen Mitgliedern geprägt.
					</p>
				</div>
				<div class="md:col-span-7">
					<div class="grid grid-cols-1 gap-0 sm:grid-cols-3">
						<div class="border border-[#e8e4dc]/8 p-6 sm:border-r-0">
							<div
								class="mb-4 flex h-10 w-10 items-center justify-center border border-[#b8a5e3]/30"
							>
								<svg
									class="h-5 w-5 text-[#b8a5e3]"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
									/></svg
								>
							</div>
							<h4 class="mb-2 text-sm font-medium">Umweltbewusstsein</h4>
							<p class="m-0 text-[13px] leading-relaxed font-light text-[#e8e4dc]/35">
								Reparieren, Wiederverwenden, bewusster Konsum als Standard.
							</p>
						</div>
						<div class="border border-[#e8e4dc]/8 p-6 sm:border-r-0">
							<div
								class="mb-4 flex h-10 w-10 items-center justify-center border border-[#b8a5e3]/30"
							>
								<svg
									class="h-5 w-5 text-[#b8a5e3]"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
									/></svg
								>
							</div>
							<h4 class="mb-2 text-sm font-medium">Solidarität</h4>
							<p class="m-0 text-[13px] leading-relaxed font-light text-[#e8e4dc]/35">
								Gegenseitige Unterstützung und geteilte Verantwortung.
							</p>
						</div>
						<div class="border border-[#e8e4dc]/8 p-6">
							<div
								class="mb-4 flex h-10 w-10 items-center justify-center border border-[#b8a5e3]/30"
							>
								<svg
									class="h-5 w-5 text-[#b8a5e3]"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
									/></svg
								>
							</div>
							<h4 class="mb-2 text-sm font-medium">Community</h4>
							<p class="m-0 text-[13px] leading-relaxed font-light text-[#e8e4dc]/35">
								Mehr als ein Schreibtisch — ein Ort des Zusammenwirkens.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="relative mt-16">
				<img
					src="/imgs/cowerk_2.webp"
					alt="cowerk_5 Gemeinschaft"
					class="block h-56 w-full object-cover brightness-75 contrast-110 md:h-[420px]"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-t from-[#1a1a18] via-transparent to-transparent"
				></div>
			</div>
		</div>
	</section>

	<!-- Räume -->
	<section id="raeume" class="border-b border-[#e8e4dc]/8">
		<div class="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
			<div class="mb-14 flex items-center gap-3">
				<div class="h-px w-10 bg-[#b8a5e3]"></div>
				<span class="text-[11px] font-medium tracking-[0.2em] text-[#b8a5e3] uppercase"
					>03 — Räume</span
				>
			</div>
			<h2
				class="mb-14 font-['Clash_Display',sans-serif] text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] font-semibold tracking-tight"
			>
				Räume &<br />Ausstattung
			</h2>
			<div class="grid grid-cols-1 gap-px bg-[#e8e4dc]/8 md:grid-cols-2">
				<div class="group bg-[#1a1a18]">
					<div class="overflow-hidden">
						<img
							src="/imgs/cowerk_3.webp"
							alt="Coworking"
							class="block h-56 w-full object-cover brightness-65 contrast-110 transition-all duration-500 group-hover:brightness-90"
						/>
					</div>
					<div class="p-6 md:p-8">
						<h3 class="mb-2 font-['Clash_Display',sans-serif] text-lg font-semibold">
							Coworking-Bereich
						</h3>
						<p class="m-0 text-[13px] font-light text-[#e8e4dc]/40">
							Arbeitsfokussierte Zonen für konzentriertes Arbeiten. Gemeinsame Tische und flexibles
							Sitzen.
						</p>
					</div>
				</div>
				<div class="group bg-[#1a1a18]">
					<div class="overflow-hidden">
						<img
							src="/imgs/cowerk_4.webp"
							alt="Werkstatt"
							class="block h-56 w-full object-cover brightness-65 contrast-110 transition-all duration-500 group-hover:brightness-90"
						/>
					</div>
					<div class="p-6 md:p-8">
						<h3 class="mb-2 font-['Clash_Display',sans-serif] text-lg font-semibold">Werkstatt</h3>
						<p class="m-0 text-[13px] font-light text-[#e8e4dc]/40">
							Holz- und Metallbearbeitungswerkzeuge. Platz für Hands-on Projekte und Making.
						</p>
					</div>
				</div>
				<div class="group bg-[#1a1a18]">
					<div class="overflow-hidden">
						<img
							src="/imgs/cowerk_5.webp"
							alt="Küche"
							class="block h-56 w-full object-cover brightness-65 contrast-110 transition-all duration-500 group-hover:brightness-90"
						/>
					</div>
					<div class="p-6 md:p-8">
						<h3 class="mb-2 font-['Clash_Display',sans-serif] text-lg font-semibold">
							Küche & Food
						</h3>
						<p class="m-0 text-[13px] font-light text-[#e8e4dc]/40">
							Gemeinschaftsküche, wöchentliches Gemüse-Abo, Milchprodukte vom nahegelegenen Hof.
						</p>
					</div>
				</div>
				<div class="group bg-[#1a1a18]">
					<div class="overflow-hidden">
						<img
							src="/imgs/cowerk_6.webp"
							alt="Ruhe"
							class="block h-56 w-full object-cover brightness-65 contrast-110 transition-all duration-500 group-hover:brightness-90"
						/>
					</div>
					<div class="p-6 md:p-8">
						<h3 class="mb-2 font-['Clash_Display',sans-serif] text-lg font-semibold">
							Community & Ruhe
						</h3>
						<p class="m-0 text-[13px] font-light text-[#e8e4dc]/40">
							Gemütliche Ecke zum Lesen, Pausen und ruhige Momente. Tolle Aussicht.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Organisation -->
	<section class="border-b border-[#e8e4dc]/8 bg-[#222220]">
		<div class="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
			<div class="mb-14 flex items-center gap-3">
				<div class="h-px w-10 bg-[#b8a5e3]"></div>
				<span class="text-[11px] font-medium tracking-[0.2em] text-[#b8a5e3] uppercase"
					>04 — Organisation</span
				>
			</div>
			<div class="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
				<div>
					<h2
						class="mb-6 font-['Clash_Display',sans-serif] text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-semibold tracking-tight"
					>
						Geteilte<br />Verantwortung
					</h2>
					<p class="mb-10 text-[15px] leading-[1.8] font-light text-[#e8e4dc]/50">
						Wir sind ein Verein mit regelmässigen monatlichen Treffen. Entscheidungen und
						Verantwortungen werden geteilt.
					</p>
					<div class="space-y-0">
						<div class="flex gap-5 border-t border-[#e8e4dc]/8 py-4">
							<span class="w-8 shrink-0 text-sm text-[#b8a5e3]">01</span>
							<span class="text-sm font-light text-[#e8e4dc]/55">Gemeinsame Bereiche pflegen</span>
						</div>
						<div class="flex gap-5 border-t border-[#e8e4dc]/8 py-4">
							<span class="w-8 shrink-0 text-sm text-[#b8a5e3]">02</span>
							<span class="text-sm font-light text-[#e8e4dc]/55"
								>Arbeitsgruppen beitreten (Werkwartung, Küche, Anlässe)</span
							>
						</div>
						<div class="flex gap-5 border-t border-b border-[#e8e4dc]/8 py-4">
							<span class="w-8 shrink-0 text-sm text-[#b8a5e3]">03</span>
							<span class="text-sm font-light text-[#e8e4dc]/55"
								>Skills einbringen / Sessions hosten</span
							>
						</div>
					</div>
				</div>
				<div class="relative">
					<img
						src="/imgs/IMG_2142.webp"
						alt="Organisation"
						class="block h-64 w-full object-cover brightness-60 contrast-110 md:h-96"
					/>
					<div class="absolute inset-0 border border-[#b8a5e3]/20"></div>
				</div>
			</div>
		</div>
	</section>

	<!-- Events -->
	<section id="community" class="border-b border-[#e8e4dc]/8">
		<div class="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
			<div class="mb-14 flex items-center gap-3">
				<div class="h-px w-10 bg-[#b8a5e3]"></div>
				<span class="text-[11px] font-medium tracking-[0.2em] text-[#b8a5e3] uppercase"
					>05 — Community</span
				>
			</div>
			<h2
				class="mb-14 font-['Clash_Display',sans-serif] text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] font-semibold tracking-tight"
			>
				Community &<br />Events
			</h2>
			<div class="grid grid-cols-1 gap-px bg-[#e8e4dc]/8 md:grid-cols-3">
				<div class="bg-[#1a1a18] p-8 md:p-10">
					<div class="mb-4 text-[11px] font-medium tracking-wider text-[#b8a5e3] uppercase">
						Monatlich
					</div>
					<h3 class="mb-3 font-['Clash_Display',sans-serif] text-lg font-semibold">
						Kinovorführung
					</h3>
					<p class="m-0 text-[13px] font-light text-[#e8e4dc]/40">
						Mit "Kultberg" — regelmässiges Filmerlebnis im Space.
					</p>
				</div>
				<div class="bg-[#1a1a18] p-8 md:p-10">
					<div class="mb-4 text-[11px] font-medium tracking-wider text-[#b8a5e3] uppercase">
						Regelmässig
					</div>
					<h3 class="mb-3 font-['Clash_Display',sans-serif] text-lg font-semibold">Workshops</h3>
					<p class="m-0 text-[13px] font-light text-[#e8e4dc]/40">
						Hands-on Skill-Sharing und Crafting-Sessions.
					</p>
				</div>
				<div class="bg-[#1a1a18] p-8 md:p-10">
					<div class="mb-4 text-[11px] font-medium tracking-wider text-[#b8a5e3] uppercase">
						Gelegentlich
					</div>
					<h3 class="mb-3 font-['Clash_Display',sans-serif] text-lg font-semibold">
						Community-Treffen
					</h3>
					<p class="m-0 text-[13px] font-light text-[#e8e4dc]/40">
						Austausch, Planung und gemeinsames Gestalten.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Fit -->
	<section class="border-b border-[#e8e4dc]/8">
		<div class="mx-auto max-w-[1440px]">
			<div class="grid grid-cols-1 md:grid-cols-2">
				<div class="border-[#e8e4dc]/8 bg-[#b8a5e3] p-10 text-[#1a1a18] md:border-r md:p-14">
					<h2 class="mb-6 font-['Clash_Display',sans-serif] text-2xl leading-tight font-semibold">
						Für dich, wenn...
					</h2>
					<ul class="list-none space-y-3 p-0">
						<li class="flex gap-3 text-sm text-[#1a1a18]/70">
							<span class="shrink-0 font-medium">&check;</span> Du eine Community willst, nicht nur einen
							Schreibtisch
						</li>
						<li class="flex gap-3 text-sm text-[#1a1a18]/70">
							<span class="shrink-0 font-medium">&check;</span> Du umweltbewusst arbeitest und makest
						</li>
						<li class="flex gap-3 text-sm text-[#1a1a18]/70">
							<span class="shrink-0 font-medium">&check;</span> Du geteilte Verantwortung magst
						</li>
						<li class="flex gap-3 text-sm text-[#1a1a18]/70">
							<span class="shrink-0 font-medium">&check;</span> Du Events und Hands-on-Projekte geniesst
						</li>
					</ul>
				</div>
				<div class="bg-[#222220] p-10 md:p-14">
					<h2
						class="mb-6 font-['Clash_Display',sans-serif] text-2xl leading-tight font-semibold text-[#e8e4dc]/40"
					>
						Vielleicht nicht, wenn...
					</h2>
					<ul class="list-none space-y-3 p-0">
						<li class="flex gap-3 text-sm text-[#e8e4dc]/25">
							<span class="shrink-0">&times;</span> Du 100% stilles Büroumfeld brauchst
						</li>
						<li class="flex gap-3 text-sm text-[#e8e4dc]/25">
							<span class="shrink-0">&times;</span> Du servicierten Space ohne Community-Verantwortung
							bevorzugst
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Kontakt -->
	<section id="kontakt" class="border-b border-[#e8e4dc]/8">
		<div class="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
			<div class="mb-14 flex items-center gap-3">
				<div class="h-px w-10 bg-[#b8a5e3]"></div>
				<span class="text-[11px] font-medium tracking-[0.2em] text-[#b8a5e3] uppercase"
					>06 — Kontakt</span
				>
			</div>
			<div class="grid grid-cols-1 gap-16 md:grid-cols-2">
				<div>
					<h2
						class="mb-6 font-['Clash_Display',sans-serif] text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-semibold tracking-tight"
					>
						Komm<br />vorbei
					</h2>
					<p class="text-[15px] leading-[1.8] font-light text-[#e8e4dc]/50">
						1 Minute vom Bahnhof Altstetten, Zürich.
					</p>
					<p class="text-[15px] leading-[1.8] font-light text-[#e8e4dc]/50">
						Melde dich für einen Besuch.
					</p>
				</div>
				<form class="border border-[#e8e4dc]/10 bg-[#222220] p-8 md:p-10">
					<div class="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
						<div>
							<label
								for="k-name"
								class="mb-2 block text-[11px] tracking-wider text-[#e8e4dc]/30 uppercase"
								>Name</label
							>
							<input
								id="k-name"
								type="text"
								name="name"
								required
								class="w-full border-0 border-b border-[#e8e4dc]/10 bg-transparent px-0 py-3 text-sm text-[#e8e4dc] transition-colors focus:border-[#b8a5e3] focus:outline-none"
							/>
						</div>
						<div>
							<label
								for="k-email"
								class="mb-2 block text-[11px] tracking-wider text-[#e8e4dc]/30 uppercase"
								>E-Mail</label
							>
							<input
								id="k-email"
								type="email"
								name="email"
								required
								class="w-full border-0 border-b border-[#e8e4dc]/10 bg-transparent px-0 py-3 text-sm text-[#e8e4dc] transition-colors focus:border-[#b8a5e3] focus:outline-none"
							/>
						</div>
					</div>
					<div class="mb-8">
						<label
							for="k-msg"
							class="mb-2 block text-[11px] tracking-wider text-[#e8e4dc]/30 uppercase"
							>Nachricht</label
						>
						<textarea
							id="k-msg"
							name="message"
							rows="4"
							class="w-full resize-none border-0 border-b border-[#e8e4dc]/10 bg-transparent px-0 py-3 text-sm text-[#e8e4dc] transition-colors focus:border-[#b8a5e3] focus:outline-none"
						></textarea>
					</div>
					<button
						type="submit"
						class="cursor-pointer border-none bg-[#b8a5e3] px-8 py-4 text-[12px] font-medium tracking-wider text-[#1a1a18] uppercase transition-colors hover:bg-[#cdbef5]"
					>
						Nachricht senden
					</button>
				</form>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="px-6 py-8 md:px-10">
		<div class="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4">
			<span class="font-['Clash_Display',sans-serif] text-sm font-semibold"
				>cowerk<span class="text-[#b8a5e3]">_5</span></span
			>
			<span class="text-[12px] font-light text-[#e8e4dc]/25"
				>Gemeinschaftlich geführter Coworking-Space, Zürich-Altstetten</span
			>
		</div>
	</footer>
</div>
