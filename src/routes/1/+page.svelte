<svelte:head>
	<title>COWERK_5 // ZÜRICH</title>
	<meta name="description" content="Kollektiver Coworking-Space Zürich-Altstetten" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&family=Archivo+Black&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div
	class="min-h-screen overflow-x-hidden bg-[#f0f0e8] font-['JetBrains_Mono',monospace] text-[#111]"
	style="background-image:none;"
>
	<!-- Nav -->
	<nav
		class="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b-4 border-[#ff3a20] bg-[#111] px-5 py-3 text-[#f0f0e8] md:px-8"
	>
		<div class="font-['Archivo_Black',sans-serif] text-xl">
			COWERK<span class="text-[#ff3a20]">_5</span>
		</div>
		<div class="hidden items-center gap-6 md:flex">
			<a
				href="#konzept"
				class="text-xs text-[#f0f0e8] no-underline transition-colors hover:text-[#ff3a20]"
				>[KONZEPT]</a
			>
			<a
				href="#raeume"
				class="text-xs text-[#f0f0e8] no-underline transition-colors hover:text-[#ff3a20]"
				>[RÄUME]</a
			>
			<a
				href="#community"
				class="text-xs text-[#f0f0e8] no-underline transition-colors hover:text-[#ff3a20]"
				>[COMMUNITY]</a
			>
			<a
				href="#kontakt"
				class="text-xs text-[#f0f0e8] no-underline transition-colors hover:text-[#ff3a20]"
				>[KONTAKT]</a
			>
			<a href="#probewoche" class="text-xs font-bold text-[#ff3a20] no-underline">>>> PROBEWOCHE</a>
		</div>
	</nav>

	<!-- Marquee -->
	<div class="overflow-hidden bg-[#ff3a20] py-2.5 pt-14 whitespace-nowrap text-white">
		<div
			class="inline-flex animate-[marquee_20s_linear_infinite] font-['Archivo_Black',sans-serif] text-sm tracking-widest uppercase"
		>
			<span class="pr-12">COWORKING MIT COMMUNITY-HERZSCHLAG ///</span>
			<span class="pr-12">COWORKING MIT COMMUNITY-HERZSCHLAG ///</span>
			<span class="pr-12">COWORKING MIT COMMUNITY-HERZSCHLAG ///</span>
			<span class="pr-12">COWORKING MIT COMMUNITY-HERZSCHLAG ///</span>
		</div>
	</div>

	<!-- Hero -->
	<section class="grid grid-cols-1 border-b-4 border-[#111] lg:grid-cols-[1.2fr_1fr]">
		<div class="flex flex-col justify-between p-8 md:p-12 lg:border-r-4 lg:border-[#111]">
			<h1
				class="m-0 font-['Archivo_Black',sans-serif] text-[clamp(2.5rem,7vw,7rem)] leading-[0.95] uppercase"
			>
				EIN KOLLEKTIVER<br />COWORKING-<br />SPACE IN<br />ZÜRICH-<br />ALTSTETTEN
			</h1>
			<div class="mt-8">
				<div class="flex gap-4 border-t border-black/15 py-2 text-xs">
					<span class="min-w-20 font-bold">STATUS:</span>
					<span class="text-[#555]">AKTIV SEIT ~7 JAHREN</span>
				</div>
				<div class="flex gap-4 border-t border-black/15 py-2 text-xs">
					<span class="min-w-20 font-bold">ORT:</span>
					<span class="text-[#555]">1 MIN BHF ALTSTETTEN</span>
				</div>
				<div class="flex gap-4 border-t border-b border-black/15 py-2 text-xs">
					<span class="min-w-20 font-bold">TYP:</span>
					<span class="text-[#555]">VEREIN / KOLLEKTIV</span>
				</div>
			</div>
		</div>
		<div class="flex flex-col">
			<img
				src="/imgs/cowerk_1.webp"
				alt="COWERK_5"
				class="block h-64 w-full border-b-4 border-[#111] object-cover md:h-96"
			/>
			<div class="border-b-4 border-[#111] p-6 md:p-10">
				<p class="m-0 text-sm leading-relaxed">
					cowerk_5 ist ein gemeinschaftlich geführter Coworking-Space — fokussiertes Arbeiten,
					geteilte Infrastruktur und eine starke Kultur gegenseitiger Unterstützung und
					Nachhaltigkeit.
				</p>
			</div>
			<div class="flex flex-wrap gap-4 p-6 md:p-10">
				<a
					href="#probewoche"
					class="inline-block border-4 border-[#111] bg-[#111] px-6 py-4 text-xs font-bold text-[#f0f0e8] uppercase no-underline transition-colors hover:border-[#ff3a20] hover:bg-[#ff3a20]"
					>KOSTENLOSE PROBEWOCHE >>></a
				>
				<a
					href="#kontakt"
					class="inline-block border-4 border-[#111] bg-transparent px-6 py-4 text-xs font-bold text-[#111] uppercase no-underline transition-colors hover:bg-[#111] hover:text-[#f0f0e8]"
					>KONTAKT</a
				>
			</div>
		</div>
	</section>

	<!-- Probewoche -->
	<section id="probewoche" class="border-b-4 border-[#111] p-8 md:p-12">
		<div
			class="-mb-4 font-['Archivo_Black',sans-serif] text-7xl leading-none text-black/5 md:text-8xl"
		>
			001
		</div>
		<h2
			class="mb-8 font-['Archivo_Black',sans-serif] text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] uppercase"
		>
			KOSTENLOSE<br />PROBEWOCHE
		</h2>
		<div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
			<div>
				<p class="mb-8 text-base leading-relaxed">
					Neugierig, ob das dein Ort ist? Komm eine Woche hier arbeiten, lern die Leute kennen und
					erlebe den Rhythmus des Spaces.
				</p>
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
					<div class="border-2 border-[#111] bg-black/2 p-6">
						<h3 class="mb-3 text-sm font-bold uppercase">// WAS DU BEKOMMST</h3>
						<ul class="list-none space-y-1 p-0">
							<li class="text-sm">--&gt; Ein Schreibtisch / Arbeitsplatz tagsüber</li>
							<li class="text-sm">--&gt; Zugang zur Gemeinschaftsküche</li>
							<li class="text-sm">--&gt; Mitglieder kennenlernen</li>
							<li class="text-sm">--&gt; Kollaborative, hands-on Kultur</li>
						</ul>
					</div>
					<div class="border-2 border-[#111] bg-black/2 p-6">
						<h3 class="mb-3 text-sm font-bold uppercase">// WAS WIR ERWARTEN</h3>
						<ul class="list-none space-y-1 p-0">
							<li class="text-sm">--&gt; Respekt für gemeinsame Räume</li>
							<li class="text-sm">--&gt; Bereitschaft, sich vorzustellen</li>
							<li class="text-sm">--&gt; Optional: eine kleine Aufgabe</li>
						</ul>
					</div>
				</div>
			</div>
			<div>
				<form class="border-4 border-[#111] bg-white p-6 md:p-8">
					<div
						class="mb-6 border-b-2 border-[#111] pb-3 font-['Archivo_Black',sans-serif] text-2xl"
					>
						ANMELDUNG_
					</div>
					<div class="mb-4">
						<label class="mb-1 block text-[0.7rem] font-bold tracking-wider uppercase">NAME *</label
						>
						<input
							type="text"
							name="name"
							required
							placeholder="_____________"
							class="w-full border-2 border-[#111] bg-[#f0f0e8] px-3 py-2.5 font-['JetBrains_Mono',monospace] text-sm focus:border-[#ff3a20] focus:bg-white focus:outline-none"
						/>
					</div>
					<div class="mb-4">
						<label class="mb-1 block text-[0.7rem] font-bold tracking-wider uppercase"
							>E-MAIL *</label
						>
						<input
							type="email"
							name="email"
							required
							placeholder="_____________"
							class="w-full border-2 border-[#111] bg-[#f0f0e8] px-3 py-2.5 font-['JetBrains_Mono',monospace] text-sm focus:border-[#ff3a20] focus:bg-white focus:outline-none"
						/>
					</div>
					<div class="mb-4">
						<label class="mb-1 block text-[0.7rem] font-bold tracking-wider uppercase"
							>WOMIT ARBEITEST DU?</label
						>
						<input
							type="text"
							name="work"
							placeholder="_____________"
							class="w-full border-2 border-[#111] bg-[#f0f0e8] px-3 py-2.5 font-['JetBrains_Mono',monospace] text-sm focus:border-[#ff3a20] focus:bg-white focus:outline-none"
						/>
					</div>
					<div class="mb-4">
						<label class="mb-1 block text-[0.7rem] font-bold tracking-wider uppercase"
							>WAS SUCHST DU?</label
						>
						<textarea
							name="seeking"
							rows="3"
							placeholder="_____________"
							class="w-full resize-y border-2 border-[#111] bg-[#f0f0e8] px-3 py-2.5 font-['JetBrains_Mono',monospace] text-sm focus:border-[#ff3a20] focus:bg-white focus:outline-none"
						></textarea>
					</div>
					<div class="mb-4">
						<label class="mb-1 block text-[0.7rem] font-bold tracking-wider uppercase"
							>GEWÜNSCHTE WOCHE</label
						>
						<input
							type="date"
							name="date"
							class="w-full border-2 border-[#111] bg-[#f0f0e8] px-3 py-2.5 font-['JetBrains_Mono',monospace] text-sm focus:border-[#ff3a20] focus:bg-white focus:outline-none"
						/>
					</div>
					<div class="mb-4">
						<label class="mb-1 block text-[0.7rem] font-bold tracking-wider uppercase"
							>WOHER KENNST DU UNS?</label
						>
						<input
							type="text"
							name="source"
							placeholder="_____________"
							class="w-full border-2 border-[#111] bg-[#f0f0e8] px-3 py-2.5 font-['JetBrains_Mono',monospace] text-sm focus:border-[#ff3a20] focus:bg-white focus:outline-none"
						/>
					</div>
					<button
						type="submit"
						class="mt-2 w-full cursor-pointer border-4 border-[#ff3a20] bg-[#ff3a20] px-6 py-4 font-['JetBrains_Mono',monospace] text-xs font-bold text-white uppercase transition-colors hover:border-[#111] hover:bg-[#111]"
						>ABSENDEN >>></button
					>
					<p class="mt-3 text-center text-xs text-[#888]">// Wir melden uns zur Bestätigung.</p>
				</form>
			</div>
		</div>
	</section>

	<!-- Konzept -->
	<section id="konzept" class="border-b-4 border-[#111] p-8 md:p-12">
		<div
			class="-mb-4 font-['Archivo_Black',sans-serif] text-7xl leading-none text-black/5 md:text-8xl"
		>
			002
		</div>
		<h2
			class="mb-8 font-['Archivo_Black',sans-serif] text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] uppercase"
		>
			WAS DIESER<br />ORT IST
		</h2>
		<div class="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
			<p class="text-base leading-[1.7]">
				cowerk_5 ist ein Kollektiv von etwa 20 Personen; etwa 12 arbeiten regelmässig vom Space aus.
				Wir führen den Ort als Verein mit geteilter Verantwortung. Der Space wird von seinen
				Mitgliedern geprägt: Ideen einbringen, die Infrastruktur verbessern und die Atmosphäre
				mitgestalten.
			</p>
			<div class="flex flex-col gap-6">
				<div class="border-l-4 border-[#ff3a20] pl-5">
					<span class="text-xs font-bold text-[#ff3a20]">[A]</span>
					<h4 class="mt-1 mb-1 text-sm font-bold uppercase">UMWELTBEWUSSTSEIN</h4>
					<p class="m-0 text-xs text-[#555]">
						Reparieren, Wiederverwenden, bewusster Konsum als Standard.
					</p>
				</div>
				<div class="border-l-4 border-[#ff3a20] pl-5">
					<span class="text-xs font-bold text-[#ff3a20]">[B]</span>
					<h4 class="mt-1 mb-1 text-sm font-bold uppercase">SOLIDARITÄT</h4>
					<p class="m-0 text-xs text-[#555]">
						Gegenseitige Unterstützung und geteilte Verantwortung.
					</p>
				</div>
				<div class="border-l-4 border-[#ff3a20] pl-5">
					<span class="text-xs font-bold text-[#ff3a20]">[C]</span>
					<h4 class="mt-1 mb-1 text-sm font-bold uppercase">COMMUNITY</h4>
					<p class="m-0 text-xs text-[#555]">
						Mehr als ein Schreibtisch — ein Ort des Zusammenwirkens.
					</p>
				</div>
			</div>
		</div>
		<img
			src="/imgs/cowerk_2.webp"
			alt="COWERK_5 SPACE"
			class="block h-64 w-full border-4 border-[#111] object-cover contrast-110 grayscale-[30%] md:h-96"
		/>
	</section>

	<!-- Räume -->
	<section id="raeume" class="border-b-4 border-[#111] p-8 md:p-12">
		<div
			class="-mb-4 font-['Archivo_Black',sans-serif] text-7xl leading-none text-black/5 md:text-8xl"
		>
			003
		</div>
		<h2
			class="mb-8 font-['Archivo_Black',sans-serif] text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] uppercase"
		>
			RÄUME &<br />AUSSTATTUNG
		</h2>
		<div class="grid grid-cols-1 border-4 border-[#111] md:grid-cols-2">
			<div class="border-b-2 border-[#111] md:border-r-2 md:border-b-2">
				<img
					src="/imgs/cowerk_3.webp"
					alt="COWORKING"
					class="block h-56 w-full border-b-2 border-[#111] object-cover contrast-110 grayscale-[30%] transition-all hover:contrast-100 hover:grayscale-0"
				/>
				<div class="p-6">
					<h3 class="mb-2 text-sm font-bold uppercase">COWORKING-BEREICH</h3>
					<p class="text-xs text-[#555]">
						Arbeitsfokussierte Zonen für konzentriertes Arbeiten. Gemeinsame Tische und flexibles
						Sitzen.
					</p>
				</div>
			</div>
			<div class="border-b-2 border-[#111] md:border-b-2">
				<img
					src="/imgs/cowerk_4.webp"
					alt="WERKSTATT"
					class="block h-56 w-full border-b-2 border-[#111] object-cover contrast-110 grayscale-[30%] transition-all hover:contrast-100 hover:grayscale-0"
				/>
				<div class="p-6">
					<h3 class="mb-2 text-sm font-bold uppercase">WERKSTATT</h3>
					<p class="text-xs text-[#555]">
						Holz- und Metallbearbeitungswerkzeuge. Platz für Hands-on Projekte und Making.
					</p>
				</div>
			</div>
			<div class="border-b-2 border-[#111] md:border-r-2 md:border-b-0">
				<img
					src="/imgs/cowerk_5.webp"
					alt="KÜCHE"
					class="block h-56 w-full border-b-2 border-[#111] object-cover contrast-110 grayscale-[30%] transition-all hover:contrast-100 hover:grayscale-0"
				/>
				<div class="p-6">
					<h3 class="mb-2 text-sm font-bold uppercase">KÜCHE & FOOD</h3>
					<p class="text-xs text-[#555]">
						Gemeinschaftsküche, wöchentliches Gemüse-Abo, Milchprodukte vom nahegelegenen Hof.
					</p>
				</div>
			</div>
			<div>
				<img
					src="/imgs/cowerk_6.webp"
					alt="RUHE"
					class="block h-56 w-full border-b-2 border-[#111] object-cover contrast-110 grayscale-[30%] transition-all hover:contrast-100 hover:grayscale-0"
				/>
				<div class="p-6">
					<h3 class="mb-2 text-sm font-bold uppercase">COMMUNITY & RUHE</h3>
					<p class="text-xs text-[#555]">
						Gemütliche Ecke zum Lesen, Pausen und ruhige Momente. Tolle Aussicht inklusive.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Organisation -->
	<section class="border-b-4 border-[#ff3a20] bg-[#111] p-8 text-[#f0f0e8] md:p-12">
		<div
			class="-mb-4 font-['Archivo_Black',sans-serif] text-7xl leading-none text-white/5 md:text-8xl"
		>
			004
		</div>
		<h2
			class="mb-8 font-['Archivo_Black',sans-serif] text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] uppercase"
		>
			ORGANISATION
		</h2>
		<div class="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
			<div>
				<p class="leading-relaxed text-[#aaa]">
					Wir sind ein Verein mit regelmässigen monatlichen Treffen. Entscheidungen und
					Verantwortungen werden geteilt.
				</p>
				<div class="mt-8 space-y-0">
					<div class="flex gap-4 border-t border-white/10 py-3 text-sm">
						<span class="font-bold text-[#ff3a20]">&gt;&gt;</span>
						<span>Gemeinsame Bereiche pflegen</span>
					</div>
					<div class="flex gap-4 border-t border-white/10 py-3 text-sm">
						<span class="font-bold text-[#ff3a20]">&gt;&gt;</span>
						<span>Arbeitsgruppen beitreten (Werkwartung, Küche, Anlässe)</span>
					</div>
					<div class="flex gap-4 border-t border-b border-white/10 py-3 text-sm">
						<span class="font-bold text-[#ff3a20]">&gt;&gt;</span>
						<span>Skills einbringen / Sessions hosten</span>
					</div>
				</div>
			</div>
			<img
				src="/imgs/IMG_2142.webp"
				alt="ORGANISATION"
				class="h-56 w-full border-4 border-[#ff3a20] object-cover grayscale-[50%] md:h-80"
			/>
		</div>
	</section>

	<!-- Events -->
	<section id="community" class="border-b-4 border-[#111] p-8 md:p-12">
		<div
			class="-mb-4 font-['Archivo_Black',sans-serif] text-7xl leading-none text-black/5 md:text-8xl"
		>
			005
		</div>
		<h2
			class="mb-8 font-['Archivo_Black',sans-serif] text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] uppercase"
		>
			COMMUNITY<br />& EVENTS
		</h2>
		<div class="grid grid-cols-1 border-4 border-[#111] md:grid-cols-3">
			<div class="border-b-2 border-[#111] p-8 md:border-r-2 md:border-b-0">
				<span class="text-[0.7rem] font-bold tracking-widest text-[#ff3a20]">MONATLICH</span>
				<h3 class="mt-2 mb-2 text-sm font-bold uppercase">KINOVORFÜHRUNG</h3>
				<p class="text-xs text-[#555]">Mit "Kultberg" — regelmässiges Filmerlebnis im Space.</p>
			</div>
			<div class="border-b-2 border-[#111] p-8 md:border-r-2 md:border-b-0">
				<span class="text-[0.7rem] font-bold tracking-widest text-[#ff3a20]">REGELMÄSSIG</span>
				<h3 class="mt-2 mb-2 text-sm font-bold uppercase">WORKSHOPS</h3>
				<p class="text-xs text-[#555]">Hands-on Skill-Sharing und Crafting-Sessions.</p>
			</div>
			<div class="p-8">
				<span class="text-[0.7rem] font-bold tracking-widest text-[#ff3a20]">GELEGENTLICH</span>
				<h3 class="mt-2 mb-2 text-sm font-bold uppercase">COMMUNITY-TREFFEN</h3>
				<p class="text-xs text-[#555]">Austausch, Planung und gemeinsames Gestalten.</p>
			</div>
		</div>
	</section>

	<!-- Fit -->
	<section class="grid grid-cols-1 border-b-4 border-[#111] md:grid-cols-2">
		<div class="bg-[#ff3a20] p-8 text-white md:p-12">
			<h2
				class="mb-6 font-['Archivo_Black',sans-serif] text-[clamp(1.8rem,3vw,3rem)] leading-[0.95] uppercase"
			>
				FÜR DICH<br />WENN_
			</h2>
			<ul class="list-none space-y-2 p-0">
				<li class="text-sm text-white/85">
					--&gt; Du eine Community willst, nicht nur einen Schreibtisch
				</li>
				<li class="text-sm text-white/85">--&gt; Du umweltbewusst arbeitest und makest</li>
				<li class="text-sm text-white/85">--&gt; Du geteilte Verantwortung magst</li>
				<li class="text-sm text-white/85">--&gt; Du Events und Hands-on-Projekte geniesst</li>
			</ul>
		</div>
		<div class="bg-[#111] p-8 text-[#f0f0e8] md:p-12">
			<h2
				class="mb-6 font-['Archivo_Black',sans-serif] text-[clamp(1.8rem,3vw,3rem)] leading-[0.95] uppercase"
			>
				NICHT FÜR<br />DICH WENN_
			</h2>
			<ul class="list-none space-y-2 p-0">
				<li class="text-sm text-[#888]">--&gt; Du 100% stilles Büroumfeld brauchst</li>
				<li class="text-sm text-[#888]">
					--&gt; Du servicierten Space ohne Community-Verantwortung bevorzugst
				</li>
			</ul>
		</div>
	</section>

	<!-- Kontakt -->
	<section id="kontakt" class="border-b-4 border-[#111] p-8 md:p-12">
		<div
			class="-mb-4 font-['Archivo_Black',sans-serif] text-7xl leading-none text-black/5 md:text-8xl"
		>
			006
		</div>
		<h2
			class="mb-8 font-['Archivo_Black',sans-serif] text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] uppercase"
		>
			KONTAKT
		</h2>
		<div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
			<div>
				<p class="text-base leading-relaxed">1 Minute vom Bahnhof Altstetten, Zürich.</p>
				<p class="text-sm text-[#555]">Melde dich für einen Besuch.</p>
			</div>
			<form class="border-4 border-[#111] bg-white p-6 md:p-8">
				<div class="mb-4">
					<label class="mb-1 block text-[0.7rem] font-bold tracking-wider uppercase">NAME</label>
					<input
						type="text"
						name="name"
						required
						placeholder="_____________"
						class="w-full border-2 border-[#111] bg-[#f0f0e8] px-3 py-2.5 font-['JetBrains_Mono',monospace] text-sm focus:border-[#ff3a20] focus:bg-white focus:outline-none"
					/>
				</div>
				<div class="mb-4">
					<label class="mb-1 block text-[0.7rem] font-bold tracking-wider uppercase">E-MAIL</label>
					<input
						type="email"
						name="email"
						required
						placeholder="_____________"
						class="w-full border-2 border-[#111] bg-[#f0f0e8] px-3 py-2.5 font-['JetBrains_Mono',monospace] text-sm focus:border-[#ff3a20] focus:bg-white focus:outline-none"
					/>
				</div>
				<div class="mb-4">
					<label class="mb-1 block text-[0.7rem] font-bold tracking-wider uppercase"
						>NACHRICHT</label
					>
					<textarea
						name="message"
						rows="4"
						placeholder="_____________"
						class="w-full resize-y border-2 border-[#111] bg-[#f0f0e8] px-3 py-2.5 font-['JetBrains_Mono',monospace] text-sm focus:border-[#ff3a20] focus:bg-white focus:outline-none"
					></textarea>
				</div>
				<button
					type="submit"
					class="w-full cursor-pointer border-4 border-[#ff3a20] bg-[#ff3a20] px-6 py-4 font-['JetBrains_Mono',monospace] text-xs font-bold text-white uppercase transition-colors hover:border-[#111] hover:bg-[#111]"
					>SENDEN >>></button
				>
			</form>
		</div>
	</section>

	<!-- Footer -->
	<footer class="border-t-4 border-[#ff3a20] bg-[#111] px-5 py-6 text-[#f0f0e8] md:px-8">
		<div class="flex flex-wrap justify-between gap-4 text-xs tracking-widest uppercase">
			<span>COWERK_5</span>
			<span>ZÜRICH-ALTSTETTEN</span>
			<span>GEMEINSCHAFTLICH GEFÜHRT</span>
		</div>
	</footer>
</div>

<style>
	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
</style>
