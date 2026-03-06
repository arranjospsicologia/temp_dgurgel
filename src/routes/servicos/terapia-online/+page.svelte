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
            question: "A terapia online funciona mesmo?",
            answer: "Sim. Pesquisas mostram que a terapia online é tão eficaz quanto a presencial para a maioria das questões emocionais. A qualidade da relação terapêutica — empatia, escuta, presença — não depende do formato, mas da postura do profissional.",
        },
        {
            question: "Que plataforma é utilizada?",
            answer: "Utilizo plataformas seguras de videochamada que garantem privacidade e criptografia. Antes da primeira sessão, envio todas as orientações para que você se sinta confortável com o formato.",
        },
        {
            question: "Preciso de algum preparo especial?",
            answer: "Basta ter um dispositivo com câmera e boa conexão de internet. Procure um local tranquilo e reservado, onde você se sinta à vontade para conversar sem interrupções.",
        },
        {
            question: "A terapia online tem o mesmo sigilo?",
            answer: "Absolutamente. O sigilo profissional é garantido pelo Código de Ética do Psicólogo e pela Resolução 11/2018 do CFP, que regulamenta o atendimento online. A confidencialidade é a mesma do presencial.",
        },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                name: "Terapia Online",
                description:
                    "Atendimento psicológico online com a Abordagem Centrada na Pessoa. Sessões por videochamada com sigilo e qualidade.",
                provider: { "@id": `${SITE_URL}/#organization` },
                areaServed: { "@type": "Country", name: "Brasil" },
                serviceType: "Terapia Online",
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
    <title>Terapia Online | Psicóloga Danielle Gurgel</title>
    <meta
        name="description"
        content="Terapia online com psicóloga humanista. Atendimento por videochamada com sigilo, empatia e a mesma qualidade do presencial. Agende."
    />
    <link rel="canonical" href="{SITE_URL}/servicos/terapia-online/" />
    {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<nav class="breadcrumb" aria-label="Navegação estrutural">
    <ol class="container">
        <li><a href="/">Início</a></li>
        <li><a href="/#servicos">Serviços</a></li>
        <li aria-current="page">Terapia Online</li>
    </ol>
</nav>

<section class="service-hero">
    <div class="container">
        <h1>Terapia Online</h1>
        <p class="hero-subtitle">
            Atendimento psicológico por videochamada, com a mesma qualidade e
            profundidade do presencial
        </p>
    </div>
</section>

<section class="section bg-white">
    <div class="container service-content">
        <h2>Como funciona a terapia online</h2>
        <p>
            A terapia online oferece a mesma escuta, empatia e presença do
            atendimento presencial — mas com a flexibilidade de estar no
            conforto da sua casa ou escritório. As sessões acontecem por
            videochamada, com duração de 50 minutos, e seguem todas as normas do
            Conselho Federal de Psicologia.
        </p>
        <p>
            Na terapia online, a tecnologia é apenas uma ferramenta para
            possibilitar o encontro humano, mesmo à distância. O formato não
            diminui a profundidade do vínculo terapêutico e pode ser tão
            transformador quanto o atendimento presencial.
        </p>

        <h2>Para quem é indicada</h2>
        <ul>
            <li>
                Pessoas que vivem fora de São Paulo ou em cidades sem fácil
                acesso a psicólogos
            </li>
            <li>
                Quem tem rotina corrida e prefere a praticidade do formato
                online
            </li>
            <li>Pessoas em viagem ou que mudam de cidade com frequência</li>
            <li>Quem se sente mais confortável no próprio ambiente</li>
        </ul>

        <h2>Regulamentação</h2>
        <p>
            A terapia online é regulamentada pelo Conselho Federal de Psicologia
            (CFP) por meio da Resolução nº 11/2018 e atualizada pela Resolução
            nº 04/2020. A confidencialidade, ética e qualidade são garantidas da
            mesma forma que no atendimento presencial.
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
            <h2>Comece de onde você estiver</h2>
            <p>
                Agende sua primeira sessão online e descubra como a terapia pode
                caber na sua rotina.
            </p>
            <Button
                href="https://wa.me/5511932037191?text=Olá,%20gostaria%20de%20agendar%20uma%20sessão%20de%20terapia%20online."
                variant="white"
                size="lg">Agendar Sessão Online</Button
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
                    <a href="/servicos/terapia-de-casal/">Terapia de Casal</a>
                </li>
                <li><a href="/experiencia/burnout/">Burnout</a></li>
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
