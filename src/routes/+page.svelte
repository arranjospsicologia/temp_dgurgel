<script lang="ts">
	import { Button } from "$lib";
	import {
		Heart,
		Shield,
		Users,
		Brain,
		Star,
		MapPin,
		Phone,
		Clock,
		GraduationCap,
		Award,
		Sparkles,
		Monitor,
		Handshake,
		ChevronDown,
	} from "lucide-svelte";
	import { onMount } from "svelte";

	let openFaq = $state(-1);

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? -1 : index;
	}

	// Reviews from Google
	const reviews = [
		{
			name: "Thiago de Almeida",
			text: "A Dani é uma psicóloga em Higienópolis extremamente atenciosa e profissional. Faço terapia com ela há alguns meses e percebo o quanto o atendimento é humanizado e respeitoso. O consultório é confortável e o espaço transmite segurança emocional. Recomendo para quem busca psicoterapia presencial ou online!",
		},
		{
			name: "Fê Grandi",
			text: "O atendimento é extremamente acolhedor e respeitoso. Me senti segura desde o início para falar sobre questões difíceis. O espaço é confortável, bem localizado aqui em Higienópolis, na região da Angélica, o que facilita muito. Cada sessão tem feito diferença no meu processo emocional. Recomendo de coração.",
		},
		{
			name: "Renata Fioretti",
			text: "Uma profissional excepcional! Já fiz terapia antes mas nunca me senti tão acolhida e ouvida! Ela mostra muita empatia e presença durante a sessão. Algumas falas ajudam muito na reflexão da situação. Estou empolgada com o tratamento.",
		},
		{
			name: "Ro Yuki",
			text: "O atendimento da Dani é maravilhoso! A escuta atenta e empática é seu grande diferencial. O respeito e carinho estão sempre presentes em cada sessão. Estou percebendo os resultados logo nos primeiros atendimentos. Super recomendo!",
		},
		{
			name: "Laura Canjani",
			text: "O atendimento é muito acolhedor, me senti confortável desde a primeira sessão. As conversas ajudam muito a organizar a cabeça e a entender melhor o que estou vivendo. O lugar é super tranquilo, perto do metrô, o que facilita bastante. Recomendo demais.",
		},
		{
			name: "Daniel R. C. Melo",
			text: "Me senti confortável desde o primeiro contato. As sessões são um espaço muito seguro e importante na minha rotina. Recomendo muito.",
		},
		{
			name: "Mércia Ferreira",
			text: "Há mais de 3 anos tenho a alegria de ser acompanhada pela Dani no meu processo terapêutico e de evolução pessoal. Ao longo de todos esses anos pude contar com o acolhimento, empatia e humanidade dessa excelente profissional.",
		},
		{
			name: "Renanqs",
			text: "Excelente profissional! Desde o início do meu acompanhamento, me senti acolhido e compreendido. A forma como ela conduz as sessões é leve, respeitosa e, ao mesmo tempo, profunda. Me ajudou a enxergar situações de outra maneira.",
		},
		{
			name: "Camila Rodrigues",
			text: "Excelente profissional! Me passou muita confiança desde o primeiro contato e tem sido muito importante para o meu processo de autoconhecimento. Acredito que seu principal diferencial seja a humanidade que ela coloca na escuta e no cuidado.",
		},
	];

	// Auto-scroll carousel
	let currentReview = $state(0);
	let autoplayInterval: ReturnType<typeof setInterval>;

	function nextReview() {
		currentReview = (currentReview + 1) % reviews.length;
	}
	function prevReview() {
		currentReview = (currentReview - 1 + reviews.length) % reviews.length;
	}
	function startAutoplay() {
		autoplayInterval = setInterval(nextReview, 5000);
	}
	function stopAutoplay() {
		clearInterval(autoplayInterval);
	}

	onMount(() => {
		startAutoplay();
		return () => stopAutoplay();
	});

	const faqs = [
		{
			question: "Como funciona a primeira sessão?",
			answer: "A primeira sessão é um momento de encontro. Você pode contar um pouco sobre o que te trouxe à terapia, suas expectativas e dúvidas. Não é necessário chegar com tudo definido — o simples fato de estar ali já é um passo importante.",
		},
		{
			question: "Qual é a abordagem terapêutica utilizada?",
			answer: "Trabalho com a Abordagem Centrada na Pessoa (ACP), desenvolvida por Carl Rogers. O foco está na relação terapêutica, com empatia, autenticidade e aceitação incondicional. Você é visto como protagonista do seu próprio processo.",
		},
		{
			question: "Quanto tempo dura o processo terapêutico?",
			answer: "Não há um prazo definido — cada pessoa tem seu ritmo. As sessões são geralmente semanais, com duração de 50 minutos. O processo evolui conforme suas necessidades e objetivos.",
		},
		{
			question: "Atende por plano de saúde?",
			answer: "Os atendimentos são realizados de forma particular. No entanto, muitos planos de saúde oferecem reembolso para sessões de psicoterapia. Após cada sessão, forneço os documentos necessários para que você solicite o reembolso junto à sua operadora.",
		},
		{
			question: "A terapia online é tão eficaz quanto a presencial?",
			answer: "Sim. A terapia online segue as normas do Conselho Federal de Psicologia e oferece a mesma ética, cuidado e profundidade do atendimento presencial. As sessões acontecem por plataformas seguras de videochamada, garantindo privacidade e confidencialidade.",
		},
		{
			question: "Para quem é indicada a psicoterapia?",
			answer: "A psicoterapia é indicada para qualquer pessoa que busca autoconhecimento, apoio emocional ou deseja lidar melhor com desafios como ansiedade, estresse, dificuldades nos relacionamentos, momentos de transição ou qualquer questão que impacte seu bem-estar.",
		},
	];

	const SITE_URL = "https://psicologadaniellegurgel.com.br";

	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"@id": `${SITE_URL}/#website`,
				url: `${SITE_URL}/`,
				name: "Psicóloga Danielle Gurgel",
				inLanguage: "pt-BR",
				publisher: { "@id": `${SITE_URL}/#organization` },
			},
			{
				"@type": "WebPage",
				"@id": `${SITE_URL}/#webpage`,
				url: `${SITE_URL}/`,
				name: "Psicóloga em Higienópolis SP | Danielle Gurgel",
				description:
					"Psicóloga em Higienópolis, São Paulo. Psicoterapia humanizada com a Abordagem Centrada na Pessoa. Atendimento presencial e online. CRP/SP 06/148054.",
				inLanguage: "pt-BR",
				isPartOf: { "@id": `${SITE_URL}/#website` },
				mainEntity: { "@id": `${SITE_URL}/#organization` },
			},
			{
				"@type": ["LocalBusiness", "ProfessionalService"],
				"@id": `${SITE_URL}/#organization`,
				name: "Danielle Gurgel Psicóloga",
				alternateName: "Psicóloga Danielle Gurgel",
				description:
					"Psicóloga clínica em Higienópolis, São Paulo. Atendimento humanizado com base na Abordagem Centrada na Pessoa (ACP). Psicoterapia individual, online e de casal.",
				url: `${SITE_URL}/`,
				telephone: "+55-11-93203-7191",
				email: "contato@psicologadaniellegurgel.com.br",
				priceRange: "$$",
				image: `${SITE_URL}/images/hero/hero-danielle.avif`,
				address: {
					"@type": "PostalAddress",
					streetAddress: "Av. Angélica, 1996 - Sala 501",
					addressLocality: "São Paulo",
					addressRegion: "SP",
					postalCode: "01228-200",
					addressCountry: "BR",
				},
				geo: {
					"@type": "GeoCoordinates",
					latitude: -23.5497347,
					longitude: -46.66001,
				},
				hasMap: "https://www.google.com/maps/place/Psic%C3%B3loga+Danielle+Gurgel/@-23.5497347,-46.66001,17z",
				areaServed: [
					{
						"@type": "City",
						name: "São Paulo",
					},
					{
						"@type": "Country",
						name: "Brasil",
					},
				],
				openingHoursSpecification: [
					{
						"@type": "OpeningHoursSpecification",
						dayOfWeek: [
							"Monday",
							"Tuesday",
							"Wednesday",
							"Thursday",
							"Friday",
						],
						opens: "08:00",
						closes: "20:00",
					},
				],
				aggregateRating: {
					"@type": "AggregateRating",
					ratingValue: "5.0",
					reviewCount: "23",
					bestRating: "5",
					worstRating: "1",
				},
				hasOfferCatalog: {
					"@type": "OfferCatalog",
					name: "Serviços de Psicoterapia",
					itemListElement: [
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "Psicoterapia Individual",
								url: `${SITE_URL}/servicos/psicoterapia-individual/`,
							},
						},
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "Terapia Online",
								url: `${SITE_URL}/servicos/terapia-online/`,
							},
						},
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "Terapia de Casal",
								url: `${SITE_URL}/servicos/terapia-de-casal/`,
							},
						},
					],
				},
				sameAs: ["https://www.psicologadaniellegurgel.com"],
			},
		],
	};
