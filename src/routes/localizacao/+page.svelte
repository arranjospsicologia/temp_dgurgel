<script lang="ts">
    import { Button } from "$lib";
    import { MapPin, Monitor, ChevronDown, Phone, Clock } from "lucide-svelte";

    const SITE_URL = "https://psicologadaniellegurgel.com.br";

    let openFaq = $state(-1);
    function toggleFaq(i: number) {
        openFaq = openFaq === i ? -1 : i;
    }

    const faqs = [
        {
            question: "O consultório tem fácil acesso?",
            answer: "Sim. Fica na Av. Angélica, 1996 - Sala 501, Higienópolis. Próximo ao Metrô (estação Higienópolis-Mackenzie). Há estacionamento no prédio.",
        },
        {
            question: "Atende online?",
            answer: "Sim. Atendo por videochamada com a mesma qualidade e presença do atendimento presencial.",
        },
        {
            question: "Como agendar?",
            answer: "Envie mensagem pelo WhatsApp. Respondo geralmente no mesmo dia útil e combinamos um horário.",
        },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${SITE_URL}/localizacao/#webpage`,
        url: `${SITE_URL}/localizacao/`,
        name: "Localização do Consultório | Psicóloga Danielle Gurgel",
        description:
            "Consultório de Psicologia em Higienópolis, São Paulo. Av. Angélica, 1996. Atendimento presencial e online.",
        inLanguage: "pt-BR",
        isPartOf: { "@id": `${SITE_URL}/#website` },
    };
</script>

