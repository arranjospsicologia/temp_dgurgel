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
            question: "O que é burnout?",
            answer: "Burnout é um estado de esgotamento físico e emocional causado pelo excesso de demandas, geralmente no ambiente de trabalho. Foi reconhecido pela OMS como um fenômeno ocupacional e se manifesta por exaustão, distanciamento mental do trabalho e redução da eficácia profissional.",
        },
        {
            question: "Burnout é diferente de estresse?",
            answer: "Sim. O estresse é uma resposta natural e temporária. O burnout é um estado prolongado de esgotamento que resulta de estresse crônico não gerenciado. Enquanto o estresse pode motivar, o burnout paralisa.",
        },
        {
            question: "A terapia pode ajudar com burnout?",
            answer: "Sim. A terapia oferece um espaço para compreender as raízes do esgotamento, reconhecer limites e desenvolver uma relação mais saudável com o trabalho. Na ACP, o foco está no que faz sentido para você — não em 'produtividade' ou 'performance'.",
        },
    ];
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                headline: "Burnout — Psicóloga Danielle Gurgel",
                description:
                    "Burnout: como a psicoterapia pode ajudar no esgotamento profissional.",
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
    <title>Burnout — Psicóloga em Higienópolis | Danielle Gurgel</title>
    <meta
        name="description"
        content="Burnout e esgotamento profissional: como a psicoterapia humanizada pode ajudar. Atendimento em Higienópolis para executivos e profissionais."
    />
    <link rel="canonical" href="{SITE_URL}/experiencia/burnout/" />
    {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>
<nav class="breadcrumb" aria-label="Navegação estrutural">
    <ol class="container">
        <li><a href="/">Início</a></li>
        <li><a href="/#experiencia">Experiência</a></li>
        <li aria-current="page">Burnout</li>
    </ol>
</nav>
<section class="service-hero">
    <div class="container">
        <h1>Burnout</h1>
        <p class="hero-subtitle">
            Reconhecer o esgotamento é um ato de coragem — e o primeiro passo
            para a mudança
        </p>
    </div>
</section>
<section class="section bg-white">
    <div class="container service-content">
        <h2>Compreendendo o burnout</h2>
        <p>
            O burnout é um estado de esgotamento físico, mental e emocional
            causado pelo excesso de demandas no trabalho. Em Higienópolis, onde
            muitos profissionais vivem sob alta pressão — executivos, advogados,
            médicos, empreendedores — o burnout é mais comum do que se imagina.
        </p>
        <p>
            Reconhecido pela Organização Mundial da Saúde (OMS) como fenômeno
            ocupacional, o burnout se manifesta por exaustão profunda,
            distanciamento emocional do trabalho e sensação de ineficácia.
        </p>
        <h2>Como a terapia pode ajudar</h2>
        <p>
            No mundo corporativo, é comum priorizar o trabalho em detrimento das
            próprias emoções. A terapia oferece um espaço para pausar, refletir
            e se reconectar com o que realmente importa.
        </p>
        <p>
            Na Abordagem Centrada na Pessoa, não trabalhamos com "produtividade"
            ou "alta performance" como objetivos. Trabalhamos com você — suas
            necessidades, seus limites, seus valores.
        </p>
        <h2>Sinais de atenção</h2>
        <ul>
            <li>Exaustão constante que não melhora com descanso</li>
            <li>Cinismo ou desapego em relação ao trabalho</li>
            <li>Sensação de incompetência ou perda de propósito</li>
            <li>Dificuldade em separar vida pessoal e profissional</li>
            <li>
                Sintomas físicos (dores de cabeça, insônia, problemas
                digestivos)
            </li>
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
            <h2>Parar não é fraqueza — é cuidado</h2>
            <p>Agende uma conversa e descubra como resgatar o equilíbrio.</p>
            <Button
                href="https://wa.me/5511932037191?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20burnout."
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
                <li><a href="/experiencia/depressao/">Depressão</a></li>
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