</script>

<svelte:head>
	<title>Psicóloga em Higienópolis SP | Danielle Gurgel</title>
	<meta
		name="description"
		content="Psicóloga em Higienópolis, São Paulo. Psicoterapia humanizada com a Abordagem Centrada na Pessoa. Atendimento presencial e online. Agende sua consulta."
	/>
	<meta
		name="keywords"
		content="psicóloga higienópolis, psicóloga são paulo, terapia online, abordagem centrada na pessoa, psicoterapia humanista, Danielle Gurgel"
	/>
	<link rel="canonical" href="{SITE_URL}/" />
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<!-- ============================
     HERO SECTION
     ============================ -->
<section class="hero gradient-hero" id="hero">
	<div class="container hero-container">
		<div class="hero-image">
			<img
				src="/images/hero/hero-danielle.avif"
				alt="Psicóloga Danielle Gurgel em seu consultório em Higienópolis, São Paulo"
				width="500"
				height="600"
				fetchpriority="high"
			/>
		</div>
		<div class="hero-content">
			<p class="hero-eyebrow">Psicóloga em Higienópolis, São Paulo</p>
			<h1>Danielle Gurgel</h1>
			<p class="hero-crp">CRP/SP 06/148054</p>
			<p class="hero-subtitle">
				Psicoterapia humanizada com escuta empática e respeito ao seu
				ritmo. Um espaço seguro para você ser quem é, sem julgamentos.
			</p>
			<div class="hero-cta">
				<Button
					href="https://wa.me/5511932037191?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta."
					variant="primary"
					size="lg">Agendar Consulta</Button
				>
			</div>
			<div class="hero-trust">
				<div class="trust-stars">
					{#each Array(5) as _}
						<Star size={16} fill="#D4A574" color="#D4A574" />
					{/each}
					<span>5.0 · 23 avaliações</span>
				</div>
				<span class="trust-separator">•</span>
				<span class="trust-badge"><GraduationCap size={14} /> UFES</span
				>
				<span class="trust-separator">•</span>
				<span class="trust-badge"
					><Award size={14} /> 8+ anos de clínica</span
				>
			</div>
		</div>
	</div>
</section>

<!-- ============================
     REVIEWS SECTION
     ============================ -->
<section class="section bg-white" id="avaliacoes">
	<div class="container">
		<div class="section-header">
			<h2>O que dizem sobre o atendimento</h2>
			<p class="section-description">
				Avaliações reais de pacientes no Google
			</p>
			<div class="aggregate-rating">
				{#each Array(5) as _}
					<Star size={24} fill="#D4A574" color="#D4A574" />
				{/each}
				<span class="rating-text">5.0 de 5 · 23 avaliações</span>
			</div>
		</div>
		<!-- Review carousel -->
		<div
			class="review-carousel"
			onmouseenter={stopAutoplay}
			onmouseleave={startAutoplay}
			role="region"
			aria-label="Avaliações de pacientes"
		>
			<button
				class="carousel-arrow carousel-prev"
				onclick={prevReview}
				aria-label="Avaliação anterior">‹</button
			>
			<div class="carousel-track">
				{#each reviews as review, i}
					{#if i === currentReview}
						<div class="review-slide">
							<div class="review-card">
								<div class="review-header">
									<div class="review-avatar">
										{review.name.charAt(0)}
									</div>
									<div class="review-meta">
										<strong>{review.name}</strong>
										<div class="review-stars">
											{#each Array(5) as _}
												<Star
													size={14}
													fill="#D4A574"
													color="#D4A574"
												/>
											{/each}
										</div>
									</div>
								</div>
								<p class="review-text">"{review.text}"</p>
								<span class="review-source">Google</span>
							</div>
						</div>
					{/if}
				{/each}
			</div>
			<button
				class="carousel-arrow carousel-next"
				onclick={nextReview}
				aria-label="Próxima avaliação">›</button
			>
			<div class="carousel-dots">
				{#each reviews as _, i}
					<button
						class="carousel-dot"
						class:active={i === currentReview}
						onclick={() => {
							currentReview = i;
							stopAutoplay();
							startAutoplay();
						}}
						aria-label={`Avaliação ${i + 1}`}
					></button>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- ============================
     CREDENTIALS SECTION
     ============================ -->
<section class="section bg-secondary" id="credenciais">
	<div class="container">
		<div class="credentials-grid">
			<div class="credential-item">
				<GraduationCap size={32} />
				<h3>Formação</h3>
				<p>Universidade Federal do Espírito Santo (UFES)</p>
			</div>
			<div class="credential-item">
				<Award size={32} />
				<h3>CRP</h3>
				<p>CRP/SP 06/148054 — Ativo</p>
			</div>
			<div class="credential-item">
				<Heart size={32} />
				<h3>Abordagem</h3>
				<p>Centrada na Pessoa (Carl Rogers)</p>
			</div>
			<div class="credential-item">
				<Clock size={32} />
				<h3>Horário</h3>
				<p>Segunda a Sexta, 08h às 20h</p>
			</div>
		</div>
	</div>
</section>

<!-- ============================
     ABOUT SECTION (Summary)
     ============================ -->
<section class="section bg-white" id="sobre">
	<div class="container about-container">
		<div class="about-image">
			<img
				src="/images/sobre/sobre-casual.avif"
				alt="Psicóloga Danielle Gurgel"
				width="450"
				height="500"
				loading="lazy"
				decoding="async"
			/>
		</div>
		<div class="about-content">
			<h2>Sobre Danielle Gurgel</h2>
			<p>
				Sou psicóloga formada pela Universidade Federal do Espírito
				Santo, com atuação clínica dedicada ao aprimoramento contínuo.
				Minha missão é oferecer um espaço acolhedor, sem julgamentos,
				onde você possa se sentir à vontade para explorar seus
				sentimentos e desafios.
			</p>
			<p>
				Na Abordagem Centrada na Pessoa, acredito que cada pessoa já
				possui dentro de si os recursos para crescer e se transformar —
				e meu papel é facilitar esse processo, como uma jardineira que
				nutre o solo para que cada planta floresça ao seu ritmo.
			</p>
			<Button href="/sobre/" variant="outline" size="md"
				>Saiba mais</Button
			>
		</div>
	</div>
</section>

<!-- ============================
     OFFICE SECTION
     ============================ -->
<section class="section bg-secondary" id="consultorio">
	<div class="container">
		<div class="section-header">
			<h2>Consultório em Higienópolis</h2>
			<p class="section-description">
				Um espaço acolhedor e seguro, pensado para o seu conforto
			</p>
		</div>
		<div class="office-grid office-grid-3">
			<div class="office-image">
				<img
					src="/images/consultorio/consultorio-1.avif"
					alt="Consultório de Psicologia em Higienópolis, São Paulo - ambiente iluminado e acolhedor"
					loading="lazy"
					decoding="async"
				/>
			</div>
			<div class="office-image">
				<img
					src="/images/consultorio/consultorio-2.avif"
					alt="Sala de atendimento psicológico em Higienópolis com poltronas confortáveis"
					loading="lazy"
					decoding="async"
				/>
			</div>
			<div class="office-image">
				<img
					src="/images/sobre/sobre-consultorio.avif"
					alt="Espaço do consultório com decoração acolhedora em Higienópolis"
					loading="lazy"
					decoding="async"
				/>
			</div>
		</div>
		<div class="office-info">
			<p>
				<MapPin size={16} /> Av. Angélica, 1996 - Sala 501 · Higienópolis,
				São Paulo - SP
			</p>
			<p>
				<Clock size={16} /> Segunda a Sexta, 08h às 20h · Estacionamento
				no local
			</p>
		</div>
	</div>
</section>

<!-- ============================
     SERVICES SECTION
     ============================ -->
<section class="section bg-white" id="servicos">
	<div class="container">
		<div class="section-header">
			<h2>Serviços</h2>
			<p class="section-description">
				Diferentes modalidades para atender às suas necessidades
			</p>
		</div>
		<div class="services-grid">
			<a href="/servicos/psicoterapia-individual/" class="service-card">
				<Brain size={32} />
				<h3>Psicoterapia Individual</h3>
				<p>
					Atendimento personalizado com foco no autoconhecimento,
					crescimento pessoal e bem-estar emocional.
				</p>
			</a>
			<a href="/servicos/terapia-online/" class="service-card">
				<Monitor size={32} />
				<h3>Terapia Online</h3>
				<p>
					Atendimento seguro e confidencial por videochamada, com a
					mesma qualidade e profundidade do presencial.
				</p>
			</a>
			<a href="/servicos/terapia-de-casal/" class="service-card">
				<Handshake size={32} />
				<h3>Terapia de Casal</h3>
				<p>
					Espaço para trabalhar a comunicação, fortalecer o vínculo e
					lidar com desafios na relação a dois.
				</p>
			</a>
		</div>
	</div>
</section>

<!-- ============================
     EXPERIENCES SECTION
     ============================ -->
<section class="section bg-secondary" id="experiencia">
	<div class="container">
		<div class="section-header">
			<h2>Áreas de Atuação</h2>
			<p class="section-description">
				Experiência em diferentes questões emocionais e de vida
			</p>
		</div>
		<div class="experiences-grid">
			<a href="/experiencia/ansiedade/" class="experience-card">
				<Sparkles size={24} />
				<h3>Ansiedade</h3>
			</a>
			<a href="/experiencia/depressao/" class="experience-card">
				<Heart size={24} />
				<h3>Depressão</h3>
			</a>
			<a href="/experiencia/burnout/" class="experience-card">
				<Shield size={24} />
				<h3>Burnout</h3>
			</a>
			<a href="/experiencia/relacionamento/" class="experience-card">
				<Users size={24} />
				<h3>Relacionamentos</h3>
			</a>
			<a href="/experiencia/autoestima/" class="experience-card">
				<Star size={24} />
				<h3>Autoestima</h3>
			</a>
		</div>
	</div>
</section>

<!-- ============================
     FAQ SECTION
     ============================ -->
<section class="section bg-white" id="faq">
	<div class="container">
		<div class="section-header">
			<h2>Perguntas Frequentes</h2>
		</div>
		<div class="faq-container">
			{#each faqs as faq, i}
				<div class="faq-item">
					<button
						class="faq-question"
						onclick={() => toggleFaq(i)}
						aria-expanded={openFaq === i}
					>
						<span>{faq.question}</span>
						<ChevronDown
							size={20}
							class={openFaq === i ? "chevron open" : "chevron"}
						/>
					</button>
					{#if openFaq === i}
						<div class="faq-answer">
							<p>{faq.answer}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============================
     CTA FINAL SECTION
     ============================ -->
<section class="section gradient-cta" id="contato">
	<div class="container">
		<div class="cta-content">
			<h2>Pronta para acolher você</h2>
			<p>
				Sem pressa. O primeiro passo é o que você puder dar. Agende uma
				conversa e descubra como a terapia pode fazer parte do seu
				caminho.
			</p>
			<a
				href="https://wa.me/5511932037191?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta."
				class="cta-btn-white">Conversar no WhatsApp</a
			>
		</div>
	</div>
</section>

<style>
	/* ============================
       HERO
       ============================ */
	.hero {
		padding: calc(var(--header-height) + 2rem) 0 4rem;
	}

	.hero-container {
		display: flex;
		align-items: center;
		gap: 4rem;
		flex-direction: row-reverse; /* Photo left, text right — reversed from template */
	}

	.hero-image {
		flex: 0 0 40%;
	}

	.hero-image img {
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-lg);
		width: 100%;
		height: auto;
	}

	.hero-content {
		flex: 1;
	}

	.hero-eyebrow {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.75rem;
		color: var(--primary-dark);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		margin-bottom: 1.25rem;
	}

	.hero-eyebrow::before {
		content: "";
		display: block;
		width: 32px;
		height: 1px;
		background-color: var(--primary-light);
	}

	.hero-crp {
		font-size: var(--text-sm);
		color: var(--text-light);
		margin-top: -0.5rem;
		margin-bottom: 1rem;
	}

	.hero-subtitle {
		font-size: var(--text-lg);
		color: var(--text-light);
		line-height: 1.8;
		margin-bottom: 2rem;
	}

	.hero-cta {
		margin-bottom: 1.5rem;
	}

	.hero-trust {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: var(--text-sm);
		color: var(--text-light);
		flex-wrap: wrap;
	}

	.trust-stars {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.trust-stars span {
		margin-left: 0.25rem;
	}

	.trust-separator {
		color: var(--border-light);
	}

	.trust-badge {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	@media (max-width: 768px) {
		.hero-container {
			flex-direction: column;
			text-align: center;
		}

		.hero-image {
			flex: none;
			max-width: 300px;
		}

		.hero-eyebrow {
			margin: 0 auto 1.25rem;
			justify-content: center;
		}

		.hero-trust {
			justify-content: center;
		}
	}

	/* ============================
       SECTIONS COMMON
       ============================ */
	.section {
		padding: var(--section-padding) 0;
	}

	.section-header {
		text-align: left;
		margin-bottom: 3rem;
		position: relative;
		padding-left: 1.5rem;
	}

	.section-header::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 4px;
		background: linear-gradient(
			180deg,
			var(--primary-color),
			var(--primary-light)
		);
		border-radius: 2px;
	}

	.section-description {
		color: var(--text-light);
		font-size: var(--text-lg);
		margin-top: 0.5rem;
	}

	.bg-secondary {
		background-color: var(--secondary-color);
	}

	/* ============================
       REVIEWS
       ============================ */
	.aggregate-rating {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		margin-top: 0.75rem;
	}

	.rating-text {
		margin-left: 0.5rem;
		font-weight: 600;
		color: var(--text-color);
	}

	.review-card {
		background: var(--secondary-light);
		padding: 1.5rem;
		border-radius: var(--radius-md);
		border-left: 4px solid var(--primary-light);
		transition: var(--transition);
	}

	.review-card:hover {
		transform: scale(1.02);
		box-shadow: var(--shadow-hover);
	}

	.review-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}

	.review-avatar {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: var(--primary-color);
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
	}

	.review-stars {
		display: flex;
		gap: 0.1rem;
		margin-top: 0.25rem;
	}

	.review-text {
		color: var(--text-light);
		font-size: var(--text-sm);
		line-height: 1.7;
		font-style: italic;
	}

	.review-source {
		display: block;
		margin-top: 0.75rem;
		font-size: var(--text-xs);
		color: var(--text-lighter);
	}

	/* ============================
       CREDENTIALS
       ============================ */
	.credentials-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
		text-align: center;
	}

	.credential-item {
		padding: 1.5rem;
	}

	.credential-item :global(svg) {
		color: var(--primary-color);
		margin-bottom: 0.75rem;
	}

	.credential-item h3 {
		font-size: var(--text-base);
		margin-bottom: 0.5rem;
	}

	.credential-item p {
		color: var(--text-light);
		font-size: var(--text-sm);
	}

	@media (max-width: 768px) {
		.credentials-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	/* ============================
       ABOUT
       ============================ */
	.about-container {
		display: flex;
		align-items: center;
		gap: 4rem;
	}

	.about-image {
		flex: 0 0 35%;
	}

	.about-image img {
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-md);
		width: 100%;
	}

	.about-content {
		flex: 1;
	}

	.about-content h2 {
		margin-bottom: 1rem;
	}

	.about-content p {
		color: var(--text-light);
		line-height: 1.8;
		margin-bottom: 1rem;
	}

	@media (max-width: 768px) {
		.about-container {
			flex-direction: column;
		}

		.about-image {
			flex: none;
			max-width: 300px;
		}
	}

	/* ============================
       OFFICE
       ============================ */
	.office-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.office-grid-3 {
		grid-template-columns: repeat(3, 1fr);
	}

	.office-image img {
		width: 100%;
		height: 280px;
		object-fit: cover;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-md);
	}

	.office-info {
		text-align: center;
		color: var(--text-light);
	}

	.office-info p {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
	}

	@media (max-width: 768px) {
		.office-grid {
			grid-template-columns: 1fr;
		}
	}

	/* ============================
       SERVICES
       ============================ */
	.services-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}

	.service-card {
		background: var(--secondary-light);
		padding: 2rem;
		border-radius: var(--radius-md);
		border-left: 4px solid var(--primary-color);
		text-decoration: none;
		color: inherit;
		transition: var(--transition);
	}

	.service-card:hover {
		transform: scale(1.02);
		box-shadow: var(--shadow-hover);
		color: inherit;
	}

	.service-card :global(svg) {
		color: var(--primary-color);
		margin-bottom: 1rem;
	}

	.service-card h3 {
		margin-bottom: 0.75rem;
		font-size: var(--text-xl);
	}

	.service-card p {
		color: var(--text-light);
		font-size: var(--text-sm);
		line-height: 1.7;
	}

	@media (max-width: 768px) {
		.services-grid {
			grid-template-columns: 1fr;
		}
	}

	/* ============================
       EXPERIENCES
       ============================ */
	.experiences-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 1rem;
	}

	.experience-card {
		background: var(--white);
		padding: 1.5rem;
		border-radius: var(--radius-md);
		text-align: center;
		text-decoration: none;
		color: inherit;
		transition: var(--transition);
		border: 1px solid var(--border-light);
	}

	.experience-card:hover {
		transform: scale(1.03);
		border-color: var(--primary-color);
		box-shadow: var(--shadow-hover);
		color: inherit;
	}

	.experience-card :global(svg) {
		color: var(--primary-color);
		margin-bottom: 0.5rem;
	}

	.experience-card h3 {
		font-size: var(--text-sm);
		font-weight: 600;
	}

	@media (max-width: 768px) {
		.experiences-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	/* ============================
       CTA Final
       ============================ */
	.gradient-cta .cta-content {
		text-align: center;
		max-width: 600px;
		margin: 0 auto;
	}

	.gradient-cta h2 {
		color: var(--white);
		margin-bottom: 1rem;
	}

	.gradient-cta p {
		color: rgba(255, 255, 255, 0.9);
		font-size: var(--text-lg);
		margin-bottom: 2rem;
		line-height: 1.8;
	}

	/* ============================
	   REVIEW CAROUSEL
	   ============================ */
	.review-carousel {
		position: relative;
		max-width: 700px;
		margin: 0 auto;
	}

	.carousel-track {
		overflow: hidden;
	}

	.review-slide {
		animation: fadeIn 0.4s ease;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.carousel-arrow {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: var(--white);
		border: 1px solid var(--border-light);
		border-radius: 50%;
		width: 40px;
		height: 40px;
		font-size: 1.5rem;
		cursor: pointer;
		color: var(--primary-color);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
		transition: var(--transition);
		box-shadow: var(--shadow-sm);
	}

	.carousel-arrow:hover {
		background: var(--primary-color);
		color: white;
		border-color: var(--primary-color);
	}

	.carousel-prev {
		left: -20px;
	}
	.carousel-next {
		right: -20px;
	}

	.carousel-dots {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 1.5rem;
	}

	.carousel-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--border-light);
		border: none;
		cursor: pointer;
		transition: var(--transition);
	}

	.carousel-dot.active {
		background: var(--primary-color);
		transform: scale(1.2);
	}

	/* ============================
	   FAQ FONT SIZE FIX
	   ============================ */
	.faq-container .faq-question {
		font-size: var(--text-lg);
	}

	.faq-container .faq-question span {
		font-size: var(--text-lg);
	}

	.faq-container .faq-answer p {
		font-size: var(--text-base);
	}

	/* ============================
	   CTA WHITE BUTTON
	   ============================ */
	.cta-btn-white {
		display: inline-block;
		background: white;
		color: var(--primary-dark);
		padding: 0.875rem 2rem;
		border-radius: var(--radius-full);
		font-weight: 700;
		font-size: var(--text-base);
		text-decoration: none;
		transition: var(--transition);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
	}

	.cta-btn-white:hover {
		background: var(--secondary-color);
		color: var(--primary-dark);
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
	}

	@media (max-width: 768px) {
		.carousel-prev {
			left: -10px;
		}
		.carousel-next {
			right: -10px;
		}
		.office-grid-3 {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 480px) {
		.section {
			padding: var(--section-padding-mobile) 0;
		}
	}
</style>
