<script lang="ts">
    import SEO from "$lib/components/SEO.svelte";

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "A psicoterapia ajuda na Síndrome de Burnout Feminino?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sim. A psicoterapia foca em organizar a sobrecarga emocional e mental, fornecendo clareza para a paciente desconstruir o ciclo de exaustão corporativa sem abandonar sua carreira.",
                },
            },
            {
                "@type": "Question",
                name: "Onde fica o consultório de psicologia em Higienópolis?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "O consultório presencial da psicóloga Danielle Gurgel está localizado na Av. Angélica, 1996, em Higienópolis, São Paulo. O local possui comodidade e acesso seguro para pacientes.",
                },
            },
            {
                "@type": "Question",
                name: "A Abordagem Centrada na Pessoa serve para crises familiares?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Completamente. A Abordagem Centrada na Pessoa foca na recuperação da autenticidade emocional da mulher, permitindo que ela lide de forma mais equilibrada com expectativas familiares e relacionais.",
                },
            },
        ],
    };
</script>

<SEO
    title="Psicóloga para Mulheres em Higienópolis | Danielle Gurgel"
    description="Consultório seguro para saúde mental de mulheres em SP. Psicoterapia com a psicóloga Danielle Gurgel (CRP 06/148054). Tratamento de ansiedade e relacionamentos."
    schemas={[faqSchema]}
/>

<!-- HERO BLUF (AEO/Snippet target) -->
<section class="relative pt-32 pb-20 overflow-hidden bg-secondary">
    <div class="container relative z-10 px-4 max-w-5xl mx-auto text-center">
        <h1
            class="text-4xl md:text-5xl lg:text-6xl font-heading text-black mb-8 leading-tight"
        >
            Psicóloga para Mulheres em Higienópolis:<br />
            <span class="text-primary-dark italic text-3xl md:text-4xl"
                >Acolhimento e Escuta Especializada</span
            >
        </h1>

        <div
            class="bg-white/80 backdrop-blur border border-border-light p-8 md:p-10 rounded-3xl shadow-sm text-center mx-auto mb-10 text-lg text-gray-800 leading-relaxed"
        >
            <p class="font-medium">
                O consultório de psicologia de Danielle Gurgel (CRP 06/148054),
                localizado na Av. Angélica em Higienópolis, é um espaço seguro e
                exclusivo dedicado à saúde mental de mulheres. Por meio da
                Abordagem Centrada na Pessoa, oferecemos psicoterapia focada em
                ansiedade, sobrecarga emocional de executivas e mães, e
                transições de vida e carreira em São Paulo.
            </p>
        </div>

        <a
            href="https://wa.me/5511932037191?text=Ola!%20Tenho%20interesse%20na%20Psicoterapia%20para%20Mulheres%20em%20Higienopolis"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-lg bg-primary text-white shadow-hover hover:-translate-y-1"
        >
            Agendar Uma Primeira Conversa
        </a>
    </div>
</section>

<!-- REALIDADE FEMININA (Rapport Clínico & Hub & Spoke Logic) -->
<section class="py-24 bg-white">
    <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-16 max-w-3xl mx-auto">
            <h2
                class="text-3xl md:text-4xl font-heading text-primary-dark mb-6"
            >
                Compreensão Profunda para a Realidade Feminina Contemporânea
            </h2>
            <p class="text-lg text-gray-600">
                A mulher paulistana vive pressões únicas. Liderança corporativa,
                dupla jornada, maternidade idealizada e transições inevitáveis.
                A terapia não deve ser mais uma obrigação, mas sim o seu porto
                seguro de descompressão.
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
            <div
                class="bg-secondary p-8 rounded-3xl border border-transparent hover:border-primary/20 transition-all flex flex-col h-full"
            >
                <h3 class="text-xl font-heading text-black mb-4">
                    Ansiedade e Burnout em Carreiras Intensas
                </h3>
                <p class="text-gray-700 mb-6 flex-grow">
                    Apoio a profissionais liberais e executivas lidando com
                    metas agressivas e esgotamento oculto no mercado de
                    trabalho.
                </p>
                <a
                    href="/experiencia/burnout-feminino"
                    class="text-primary font-medium hover:text-primary-dark transition-colors inline-block mt-auto"
                    >&rarr; Entender sobre Burnout</a
                >
            </div>

            <div
                class="bg-secondary p-8 rounded-3xl border border-transparent hover:border-primary/20 transition-all flex flex-col h-full"
            >
                <h3 class="text-xl font-heading text-black mb-4">
                    Sobrecarga Emocional e Relações Familiares
                </h3>
                <p class="text-gray-700 mb-6 flex-grow">
                    Identificação de dinâmicas afetivas desgastantes, a síndrome
                    da impostora e o peso imposto pela maternidade não
                    romantizada.
                </p>
                <a
                    href="/experiencia/relacionamentos-familiares"
                    class="text-primary font-medium hover:text-primary-dark transition-colors inline-block mt-auto"
                    >&rarr; Sobre Dinâmicas Familiares</a
                >
            </div>

            <div
                class="bg-secondary p-8 rounded-3xl border border-transparent hover:border-primary/20 transition-all flex flex-col h-full"
            >
                <h3 class="text-xl font-heading text-black mb-4">
                    Apoio em Trasições e Ciclos da Vida
                </h3>
                <p class="text-gray-700 mb-6 flex-grow">
                    Acompanhamento terapêutico dedicado à transição de carreira,
                    crises conjugais ou o re-encontro individual na síndrome do
                    ninho vazio.
                </p>
                <a
                    href="/artigos"
                    class="text-primary font-medium hover:text-primary-dark transition-colors inline-block mt-auto"
                    >&rarr; Ver Artigos sobre o Tema</a
                >
            </div>
        </div>
    </div>
