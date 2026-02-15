<svelte:head>
	<title>cowerk_5 — Zine</title>
	<meta name="description" content="Kollektiver Coworking-Space in Zürich-Altstetten" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Azeret+Mono:wght@300;400;500;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div
	class="min-h-screen overflow-x-hidden bg-[#faf5e6] font-['Azeret_Mono',monospace] text-[#1d1d1d]"
>
	<!-- Nav -->
	<nav class="fixed top-0 right-0 left-0 z-50 border-b-2 border-[#1d1d1d] bg-[#faf5e6]">
		<div class="flex items-center justify-between px-5 py-3 md:px-8">
			<a href="/5" class="font-800 font-['Syne',sans-serif] text-xl text-[#1d1d1d] no-underline">
				co<span class="text-[#e8443a]">werk</span>_5
			</a>
			<div class="hidden items-center gap-6 md:flex">
				<a
					href="#konzept"
					class="text-[11px] text-[#1d1d1d]/60 no-underline transition-colors hover:text-[#e8443a]"
					>KONZEPT</a
				>
				<a
					href="#raeume"
					class="text-[11px] text-[#1d1d1d]/60 no-underline transition-colors hover:text-[#e8443a]"
					>RÄUME</a
				>
				<a
					href="#community"
					class="text-[11px] text-[#1d1d1d]/60 no-underline transition-colors hover:text-[#e8443a]"
					>COMMUNITY</a
				>
				<a
					href="#kontakt"
					class="text-[11px] text-[#1d1d1d]/60 no-underline transition-colors hover:text-[#e8443a]"
					>KONTAKT</a
				>
			</div>
			<a
				href="#probewoche"
				class="rotate-[-1deg] bg-[#e8443a] px-4 py-2 text-[11px] font-bold text-[#faf5e6] no-underline transition-transform hover:scale-105 hover:rotate-0"
			>
				PROBEWOCHE!
			</a>
		</div>
	</nav>

	<!-- Hero -->
	<section class="relative border-b-2 border-[#1d1d1d] pt-14">
		<div class="relative px-5 py-12 md:px-8 md:py-20">
			<!-- Halftone dot pattern background -->
			<div
				class="absolute inset-0 opacity-[0.04]"
				style="background-image: radial-gradient(circle, #1d1d1d 1px, transparent 1px); background-size: 12px 12px;"
			></div>

			<div class="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr]">
				<div>
					<div class="mb-6 inline-block rotate-[-2deg] bg-[#2858a8] px-3 py-1">
						<span class="text-[11px] font-bold tracking-wider text-[#faf5e6] uppercase"
							>Zürich-Altstetten</span
						>
					</div>
					<h1
						class="font-800 mb-6 font-['Syne',sans-serif] text-[clamp(2.8rem,7vw,7rem)] leading-[0.9] uppercase"
					>
						<span class="relative inline-block">
							Coworking
							<span class="absolute -bottom-1 left-0 -z-10 h-3 w-full -rotate-1 bg-[#2858a8]"
							></span>
						</span><br />
						mit<br />
						<span class="text-[#e8443a]">Herzschlag</span>
					</h1>
					<p class="mb-8 max-w-md text-[13px] leading-[1.8] text-[#1d1d1d]/55">
						cowerk_5 ist ein gemeinschaftlich geführter Coworking-Space, 1 Minute vom Bahnhof
						Altstetten — fokussiertes Arbeiten, geteilte Infrastruktur und echte Gemeinschaft.
					</p>
					<div class="flex flex-wrap gap-3">
						<a
							href="#probewoche"
							class="inline-block rotate-[-1deg] border-2 border-[#1d1d1d] bg-[#e8443a] px-6 py-3.5 text-[11px] font-bold text-[#faf5e6] uppercase no-underline shadow-[3px_3px_0_#1d1d1d] transition-all hover:rotate-0 hover:shadow-[1px_1px_0_#1d1d1d]"
						>
							Kostenlose Probewoche &rarr;
						</a>
						<a
							href="#kontakt"
							class="inline-block rotate-[0.5deg] border-2 border-[#1d1d1d] bg-[#faf5e6] px-6 py-3.5 text-[11px] font-bold text-[#1d1d1d] uppercase no-underline shadow-[3px_3px_0_#1d1d1d] transition-all hover:rotate-0 hover:shadow-[1px_1px_0_#1d1d1d]"
						>
							Kontakt
						</a>
					</div>
				</div>
				<div class="relative">
					<div
						class="absolute -top-3 -left-3 h-full w-full rotate-[1.5deg] border-2 border-[#2858a8]"
					></div>
					<img
						src="/imgs/cowerk_1.webp"
						alt="cowerk_5"
						class="relative z-10 block h-72 w-full border-2 border-[#1d1d1d] object-cover md:h-[450px]"
						style="mix-blend-mode: multiply;"
					/>
				</div>
			</div>

			<!-- Stats -->
			<div class="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
				<div
					class="rotate-[-0.5deg] border-2 border-[#1d1d1d] bg-[#faf5e6] p-4 shadow-[2px_2px_0_#1d1d1d]"
				>
					<div class="font-800 font-['Syne',sans-serif] text-xl">1 min</div>
					<div class="text-[10px] text-[#1d1d1d]/60 uppercase">Bhf Altstetten</div>
				</div>
				<div
					class="rotate-[0.5deg] border-2 border-[#1d1d1d] bg-[#e8443a] p-4 text-[#faf5e6] shadow-[2px_2px_0_#1d1d1d]"
				>
					<div class="font-800 font-['Syne',sans-serif] text-xl">~7 J.</div>
					<div class="text-[10px] text-[#faf5e6]/70 uppercase">In Betrieb</div>
				</div>
				<div
					class="rotate-[-0.3deg] border-2 border-[#1d1d1d] bg-[#2858a8] p-4 text-[#faf5e6] shadow-[2px_2px_0_#1d1d1d]"
				>
					<div class="font-800 font-['Syne',sans-serif] text-xl">~20</div>
					<div class="text-[10px] text-[#faf5e6]/70 uppercase">Mitglieder</div>
				</div>
				<div
					class="rotate-[0.8deg] border-2 border-[#1d1d1d] bg-[#faf5e6] p-4 shadow-[2px_2px_0_#1d1d1d]"
				>
					<div class="font-800 font-['Syne',sans-serif] text-xl">3-in-1</div>
					<div class="text-[10px] text-[#1d1d1d]/60 uppercase">Work+Werkstatt+Küche</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Probewoche -->
	<section id="probewoche" class="border-b-2 border-[#1d1d1d] bg-[#e8443a] text-[#faf5e6]">
		<div class="px-5 py-14 md:px-8 md:py-20">
			<div
				class="mb-3 inline-block rotate-[-1deg] bg-[#1d1d1d] px-3 py-1 text-[11px] font-bold tracking-wider uppercase"
			>
				01 / Probewoche
			</div>
			<h2
				class="font-800 mb-10 font-['Syne',sans-serif] text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.9] uppercase"
			>
				Kostenlose<br />Probe&shy;woche
			</h2>
			<div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
				<div>
					<p class="mb-8 text-[13px] leading-[1.8] text-[#faf5e6]/75">
						Neugierig, ob das dein Ort ist? Komm eine Woche hier arbeiten, lern die Leute kennen und
						erlebe den Rhythmus des Spaces.
					</p>
					<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div class="rotate-[-0.5deg] border-2 border-[#faf5e6]/30 bg-[#faf5e6]/10 p-5">
							<h3 class="mb-3 text-[11px] font-bold tracking-wider uppercase">Was du bekommst</h3>
							<ul class="list-none space-y-2 p-0">
								<li class="text-[12px] text-[#faf5e6]/70">* Schreibtisch tagsüber</li>
								<li class="text-[12px] text-[#faf5e6]/70">* Gemeinschaftsküche</li>
								<li class="text-[12px] text-[#faf5e6]/70">* Mitglieder kennenlernen</li>
								<li class="text-[12px] text-[#faf5e6]/70">* Hands-on Kultur</li>
							</ul>
						</div>
						<div class="rotate-[0.5deg] border-2 border-[#faf5e6]/30 bg-[#faf5e6]/10 p-5">
							<h3 class="mb-3 text-[11px] font-bold tracking-wider uppercase">Was wir erwarten</h3>
							<ul class="list-none space-y-2 p-0">
								<li class="text-[12px] text-[#faf5e6]/70">* Respekt für Räume</li>
								<li class="text-[12px] text-[#faf5e6]/70">* Sich vorstellen</li>
								<li class="text-[12px] text-[#faf5e6]/70">* Optional: kleine Aufgabe</li>
							</ul>
						</div>
					</div>
				</div>
				<form
					class="rotate-[0.5deg] border-2 border-[#1d1d1d] bg-[#faf5e6] p-6 text-[#1d1d1d] shadow-[4px_4px_0_#1d1d1d] md:p-8"
				>
					<h3 class="font-800 mb-6 font-['Syne',sans-serif] text-xl uppercase">Anmeldung</h3>
					<div class="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div>
							<label for="z-name" class="mb-1 block text-[10px] font-bold tracking-wider uppercase"
								>Name *</label
							>
							<input
								id="z-name"
								type="text"
								name="name"
								required
								class="w-full border-2 border-[#1d1d1d] bg-transparent px-3 py-2.5 font-['Azeret_Mono',monospace] text-[12px] focus:border-[#e8443a] focus:outline-none"
							/>
						</div>
						<div>
							<label for="z-email" class="mb-1 block text-[10px] font-bold tracking-wider uppercase"
								>E-Mail *</label
							>
							<input
								id="z-email"
								type="email"
								name="email"
								required
								class="w-full border-2 border-[#1d1d1d] bg-transparent px-3 py-2.5 font-['Azeret_Mono',monospace] text-[12px] focus:border-[#e8443a] focus:outline-none"
							/>
						</div>
					</div>
					<div class="mb-4">
						<label for="z-work" class="mb-1 block text-[10px] font-bold tracking-wider uppercase"
							>Womit arbeitest du?</label
						>
						<input
							id="z-work"
							type="text"
							name="work"
							class="w-full border-2 border-[#1d1d1d] bg-transparent px-3 py-2.5 font-['Azeret_Mono',monospace] text-[12px] focus:border-[#e8443a] focus:outline-none"
						/>
					</div>
					<div class="mb-4">
						<label for="z-seeking" class="mb-1 block text-[10px] font-bold tracking-wider uppercase"
							>Was suchst du?</label
						>
						<textarea
							id="z-seeking"
							name="seeking"
							rows="2"
							class="w-full resize-y border-2 border-[#1d1d1d] bg-transparent px-3 py-2.5 font-['Azeret_Mono',monospace] text-[12px] focus:border-[#e8443a] focus:outline-none"
						></textarea>
					</div>
					<div class="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div>
							<label for="z-date" class="mb-1 block text-[10px] font-bold tracking-wider uppercase"
								>Gewünschte Woche</label
							>
							<input
								id="z-date"
								type="date"
								name="date"
								class="w-full border-2 border-[#1d1d1d] bg-transparent px-3 py-2.5 font-['Azeret_Mono',monospace] text-[12px] focus:border-[#e8443a] focus:outline-none"
							/>
						</div>
						<div>
							<label
								for="z-source"
								class="mb-1 block text-[10px] font-bold tracking-wider uppercase"
								>Woher kennst du uns?</label
							>
							<input
								id="z-source"
								type="text"
								name="source"
								class="w-full border-2 border-[#1d1d1d] bg-transparent px-3 py-2.5 font-['Azeret_Mono',monospace] text-[12px] focus:border-[#e8443a] focus:outline-none"
							/>
						</div>
					</div>
					<button
						type="submit"
						class="mt-2 w-full cursor-pointer border-2 border-[#1d1d1d] bg-[#1d1d1d] py-3.5 text-[11px] font-bold tracking-wider text-[#faf5e6] uppercase shadow-[2px_2px_0_#e8443a] transition-all hover:shadow-[0px_0px_0_#e8443a]"
					>
						ABSENDEN!
					</button>
					<p class="mt-3 text-center text-[10px] text-[#1d1d1d]/40">
						Wir melden uns zur Bestätigung.
					</p>
				</form>
			</div>
		</div>
	</section>

	<!-- Konzept -->
	<section id="konzept" class="border-b-2 border-[#1d1d1d]">
		<div class="relative px-5 py-14 md:px-8 md:py-20">
			<div
				class="absolute inset-0 opacity-[0.03]"
				style="background-image: radial-gradient(circle, #1d1d1d 1px, transparent 1px); background-size: 12px 12px;"
			></div>
			<div class="relative">
				<div
					class="mb-3 inline-block rotate-[1deg] bg-[#2858a8] px-3 py-1 text-[11px] font-bold tracking-wider text-[#faf5e6] uppercase"
				>
					02 / Konzept
				</div>
				<h2
					class="font-800 mb-8 font-['Syne',sans-serif] text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.9] uppercase"
				>
					Ein <span class="text-[#2858a8]">Kollektiv</span>,<br />kein Büro
				</h2>
				<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
					<p class="text-[13px] leading-[1.8] text-[#1d1d1d]/55">
						cowerk_5 ist ein Kollektiv von etwa 20 Personen; etwa 12 arbeiten regelmässig vom Space
						aus. Wir führen den Ort als Verein mit geteilter Verantwortung. Der Space wird von
						seinen Mitgliedern geprägt.
					</p>
					<div class="space-y-4">
						<div class="rotate-[-0.3deg] border-l-4 border-[#e8443a] bg-[#e8443a]/5 p-4">
							<h4 class="mb-1 text-[12px] font-bold uppercase">Umweltbewusstsein</h4>
							<p class="m-0 text-[11px] text-[#1d1d1d]/50">
								Reparieren, Wiederverwenden, bewusster Konsum.
							</p>
						</div>
						<div class="rotate-[0.3deg] border-l-4 border-[#2858a8] bg-[#2858a8]/5 p-4">
							<h4 class="mb-1 text-[12px] font-bold uppercase">Solidarität</h4>
							<p class="m-0 text-[11px] text-[#1d1d1d]/50">
								Gegenseitige Unterstützung und geteilte Verantwortung.
							</p>
						</div>
						<div class="rotate-[-0.5deg] border-l-4 border-[#2858a8] bg-[#2858a8]/5 p-4">
							<h4 class="mb-1 text-[12px] font-bold uppercase">Community</h4>
							<p class="m-0 text-[11px] text-[#1d1d1d]/50">
								Mehr als ein Schreibtisch — ein Ort des Zusammenwirkens.
							</p>
						</div>
					</div>
				</div>
				<div class="relative mt-12">
					<div
						class="absolute -top-2 -right-2 h-full w-full rotate-[0.5deg] border-2 border-[#e8443a]"
					></div>
					<img
						src="/imgs/cowerk_2.webp"
						alt="cowerk_5"
						class="relative z-10 block h-48 w-full border-2 border-[#1d1d1d] object-cover md:h-80"
						style="mix-blend-mode: multiply;"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Räume -->
	<section id="raeume" class="border-b-2 border-[#1d1d1d] bg-[#2858a8] text-[#faf5e6]">
		<div class="px-5 py-14 md:px-8 md:py-20">
			<div
				class="mb-3 inline-block rotate-[-1deg] bg-[#e8443a] px-3 py-1 text-[11px] font-bold tracking-wider text-[#faf5e6] uppercase"
			>
				03 / Räume
			</div>
			<h2
				class="font-800 mb-12 font-['Syne',sans-serif] text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.9] uppercase"
			>
				Räume &<br />Ausstattung
			</h2>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div
					class="group rotate-[-0.3deg] border-2 border-[#faf5e6]/20 bg-[#faf5e6]/5 transition-transform hover:rotate-0"
				>
					<img
						src="/imgs/cowerk_3.webp"
						alt="Coworking"
						class="block h-48 w-full border-b-2 border-[#faf5e6]/20 object-cover"
						style="mix-blend-mode: luminosity;"
					/>
					<div class="p-5">
						<h3 class="mb-1 text-[13px] font-bold uppercase">Coworking-Bereich</h3>
						<p class="m-0 text-[11px] text-[#faf5e6]/55">
							Arbeitsfokussierte Zonen. Gemeinsame Tische, flexibles Sitzen.
						</p>
					</div>
				</div>
				<div
					class="group rotate-[0.5deg] border-2 border-[#faf5e6]/20 bg-[#faf5e6]/5 transition-transform hover:rotate-0"
				>
					<img
						src="/imgs/cowerk_4.webp"
						alt="Werkstatt"
						class="block h-48 w-full border-b-2 border-[#faf5e6]/20 object-cover"
						style="mix-blend-mode: luminosity;"
					/>
					<div class="p-5">
						<h3 class="mb-1 text-[13px] font-bold uppercase">Werkstatt</h3>
						<p class="m-0 text-[11px] text-[#faf5e6]/55">
							Holz- und Metallbearbeitung. Hands-on Projekte und Making.
						</p>
					</div>
				</div>
				<div
					class="group rotate-[0.3deg] border-2 border-[#faf5e6]/20 bg-[#faf5e6]/5 transition-transform hover:rotate-0"
				>
					<img
						src="/imgs/cowerk_5.webp"
						alt="Küche"
						class="block h-48 w-full border-b-2 border-[#faf5e6]/20 object-cover"
						style="mix-blend-mode: luminosity;"
					/>
					<div class="p-5">
						<h3 class="mb-1 text-[13px] font-bold uppercase">Küche & Food</h3>
						<p class="m-0 text-[11px] text-[#faf5e6]/55">
							Gemeinschaftsküche, Gemüse-Abo, Hofprodukte.
						</p>
					</div>
				</div>
				<div
					class="group rotate-[-0.5deg] border-2 border-[#faf5e6]/20 bg-[#faf5e6]/5 transition-transform hover:rotate-0"
				>
					<img
						src="/imgs/cowerk_6.webp"
						alt="Ruhe"
						class="block h-48 w-full border-b-2 border-[#faf5e6]/20 object-cover"
						style="mix-blend-mode: luminosity;"
					/>
					<div class="p-5">
						<h3 class="mb-1 text-[13px] font-bold uppercase">Community & Ruhe</h3>
						<p class="m-0 text-[11px] text-[#faf5e6]/55">
							Lesen, Pausen, ruhige Momente. Tolle Aussicht.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Organisation -->
	<section class="border-b-2 border-[#1d1d1d]">
		<div class="relative px-5 py-14 md:px-8 md:py-20">
			<div
				class="absolute inset-0 opacity-[0.03]"
				style="background-image: radial-gradient(circle, #1d1d1d 1px, transparent 1px); background-size: 12px 12px;"
			></div>
			<div class="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
				<div>
					<div
						class="mb-3 inline-block rotate-[0.5deg] bg-[#e8443a] px-3 py-1 text-[11px] font-bold tracking-wider text-[#faf5e6] uppercase"
					>
						04 / Organisation
					</div>
					<h2
						class="font-800 mb-6 font-['Syne',sans-serif] text-[clamp(1.8rem,4vw,3.5rem)] leading-[0.9] uppercase"
					>
						Geteilte<br />Verantwortung
					</h2>
					<p class="mb-8 text-[13px] leading-[1.8] text-[#1d1d1d]/55">
						Verein mit monatlichen Treffen. Entscheidungen werden gemeinsam getragen.
					</p>
					<div class="space-y-0">
						<div class="flex gap-4 border-t-2 border-[#1d1d1d]/10 py-3">
							<span class="font-800 font-['Syne',sans-serif] text-sm text-[#e8443a]">01</span>
							<span class="text-[12px] text-[#1d1d1d]/60">Gemeinsame Bereiche pflegen</span>
						</div>
						<div class="flex gap-4 border-t-2 border-[#1d1d1d]/10 py-3">
							<span class="font-800 font-['Syne',sans-serif] text-sm text-[#e8443a]">02</span>
							<span class="text-[12px] text-[#1d1d1d]/60">Arbeitsgruppen beitreten</span>
						</div>
						<div class="flex gap-4 border-y-2 border-[#1d1d1d]/10 py-3">
							<span class="font-800 font-['Syne',sans-serif] text-sm text-[#e8443a]">03</span>
							<span class="text-[12px] text-[#1d1d1d]/60">Skills einbringen / Sessions hosten</span>
						</div>
					</div>
				</div>
				<div class="relative">
					<div
						class="absolute -top-2 -left-2 h-full w-full rotate-[-1deg] border-2 border-[#2858a8]"
					></div>
					<img
						src="/imgs/IMG_2142.webp"
						alt="Organisation"
						class="relative z-10 block h-56 w-full border-2 border-[#1d1d1d] object-cover md:h-80"
						style="mix-blend-mode: multiply;"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Events -->
	<section id="community" class="border-b-2 border-[#1d1d1d] bg-[#2858a8] text-[#faf5e6]">
		<div class="px-5 py-14 md:px-8 md:py-20">
			<div
				class="mb-3 inline-block rotate-[-1deg] bg-[#1d1d1d] px-3 py-1 text-[11px] font-bold tracking-wider text-[#faf5e6] uppercase"
			>
				05 / Community
			</div>
			<h2
				class="font-800 mb-12 font-['Syne',sans-serif] text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.9] text-[#faf5e6] uppercase"
			>
				Community<br />& Events
			</h2>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
				<div
					class="rotate-[-0.5deg] border-2 border-[#1d1d1d] bg-[#faf5e6] p-6 shadow-[3px_3px_0_#1d1d1d]"
				>
					<span class="text-[10px] font-bold tracking-wider text-[#e8443a] uppercase"
						>Monatlich</span
					>
					<h3 class="font-800 mt-2 mb-2 font-['Syne',sans-serif] text-lg uppercase">Kino</h3>
					<p class="m-0 text-[11px] text-[#1d1d1d]/50">Mit "Kultberg" — Filmerlebnis im Space.</p>
				</div>
				<div
					class="rotate-[0.3deg] border-2 border-[#1d1d1d] bg-[#faf5e6] p-6 shadow-[3px_3px_0_#1d1d1d]"
				>
					<span class="text-[10px] font-bold tracking-wider text-[#e8443a] uppercase"
						>Regelmässig</span
					>
					<h3 class="font-800 mt-2 mb-2 font-['Syne',sans-serif] text-lg uppercase">Workshops</h3>
					<p class="m-0 text-[11px] text-[#1d1d1d]/50">Skill-Sharing und Crafting-Sessions.</p>
				</div>
				<div
					class="rotate-[-0.3deg] border-2 border-[#1d1d1d] bg-[#faf5e6] p-6 shadow-[3px_3px_0_#1d1d1d]"
				>
					<span class="text-[10px] font-bold tracking-wider text-[#1d1d1d]/40 uppercase"
						>Gelegentlich</span
					>
					<h3 class="font-800 mt-2 mb-2 font-['Syne',sans-serif] text-lg uppercase">Treffen</h3>
					<p class="m-0 text-[11px] text-[#1d1d1d]/50">Austausch, Planung, gemeinsam gestalten.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Fit -->
	<section class="border-b-2 border-[#1d1d1d]">
		<div class="grid grid-cols-1 md:grid-cols-2">
			<div
				class="border-b-2 border-[#1d1d1d] bg-[#e8443a] p-8 text-[#faf5e6] md:border-r-2 md:border-b-0 md:p-12"
			>
				<h2 class="font-800 mb-5 font-['Syne',sans-serif] text-2xl uppercase">Für dich!</h2>
				<ul class="list-none space-y-2 p-0">
					<li class="text-[12px] text-[#faf5e6]/75">&#10004; Community, nicht nur Schreibtisch</li>
					<li class="text-[12px] text-[#faf5e6]/75">&#10004; Umweltbewusst arbeiten und maken</li>
					<li class="text-[12px] text-[#faf5e6]/75">&#10004; Geteilte Verantwortung</li>
					<li class="text-[12px] text-[#faf5e6]/75">&#10004; Events und Hands-on-Projekte</li>
				</ul>
			</div>
			<div class="bg-[#faf5e6] p-8 md:p-12">
				<h2 class="font-800 mb-5 font-['Syne',sans-serif] text-2xl text-[#1d1d1d]/30 uppercase">
					Eher nicht...
				</h2>
				<ul class="list-none space-y-2 p-0">
					<li class="text-[12px] text-[#1d1d1d]/35">&#10008; 100% stilles Büroumfeld</li>
					<li class="text-[12px] text-[#1d1d1d]/35">&#10008; Servicierter Space ohne Community</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Kontakt -->
	<section id="kontakt" class="border-b-2 border-[#1d1d1d]">
		<div class="relative px-5 py-14 md:px-8 md:py-20">
			<div
				class="absolute inset-0 opacity-[0.03]"
				style="background-image: radial-gradient(circle, #1d1d1d 1px, transparent 1px); background-size: 12px 12px;"
			></div>
			<div class="relative grid grid-cols-1 gap-10 md:grid-cols-2">
				<div>
					<div
						class="mb-3 inline-block rotate-[0.5deg] bg-[#2858a8] px-3 py-1 text-[11px] font-bold tracking-wider text-[#faf5e6] uppercase"
					>
						06 / Kontakt
					</div>
					<h2
						class="font-800 mb-6 font-['Syne',sans-serif] text-[clamp(1.8rem,4vw,3.5rem)] leading-[0.9] uppercase"
					>
						Komm<br />vorbei!
					</h2>
					<p class="text-[13px] leading-[1.8] text-[#1d1d1d]/55">
						1 Minute vom Bahnhof Altstetten, Zürich.
					</p>
					<p class="text-[13px] leading-[1.8] text-[#1d1d1d]/55">Melde dich für einen Besuch.</p>
				</div>
				<form
					class="rotate-[-0.5deg] border-2 border-[#1d1d1d] bg-[#faf5e6] p-6 shadow-[4px_4px_0_#1d1d1d] md:p-8"
				>
					<div class="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div>
							<label for="kz-name" class="mb-1 block text-[10px] font-bold tracking-wider uppercase"
								>Name</label
							>
							<input
								id="kz-name"
								type="text"
								name="name"
								required
								class="w-full border-2 border-[#1d1d1d] bg-transparent px-3 py-2.5 font-['Azeret_Mono',monospace] text-[12px] focus:border-[#e8443a] focus:outline-none"
							/>
						</div>
						<div>
							<label
								for="kz-email"
								class="mb-1 block text-[10px] font-bold tracking-wider uppercase">E-Mail</label
							>
							<input
								id="kz-email"
								type="email"
								name="email"
								required
								class="w-full border-2 border-[#1d1d1d] bg-transparent px-3 py-2.5 font-['Azeret_Mono',monospace] text-[12px] focus:border-[#e8443a] focus:outline-none"
							/>
						</div>
					</div>
					<div class="mb-4">
						<label for="kz-msg" class="mb-1 block text-[10px] font-bold tracking-wider uppercase"
							>Nachricht</label
						>
						<textarea
							id="kz-msg"
							name="message"
							rows="4"
							class="w-full resize-y border-2 border-[#1d1d1d] bg-transparent px-3 py-2.5 font-['Azeret_Mono',monospace] text-[12px] focus:border-[#e8443a] focus:outline-none"
						></textarea>
					</div>
					<button
						type="submit"
						class="w-full cursor-pointer border-2 border-[#1d1d1d] bg-[#1d1d1d] py-3.5 text-[11px] font-bold tracking-wider text-[#faf5e6] uppercase shadow-[2px_2px_0_#e8443a] transition-all hover:shadow-[0px_0px_0_#e8443a]"
					>
						Senden!
					</button>
				</form>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="border-t-2 border-[#1d1d1d] bg-[#1d1d1d] px-5 py-6 text-[#faf5e6] md:px-8">
		<div class="flex flex-wrap justify-between gap-4 text-[10px] tracking-wider uppercase">
			<span class="font-800 font-['Syne',sans-serif]"
				>co<span class="text-[#e8443a]">werk</span>_5</span
			>
			<span class="text-[#faf5e6]/40">Zürich-Altstetten / Gemeinschaftlich geführt</span>
		</div>
	</footer>
</div>
