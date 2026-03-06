<script lang="ts">
    import { Button } from "$lib";
    import {
        Heart,
        GraduationCap,
        Users,
        Shield,
        Sparkles,
    } from "lucide-svelte";

    const SITE_URL = "https://psicologadaniellegurgel.com.br";

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${SITE_URL}/sobre/#webpage`,
                url: `${SITE_URL}/sobre/`,
                name: "Sobre | Psicóloga Danielle Gurgel",
                description:
                    "Conheça Danielle Gurgel, psicóloga clínica em Higienópolis, São Paulo. Formada pela UFES, especialista na Abordagem Centrada na Pessoa.",
                inLanguage: "pt-BR",
                isPartOf: { "@id": `${SITE_URL}/#website` },
            },
            {
                "@type": "Person",
                "@id": `${SITE_URL}/#person`,
                name: "Danielle Gurgel da Fonseca",
                alternateName: "Danielle Gurgel",
                identifier: "CRP/SP 06/148054",
                jobTitle: "Psicóloga Clínica",
                alumniOf: {
                    "@type": "CollegeOrUniversity",
                    name: "Universidade Federal do Espírito Santo",
                    alternateName: "UFES",
                },
                knowsAbout: [
                    "Abordagem Centrada na Pessoa",
                    "Psicoterapia Humanista",
                    "Psicologia Clínica",
                    "Terapia Online",
                    "Terapia de Casal",
                ],
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "Av. Angélica, 1996 - Sala 501",
                    addressLocality: "São Paulo",
                    addressRegion: "SP",
                    postalCode: "01228-200",
                    addressCountry: "BR",
                },
                sameAs: ["https://www.psicologadaniellegurgel.com"],
            },
        ],
    };
</script>

