<script lang="ts">
    import SEO from "$lib/components/SEO.svelte";

    const placeSchema = {
        "@context": "https://schema.org",
        "@type": "Place",
        name: "Consultório de Psicologia Danielle Gurgel",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Angélica, 1996",
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
        containedInPlace: {
            "@type": "Place",
            name: "Higienópolis",
        },
    };
</script>

<SEO
    title="Psicologa em Higienópolis, SP: Atendimento Presencial"
    description="Consultório de psicologia localizado na Av Angélica, 1996 - Higienópolis. Próximo ao Mackenzie e Shopping Pátio Higienópolis. Agende sua sessão."
    schemas={[placeSchema]}
/>

<div class="breadcrumb pt-32 pb-8 bg-secondary border-b border-border-light">
    <div class="container mx-auto px-4 max-w-4xl">
        <ol itemscope itemtype="https://schema.org/BreadcrumbList">
            <li
                itemprop="itemListElement"
                itemscope
                itemtype="https://schema.org/ListItem"
            >
                <a itemprop="item" href="/"
                    ><span itemprop="name">Início</span></a
                >
                <meta itemprop="position" content="1" />
            </li>
            <li
                itemprop="itemListElement"
                itemscope
                itemtype="https://schema.org/ListItem"
                aria-current="page"
            >
                <span itemprop="name" class="text-text-light"
                    >Localização Higienópolis</span
                >
                <meta itemprop="position" content="2" />
            </li>
        </ol>
    </div>
</div>

<article class="py-16 bg-white">
    <div class="container mx-auto px-4 max-w-4xl">
        <header class="mb-12">
            <h1 class="text-4xl md:text-5xl font-heading text-black mb-6">
                Localização do Consultório em Higienópolis
            </h1>
            <p class="text-xl text-primary-dark font-medium leading-relaxed">
                Av. Angélica, 1996 — São Paulo, SP
            </p>
        </header>

        <div class="prose prose-lg text-gray-700 max-w-none space-y-8">
            <div class="flex flex-col md:flex-row gap-12 items-start mt-8">
                <div class="w-full md:w-1/2">
                    <picture>
                        <source
                            type="image/avif"
                            srcset="/images/consultorio-psicologia-higienopolis-sp-02-400w.avif 400w, /images/consultorio-psicologia-higienopolis-sp-02-800w.avif 800w"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <source
                            type="image/webp"
                            srcset="/images/consultorio-psicologia-higienopolis-sp-02-400w.webp 400w, /images/consultorio-psicologia-higienopolis-sp-02-800w.webp 800w"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <img
                            src="/images/consultorio-psicologia-higienopolis-sp-02-800w.webp"
                            alt="Recepção do consultório de psicologia em Higienópolis, SP"
                            loading="lazy"
                            decoding="async"
                            class="w-full h-auto rounded-3xl shadow-lg object-cover"
                        />
                    </picture>
                </div>

                <div class="w-full md:w-1/2 space-y-6">
                    <h2 class="text-2xl font-heading text-black mt-0">
                        Acesso e Comodidade
                    </h2>
                    <p>
                        Escolher Higienópolis como sede do consultório foi uma
                        decisão terapêutica. A forte arborização do bairro e sua
                        atmosfera simultaneamente residencial e dinâmica
                        propiciam o "clima" certo de transição antes de cada
                        sessão.
                    </p>
                    <ul class="list-none p-0 space-y-3">
                        <li class="flex items-start gap-2">
                            <span class="text-primary mt-1">✓</span>
                            <span
                                ><strong>Metrô Próximo:</strong> Estações Higienópolis-Mackenzie
                                (Linha 4-Amarela) e Paulista (Linha 2-Verde).</span
                            >
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-primary mt-1">✓</span>
                            <span
                                ><strong>Pontos de Referência:</strong> Há 5 minutos
                                de caminhada do Shopping Pátio Higienópolis e vizinho
                                à Praça Buenos Aires.</span
                            >
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-primary mt-1">✓</span>
                            <span
                                ><strong>Comodidade:</strong> Valet e estacionamentos
                                integrados no próprio quarteirão comercial da Av
                                Angélica.</span
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</article>

<section class="py-16 bg-gradient-cta text-center text-white">
    <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="text-3xl font-heading text-white mb-6">
            Verifique disponibilidade de horários na agenda presencial
        </h2>
        <a
            href="https://wa.me/5511932037191?text=Olá!%20Gostaria%20sobre%20informações%20de%20horários%20presenciais%20na%20Avenida%20Angélica."
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-lg bg-white text-primary-dark shadow-hover hover:-translate-y-1 mt-4 font-bold"
        >
            Whatsapp do Consultório Receptivo
        </a>
    </div>
</section>
