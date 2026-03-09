<script lang="ts">
	import { base } from '$app/paths';
	import { page } from "$app/stores";
    import { onMount } from "svelte";

    let isScrolled = false;
    let isMenuOpen = false;

    onMount(() => {
        const handleScroll = () => {
            isScrolled = window.scrollY > 20;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    const links = [
        { href: "/", label: "Início" },
        { href: "/sobre", label: "Sobre a Psicóloga" },
        { href: "/servicos/psicoterapia-individual", label: "Psicoterapia" },
        {
            href: "/psicologa-mulheres-higienopolis",
            label: "Psicologia para Mulheres",
        },
        { href: "/artigos", label: "Artigos" },
    ];
</script>

<header
    class="fixed w-full z-50 transition-all duration-300 {isScrolled
        ? 'bg-secondary-light/95 backdrop-blur-md shadow-sm py-3'
        : 'bg-transparent py-5'}"
>
    <div
        class="container mx-auto px-4 md:px-6 flex justify-between items-center max-w-7xl"
    >
        <!-- Logo -->
        <a
            href="{base}/"
            class="flex items-center gap-3 z-50"
            aria-label="Página Inicial do Consultório Danielle Gurgel"
        >
            <img
                src="{base}/images/logo.avif"
                alt="Logo Danielle Gurgel"
                width="45"
                height="45"
                class="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <div class="flex flex-col">
                <span
                    class="font-heading font-medium text-lg md:text-xl text-primary-dark tracking-wide leading-tight"
                    >Danielle Gurgel</span
                >
                <span
                    class="font-sans text-xs text-secondary-dark tracking-widest uppercase mt-0.5"
                    >Psicóloga Clínica</span
                >
            </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8">
            <ul class="flex gap-6 items-center m-0 p-0 list-none">
                {#each links as { href, label }}
                    <li>
                        <a
                            {href}
                            class="text-sm font-medium tracking-wide transition-colors duration-200
                {$page.url.pathname === href
                                ? 'text-primary-dark font-bold'
                                : 'text-gray-600 hover:text-primary'}"
                        >
                            {label}
                        </a>
                    </li>
                {/each}
            </ul>

            <a
                href="https://wa.me/5511932037191?text=Olá!%20Gostaria%20de%20agendar%20uma%20primeira%20sessão."
                target="_blank"
                rel="noopener noreferrer"
                class="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md"
            >
                Agendar Consulta
            </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button
            class="lg:hidden z-50 p-2 text-primary-dark"
            on:click={toggleMenu}
            aria-label="Alternar menu de navegação"
            aria-expanded={isMenuOpen}
        >
            <div class="w-6 flex flex-col items-end gap-1.5">
                <span
                    class="block h-0.5 bg-current transition-all duration-300 w-full {isMenuOpen
                        ? 'rotate-45 translate-y-2'
                        : ''}"
                ></span>
                <span
                    class="block h-0.5 bg-current transition-all duration-300 {isMenuOpen
                        ? 'opacity-0 w-full'
                        : 'w-4/5'}"
                ></span>
                <span
                    class="block h-0.5 bg-current transition-all duration-300 w-full {isMenuOpen
                        ? '-rotate-45 -translate-y-2'
                        : ''}"
                ></span>
            </div>
        </button>

        <!-- Mobile Navigation Overlay -->
        {#if isMenuOpen}
            <div
                class="fixed inset-0 bg-secondary-light/98 backdrop-blur z-40 lg:hidden flex flex-col justify-center items-center h-screen w-full"
            >
                <nav
                    class="flex flex-col items-center gap-8 text-center px-4 w-full"
                >
                    <ul
                        class="flex flex-col gap-6 m-0 p-0 list-none text-xl w-full"
                    >
                        {#each links as { href, label }}
                            <li>
                                <a
                                    {href}
                                    class="font-heading font-medium transition-colors {$page
                                        .url.pathname === href
                                        ? 'text-primary-dark'
                                        : 'text-gray-800'}"
                                    on:click={() => (isMenuOpen = false)}
                                >
                                    {label}
                                </a>
                            </li>
                        {/each}
                    </ul>

                    <div class="w-full max-w-xs mt-4">
                        <a
                            href="https://wa.me/5511932037191?text=Olá!%20Gostaria%20de%20agendar%20uma%20primeira%20sessão."
                            target="_blank"
                            rel="noopener noreferrer"
                            class="block w-full bg-primary-dark text-white items-center justify-center text-center px-6 py-4 rounded-full font-medium shadow-md"
                            on:click={() => (isMenuOpen = false)}
                        >
                            Agendar Pelo WhatsApp
                        </a>
                    </div>
                </nav>
            </div>
        {/if}
    </div>
</header>

<!-- Spacer to prevent content overlapping with fixed header -->
<div class="h-20 md:h-24 w-full bg-transparent"></div>
