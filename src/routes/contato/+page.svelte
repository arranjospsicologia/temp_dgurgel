<script lang="ts">
    import { Button } from "$lib";
    import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-svelte";

    const SITE_URL = "https://psicologadaniellegurgel.com.br";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contato/#webpage`,
        url: `${SITE_URL}/contato/`,
        name: "Contato | Psicóloga Danielle Gurgel",
        description:
            "Entre em contato com a Psicóloga Danielle Gurgel em Higienópolis, São Paulo. WhatsApp (11) 93203-7191. Av. Angélica, 1996 - Sala 501.",
        inLanguage: "pt-BR",
        isPartOf: { "@id": `${SITE_URL}/#website` },
    };
</script>

<svelte:head>
    <title>Contato | Psicóloga Danielle Gurgel</title>
    <meta
        name="description"
        content="Entre em contato com a Psicóloga Danielle Gurgel em Higienópolis, São Paulo. WhatsApp (11) 93203-7191. Av. Angélica, 1996 - Sala 501."
    />
    <link rel="canonical" href="{SITE_URL}/contato/" />
    {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<nav class="breadcrumb" aria-label="Navegação estrutural">
    <ol class="container">
        <li><a href="/">Início</a></li>
        <li aria-current="page">Contato</li>
    </ol>
</nav>

<section class="contato-hero">
    <div class="container">
        <div class="contato-hero-content">
            <h1>Entre em contato</h1>
            <p>
                Se você está considerando iniciar ou retomar a terapia, ficarei
                feliz em conversar. O primeiro passo é uma conversa — sem
                compromisso e sem pressa.
            </p>
        </div>
    </div>
</section>

<section class="section bg-secondary" id="formas-contato">
    <div class="container">
        <h2>Como falar comigo</h2>
        <div class="contact-grid">
            <div class="contact-card highlight">
                <MessageCircle size={32} />
                <h3>WhatsApp (preferencial)</h3>
                <p class="contact-desc">
                    Respondo geralmente no mesmo dia útil
                </p>
                <Button
                    href="https://wa.me/5511932037191?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta."
                    variant="primary"
                    size="md"
                >
                    <Phone size={18} /> (11) 93203-7191
                </Button>
            </div>

            <div class="contact-card">
                <Mail size={32} />
                <h3>E-mail</h3>
                <p class="contact-desc">Para assuntos gerais</p>
                <a
                    href="mailto:contato@psicologadaniellegurgel.com.br"
                    class="email-link"
                >
                    contato@psicologadaniellegurgel.com.br
                </a>
            </div>

            <div class="contact-card">
                <Phone size={32} />
                <h3>Telefone</h3>
                <p class="contact-desc">
                    Ligue durante o horário de atendimento
                </p>
                <a href="tel:+5511932037191" class="email-link"
                    >(11) 93203-7191</a
                >
            </div>
        </div>
    </div>
</section>

<section class="section bg-white" id="onde-atendo">
    <div class="container">
        <h2>Onde atendo</h2>
        <div class="locations-grid">
            <div class="location-card">
                <MapPin size={32} />
                <h3>Presencial</h3>
                <p>
                    Av. Angélica, 1996 - Sala 501<br />
                    Higienópolis, São Paulo - SP<br />
                    CEP 01228-200
                </p>
                <ul class="location-details">
                    <li>Estacionamento coberto no local</li>
                    <li>Banheiro com acessibilidade</li>
                    <li>Próximo ao Metrô</li>
                </ul>
            </div>
            <div class="location-card">
                <Clock size={32} />
                <h3>Horário</h3>
                <p>
                    <strong>Segunda a Sexta</strong><br />
                    08:00 às 20:00
                </p>
                <p class="location-note">Sábados e domingos: Fechado</p>
            </div>
        </div>
    </div>
</section>

<section class="section bg-secondary" id="mapa">
    <div class="container">
        <h2>Como chegar</h2>
        <div class="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5!2d-46.66001!3d-23.5497347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b2fb0a4bde7%3A0xe199684a60fd2026!2sPsic%C3%B3loga%20Danielle%20Gurgel!5e0!3m2!1spt-BR!2sbr!4v1709737200000!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style="border:0; border-radius: var(--radius-md);"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Localização do consultório de Psicologia em Higienópolis"
            ></iframe>
        </div>
        <p class="map-link">
            <a
                href="https://www.google.com/maps/place/Psic%C3%B3loga+Danielle+Gurgel/@-23.5497347,-46.66001,17z"
                target="_blank"
                rel="noopener"
            >
                Ver no Google Maps
            </a>
        </p>
    </div>
</section>

<section class="section gradient-cta">
    <div class="container">
        <div class="cta-content">
            <h2>Ainda com dúvidas?</h2>
            <p>
                Escreva mesmo assim. Cada mensagem é acolhida com cuidado e
                respondida com atenção.
            </p>
            <Button
                href="https://wa.me/5511932037191?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta."
                variant="white"
                size="lg"
            >
                <Phone size={20} /> Vamos conversar?
            </Button>
        </div>
    </div>
</section>

<style>
    .contato-hero {
        background: var(--secondary-color);
        padding: calc(var(--header-height) + 3rem) 0 3rem;
        text-align: center;
    }

    .contato-hero h1 {
        margin-bottom: 1rem;
    }

    .contato-hero p {
        color: var(--text-light);
        font-size: var(--text-lg);
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.8;
    }

    .section h2 {
        margin-bottom: 1.5rem;
    }

    .contact-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        margin-bottom: 2rem;
    }

    .contact-card {
        background: var(--white);
        padding: 2rem;
        border-radius: var(--radius-md);
        text-align: center;
        border: 1px solid var(--border-light);
    }

    .contact-card.highlight {
        border: 2px solid var(--primary-color);
    }

    .contact-card :global(svg) {
        color: var(--primary-color);
        margin-bottom: 1rem;
    }

    .contact-card h3 {
        margin-bottom: 0.5rem;
        font-size: var(--text-lg);
    }

    .contact-desc {
        color: var(--text-light);
        font-size: var(--text-sm);
        margin-bottom: 1rem;
    }

    .email-link {
        color: var(--primary-color);
        font-weight: 500;
        word-break: break-all;
    }

    .locations-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }

    .location-card {
        background: var(--secondary-light);
        padding: 2rem;
        border-radius: var(--radius-md);
        border-left: 4px solid var(--primary-color);
    }

    .location-card :global(svg) {
        color: var(--primary-color);
        margin-bottom: 0.75rem;
    }

    .location-card h3 {
        margin-bottom: 0.75rem;
    }

    .location-card p {
        color: var(--text-light);
        line-height: 1.7;
    }

    .location-details {
        margin-top: 1rem;
        padding-left: 1rem;
    }

    .location-details li {
        color: var(--text-light);
        font-size: var(--text-sm);
        margin-bottom: 0.5rem;
        list-style: disc;
    }

    .location-note {
        margin-top: 0.75rem;
        font-size: var(--text-sm);
    }

    .map-container {
        margin-bottom: 1rem;
    }

    .map-link {
        text-align: center;
    }

    .map-link a {
        color: var(--primary-color);
        font-weight: 500;
    }

    .cta-content {
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
    }

    .cta-content h2 {
        color: var(--white);
    }

    .cta-content p {
        color: rgba(255, 255, 255, 0.9);
        font-size: var(--text-lg);
        margin-bottom: 2rem;
    }

    @media (max-width: 768px) {
        .contact-grid {
            grid-template-columns: 1fr;
        }

        .locations-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
