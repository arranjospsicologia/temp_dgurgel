// src/lib/data/locations.ts
// Dados centrais das páginas de localização do consultório.

export interface LocationFaqItem {
    question: string;
    answer: string;
}

export interface LocationConfig {
    slug: string;
    name: string;
    preposition: string;
    title: string;
    description: string;
    canonical: string;
    h1: string;
    heroAlt: string;
    whatsappText: string;
    ctaH2: string;
    ctaSubtitle: string;
    aboutText: string;
    faqItems: LocationFaqItem[];
    faqSectionTitle: string;
    blogArticles: { slug: string; title: string; reason: string }[];
    neighborhoodGroups: { label: string; items: string[] }[];
    crossLinks: { href: string; label: string; description: string }[];
    editorialTitle: string;
    editorialSubtitle: string;
    practicalSection: {
        title: string;
        bodyHtml: string;
    };
    articlesSectionTitle: string;
    cardDescription: string;
}

const SITE_URL = "https://psicologadaniellegurgel.com.br";

export const locations: Record<string, LocationConfig> = {
    "higienopolis": {
        slug: "psicologa-higienopolis",
        name: "Higienópolis",
        preposition: "em",
        title: "Psicóloga em Higienópolis SP | Danielle Gurgel",
        description:
            "Psicóloga em Higienópolis, São Paulo. Consultório na Av. Angélica, 1996. Psicoterapia humanizada com Abordagem Centrada na Pessoa. Presencial e online.",
        canonical: `${SITE_URL}/localizacao/psicologa-higienopolis/`,
        h1: "Psicóloga em Higienópolis — Danielle Gurgel",
        heroAlt:
            "Consultório de Psicologia em Higienópolis — Av. Angélica, São Paulo",
        whatsappText:
            "Olá, moro em Higienópolis e gostaria de agendar uma consulta.",
        ctaH2: "No coração de Higienópolis, um espaço de escuta e acolhimento",
        ctaSubtitle:
            "Entre em contato e vamos conversar sobre como posso ajudar",
        aboutText:
            "Trabalho pela Abordagem Centrada na Pessoa — uma forma de escuta que cria espaço para você falar com liberdade, sem roteiros ou imposições. Aqui, você é protagonista do seu processo, e meu papel é estar presente enquanto você encontra suas próprias respostas.",
        editorialTitle: "Higienópolis: tradição, cultura e cuidado com quem se é",
        editorialSubtitle:
            "Num bairro que valoriza qualidade de vida, a terapia é mais um passo nessa direção",
        practicalSection: {
            title: "Como chegar ao consultório",
            bodyHtml: `<p>O consultório fica na <strong>Av. Angélica, 1996 - Sala 501</strong>, no coração de Higienópolis, com fácil acesso pelo Metrô (estações Higienópolis-Mackenzie e Consolação). Há estacionamento coberto no prédio.</p><p>Se preferir não se deslocar, também ofereço <a href="/servicos/terapia-online/">terapia online</a> com a mesma qualidade e presença terapêutica.</p>`,
        },
        faqSectionTitle: "Perguntas frequentes sobre o atendimento em Higienópolis",
        articlesSectionTitle: "Leitura recomendada",
        cardDescription: "Consultório na Av. Angélica, coração de Higienópolis",
        faqItems: [
            {
                question: "Onde fica exatamente o consultório?",
                answer: "Na Av. Angélica, 1996 - Sala 501, Higienópolis, São Paulo. O acesso é fácil pelo Metrô (linha 4-Amarela, estação Higienópolis-Mackenzie) ou de carro (estacionamento no prédio).",
            },
            {
                question: "Tem estacionamento?",
                answer: "Sim, o prédio possui estacionamento coberto com manobrista.",
            },
            {
                question: "Qual é o horário de atendimento?",
                answer: "De segunda a sexta, das 08h às 20h. O agendamento é feito pelo WhatsApp.",
            },
            {
                question: "Atende por convênio?",
                answer: "Os atendimentos são particulares. Posso emitir recibo para reembolso, caso seu plano de saúde ofereça essa opção.",
            },
            {
                question: "É possível fazer terapia online?",
                answer: "Sim. Atendo online por videochamada, com a mesma qualidade e presença do atendimento presencial.",
            },
            {
                question: "Qual abordagem é utilizada?",
                answer: "Trabalho com a Abordagem Centrada na Pessoa (ACP), com foco na escuta empática, autenticidade e respeito ao seu ritmo.",
            },
        ],
        blogArticles: [
            {
                slug: "jardineira-nao-paisagista",
                title: "Jardineira, não paisagista",
                reason: "Explica a filosofia de atendimento",
            },
            {
                slug: "o-que-esperar-da-terapia",
                title: "O que esperar da terapia",
                reason: "Informações para quem está começando",
            },
        ],
        neighborhoodGroups: [
            {
                label: "Região de Higienópolis",
                items: [
                    "Higienópolis",
                    "Consolação",
                    "Pacaembu",
                    "Santa Cecília",
                    "Vila Buarque",
                ],
            },
            {
                label: "Bairros próximos",
                items: [
                    "Perdizes",
                    "Pompeia",
                    "Jardins",
                    "Bela Vista",
                    "Cerqueira César",
                ],
            },
        ],
        crossLinks: [],
    },
};
