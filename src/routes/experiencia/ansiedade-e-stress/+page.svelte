<script lang="ts">
    import SEO from "$lib/components/SEO.svelte";

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "TherapeuticProcedure",
        name: "Psicoterapia para Ansiedade e Estresse",
        description:
            "Tratamento psicológico especializado para transtornos de ansiedade e estresse crônico em mulheres.",
        provider: {
            "@id": "https://psicologadaniellegurgel.com/sobre#danielle",
        },
    };
</script>

<SEO
    title="Psicologia para Ansiedade e Estresse em São Paulo"
    description="Sofrendo com ansiedade constante? A psicoterapia presencial em Higienópolis ou online oferece um espaço seguro para cuidar da sua saúde mental. Agende sua sessão."
    schemas={[serviceSchema]}
/>

<div class="breadcrumb pt-32 pb-8 bg-secondary border-b border-border-light">
    <div class="container mx-auto px-4 max-w-4xl">
        <ol itemscope itemtype="https://schema.org/BreadcrumbList">
            <li
                itemprop="itemListElement"
                itemscope
                itemtype="https://schema.org/ListItem"
            >
                <a itemprop="item" href="/"
                    ><span itemprop="name">Início</span></a
                >
                <meta itemprop="position" content="1" />
            </li>
            <li
                itemprop="itemListElement"
                itemscope
                itemtype="https://schema.org/ListItem"
                aria-current="page"
            >
                <span itemprop="name" class="text-text-light"
                    >Ansiedade e Estresse</span
                >
                <meta itemprop="position" content="2" />
            </li>
        </ol>
    </div>
</div>

<article class="py-16 bg-white">
    <div class="container mx-auto px-4 max-w-4xl">
        <header class="mb-12">
            <h1 class="text-4xl md:text-5xl font-heading text-black mb-6">
                Tratamento para Ansiedade e Estresse
            </h1>
            <p class="text-xl text-primary-dark font-medium leading-relaxed">
                A sensação constante de que algo ruim vai acontecer ou de que
                você não dará conta de tudo não precisa ser a sua realidade
                definitiva.
            </p>
        </header>

        <div class="prose prose-lg text-gray-700 max-w-none space-y-8">
            <p>
                O estresse crônico e a ansiedade generalizada tornaram-se
                epidêmicos, especialmente para mulheres que acumulam as pressões
                de carreiras exigentes, gestão diária da família e expectativas
                sociais. O corpo frequentemente responde antes da mente:
                insônia, palpitações, tensão muscular e cansaço constante são
                sinais de alerta.
            </p>

            <h2 class="text-2xl font-heading text-black mt-12 mb-4">
                Como a psicoterapia ajuda no ciclo da ansiedade?
            </h2>
            <p>
                Através da Abordagem Centrada na Pessoa, o foco inicial é
                estabelecer uma escuta que valide seu sofrimento sem pressa. A
                ansiedade muitas vezes nasce do distanciamento entre quem somos
                e as exigências do que devemos ser.
            </p>
            <ul class="list-disc pl-6 space-y-2 mt-4">
                <li>Reconhecimento de gatilhos na rotina paulistana.</li>
                <li>Desenvolvimento da tolerância à incerteza.</li>
                <li>Resgate da autonomia e da autorregulação emocional.</li>
                <li>
                    Descompressão cognitiva em um ambiente absolutamente neutro
                    e sigiloso em Higienópolis.
                </li>
            </ul>

            <div
                class="bg-secondary-light p-8 rounded-2xl mt-12 border-l-4 border-primary"
            >
                <h3 class="text-xl font-heading text-black m-0 mb-4">
                    Diferença entre Ansiedade comum e Transtorno
                </h3>
                <p class="m-0 text-gray-700">
                    Enquanto a ansiedade situacional é uma resposta natural do
                    organismo (como antes de uma reunião importante), o
                    transtorno se configura quando o medo é desproporcional,
                    paralisante e afeta o andamento logístico e emocional da sua
                    vida rotineira. Nestes casos, o suporte clínico
                    especializado torna-se indispensável.
                </p>
            </div>
        </div>
    </div>
</article>

<section class="py-16 bg-secondary text-center border-t border-border-light">
    <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="text-3xl font-heading text-black mb-6">
            Quebre o Ciclo da Exaustão Mental
        </h2>
        <p class="text-lg text-gray-700 mb-8">
            A terapia é o momento da semana onde você não precisa entregar
            resultados para ninguém, a não ser cuidar de si mesma.
        </p>
        <a
            href="https://wa.me/5511932037191?text=Olá!%20Li%20sobre%20ansiedade%20no%20site%20e%20gostaria%20de%20marcar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-lg btn-primary shadow-hover"
        >
            Agendar Sessão de Avaliação
        </a>
    </div>
</section>
