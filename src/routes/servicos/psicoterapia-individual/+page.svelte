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
            question: "Como funciona a psicoterapia individual?",
            answer: "As sessões acontecem geralmente uma vez por semana, com duração de 50 minutos. É um espaço seguro para que você possa explorar seus sentimentos, reflexões e desafios no seu próprio ritmo, sem julgamentos.",
        },
        {
            question: "A terapeuta dá conselhos ou soluções prontas?",
            answer: "Na Abordagem Centrada na Pessoa, o papel da terapeuta é facilitar o processo de autocompreensão. Não ofereço respostas prontas, mas ajudo você a encontrar suas próprias soluções, que tendem a ser mais eficazes e satisfatórias.",
        },
        {
            question: "Quanto tempo dura o processo terapêutico?",
            answer: "Não há prazo definido — cada pessoa tem seu ritmo. Algumas questões se beneficiam de um acompanhamento mais curto, outras pedem mais tempo. A duração depende de suas necessidades e objetivos.",
        },
        {
            question: "Preciso ter um problema grave para fazer terapia?",
            answer: "Não. A terapia é para qualquer pessoa que busca autoconhecimento, crescimento pessoal ou apoio emocional. Você não precisa estar em crise para se beneficiar do processo terapêutico.",
        },
        {
            question: "Atende plano de saúde?",
            answer: "Os atendimentos são particulares, mas muitos planos oferecem reembolso. Após cada sessão, forneço os documentos necessários para que você solicite junto à sua operadora.",
        },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": `${SITE_URL}/servicos/psicoterapia-individual/#service`,
                name: "Psicoterapia Individual em Higienópolis",
                description:
                    "Atendimento psicológico individual com base na Abordagem Centrada na Pessoa. Sessões presenciais em Higienópolis, São Paulo.",
                provider: { "@id": `${SITE_URL}/#organization` },
                areaServed: { "@type": "City", name: "São Paulo" },
                serviceType: "Psicoterapia Individual",
            },
            {
                "@type": "FAQPage",
                "@id": `${SITE_URL}/servicos/psicoterapia-individual/#faqpage`,
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
    <title>Psicoterapia Individual em Higienópolis | Danielle Gurgel</title>
    <meta
        name="description"
        content="Psicoterapia individual humanizada em Higienópolis, São Paulo. Abordagem Centrada na Pessoa com escuta empática. Agende sua consulta."
    />
    <link rel="canonical" href="{SITE_URL}/servicos/psicoterapia-individual/" />
    {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<nav class="breadcrumb" aria-label="Navegação estrutural">
    <ol class="container">
        <li><a href="/">Início</a></li>
        <li><a href="/#servicos">Serviços</a></li>
        <li aria-current="page">Psicoterapia Individual</li>
    </ol>
</nav>

<section class="service-hero">
    <div class="container">
        <h1>Psicoterapia Individual</h1>
        <p class="hero-subtitle">
            Um espaço seguro para autoconhecimento, crescimento pessoal e
            bem-estar emocional
        </p>
    </div>
</section>

<section class="section bg-white">
    <div class="container service-content">
        <h2>Como funciona o atendimento</h2>
        <p>
            A psicoterapia individual é um processo de autoconhecimento e
            crescimento pessoal. As sessões acontecem semanalmente, com duração
            de 50 minutos, em um ambiente acolhedor e confidencial.
        </p>
        <p>
            Na Abordagem Centrada na Pessoa, você é visto como protagonista do
            seu próprio processo. Meu papel é oferecer uma escuta empática,
            genuína e sem julgamentos, criando condições para que você explore
            seus sentimentos, identifique padrões e encontre seus próprios
            caminhos.
        </p>

        <h2>Para quem é indicada</h2>
        <p>
            A psicoterapia individual é indicada para qualquer pessoa que
            busque:
        </p>
        <ul>
            <li>Autoconhecimento e desenvolvimento pessoal</li>
            <li>Apoio emocional em momentos de transição</li>
            <li>Lidar com ansiedade, estresse ou dificuldades emocionais</li>
            <li>Melhorar relacionamentos pessoais e profissionais</li>
            <li>Fortalecer a autoestima e a confiança em si mesmo</li>
        </ul>

        <h2>O que esperar das sessões</h2>
        <p>
            Não existe um "roteiro" pré-definido. O ritmo e os temas são
            conduzidos por você, conforme suas necessidades. A confiança se
            constrói gradualmente — e respeito profundamente o seu tempo.
        </p>
        <p>
            Diferente de abordagens diretivas, na ACP eu não ofereço
            diagnósticos rígidos ou soluções prontas. Acredito que as soluções
            que surgem do seu próprio processo de reflexão são mais eficazes e
            duradouras.
        </p>
    </div>
</section>

<section class="section bg-secondary">
    <div class="container">
        <div
            class="section-header"
            style="padding-left: 1.5rem; text-align: left; position: relative;"
        >
            <h2>Perguntas Frequentes</h2>
        </div>
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
            <h2>Pronta para acolher você</h2>
            <p>
                Agende uma consulta e descubra como a psicoterapia pode
                transformar sua relação consigo mesmo.
            </p>
            <Button
                href="https://wa.me/5511932037191?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20de%20psicoterapia%20individual."
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
                <li><a href="/servicos/terapia-online/">Terapia Online</a></li>
                <li>
                    <a href="/servicos/terapia-de-casal/">Terapia de Casal</a>
                </li>
                <li><a href="/experiencia/ansiedade/">Ansiedade</a></li>
                <li><a href="/experiencia/depressao/">Depressão</a></li>
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
