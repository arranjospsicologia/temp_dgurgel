<script lang="ts">
	import { base } from '$app/paths';
	import SEO from "$lib/components/SEO.svelte";

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "TherapeuticProcedure",
        name: "Psicoterapia Individual Presencial",
        description:
            "Sessões presenciais de psicoterapia com a psicóloga Danielle Gurgel na Av. Angélica, Higienópolis.",
        provider: {
            "@id": "https://psicologadaniellegurgel.com/sobre#danielle",
        },
    };
</script>

<SEO
    title="Psicoterapia Individual em Higienópolis | Psicóloga SP"
    description="Sessões de psicoterapia focadas em mulheres. O consultório em Higienópolis oferece sigilo, ética absoluta e a Abordagem Centrada na Pessoa."
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
                <a itemprop="item" href="{base}"
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
                    >Psicoterapia Individual</span
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
                Psicoterapia Individual (Presencial)
            </h1>
            <p class="text-xl text-primary-dark font-medium leading-relaxed">
                O formato clássico, focado na Abordagem Centrada na Pessoa,
                resgatando seu tempo inegociável dentro da rotina de São Paulo.
            </p>
        </header>

        <div class="prose prose-lg text-gray-700 max-w-none space-y-8">
            <p>
                A <strong>Psicoterapia Individual</strong> é o núcleo do acompanhamento
                psicológico. Em um mundo de hiperconectividade, as sessões presenciais
                no consultório garantem 50 minutos onde nada externo importará. Nenhuma
                notificação, demanda profissional ou familiar interromperá o seu
                cuidado emocional.
            </p>

            <h2 class="text-2xl font-heading text-black mt-12 mb-4">
                Como funciona o atendimento presencial?
            </h2>
            <p>
                O consultório de Danielle Gurgel está localizado na <strong
                    >Av. Angélica, 1996 - Higienópolis</strong
                >. Atravessar a cidade e dedicar tempo logístico a si mesma já é
                a primeira intervenção clínica para mulheres exaustas por uma
                rotina de sacrifícios.
            </p>

            <div
                class="bg-secondary p-8 rounded-3xl mt-10 border border-transparent"
            >
                <h3 class="text-xl font-heading text-primary-dark m-0 mb-4">
                    Sobre a Primeira Sessão (Avaliação Mútua)
                </h3>
                <p class="m-0 mb-4 text-gray-700">
                    O primeiro encontro é focado em escutar o panorama geral que
                    a motivou a buscar ajuda. Não existem obrigações de
                    comprometimento imediato. A primeira sessão serve para você
                    avaliar a minha ética de trabalho, e para que eu conheça os
                    desafios que estão travando a sua saúde mental e determine a
                    viabilidade clínica do nosso trabalho conjunto.
                </p>
            </div>
        </div>
    </div>
</article>

<section class="py-16 bg-gradient-cta text-center text-white">
    <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="text-3xl font-heading text-white mb-6">
            Dê o primeiro passo
        </h2>
        <a
            href="https://wa.me/5511932037191?text=Olá!%20Desejo%20agendar%20uma%20Psicoterapia%20Individual%20presencial%20em%20Higienópolis."
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-lg bg-white text-primary-dark shadow-hover hover:-translate-y-1 mt-4 font-bold"
        >
            Agendar Sessão Presencial via WhatsApp
        </a>
    </div>
</section>
