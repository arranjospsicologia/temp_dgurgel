<script lang="ts">
	import { base } from '$app/paths';
	const currentYear = new Date().getFullYear();
</script>

<footer
    class="bg-secondary text-gray-800 pt-16 pb-8 border-t border-border-light relative overflow-hidden"
>
    <div class="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12"
        >
            <!-- Brand & About -->
            <div class="col-span-1 md:col-span-2 lg:col-span-1">
                <div class="flex items-center gap-3 mb-6">
                    <img
                        src="{base}/images/logo.avif"
                        alt="Logo Danielle Gurgel"
                        width="40"
                        height="40"
                        class="w-10 h-10 object-contain"
                    />
                    <div class="flex flex-col">
                        <span
                            class="font-heading font-medium text-lg text-primary-dark"
                            >Danielle Gurgel</span
                        >
                        <span
                            class="font-sans text-xs text-secondary-dark tracking-widest uppercase"
                            >Psicóloga Clínica</span
                        >
                    </div>
                </div>
                <p class="text-sm text-gray-600 mb-6 leading-relaxed">
                    Psicoterapia pautada na Abordagem Centrada na Pessoa,
                    oferecendo escuta especializada, sigilo absoluto e um
                    ambiente seguro para o cuidado da saúde mental de mulheres
                    em São Paulo.
                </p>
                <p class="text-sm font-medium text-primary-dark">
                    CRP: 06/148054
                </p>
            </div>

            <!-- Quick Links -->
            <div>
                <h3 class="font-heading font-bold text-lg text-gray-900 mb-6">
                    Navegação
                </h3>
                <ul class="space-y-3 p-0 list-none">
                    <li>
                        <a
                            href="{base}/sobre"
                            class="text-sm text-gray-600 hover:text-primary transition-colors"
                            >Sobre a Psicóloga</a
                        >
                    </li>
                    <li>
                        <a
                            href="{base}/servicos/psicoterapia-individual"
                            class="text-sm text-gray-600 hover:text-primary transition-colors"
                            >Psicoterapia Individual</a
                        >
                    </li>
                    <li>
                        <a
                            href="{base}/psicologa-mulheres-higienopolis"
                            class="text-sm text-gray-600 hover:text-primary transition-colors"
                            >Psicóloga para Mulheres</a
                        >
                    </li>
                    <li>
                        <a
                            href="{base}/experiencia/ansiedade-e-stress"
                            class="text-sm text-gray-600 hover:text-primary transition-colors"
                            >Ansiedade e Burnout</a
                        >
                    </li>
                    <li>
                        <a
                            href="{base}/artigos"
                            class="text-sm text-gray-600 hover:text-primary transition-colors"
                            >Artigos</a
                        >
                    </li>
                </ul>
            </div>

            <!-- GEO SEO NAP (Name, Address, Phone) - Essential for AEO/Local Search -->
            <div class="col-span-1 md:col-span-2">
                <h3 class="font-heading font-bold text-lg text-gray-900 mb-6">
                    Consultório Higienópolis
                </h3>
                <address
                    class="not-italic flex flex-col gap-4 text-sm text-gray-600"
                >
                    <div class="flex gap-3">
                        <svg
                            class="w-5 h-5 text-primary shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            ></path><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path></svg
                        >
                        <div>
                            <p class="font-medium text-gray-900">
                                Endereço de Atendimento
                            </p>
                            <p>Av. Angélica, 1996 - Higienópolis</p>
                            <p>São Paulo - SP, 01228-200</p>
                            <a
                                href="{base}/localizacao/psicologia-higienopolis-sp"
                                class="text-primary hover:text-primary-dark underline block mt-1"
                                >Ver mapa completo</a
                            >
                        </div>
                    </div>

                    <div class="flex gap-3 mt-2">
                        <svg
                            class="w-5 h-5 text-primary shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            ></path></svg
                        >
                        <div>
                            <p class="font-medium text-gray-900">
                                Contato / WhatsApp
                            </p>
                            <a
                                href="https://wa.me/5511932037191"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="hover:text-primary transition-colors"
                            >
                                +55 (11) 93203-7191
                            </a>
                        </div>
                    </div>
                </address>
            </div>
        </div>

        <div
            class="pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4"
        >
            <p class="text-xs text-secondary-dark">
                &copy; {currentYear} Danielle Gurgel. Todos os direitos reservados.
            </p>
            <div class="flex gap-4">
                <a
                    href="{base}/"
                    class="text-xs text-secondary-dark hover:text-primary transition-colors"
                    >Aviso de Privacidade</a
                >
            </div>
        </div>
    </div>
</footer>
