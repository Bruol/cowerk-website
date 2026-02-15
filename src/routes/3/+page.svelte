<svelte:head>
	<title>cowerk_5 / Zürich-Altstetten</title>
	<meta
		name="description"
		content="Gemeinschaftlich geführter Coworking-Space in Zürich-Altstetten"
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,700;1,6..72,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div
	class="min-h-screen overflow-x-hidden bg-white font-['Instrument_Sans',sans-serif] text-[#1a1a1a]"
	style="background-image:none;"
>
	<!-- Nav -->
	<nav class="fixed top-0 right-0 left-0 z-50 border-b border-[#e0e0e0] bg-white">
		<div class="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-8">
			<a href="/3" class="text-sm font-bold tracking-tight text-[#1a1a1a] no-underline">cowerk_5</a>
			<div class="hidden items-center gap-10 md:flex">
				<a
					href="#konzept"
					class="text-[13px] text-[#1a1a1a]/50 no-underline transition-colors hover:text-[#1a1a1a]"
					>Konzept</a
				>
				<a
					href="#raeume"
					class="text-[13px] text-[#1a1a1a]/50 no-underline transition-colors hover:text-[#1a1a1a]"
					>Räume</a
				>
				<a
					href="#community"
					class="text-[13px] text-[#1a1a1a]/50 no-underline transition-colors hover:text-[#1a1a1a]"
					>Community</a
				>
				<a
					href="#kontakt"
					class="text-[13px] text-[#1a1a1a]/50 no-underline transition-colors hover:text-[#1a1a1a]"
					>Kontakt</a
				>
			</div>
			<a
				href="#probewoche"
				class="border border-[#1a1a1a] px-5 py-1.5 text-[13px] font-semibold text-[#1a1a1a] no-underline transition-colors hover:bg-[#1a1a1a] hover:text-white"
				>Probewoche</a
			>
		</div>
	</nav>

	<!-- Hero -->
	<section class="pt-14">
		<div class="mx-auto max-w-[1400px] px-8">
			<div class="grid grid-cols-1 border-b border-[#e0e0e0] md:grid-cols-12">
				<div class="border-[#e0e0e0] py-16 md:col-span-7 md:border-r md:py-24 md:pr-16">
					<p class="mb-8 text-[13px] tracking-wide text-[#1a1a1a]/40">Zürich-Altstetten</p>
					<h1
						class="mb-8 font-['Newsreader',serif] text-[clamp(2.8rem,5vw,5rem)] leading-[1.08] font-normal tracking-[-0.025em]"
					>
						Ein kollektiver<br />Coworking-Space<br /><em class="italic">mit Herzschlag</em>
					</h1>
					<p class="mb-10 max-w-lg text-base leading-[1.75] text-[#1a1a1a]/50">
						Gemeinschaftlich geführt, 1 Minute vom Bahnhof Altstetten. Fokussiertes Arbeiten,
						geteilte Infrastruktur, gegenseitige Unterstützung.
					</p>
					<div class="flex gap-4">
						<a
							href="#probewoche"
							class="inline-block bg-[#1a1a1a] px-7 py-3.5 text-[13px] font-semibold text-white no-underline transition-colors hover:bg-[#e02b20]"
							>Kostenlose Probewoche</a
						>
						<a
							href="#kontakt"
							class="inline-block border border-[#1a1a1a]/20 px-7 py-3.5 text-[13px] font-semibold text-[#1a1a1a] no-underline transition-colors hover:border-[#1a1a1a]"
							>Kontakt</a
						>
					</div>
				</div>
				<div class="md:col-span-5">
					<img
						src="/imgs/cowerk_1.webp"
						alt="cowerk_5"
						class="block h-full min-h-[300px] w-full object-cover"
					/>
				</div>
			</div>
			<div class="grid grid-cols-2 border-b border-[#e0e0e0] md:grid-cols-4">
				<div class="border-[#e0e0e0] py-5 pr-6 md:border-r">
					<div class="mb-1 text-[11px] tracking-widest text-[#1a1a1a]/30 uppercase">Lage</div>
					<div class="text-sm font-medium">1 Min Bhf Altstetten</div>
				</div>
				<div class="border-[#e0e0e0] py-5 md:border-r md:px-6">
					<div class="mb-1 text-[11px] tracking-widest text-[#1a1a1a]/30 uppercase">Struktur</div>
					<div class="text-sm font-medium">Verein / Kollektiv</div>
				</div>
				<div class="border-[#e0e0e0] py-5 md:border-r md:px-6">
					<div class="mb-1 text-[11px] tracking-widest text-[#1a1a1a]/30 uppercase">Seit</div>
					<div class="text-sm font-medium">~7 Jahren</div>
				</div>
				<div class="py-5 md:pl-6">
					<div class="mb-1 text-[11px] tracking-widest text-[#1a1a1a]/30 uppercase">Fläche</div>
					<div class="text-sm font-medium">Workspace + Werkstatt + Küche</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Probewoche -->
	<section id="probewoche" class="border-b border-[#e0e0e0]">
		<div class="mx-auto max-w-[1400px] px-8">
			<div class="grid grid-cols-1 lg:grid-cols-12">
				<div class="border-[#e0e0e0] py-16 lg:col-span-5 lg:border-r lg:pr-16">
					<p class="mb-4 text-[11px] font-semibold tracking-widest text-[#e02b20] uppercase">
						01 / Probewoche
					</p>
					<h2
						class="mb-6 font-['Newsreader',serif] text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.1] font-normal tracking-[-0.02em]"
					>
						Kostenlose<br />Probewoche
					</h2>
					<p class="mb-8 text-[15px] leading-[1.75] text-[#1a1a1a]/50">
						Neugierig? Komm eine Woche arbeiten, lern die Leute kennen und erlebe den Rhythmus.
					</p>
					<div class="mb-6">
						<h3 class="mb-3 text-[11px] font-semibold tracking-widest text-[#1a1a1a]/30 uppercase">
							Was du bekommst
						</h3>
						<ul class="list-none space-y-2 p-0">
							<li class="border-l border-[#e0e0e0] pl-4 text-sm text-[#1a1a1a]/60">
								Ein Arbeitsplatz tagsüber
							</li>
							<li class="border-l border-[#e0e0e0] pl-4 text-sm text-[#1a1a1a]/60">
								Zugang zur Gemeinschaftsküche
							</li>
							<li class="border-l border-[#e0e0e0] pl-4 text-sm text-[#1a1a1a]/60">
								Mitglieder kennenlernen
							</li>
							<li class="border-l border-[#e0e0e0] pl-4 text-sm text-[#1a1a1a]/60">
								Kollaborative Kultur erleben
							</li>
						</ul>
					</div>
					<div>
						<h3 class="mb-3 text-[11px] font-semibold tracking-widest text-[#1a1a1a]/30 uppercase">
							Was wir erwarten
						</h3>
						<ul class="list-none space-y-2 p-0">
							<li class="border-l border-[#e0e0e0] pl-4 text-sm text-[#1a1a1a]/60">
								Respekt für gemeinsame Räume
							</li>
							<li class="border-l border-[#e0e0e0] pl-4 text-sm text-[#1a1a1a]/60">
								Bereitschaft, sich vorzustellen
							</li>
							<li class="border-l border-[#e0e0e0] pl-4 text-sm text-[#1a1a1a]/60">
								Optional: eine kleine Aufgabe
							</li>
						</ul>
					</div>
				</div>
				<div class="py-16 lg:col-span-7 lg:pl-16">
					<form>
						<h3 class="mb-8 text-[11px] font-semibold tracking-widest text-[#1a1a1a]/30 uppercase">
							Anmeldung
						</h3>
						<div class="mb-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
							<div>
								<label class="mb-2 block text-[11px] tracking-wider text-[#1a1a1a]/40 uppercase"
									>Name *</label
								>
								<input
									type="text"
									name="name"
									required
									class="w-full border-0 border-b border-[#e0e0e0] bg-transparent px-0 py-3 text-sm text-[#1a1a1a] transition-colors focus:border-[#e02b20] focus:outline-none"
								/>
							</div>
							<div>
								<label class="mb-2 block text-[11px] tracking-wider text-[#1a1a1a]/40 uppercase"
									>E-Mail *</label
								>
								<input
									type="email"
									name="email"
									required
									class="w-full border-0 border-b border-[#e0e0e0] bg-transparent px-0 py-3 text-sm text-[#1a1a1a] transition-colors focus:border-[#e02b20] focus:outline-none"
								/>
							</div>
						</div>
						<div class="mb-5">
							<label class="mb-2 block text-[11px] tracking-wider text-[#1a1a1a]/40 uppercase"
								>Womit arbeitest du?</label
							>
							<input
								type="text"
								name="work"
								class="w-full border-0 border-b border-[#e0e0e0] bg-transparent px-0 py-3 text-sm text-[#1a1a1a] transition-colors focus:border-[#e02b20] focus:outline-none"
							/>
						</div>
						<div class="mb-5">
							<label class="mb-2 block text-[11px] tracking-wider text-[#1a1a1a]/40 uppercase"
								>Was suchst du in einem Coworking-Space?</label
							>
							<textarea
								name="seeking"
								rows="3"
								class="w-full resize-none border-0 border-b border-[#e0e0e0] bg-transparent px-0 py-3 text-sm text-[#1a1a1a] transition-colors focus:border-[#e02b20] focus:outline-none"
							></textarea>
						</div>
						<div class="mb-8 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
							<div>
								<label class="mb-2 block text-[11px] tracking-wider text-[#1a1a1a]/40 uppercase"
									>Gewünschte Woche</label
								>
								<input
									type="date"
									name="date"
									class="w-full border-0 border-b border-[#e0e0e0] bg-transparent px-0 py-3 text-sm text-[#1a1a1a] transition-colors focus:border-[#e02b20] focus:outline-none"
								/>
							</div>
							<div>
								<label class="mb-2 block text-[11px] tracking-wider text-[#1a1a1a]/40 uppercase"
									>Woher kennst du uns?</label
								>
								<input
									type="text"
									name="source"
									class="w-full border-0 border-b border-[#e0e0e0] bg-transparent px-0 py-3 text-sm text-[#1a1a1a] transition-colors focus:border-[#e02b20] focus:outline-none"
								/>
							</div>
						</div>
						<button
							type="submit"
							class="cursor-pointer border-none bg-[#1a1a1a] px-8 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#e02b20]"
							>Probewoche buchen</button
						>
						<p class="mt-4 text-[12px] text-[#1a1a1a]/30">
							Wir bestätigen die Verfügbarkeit per E-Mail.
						</p>
					</form>
				</div>
			</div>
		</div>
	</section>

	<!-- Konzept -->
	<section id="konzept" class="border-b border-[#e0e0e0]">
		<div class="mx-auto max-w-[1400px] px-8 py-16">
			<p class="mb-4 text-[11px] font-semibold tracking-widest text-[#e02b20] uppercase">
				02 / Konzept
			</p>
			<div class="grid grid-cols-1 gap-12 md:grid-cols-12">
				<div class="md:col-span-5">
					<h2
						class="mb-6 font-['Newsreader',serif] text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.1] font-normal tracking-[-0.02em]"
					>
						Ein Kollektiv,<br />kein Büro
					</h2>
					<p class="text-[15px] leading-[1.75] text-[#1a1a1a]/50">
						cowerk_5 ist ein Kollektiv von etwa 20 Personen; etwa 12 arbeiten regelmässig vom Space
						aus. Wir führen den Ort als Verein mit geteilter Verantwortung.
					</p>
				</div>
				<div class="md:col-span-7">
					<div class="grid grid-cols-1 gap-0 border border-[#e0e0e0] sm:grid-cols-3">
						<div class="border-b border-[#e0e0e0] p-6 sm:border-r sm:border-b-0">
							<div class="mb-3 text-[11px] font-semibold tracking-widest text-[#e02b20] uppercase">
								Wert 01
							</div>
							<h4 class="mb-2 text-sm font-semibold">Umweltbewusstsein</h4>
							<p class="m-0 text-[13px] leading-relaxed text-[#1a1a1a]/40">
								Reparieren, Wiederverwenden, bewusster Konsum als Standard.
							</p>
						</div>
						<div class="border-b border-[#e0e0e0] p-6 sm:border-r sm:border-b-0">
							<div class="mb-3 text-[11px] font-semibold tracking-widest text-[#e02b20] uppercase">
								Wert 02
							</div>
							<h4 class="mb-2 text-sm font-semibold">Solidarität</h4>
							<p class="m-0 text-[13px] leading-relaxed text-[#1a1a1a]/40">
								Gegenseitige Unterstützung und geteilte Verantwortung.
							</p>
						</div>
						<div class="p-6">
							<div class="mb-3 text-[11px] font-semibold tracking-widest text-[#e02b20] uppercase">
								Wert 03
							</div>
							<h4 class="mb-2 text-sm font-semibold">Community</h4>
							<p class="m-0 text-[13px] leading-relaxed text-[#1a1a1a]/40">
								Mehr als ein Schreibtisch — ein Ort des Zusammenwirkens.
							</p>
						</div>
					</div>
				</div>
			</div>
			<img
				src="/imgs/cowerk_2.webp"
				alt="cowerk_5"
				class="mt-12 block h-48 w-full object-cover md:h-[400px]"
			/>
		</div>
	</section>

	<!-- Räume -->
	<section id="raeume" class="border-b border-[#e0e0e0]">
		<div class="mx-auto max-w-[1400px] px-8 py-16">
			<p class="mb-4 text-[11px] font-semibold tracking-widest text-[#e02b20] uppercase">
				03 / Räume
			</p>
			<h2
				class="mb-12 font-['Newsreader',serif] text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.1] font-normal tracking-[-0.02em]"
			>
				Räume &<br />Ausstattung
			</h2>
			<div class="grid grid-cols-1 gap-0 border border-[#e0e0e0] md:grid-cols-2">
				<div class="border-b border-[#e0e0e0] md:border-r md:border-b">
					<img src="/imgs/cowerk_3.webp" alt="Coworking" class="block h-52 w-full object-cover" />
					<div class="p-6">
						<h3 class="mb-1 text-sm font-semibold">Coworking-Bereich</h3>
						<p class="m-0 text-[13px] text-[#1a1a1a]/40">
							Arbeitsfokussierte Zonen. Gemeinsame Tische, flexibles Sitzen.
						</p>
					</div>
				</div>
				<div class="border-b border-[#e0e0e0]">
					<img src="/imgs/cowerk_4.webp" alt="Werkstatt" class="block h-52 w-full object-cover" />
					<div class="p-6">
						<h3 class="mb-1 text-sm font-semibold">Werkstatt</h3>
						<p class="m-0 text-[13px] text-[#1a1a1a]/40">
							Holz- und Metallbearbeitung. Platz für Hands-on Projekte.
						</p>
					</div>
				</div>
				<div class="border-b border-[#e0e0e0] md:border-r md:border-b-0">
					<img src="/imgs/cowerk_5.webp" alt="Küche" class="block h-52 w-full object-cover" />
					<div class="p-6">
						<h3 class="mb-1 text-sm font-semibold">Küche & Food</h3>
						<p class="m-0 text-[13px] text-[#1a1a1a]/40">
							Gemeinschaftsküche, Gemüse-Abo, Hofprodukte.
						</p>
					</div>
				</div>
				<div>
					<img src="/imgs/cowerk_6.webp" alt="Ruhe" class="block h-52 w-full object-cover" />
					<div class="p-6">
						<h3 class="mb-1 text-sm font-semibold">Community & Ruhe</h3>
						<p class="m-0 text-[13px] text-[#1a1a1a]/40">
							Lesen, Pausen, ruhige Momente. Tolle Aussicht.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Organisation -->
	<section class="border-b border-[#e0e0e0]">
		<div class="mx-auto max-w-[1400px] px-8">
			<div class="grid grid-cols-1 md:grid-cols-12">
				<div class="border-[#e0e0e0] py-16 md:col-span-5 md:border-r md:pr-16">
					<p class="mb-4 text-[11px] font-semibold tracking-widest text-[#e02b20] uppercase">
						04 / Organisation
					</p>
					<h2
						class="mb-6 font-['Newsreader',serif] text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.1] font-normal tracking-[-0.02em]"
					>
						Geteilte<br />Verantwortung
					</h2>
					<p class="mb-8 text-[15px] leading-[1.75] text-[#1a1a1a]/50">
						Verein mit monatlichen Treffen. Entscheidungen werden gemeinsam getragen.
					</p>
					<div class="space-y-0">
						<div class="flex gap-6 border-t border-[#e0e0e0] py-4 text-sm">
							<span class="w-6 shrink-0 font-medium text-[#1a1a1a]/20">01</span>
							<span class="text-[#1a1a1a]/60">Gemeinsame Bereiche pflegen</span>
						</div>
						<div class="flex gap-6 border-t border-[#e0e0e0] py-4 text-sm">
							<span class="w-6 shrink-0 font-medium text-[#1a1a1a]/20">02</span>
							<span class="text-[#1a1a1a]/60">Arbeitsgruppen beitreten</span>
						</div>
						<div class="flex gap-6 border-t border-b border-[#e0e0e0] py-4 text-sm">
							<span class="w-6 shrink-0 font-medium text-[#1a1a1a]/20">03</span>
							<span class="text-[#1a1a1a]/60">Skills einbringen / Sessions hosten</span>
						</div>
					</div>
				</div>
				<div class="md:col-span-7">
					<img
						src="/imgs/IMG_2142.webp"
						alt="Organisation"
						class="block h-full min-h-[280px] w-full object-cover"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Events -->
	<section id="community" class="border-b border-[#e0e0e0]">
		<div class="mx-auto max-w-[1400px] px-8 py-16">
			<p class="mb-4 text-[11px] font-semibold tracking-widest text-[#e02b20] uppercase">
				05 / Community
			</p>
			<h2
				class="mb-12 font-['Newsreader',serif] text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.1] font-normal tracking-[-0.02em]"
			>
				Community<br />& Events
			</h2>
			<div class="grid grid-cols-1 gap-0 border border-[#e0e0e0] md:grid-cols-3">
				<div class="border-b border-[#e0e0e0] p-8 md:border-r md:border-b-0">
					<div class="mb-3 text-[11px] font-semibold tracking-widest text-[#e02b20] uppercase">
						Monatlich
					</div>
					<h3 class="mb-2 text-sm font-semibold">Kinovorführung</h3>
					<p class="m-0 text-[13px] leading-relaxed text-[#1a1a1a]/40">
						Mit "Kultberg" — Filmerlebnis im Space.
					</p>
				</div>
				<div class="border-b border-[#e0e0e0] p-8 md:border-r md:border-b-0">
					<div class="mb-3 text-[11px] font-semibold tracking-widest text-[#e02b20] uppercase">
						Regelmässig
					</div>
					<h3 class="mb-2 text-sm font-semibold">Workshops</h3>
					<p class="m-0 text-[13px] leading-relaxed text-[#1a1a1a]/40">
						Hands-on Skill-Sharing und Crafting.
					</p>
				</div>
				<div class="p-8">
					<div class="mb-3 text-[11px] font-semibold tracking-widest text-[#e02b20] uppercase">
						Gelegentlich
					</div>
					<h3 class="mb-2 text-sm font-semibold">Community-Treffen</h3>
					<p class="m-0 text-[13px] leading-relaxed text-[#1a1a1a]/40">
						Austausch, Planung und Gestalten.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Fit -->
	<section class="border-b border-[#e0e0e0]">
		<div class="mx-auto max-w-[1400px] px-8">
			<div class="grid grid-cols-1 md:grid-cols-2">
				<div class="border-[#e0e0e0] py-16 md:border-r md:pr-16">
					<h2 class="mb-6 font-['Newsreader',serif] text-2xl leading-tight font-normal">
						Für dich, wenn...
					</h2>
					<ul class="list-none space-y-3 p-0">
						<li class="border-l-2 border-[#1a1a1a] pl-4 text-sm text-[#1a1a1a]/60">
							Du eine Community willst, nicht nur einen Schreibtisch
						</li>
						<li class="border-l-2 border-[#1a1a1a] pl-4 text-sm text-[#1a1a1a]/60">
							Du umweltbewusst arbeitest und makest
						</li>
						<li class="border-l-2 border-[#1a1a1a] pl-4 text-sm text-[#1a1a1a]/60">
							Du geteilte Verantwortung magst
						</li>
						<li class="border-l-2 border-[#1a1a1a] pl-4 text-sm text-[#1a1a1a]/60">
							Du Events und Projekte geniesst
						</li>
					</ul>
				</div>
				<div class="py-16 md:pl-16">
					<h2
						class="mb-6 font-['Newsreader',serif] text-2xl leading-tight font-normal text-[#1a1a1a]/40"
					>
						Vielleicht nicht, wenn...
					</h2>
					<ul class="list-none space-y-3 p-0">
						<li class="border-l-2 border-[#e0e0e0] pl-4 text-sm text-[#1a1a1a]/30">
							Du 100% stilles Büroumfeld brauchst
						</li>
						<li class="border-l-2 border-[#e0e0e0] pl-4 text-sm text-[#1a1a1a]/30">
							Du servicierten Space ohne Community-Verantwortung bevorzugst
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Kontakt -->
	<section id="kontakt" class="border-b border-[#e0e0e0]">
		<div class="mx-auto max-w-[1400px] px-8">
			<div class="grid grid-cols-1 md:grid-cols-12">
				<div class="border-[#e0e0e0] py-16 md:col-span-4 md:border-r md:pr-16">
					<p class="mb-4 text-[11px] font-semibold tracking-widest text-[#e02b20] uppercase">
						06 / Kontakt
					</p>
					<h2
						class="mb-6 font-['Newsreader',serif] text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.1] font-normal tracking-[-0.02em]"
					>
						Komm<br />vorbei
					</h2>
					<p class="text-[15px] leading-[1.75] text-[#1a1a1a]/50">
						1 Minute vom Bahnhof Altstetten, Zürich.
					</p>
					<p class="text-[15px] leading-[1.75] text-[#1a1a1a]/50">Melde dich für einen Besuch.</p>
				</div>
				<div class="py-16 md:col-span-8 md:pl-16">
					<form>
						<div class="mb-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
							<div>
								<label class="mb-2 block text-[11px] tracking-wider text-[#1a1a1a]/40 uppercase"
									>Name</label
								>
								<input
									type="text"
									name="name"
									required
									class="w-full border-0 border-b border-[#e0e0e0] bg-transparent px-0 py-3 text-sm text-[#1a1a1a] transition-colors focus:border-[#e02b20] focus:outline-none"
								/>
							</div>
							<div>
								<label class="mb-2 block text-[11px] tracking-wider text-[#1a1a1a]/40 uppercase"
									>E-Mail</label
								>
								<input
									type="email"
									name="email"
									required
									class="w-full border-0 border-b border-[#e0e0e0] bg-transparent px-0 py-3 text-sm text-[#1a1a1a] transition-colors focus:border-[#e02b20] focus:outline-none"
								/>
							</div>
						</div>
						<div class="mb-8">
							<label class="mb-2 block text-[11px] tracking-wider text-[#1a1a1a]/40 uppercase"
								>Nachricht</label
							>
							<textarea
								name="message"
								rows="4"
								class="w-full resize-none border-0 border-b border-[#e0e0e0] bg-transparent px-0 py-3 text-sm text-[#1a1a1a] transition-colors focus:border-[#e02b20] focus:outline-none"
							></textarea>
						</div>
						<button
							type="submit"
							class="cursor-pointer border-none bg-[#1a1a1a] px-8 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#e02b20]"
							>Nachricht senden</button
						>
					</form>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="px-8 py-8">
		<div class="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4">
			<span class="text-sm font-bold">cowerk_5</span>
			<span class="text-[13px] text-[#1a1a1a]/30"
				>Gemeinschaftlich geführter Coworking-Space, Zürich-Altstetten</span
			>
		</div>
	</footer>
</div>
