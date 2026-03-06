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
            question: "A terapia ajuda nos relacionamentos?",
            answer: "Sim. A terapia individual pode ajudar a compreender padrões de comportamento nos relacionamentos, melhorar a comunicação e desenvolver uma relação mais saudável consigo mesmo — o que naturalmente impacta todos os seus vínculos.",
        },
        {
            question: "Preciso trazer meu parceiro(a) para a terapia?",
            answer: "Não necessariamente. A terapia individual também é eficaz para trabalhar questões de relacionamento. Se o trabalho de casal for indicado, essa possibilidade pode ser discutida no processo.",
        },
        {
            question: "A terapia pode ajudar com o fim de um relacionamento?",
            answer: "Sim. O luto pelo fim de uma relação é um processo legítimo que merece acolhimento. A terapia oferece um espaço para elaborar essa perda e encontrar novos sentidos.",
        },
    ];
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                headline: "Relacionamentos — Psicóloga Danielle Gurgel",
                description:
                    "Como a terapia pode ajudar nas dificuldades de relacionamento.",
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
    <title>Relacionamentos — Psicóloga em Higienópolis | Danielle Gurgel</title>
    <meta
        name="description"
        content="Dificuldades nos relacionamentos: como a terapia pode ajudar com comunicação, conflitos e vínculos afetivos."
    />
    <link rel="canonical" href="{SITE_URL}/experiencia/relacionamento/" />
    {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>
<nav class="breadcrumb" aria-label="Navegação estrutural">
    <ol class="container">
        <li><a href="/">Início</a></li>
        <li><a href="/#experiencia">Experiência</a></li>
        <li aria-current="page">Relacionamentos</li>
    </ol>
</nav>
<section class="service-hero">
    <div class="container">
        <h1>Relacionamentos</h1>
        <p class="hero-subtitle">
            Compreender seus padrões relacionais é o caminho para vínculos mais
            saudáveis
        </p>
    </div>
</section>
<section class="section bg-white">
    <div class="container service-content">
        <h2>Dificuldades nos relacionamentos</h2>
        <p>
            Os relacionamentos são uma das áreas mais complexas e significativas
            da vida. Dificuldades de comunicação, conflitos recorrentes, ciúmes,
            dependência emocional ou o luto pelo fim de uma relação — tudo isso
            pode gerar sofrimento intenso.
        </p>
        <p>
            Muitas vezes, padrões que se repetem nas relações têm raízes em
            experiências anteriores. Compreender esses padrões é fundamental
            para construir vínculos mais saudáveis e autênticos.
        </p>
        <h2>Como a terapia pode ajudar</h2>
        <p>
            Na terapia, você tem um espaço seguro para explorar seus sentimentos
            sobre relacionamentos — sem julgamento. A Abordagem Centrada na
            Pessoa valoriza a autenticidade nas relações, ajudando você a
            desenvolver uma comunicação mais empática e honesta.
        </p>
        <p>
            Quando nos compreendemos melhor, naturalmente melhoramos a forma
            como nos relacionamos com os outros.
        </p>
        <h2>Questões comuns</h2>
        <ul>
            <li>
                Dificuldade de comunicação com parceiro(a), família ou amigos
            </li>
            <li>Conflitos recorrentes e padrões repetitivos</li>
            <li>Dependência emocional ou medo de abandono</li>
            <li>Luto pelo fim de um relacionamento</li>
            <li>Dificuldade em estabelecer limites saudáveis</li>
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
            <h2>Seus relacionamentos merecem atenção</h2>
            <p>
                Agende uma consulta e descubra como a terapia pode transformar
                seus vínculos.
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
                <li>
                    <a href="/servicos/terapia-de-casal/">Terapia de Casal</a>
                </li>
                <li><a href="/experiencia/autoestima/">Autoestima</a></li>
                <li><a href="/experiencia/ansiedade/">Ansiedade</a></li>
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
