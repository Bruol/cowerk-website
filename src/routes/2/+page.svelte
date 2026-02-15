<svelte:head>
	<title>cowerk_5 — Dein Ort zum Mitgestalten</title>
	<meta name="description" content="Gemeinschaftlicher Coworking-Space in Zürich-Altstetten" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,500&family=DM+Sans:wght@300;400;500;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div
	class="min-h-screen overflow-x-hidden bg-[#f7f3ec] font-['DM_Sans',sans-serif] text-[#3b3229]"
	style="background-image:none;"
>
	<!-- Nav -->
	<nav class="fixed top-0 right-0 left-0 z-50 bg-[#f7f3ec]/90 backdrop-blur-lg">
		<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
			<a href="/2" class="font-['Fraunces',serif] text-xl font-bold text-[#3b3229] no-underline"
				>cowerk<span class="text-[#7a9a6d]">_5</span></a
			>
			<div class="hidden items-center gap-8 md:flex">
				<a
					href="#konzept"
					class="text-sm text-[#3b3229]/70 no-underline transition-colors hover:text-[#7a9a6d]"
					>Konzept</a
				>
				<a
					href="#raeume"
					class="text-sm text-[#3b3229]/70 no-underline transition-colors hover:text-[#7a9a6d]"
					>Räume</a
				>
				<a
					href="#community"
					class="text-sm text-[#3b3229]/70 no-underline transition-colors hover:text-[#7a9a6d]"
					>Community</a
				>
				<a
					href="#kontakt"
					class="text-sm text-[#3b3229]/70 no-underline transition-colors hover:text-[#7a9a6d]"
					>Kontakt</a
				>
				<a
					href="#probewoche"
					class="rounded-full bg-[#7a9a6d] px-5 py-2.5 text-sm font-medium text-white no-underline transition-colors hover:bg-[#658a55]"
					>Probewoche</a
				>
			</div>
		</div>
	</nav>

	<!-- Hero -->
	<section class="px-6 pt-28 pb-20 md:pt-36">
		<div class="mx-auto max-w-6xl">
			<div class="mx-auto mb-12 max-w-3xl text-center">
				<div
					class="mb-8 inline-block rounded-full bg-[#7a9a6d]/10 px-5 py-2 text-sm font-medium text-[#7a9a6d]"
				>
					Zürich-Altstetten
				</div>
				<h1
					class="mb-6 font-['Fraunces',serif] text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.1] font-black tracking-tight"
				>
					Zusammen arbeiten,<br />zusammen
					<em class="font-light text-[#7a9a6d] italic">bauen</em>,<br />zusammen beitragen
				</h1>
				<p class="mx-auto max-w-xl text-lg leading-relaxed text-[#3b3229]/65">
					cowerk_5 ist ein gemeinschaftlich geführter Coworking-Space, 1 Minute vom Bahnhof
					Altstetten entfernt — fokussiertes Arbeiten, geteilte Infrastruktur und echte
					Gemeinschaft.
				</p>
				<div class="mt-10 flex flex-wrap justify-center gap-4">
					<a
						href="#probewoche"
						class="inline-block rounded-full bg-[#7a9a6d] px-8 py-4 text-sm font-medium text-white no-underline transition-all hover:bg-[#658a55] hover:shadow-lg hover:shadow-[#7a9a6d]/20"
						>Kostenlose Probewoche</a
					>
					<a
						href="#kontakt"
						class="inline-block rounded-full border border-[#3b3229]/20 px-8 py-4 text-sm font-medium text-[#3b3229] no-underline transition-all hover:border-[#7a9a6d] hover:text-[#7a9a6d]"
						>Uns besuchen</a
					>
				</div>
			</div>

			<div class="overflow-hidden rounded-3xl">
				<img
					src="/imgs/cowerk_1.webp"
					alt="cowerk_5 Space"
					class="h-64 w-full object-cover md:h-[500px]"
				/>
			</div>

			<div class="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
				<div class="rounded-2xl bg-white/60 p-5 text-center">
					<div class="mb-1 font-['Fraunces',serif] text-2xl font-bold text-[#7a9a6d]">1 min</div>
					<div class="text-xs text-[#3b3229]/50">vom Bhf Altstetten</div>
				</div>
				<div class="rounded-2xl bg-white/60 p-5 text-center">
					<div class="mb-1 font-['Fraunces',serif] text-2xl font-bold text-[#7a9a6d]">~7 J.</div>
					<div class="text-xs text-[#3b3229]/50">in Betrieb</div>
				</div>
				<div class="rounded-2xl bg-white/60 p-5 text-center">
					<div class="mb-1 font-['Fraunces',serif] text-2xl font-bold text-[#7a9a6d]">~20</div>
					<div class="text-xs text-[#3b3229]/50">Mitglieder</div>
				</div>
				<div class="rounded-2xl bg-white/60 p-5 text-center">
					<div class="mb-1 font-['Fraunces',serif] text-2xl font-bold text-[#7a9a6d]">3-in-1</div>
					<div class="text-xs text-[#3b3229]/50">Workspace+Werkstatt+Küche</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Probewoche -->
	<section id="probewoche" class="bg-[#7a9a6d] px-6 py-20 text-white">
		<div class="mx-auto max-w-6xl">
			<div class="mx-auto mb-14 max-w-2xl text-center">
				<div
					class="mb-6 inline-block rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-white"
				>
					Ausprobieren
				</div>
				<h2
					class="mb-4 font-['Fraunces',serif] text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-black tracking-tight"
				>
					Kostenlose Probewoche
				</h2>
				<p class="text-lg leading-relaxed text-white/75">
					Neugierig, ob das dein Ort ist? Komm eine Woche hier arbeiten, lern die Leute kennen und
					erlebe den Rhythmus des Spaces.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
				<div>
					<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
						<div class="rounded-2xl bg-white/10 p-6">
							<h3 class="mb-4 font-['Fraunces',serif] text-lg font-bold">Was du bekommst</h3>
							<ul class="list-none space-y-3 p-0">
								<li class="flex gap-3 text-sm text-white/80">
									<span class="shrink-0 text-white/50">&#9678;</span> Ein Schreibtisch / Arbeitsplatz
									tagsüber
								</li>
								<li class="flex gap-3 text-sm text-white/80">
									<span class="shrink-0 text-white/50">&#9678;</span> Zugang zur Gemeinschaftsküche
								</li>
								<li class="flex gap-3 text-sm text-white/80">
									<span class="shrink-0 text-white/50">&#9678;</span> Mitglieder kennenlernen
								</li>
								<li class="flex gap-3 text-sm text-white/80">
									<span class="shrink-0 text-white/50">&#9678;</span> Hands-on Kultur erleben
								</li>
							</ul>
						</div>
						<div class="rounded-2xl bg-white/10 p-6">
							<h3 class="mb-4 font-['Fraunces',serif] text-lg font-bold">Was wir erwarten</h3>
							<ul class="list-none space-y-3 p-0">
								<li class="flex gap-3 text-sm text-white/80">
									<span class="shrink-0 text-white/50">&#9678;</span> Respekt für gemeinsame Räume
								</li>
								<li class="flex gap-3 text-sm text-white/80">
									<span class="shrink-0 text-white/50">&#9678;</span> Bereitschaft, sich vorzustellen
								</li>
								<li class="flex gap-3 text-sm text-white/80">
									<span class="shrink-0 text-white/50">&#9678;</span> Optional: eine kleine Aufgabe
								</li>
							</ul>
						</div>
					</div>
				</div>
				<form class="rounded-3xl bg-white p-8 text-[#3b3229]">
					<h3 class="mb-6 font-['Fraunces',serif] text-xl font-bold text-[#3b3229]">
						Jetzt anmelden
					</h3>
					<div class="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div>
							<label class="mb-1.5 block text-xs font-medium text-[#3b3229]/50">Name *</label>
							<input
								type="text"
								name="name"
								required
								class="w-full rounded-xl border-none bg-[#f7f3ec] px-4 py-3 text-sm text-[#3b3229] focus:ring-2 focus:ring-[#7a9a6d] focus:outline-none"
							/>
						</div>
						<div>
							<label class="mb-1.5 block text-xs font-medium text-[#3b3229]/50">E-Mail *</label>
							<input
								type="email"
								name="email"
								required
								class="w-full rounded-xl border-none bg-[#f7f3ec] px-4 py-3 text-sm text-[#3b3229] focus:ring-2 focus:ring-[#7a9a6d] focus:outline-none"
							/>
						</div>
					</div>
					<div class="mb-4">
						<label class="mb-1.5 block text-xs font-medium text-[#3b3229]/50"
							>Womit arbeitest du?</label
						>
						<input
							type="text"
							name="work"
							class="w-full rounded-xl border-none bg-[#f7f3ec] px-4 py-3 text-sm text-[#3b3229] focus:ring-2 focus:ring-[#7a9a6d] focus:outline-none"
						/>
					</div>
					<div class="mb-4">
						<label class="mb-1.5 block text-xs font-medium text-[#3b3229]/50">Was suchst du?</label>
						<textarea
							name="seeking"
							rows="3"
							class="w-full resize-y rounded-xl border-none bg-[#f7f3ec] px-4 py-3 text-sm text-[#3b3229] focus:ring-2 focus:ring-[#7a9a6d] focus:outline-none"
						></textarea>
					</div>
					<div class="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div>
							<label class="mb-1.5 block text-xs font-medium text-[#3b3229]/50"
								>Gewünschte Woche</label
							>
							<input
								type="date"
								name="date"
								class="w-full rounded-xl border-none bg-[#f7f3ec] px-4 py-3 text-sm text-[#3b3229] focus:ring-2 focus:ring-[#7a9a6d] focus:outline-none"
							/>
						</div>
						<div>
							<label class="mb-1.5 block text-xs font-medium text-[#3b3229]/50"
								>Woher kennst du uns?</label
							>
							<input
								type="text"
								name="source"
								class="w-full rounded-xl border-none bg-[#f7f3ec] px-4 py-3 text-sm text-[#3b3229] focus:ring-2 focus:ring-[#7a9a6d] focus:outline-none"
							/>
						</div>
					</div>
					<button
						type="submit"
						class="mt-2 w-full cursor-pointer rounded-full border-none bg-[#7a9a6d] px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-[#658a55]"
						>Probewoche buchen</button
					>
					<p class="mt-4 text-center text-xs text-[#3b3229]/40">
						Wir melden uns, um die Verfügbarkeit zu bestätigen.
					</p>
				</form>
			</div>
		</div>
	</section>

	<!-- Konzept -->
	<section id="konzept" class="px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<div class="mx-auto mb-14 max-w-2xl text-center">
				<div
					class="mb-6 inline-block rounded-full bg-[#7a9a6d]/10 px-5 py-2 text-sm font-medium text-[#7a9a6d]"
				>
					Was dieser Ort ist
				</div>
				<h2
					class="mb-4 font-['Fraunces',serif] text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-black tracking-tight"
				>
					Ein Kollektiv,<br />kein Büro
				</h2>
				<p class="text-lg leading-relaxed text-[#3b3229]/60">
					cowerk_5 ist ein Kollektiv von etwa 20 Personen; etwa 12 arbeiten regelmässig vom Space
					aus. Wir führen den Ort als Verein mit geteilter Verantwortung.
				</p>
			</div>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
				<div class="rounded-2xl bg-white/70 p-8 text-center">
					<div
						class="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#7a9a6d]/10"
					>
						<svg
							class="h-7 w-7 text-[#7a9a6d]"
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
					<h4 class="mb-2 font-['Fraunces',serif] text-lg font-bold">Umweltbewusstsein</h4>
					<p class="m-0 text-sm text-[#3b3229]/55">
						Reparieren, Wiederverwenden, bewusster Konsum als Standard.
					</p>
				</div>
				<div class="rounded-2xl bg-white/70 p-8 text-center">
					<div
						class="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#7a9a6d]/10"
					>
						<svg
							class="h-7 w-7 text-[#7a9a6d]"
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
					<h4 class="mb-2 font-['Fraunces',serif] text-lg font-bold">Solidarität</h4>
					<p class="m-0 text-sm text-[#3b3229]/55">
						Gegenseitige Unterstützung und geteilte Verantwortung.
					</p>
				</div>
				<div class="rounded-2xl bg-white/70 p-8 text-center">
					<div
						class="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#7a9a6d]/10"
					>
						<svg
							class="h-7 w-7 text-[#7a9a6d]"
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
					<h4 class="mb-2 font-['Fraunces',serif] text-lg font-bold">Community</h4>
					<p class="m-0 text-sm text-[#3b3229]/55">
						Mehr als ein Schreibtisch — ein Ort des Zusammenwirkens.
					</p>
				</div>
			</div>
			<div class="mt-10 overflow-hidden rounded-3xl">
				<img
					src="/imgs/cowerk_2.webp"
					alt="cowerk_5 Gemeinschaft"
					class="h-48 w-full object-cover md:h-80"
				/>
			</div>
		</div>
	</section>

	<!-- Räume -->
	<section id="raeume" class="bg-[#ede8dd] px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<div class="mb-14 text-center">
				<div
					class="mb-6 inline-block rounded-full bg-[#7a9a6d]/10 px-5 py-2 text-sm font-medium text-[#7a9a6d]"
				>
					Räume & Ausstattung
				</div>
				<h2
					class="font-['Fraunces',serif] text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-black tracking-tight"
				>
					Alles unter einem Dach
				</h2>
			</div>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div class="overflow-hidden rounded-2xl bg-white">
					<img src="/imgs/cowerk_3.webp" alt="Coworking Bereich" class="h-52 w-full object-cover" />
					<div class="p-6">
						<h3 class="mb-2 font-['Fraunces',serif] text-lg font-bold">Coworking-Bereich</h3>
						<p class="m-0 text-sm text-[#3b3229]/55">
							Arbeitsfokussierte Zonen für konzentriertes Arbeiten. Gemeinsame Tische und flexibles
							Sitzen.
						</p>
					</div>
				</div>
				<div class="overflow-hidden rounded-2xl bg-white">
					<img src="/imgs/cowerk_4.webp" alt="Werkstatt" class="h-52 w-full object-cover" />
					<div class="p-6">
						<h3 class="mb-2 font-['Fraunces',serif] text-lg font-bold">Werkstatt</h3>
						<p class="m-0 text-sm text-[#3b3229]/55">
							Holz- und Metallbearbeitungswerkzeuge. Platz für Hands-on Projekte und Making.
						</p>
					</div>
				</div>
				<div class="overflow-hidden rounded-2xl bg-white">
					<img src="/imgs/cowerk_5.webp" alt="Küche" class="h-52 w-full object-cover" />
					<div class="p-6">
						<h3 class="mb-2 font-['Fraunces',serif] text-lg font-bold">Küche & Food</h3>
						<p class="m-0 text-sm text-[#3b3229]/55">
							Gemeinschaftsküche, wöchentliches Gemüse-Abo, Milchprodukte vom nahegelegenen Hof.
						</p>
					</div>
				</div>
				<div class="overflow-hidden rounded-2xl bg-white">
					<img src="/imgs/cowerk_6.webp" alt="Ruhebereich" class="h-52 w-full object-cover" />
					<div class="p-6">
						<h3 class="mb-2 font-['Fraunces',serif] text-lg font-bold">Community & Ruhe</h3>
						<p class="m-0 text-sm text-[#3b3229]/55">
							Gemütliche Ecke zum Lesen, Pausen und einen ruhigen Moment. Tolle Aussicht.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Organisation -->
	<section class="px-6 py-20">
		<div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
			<div class="overflow-hidden rounded-3xl">
				<img
					src="/imgs/IMG_2142.webp"
					alt="Organisation"
					class="h-56 w-full object-cover md:h-80"
				/>
			</div>
			<div>
				<div
					class="mb-6 inline-block rounded-full bg-[#7a9a6d]/10 px-5 py-2 text-sm font-medium text-[#7a9a6d]"
				>
					Wie wir uns organisieren
				</div>
				<h2
					class="mb-4 font-['Fraunces',serif] text-[clamp(2rem,4vw,3rem)] leading-[1.1] font-black tracking-tight"
				>
					Geteilte Verantwortung
				</h2>
				<p class="mb-6 leading-relaxed text-[#3b3229]/60">
					Wir sind ein Verein mit regelmässigen monatlichen Treffen. Entscheidungen und
					Verantwortungen werden geteilt.
				</p>
				<ul class="list-none space-y-3 p-0">
					<li class="flex gap-3 text-sm text-[#3b3229]/70">
						<span class="shrink-0 text-[#7a9a6d]">&#10140;</span> Gemeinsame Bereiche pflegen
					</li>
					<li class="flex gap-3 text-sm text-[#3b3229]/70">
						<span class="shrink-0 text-[#7a9a6d]">&#10140;</span> Arbeitsgruppen beitreten (Werkwartung,
						Küche, Anlässe)
					</li>
					<li class="flex gap-3 text-sm text-[#3b3229]/70">
						<span class="shrink-0 text-[#7a9a6d]">&#10140;</span> Skills einbringen / Sessions hosten
					</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Events -->
	<section id="community" class="bg-[#ede8dd] px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<div class="mb-14 text-center">
				<div
					class="mb-6 inline-block rounded-full bg-[#7a9a6d]/10 px-5 py-2 text-sm font-medium text-[#7a9a6d]"
				>
					Community & Events
				</div>
				<h2
					class="font-['Fraunces',serif] text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-black tracking-tight"
				>
					Mehr als Arbeit
				</h2>
			</div>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
				<div class="rounded-2xl bg-white p-8">
					<span class="text-xs font-medium tracking-wider text-[#7a9a6d] uppercase">Monatlich</span>
					<h3 class="mt-3 mb-2 font-['Fraunces',serif] text-lg font-bold">Kinovorführung</h3>
					<p class="m-0 text-sm text-[#3b3229]/55">
						Mit "Kultberg" — unser regelmässiges Filmerlebnis im Space.
					</p>
				</div>
				<div class="rounded-2xl bg-white p-8">
					<span class="text-xs font-medium tracking-wider text-[#7a9a6d] uppercase"
						>Regelmässig</span
					>
					<h3 class="mt-3 mb-2 font-['Fraunces',serif] text-lg font-bold">Workshops</h3>
					<p class="m-0 text-sm text-[#3b3229]/55">Hands-on Skill-Sharing und Crafting-Sessions.</p>
				</div>
				<div class="rounded-2xl bg-white p-8">
					<span class="text-xs font-medium tracking-wider text-[#7a9a6d] uppercase"
						>Gelegentlich</span
					>
					<h3 class="mt-3 mb-2 font-['Fraunces',serif] text-lg font-bold">Community-Treffen</h3>
					<p class="m-0 text-sm text-[#3b3229]/55">Austausch, Planung und gemeinsames Gestalten.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Fit -->
	<section class="px-6 py-20">
		<div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
			<div class="rounded-2xl bg-[#7a9a6d] p-10 text-white">
				<h2 class="mb-6 font-['Fraunces',serif] text-2xl leading-tight font-black">
					Für dich, wenn...
				</h2>
				<ul class="list-none space-y-3 p-0">
					<li class="flex gap-3 text-sm text-white/80">
						<span class="shrink-0">&#10003;</span> Du eine Community willst, nicht nur einen Schreibtisch
					</li>
					<li class="flex gap-3 text-sm text-white/80">
						<span class="shrink-0">&#10003;</span> Du umweltbewusst arbeitest und makest
					</li>
					<li class="flex gap-3 text-sm text-white/80">
						<span class="shrink-0">&#10003;</span> Du geteilte Verantwortung und kollaborative Kultur
						magst
					</li>
					<li class="flex gap-3 text-sm text-white/80">
						<span class="shrink-0">&#10003;</span> Du Events und Hands-on-Projekte geniesst
					</li>
				</ul>
			</div>
			<div class="rounded-2xl bg-[#f0ebe1] p-10 text-[#3b3229]">
				<h2 class="mb-6 font-['Fraunces',serif] text-2xl leading-tight font-black">
					Vielleicht nicht, wenn...
				</h2>
				<ul class="list-none space-y-3 p-0">
					<li class="flex gap-3 text-sm text-[#3b3229]/55">
						<span class="shrink-0 text-[#3b3229]/30">&#10005;</span> Du 100% der Zeit ein stilles Büroumfeld
						brauchst
					</li>
					<li class="flex gap-3 text-sm text-[#3b3229]/55">
						<span class="shrink-0 text-[#3b3229]/30">&#10005;</span> Du einen servicierten Space ohne
						Community-Verantwortung bevorzugst
					</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Kontakt -->
	<section id="kontakt" class="bg-[#ede8dd] px-6 py-20">
		<div class="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 md:grid-cols-2 lg:gap-16">
			<div>
				<div
					class="mb-6 inline-block rounded-full bg-[#7a9a6d]/10 px-5 py-2 text-sm font-medium text-[#7a9a6d]"
				>
					Kontakt
				</div>
				<h2
					class="mb-4 font-['Fraunces',serif] text-[clamp(2rem,4vw,3rem)] leading-[1.1] font-black tracking-tight"
				>
					Komm vorbei
				</h2>
				<p class="text-[#3b3229]/60">1 Minute vom Bahnhof Altstetten, Zürich.</p>
				<p class="text-[#3b3229]/60">Melde dich für einen Besuch — wir freuen uns auf dich.</p>
			</div>
			<form class="rounded-2xl bg-white p-8">
				<div class="mb-4">
					<label class="mb-1.5 block text-xs font-medium text-[#3b3229]/50">Name</label>
					<input
						type="text"
						name="name"
						required
						class="w-full rounded-xl border-none bg-[#f7f3ec] px-4 py-3 text-sm text-[#3b3229] focus:ring-2 focus:ring-[#7a9a6d] focus:outline-none"
					/>
				</div>
				<div class="mb-4">
					<label class="mb-1.5 block text-xs font-medium text-[#3b3229]/50">E-Mail</label>
					<input
						type="email"
						name="email"
						required
						class="w-full rounded-xl border-none bg-[#f7f3ec] px-4 py-3 text-sm text-[#3b3229] focus:ring-2 focus:ring-[#7a9a6d] focus:outline-none"
					/>
				</div>
				<div class="mb-4">
					<label class="mb-1.5 block text-xs font-medium text-[#3b3229]/50">Nachricht</label>
					<textarea
						name="message"
						rows="4"
						class="w-full resize-y rounded-xl border-none bg-[#f7f3ec] px-4 py-3 text-sm text-[#3b3229] focus:ring-2 focus:ring-[#7a9a6d] focus:outline-none"
					></textarea>
				</div>
				<button
					type="submit"
					class="w-full cursor-pointer rounded-full border-none bg-[#7a9a6d] px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-[#658a55]"
					>Nachricht senden</button
				>
			</form>
		</div>
	</section>

	<!-- Footer -->
	<footer class="px-6 py-8">
		<div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
			<p class="m-0 font-['Fraunces',serif] text-lg font-bold">
				cowerk<span class="text-[#7a9a6d]">_5</span>
			</p>
			<p class="m-0 text-sm text-[#3b3229]/40">
				Gemeinschaftlich geführter Coworking-Space, Zürich-Altstetten
			</p>
		</div>
	</footer>
</div>
