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
            question: "É possível melhorar a autoestima com terapia?",
            answer: "Sim. A terapia oferece um espaço para compreender as origens da autoimagem negativa e desenvolver uma relação mais compassiva e genuína consigo mesmo. Na ACP, o acolhimento sem julgamento é fundamental para esse processo.",
        },
        {
            question: "Baixa autoestima é falta de confiança?",
            answer: "Não necessariamente. A autoestima envolve a avaliação que fazemos de nós mesmos — nosso valor, capacidades e merecimento. É mais profundo do que confiança situacional. A terapia ajuda a compreender essa relação.",
        },
        {
            question: "Autocrítica excessiva é sinal de baixa autoestima?",
            answer: "Pode ser. A autocrítica excessiva muitas vezes reflete padrões aprendidos ao longo da vida. Na terapia, é possível identificar esses padrões e desenvolver uma postura mais acolhedora consigo mesmo.",
        },
    ];
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                headline: "Autoestima — Psicóloga Danielle Gurgel",
                description:
                    "Como a terapia pode ajudar no fortalecimento da autoestima.",
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
    <title>Autoestima — Psicóloga em Higienópolis | Danielle Gurgel</title>
    <meta
        name="description"
        content="Autoestima e autoconhecimento: como a psicoterapia humanizada pode ajudar no fortalecimento da relação consigo mesmo."
    />
    <link rel="canonical" href="{SITE_URL}/experiencia/autoestima/" />
    {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>
<nav class="breadcrumb" aria-label="Navegação estrutural">
    <ol class="container">
        <li><a href="/">Início</a></li>
        <li><a href="/#experiencia">Experiência</a></li>
        <li aria-current="page">Autoestima</li>
    </ol>
</nav>
<section class="service-hero">
    <div class="container">
        <h1>Autoestima</h1>
        <p class="hero-subtitle">
            Desenvolver uma relação mais acolhedora consigo mesmo é um processo
            possível
        </p>
    </div>
</section>
<section class="section bg-white">
    <div class="container service-content">
        <h2>Compreendendo a autoestima</h2>
        <p>
            A autoestima é a avaliação que fazemos de nós mesmos — nosso valor,
            nossas capacidades e nosso merecimento. Quando essa avaliação é
            predominantemente negativa, pode afetar todos os aspectos da vida:
            relacionamentos, trabalho, decisões e bem-estar emocional.
        </p>
        <p>
            Muitas vezes, a baixa autoestima tem raízes em experiências passadas
            — críticas constantes, comparações, expectativas excessivas ou falta
            de acolhimento. Compreender essas origens é o primeiro passo para
            transformar a relação consigo mesmo.
        </p>
        <h2>Como a terapia pode ajudar</h2>
        <p>
            Na Abordagem Centrada na Pessoa, o terapeuta oferece algo que muitas
            pessoas nunca experimentaram plenamente: aceitação incondicional.
            Ser genuinamente aceito como se é — sem cobranças, sem julgamentos —
            pode ser uma experiência profundamente transformadora.
        </p>
        <p>
            Ao ser acolhida em um espaço seguro, a pessoa pode gradualmente
            desenvolver uma postura mais compassiva consigo mesma, reconhecendo
            seus valores e potencialidades.
        </p>
        <h2>Sinais que merecem atenção</h2>
        <ul>
            <li>Autocrítica constante e desproporcional</li>
            <li>Dificuldade em aceitar elogios</li>
            <li>Comparação frequente com os outros</li>
            <li>Medo de se expor ou de ser julgado</li>
            <li>Dificuldade em tomar decisões por insegurança</li>
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
            <h2>Você merece se olhar com mais gentileza</h2>
            <p>
                Agende uma consulta e comece a transformar sua relação consigo
                mesmo.
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
                <li><a href="/experiencia/depressao/">Depressão</a></li>
                <li>
                    <a href="/experiencia/relacionamento/">Relacionamentos</a>
                </li>
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
