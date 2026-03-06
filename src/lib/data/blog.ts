// Blog posts data
export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    category: string;
    categorySlug: string;
    tags: string[];
    date: string;
    readTime: string;
    image: string;
    altText?: string;
    schemaType?: "Article" | "BlogPosting";
    lastReviewed?: string;
}

export const categoryPages = [
    { slug: "acp", label: "Abordagem Centrada na Pessoa", description: "Artigos sobre a ACP, Carl Rogers e psicoterapia humanista" },
    { slug: "psicoterapia", label: "Psicoterapia", description: "Artigos sobre o processo terapêutico, modalidades e dúvidas comuns" },
];

export const blogPosts: BlogPost[] = [
    {
        slug: "jardineira-nao-paisagista",
        title: "Jardineira, não paisagista",
        description: "Na Abordagem Centrada na Pessoa, meu papel não é enquadrar você em um padrão ou molde. É criar condições para que você floresça ao seu ritmo, como uma jardineira que nutre o solo sem decidir para onde a planta cresce.",
        category: "Abordagem Centrada na Pessoa",
        categorySlug: "acp",
        tags: ["Abordagem Centrada na Pessoa", "Carl Rogers", "Autoconhecimento", "Higienópolis"],
        date: "06 Mar 2026",
        readTime: "5 min de leitura",
        image: "/images/sobre/sobre-lendo.avif",
        altText: "Psicóloga Danielle Gurgel lendo um livro, representando o cuidado e o estudo contínuo"
    },
    {
        slug: "o-que-esperar-da-terapia",
        title: "O que esperar da terapia",
        description: "Se você nunca fez terapia, pode ter muitas dúvidas. Este artigo explica o que acontece nas primeiras sessões, como funciona o processo terapêutico e por que não existe um jeito certo de fazer.",
        category: "Psicoterapia",
        categorySlug: "psicoterapia",
        tags: ["Psicoterapia", "Primeira Sessão", "ACP", "Higienópolis"],
        date: "06 Mar 2026",
        readTime: "6 min de leitura",
        image: "/images/consultorio/consultorio-1.avif",
        altText: "Consultório de psicologia em Higienópolis, São Paulo"
    },
];

export const categories = [
    { id: "todos", label: "Todos os artigos" },
    ...categoryPages.map(cat => ({ id: cat.slug, label: cat.label }))
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
    return blogPosts.filter(post => post.categorySlug === categorySlug);
}

export function getCategoryBySlug(slug: string) {
    return categoryPages.find(cat => cat.slug === slug);
}

export function filterPosts(posts: BlogPost[], category: string, search: string): BlogPost[] {
    return posts.filter(post => {
        const matchesCategory = category === "todos" || post.categorySlug === category;
        const matchesSearch = search === "" ||
            post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.description.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });
}