</section>

<!-- LOCALIZAÇÃO / GEO SEO -->
<section class="py-24 bg-secondary">
    <div class="container mx-auto px-4 max-w-5xl">
        <div class="flex flex-col md:flex-row gap-12 items-center">
            <div class="w-full md:w-1/2">
                <picture>
                    <img
                        src="/images/consultorio-psicologia-higienopolis-sp-01-800w.webp"
                        alt="Consultório da Psicóloga Danielle Gurgel na Av Angélica em Higienópolis"
                        loading="lazy"
                        decoding="async"
                        class="w-full h-auto rounded-[2rem] shadow-lg object-cover"
                    />
                </picture>
            </div>
            <div class="w-full md:w-1/2">
                <h2 class="text-3xl font-heading text-black mb-6">
                    Por que escolher o Consultório na Av. Angélica?
                </h2>
                <p class="text-gray-700 mb-6 leading-relaxed">
                    Localizado no número 1996 da Avenida Angélica, o consultório
                    se integra à estrutura residencial e profissional do bairro.
                    O formato presencial foi desenhado especificamente para
                    exigir um tempo que as pacientes usem apenas para si mesmas.
                </p>
                <p class="text-gray-700 leading-relaxed">
                    A logística é favorecida pela proximidade com o Shopping
                    Pátio Higienópolis, a Universidade Mackenzie, e com fácil
                    deslocamento das vias que integram o bairro de Santa
                    Cecília, Pacaembu e Consolação.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- FAQ SECTION (AEO Bait) -->
<section class="py-24 bg-white">
    <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="text-3xl font-heading mb-12 text-center text-primary-dark">
            Perguntas Frequentes sobre Psicoterapia Feminina
        </h2>

        <div class="space-y-4 text-left">
            <!-- Item 1 -->
            <details
                class="group bg-secondary-light rounded-2xl border border-transparent open:border-primary/20 transition-all"
            >
                <summary
                    class="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-xl text-gray-900 font-heading"
                >
                    Como a terapia ajuda na síndrome de burnout feminino?
                    <span class="transition group-open:rotate-180">
                        <svg
                            fill="none"
                            height="24"
                            shape-rendering="geometricPrecision"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="24"><path d="M6 9l6 6 6-6"></path></svg
                        >
                    </span>
                </summary>
                <p class="text-gray-700 p-6 pt-0 leading-relaxed">
                    A psicoterapia foca em organizar a sobrecarga emocional e
                    mental, fornecendo clareza e autorização para a paciente
                    desconstruir o ciclo de exaustão corporativa sem abandonar
                    sua carreira, estabelecendo limites saudáveis.
                </p>
            </details>

            <!-- Item 2 -->
            <details
                class="group bg-secondary-light rounded-2xl border border-transparent open:border-primary/20 transition-all"
            >
                <summary
                    class="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-xl text-gray-900 font-heading"
                >
                    O consultório presencial em Higienópolis é seguro e
                    discreto?
                    <span class="transition group-open:rotate-180">
                        <svg
                            fill="none"
                            height="24"
                            shape-rendering="geometricPrecision"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="24"><path d="M6 9l6 6 6-6"></path></svg
                        >
                    </span>
                </summary>
                <p class="text-gray-700 p-6 pt-0 leading-relaxed">
                    Sim. O consultório na Av. Angélica foi estruturado pensado
                    exatamente para entregar o sigilo absoluto exigido nas
                    sessões e contar com acesso logístico discreto, fundamental
                    para profissionais públicas ou empresárias.
                </p>
            </details>

            <!-- Item 3 -->
            <details
                class="group bg-secondary-light rounded-2xl border border-transparent open:border-primary/20 transition-all"
            >
                <summary
                    class="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-xl text-gray-900 font-heading"
                >
                    A psicologia funciona para conflitos nas relações
                    familiares?
                    <span class="transition group-open:rotate-180">
                        <svg
                            fill="none"
                            height="24"
                            shape-rendering="geometricPrecision"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="24"><path d="M6 9l6 6 6-6"></path></svg
                        >
                    </span>
                </summary>
                <p class="text-gray-700 p-6 pt-0 leading-relaxed">
                    Através da Abordagem Centrada na Pessoa, trabalhamos o
                    autoconhecimento da mulher. Quando os limites individuais se
                    clarificam, a capacidade de contornar ou resolver tensões
                    familiares—incluindo cobranças irreais da
                    maternidade—torna-se substancialmente mais forte.
                </p>
            </details>
        </div>
    </div>
</section>
