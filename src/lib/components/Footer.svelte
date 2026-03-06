<script lang="ts">
    import { MapPin, Phone, Mail, ExternalLink } from "lucide-svelte";
</script>

<footer class="footer">
    <div class="container footer-grid">
        <!-- Column 1: Logo & About -->
        <div class="footer-col">
            <a href="/" class="footer-logo">
                <img
                    src="/images/logo.avif"
                    alt="Psicóloga Danielle Gurgel"
                    width="150"
                    height="60"
                />
            </a>
            <p class="footer-about">
                Psicoterapia humanizada com base na Abordagem Centrada na
                Pessoa. Um espaço de acolhimento, escuta e autoconhecimento em
                Higienópolis, São Paulo.
            </p>
        </div>

        <!-- Column 2: Services -->
        <div class="footer-col">
            <h3 class="footer-title">Serviços</h3>
            <ul class="footer-list">
                <li class="footer-item">
                    <a href="/servicos/psicoterapia-individual/"
                        >Psicoterapia Individual</a
                    >
                </li>
                <li class="footer-item">
                    <a href="/servicos/terapia-online/">Terapia Online</a>
                </li>
                <li class="footer-item">
                    <a href="/servicos/terapia-de-casal/">Terapia de Casal</a>
                </li>
            </ul>
        </div>

        <!-- Column 3: Contact -->
        <div class="footer-col">
            <h3 class="footer-title">Contato</h3>
            <ul class="footer-list">
                <li class="footer-item">
                    <MapPin size={18} />
                    <span>
                        Av. Angélica, 1996 - Sala 501<br />
                        <a href="/localizacao/" class="address-link"
                            >Higienópolis, São Paulo - SP</a
                        >
                    </span>
                </li>
                <li class="footer-item">
                    <Phone size={18} />
                    <a href="tel:+5511932037191">(11) 93203-7191</a>
                </li>
                <li class="footer-item">
                    <Mail size={18} />
                    <a href="mailto:contato@psicologadaniellegurgel.com.br"
                        >contato@psicologadaniellegurgel.com.br</a
                    >
                </li>
            </ul>
        </div>

        <!-- Column 4: Professional Info -->
        <div class="footer-col">
            <h3 class="footer-title">Regulamentação</h3>

            <!-- CRP Number -->
            <p class="crp-text">
                <a
                    href="https://cadastro.cfp.org.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <strong>CRP/SP 06/148054</strong>
                </a>
            </p>

            <!-- Regulatory Links -->
            <div class="regulation-links">
                <a
                    href="https://www.crpsp.org.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="reg-link"
                >
                    Conselho Regional de Psicologia - 6ª Região (SP)
                </a>
                <a
                    href="https://site.cfp.org.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="reg-link"
                >
                    Conselho Federal de Psicologia
                </a>
                <a
                    href="https://site.cfp.org.br/wp-content/uploads/2012/07/codigo_etica.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="reg-link"
                >
                    Código de Ética <ExternalLink size={11} />
                </a>
                <a
                    href="https://site.cfp.org.br/wp-content/uploads/2018/05/RESOLU%C3%87%C3%83O-N%C2%BA-11-DE-11-DE-MAIO-DE-2018.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="reg-link"
                >
                    Resolução 11/2018 <ExternalLink size={11} />
                </a>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <div class="container footer-bottom-content">
            <p>
                &copy; {new Date().getFullYear()} Danielle Gurgel da Fonseca. Todos
                os direitos reservados.
            </p>
            <div class="legal-links">
                <a href="/politica-privacidade/">Privacidade</a>
                <span class="separator">•</span>
                <a href="/termos-uso/">Termos</a>
            </div>
        </div>
    </div>
</footer>