<svelte:head>
    <title>Localização do Consultório | Psicóloga Danielle Gurgel</title>
    <meta
        name="description"
        content="Consultório de Psicologia em Higienópolis, São Paulo. Av. Angélica, 1996 - Sala 501. Atendimento presencial e online. Estacionamento disponível."
    />
    <link rel="canonical" href="{SITE_URL}/localizacao/" />
    {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<nav class="breadcrumb" aria-label="Navegação estrutural">
    <ol class="container">
        <li><a href="/">Início</a></li>
        <li aria-current="page">Localização</li>
    </ol>
</nav>

<section class="service-hero">
    <div class="container">
        <h1>Localização do consultório</h1>
        <p class="hero-subtitle">
            Higienópolis, São Paulo — Atendimento presencial e online
        </p>
    </div>
</section>

<section class="section bg-white">
    <div class="container">
        <h2>Endereço</h2>
        <div class="address-grid">
            <div class="address-card">
                <MapPin size={32} />
                <h3>Consultório</h3>
                <p>
                    <strong>Av. Angélica, 1996 - Sala 501</strong><br />
                    Higienópolis, São Paulo - SP<br />
                    CEP 01228-200
                </p>
                <ul>
                    <li>Estacionamento coberto no prédio</li>
                    <li>Próximo ao Metrô Higienópolis-Mackenzie</li>
                    <li>Banheiro com acessibilidade</li>
                </ul>
            </div>
            <div class="address-card">
                <Clock size={32} />
                <h3>Horário</h3>
                <p>
                    <strong>Segunda a Sexta</strong><br />
                    08:00 às 20:00
                </p>
                <p style="margin-top: 1rem;">
                    <Phone size={16} />
                    <a href="tel:+5511932037191">(11) 93203-7191</a>
                </p>
            </div>
        </div>
    </div>
</section>

<section class="section bg-secondary">
    <div class="container">
        <h2>Como chegar</h2>
        <div class="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5!2d-46.66001!3d-23.5497347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b2fb0a4bde7%3A0xe199684a60fd2026!2sPsic%C3%B3loga%20Danielle%20Gurgel!5e0!3m2!1spt-BR!2sbr!4v1709737200000!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                style="border:0; border-radius: var(--radius-md);"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Localização do consultório em Higienópolis"
            ></iframe>
        </div>
    </div>
</section>

<section class="section bg-white">
    <div class="container">
        <h2>Modalidades de atendimento</h2>
        <div class="modalities-grid">
            <div class="modality-card">
                <MapPin size={28} />
                <h3>Presencial</h3>
                <p>
                    No consultório em Higienópolis, com ambiente acolhedor e
                    confortável.
                </p>
            </div>
            <div class="modality-card">
                <Monitor size={28} />
                <h3>Online</h3>
                <p>
                    Por videochamada segura, para todo o Brasil. <a
                        href="/servicos/terapia-online/"
                        >Saiba mais sobre terapia online</a
                    >.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="section bg-secondary">
    <div class="container">
        <h2>Regiões atendidas</h2>
        <div class="regions-grid">
            <div class="region-group">
                <h3>Região de Higienópolis</h3>
                <ul>
                    <li>Higienópolis</li>
                    <li>Consolação</li>
                    <li>Pacaembu</li>
                    <li>Santa Cecília</li>
                    <li>Vila Buarque</li>
                </ul>
            </div>
            <div class="region-group">
                <h3>Bairros próximos</h3>
                <ul>
                    <li>Perdizes</li>
                    <li>Pompeia</li>
                    <li>Jardins</li>
                    <li>Bela Vista</li>
                    <li>Cerqueira César</li>
                </ul>
            </div>
            <div class="region-group">
                <h3>Online</h3>
                <ul>
                    <li>Toda São Paulo</li>
                    <li>Todo o Brasil</li>
                    <li>Brasileiros no exterior</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="section bg-white">
    <div class="container">
        <h2>Perguntas frequentes</h2>
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
                        <div class="faq-answer"><p>{faq.answer}</p></div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</section>

<section class="section gradient-cta">
    <div class="container">
        <div class="cta-content">
            <h2>No coração de Higienópolis, um espaço de acolhimento</h2>
            <p>Agende uma consulta e conheça o consultório.</p>
            <Button
                href="https://wa.me/5511932037191?text=Olá,%20gostaria%20de%20conhecer%20o%20consultório%20e%20agendar%20uma%20consulta."
                variant="white"
                size="lg">Agendar Consulta</Button
            >
        </div>
    </div>
</section>

<style>
    .address-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
    .address-card {
        background: var(--secondary-light);
        padding: 2rem;
        border-radius: var(--radius-md);
        border-left: 4px solid var(--primary-color);
    }
    .address-card :global(svg) {
        color: var(--primary-color);
        margin-bottom: 0.75rem;
    }
    .address-card ul {
        margin-top: 1rem;
        padding-left: 1rem;
    }
    .address-card li {
        list-style: disc;
        color: var(--text-light);
        font-size: var(--text-sm);
        margin-bottom: 0.5rem;
    }
    .map-container {
        margin-bottom: 1rem;
    }
    .modalities-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
    .modality-card {
        background: var(--secondary-light);
        padding: 2rem;
        border-radius: var(--radius-md);
        text-align: center;
    }
    .modality-card :global(svg) {
        color: var(--primary-color);
        margin-bottom: 0.75rem;
    }
    .modality-card p {
        color: var(--text-light);
        font-size: var(--text-sm);
    }
    .regions-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
    }
    .region-group {
        background: var(--white);
        padding: 1.5rem;
        border-radius: var(--radius-md);
    }
    .region-group h3 {
        margin-bottom: 0.75rem;
        font-size: var(--text-base);
    }
    .region-group ul {
        padding-left: 1rem;
    }
    .region-group li {
        list-style: disc;
        color: var(--text-light);
        font-size: var(--text-sm);
        margin-bottom: 0.5rem;
    }
    .cta-content {
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
    }
    .cta-content h2 {
        color: var(--white);
        margin-bottom: 1rem;
    }
    .cta-content p {
        color: rgba(255, 255, 255, 0.9);
        font-size: var(--text-lg);
        margin-bottom: 2rem;
    }
    @media (max-width: 768px) {
        .address-grid,
        .modalities-grid,
        .regions-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
