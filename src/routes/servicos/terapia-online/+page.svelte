<script lang="ts">
	import { base } from '$app/paths';
	import SEO from "$lib/components/SEO.svelte";

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "TherapeuticProcedure",
        name: "Terapia Online",
        description:
            "Psicoterapia online focada em mulheres. Atendimento ético e sigiloso para todo o Brasil ou exterior pela psicóloga Danielle Gurgel.",
        provider: {
            "@id": "https://psicologadaniellegurgel.com/sobre#danielle",
        },
    };
</script>

<SEO
    title="Terapia Online para Mulheres | Psicóloga CRP 06/148054"
    description="Atendimento psicológico online para executivas e brasileiras morando fora. Abordagem Centrada na Pessoa garantindo sigilo total, independente de onde você estiver."
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
                    >Terapia Online</span
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
                Terapia Online: O rigor clínico com flexibilidade
            </h1>
            <p class="text-xl text-primary-dark font-medium leading-relaxed">
                Não abrimos mão da qualidade técnica e da ética que pautam nossa
                atuação clínica. A terapia ocorre através de plataformas seguras
                com criptografia.
            </p>
        </header>

        <div class="prose prose-lg text-gray-700 max-w-none space-y-8">
            <p>
                Para profissionais com rotinas executivas, viagens frequentes ou <strong
                    >brasileiras residindo no exterior</strong
                >
                que precisam se expressar em seu idioma natal, a
                <strong>terapia online</strong> tornou-se a ponte fundamental para
                a proteção da saúde mental contínua.
            </p>

            <h2 class="text-2xl font-heading text-black mt-12 mb-4">
                Garantias e Pré-requisitos para Sessões Online
            </h2>
            <p>
                O Conselho Federal de Psicologia autoriza a modalidade, porém,
                para manter a eficácia da Abordagem Centrada na Pessoa,
                exigimos:
            </p>

            <ul class="list-disc pl-6 space-y-2 mt-4">
                <li>
                    <strong>Sigilo Físico:</strong> A paciente deve garantir que
                    estará num ambiente com porta fechada, sem fluxo de familiares
                    durante o horário agendado.
                </li>
                <li>
                    <strong>Foco Direcionado:</strong> As sessões não devem ser realizadas
                    no carro dirigindo ou desempenhando atividades domésticas simultâneas.
                </li>
                <li>
                    <strong>Câmera Aberta:</strong> A leitura da comunicação não-verbal
                    feminina é mandatória para nossa abordagem clínica.
                </li>
            </ul>
        </div>
    </div>
</article>

<section
    class="py-16 bg-primary-dark text-center text-white border-t border-border-light"
>
    <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="text-3xl font-heading text-white mb-6">
            Cuidar de você não tem fronteiras
        </h2>
        <a
            href="https://wa.me/5511932037191?text=Olá!%20Gostaria%20sobre%20informações%20de%20horários%20para%20Terapia%20Online."
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-lg bg-white text-primary-dark shadow-hover hover:-translate-y-1 mt-4 font-bold"
        >
            Agendar Sessão Online (Telepsicologia)
        </a>
    </div>
</section>