<svelte:head>
    <title>Sobre | Psicóloga Danielle Gurgel</title>
    <meta
        name="description"
        content="Conheça Danielle Gurgel, psicóloga clínica em Higienópolis, São Paulo. Formada pela UFES, com atuação na Abordagem Centrada na Pessoa. CRP/SP 06/148054."
    />
    <link rel="canonical" href="{SITE_URL}/sobre/" />
    {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<nav class="breadcrumb" aria-label="Navegação estrutural">
    <ol class="container">
        <li><a href="/">Início</a></li>
        <li aria-current="page">Sobre</li>
    </ol>
</nav>

<section class="section bg-white">
    <div class="container about-hero">
        <div class="about-hero-image">
            <img
                src="/images/sobre/sobre-consultorio.avif"
                alt="Psicóloga Danielle Gurgel em seu consultório em Higienópolis"
                width="450"
                height="500"
                fetchpriority="high"
            />
        </div>
        <div class="about-hero-content">
            <h1>Danielle Gurgel da Fonseca</h1>
            <p class="about-title">Psicóloga Clínica · CRP/SP 06/148054</p>
            <p>
                Sou psicóloga formada pela Universidade Federal do Espírito
                Santo (UFES), com atuação clínica dedicada ao aprimoramento
                contínuo. Para garantir um atendimento de excelência, participo
                de cursos e grupos de estudo, mantendo-me atualizada nas
                melhores práticas da psicoterapia.
            </p>
            <p>
                Meu nome é Danielle Gurgel da Fonseca — psicóloga em
                Higienópolis (São Paulo) especializada em Psicoterapia Humanista
                e Abordagem Centrada na Pessoa. Ofereço um atendimento
                psicológico acolhedor, empático e confidencial, focado no seu
                bem-estar emocional, autoconhecimento e crescimento pessoal.
            </p>
        </div>
    </div>
</section>

<section class="section bg-secondary">
    <div class="container">
        <h2>A Abordagem Centrada na Pessoa</h2>
        <div class="approach-content">
            <p>
                Na Abordagem Centrada na Pessoa, influenciada por Carl Rogers,
                acreditamos que todos os seres humanos possuem uma <strong
                    >Tendência Atualizante</strong
                > — uma capacidade inerente de buscar o que é melhor para si.
            </p>
            <p>
                Costumo dizer que sou uma <strong
                    >jardineira, não uma paisagista</strong
                >. Meu papel não é enquadrar a pessoa em um padrão socialmente
                aceito ou atender às expectativas de família, amigos ou
                sociedade. Em vez disso, desejo proporcionar um ambiente que
                facilite — um solo fértil — para que cada pessoa possa refletir
                e se fortalecer, ampliando suas possibilidades de escolha e
                ação.
            </p>
            <p>
                Como jardineira, meu papel é nutrir, apoiar e criar condições
                propícias para o crescimento natural e único de cada indivíduo.
                Cada pessoa é uma planta única, com suas próprias
                características e necessidades, e meu trabalho é ajudá-las a
                florescer de acordo com seu próprio ritmo e potencial.
            </p>
        </div>
    </div>
</section>

<section class="section bg-white">
    <div class="container">
        <h2>Princípios do meu trabalho</h2>
        <div class="principles-grid">
            <div class="principle-card">
                <Heart size={28} />
                <h3>Empatia e presença terapêutica</h3>
                <p>
                    Escuta genuína e sem julgamentos, com atenção plena ao que
                    você traz para a sessão.
                </p>
            </div>
            <div class="principle-card">
                <Shield size={28} />
                <h3>Ambiente acolhedor e ético</h3>
                <p>
                    Um espaço seguro onde você pode ser exatamente quem é, com
                    sigilo e respeito.
                </p>
            </div>
            <div class="principle-card">
                <Sparkles size={28} />
                <h3>Respeito pela sua individualidade</h3>
                <p>
                    Cada pessoa é única. O processo terapêutico segue o seu
                    ritmo e as suas necessidades.
                </p>
            </div>
            <div class="principle-card">
                <Users size={28} />
                <h3>Inclusividade</h3>
                <p>
                    Espaço seguro e acolhedor para todas as pessoas, incluindo a
                    comunidade LGBTQIA+.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="section bg-secondary">
    <div class="container">
        <h2>Formação e Aprimoramento</h2>
        <div class="formation-list">
            <div class="formation-item">
                <GraduationCap size={24} />
                <div>
                    <h3>Graduação em Psicologia</h3>
                    <p>Universidade Federal do Espírito Santo (UFES)</p>
                </div>
            </div>
            <div class="formation-item">
                <GraduationCap size={24} />
                <div>
                    <h3>Aprimoramento Contínuo</h3>
                    <p>
                        Cursos e grupos de estudo em Abordagem Centrada na
                        Pessoa e Psicoterapia Humanista
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section bg-white">
    <div class="container">
        <h2>Benefícios da psicoterapia</h2>
        <div class="benefits-grid">
            <div class="benefit-item">
                <p>Escuta genuína e sem julgamentos</p>
            </div>
            <div class="benefit-item">
                <p>Autenticidade e respeito por sua singularidade</p>
            </div>
            <div class="benefit-item">
                <p>Maior consciência de seus sentimentos e escolhas</p>
            </div>
            <div class="benefit-item">
                <p>Fortalecimento da autoestima e bem-estar emocional</p>
            </div>
            <div class="benefit-item">
                <p>Melhor compreensão de relações interpessoais</p>
            </div>
            <div class="benefit-item">
                <p>Apoio em fases de transição pessoal ou profissional</p>
            </div>
        </div>
    </div>
</section>

<section class="section gradient-cta">
    <div class="container">
        <div class="cta-content">
            <h2>Vamos caminhar juntos?</h2>
            <p>
                Se você busca uma terapia que respeita sua história e coloca
                você como protagonista da sua própria jornada, estou aqui para
                acompanhar você.
            </p>
            <Button
                href="https://wa.me/5511932037191?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta."
                variant="white"
                size="lg">Agendar Consulta</Button
            >
        </div>
    </div>
</section>

<style>
    .about-hero {
        display: flex;
        align-items: center;
        gap: 4rem;
    }

    .about-hero-image {
        flex: 0 0 35%;
    }

    .about-hero-image img {
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-lg);
        width: 100%;
    }

    .about-hero-content {
        flex: 1;
    }

    .about-title {
        color: var(--primary-color);
        font-weight: 600;
        margin-bottom: 1.5rem;
    }

    .about-hero-content p {
        color: var(--text-light);
        line-height: 1.8;
        margin-bottom: 1rem;
    }

    .section h2 {
        margin-bottom: 1.5rem;
    }

    .approach-content p {
        color: var(--text-light);
        line-height: 1.8;
        margin-bottom: 1rem;
        max-width: 800px;
    }

    .principles-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }

    .principle-card {
        padding: 1.5rem;
        background: var(--secondary-light);
        border-radius: var(--radius-md);
        border-left: 4px solid var(--primary-color);
    }

    .principle-card :global(svg) {
        color: var(--primary-color);
        margin-bottom: 0.75rem;
    }

    .principle-card h3 {
        font-size: var(--text-base);
        margin-bottom: 0.5rem;
    }

    .principle-card p {
        color: var(--text-light);
        font-size: var(--text-sm);
        line-height: 1.7;
    }

    .formation-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .formation-item {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        padding: 1rem;
        background: var(--white);
        border-radius: var(--radius-md);
    }

    .formation-item :global(svg) {
        color: var(--primary-color);
        flex-shrink: 0;
        margin-top: 0.25rem;
    }

    .formation-item h3 {
        font-size: var(--text-base);
        margin-bottom: 0.25rem;
    }

    .formation-item p {
        color: var(--text-light);
        font-size: var(--text-sm);
    }

    .benefits-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

    .benefit-item {
        padding: 1.25rem;
        background: var(--secondary-light);
        border-radius: var(--radius-sm);
        text-align: center;
    }

    .benefit-item p {
        color: var(--text-light);
        font-size: var(--text-sm);
    }

    .cta-content {
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
    }

    .cta-content h2 {
        color: var(--white);
    }

    .cta-content p {
        color: rgba(255, 255, 255, 0.9);
        font-size: var(--text-lg);
        margin-bottom: 2rem;
        line-height: 1.8;
    }

    @media (max-width: 768px) {
        .about-hero {
            flex-direction: column;
        }

        .about-hero-image {
            flex: none;
            max-width: 300px;
        }

        .principles-grid {
            grid-template-columns: 1fr;
        }

        .benefits-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
