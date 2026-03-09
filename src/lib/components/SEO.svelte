<script lang="ts">
    import { page } from "$app/stores";

    export let title =
        "Psicóloga Danielle Gurgel | Psicoterapia em Higienópolis";
    export let description =
        "Consultório de psicologia na Av. Angélica, focado na saúde mental feminina. Psicoterapia para ansiedade, burnout e relacionamentos com a psicóloga Danielle Gurgel.";
    export let image =
        "/images/psicologa-danielle-gurgel-higienopolis-sp-1200w.webp";
    export let type = "website";
    export let author = "Danielle Gurgel";
    export let datePublished = "";

    // Custom JSON-LD schemas passed from specific pages
    export let schemas: any[] = [];

    const siteUrl = "https://psicologadaniellegurgel.com";
    $: currentUrl = `${siteUrl}${$page.url.pathname}`;

    // Base LocalBusiness Schema (Constant for GEO SEO)
    const baseLocalBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "MedicalClinic"],
        name: "Consultório de Psicologia Danielle Gurgel",
        image: `${siteUrl}/images/psicologa-danielle-gurgel-higienopolis-sp-1200w.webp`,
        "@id": `${siteUrl}/#clinic`,
        url: siteUrl,
        telephone: "+5511932037191",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Angélica, 1996",
            addressLocality: "São Paulo",
            addressRegion: "SP",
            postalCode: "01228-200",
            addressCountry: "BR",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: -23.5497347,
            longitude: -46.66001,
        },
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "20:00",
        },
        areaServed: "Higienópolis, São Paulo",
        medicalSpecialty: "Psychiatric",
    };

    // Base ProfilePage / Person Schema (EEAT)
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${siteUrl}/sobre#danielle`,
        name: "Danielle Gurgel",
        jobTitle: "Psicóloga Clínica",
        identifier: {
            "@type": "PropertyValue",
            propertyID: "CRP",
            value: "06/148054",
        },
        url: `${siteUrl}/sobre`,
        alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Universidade Federal do Espírito Santo (UFES)",
        },
    };

    $: jsonLdSchemas = [baseLocalBusinessSchema, personSchema, ...schemas];
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={currentUrl} />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content={type} />
    <meta property="og:url" content={currentUrl} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={`${siteUrl}${image}`} />
    <meta property="og:locale" content="pt_BR" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={currentUrl} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={`${siteUrl}${image}`} />

    {#if type === "article"}
        <meta property="article:author" content={author} />
        {#if datePublished}
            <meta property="article:published_time" content={datePublished} />
        {/if}
    {/if}

    <!-- JSON-LD Scripts for AEO / Rich Snippets -->
    {#each jsonLdSchemas as schema}
        <script type="application/ld+json">
      {@html JSON.stringify(schema)}
        </script>
    {/each}
</svelte:head>
