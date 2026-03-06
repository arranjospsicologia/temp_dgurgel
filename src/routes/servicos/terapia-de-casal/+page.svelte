<script lang="ts">
    import { Button } from "$lib";
    import { ChevronDown } from "lucide-svelte";

    const SITE_URL = "https://psicologadaniellegurgel.com.br";
    let openFaq = $state(-1);
    function toggleFaq(i: number) {
        openFaq = openFaq === i ? -1 : i;
    }

    const faqs = [
        {
            question: "Como funciona a terapia de casal?",
            answer: "As sessões acontecem com a presença de ambos os parceiros. A terapeuta facilita a comunicação entre o casal, ajudando cada um a expressar suas necessidades e sentimentos de forma respeitosa. Não há julgamento — o objetivo é construir um espaço seguro para o diálogo.",
        },
        {
            question: "Um dos parceiros pode fazer sessão individual também?",
            answer: "Sim, é possível combinar terapia de casal com sessões individuais, desde que haja transparência e consentimento. No entanto, o ideal é que ambos tenham o mesmo terapeuta apenas na modalidade de casal.",
        },
        {
            question:
                "A terapia de casal serve para casais que querem se separar?",
            answer: "A terapia de casal pode ajudar em diferentes momentos — inclusive quando há dúvidas sobre continuar ou não a relação. O objetivo não é manter ou terminar a relação, mas ajudar o casal a tomar decisões mais conscientes e respeitosas.",
        },
        {
            question: "Casais homoafetivos são bem-vindos?",
            answer: "Sim, absolutamente. Meu consultório é um espaço seguro e acolhedor para todas as configurações de relação. A diversidade é respeitada e valorizada.",
        },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                name: "Terapia de Casal em Higienópolis",
                description:
                    "Terapia de casal humanizada com base na Abordagem Centrada na Pessoa. Espaço seguro para diálogo e fortalecimento do vínculo.",
                provider: { "@id": `${SITE_URL}/#organization` },
                areaServed: { "@type": "City", name: "São Paulo" },
                serviceType: "Terapia de Casal",
            },
            {
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                    "@type": "Question",
                    name: f.question,
                    acceptedAnswer: { "@type": "Answer", text: f.answer },
                })),
            },
        ],
    };
</script>

<svelte:head>
    <title>Terapia de Casal em Higienópolis | Danielle Gurgel</title>
    <meta
        name="description"
        content="Terapia de casal humanizada em Higienópolis, São Paulo. Espaço seguro para fortalecer a comunicação e o vínculo. Casais homoafetivos bem-vindos."
    />
    <link rel="canonical" href="{SITE_URL}/servicos/terapia-de-casal/" />
    {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<nav class="breadcrumb" aria-label="Navegação estrutural">
    <ol class="container">
        <li><a href="/">Início</a></li>
        <li><a href="/#servicos">Serviços</a></li>
        <li aria-current="page">Terapia de Casal</li>
    </ol>
</nav>

<section class="service-hero">
    <div class="container">
        <h1>Terapia de Casal</h1>
        <p class="hero-subtitle">
            Um espaço seguro para fortalecer a comunicação, o vínculo e a
            compreensão mútua
        </p>
    </div>
</section>

<section class="section bg-white">
    <div class="container service-content">
        <h2>Como funciona</h2>
        <p>
            A terapia de casal oferece um espaço neutro e acolhedor onde ambos
            os parceiros podem expressar seus sentimentos, necessidades e
            perspectivas. Como facilitadora, ajudo o casal a desenvolver uma
            comunicação mais empática e respeitosa.
        </p>
        <p>
            Na Abordagem Centrada na Pessoa, o foco não está em apontar
            culpados, mas em compreender as dinâmicas da relação e criar
            condições para que ambos se sintam ouvidos e valorizados.
        </p>

        <h2>Quando buscar a terapia de casal</h2>
        <ul>
            <li>Dificuldades de comunicação entre os parceiros</li>
            <li>Conflitos frequentes ou desgaste emocional na relação</li>
            <li>Momentos de transição (casamento, filhos, mudanças)</li>
            <li>Busca por maior conexão e intimidade emocional</li>
            <li>Dúvidas sobre o futuro da relação</li>
        </ul>

        <h2>Inclusividade</h2>
        <p>
            Meu consultório é um espaço acolhedor e seguro para todas as
            configurações de casal — incluindo casais homoafetivos e
            poliafetivos. A diversidade é respeitada e valorizada.
        </p>
    </div>
</section>

<section class="section bg-secondary">
    <div class="container">
        <h2>Perguntas Frequentes</h2>
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
            <h2>O diálogo é o primeiro passo</h2>
            <p>
                Agende uma sessão e descubram juntos novos caminhos para a
                relação.
            </p>
            <Button
                href="https://wa.me/5511932037191?text=Olá,%20gostaria%20de%20agendar%20uma%20sessão%20de%20terapia%20de%20casal."
                variant="white"
                size="lg">Agendar Sessão</Button
            >
        </div>
    </div>
</section>

<section class="section bg-white">
    <div class="container">
        <div class="related-links">
            <h3>Veja também</h3>
            <ul>
                <li>
                    <a href="/servicos/psicoterapia-individual/"
                        >Psicoterapia Individual</a
                    >
                </li>
                <li>
                    <a href="/experiencia/relacionamento/">Relacionamentos</a>
                </li>
                <li><a href="/servicos/terapia-online/">Terapia Online</a></li>
            </ul>
        </div>
    </div>
</section>

<style>
    .service-content ul {
        margin: 1rem 0 1.5rem 1.5rem;
    }
    .service-content li {
        margin-bottom: 0.75rem;
        line-height: 1.7;
        list-style: disc;
        color: var(--text-light);
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
</style>
