<script lang="ts">
	import { base } from '$app/paths';
	import SEO from "$lib/components/SEO.svelte";

    const articlesSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Artigos de Psicologia por Danielle Gurgel",
        description:
            "Textos autorais sobre saúde mental feminina, burnout, relacionamentos e maternidade.",
        url: "https://psicologadaniellegurgel.com/artigos",
    };

    const articles = [
        {
            title: "Como a cultura corporativa acelera quadros de Burnout em mulheres",
            excerpt:
                "Exploramos por que mulheres sofrem de esgotamento profissional em uma taxa 30% maior que homens em cargos de liderança semelhantes.",
            link: "#", // placeholder for future article
            category: "Carreira & Burnout",
        },
        {
            title: "O peso do silêncio: a codependência emocional nas famílias paulistanas",
            excerpt:
                "Como identificar os limites invisíveis nas relações familiares e resgatar o direito de priorizar as próprias emoções.",
            link: "#",
            category: "Relacionamentos",
        },
        {
            title: "Síndrome do Ninho Vazio: Redescobrindo o indivíduo após os 50 anos",
            excerpt:
                "A saída dos filhos de casa não é o fim de um papel, mas o recomeço da sua história individual esquecida na juventude.",
            link: "#",
            category: "Transições de Vida",
        },
    ];
</script>

<SEO
    title="Artigos sobre Saúde Mental Feminina | Psicóloga Danielle Gurgel"
    description="Leia textos autorais e especializados em psicologia clínica focada em mulheres. Informação segura escrita pela psicóloga Danielle Gurgel."
    schemas={[articlesSchema]}
/>

<div class="breadcrumb pt-32 pb-8 bg-secondary border-b border-border-light">
    <div class="container mx-auto px-4 max-w-5xl">
        <ol itemscope itemtype="https://schema.org/BreadcrumbList">
            <li
                itemprop="itemListElement"
                itemscope
                itemtype="https://schema.org/ListItem"
            >
                <a itemprop="item" href="{base}/"
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
                <span itemprop="name" class="text-text-light">Artigos</span>
                <meta itemprop="position" content="2" />
            </li>
        </ol>
    </div>
</div>

<article class="py-16 bg-white min-h-[60vh]">
    <div class="container mx-auto px-4 max-w-5xl">
        <header class="mb-16">
            <h1 class="text-4xl md:text-5xl font-heading text-black mb-6">
                Artigos & Reflexões Clínicas
            </h1>
            <p
                class="text-xl text-primary-dark font-medium leading-relaxed max-w-3xl"
            >
                Informações baseadas na Abordagem Centrada na Pessoa, focadas no
                desenvolvimento e acolhimento da psique feminina na atualidade.
            </p>
        </header>

        <div class="grid md:grid-cols-2 gap-8">
            {#each articles as article}
                <div
                    class="border border-border-light rounded-2xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-start bg-secondary-light/30"
                >
                    <span
                        class="inline-block px-3 py-1 bg-white border border-primary/20 text-primary-dark text-xs font-bold uppercase tracking-wider rounded-full mb-4"
                    >
                        {article.category}
                    </span>
                    <h2
                        class="text-2xl font-heading text-black mb-4 leading-tight"
                    >
                        {article.title}
                    </h2>
                    <p class="text-gray-600 mb-6 flex-grow">
                        {article.excerpt}
                    </p>
                    <a
                        href={article.link}
                        class="text-primary font-medium hover:text-primary-dark transition-colors border-b border-primary pb-0.5"
                    >
                        Ler artigo completo
                    </a>
                </div>
            {/each}
        </div>
    </div>
</article>
