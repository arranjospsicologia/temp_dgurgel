// blogContent.ts — Article HTML content for Danielle Gurgel's blog
// Each key is the slug, and the value is the HTML content.

export const postContents: Record<string, string> = {
	"jardineira-nao-paisagista": `
<p>Costumo dizer que sou uma <strong>jardineira, não uma paisagista</strong>.</p>

<p>A diferença? Uma paisagista projeta, define cores, formas e posições. Ela decide onde cada planta vai ficar e como o jardim deve parecer. É bonito, mas é um padrão imposto de fora.</p>

<p>Uma jardineira faz diferente. Ela observa o solo, entende as condições do terreno, respeita as estações. Seu trabalho é criar condições para que cada planta cresça <strong>ao seu ritmo e à sua maneira</strong>.</p>

<h2>O que isso tem a ver com terapia?</h2>

<p>Na <strong>Abordagem Centrada na Pessoa</strong>, desenvolvida por Carl Rogers, o terapeuta não é um especialista que sabe o que é melhor para você. Não tenho respostas prontas, não faço diagnósticos definitivos e não digo para onde você deve ir.</p>

<p>Meu papel é estar presente. É escutar com atenção genuína. É criar um ambiente tão seguro que você possa se mostrar — com suas dúvidas, suas contradições, suas dores — sem medo de ser julgada.</p>

<p>Rogers acreditava que todos os seres humanos possuem uma <strong>Tendência Atualizante</strong> — uma capacidade inerente de buscar o que é melhor para si. Quando encontramos um ambiente acolhedor, essa tendência se fortalece.</p>

<h2>Não é meu papel te enquadrar</h2>

<p>Não desejo enquadrar ninguém em um padrão socialmente aceito. Não atendo às expectativas de família, amigos ou sociedade. O que me move é proporcionar um <strong>solo fértil</strong> para que cada pessoa possa refletir e se fortalecer, ampliando suas possibilidades de escolha e ação.</p>

<p>Cada pessoa é uma planta única, com suas próprias características e necessidades. Algumas precisam de mais sol, outras de mais sombra. Algumas crescem rápido, outras precisam de tempo. E todas são válidas.</p>

<h2>O ritmo é seu</h2>

<p>Na terapia, não existe pressa. Não existe uma meta de "ficar bem" em X sessões. O que existe é um espaço — e um tempo — para que você possa ser exatamente quem é.</p>

<p>Se isso ressoou em você, talvez seja um bom momento para considerar esse cuidado. Estou em Higienópolis, São Paulo, e também atendo online.</p>
`,

	"o-que-esperar-da-terapia": `
<p>Se você nunca fez terapia — ou se já fez, mas ficou com a sensação de que "não funcionou" — é natural ter dúvidas. O que acontece na primeira sessão? Quanto tempo demora? Preciso chorar? Preciso ter um problema grave?</p>

<p>A verdade é que não existe um jeito certo de fazer terapia. Mas existem algumas coisas que você pode esperar quando decide começar.</p>

<h2>A primeira sessão</h2>

<p>A primeira sessão é, antes de tudo, um <strong>encontro</strong>. É o momento em que nos conhecemos. Você pode contar um pouco sobre o que te trouxe à terapia, suas expectativas, suas dúvidas.</p>

<p>Não é necessário chegar com tudo organizado ou com um "diagnóstico" pronto. Muitas pessoas chegam sem saber exatamente o que querem dizer — e isso é completamente normal.</p>

<p>O simples fato de estar ali já é um passo importante.</p>

<h2>As sessões seguintes</h2>

<p>Na <strong>Abordagem Centrada na Pessoa</strong>, as sessões não seguem um roteiro pré-definido. O ritmo e os temas são conduzidos por você, conforme suas necessidades.</p>

<p>As sessões duram 50 minutos e geralmente acontecem uma vez por semana. A regularidade é importante, mas a vida real é flexível — e a terapia também precisa ser.</p>

<h2>O que NÃO esperar</h2>

<ul>
<li><strong>Conselhos prontos</strong> — Meu papel não é dizer o que você deve fazer, mas ajudar você a encontrar suas próprias respostas.</li>
<li><strong>Diagnósticos rígidos</strong> — Na ACP, entendemos que rótulos nem sempre capturam a complexidade do que uma pessoa vive.</li>
<li><strong>Resultados imediatos</strong> — A terapia é um processo. Algumas mudanças são sutis e vão se revelando com o tempo.</li>
</ul>

<h2>O que esperar</h2>

<ul>
<li><strong>Escuta genuína</strong> — Sem julgamentos, sem pressa, sem interrupções desnecessárias.</li>
<li><strong>Acolhimento</strong> — Um espaço seguro para ser exatamente quem você é.</li>
<li><strong>Respeito ao seu ritmo</strong> — Cada pessoa tem seu tempo, e isso é respeitado.</li>
<li><strong>Sigilo absoluto</strong> — Tudo o que é compartilhado na sessão é confidencial.</li>
</ul>

<h2>Quando buscar terapia</h2>

<p>Não é necessário estar em crise para fazer terapia. Se você sente que algo não vai bem, que há um desconforto persistente, que quer se conhecer melhor ou simplesmente ter um espaço para si — a terapia pode ser um caminho.</p>

<p>Se isso faz sentido para você, estou em Higienópolis (São Paulo) e também atendo online. O primeiro passo pode ser uma simples mensagem.</p>
`,
};

export function getPostContent(slug: string): string | undefined {
	return postContents[slug];
}
