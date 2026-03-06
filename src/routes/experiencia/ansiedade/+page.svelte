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
            question: "O que causa ansiedade?",
            answer: "A ansiedade pode ter diversas origens — desde fatores genéticos até experiências de vida, pressões sociais e profissionais. Muitas vezes, é uma resposta natural do corpo a situações de ameaça ou incerteza, mas quando se torna constante, pode impactar significativamente a qualidade de vida.",
        },
        {
            question: "Terapia pode ajudar com ansiedade?",
            answer: "Sim. A psicoterapia oferece um espaço seguro para compreender as raízes da ansiedade e desenvolver formas mais saudáveis de lidar com ela. Na Abordagem Centrada na Pessoa, trabalhamos com a escuta empática para que você se sinta acolhido e compreendido no processo.",
        },
        {
            question: "Quanto tempo leva para sentir melhora?",
            answer: "Cada pessoa tem seu ritmo. Algumas percebem mudanças logo nas primeiras sessões, outras precisam de mais tempo. O processo terapêutico é gradual, e os resultados dependem de fatores como frequência das sessões e envolvimento pessoal.",
        },
        {
            question: "Ansiedade tem cura?",
            answer: "A ansiedade não é uma doença a ser 'curada', mas sim uma experiência que pode ser compreendida e gerenciada. Com a terapia, muitas pessoas aprendem a conviver com a ansiedade de forma mais equilibrada, reduzindo significativamente o impacto no dia a dia.",
        },
    ];
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                headline: "Ansiedade — Psicóloga Danielle Gurgel",
                description:
                    "Entenda como a terapia pode ajudar com a ansiedade. Psicoterapia humanizada em Higienópolis, São Paulo.",
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
    <title>Ansiedade — Psicóloga em Higienópolis | Danielle Gurgel</title>
    <meta
        name="description"
        content="Ansiedade: como a psicoterapia humanizada pode ajudar. Atendimento em Higienópolis, São Paulo, com a Abordagem Centrada na Pessoa."
    />
    <link rel="canonical" href="{SITE_URL}/experiencia/ansiedade/" />
    {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>
<nav class="breadcrumb" aria-label="Navegação estrutural">
    <ol class="container">
        <li><a href="/">Início</a></li>
        <li><a href="/#experiencia">Experiência</a></li>
        <li aria-current="page">Ansiedade</li>
    </ol>
</nav>
<section class="service-hero">
    <div class="container">
        <h1>Ansiedade</h1>
        <p class="hero-subtitle">
            Compreender a ansiedade é o primeiro passo para uma relação mais
            saudável com ela
        </p>
    </div>
</section>
<section class="section bg-white">
    <div class="container service-content">
        <h2>Compreendendo a ansiedade</h2>
        <p>
            A ansiedade é uma resposta natural do organismo a situações de
            ameaça, incerteza ou pressão. Em doses moderadas, ela pode funcionar
            como um sinal de alerta. Porém, quando se torna constante ou
            desproporcional, pode afetar profundamente o bem-estar, os
            relacionamentos e a rotina.
        </p>
        <p>
            Executivos, estudantes universitários, profissionais liberais — em
            Higienópolis, a alta exigência do cotidiano pode intensificar os
            sintomas de ansiedade. Sentir-se pressionado no trabalho, nos
            estudos ou nas relações é mais comum do que se imagina.
        </p>
        <h2>Como a terapia pode ajudar</h2>
        <p>
            Na Abordagem Centrada na Pessoa, o objetivo não é eliminar a
            ansiedade, mas compreendê-la. Quando entendemos o que a ansiedade
            tenta comunicar, podemos lidar com ela de forma mais consciente e
            equilibrada.
        </p>
        <p>
            Em um ambiente acolhedor e sem julgamentos, você pode explorar seus
            sentimentos e pensamentos ansiosos, identificar padrões e
            desenvolver recursos internos para enfrentar os desafios do dia a
            dia.
        </p>
        <h2>Sinais que merecem atenção</h2>
        <ul>
            <li>Preocupação constante e desproporcional</li>
            <li>Dificuldade para relaxar ou dormir</li>
            <li>Tensão muscular, taquicardia ou falta de ar</li>
            <li>Irritabilidade ou dificuldade de concentração</li>
            <li>Evitar situações por medo ou insegurança</li>
        </ul>
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
                        ><span>{faq.question}</span><ChevronDown
                            size={20}
                            class={openFaq === i ? "chevron open" : "chevron"}
                        /></button
                    >{#if openFaq === i}<div class="faq-answer">
                            <p>{faq.answer}</p>
                        </div>{/if}
                </div>
            {/each}
        </div>
    </div>
</section>
<section class="section gradient-cta">
    <div class="container">
        <div class="cta-content">
            <h2>Você não precisa enfrentar a ansiedade sozinho</h2>
            <p>Agende uma consulta e descubra como a terapia pode ajudar.</p>
            <Button
                href="https://wa.me/5511932037191?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20ansiedade."
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
                <li><a href="/experiencia/burnout/">Burnout</a></li>
                <li><a href="/experiencia/depressao/">Depressão</a></li>
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
