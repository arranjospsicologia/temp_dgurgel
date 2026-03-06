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
            question: "Depressão é a mesma coisa que tristeza?",
            answer: "Não. A tristeza é uma emoção passageira e natural. A depressão é um estado mais persistente que afeta o humor, a energia, o sono, o apetite e a capacidade de sentir prazer. Quando a tristeza se prolonga e interfere no dia a dia, pode ser importante buscar ajuda.",
        },
        {
            question: "A terapia substitui medicação?",
            answer: "Não necessariamente. A terapia e a medicação podem ser complementares. A decisão sobre o uso de medicação deve ser feita com um psiquiatra. A terapia trabalha os aspectos emocionais e comportamentais, enquanto a medicação atua no aspecto bioquímico.",
        },
        {
            question: "Como a ACP ajuda com depressão?",
            answer: "Na Abordagem Centrada na Pessoa, oferecemos um espaço de acolhimento genuíno onde a pessoa pode expressar seus sentimentos sem medo de julgamento. Essa experiência de ser verdadeiramente ouvida e aceita pode ser profundamente restauradora.",
        },
    ];
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                headline: "Depressão — Psicóloga Danielle Gurgel",
                description:
                    "Como a psicoterapia humanizada pode ajudar no enfrentamento da depressão.",
                author: { "@id": `${SITE_URL}/#person` },
                inLanguage: "pt-BR",
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
    <title>Depressão — Psicóloga em Higienópolis | Danielle Gurgel</title>
    <meta
        name="description"
        content="Depressão: como a psicoterapia humanizada pode ajudar. Atendimento em Higienópolis, São Paulo, com a Abordagem Centrada na Pessoa."
    />
    <link rel="canonical" href="{SITE_URL}/experiencia/depressao/" />
    {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>
<nav class="breadcrumb" aria-label="Navegação estrutural">
    <ol class="container">
        <li><a href="/">Início</a></li>
        <li><a href="/#experiencia">Experiência</a></li>
        <li aria-current="page">Depressão</li>
    </ol>
</nav>
<section class="service-hero">
    <div class="container">
        <h1>Depressão</h1>
        <p class="hero-subtitle">
            Um espaço acolhedor para quem precisa ser ouvido sem julgamentos
        </p>
    </div>
</section>
<section class="section bg-white">
    <div class="container service-content">
        <h2>Compreendendo a depressão</h2>
        <p>
            A depressão vai além da tristeza. É um estado que afeta o humor, a
            energia, o sono, a motivação e a capacidade de encontrar prazer nas
            atividades do dia a dia. Para quem vive em um ritmo intenso — como
            executivos, estudantes e profissionais de Higienópolis — reconhecer
            e acolher esses sinais pode ser desafiador.
        </p>
        <p>
            É comum que pessoas com depressão se cobrem para "reagir" ou "ser
            forte". Na terapia, não há essa exigência. Há espaço para ser
            exatamente como você está.
        </p>
        <h2>Como a terapia pode ajudar</h2>
        <p>
            A psicoterapia oferece um ambiente seguro para explorar os
            sentimentos associados à depressão — sem pressa, sem rótulos e sem
            cobranças. Na Abordagem Centrada na Pessoa, o foco está na sua
            experiência singular, no que faz sentido para você.
        </p>
        <p>
            Ao ser verdadeiramente ouvida e aceita, a pessoa pode gradualmente
            reconectar-se com seus recursos internos e encontrar novos sentidos
            para sua vida.
        </p>
        <h2>Sinais que merecem atenção</h2>
        <ul>
            <li>Tristeza persistente ou sensação de vazio</li>
            <li>Perda de interesse em atividades que antes davam prazer</li>
            <li>Alterações no sono ou apetite</li>
            <li>Cansaço constante ou falta de energia</li>
            <li>Dificuldade de concentração ou de tomar decisões</li>
            <li>Isolamento social</li>
        </ul>
    </div>
</section>
<section class="section bg-secondary">
    <div class="container">
        <h2>Perguntas Frequentes</h2>
        <div class="faq-container">
            {#each faqs as faq, i}<div class="faq-item">
                    <button
                        class="faq-question"
                        onclick={() => toggleFaq(i)}
                        aria-expanded={openFaq === i}
                        ><span>{faq.question}</span><ChevronDown
                            size={20}
                            class={openFaq === i ? "chevron open" : "chevron"}
                        /></button
                    >{#if openFaq === i}<div class="faq-answer">
                            <p>{faq.answer}</p>
                        </div>{/if}
                </div>{/each}
        </div>
    </div>
</section>
<section class="section gradient-cta">
    <div class="container">
        <div class="cta-content">
            <h2>Você merece ser ouvido</h2>
            <p>
                Agende uma consulta e descubra o poder de ter um espaço genuíno
                de acolhimento.
            </p>
            <Button
                href="https://wa.me/5511932037191?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta."
                variant="white"
                size="lg">Agendar Consulta</Button
            >
        </div>
    </div>
</section>
<section class="section bg-white">
    <div class="container">
        <div class="related-links">
            <h3>Veja também</h3>
            <ul>
                <li><a href="/experiencia/ansiedade/">Ansiedade</a></li>
                <li><a href="/experiencia/autoestima/">Autoestima</a></li>
                <li>
                    <a href="/servicos/psicoterapia-individual/"
                        >Psicoterapia Individual</a
                    >
                </li>
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
