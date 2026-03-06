<script lang="ts">
    import { Button } from "$lib";
    import { Phone, Calendar, Clock, Search, ArrowRight } from "lucide-svelte";
    import { blogPosts, categories, filterPosts } from "$lib/data/blog";

    let searchTerm = $state("");
    let selectedCategory = $state("todos");

    let filteredPosts = $derived(
        filterPosts(blogPosts, selectedCategory, searchTerm),
    );

    const SITE_URL = "https://psicologadaniellegurgel.com.br";

    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Artigos — Psicóloga Danielle Gurgel",
        description:
            "Reflexões sobre psicoterapia, autoconhecimento e saúde mental por Danielle Gurgel",
        url: `${SITE_URL}/artigos/`,
        author: {
            "@type": "Person",
            name: "Danielle Gurgel da Fonseca",
            jobTitle: "Psicóloga",
        },
    };
</script>

<svelte:head>
    <title>Artigos | Psicóloga Danielle Gurgel</title>
    <meta
        name="description"
        content="Artigos sobre psicoterapia, autoconhecimento e saúde mental por Danielle Gurgel, psicóloga em Higienópolis, São Paulo — CRP/SP 06/148054."
    />
    <link rel="canonical" href="{SITE_URL}/artigos/" />
    {@html `<script type="application/ld+json">${JSON.stringify(blogSchema)}</script>`}
</svelte:head>

<nav class="breadcrumb" aria-label="Navegação estrutural">
    <ol class="container">
        <li><a href="/">Início</a></li>
        <li aria-current="page">Artigos</li>
    </ol>
</nav>

<section class="blog-hero">
    <div class="container">
        <h1>Artigos</h1>
        <p>Reflexões sobre psicoterapia, autoconhecimento e saúde mental</p>
    </div>
</section>

<section class="section bg-white">
    <div class="container">
        <div class="blog-controls">
            <div class="search-wrapper">
                <Search size={18} />
                <input
                    type="text"
                    placeholder="Buscar artigos..."
                    class="search-input"
                    bind:value={searchTerm}
                />
            </div>
            <select class="filter-select" bind:value={selectedCategory}>
                {#each categories as cat}
                    <option value={cat.id}>{cat.label}</option>
                {/each}
            </select>
        </div>

        <div class="blog-grid">
            {#if filteredPosts.length === 0}
                <div class="no-results">
                    <p>Nenhum artigo encontrado.</p>
                </div>
            {:else}
                {#each filteredPosts as post}
                    <a
                        href="/{post.categorySlug}/{post.slug}"
                        class="blog-card"
                    >
                        <div class="blog-image">
                            <img
                                src={post.image}
                                alt={post.altText || post.title}
                                loading="lazy"
                                width="350"
                                height="233"
                            />
                            <div class="blog-category">{post.category}</div>
                        </div>
                        <div class="blog-content">
                            <div class="blog-meta">
                                <span><Calendar size={14} /> {post.date}</span>
                                <span><Clock size={14} /> {post.readTime}</span>
                            </div>
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                            <span class="blog-link">
                                Ler mais <ArrowRight size={16} />
                            </span>
                        </div>
                    </a>
                {/each}
            {/if}
        </div>
    </div>
</section>

<section class="section gradient-cta">
    <div class="container">
        <div class="cta-content">
            <h2>Gostou do que leu?</h2>
            <p>Talvez seja um bom momento para conversar.</p>
            <Button
                href="https://wa.me/5511932037191?text=Olá,%20gostei%20do%20seu%20texto%20no%20blog%20e%20gostaria%20de%20conversar"
                variant="white"
                size="lg"
            >
                <Phone size={20} />
                Falar no WhatsApp
            </Button>
        </div>
    </div>
</section>

<style>
    .blog-hero {
        background: var(--secondary-color);
        padding: calc(var(--header-height) + 3rem) 0 3rem;
        text-align: center;
    }
    .blog-hero p {
        color: var(--text-light);
        font-size: var(--text-lg);
        margin-top: 0.5rem;
    }
    .blog-controls {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
        flex-wrap: wrap;
    }
    .search-wrapper {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1;
        min-width: 200px;
        background: var(--secondary-light);
        border-radius: var(--radius-sm);
        padding: 0.5rem 1rem;
    }
    .search-wrapper :global(svg) {
        color: var(--text-lighter);
    }
    .search-input {
        border: none;
        background: none;
        flex: 1;
        font-size: var(--text-base);
        outline: none;
    }
    .filter-select {
        padding: 0.5rem 1rem;
        border: 1px solid var(--border-light);
        border-radius: var(--radius-sm);
        font-size: var(--text-sm);
        background: var(--white);
    }
    .blog-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
    .blog-card {
        text-decoration: none;
        color: inherit;
        background: var(--secondary-light);
        border-radius: var(--radius-md);
        overflow: hidden;
        transition: var(--transition);
        border: 1px solid var(--border-light);
    }
    .blog-card:hover {
        transform: scale(1.02);
        box-shadow: var(--shadow-hover);
        color: inherit;
    }
    .blog-image {
        position: relative;
        overflow: hidden;
    }
    .blog-image img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    .blog-category {
        position: absolute;
        top: 0.75rem;
        left: 0.75rem;
        background: var(--primary-color);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: var(--radius-full);
        font-size: var(--text-xs);
        font-weight: 600;
    }
    .blog-content {
        padding: 1.25rem;
    }
    .blog-meta {
        display: flex;
        gap: 1rem;
        color: var(--text-lighter);
        font-size: var(--text-xs);
        margin-bottom: 0.5rem;
    }
    .blog-meta span {
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }
    .blog-content h2 {
        font-size: var(--text-lg);
        margin-bottom: 0.5rem;
        line-height: 1.4;
    }
    .blog-content p {
        color: var(--text-light);
        font-size: var(--text-sm);
        line-height: 1.6;
        margin-bottom: 0.75rem;
    }
    .blog-link {
        color: var(--primary-color);
        font-weight: 600;
        font-size: var(--text-sm);
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }
    .no-results {
        text-align: center;
        padding: 3rem;
        color: var(--text-lighter);
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
    @media (max-width: 768px) {
        .blog-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
