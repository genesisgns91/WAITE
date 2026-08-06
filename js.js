//
// NESEE ARQUIVO JS.JS ESTÃO TODOS OS CÓDIGOS JAVA SCRIPT DOS ARQUIVOS HTML DO SITE/APP
// SÃO 4 HTMLS AO TODO
// PODE OCORRER DE TER FUNÇÕES COM O MESMO NOME DE UM HTML PARA OUTRO, MAS MESMO TENDO O MESMO NOME AS FUNÇÕES PODEM TER MECANISMOS DIFERENTES DE FUNCIONAMENTO. TOME MUITO CUIDADO COM ISSO. MANTENHA O MÁXIMO DE ANTENÇÃO.
// TODOS CODIGOS JS AQUI FORAM RETIRADOS EXATAMENTE COMO ESTAVAM NOS ARQUIVOS HTML. O PROPOSITO DESSE ARQUIVO JS.JS É ORGANIZAR OS CÓDIGOS JS EM UM ÚNICO ARQUIVO PARA QUE OS 4 HTML USEM DA MESMA FONTE, MANTENDO TODAS AS FUNCIONALIDADES DO APP/SITE
//AQUI COMEÇA O CÓDIGO JS DO ARQUIVO INDEX.HTML

<script src="https://cdn.jsdelivr.net/npm/astronomy-engine/astronomy.browser.min.js"></script>
    <script>
        const SIGNOS_DADOS = [
            { nome: "Áries", simbolo: "♈︎", elemento: "Fogo", ritmo: "Cardinal", polaridade: "Yang" },
            { nome: "Touro", simbolo: "♉︎", elemento: "Terra", ritmo: "Fixo", polaridade: "Yin" },
            { nome: "Gêmeos", simbolo: "♊︎", elemento: "Ar", ritmo: "Mutável", polaridade: "Yang" },
            { nome: "Câncer", simbolo: "♋︎", elemento: "Água", ritmo: "Cardinal", polaridade: "Yin" },
            { nome: "Leão", simbolo: "♌︎", elemento: "Fogo", ritmo: "Fixo", polaridade: "Yang" },
            { nome: "Virgem", simbolo: "♍︎", elemento: "Terra", ritmo: "Mutável", polaridade: "Yin" },
            { nome: "Libras", simbolo: "♎︎", elemento: "Ar", ritmo: "Cardinal", polaridade: "Yang" },
            { nome: "Escorpião", simbolo: "♏︎", elemento: "Água", ritmo: "Fixo", polaridade: "Yin" },
            { nome: "Sagitário", simbolo: "♐︎", elemento: "Fogo", ritmo: "Mutável", polaridade: "Yang" },
            { nome: "Capricórnio", simbolo: "♑︎", elemento: "Terra", ritmo: "Cardinal", polaridade: "Yin" },
            { nome: "Aquário", simbolo: "♒︎", elemento: "Ar", ritmo: "Fixo", polaridade: "Yang" },
            { nome: "Peixes", simbolo: "♓︎", elemento: "Água", ritmo: "Mutável", polaridade: "Yin" }
        ];

        const DEFINICAO_CASAS = {
            1: "Identidade, constituição física, primeira impressão e postura espontânea perante a vida.",
            2: "Recursos materiais, vida financeira, valores pessoais e capacidade de geração de sustento.",
            3: "Comunicação, aprendizagem prática, pequenas viagens, relação com irmãos e intelecto diário.",
            4: "Lar, família, ancestralidade, raízes emocionais e segurança íntima.",
            5: "Autoexpressão criativa, romances, projetos autoriais, filhos, jogos e prazeres.",
            6: "Rotina de trabalho, saúde física, hábitos diários, serviço e produtividade.",
            7: "Relacionamentos duradouros, casamento, parcerias de negócios e contratos sociais.",
            8: "Transformações profundas, recursos compartilhados, sexualidade, regeneração e finanças ocultas.",
            9: "Filosofia de vida, ensino superior, viagens longas, expansão espiritual e buscas por significado.",
            10: "Carreira, imagem pública, vocação, metas profissionais e legado no mundo.",
            11: "Grupos sociais, amizades, causas coletivas, rede de apoio e planos de futuro.",
            12: "Subconsciente, espiritualidade, recolhimento, processos ocultos e saúde mental."
        };

        const SIMBOLOS_ASTROS = {
            "Sol": "☉", "Lua": "☽", "Mercúrio": "☿", "Vênus": "♀", "Marte": "♂",
            "Júpiter": "♃", "Saturno": "♄", "Urano": "♅", "Netuno": "♆", "Plutão": "♇",
            "Ascendente (AC)": "AC", "Meio do Céu (MC)": "MC", 
            "Descendente (DC)": "DC", "Fundo do Céu (IC)": "IC",
            "Vertex": "Vx", "Anti-vertex": "Avx",
            "Quíron": "⚷", "Lilith": "⚸", "Roda da Fortuna": "⊗",
            "Nodo Norte": "☊", "Nodo Sul": "☋",
            "Ceres": "⚳", "Pallas": "⚴", "Juno": "⚵", "Vesta": "⚶",
            "Pholus": "⯛",
            "Éris": "⯰", "Sedna": "⯲", "Haumea": "🩵", "Makemake": "🩲",
            "Aldebaran": "✶", "Regulus": "✶", "Antares": "✶"
        };

        const DEFINICAO_ASTROS = {
            "Sol": "Sua essência, vitalidade, propósito de vida e identidade central.",
            "Lua": "Suas emoções, respostas reativas, memórias e necessidades de segurança.",
            "Mercúrio": "Processo de pensamento, comunicação, intelecto e aprendizado.",
            "Vênus": "Valores, forma de amar, relacionamentos, estética e finanças.",
            "Marte": "Força de ação, impulso, desejo, assertividade e como lida com conflitos.",
            "Júpiter": "Expansão, sorte, filosofia de vida, abundância e sabedoria.",
            "Saturno": "Estrutura, limites, disciplina, responsabilidade e lições de vida.",
            "Urano": "Inovação, ruptura, busca por liberdade, originalidade e imprevistos.",
            "Netuno": "Espiritualidade, intuição, imaginação, ilusões e compaixão.",
            "Plutão": "Poder pessoal, transformação profunda, regeneração e sombras.",
            "Ascendente (AC)": "Máscara social, presença física e primeira impressão no mundo.",
            "Meio do Céu (MC)": "Carreira, reputação pública, ambição e legado profissional.",
            "Descendente (DC)": "O tipo de parceria que você atrai e o que busca nos outros no espelho relacional.",
            "Fundo do Céu (IC)": "Suas raízes, ancestralidade, lar, infância e base psíquica interior.",
            "Quíron": "A ferida sagrada da alma e o local onde você desenvolve o dom da cura.",
            "Lilith": "Sua força selvagem reprimida, autonomia, tabus e poder instintivo.",
            "Roda da Fortuna": "Ponto de máxima harmonia, onde o fluxo da prosperidade e alegria se manifestam.",
            "Vertex": "O 'destino relacional', encontros kármicos e pontos de virada involuntários.",
            "Anti-vertex": "Ponto polar ao Vertex, associado ao impulso pessoal e gatilhos de transformação.",
            "Nodo Norte": "Sua missão de alma, direção de crescimento e futuro a ser desenvolvido.",
            "Nodo Sul": "Sua zona de conforto, hábitos passados e talentos inatos que precisam ser equilibrados.",
            "Ceres": "Forma de nutrir, autocuidado, apego e relação com a abundância.",
            "Pallas": "Sabedoria estratégica, inteligência de padrões e resolução de problemas.",
            "Juno": "Compromisso, casamentos, acordos e o parceiro ideal para longo prazo.",
            "Vesta": "Foco interior, devoção, disciplina sagrada e onde você canaliza sua energia vital.",
            "Pholus": "Gatilhos de grande impacto, pequenas causas que geram grandes transformações.",
            "Éris": "A discórdia construtiva, busca por justiça social e recusa em ser silenciado.",
            "Sedna": "Transcendência após traições, vulnerabilidade profunda e sabedoria dos abismos.",
            "Haumea": "Fertilidade criativa, resiliência e renascimento constante.",
            "Makemake": "Conexão com a natureza, preservação e sabedoria instintiva.",
            "Aldebaran": "Estrela Real (Touro): Honra, integridade e sucesso através da ética.",
            "Regulus": "Estrela Real (Leão): Liderança, nobreza e sucesso com risco de queda se houver vingança.",
            "Antares": "Estrela Real (Escorpião): Intensidade emocional, coragem e transformações passionais."
        };
 
        const DEFINICAO_ASPECTOS = [
            { nome: "Conjunção", angulo: 0, orbe: 8, classe: "conj", simbolo: "☌", iconClass: "icon-conj" },
            { nome: "Sextil", angulo: 60, orbe: 6, classe: "sext", simbolo: "✶", iconClass: "icon-sext" },
            { nome: "Quadratura", angulo: 90, orbe: 7, classe: "quad", simbolo: "□", iconClass: "icon-quad" },
            { nome: "Trígono", angulo: 120, orbe: 8, classe: "trig", simbolo: "△", iconClass: "icon-trig" },
            { nome: "Oposição", angulo: 180, orbe: 8, classe: "opp", simbolo: "☍", iconClass: "icon-opp" }
        ];

        // Combinações temáticas: agrupam astros específicos por área da vida, para
        // uma leitura de IA focada apenas naquele recorte (posições + aspectos entre
        // eles), em vez de uma análise ponto a ponto ou do mapa inteiro.
        const TEMAS_COMBINACOES = [
            { titulo: "Amor e Relacionamentos", astros: ["Vênus", "Lua", "Marte", "Sol"], descricao: "Amor, afeto, linguagem da sedução, dinâmica de atração e necessidades emocionais em relacionamentos." },
            { titulo: "Mente e Aprendizado", astros: ["Mercúrio", "Lua", "Saturno"], descricao: "Raciocínio, capacidade de aprendizado, foco, retenção de memória e estilo de comunicação." },
            { titulo: "Vitalidade e Autoafirmação", astros: ["Sol", "Ascendente (AC)", "Marte"], descricao: "Vitalidade, força de ação, expressão do ego, presença física e autoafirmação." },
            { titulo: "Carreira e Vocação", astros: ["Saturno", "Meio do Céu (MC)", "Sol", "Mercúrio"], descricao: "Ambição profissional, vocação, construção de carreira, reputação pública e métodos de trabalho." },
            { titulo: "Psique Profunda", astros: ["Lua", "Plutão", "Netuno"], descricao: "Psique profunda, padrões inconscientes, mecanismos de defesa, traumas, intuição e imaginação." },
            { titulo: "Propósito de Vida", astros: ["Nodo Norte", "Nodo Sul", "Saturno", "Quíron"], descricao: "Propósito de vida, bagagem de passado, lições evolutivas, feridas estruturantes e amadurecimento." },
            { titulo: "Personalidade Básica", astros: ["Sol", "Lua"], descricao: "Equilíbrio básico da personalidade, integração entre a vontade consciente e o mundo emocional interior." },
            { titulo: "Atração e Polaridade", astros: ["Vênus", "Marte"], descricao: "Dinâmica de atração sexual, polaridade entre desejo (conquista) e receptividade (relação)." },
            { titulo: "Filosofia de Vida", astros: ["Júpiter", "Saturno"], descricao: "Filosofia de vida, capacidade de expansão equilibrada com limites, ética e estrutura de crescimento no mundo." },
            { titulo: "Expressão Artística", astros: ["Mercúrio", "Vênus"], descricao: "Expressão artística, diplomacia na fala, estética verbal e inteligência social." },
            { titulo: "Impulso e Resiliência", astros: ["Marte", "Plutão"], descricao: "Impulso de sobrevivência, capacidade de regeneração, resiliência física e força de vontade sob extrema pressão." },
            { titulo: "Sensibilidade e Acolhimento", astros: ["Lua", "Vênus"], descricao: "Sensibilidade, busca por conforto, autocuidado e forma de acolher pessoas e ambientes." }
        ];
 
        let ULTIMO_ASTROS = [];
        let ULTIMO_CASAS = [];
        let ULTIMO_ASC = 0;
        let ULTIMO_ASPECTOS = [];
        let ULTIMO_BALANCO = { elementos: {}, ritmos: {}, polaridades: {} };
 
        function degToRad(deg) { return deg * Math.PI / 180; }
        function radToDeg(rad) { return rad * 180 / Math.PI; }
        function normalizar(graus) { return (graus % 360 + 360) % 360; }

        // Retrogradação: compara a longitude do corpo no instante do mapa com a
        // longitude dele 1 dia depois. Se o grau "andar pra trás" (considerando a
        // volta do 360°/0°), o corpo está retrógrado nesse momento — aparente da
        // Terra, exatamente como softwares profissionais calculam.
        function ehRetrogrado(grauAtual, grauDepois) {
            let diff = grauDepois - grauAtual;
            diff = ((diff + 180) % 360 + 360) % 360 - 180;
            return diff < 0;
        }
 
        function formatarDMS(grausDecimal) {
            const gAbs = grausDecimal % 30;
            const g = Math.floor(gAbs);
            const m = Math.floor((gAbs - g) * 60);
            return `${g}°${m.toString().padStart(2, '0')}'`;
        }

        // ==========================================
        // ELEMENTOS ORBITAIS REAIS (cada corpo com sua própria época de referência)
        // ==========================================
        // a = semieixo maior (UA), e = excentricidade, i = inclinação (graus),
        // om = longitude do nodo ascendente (graus), w = argumento do periélio (graus),
        // M0 = anomalia média na época (graus), epoch = data juliana da época de
        // referência (fonte: JPL Small-Body Database, elementos osculadores recentes).
        // ⚠️ Níveis de confiança diferentes (ver também NIVEL_PRECISAO mais abaixo,
        // usado para colorir os ícones na roda):
        // - Ceres, Pallas, Juno, Vesta: cinturão principal, órbitas estáveis e pouco
        //   perturbadas por planetas gigantes — confiança "média" (amarelo).
        // - Quíron, Pholus: centauros que cruzam as órbitas de Saturno/Urano/Netuno,
        //   mais sensíveis a perturbações não modeladas neste cálculo de 2 corpos —
        //   confiança "baixa" (vermelho), mesmo com elementos reais e época recente.
        // - Éris, Sedna, Haumea, Makemake: TNOs de período muito longo (283 a ~11.400
        //   anos) — confiança "baixa" (vermelho) pela mesma razão.
        // - Todos os 10 corpos abaixo usam elementos orbitais REAIS (JPL Small-Body
        //   Database, via Wikipedia), cada um com sua própria época de referência
        //   recente (2020-2025) — não mais uma única estimativa arbitrária para o ano
        //   2000. Cálculo por órbita de 2 corpos (sem perturbações planetárias).
        const ELEMENTOS_KEPLER = {
            "Quíron":   { epoch: 2459396.5, a: 13.70,   e: 0.3772,  i: 6.9299,  om: 209.27,  w: 339.71,  M0: 180.70  },
            "Ceres":    { epoch: 2460200.5, a: 2.767,   e: 0.0789,  i: 10.59,   om: 80.25,   w: 73.42,   M0: 60.08   },
            "Pallas":   { epoch: 2460200.5, a: 2.77,    e: 0.2302,  i: 34.93,   om: 172.9,   w: 310.9,   M0: 40.6    },
            "Juno":     { epoch: 2460200.5, a: 2.67,    e: 0.2562,  i: 12.991,  om: 169.84,  w: 247.74,  M0: 37.02   },
            "Vesta":    { epoch: 2460200.5, a: 2.36,    e: 0.0894,  i: 7.1422,  om: 103.71,  w: 151.66,  M0: 169.4   },
            "Pholus":   { epoch: 2459396.5, a: 20.348,  e: 0.5698,  i: 24.617,  om: 119.44,  w: 354.77,  M0: 117.26  },
            "Éris":     { epoch: 2461000.5, a: 67.69,   e: 0.44,    i: 44.18,   om: 36.02,   w: 151.66,  M0: 205.11  },
            "Sedna":    { epoch: 2458900.5, a: 506.0,   e: 0.8496,  i: 11.9307, om: 144.248, w: 311.352, M0: 358.117 },
            "Haumea":   { epoch: 2459200.5, a: 43.116,  e: 0.19642, i: 28.2137, om: 122.167, w: 239.041, M0: 218.205 },
            "Makemake": { epoch: 2461000.5, a: 45.499,  e: 0.1604,  i: 29.002,  om: 79.441,  w: 296.065, M0: 170.497 }
        };

        // Classificação de confiança de cada ponto, usada para colorir os ícones na
        // roda (azul = alta, amarelo = média, vermelho = mais baixa).
        const NIVEL_PRECISAO = {
            "Sol": "alta", "Lua": "alta", "Mercúrio": "alta", "Vênus": "alta", "Marte": "alta",
            "Júpiter": "alta", "Saturno": "alta", "Urano": "alta", "Netuno": "alta", "Plutão": "alta",
            "Ascendente (AC)": "alta", "Descendente (DC)": "alta",
            "Meio do Céu (MC)": "alta", "Fundo do Céu (IC)": "alta",
            "Vertex": "alta", "Anti-vertex": "alta",
            "Nodo Norte": "alta", "Nodo Sul": "alta", "Lilith": "alta", "Roda da Fortuna": "alta",
            "Aldebaran": "alta", "Regulus": "alta", "Antares": "alta",
            "Ceres": "media", "Pallas": "media", "Juno": "media", "Vesta": "media",
            "Quíron": "baixa", "Pholus": "baixa",
            "Éris": "baixa", "Sedna": "baixa", "Haumea": "baixa", "Makemake": "baixa"
        };
        const CORES_PRECISAO = { alta: "#58a6ff", media: "#e3b341", baixa: "#f85149" };

        function dataParaJD(dataUTC) {
            return (dataUTC.getTime() / 86400000) + 2440587.5;
        }

        // Resolve a equação de Kepler M = E - e*sin(E) por Newton-Raphson
        function resolverKepler(Mrad, e) {
            let E = Mrad;
            for (let k = 0; k < 60; k++) {
                const dE = (E - e * Math.sin(E) - Mrad) / (1 - e * Math.cos(E));
                E -= dE;
                if (Math.abs(dE) < 1e-9) break;
            }
            return E;
        }

        // Longitude eclíptica GEOCÊNTRICA real de um corpo a partir de elementos
        // keplerianos heliocêntricos + posição heliocêntrica real da Terra (via
        // astronomy-engine).
        function calcularLongitudeKepleriana(el, dataUTC) {
            const periodoDias = Math.pow(el.a, 1.5) * 365.25;
            const n = 360 / periodoDias;
            const dt = dataParaJD(dataUTC) - el.epoch;
            const M = normalizar(el.M0 + n * dt);
            const E = resolverKepler(degToRad(M), el.e);

            const xOrb = el.a * (Math.cos(E) - el.e);
            const yOrb = el.a * Math.sqrt(1 - el.e * el.e) * Math.sin(E);

            const wRad = degToRad(el.w), iRad = degToRad(el.i), omRad = degToRad(el.om);
            const cosO = Math.cos(omRad), sinO = Math.sin(omRad);
            const cosW = Math.cos(wRad), sinW = Math.sin(wRad);
            const cosI = Math.cos(iRad), sinI = Math.sin(iRad);

            const xHelio = (cosO * cosW - sinO * sinW * cosI) * xOrb + (-cosO * sinW - sinO * cosW * cosI) * yOrb;
            const yHelio = (sinO * cosW + cosO * sinW * cosI) * xOrb + (-sinO * sinW + cosO * cosW * cosI) * yOrb;

            const terraHelioEq = Astronomy.HelioVector(Astronomy.Body.Earth, dataUTC);
            const terraHelioEcl = Astronomy.Ecliptic(terraHelioEq).vec;

            const gx = xHelio - terraHelioEcl.x;
            const gy = yHelio - terraHelioEcl.y;

            return normalizar(radToDeg(Math.atan2(gy, gx)));
        }

        async function buscarCoordenadas() {
            const cidadeStr = document.getElementById('cidadeInput').value.trim();
            const statusDiv = document.getElementById('geoStatus');
            if (!cidadeStr) return;

            statusDiv.style.display = 'block';
            statusDiv.style.color = '#8b949e';
            statusDiv.textContent = 'Buscando coordenadas...';

            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(cidadeStr)}&limit=1`);
                const data = await response.json();

                if (data && data.length > 0) {
                    const lat = parseFloat(data[0].lat).toFixed(4);
                    const lon = parseFloat(data[0].lon).toFixed(4);
                    
                    document.getElementById('lat').value = lat;
                    document.getElementById('lon').value = lon;
                    
                    statusDiv.style.color = 'var(--terra)';
                    statusDiv.textContent = `✓ Local encontrado: Lat ${lat}, Lon ${lon}`;
                } else {
                    statusDiv.style.color = 'var(--fogo)';
                    statusDiv.textContent = 'Local não encontrado. Insira a Lat/Lon manualmente.';
                }
            } catch (err) {
                console.error(err);
                statusDiv.style.color = 'var(--fogo)';
                statusDiv.textContent = 'Erro ao buscar cidade. Insira a Lat/Lon manualmente.';
            }
        }
 
        function calcularMapaNatal() {
            const dateVal = document.getElementById('date').value;
            const timeVal = document.getElementById('time').value;
            const fuso = parseFloat(document.getElementById('fuso').value);
            const lat = parseFloat(document.getElementById('lat').value);
            const lon = parseFloat(document.getElementById('lon').value);
 
            const [year, month, day] = dateVal.split('-').map(Number);
            const [hours, minutes] = timeVal.split(':').map(Number);
            
            const hourUTC = hours + (minutes / 60) - fuso;
            let m = month, y = year;
            if (m <= 2) { y -= 1; m += 12; }
            let A = Math.floor(y / 100);
            let B = 2 - A + Math.floor(A / 4);
            let jdBirth = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + (hourUTC / 24.0) + B - 1524.5;
            let TRS = (jdBirth - 2451545.0) / 36525.0;

            // GMST correto (Meeus): usa a taxa de rotação da Terra por DIA (360.98564736629°/dia),
            // não por século — o valor anterior estava ~366x menor que o correto, por isso o
            // Ascendente praticamente não mudava ao alterar o horário de nascimento.
            let diasDesdeJ2000 = jdBirth - 2451545.0;
            let gmst = 280.46061837 + 360.98564736629 * diasDesdeJ2000 + 0.000387933 * TRS * TRS - (TRS * TRS * TRS) / 38710000.0;
            gmst = normalizar(gmst);
            let lst = normalizar(gmst + lon);
            let obliq = degToRad(23.4392911 - 0.0130042 * TRS);
 
            let mc = normalizar(radToDeg(Math.atan2(Math.sin(degToRad(lst)), Math.cos(degToRad(lst)) * Math.cos(obliq))));
            // atan2 já resolve o quadrante corretamente — não é necessário (nem correto)
            // forçar o resultado para nenhuma faixa fixa de graus.
            let asc = normalizar(radToDeg(Math.atan2(Math.cos(degToRad(lst)), -Math.sin(degToRad(lst)) * Math.cos(obliq) - Math.tan(degToRad(lat)) * Math.sin(obliq))));

            // Planetas Principais — posições geocêntricas REAIS via astronomy-engine
            // (mesma classe de precisão de efeméride usada por softwares profissionais)
            const dataNascUTC = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0) + hourUTC * 3600000);

            function longitudeEclipticaReal(corpo, dataCustom) {
                const vetor = Astronomy.GeoVector(corpo, dataCustom || dataNascUTC, true);
                return normalizar(Astronomy.Ecliptic(vetor).elon);
            }

            const sol = longitudeEclipticaReal(Astronomy.Body.Sun);
            const lua = normalizar(Astronomy.EclipticGeoMoon(dataNascUTC).lon);
            const mercurio = longitudeEclipticaReal(Astronomy.Body.Mercury);
            const venus = longitudeEclipticaReal(Astronomy.Body.Venus);
            const marte = longitudeEclipticaReal(Astronomy.Body.Mars);
            const jupiter = longitudeEclipticaReal(Astronomy.Body.Jupiter);
            const saturno = longitudeEclipticaReal(Astronomy.Body.Saturn);
            const urano = longitudeEclipticaReal(Astronomy.Body.Uranus);
            const netuno = longitudeEclipticaReal(Astronomy.Body.Neptune);
            const plutao = longitudeEclipticaReal(Astronomy.Body.Pluto);

            // Retrogradação dos planetas e corpos menores: compara a posição no
            // instante do mapa com a posição 1 dia depois. Sol, Lua, ângulos, nodos,
            // Lilith, Roda da Fortuna e estrelas fixas nunca entram aqui (não
            // retrogradam de verdade, ou o conceito não se aplica a eles).
            const dataSeguinte = new Date(dataNascUTC.getTime() + 86400000);
            const RETROGRADOS = {
                "Mercúrio": ehRetrogrado(mercurio, longitudeEclipticaReal(Astronomy.Body.Mercury, dataSeguinte)),
                "Vênus": ehRetrogrado(venus, longitudeEclipticaReal(Astronomy.Body.Venus, dataSeguinte)),
                "Marte": ehRetrogrado(marte, longitudeEclipticaReal(Astronomy.Body.Mars, dataSeguinte)),
                "Júpiter": ehRetrogrado(jupiter, longitudeEclipticaReal(Astronomy.Body.Jupiter, dataSeguinte)),
                "Saturno": ehRetrogrado(saturno, longitudeEclipticaReal(Astronomy.Body.Saturn, dataSeguinte)),
                "Urano": ehRetrogrado(urano, longitudeEclipticaReal(Astronomy.Body.Uranus, dataSeguinte)),
                "Netuno": ehRetrogrado(netuno, longitudeEclipticaReal(Astronomy.Body.Neptune, dataSeguinte)),
                "Plutão": ehRetrogrado(plutao, longitudeEclipticaReal(Astronomy.Body.Pluto, dataSeguinte))
            };

            // Ângulos Derivados
            const dc = normalizar(asc + 180);
            const ic = normalizar(mc + 180);
            // Vertex/Anti-vertex — fórmula trigonométrica real (método da co-latitude,
            // usado por softwares e tabelas de casas tradicionais): calcula-se um
            // "Ascendente" com a MESMA fórmula do Ascendente comum, mas usando a
            // co-latitude (90° − latitude) no lugar da latitude. O resultado disso é o
            // Anti-vertex; o Vertex é o ponto oposto (+180°). Substituiu a fórmula
            // simplificada anterior (asc + 180 − seno(asc)×12), que não era a fórmula
            // astronômica padrão.
            const antiVertex = normalizar(radToDeg(Math.atan2(Math.cos(degToRad(lst)), -Math.sin(degToRad(lst)) * Math.cos(obliq) - Math.tan(degToRad(90 - lat)) * Math.sin(obliq))));
            const vertex = normalizar(antiVertex + 180);

            // Pontos e Nodos
            // Roda da Fortuna (Parte da Fortuna): a fórmula tradicional muda entre
            // mapa diurno (Sol acima do horizonte) e noturno (Sol abaixo do horizonte).
            const mapaDiurno = normalizar(sol - asc) >= 180;
            const rodaFortuna = mapaDiurno
                ? normalizar(asc + lua - sol)
                : normalizar(asc + sol - lua);
            const nodoNorte = normalizar(125.044558 - 1934.1361849 * TRS);
            const nodoSul = normalizar(nodoNorte + 180);

            // Centauros, Asteroides e TNOs — mecânica orbital kepleriana REAL (elementos
            // orbitais osculadores + posição heliocêntrica real da Terra), substituindo
            // as antigas curvas senoidais/lineares fictícias. Ver ELEMENTOS_KEPLER e
            // calcularLongitudeKepleriana() no topo do script.
            const quiron = calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Quíron"], dataNascUTC);
            // Lilith (Lua Negra média) = longitude média do apogeu lunar (fórmula real, Meeus)
            const meanPerigeuLunar = 83.3532465 + 4069.0137287 * TRS - 0.0103200 * TRS * TRS
                                    - Math.pow(TRS, 3) / 80053 + Math.pow(TRS, 4) / 18999000;
            const lilith = normalizar(meanPerigeuLunar + 180);
            const ceres = calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Ceres"], dataNascUTC);
            const pallas = calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Pallas"], dataNascUTC);
            const juno = calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Juno"], dataNascUTC);
            const vesta = calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Vesta"], dataNascUTC);
            const pholus = calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Pholus"], dataNascUTC);
            // "Cápulo" foi removido: não corresponde a nenhum corpo celeste catalogado
            // (IAU/JPL) — era um deslocamento simbólico arbitrário sem base real.

            // Transnetunianos (TNOs)
            const eris = calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Éris"], dataNascUTC);
            const sedna = calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Sedna"], dataNascUTC);
            const haumea = calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Haumea"], dataNascUTC);
            const makemake = calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Makemake"], dataNascUTC);

            // Retrogradação dos corpos menores (mesma técnica: compara com 1 dia depois)
            RETROGRADOS["Quíron"] = ehRetrogrado(quiron, calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Quíron"], dataSeguinte));
            RETROGRADOS["Ceres"] = ehRetrogrado(ceres, calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Ceres"], dataSeguinte));
            RETROGRADOS["Pallas"] = ehRetrogrado(pallas, calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Pallas"], dataSeguinte));
            RETROGRADOS["Juno"] = ehRetrogrado(juno, calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Juno"], dataSeguinte));
            RETROGRADOS["Vesta"] = ehRetrogrado(vesta, calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Vesta"], dataSeguinte));
            RETROGRADOS["Pholus"] = ehRetrogrado(pholus, calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Pholus"], dataSeguinte));
            RETROGRADOS["Éris"] = ehRetrogrado(eris, calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Éris"], dataSeguinte));
            RETROGRADOS["Sedna"] = ehRetrogrado(sedna, calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Sedna"], dataSeguinte));
            RETROGRADOS["Haumea"] = ehRetrogrado(haumea, calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Haumea"], dataSeguinte));
            RETROGRADOS["Makemake"] = ehRetrogrado(makemake, calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Makemake"], dataSeguinte));

            // Estrelas Fixas — precessão real: ~50,29"/ano = 1,39697°/século (constante IAU)
            const precessao = TRS * 1.39697;
            const aldebaran = normalizar(69.78 + precessao);  
            const regulus = normalizar(149.83 + precessao);   
            const antares = normalizar(249.76 + precessao);   

            const astros = [
                { nome: "Sol", grau: sol }, { nome: "Lua", grau: lua },
                { nome: "Mercúrio", grau: mercurio }, { nome: "Vênus", grau: venus },
                { nome: "Marte", grau: marte }, { nome: "Júpiter", grau: jupiter },
                { nome: "Saturno", grau: saturno }, { nome: "Urano", grau: urano },
                { nome: "Netuno", grau: netuno }, { nome: "Plutão", grau: plutao },
                
                { nome: "Ascendente (AC)", grau: asc }, { nome: "Descendente (DC)", grau: dc },
                { nome: "Meio do Céu (MC)", grau: mc }, { nome: "Fundo do Céu (IC)", grau: ic },
                { nome: "Vertex", grau: vertex }, { nome: "Anti-vertex", grau: antiVertex },

                { nome: "Roda da Fortuna", grau: rodaFortuna },
                { nome: "Nodo Norte", grau: nodoNorte }, { nome: "Nodo Sul", grau: nodoSul },
                { nome: "Quíron", grau: quiron }, { nome: "Lilith", grau: lilith },

                { nome: "Ceres", grau: ceres }, { nome: "Pallas", grau: pallas },
                { nome: "Juno", grau: juno }, { nome: "Vesta", grau: vesta },

                { nome: "Pholus", grau: pholus },

                { nome: "Éris", grau: eris }, { nome: "Sedna", grau: sedna },
                { nome: "Haumea", grau: haumea }, { nome: "Makemake", grau: makemake },

                { nome: "Aldebaran", grau: aldebaran }, { nome: "Regulus", grau: regulus },
                { nome: "Antares", grau: antares }
            ];

            astros.forEach(a => { a.retrogrado = RETROGRADOS[a.nome] || false; });
 
            const casas = Array.from({ length: 12 }, (_, i) => normalizar(asc + (i * 30)));
 
            // Atribuição de casa considerando a passagem por 0°/360°: a cúspide de uma
            // casa pode "virar o zero" (ex: Casa 9 em 350° e Casa 10 em 20°). A versão
            // anterior comparava apenas casas[i] < grau < casas[i+1] assumindo ordem
            // crescente, então QUALQUER casa em que essa virada ocorresse jogava os
            // astros incorretamente para a Casa 12 (fallback), em vez da casa correta.
            astros.forEach(a => {
                let casaEncontrada = 12;
                for (let i = 0; i < 12; i++) {
                    const inicio = casas[i];
                    const fim = casas[(i + 1) % 12];
                    if (fim > inicio) {
                        if (a.grau >= inicio && a.grau < fim) { casaEncontrada = i + 1; break; }
                    } else {
                        if (a.grau >= inicio || a.grau < fim) { casaEncontrada = i + 1; break; }
                    }
                }
                a.casa = casaEncontrada;
            });
 
            return { astros, casas, asc };
        }
 
        function calcularAspectos(astros) {
            const aspectos = [];
            for (let i = 0; i < astros.length; i++) {
                for (let j = i + 1; j < astros.length; j++) {
                    const a1 = astros[i], a2 = astros[j];
                    let diff = Math.abs(a1.grau - a2.grau);
                    if (diff > 180) diff = 360 - diff;
 
                    DEFINICAO_ASPECTOS.forEach(asp => {
                        const orbeAtual = Math.abs(diff - asp.angulo);
                        if (orbeAtual <= asp.orbe) {
                            aspectos.push({
                                astro1: a1.nome, astro2: a2.nome, aspecto: asp.nome,
                                classe: asp.classe, simbolo: asp.simbolo, iconClass: asp.iconClass, orbe: orbeAtual.toFixed(1)
                            });
                        }
                    });
                }
            }
            return aspectos;
        }
 
        function renderizarBalanço(astros) {
            const elementos = { Fogo: 0, Terra: 0, Ar: 0, Água: 0 };
            const ritmos = { Cardinal: 0, Fixo: 0, Mutável: 0 };
            const polaridades = { Yang: 0, Yin: 0 };
 
            const planetasPrincipais = astros.filter(a => ["Sol", "Lua", "Mercúrio", "Vênus", "Marte", "Júpiter", "Saturno", "Urano", "Netuno", "Plutão"].includes(a.nome));
            
            planetasPrincipais.forEach(a => {
                const sIdx = Math.floor(a.grau / 30) % 12;
                const signo = SIGNOS_DADOS[sIdx];
                elementos[signo.elemento]++;
                ritmos[signo.ritmo]++;
                polaridades[signo.polaridade]++;
            });
 
            const total = planetasPrincipais.length;
            ULTIMO_BALANCO = { elementos, ritmos, polaridades };
            const coresElementos = { Fogo: "var(--fogo)", Terra: "var(--terra)", Ar: "var(--ar)", Água: "var(--agua)" };
 
            document.getElementById('elementosBars').innerHTML = Object.keys(elementos).map(k => {
                const pct = Math.round((elementos[k] / total) * 100);
                return `
                    <div class="progress-item">
                        <div class="progress-info"><span>${k} (${elementos[k]})</span><span>${pct}%</span></div>
                        <div class="bar-bg"><div class="bar-fill" style="width:${pct}%; background:${coresElementos[k]}"></div></div>
                    </div>
                `;
            }).join('');
 
            document.getElementById('ritmosBars').innerHTML = Object.keys(ritmos).map(k => {
                const pct = Math.round((ritmos[k] / total) * 100);
                return `
                    <div class="progress-item">
                        <div class="progress-info"><span>${k} (${ritmos[k]})</span><span>${pct}%</span></div>
                        <div class="bar-bg"><div class="bar-fill" style="width:${pct}%; background:var(--destaque)"></div></div>
                    </div>
                `;
            }).join('');
 
            document.getElementById('polaridadesBars').innerHTML = Object.keys(polaridades).map(k => {
                const pct = Math.round((polaridades[k] / total) * 100);
                const label = k === "Yang" ? "Yang (Ativo/Extrovertido)" : "Yin (Receptivo/Introspectivo)";
                return `
                    <div class="progress-item">
                        <div class="progress-info"><span>${label}</span><span>${pct}%</span></div>
                        <div class="bar-bg"><div class="bar-fill" style="width:${pct}%; background:var(--sol)"></div></div>
                    </div>
                `;
            }).join('');
        }
 
        function renderizarAstrosExpansivel(astros) {
            const container = document.getElementById('astrosExpandList');
            const ordensSalvas = obterOrdensSalvas();
            container.innerHTML = astros.map(a => {
                const sIdx = Math.floor(a.grau / 30) % 12;
                const signo = SIGNOS_DADOS[sIdx];
                const simAstro = SIMBOLOS_ASTROS[a.nome] || '';
                const explicacaoAstro = DEFINICAO_ASTROS[a.nome] || "";
                const nivel = NIVEL_PRECISAO[a.nome] || "alta";
                const corNivel = CORES_PRECISAO[nivel];
                const rotuloNivel = nivel === 'alta' ? 'Confiabilidade alta' : (nivel === 'media' ? 'Confiabilidade média' : 'Confiabilidade mais baixa');
                const jaFeito = ordensSalvas.has(2000 + ORDEM_ASTROS_BASE.indexOf(a.nome));
                const marcaR = a.retrogrado ? '<span class="marca-retrogrado" title="Retrógrado">℞</span>' : '';

                return `
                    <div class="expand-card">
                        <div class="expand-header" onclick="this.parentElement.classList.toggle('open')">
                            <div class="expand-title">
                                <span title="${rotuloNivel}" style="display:inline-block; width:8px; height:8px; border-radius:50%; background:${corNivel}; flex-shrink:0;"></span>
                                <span style="color:var(--sol); font-size:1.1rem;">${simAstro}</span>
                                <span>${a.nome}${marcaR} em ${signo.nome} ${signo.simbolo}</span>
                            </div>
                            <div style="display:flex; align-items:center; gap:8px;">
                                ${indicadorFeitoHtml(jaFeito)}
                                <span class="expand-badge">Casa ${a.casa}</span>
                                <span class="arrow-icon">▼</span>
                            </div>
                        </div>
                        <div class="expand-content">
                            <p style="margin-bottom: 8px;"><strong>Simbolismo:</strong> ${explicacaoAstro}</p>
                            <p style="margin-bottom: 8px;"><strong>Significado Natal:</strong> Expressa a energia de <strong>${signo.nome}</strong> ativando a área de vida representada pela <strong>Casa ${a.casa}</strong>.${a.retrogrado ? ' Está <strong>retrógrado</strong> neste mapa, o que muda a forma como essa energia se expressa.' : ''}</p>
                            <p style="margin-bottom: 6px;"><strong>Posição Exata:</strong> ${formatarDMS(a.grau)}${a.retrogrado ? ' ℞' : ''}</p>
                            <p style="margin-bottom: 6px;"><strong>${rotuloNivel}</strong></p>
                            
                            <button class="btn-ia btn-ia-inline" onclick="event.stopPropagation(); dispararAnaliseIA('${a.nome}', '${signo.nome}', ${a.casa}, ${a.retrogrado ? 'true' : 'false'})">
                                ✦ Interpretação Profunda com IA
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
        }

        function renderizarCasasExpansivel(casas, astros) {
            const container = document.getElementById('casasExpandList');
            const ordensSalvas = obterOrdensSalvas();
            container.innerHTML = casas.map((grauCasa, index) => {
                const numCasa = index + 1;
                const sIdx = Math.floor(grauCasa / 30) % 12;
                const signoCuspide = SIGNOS_DADOS[sIdx];
                
                const astrosNaCasa = astros.filter(a => a.casa === numCasa);
                const nomesAstros = astrosNaCasa.length > 0 
                    ? astrosNaCasa.map(a => `${SIMBOLOS_ASTROS[a.nome] || ''} ${a.nome}${a.retrogrado ? ' ℞' : ''}`).join(', ')
                    : 'Nenhum planeta presente (Casa Vazia)';

                const ocupantesNomes = astrosNaCasa.map(a => `${a.nome}${a.retrogrado ? ' (retrógrado)' : ''}`).join(', ') || 'nenhum astro relevante';
                const jaFeito = ordensSalvas.has(3000 + numCasa);

                return `
                    <div class="expand-card">
                        <div class="expand-header" onclick="this.parentElement.classList.toggle('open')">
                            <div class="expand-title">
                                <span style="color:var(--destaque); font-weight:bold;">Casa ${numCasa}</span>
                                <span>em ${signoCuspide.nome} ${signoCuspide.simbolo}</span>
                            </div>
                            <div style="display:flex; align-items:center; gap:8px;">
                                ${indicadorFeitoHtml(jaFeito)}
                                <span class="expand-badge">${astrosNaCasa.length} astro(s)</span>
                                <span class="arrow-icon">▼</span>
                            </div>
                        </div>
                        <div class="expand-content">
                            <p style="margin-bottom: 8px;"><strong>Tema da Casa:</strong> ${DEFINICAO_CASAS[numCasa]}</p>
                            <p style="margin-bottom: 8px;"><strong>Cúspide:</strong> ${signoCuspide.nome} (${formatarDMS(grauCasa)})</p>
                            <p style="margin-bottom: 6px;"><strong>Ocupantes Natas:</strong> ${nomesAstros}</p>
                            
                            <button class="btn-ia btn-ia-inline" onclick="event.stopPropagation(); dispararAnaliseCasaIA(${numCasa}, '${signoCuspide.nome}', '${ocupantesNomes}')">
                                ✦ Análise da Casa com IA
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
        }
 
        function renderizarAspectosExpansivel(aspectos) {
            const container = document.getElementById('aspectosExpandList');
            const ordensSalvas = obterOrdensSalvas();
            container.innerHTML = aspectos.map((asp, indice) => {
                const sim1 = SIMBOLOS_ASTROS[asp.astro1] || '';
                const sim2 = SIMBOLOS_ASTROS[asp.astro2] || '';
                const jaFeito = ordensSalvas.has(5000 + indice);

                return `
                    <div class="expand-card">
                        <div class="expand-header" onclick="this.parentElement.classList.toggle('open')">
                            <div class="expand-title">
                                <span>${sim1} ${asp.astro1} ${asp.simbolo} ${asp.astro2} ${sim2}</span>
                            </div>
                            <div style="display:flex; align-items:center; gap:8px;">
                                ${indicadorFeitoHtml(jaFeito)}
                                <span class="badge-aspecto ${asp.classe}">${asp.aspecto}</span>
                                <span class="arrow-icon">▼</span>
                            </div>
                        </div>
                        <div class="expand-content">
                            <p style="margin-bottom: 8px;"><strong>Dinâmica Psicológica:</strong> Integração interpessoal entre as energias de ${asp.astro1} e ${asp.astro2}.</p>
                            <p style="margin-bottom: 6px;"><strong>Orbe de Precisão:</strong> ${asp.orbe}°</p>
                            
                            <button class="btn-ia btn-ia-inline" onclick="event.stopPropagation(); dispararAnaliseAspectoIA('${asp.astro1}', '${asp.aspecto}', '${asp.astro2}')">
                                ✦ Interpretar Aspecto com IA
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
        }
 
        function renderizarTemas(astros) {
            const container = document.getElementById('temasExpandList');
            if (!container) return;
            const ordensSalvas = obterOrdensSalvas();

            container.innerHTML = TEMAS_COMBINACOES.map((tema, indice) => {
                const astrosEncontrados = tema.astros
                    .map(nome => astros.find(a => a.nome === nome))
                    .filter(Boolean);

                const resumoPosicoes = astrosEncontrados.map(a => {
                    const sIdx = Math.floor(a.grau / 30) % 12;
                    const signo = SIGNOS_DADOS[sIdx];
                    const sim = SIMBOLOS_ASTROS[a.nome] || '';
                    return `${sim} ${a.nome}${a.retrogrado ? ' ℞' : ''} em ${signo.nome} (Casa ${a.casa})`;
                }).join(' · ');

                const jaFeito = ordensSalvas.has(6000 + indice);

                return `
                    <div class="expand-card">
                        <div class="expand-header" onclick="this.parentElement.classList.toggle('open')">
                            <div class="expand-title">
                                <span>${tema.titulo}</span>
                            </div>
                            <div style="display:flex; align-items:center; gap:8px;">
                                ${indicadorFeitoHtml(jaFeito)}
                                <span class="expand-badge">${tema.astros.length} astros</span>
                                <span class="arrow-icon">▼</span>
                            </div>
                        </div>
                        <div class="expand-content">
                            <p style="margin-bottom: 8px;"><strong>Sobre este tema:</strong> ${tema.descricao}</p>
                            <p style="margin-bottom: 8px; font-size:0.8rem;">${resumoPosicoes || 'Calcule o mapa para ver as posições.'}</p>

                            <button class="btn-ia btn-ia-inline" onclick="event.stopPropagation(); dispararAnaliseTemaIA(${indice})">
                                ✦ Analisar este Tema com IA
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
        }

        function gerarMatrizHtml(astros, aspectos) {
            let html = "";
            const total = astros.length;
 
            for (let i = 0; i < total; i++) {
                html += "<tr>";
                for (let j = 0; j < total; j++) {
                    if (i === j) {
                        html += `<th class="header-astro" title="${astros[i].nome}">${SIMBOLOS_ASTROS[astros[i].nome]}</th>`;
                    } else if (i > j) {
                        const asp = aspectos.find(a => (a.astro1 === astros[i].nome && a.astro2 === astros[j].nome) || (a.astro2 === astros[i].nome && a.astro1 === astros[j].nome));
                        if (asp) {
                            html += `<td class="cell-aspect ${asp.iconClass}" title="${asp.aspecto}">${asp.simbolo}</td>`;
                        } else {
                            html += `<td class="cell-aspect"></td>`;
                        }
                    } else {
                        html += `<td class="empty-cell"></td>`;
                    }
                }
                html += "</tr>";
            }
 
            document.getElementById('matrixAspectos').innerHTML = html;
        }
 
        function desenharRodaSVG(astros, casas, asc) {
            const svg = document.getElementById('chartSvg');
            svg.innerHTML = '';
            const cx = 300, cy = 300, rOuter = 285, rInner = 230, rCasas = 160, rCore = 80;
 
            const grauParaAngulo = (g) => (180 + (g - asc)) % 360;
            const polarToCart = (r, a) => {
                const rad = (a - 180) * Math.PI / 180;
                return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
            };
 
            for (let i = 0; i < 12; i++) {
                const aIn = grauParaAngulo(i * 30), aFim = grauParaAngulo((i + 1) * 30);
                const p1 = polarToCart(rOuter, aIn), p2 = polarToCart(rOuter, aFim);
                const p3 = polarToCart(rInner, aFim), p4 = polarToCart(rInner, aIn);
 
                const d = `M ${p1.x} ${p1.y} A ${rOuter} ${rOuter} 0 0 1 ${p2.x} ${p2.y} L ${p3.x} ${p3.y} A ${rInner} ${rInner} 0 0 0 ${p4.x} ${p4.y} Z`;
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('d', d);
                path.setAttribute('fill', i % 2 === 0 ? '#161b22' : '#0d1117');
                path.setAttribute('stroke', '#30363d');
                svg.appendChild(path);
 
                const pTxt = polarToCart((rOuter + rInner) / 2, grauParaAngulo(i * 30 + 15));
                const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                txt.setAttribute('x', pTxt.x); txt.setAttribute('y', pTxt.y);
                txt.setAttribute('class', 'signo-symbol');
                txt.textContent = SIGNOS_DADOS[i].simbolo;
                svg.appendChild(txt);
            }
 
            casas.forEach((c, i) => {
                const p1 = polarToCart(rInner, grauParaAngulo(c)), p2 = polarToCart(rCore, grauParaAngulo(c));
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', p1.x); line.setAttribute('y1', p1.y);
                line.setAttribute('x2', p2.x); line.setAttribute('y2', p2.y);
                line.setAttribute('stroke', (i % 3 === 0) ? '#58a6ff' : '#30363d');
                svg.appendChild(line);
            });
 
            const coreCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            coreCircle.setAttribute('cx', cx); coreCircle.setAttribute('cy', cy); coreCircle.setAttribute('r', rCore);
            coreCircle.setAttribute('fill', '#0b0e14'); coreCircle.setAttribute('stroke', '#30363d');
            svg.appendChild(coreCircle);
 
            astros.forEach(a => {
                const p = polarToCart(rCasas, grauParaAngulo(a.grau));
                const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                g.setAttribute('class', 'planet-node');
                g.setAttribute('transform', `translate(${p.x}, ${p.y})`);

                const nivel = NIVEL_PRECISAO[a.nome] || "alta";
                const corNivel = CORES_PRECISAO[nivel];
 
                const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                c.setAttribute('r', 14);
                c.setAttribute('stroke', corNivel);
                c.setAttribute('stroke-width', 2);
 
                const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                t.setAttribute('y', 1); 
                t.setAttribute('fill', a.nome === "Sol" ? 'var(--sol)' : 'var(--destaque)');
                t.setAttribute('font-size', '15px');
                t.textContent = SIMBOLOS_ASTROS[a.nome] || a.nome[0];
 
                g.appendChild(c); 
                g.appendChild(t);

                if (a.retrogrado) {
                    const rTxt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    rTxt.setAttribute('x', 10);
                    rTxt.setAttribute('y', -8);
                    rTxt.setAttribute('font-size', '8px');
                    rTxt.setAttribute('font-weight', 'bold');
                    rTxt.setAttribute('fill', '#f0883e');
                    rTxt.textContent = 'R';
                    g.appendChild(rTxt);
                }
                
                const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
                title.textContent = `${a.nome}: ${formatarDMS(a.grau)} — confiabilidade ${nivel === 'alta' ? 'alta' : (nivel === 'media' ? 'média' : 'mais baixa')}${a.retrogrado ? ' — Retrógrado' : ''}`;
                g.appendChild(title);
 
                svg.appendChild(g);
            });
        }
 
        // ==========================================
        // INTEGRAÇÃO COM A IA
        // ==========================================
 
        // Ordem canônica dos astros, igual à ordem em que aparecem na lista
        // "Posições Astrológicas" — usada para ordenar as leituras salvas na mesma
        // sequência dos blocos do app.
        const ORDEM_ASTROS_BASE = [
            "Sol", "Lua", "Mercúrio", "Vênus", "Marte", "Júpiter", "Saturno", "Urano", "Netuno", "Plutão",
            "Ascendente (AC)", "Descendente (DC)", "Meio do Céu (MC)", "Fundo do Céu (IC)", "Vertex", "Anti-vertex",
            "Roda da Fortuna", "Nodo Norte", "Nodo Sul", "Quíron", "Lilith",
            "Ceres", "Pallas", "Juno", "Vesta",
            "Pholus",
            "Éris", "Sedna", "Haumea", "Makemake",
            "Aldebaran", "Regulus", "Antares"
        ];

        function iniciarAnaliseIA(titulo, promptText, ordem) {
            ULTIMO_TITULO_ANALISE = titulo;
            ULTIMO_ORDEM_ANALISE = (ordem !== undefined && ordem !== null) ? ordem : 9999;
            document.getElementById('modalTitle').textContent = `✦ ${titulo}`;
            document.getElementById('modalBody').innerHTML = `
                <div class="loading-spinner">
                    <div class="spinner"></div>
                    <p>Consultando IA astrológica...</p>
                </div>`;
            document.getElementById('aiModal').classList.add('active');
            gerarAnaliseIA(promptText);
        }
 
        // Diretriz de tom compartilhada por todas as análises de IA: sem introdução,
        // com profundidade filosófica/psicológica/simbólica, mas sem citar escolas de
        // pensamento, tradições ou termos técnicos de sistemas específicos — o texto
        // deve soar como uma leitura pessoal, nunca uma aula teórica.
        const DIRETRIZ_TOM_IA = `Escreva com profundidade filosófica e psicológica, atento às camadas simbólicas, aos padrões ocultos por trás do comportamento e ao significado mais profundo por trás dos eventos de vida — como uma leitura séria, intuitiva e madura. NÃO cite nomes de escolas de pensamento, tradições, sistemas ou termos técnicos de nenhuma linha teórica específica; o foco deve estar inteiramente na pessoa e na energia analisada, com linguagem natural e envolvente.
            NÃO escreva introduções, saudações, contextualizações iniciais ou frases como "vamos analisar" — a primeira frase já deve estar dentro do assunto central do tema, sem nenhum preâmbulo antes disso.
            NÃO use títulos, cabeçalhos ou listas numeradas visíveis no texto final — apenas parágrafos corridos.
            Escreva em tom de conversa direta com quem está lendo, como se estivesse falando pessoalmente com essa pessoa sobre ela mesma — dirija-se a ela usando "você", nunca em terceira pessoa distante ("esta pessoa", "o consulente") nem como um texto acadêmico impessoal.
            Use formatação HTML básica com parágrafos <p> e destaques em <strong>.`;

        function dispararAnaliseIA(nomeAstro, nomeSigno, numCasa, retrogrado) {
            const notaRetrogrado = retrogrado
                ? `\n\nImportante: ${nomeAstro} está RETRÓGRADO neste mapa. Isso muda o tom da leitura — considere isso ao longo de toda a análise (energia mais internalizada, revisitada, reprocessada, em vez de expressa diretamente para fora), sem citar o termo técnico "retrógrado" como se fosse um jargão à parte, apenas incorporando esse matiz na interpretação.`
                : '';

            const promptText = `Faça uma leitura astrológica sobre a posição de ${nomeAstro} em ${nomeSigno}, na Casa ${numCasa}, no Mapa Natal desta pessoa.${notaRetrogrado}

            Siga rigorosamente esta estrutura, sem indicar os números ou nomes das etapas no texto final:
            1. Um parágrafo breve sobre o que ${nomeAstro} representa como força interna nesta pessoa.
            2. Um parágrafo sobre como ${nomeSigno} colore, direciona ou qualifica essa energia.
            3. Um parágrafo sobre o que a Casa ${numCasa} revela sobre onde e como essa energia se manifesta na vida prática.
            4. Uma análise geral, mais longa e rica, que une os três elementos acima como um retrato único e coerente, trazendo uma reflexão de autoconhecimento.

            ${DIRETRIZ_TOM_IA}`;
 
            iniciarAnaliseIA(`${nomeAstro}${retrogrado ? ' ℞' : ''} em ${nomeSigno} — Casa ${numCasa}`, promptText, 2000 + ORDEM_ASTROS_BASE.indexOf(nomeAstro));
        }

        function dispararAnaliseAspectoIA(astro1, aspecto, astro2) {
            const a1 = ULTIMO_ASTROS.find(a => a.nome === astro1);
            const a2 = ULTIMO_ASTROS.find(a => a.nome === astro2);
            const notasRetrogrado = [
                a1 && a1.retrogrado ? `${astro1} está retrógrado neste mapa.` : '',
                a2 && a2.retrogrado ? `${astro2} está retrógrado neste mapa.` : ''
            ].filter(Boolean).join(' ');

            const promptText = `Faça uma leitura astrológica sobre o aspecto de ${aspecto} entre ${astro1} e ${astro2} no Mapa Natal desta pessoa.${notasRetrogrado ? '\n\nImportante: ' + notasRetrogrado + ' Considere esse matiz (energia mais internalizada/reprocessada) na leitura, sem tratar o termo como jargão à parte.' : ''}

            Siga rigorosamente esta estrutura, sem indicar os números ou nomes das etapas no texto final:
            1. Um parágrafo breve sobre o que ${astro1} representa como força interna nesta pessoa.
            2. Um parágrafo breve sobre o que ${astro2} representa como força interna nesta pessoa.
            3. Um parágrafo sobre a natureza do aspecto de ${aspecto} e como ele aproxima, tensiona ou funde essas duas energias.
            4. Uma análise geral, mais longa e rica, sobre o que esse encontro de forças revela sobre os padrões, desafios e talentos da pessoa.

            ${DIRETRIZ_TOM_IA}`;
 
            const indiceAspecto = ULTIMO_ASPECTOS.findIndex(asp =>
                (asp.astro1 === astro1 && asp.astro2 === astro2 && asp.aspecto === aspecto) ||
                (asp.astro1 === astro2 && asp.astro2 === astro1 && asp.aspecto === aspecto)
            );
            iniciarAnaliseIA(`${astro1} ${aspecto} ${astro2}`, promptText, 5000 + (indiceAspecto >= 0 ? indiceAspecto : 0));
        }

        function dispararAnaliseCasaIA(numCasa, nomeSigno, ocupantes) {
            const promptText = `Faça uma leitura astrológica sobre a Casa ${numCasa} do Mapa Natal desta pessoa, com cúspide em ${nomeSigno}, contendo: ${ocupantes}.

            Siga rigorosamente esta estrutura, sem indicar os números ou nomes das etapas no texto final:
            1. Um parágrafo breve sobre o que a Casa ${numCasa} representa como área de vida.
            2. Um parágrafo sobre como ${nomeSigno}, na cúspide, qualifica a forma como essa área se expressa.
            3. Um parágrafo sobre o papel dos astros presentes nessa casa (${ocupantes}) e como eles atuam nessa área específica.
            4. Uma análise geral, mais longa e rica, unindo os três elementos acima em um retrato coerente do potencial dessa área na vida da pessoa.

            ${DIRETRIZ_TOM_IA}`;

            iniciarAnaliseIA(`Casa ${numCasa} em ${nomeSigno}`, promptText, 3000 + numCasa);
        }
 
        function dispararAnaliseBalanco(tipo) {
            if (!ULTIMO_ASTROS.length) return;
 
            let titulo, rotulo, dados, ordemBalanco;
            if (tipo === 'elementos') {
                titulo = `Balanço de Elementos`;
                rotulo = 'elementos';
                dados = ULTIMO_BALANCO.elementos;
                ordemBalanco = 1000;
            } else if (tipo === 'ritmos') {
                titulo = `Balanço de Modalidades`;
                rotulo = 'modalidades';
                dados = ULTIMO_BALANCO.ritmos;
                ordemBalanco = 1001;
            } else {
                titulo = `Balanço de Polaridades`;
                rotulo = 'polaridades';
                dados = ULTIMO_BALANCO.polaridades;
                ordemBalanco = 1002;
            }
 
            const dadosTexto = Object.entries(dados).map(([k, v]) => `${k}: ${v}`).join(', ');
 
            const promptText = `Faça uma leitura sobre o temperamento e a estrutura psíquica desta pessoa com base nesta distribuição de ${rotulo} no Mapa Natal: ${dadosTexto}.
            Escreva de 3 a 4 parágrafos, explicando como essa proporção molda a forma da pessoa sentir, reagir e tomar decisões no dia a dia.
            ${DIRETRIZ_TOM_IA}`;
 
            iniciarAnaliseIA(titulo, promptText, ordemBalanco);
        }
 
        function dispararAnaliseMapaCompleto() {
            if (!ULTIMO_ASTROS.length) return;
 
            const listaPosicoes = ULTIMO_ASTROS.map(a => {
                const sIdx = Math.floor(a.grau / 30) % 12;
                const signo = SIGNOS_DADOS[sIdx];
                return `${a.nome} em ${signo.nome} na Casa ${a.casa}`;
            }).join('; ');
 
            const promptText = `Elabore um relatório-síntese completo da personalidade para o Mapa Natal desta pessoa, baseado nas seguintes posições:
 
            Posições Natas: ${listaPosicoes}.
 
            Escreva de 5 a 7 parágrafos, destacando a tríade principal (Sol, Lua e Ascendente), os eixos angulares (MC/IC, DC) e os pontos de cura (Quíron/Nodos), trazendo reflexões valiosas sobre vocação, relacionamentos e evolução interior.
            ${DIRETRIZ_TOM_IA}`;
 
            iniciarAnaliseIA(`Relatório de Síntese Natal`, promptText, 0);
        }
 
        function dispararAnaliseAspectosCompleta() {
            if (!ULTIMO_ASPECTOS.length) return;
 
            const lista = ULTIMO_ASPECTOS
                .map(asp => `${asp.astro1} em ${asp.aspecto} com ${asp.astro2}`)
                .join('; ');
 
            const promptText = `Faça uma leitura da dinâmica de aspectos natas desta pessoa:
 
            ${lista}
 
            Escreva de 4 a 5 parágrafos, conectando as dinâmicas de tensão e harmonia entre os diferentes talentos e padrões inatos.
            ${DIRETRIZ_TOM_IA}`;
 
            iniciarAnaliseIA(`Análise Psicológica de Aspectos Natas`, promptText, 4000);
        }

        function dispararAnaliseTemaIA(indice) {
            if (!ULTIMO_ASTROS.length) return;
            const tema = TEMAS_COMBINACOES[indice];
            if (!tema) return;

            const astrosEncontrados = tema.astros
                .map(nome => ULTIMO_ASTROS.find(a => a.nome === nome))
                .filter(Boolean);
            if (!astrosEncontrados.length) return;

            const descricaoPosicoes = astrosEncontrados.map(a => {
                const sIdx = Math.floor(a.grau / 30) % 12;
                const signo = SIGNOS_DADOS[sIdx];
                return `${a.nome}${a.retrogrado ? ' (retrógrado)' : ''} em ${signo.nome} (Casa ${a.casa})`;
            }).join('; ');

            const nomesEnvolvidos = astrosEncontrados.map(a => a.nome);
            const aspectosRelevantes = ULTIMO_ASPECTOS.filter(asp =>
                nomesEnvolvidos.includes(asp.astro1) && nomesEnvolvidos.includes(asp.astro2)
            );
            const descricaoAspectos = aspectosRelevantes.length
                ? aspectosRelevantes.map(asp => `${asp.astro1} em ${asp.aspecto} com ${asp.astro2}`).join('; ')
                : 'nenhum aspecto direto relevante entre esses pontos específicos';

            const promptText = `Faça uma leitura astrológica sobre o tema "${tema.titulo}" (${tema.descricao}) no Mapa Natal desta pessoa, considerando os seguintes astros e suas posições: ${descricaoPosicoes}.

            Aspectos relevantes entre esses astros: ${descricaoAspectos}.

            Siga rigorosamente esta estrutura, sem indicar os números ou nomes das etapas no texto final:
            1. Um parágrafo comentando brevemente a posição de cada astro envolvido (signo e casa) e o que cada um contribui especificamente para esse tema.
            2. Um parágrafo sobre a dinâmica formada pelos aspectos entre esses astros e como essa tensão ou fluidez atua especificamente nessa área da vida.
            3. Uma análise geral, rica e integrada, sobre como esse conjunto se expressa nessa área da vida da pessoa.

            ${DIRETRIZ_TOM_IA}`;

            iniciarAnaliseIA(tema.titulo, promptText, 6000 + indice);
        }
 
        async function gerarAnaliseIA(promptText) {
            const modalBody = document.getElementById('modalBody');
            try {
                const response = await fetch('https://astro-gns-proxy.genesisgns.workers.dev/', {
                    method: 'POST',
                    cache: 'no-store',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ prompt: promptText })
                });
 
                const data = await response.json();
 
                if (response.ok && data.resposta) {
                    exibirResultadoIA(data.resposta);
                } else {
                    modalBody.innerHTML = `<p style="color:var(--fogo);"><strong>Erro:</strong> ${data.error || "Não foi possível obter a resposta da IA."}</p>`;
                }
            } catch (err) {
                console.error(err);
                modalBody.innerHTML = `<p style="color:var(--fogo);"><strong>Erro de Conexão:</strong> ${err.message}</p>`;
            }
        }
 
        function exibirResultadoIA(texto) {
            let htmlFormatado = texto.replace(/```html/g, '').replace(/```/g, '');
            document.getElementById('modalBody').innerHTML = htmlFormatado;
            if (PESSOA_ATIVA_ID && ULTIMO_TITULO_ANALISE) {
                salvarLeituraNaPessoaAtiva(ULTIMO_TITULO_ANALISE, htmlFormatado, ULTIMO_ORDEM_ANALISE);
            }
        }
 
        function fecharModal() {
            document.getElementById('aiModal').classList.remove('active');
            pararLeituraVoz();
        }
 
        function fecharModalOuter(e) {
            if (e.target.id === 'aiModal') fecharModal();
        }

        // ==========================================
        // LEITURA EM VOZ ALTA (Web Speech API — nativa do navegador, sem custo)
        // ==========================================
        // A qualidade da voz depende só do que o aparelho/navegador oferece — não
        // dá pra trocar por uma "biblioteca melhor" sem sair do modelo 100%
        // gratuito e client-side. Em compensação, aqui a gente: (1) tenta escolher
        // automaticamente a MELHOR voz em português disponível (vozes "de rede",
        // tipo Google/Microsoft neurais, soam bem mais humanas que as vozes locais
        // básicas do sistema); (2) deixa a pessoa escolher manualmente entre todas
        // as vozes em português do aparelho, e lembra a escolha pra próxima vez.
        let vozAtiva = false;
        let VOZES_DISPONIVEIS = [];
        const CHAVE_VOZ_PREFERIDA = 'astro_voz_preferida_v1';

        // Nomes de vozes de rede (neurais/WaveNet) conhecidas por soarem mais
        // naturais, usadas para ordenar a lista com as melhores primeiro.
        const PISTAS_VOZ_BOA = ['google', 'wavenet', 'neural', 'natural', 'online', 'luciana', 'microsoft'];

        function pontuarVoz(v) {
            const nome = (v.name || '').toLowerCase();
            let pontos = 0;
            if (v.lang && v.lang.toLowerCase() === 'pt-br') pontos += 10;
            else if (v.lang && v.lang.toLowerCase().startsWith('pt')) pontos += 5;
            PISTAS_VOZ_BOA.forEach(pista => { if (nome.includes(pista)) pontos += 3; });
            if (!v.localService) pontos += 2; // vozes de rede tendem a soar melhor que as locais
            return pontos;
        }

        function carregarVozes() {
            if (!('speechSynthesis' in window)) return;
            const todas = speechSynthesis.getVoices();
            let candidatas = todas.filter(v => v.lang && v.lang.toLowerCase().startsWith('pt'));
            if (!candidatas.length) candidatas = todas; // aparelho sem voz em pt: mostra todas como fallback

            VOZES_DISPONIVEIS = candidatas.slice().sort((a, b) => pontuarVoz(b) - pontuarVoz(a));
            popularSeletorVozes();
        }

        function popularSeletorVozes() {
            const select = document.getElementById('vozSelect');
            if (!select || !VOZES_DISPONIVEIS.length) return;

            const preferida = localStorage.getItem(CHAVE_VOZ_PREFERIDA);

            select.innerHTML = VOZES_DISPONIVEIS.map(v =>
                `<option value="${v.name}">${v.name}${v.lang ? ' (' + v.lang + ')' : ''}</option>`
            ).join('');

            if (preferida && VOZES_DISPONIVEIS.some(v => v.name === preferida)) {
                select.value = preferida;
            } else {
                select.value = VOZES_DISPONIVEIS[0].name; // já vem ordenada com a melhor primeiro
            }
        }

        function salvarVozPreferida() {
            const select = document.getElementById('vozSelect');
            if (!select) return;
            localStorage.setItem(CHAVE_VOZ_PREFERIDA, select.value);
        }

        function extrairTextoParaVoz() {
            const clone = document.getElementById('modalBody').cloneNode(true);
            return clone.textContent.replace(/\s+/g, ' ').trim();
        }

        function alternarLeituraVoz() {
            if (!('speechSynthesis' in window)) {
                alert('Seu navegador não suporta leitura em voz alta.');
                return;
            }
            const btn = document.getElementById('btnOuvir');
            if (vozAtiva) {
                pararLeituraVoz();
                return;
            }
            const texto = extrairTextoParaVoz();
            if (!texto) return;

            const utterance = new SpeechSynthesisUtterance(texto);
            utterance.lang = 'pt-BR';
            // Um pouco mais lenta que o padrão (1.0) costuma soar mais natural e
            // menos "robótica" na leitura de textos longos.
            utterance.rate = 0.93;
            utterance.pitch = 1;

            const select = document.getElementById('vozSelect');
            const nomeEscolhido = select ? select.value : '';
            const vozEscolhida = VOZES_DISPONIVEIS.find(v => v.name === nomeEscolhido) || VOZES_DISPONIVEIS[0];
            if (vozEscolhida) utterance.voice = vozEscolhida;

            utterance.onend = () => { vozAtiva = false; btn.textContent = '🔊'; };
            utterance.onerror = () => { vozAtiva = false; btn.textContent = '🔊'; };

            speechSynthesis.cancel();
            speechSynthesis.speak(utterance);
            vozAtiva = true;
            btn.textContent = '⏹️';
        }

        function pararLeituraVoz() {
            if ('speechSynthesis' in window) speechSynthesis.cancel();
            vozAtiva = false;
            const btn = document.getElementById('btnOuvir');
            if (btn) btn.textContent = '🔊';
        }
 
        // ==========================================
        // MECANISMO DE TRANSIÇÃO ENTRE MAPA NATAL E REVOLUÇÃO SOLAR
        // ==========================================
        // Os dados de nascimento (data, hora, fuso, cidade e coordenadas) são salvos
        // no localStorage do navegador. Assim, ao clicar na aba "Revolução Solar",
        // aquela página já abre com os mesmos dados natais preenchidos, sem precisar
        // digitar tudo de novo. Não envolve nenhum servidor, apenas o navegador local.
        const CHAVE_DADOS_NATAIS = 'astro_dados_natais_v1';

        function salvarDadosNatais() {
            try {
                const dados = {
                    date: document.getElementById('date').value,
                    time: document.getElementById('time').value,
                    fuso: document.getElementById('fuso').value,
                    lat: document.getElementById('lat').value,
                    lon: document.getElementById('lon').value,
                    cidade: document.getElementById('cidadeInput').value
                };
                localStorage.setItem(CHAVE_DADOS_NATAIS, JSON.stringify(dados));
            } catch (err) {
                console.warn('Não foi possível salvar os dados natais localmente:', err);
            }
        }

        function carregarDadosNatais() {
            try {
                const raw = localStorage.getItem(CHAVE_DADOS_NATAIS);
                if (!raw) return false;
                const dados = JSON.parse(raw);
                if (dados.date) document.getElementById('date').value = dados.date;
                if (dados.time) document.getElementById('time').value = dados.time;
                if (dados.fuso !== undefined && dados.fuso !== '') document.getElementById('fuso').value = dados.fuso;
                if (dados.lat !== undefined && dados.lat !== '') document.getElementById('lat').value = dados.lat;
                if (dados.lon !== undefined && dados.lon !== '') document.getElementById('lon').value = dados.lon;
                if (dados.cidade) document.getElementById('cidadeInput').value = dados.cidade;
                return true;
            } catch (err) {
                console.warn('Não foi possível carregar os dados natais salvos:', err);
                return false;
            }
        }

        // ==========================================
        // PESSOAS SALVAS + HISTÓRICO DE LEITURAS DE IA (localStorage do navegador)
        // ==========================================
        // Cada pessoa salva guarda seus dados de nascimento e um histórico de
        // leituras de IA já geradas. Enquanto uma pessoa estiver "ativa", toda nova
        // análise de IA gerada nesta página é automaticamente anexada ao histórico
        // dela. Tudo fica salvo apenas neste navegador (sem servidor).
        const CHAVE_PESSOAS_SALVAS = 'astro_pessoas_salvas_v1';
        const ORIGEM_PAGINA = 'Mapa Natal';
        // Identificador fixo desta página, salvo em cada leitura de IA gerada aqui.
        // É o que permite os selos "✓ já feito" do Mapa Natal e da Revolução Solar
        // serem contados de forma totalmente independente, mesmo a pessoa sendo
        // compartilhada entre as duas páginas.
        const CONTEXTO_PAGINA = 'natal';
        let PESSOA_ATIVA_ID = null;
        let ULTIMO_TITULO_ANALISE = '';
        let ULTIMO_ORDEM_ANALISE = 9999;

        function carregarPessoasSalvas() {
            try {
                const raw = localStorage.getItem(CHAVE_PESSOAS_SALVAS);
                return raw ? JSON.parse(raw) : [];
            } catch (err) { return []; }
        }

        function salvarPessoasSalvas(lista) {
            try { localStorage.setItem(CHAVE_PESSOAS_SALVAS, JSON.stringify(lista)); }
            catch (err) { console.warn('Não foi possível salvar pessoas:', err); }
        }

        function salvarOuAtivarPessoa() {
            const nome = (document.getElementById('nomePessoaInput').value || '').trim();
            if (!nome) { alert('Digite um nome para salvar.'); return; }

            const dados = {
                date: document.getElementById('date').value,
                time: document.getElementById('time').value,
                fuso: document.getElementById('fuso').value,
                lat: document.getElementById('lat').value,
                lon: document.getElementById('lon').value,
                cidade: document.getElementById('cidadeInput').value
            };

            const lista = carregarPessoasSalvas();
            let pessoa = lista.find(p => p.nome.toLowerCase() === nome.toLowerCase() && p.dados.date === dados.date && p.dados.time === dados.time);

            if (!pessoa) {
                pessoa = { id: 'p_' + Date.now(), nome, dados, criadoEm: new Date().toISOString(), leituras: [] };
                lista.push(pessoa);
            } else {
                pessoa.dados = dados;
            }

            salvarPessoasSalvas(lista);
            PESSOA_ATIVA_ID = pessoa.id;
            atualizarIndicadorPessoaAtiva();
            renderizarPessoasSalvas();
            atualizarTodosIndicadores();
        }

        function atualizarIndicadorPessoaAtiva() {
            const el = document.getElementById('pessoaAtivaIndicador');
            if (!el) return;
            if (!PESSOA_ATIVA_ID) { el.style.display = 'none'; return; }
            const lista = carregarPessoasSalvas();
            const pessoa = lista.find(p => p.id === PESSOA_ATIVA_ID);
            if (pessoa) {
                el.style.display = 'block';
                el.textContent = `💾 Gravando leituras para: ${pessoa.nome} (clique para parar)`;
            }
        }

        function desativarPessoa() {
            PESSOA_ATIVA_ID = null;
            atualizarIndicadorPessoaAtiva();
            atualizarTodosIndicadores();
        }

        // Identifica de qual página uma leitura salva veio ('natal' ou 'solar').
        // Leituras novas já trazem o campo 'contexto' gravado diretamente. Leituras
        // antigas (salvas antes dessa separação existir) não têm esse campo — nesse
        // caso, inferimos pelo texto de 'origem' salvo junto com a leitura.
        function obterContextoDaLeitura(l) {
            if (l.contexto) return l.contexto;
            return (l.origem || '').startsWith('Revolução Solar') ? 'solar' : 'natal';
        }

        // Retorna o conjunto de "ordem" já salvas para a pessoa ativa, filtrando
        // apenas leituras do CONTEXTO desta página (Mapa Natal). Isso garante que um
        // selo "✓ já feito" aqui não apareça por causa de uma leitura equivalente
        // feita na Revolução Solar, e vice-versa — cada página passa a ter seu
        // próprio controle de "já feito", independente da outra.
        function obterOrdensSalvas() {
            if (!PESSOA_ATIVA_ID) return new Set();
            const lista = carregarPessoasSalvas();
            const pessoa = lista.find(p => p.id === PESSOA_ATIVA_ID);
            if (!pessoa) return new Set();
            return new Set(
                pessoa.leituras
                    .filter(l => obterContextoDaLeitura(l) === CONTEXTO_PAGINA)
                    .map(l => l.ordem)
            );
        }

        function indicadorFeitoHtml(jaFeito) {
            return jaFeito ? '<span class="indicador-feito" title="Já existe uma leitura de IA salva para este item">✓</span>' : '';
        }

        // Atualiza os selos "✓" fixos (fora das listas expansíveis): Síntese
        // completa, Matriz de Aspectos completa e os 3 balanços.
        function atualizarIndicadoresEstaticos() {
            const ordensSalvas = obterOrdensSalvas();
            const mapa = {
                indicadorSintese: 0,
                indicadorAspectosCompleta: 4000,
                indicadorBalancoElementos: 1000,
                indicadorBalancoRitmos: 1001,
                indicadorBalancoPolaridades: 1002
            };
            Object.entries(mapa).forEach(([idEl, ordem]) => {
                const el = document.getElementById(idEl);
                if (el) el.innerHTML = indicadorFeitoHtml(ordensSalvas.has(ordem));
            });
        }

        // Atualiza TODOS os selos "já feito": as listas expansíveis (astros, casas,
        // aspectos, temas) e os indicadores fixos — sem precisar recalcular o mapa
        // inteiro, usando os dados já calculados (ULTIMO_ASTROS, etc).
        function atualizarTodosIndicadores() {
            if (!ULTIMO_ASTROS.length) return;
            renderizarAstrosExpansivel(ULTIMO_ASTROS);
            renderizarCasasExpansivel(ULTIMO_CASAS, ULTIMO_ASTROS);
            renderizarAspectosExpansivel(ULTIMO_ASPECTOS);
            renderizarTemas(ULTIMO_ASTROS);
            atualizarIndicadoresEstaticos();
        }

        function salvarLeituraNaPessoaAtiva(titulo, html, ordem) {
            if (!PESSOA_ATIVA_ID) return;
            const lista = carregarPessoasSalvas();
            const pessoa = lista.find(p => p.id === PESSOA_ATIVA_ID);
            if (!pessoa) return;
            pessoa.leituras.unshift({
                id: 'l_' + Date.now(),
                titulo,
                origem: ORIGEM_PAGINA,
                contexto: CONTEXTO_PAGINA,
                html,
                ordem: (ordem !== undefined && ordem !== null) ? ordem : 9999,
                criadoEm: new Date().toISOString()
            });
            salvarPessoasSalvas(lista);
            renderizarPessoasSalvas();
            atualizarTodosIndicadores();
        }

        // Ordena as leituras salvas seguindo a MESMA ordem em que os blocos
        // aparecem no app (Síntese → Balanços → Posições → Casas → Aspectos →
        // Temas), em vez da ordem cronológica de quando foram geradas. Leituras
        // salvas antes desse recurso existir (sem "ordem") ficam ao final,
        // ordenadas por data.
        function ordenarLeituras(leituras) {
            return leituras.slice().sort((a, b) => {
                const oa = (a.ordem !== undefined && a.ordem !== null) ? a.ordem : Infinity;
                const ob = (b.ordem !== undefined && b.ordem !== null) ? b.ordem : Infinity;
                if (oa !== ob) return oa - ob;
                return new Date(b.criadoEm) - new Date(a.criadoEm);
            });
        }

        function excluirPessoa(id) {
            if (!confirm('Excluir esta pessoa e todas as leituras salvas dela?')) return;
            let lista = carregarPessoasSalvas();
            lista = lista.filter(p => p.id !== id);
            salvarPessoasSalvas(lista);
            if (PESSOA_ATIVA_ID === id) desativarPessoa();
            renderizarPessoasSalvas();
            atualizarTodosIndicadores();
        }

        function excluirLeitura(idPessoa, idLeitura) {
            const lista = carregarPessoasSalvas();
            const pessoa = lista.find(p => p.id === idPessoa);
            if (!pessoa) return;
            pessoa.leituras = pessoa.leituras.filter(l => l.id !== idLeitura);
            salvarPessoasSalvas(lista);
            renderizarPessoasSalvas();
            atualizarTodosIndicadores();
        }

        function carregarMapaDaPessoa(id) {
            const lista = carregarPessoasSalvas();
            const pessoa = lista.find(p => p.id === id);
            if (!pessoa) return;
            document.getElementById('date').value = pessoa.dados.date;
            document.getElementById('time').value = pessoa.dados.time;
            document.getElementById('fuso').value = pessoa.dados.fuso;
            document.getElementById('lat').value = pessoa.dados.lat;
            document.getElementById('lon').value = pessoa.dados.lon;
            document.getElementById('cidadeInput').value = pessoa.dados.cidade;
            document.getElementById('nomePessoaInput').value = pessoa.nome;
            PESSOA_ATIVA_ID = pessoa.id;
            atualizarIndicadorPessoaAtiva();
            executarTudo();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function reabrirLeituraSalva(idPessoa, idLeitura) {
            const lista = carregarPessoasSalvas();
            const pessoa = lista.find(p => p.id === idPessoa);
            if (!pessoa) return;
            const leitura = pessoa.leituras.find(l => l.id === idLeitura);
            if (!leitura) return;
            document.getElementById('modalTitle').textContent = `✦ ${leitura.titulo}`;
            document.getElementById('modalBody').innerHTML = leitura.html;
            document.getElementById('aiModal').classList.add('active');
        }

        function extrairTextoDeHtml(html) {
            const div = document.createElement('div');
            div.innerHTML = html;
            return div.textContent.replace(/\n{3,}/g, '\n\n').trim();
        }

        function exportarTxtPessoa(id) {
            const lista = carregarPessoasSalvas();
            const pessoa = lista.find(p => p.id === id);
            if (!pessoa) return;

            let conteudo = `LEITURAS ASTROLÓGICAS — ${pessoa.nome}\n`;
            conteudo += `Nascimento: ${pessoa.dados.date} às ${pessoa.dados.time} (UTC${pessoa.dados.fuso >= 0 ? '+' : ''}${pessoa.dados.fuso}) — ${pessoa.dados.cidade}\n`;
            conteudo += `${'='.repeat(60)}\n\n`;

            if (!pessoa.leituras.length) {
                conteudo += 'Nenhuma leitura salva ainda.\n';
            } else {
                ordenarLeituras(pessoa.leituras).forEach(l => {
                    conteudo += `${l.titulo}\n`;
                    conteudo += `${l.origem} — ${new Date(l.criadoEm).toLocaleString('pt-BR')}\n`;
                    conteudo += `${'-'.repeat(40)}\n`;
                    conteudo += `${extrairTextoDeHtml(l.html)}\n\n`;
                });
            }

            const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${pessoa.nome.replace(/\s+/g, '_')}_leituras.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        // Extrai o período (ex: "2026-2027") do texto salvo em "origem" de uma
        // leitura da Revolução Solar. Leituras sem período identificável caem em
        // "Outros períodos" (ex: leituras muito antigas, salvas antes desse texto
        // existir no campo "origem").
        function extrairPeriodoDeOrigem(origem) {
            const match = (origem || '').match(/(\d{4}-\d{4})/);
            return match ? match[1] : 'Outros períodos';
        }

        // Agrupa as leituras de uma pessoa para o PDF: um capítulo único para o
        // Mapa Natal, e um capítulo "Revolução Solar" subdividido por período
        // (já que a mesma pessoa pode ter mais de um período salvo). Cada grupo
        // sai na mesma sequência dos blocos do app (ordenarLeituras).
        function agruparLeiturasParaPdf(leituras) {
            const ordenadas = ordenarLeituras(leituras);
            const natal = ordenadas.filter(l => obterContextoDaLeitura(l) === 'natal');
            const solar = ordenadas.filter(l => obterContextoDaLeitura(l) === 'solar');

            const solarPorPeriodo = {};
            solar.forEach(l => {
                const periodo = extrairPeriodoDeOrigem(l.origem);
                if (!solarPorPeriodo[periodo]) solarPorPeriodo[periodo] = [];
                solarPorPeriodo[periodo].push(l);
            });

            // Períodos ordenados pelo ano inicial (mais antigo primeiro). Períodos
            // sem ano identificável ("Outros períodos") ficam sempre por último.
            const periodosOrdenados = Object.keys(solarPorPeriodo).sort((a, b) => {
                const anoA = parseInt(a, 10);
                const anoB = parseInt(b, 10);
                if (isNaN(anoA) && isNaN(anoB)) return 0;
                if (isNaN(anoA)) return 1;
                if (isNaN(anoB)) return -1;
                return anoA - anoB;
            });

            return { natal, solarPorPeriodo, periodosOrdenados };
        }

        function exportarPdfPessoa(id) {
            const lista = carregarPessoasSalvas();
            const pessoa = lista.find(p => p.id === id);
            if (!pessoa) return;

            // Caminho absoluto do ícone do app, usado como logo na capa do PDF
            // (resolvido a partir da própria página, já que a janela do PDF abre
            // em branco e não tem uma URL base própria para caminhos relativos).
            const logoUrl = new URL('icon-192.png', window.location.href).href;

            const renderizarLeitura = (l) => `
                <div class="pdf-leitura">
                    <h2>${l.titulo}</h2>
                    <p class="pdf-meta">${l.origem} — ${new Date(l.criadoEm).toLocaleString('pt-BR')}</p>
                    <div class="pdf-texto">${l.html}</div>
                </div>
                <hr class="pdf-divisor">
            `;

            let corpoHtml = '';

            if (!pessoa.leituras.length) {
                corpoHtml = '<p>Nenhuma leitura salva ainda.</p>';
            } else {
                const { natal, solarPorPeriodo, periodosOrdenados } = agruparLeiturasParaPdf(pessoa.leituras);
                let primeiroCapitulo = true;

                // Capítulo Mapa Natal — todas as leituras natais juntas, na mesma
                // ordem dos blocos do app.
                if (natal.length) {
                    corpoHtml += `<div class="pdf-chapter">
                        <h1 class="pdf-chapter-title">🌟 Mapa Natal</h1>
                        ${natal.map(renderizarLeitura).join('')}
                    </div>`;
                    primeiroCapitulo = false;
                }

                // Capítulo Revolução Solar — começa em folha nova (se não for o
                // primeiro capítulo do documento) e cada período salvo abre sua
                // própria folha nova, identificado no título.
                if (periodosOrdenados.length) {
                    corpoHtml += `<div class="pdf-chapter"${primeiroCapitulo ? '' : ' style="page-break-before:always;"'}>
                        <h1 class="pdf-chapter-title">☀️ Revolução Solar</h1>
                        ${periodosOrdenados.map((periodo, idx) => `
                            <h2 class="pdf-period-title"${idx === 0 ? '' : ' style="page-break-before:always;"'}>Período ${periodo}</h2>
                            ${solarPorPeriodo[periodo].map(renderizarLeitura).join('')}
                        `).join('')}
                    </div>`;
                }
            }

            const documentoHtml = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8">
                <title>${pessoa.nome} — Leituras Astrológicas</title>
                <style>
                    body { font-family: Georgia, 'Times New Roman', serif; padding: 30px; color:#222; }
                    .pdf-cover { text-align:center; padding-top:120px; page-break-after:always; }
                    .pdf-cover img { width:140px; height:140px; object-fit:contain; margin-bottom:24px; }
                    .pdf-cover h1 { font-size:2.6rem; font-weight:bold; letter-spacing:6px; color:#5b3a00; margin-bottom:6px; }
                    .pdf-cover .pdf-subtitulo { font-size:1rem; color:#888; letter-spacing:2px; text-transform:uppercase; margin-bottom:70px; }
                    .pdf-cover .pdf-nome-pessoa { font-size:1.4rem; color:#222; margin-bottom:6px; }
                    .pdf-cover .pdf-nascimento { font-size:0.9rem; color:#666; }
                    .pdf-chapter-title { font-size:1.7rem; font-weight:bold; color:#5b3a00; border-bottom:3px solid #e3b341; padding-bottom:10px; margin-bottom:20px; }
                    .pdf-period-title { font-size:1.2rem; font-weight:bold; color:#8957e5; margin:26px 0 12px 0; border-bottom:1px solid #ccc; padding-bottom:4px; }
                    .pdf-leitura { margin-bottom:24px; page-break-inside:avoid; }
                    .pdf-leitura h2 { color:#5b3a00; font-size:1.1rem; font-weight:bold; margin-bottom:2px; }
                    .pdf-meta { font-size:0.8rem; color:#666; margin-bottom:10px; }
                    .pdf-texto { font-size:0.95rem; line-height:1.6; color:#222; }
                    .pdf-divisor { border:none; border-top:1px solid #ccc; margin:20px 0; }
                    strong { color:#5b3a00; }
                    @media print { body { padding: 10mm; } }
                </style>
                </head><body>
                <div class="pdf-cover">
                    <img src="${logoUrl}" alt="Logo Astro">
                    <h1>ASTRO</h1>
                    <p class="pdf-subtitulo">Leituras Astrológicas</p>
                    <p class="pdf-nome-pessoa"><strong>${pessoa.nome}</strong></p>
                    <p class="pdf-nascimento">Nascimento: ${pessoa.dados.date} às ${pessoa.dados.time} (UTC${pessoa.dados.fuso >= 0 ? '+' : ''}${pessoa.dados.fuso}) — ${pessoa.dados.cidade}</p>
                </div>
                ${corpoHtml}
                </body></html>`;

            const janela = window.open('', '_blank');
            if (!janela) { alert('Permita pop-ups neste site para exportar em PDF.'); return; }
            janela.document.open();
            janela.document.write(documentoHtml);
            janela.document.close();
            const dispararImpressao = () => { janela.focus(); janela.print(); };
            janela.onload = dispararImpressao;
            setTimeout(dispararImpressao, 400);
        }

        function renderizarPessoasSalvas() {
            const container = document.getElementById('pessoasSalvasList');
            if (!container) return;
            const lista = carregarPessoasSalvas();

            if (!lista.length) {
                container.innerHTML = '<p style="color:#8b949e; font-size:0.85rem; padding: 8px 0;">Nenhuma pessoa salva ainda. Preencha os dados acima, digite um nome no campo "Nome da Pessoa" e clique em "Salvar / Ativar".</p>';
                return;
            }

            container.innerHTML = lista.slice().reverse().map(p => {
                const leiturasHtml = p.leituras.length
                    ? ordenarLeituras(p.leituras).map(l => `
                        <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid var(--border); gap:8px;">
                            <div style="cursor:pointer; flex:1;" onclick="reabrirLeituraSalva('${p.id}', '${l.id}')">
                                <div style="font-size:0.82rem; font-weight:600;">${l.titulo}</div>
                                <div style="font-size:0.7rem; color:#8b949e;">${l.origem} · ${new Date(l.criadoEm).toLocaleString('pt-BR')}</div>
                            </div>
                            <button class="modal-close" style="font-size:1rem;" title="Excluir leitura" onclick="event.stopPropagation(); excluirLeitura('${p.id}', '${l.id}')">🗑️</button>
                        </div>`).join('')
                    : '<p style="font-size:0.8rem; color:#8b949e; padding: 6px 0;">Nenhuma leitura salva ainda para esta pessoa.</p>';

                return `
                    <div class="expand-card">
                        <div class="expand-header" onclick="this.parentElement.classList.toggle('open')">
                            <div class="expand-title">
                                <span>👤 ${p.nome}</span>
                            </div>
                            <div style="display:flex; align-items:center; gap:8px;">
                                <span class="expand-badge">${p.leituras.length} leitura(s)</span>
                                <span class="arrow-icon">▼</span>
                            </div>
                        </div>
                        <div class="expand-content">
                            <p style="margin-bottom:8px;"><strong>Nascimento:</strong> ${p.dados.date} às ${p.dados.time} (UTC${p.dados.fuso >= 0 ? '+' : ''}${p.dados.fuso}) — ${p.dados.cidade}</p>
                            <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:10px;">
                                <button class="btn-ia" onclick="carregarMapaDaPessoa('${p.id}')">📂 Carregar este Mapa</button>
                                <button class="btn-ia" onclick="exportarTxtPessoa('${p.id}')">📄 Exportar TXT</button>
                                <button class="btn-ia" onclick="exportarPdfPessoa('${p.id}')">🧾 Exportar PDF</button>
                                <button class="btn-ia" style="background: linear-gradient(135deg, #da3633, #8b2020);" onclick="excluirPessoa('${p.id}')">🗑️ Excluir Pessoa</button>
                            </div>
                            <p style="margin-bottom:6px; font-size:0.8rem; color:#8b949e;"><strong>Leituras salvas:</strong></p>
                            ${leiturasHtml}
                        </div>
                    </div>
                `;
            }).join('');
        }

        function executarTudo() {
            const { astros, casas, asc } = calcularMapaNatal();
            const aspectos = calcularAspectos(astros);
 
            ULTIMO_ASTROS = astros;
            ULTIMO_CASAS = casas;
            ULTIMO_ASC = asc;
            ULTIMO_ASPECTOS = aspectos;
 
            renderizarBalanço(astros);
            renderizarAstrosExpansivel(astros);
            renderizarCasasExpansivel(casas, astros);
            renderizarAspectosExpansivel(aspectos);
            renderizarTemas(astros);
            gerarMatrizHtml(astros, aspectos);
            desenharRodaSVG(astros, casas, asc);
            atualizarIndicadoresEstaticos();

            salvarDadosNatais();
        }
 
        // ==========================================
        // LIMPAR CACHE TÉCNICO (sem apagar pessoas salvas)
        // ==========================================
        // Importante: as "Pessoas Salvas" e suas leituras ficam no localStorage —
        // uma gaveta de armazenamento totalmente separada do cache do Service
        // Worker (que guarda cópias de HTML/ícones para o app abrir rápido/offline).
        // Esta função remove APENAS a segunda gaveta: desregistra o Service Worker
        // e apaga o Cache Storage, depois recarrega a página forçando uma busca
        // nova ao servidor. O localStorage (pessoas salvas) não é tocado.
        async function limparCacheDoApp() {
            const confirmou = confirm(
                'Isso vai limpar o cache técnico do app e recarregar a página, para ' +
                'garantir que você veja a versão mais recente.\n\n' +
                'Suas Pessoas Salvas e leituras de IA NÃO serão apagadas — ficam ' +
                'guardadas em outro lugar, separado desse cache.\n\nContinuar?'
            );
            if (!confirmou) return;

            try {
                if ('serviceWorker' in navigator) {
                    const registros = await navigator.serviceWorker.getRegistrations();
                    await Promise.all(registros.map((registro) => registro.unregister()));
                }
                if ('caches' in window) {
                    const chaves = await caches.keys();
                    await Promise.all(chaves.map((chave) => caches.delete(chave)));
                }
            } catch (err) {
                console.warn('Erro ao limpar cache técnico:', err);
            }

            // Query string nova garante que essa recarga não seja servida por
            // nenhum cache antigo que ainda esteja de alguma forma ativo.
            window.location.href = window.location.pathname + '?atualizado=' + Date.now();
        }

        window.onload = () => {
            const agora = new Date();
            const dadosCarregados = carregarDadosNatais();
            if (!dadosCarregados) {
                document.getElementById('date').value = agora.toISOString().split('T')[0];
                document.getElementById('time').value = agora.toTimeString().split(' ')[0].substring(0, 5);
            }

            document.getElementById('cidadeInput').addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    buscarCoordenadas();
                }
            });
 
            renderizarPessoasSalvas();
            executarTudo();

            if ('speechSynthesis' in window) {
                carregarVozes();
                // Em vários navegadores (Chrome principalmente) a lista de vozes só
                // fica disponível de fato depois desse evento.
                speechSynthesis.onvoiceschanged = carregarVozes;
            }

            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('./sw.js').then((registro) => {
                    // Verifica se há uma versão mais nova assim que a página abre.
                    registro.update();
                }).catch(err => console.warn('Falha ao registrar Service Worker:', err));

                // Quando um novo Service Worker assume o controle (nova versão
                // publicada), recarrega a página uma única vez para garantir que
                // o conteúdo mais recente seja exibido, sem precisar de intervenção manual.
                let jaRecarregou = false;
                navigator.serviceWorker.addEventListener('controllerchange', () => {
                    if (jaRecarregou) return;
                    jaRecarregou = true;
                    window.location.reload();
                });
            }
        };
    </script>

//AQUI TERMINA O CÓDIGO JS DO ARQUIVO INDEX.HTML



//AQUI COMEÇA O CÓDIGO JS DO ARQUIVO RECOLUCAO_SOLAR.HTML

<script src="https://cdn.jsdelivr.net/npm/astronomy-engine/astronomy.browser.min.js"></script>
    <script>
        const SIGNOS_DADOS = [
            { nome: "Áries", simbolo: "♈︎", elemento: "Fogo", ritmo: "Cardinal", polaridade: "Yang" },
            { nome: "Touro", simbolo: "♉︎", elemento: "Terra", ritmo: "Fixo", polaridade: "Yin" },
            { nome: "Gêmeos", simbolo: "♊︎", elemento: "Ar", ritmo: "Mutável", polaridade: "Yang" },
            { nome: "Câncer", simbolo: "♋︎", elemento: "Água", ritmo: "Cardinal", polaridade: "Yin" },
            { nome: "Leão", simbolo: "♌︎", elemento: "Fogo", ritmo: "Fixo", polaridade: "Yang" },
            { nome: "Virgem", simbolo: "♍︎", elemento: "Terra", ritmo: "Mutável", polaridade: "Yin" },
            { nome: "Libras", simbolo: "♎︎", elemento: "Ar", ritmo: "Cardinal", polaridade: "Yang" },
            { nome: "Escorpião", simbolo: "♏︎", elemento: "Água", ritmo: "Fixo", polaridade: "Yin" },
            { nome: "Sagitário", simbolo: "♐︎", elemento: "Fogo", ritmo: "Mutável", polaridade: "Yang" },
            { nome: "Capricórnio", simbolo: "♑︎", elemento: "Terra", ritmo: "Cardinal", polaridade: "Yin" },
            { nome: "Aquário", simbolo: "♒︎", elemento: "Ar", ritmo: "Fixo", polaridade: "Yang" },
            { nome: "Peixes", simbolo: "♓︎", elemento: "Água", ritmo: "Mutável", polaridade: "Yin" }
        ];

        const DEFINICAO_CASAS = {
            1: "O Ascendente da RS indica a atitude geral do ano, como você se apresentará ao mundo e sua energia vital diária.",
            2: "Foco financeiro do ano, ganhos materiais, gestão de recursos e valorização dos seus talentos.",
            3: "Estudos no ano, comunicação, pequenas viagens, novos aprendizados e relação com irmãos/vizinhos.",
            4: "Ambiente familiar, mudanças de casa, assuntos imobiliários, vida íntima e raízes psicológicas do ano.",
            5: "Projetos criativos, romances, momentos de lazer, filhos e autoexpressão durante este ciclo anual.",
            6: "Rotina de trabalho, saúde do corpo, hábitos, produtividade diária e organização pessoal no ano.",
            7: "Parcerias de negócios, casamento, contratos importantes e como os relacionamentos evoluem no ano.",
            8: "Grandes transformações, encerramento de ciclos, investimentos financeiros conjuntos e regeneração profunda.",
            9: "Viagens internacionais, expansão acadêmica, desenvolvimento espiritual e mudanças na sua visão de mundo.",
            10: "Carreira, imagem pública, grandes metas profissionais e reconhecimento alcançado no ano.",
            11: "Rede de contatos, projetos sociais, amizades em destaque e metas de futuro para o novo ciclo.",
            12: "Processos internos, recolhimento, encerramentos, vida espiritual e cuidados com a mente e saúde invisível."
        };

        const DEFINICAO_ASTROS = {
            "Sol": "Sua luz e foco principal de consciência e energia durante este ano pessoal.",
            "Lua": "Suas necessidades emocionais, oscilações de humor e campo de segurança psíquica no ano.",
            "Mercúrio": "Onde sua mente estará mais ativa, estilo de comunicação e decisões intelectuais do ano.",
            "Vênus": "Onde o afeto, a harmonia, os valores e as oportunidades financeiras se concentram no ciclo.",
            "Marte": "Sua força de impulso, onde você aplicará mais energia, iniciativa ou enfrentará desafios.",
            "Júpiter": "Sua principal fonte de crescimento, sorte, expansão e novos horizontes no ano.",
            "Saturno": "A área que exigirá mais disciplina, responsabilidade, paciência e estruturação ao longo do ano.",
            "Urano": "Onde ocorrerão mudanças inesperadas, imprevistos e buscas por inovação e liberdade.",
            "Netuno": "Área de maior inspiração, sensibilidade e imaginação, mas que requer atenção a ilusões.",
            "Plutão": "Onde ocorrerão as transformações mais profundas, renascimentos e uso do poder pessoal.",
            "Ascendente (AC)": "A tônica geral da sua personalidade, saúde e postura frente às oportunidades do ano.",
            "Meio do Céu (MC)": "A culminância da sua reputação, carreira e maiores conquistas do ano.",
            "Descendente (DC)": "O tipo de parceria e as pessoas que ganham destaque na sua vida ao longo do ano.",
            "Fundo do Céu (IC)": "O clima do seu lar, família e vida íntima durante este ciclo anual.",
            "Vertex": "Encontros e situações de sabor kármico que podem surgir de forma inesperada no ano.",
            "Anti-vertex": "Ponto de impulso pessoal e gatilhos de mudança que se ativam ao longo do ciclo.",
            "Quíron": "A ferida ou sensibilidade que pede atenção e cuidado, e onde a cura pode acontecer no ano.",
            "Lilith": "Sua força instintiva e autonomia, e onde tabus ou desejos reprimidos podem emergir no ciclo.",
            "Roda da Fortuna": "Ponto de maior fluidez, sorte e alinhamento entre esforço e recompensa durante o ano.",
            "Nodo Norte": "A direção de crescimento e os passos de evolução que o ano convida você a dar.",
            "Nodo Sul": "A zona de conforto e os padrões antigos que podem pedir equilíbrio ao longo do ciclo.",
            "Ceres": "Como você vai nutrir a si mesmo e aos outros, e sua relação com o autocuidado no ano.",
            "Pallas": "Sua inteligência estratégica e capacidade de resolver problemas ao longo do ciclo.",
            "Juno": "Assuntos de compromisso, parcerias e acordos importantes que ganham destaque no ano.",
            "Vesta": "Onde você vai canalizar foco, devoção e energia vital de forma mais concentrada no ciclo.",
            "Pholus": "Pequenos gatilhos que podem provocar grandes reviravoltas ao longo do ano.",
            "Éris": "Onde questões de justiça, afirmação pessoal e discórdia construtiva podem surgir no ano.",
            "Sedna": "Processos de resgate de vulnerabilidades antigas e amadurecimento emocional profundo no ciclo.",
            "Haumea": "Áreas de renovação, fertilidade criativa e recomeços ao longo do ano.",
            "Makemake": "Sua conexão com a natureza, instinto e recursos práticos durante o ciclo.",
            "Aldebaran": "Estrela Real (Touro): destaque para honra, integridade e conquistas éticas no ano.",
            "Regulus": "Estrela Real (Leão): oportunidades de liderança e reconhecimento, com atenção para não agir por vingança.",
            "Antares": "Estrela Real (Escorpião): intensidade emocional, coragem e transformações passionais no ciclo."
        };
 
        const SIMBOLOS_ASTROS = {
            "Sol": "☉", "Lua": "☽", "Mercúrio": "☿", "Vênus": "♀", "Marte": "♂",
            "Júpiter": "♃", "Saturno": "♄", "Urano": "♅", "Netuno": "♆", "Plutão": "♇",
            "Ascendente (AC)": "AC", "Meio do Céu (MC)": "MC",
            "Descendente (DC)": "DC", "Fundo do Céu (IC)": "IC",
            "Vertex": "Vx", "Anti-vertex": "Avx",
            "Quíron": "⚷", "Lilith": "⚸", "Roda da Fortuna": "⊗",
            "Nodo Norte": "☊", "Nodo Sul": "☋",
            "Ceres": "⚳", "Pallas": "⚴", "Juno": "⚵", "Vesta": "⚶",
            "Pholus": "⯛",
            "Éris": "⯰", "Sedna": "⯲", "Haumea": "🩵", "Makemake": "🩲",
            "Aldebaran": "✶", "Regulus": "✶", "Antares": "✶"
        };
 
        const DEFINICAO_ASPECTOS = [
            { nome: "Conjunção", angulo: 0, orbe: 8, classe: "conj", simbolo: "☌", iconClass: "icon-conj" },
            { nome: "Sextil", angulo: 60, orbe: 6, classe: "sext", simbolo: "✶", iconClass: "icon-sext" },
            { nome: "Quadratura", angulo: 90, orbe: 7, classe: "quad", simbolo: "□", iconClass: "icon-quad" },
            { nome: "Trígono", angulo: 120, orbe: 8, classe: "trig", simbolo: "△", iconClass: "icon-trig" },
            { nome: "Oposição", angulo: 180, orbe: 8, classe: "opp", simbolo: "☍", iconClass: "icon-opp" }
        ];

        // Combinações temáticas: agrupam astros específicos por área da vida, para
        // uma leitura de IA focada apenas naquele recorte (posições + aspectos entre
        // eles) dentro do ano da Revolução Solar, em vez de uma análise ponto a ponto
        // ou do mapa anual inteiro.
        const TEMAS_COMBINACOES = [
            { titulo: "Amor e Relacionamentos", astros: ["Vênus", "Lua", "Marte", "Sol"], descricao: "Amor, afeto, linguagem da sedução, dinâmica de atração e necessidades emocionais em relacionamentos." },
            { titulo: "Mente e Aprendizado", astros: ["Mercúrio", "Lua", "Saturno"], descricao: "Raciocínio, capacidade de aprendizado, foco, retenção de memória e estilo de comunicação." },
            { titulo: "Vitalidade e Autoafirmação", astros: ["Sol", "Ascendente (AC)", "Marte"], descricao: "Vitalidade, força de ação, expressão do ego, presença física e autoafirmação." },
            { titulo: "Carreira e Vocação", astros: ["Saturno", "Meio do Céu (MC)", "Sol", "Mercúrio"], descricao: "Ambição profissional, vocação, construção de carreira, reputação pública e métodos de trabalho." },
            { titulo: "Psique Profunda", astros: ["Lua", "Plutão", "Netuno"], descricao: "Psique profunda, padrões inconscientes, mecanismos de defesa, traumas, intuição e imaginação." },
            { titulo: "Propósito de Vida", astros: ["Nodo Norte", "Nodo Sul", "Saturno", "Quíron"], descricao: "Propósito de vida, bagagem de passado, lições evolutivas, feridas estruturantes e amadurecimento." },
            { titulo: "Personalidade Básica", astros: ["Sol", "Lua"], descricao: "Equilíbrio básico da personalidade, integração entre a vontade consciente e o mundo emocional interior." },
            { titulo: "Atração e Polaridade", astros: ["Vênus", "Marte"], descricao: "Dinâmica de atração sexual, polaridade entre desejo (conquista) e receptividade (relação)." },
            { titulo: "Filosofia de Vida", astros: ["Júpiter", "Saturno"], descricao: "Filosofia de vida, capacidade de expansão equilibrada com limites, ética e estrutura de crescimento no mundo." },
            { titulo: "Expressão Artística", astros: ["Mercúrio", "Vênus"], descricao: "Expressão artística, diplomacia na fala, estética verbal e inteligência social." },
            { titulo: "Impulso e Resiliência", astros: ["Marte", "Plutão"], descricao: "Impulso de sobrevivência, capacidade de regeneração, resiliência física e força de vontade sob extrema pressão." },
            { titulo: "Sensibilidade e Acolhimento", astros: ["Lua", "Vênus"], descricao: "Sensibilidade, busca por conforto, autocuidado e forma de acolher pessoas e ambientes." }
        ];
 
        let ULTIMO_ASTROS = [];
        let ULTIMO_CASAS = [];
        let ULTIMO_ASC = 0;
        let ULTIMO_ASPECTOS = [];
        let ULTIMO_BALANCO = { elementos: {}, ritmos: {}, polaridades: {} };
        let ANO_SELECIONADO = new Date().getFullYear();
        let PERIODO_SELECIONADO = `${ANO_SELECIONADO}-${ANO_SELECIONADO + 1}`;
 
        function degToRad(deg) { return deg * Math.PI / 180; }
        function radToDeg(rad) { return rad * 180 / Math.PI; }
        function normalizar(graus) { return (graus % 360 + 360) % 360; }

        // Retrogradação: compara a longitude do corpo no instante da Revolução
        // Solar com a longitude dele 1 dia depois. Se o grau "andar pra trás"
        // (considerando a volta do 360°/0°), o corpo está retrógrado nesse
        // momento — aparente da Terra, exatamente como softwares profissionais
        // calculam.
        function ehRetrogrado(grauAtual, grauDepois) {
            let diff = grauDepois - grauAtual;
            diff = ((diff + 180) % 360 + 360) % 360 - 180;
            return diff < 0;
        }
 
        function formatarDMS(grausDecimal) {
            const gAbs = grausDecimal % 30;
            const g = Math.floor(gAbs);
            const m = Math.floor((gAbs - g) * 60);
            return `${g}°${m.toString().padStart(2, '0')}'`;
        }

        // ==========================================
        // ELEMENTOS ORBITAIS REAIS (cada corpo com sua própria época de referência)
        // ==========================================
        // Mesma tabela usada no Mapa Natal. a = semieixo maior (UA), e = excentricidade,
        // i = inclinação (graus), om = longitude do nodo ascendente (graus),
        // w = argumento do periélio (graus), M0 = anomalia média na época (graus),
        // epoch = data juliana da época de referência (fonte: JPL Small-Body Database,
        // elementos osculadores recentes).
        //
        // ⚠️ Níveis de confiança diferentes (ver também NIVEL_PRECISAO mais abaixo,
        // usado para colorir os ícones na roda):
        // - Ceres, Pallas, Juno, Vesta: cinturão principal, órbitas estáveis e pouco
        //   perturbadas por planetas gigantes — confiança "média" (amarelo).
        // - Quíron, Pholus: centauros que cruzam as órbitas de Saturno/Urano/Netuno,
        //   mais sensíveis a perturbações não modeladas neste cálculo de 2 corpos —
        //   confiança "baixa" (vermelho), mesmo com elementos reais e época recente.
        // - Éris, Sedna, Haumea, Makemake: TNOs de período muito longo (283 a ~11.400
        //   anos) — confiança "baixa" (vermelho) pela mesma razão.
        // - Todos os 10 corpos abaixo usam elementos orbitais REAIS (JPL Small-Body
        //   Database, via Wikipedia), cada um com sua própria época de referência
        //   recente (2020-2025) — não mais uma única estimativa arbitrária para o ano
        //   2000. Cálculo por órbita de 2 corpos (sem perturbações planetárias).
        const ELEMENTOS_KEPLER = {
            "Quíron":   { epoch: 2459396.5, a: 13.70,   e: 0.3772,  i: 6.9299,  om: 209.27,  w: 339.71,  M0: 180.70  },
            "Ceres":    { epoch: 2460200.5, a: 2.767,   e: 0.0789,  i: 10.59,   om: 80.25,   w: 73.42,   M0: 60.08   },
            "Pallas":   { epoch: 2460200.5, a: 2.77,    e: 0.2302,  i: 34.93,   om: 172.9,   w: 310.9,   M0: 40.6    },
            "Juno":     { epoch: 2460200.5, a: 2.67,    e: 0.2562,  i: 12.991,  om: 169.84,  w: 247.74,  M0: 37.02   },
            "Vesta":    { epoch: 2460200.5, a: 2.36,    e: 0.0894,  i: 7.1422,  om: 103.71,  w: 151.66,  M0: 169.4   },
            "Pholus":   { epoch: 2459396.5, a: 20.348,  e: 0.5698,  i: 24.617,  om: 119.44,  w: 354.77,  M0: 117.26  },
            "Éris":     { epoch: 2461000.5, a: 67.69,   e: 0.44,    i: 44.18,   om: 36.02,   w: 151.66,  M0: 205.11  },
            "Sedna":    { epoch: 2458900.5, a: 506.0,   e: 0.8496,  i: 11.9307, om: 144.248, w: 311.352, M0: 358.117 },
            "Haumea":   { epoch: 2459200.5, a: 43.116,  e: 0.19642, i: 28.2137, om: 122.167, w: 239.041, M0: 218.205 },
            "Makemake": { epoch: 2461000.5, a: 45.499,  e: 0.1604,  i: 29.002,  om: 79.441,  w: 296.065, M0: 170.497 }
        };

        // Classificação de confiança de cada ponto, usada para colorir os ícones na
        // roda (azul = alta, amarelo = média, vermelho = mais baixa).
        const NIVEL_PRECISAO = {
            "Sol": "alta", "Lua": "alta", "Mercúrio": "alta", "Vênus": "alta", "Marte": "alta",
            "Júpiter": "alta", "Saturno": "alta", "Urano": "alta", "Netuno": "alta", "Plutão": "alta",
            "Ascendente (AC)": "alta", "Descendente (DC)": "alta",
            "Meio do Céu (MC)": "alta", "Fundo do Céu (IC)": "alta",
            "Vertex": "alta", "Anti-vertex": "alta",
            "Nodo Norte": "alta", "Nodo Sul": "alta", "Lilith": "alta", "Roda da Fortuna": "alta",
            "Aldebaran": "alta", "Regulus": "alta", "Antares": "alta",
            "Ceres": "media", "Pallas": "media", "Juno": "media", "Vesta": "media",
            "Quíron": "baixa", "Pholus": "baixa",
            "Éris": "baixa", "Sedna": "baixa", "Haumea": "baixa", "Makemake": "baixa"
        };
        const CORES_PRECISAO = { alta: "#58a6ff", media: "#e3b341", baixa: "#f85149" };

        function dataParaJD(dataUTC) {
            return (dataUTC.getTime() / 86400000) + 2440587.5;
        }

        // Resolve a equação de Kepler M = E - e*sin(E) por Newton-Raphson
        function resolverKepler(Mrad, e) {
            let E = Mrad;
            for (let k = 0; k < 60; k++) {
                const dE = (E - e * Math.sin(E) - Mrad) / (1 - e * Math.cos(E));
                E -= dE;
                if (Math.abs(dE) < 1e-9) break;
            }
            return E;
        }

        // Longitude eclíptica GEOCÊNTRICA real de um corpo a partir de elementos
        // keplerianos heliocêntricos + posição heliocêntrica real da Terra (via
        // astronomy-engine).
        function calcularLongitudeKepleriana(el, dataUTC) {
            const periodoDias = Math.pow(el.a, 1.5) * 365.25;
            const n = 360 / periodoDias;
            const dt = dataParaJD(dataUTC) - el.epoch;
            const M = normalizar(el.M0 + n * dt);
            const E = resolverKepler(degToRad(M), el.e);

            const xOrb = el.a * (Math.cos(E) - el.e);
            const yOrb = el.a * Math.sqrt(1 - el.e * el.e) * Math.sin(E);

            const wRad = degToRad(el.w), iRad = degToRad(el.i), omRad = degToRad(el.om);
            const cosO = Math.cos(omRad), sinO = Math.sin(omRad);
            const cosW = Math.cos(wRad), sinW = Math.sin(wRad);
            const cosI = Math.cos(iRad), sinI = Math.sin(iRad);

            const xHelio = (cosO * cosW - sinO * sinW * cosI) * xOrb + (-cosO * sinW - sinO * cosW * cosI) * yOrb;
            const yHelio = (sinO * cosW + cosO * sinW * cosI) * xOrb + (-sinO * sinW + cosO * cosW * cosI) * yOrb;

            const terraHelioEq = Astronomy.HelioVector(Astronomy.Body.Earth, dataUTC);
            const terraHelioEcl = Astronomy.Ecliptic(terraHelioEq).vec;

            const gx = xHelio - terraHelioEcl.x;
            const gy = yHelio - terraHelioEcl.y;

            return normalizar(radToDeg(Math.atan2(gy, gx)));
        }

        async function buscarCoordenadas() {
            const cidadeStr = document.getElementById('cidadeInput').value.trim();
            const statusDiv = document.getElementById('geoStatus');
            if (!cidadeStr) return;

            statusDiv.style.display = 'block';
            statusDiv.style.color = '#8b949e';
            statusDiv.textContent = 'Buscando coordenadas...';

            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(cidadeStr)}&limit=1`);
                const data = await response.json();

                if (data && data.length > 0) {
                    const lat = parseFloat(data[0].lat).toFixed(4);
                    const lon = parseFloat(data[0].lon).toFixed(4);
                    
                    document.getElementById('lat').value = lat;
                    document.getElementById('lon').value = lon;
                    
                    statusDiv.style.color = 'var(--terra)';
                    statusDiv.textContent = `✓ Local encontrado: Lat ${lat}, Lon ${lon}`;
                } else {
                    statusDiv.style.color = 'var(--fogo)';
                    statusDiv.textContent = 'Local não encontrado. Insira a Lat/Lon manualmente.';
                }
            } catch (err) {
                console.error(err);
                statusDiv.style.color = 'var(--fogo)';
                statusDiv.textContent = 'Erro ao buscar cidade. Insira a Lat/Lon manualmente.';
            }
        }
 
        function calcularRevolucaoSolar() {
            const anoRS = parseInt(document.getElementById('anoRevolucao').value, 10);
            ANO_SELECIONADO = anoRS;
            PERIODO_SELECIONADO = `${anoRS}-${anoRS + 1}`;

            const dateVal = document.getElementById('date').value;
            const timeVal = document.getElementById('time').value;
            const fuso = parseFloat(document.getElementById('fuso').value);
            const lat = parseFloat(document.getElementById('lat').value);
            const lon = parseFloat(document.getElementById('lon').value);
 
            const [year, month, day] = dateVal.split('-').map(Number);
            const [hours, minutes] = timeVal.split(':').map(Number);
 
            // Cálculo do Juliano para determinar o Sol Natal
            const hourUTC = hours + (minutes / 60) - fuso;
            const dataNascUTC = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0) + hourUTC * 3600000);

            function longitudeEclipticaReal(corpo, data) {
                const vetor = Astronomy.GeoVector(corpo, data, true);
                return normalizar(Astronomy.Ecliptic(vetor).elon);
            }

            // Longitude solar natal REAL (posição geocêntrica aparente exata do Sol no
            // nascimento, via astronomy-engine — a mesma efeméride usada no Mapa Natal,
            // substituindo a fórmula aproximada do Sol médio usada antes).
            const solNatal = longitudeEclipticaReal(Astronomy.Body.Sun, dataNascUTC);

            // A Revolução Solar acontece no instante EXATO em que o Sol volta ao grau
            // natal — isso NÃO é necessariamente no mesmo dia/hora do aniversário civil
            // (o ano trópico tem ~365,2422 dias, então o retorno "desliza" ao longo do
            // dia a cada ano e dá saltos nos anos bissextos). Em vez de iterar sobre uma
            // fórmula aproximada, usamos a própria rotina de busca do astronomy-engine
            // (Astronomy.SearchSunLongitude), que localiza esse instante com precisão de
            // segundos — é o que garante Ascendente, Casas e planetas corretos.
            //
            // ⚠️ CORREÇÃO IMPORTANTE: Astronomy.SearchSunLongitude busca sempre PARA
            // FRENTE a partir da data de início. A versão anterior começava a busca ao
            // meio-dia UTC do próprio dia civil do aniversário no ano "anoRS". Se o
            // retorno solar exato daquele ano ocorresse ANTES desse meio-dia UTC (o que
            // é comum e depende do horário/fuso de nascimento), a busca pulava
            // erroneamente para o retorno do ANO SEGUINTE — fazendo a Revolução Solar
            // inteira "adiantar" um ano (Ascendente, casas e planetas todos do ano
            // errado). A correção: iniciar a busca 30 dias ANTES do aniversário civil,
            // garantindo que o ponto de partida sempre fique bem antes do retorno
            // solar real daquele ano (essa margem é segura, pois o retorno do ano
            // anterior fica ~335 dias antes — bem longe dos 30 dias de margem).
            const dataEstimativa = new Date(Date.UTC(anoRS, month - 1, day, 12, 0, 0) - 30 * 86400000);
            const buscaRS = Astronomy.SearchSunLongitude(solNatal, dataEstimativa, 400);
            const dataRS = buscaRS.date; // instante exato (UTC) da Revolução Solar

            let jdRS = dataParaJD(dataRS);
            let TRS = (jdRS - 2451545.0) / 36525.0;

            // GMST correto (Meeus): usa a taxa de rotação da Terra por DIA (360.98564736629°/dia)
            let diasDesdeJ2000RS = jdRS - 2451545.0;
            let gmst = 280.46061837 + 360.98564736629 * diasDesdeJ2000RS + 0.000387933 * TRS * TRS - (TRS * TRS * TRS) / 38710000.0;
            gmst = normalizar(gmst);
            let lst = normalizar(gmst + lon);
            let obliq = degToRad(23.4392911 - 0.0130042 * TRS);
 
            let mc = normalizar(radToDeg(Math.atan2(Math.sin(degToRad(lst)), Math.cos(degToRad(lst)) * Math.cos(obliq))));
            // atan2 já resolve o quadrante corretamente — não é necessário (nem correto)
            // forçar o resultado para nenhuma faixa fixa de graus.
            let asc = normalizar(radToDeg(Math.atan2(Math.cos(degToRad(lst)), -Math.sin(degToRad(lst)) * Math.cos(obliq) - Math.tan(degToRad(lat)) * Math.sin(obliq))));

            // Posições REAIS dos planetas no instante exato da RS (via astronomy-engine,
            // mesma classe de precisão de efeméride usada por softwares profissionais —
            // substituindo as antigas curvas senoidais fictícias de Lua/Mercúrio/Vênus/Marte).
            const sol = longitudeEclipticaReal(Astronomy.Body.Sun, dataRS); // deve coincidir com solNatal
            const lua = normalizar(Astronomy.EclipticGeoMoon(dataRS).lon);
            const mercurio = longitudeEclipticaReal(Astronomy.Body.Mercury, dataRS);
            const venus = longitudeEclipticaReal(Astronomy.Body.Venus, dataRS);
            const marte = longitudeEclipticaReal(Astronomy.Body.Mars, dataRS);
            const jupiter = longitudeEclipticaReal(Astronomy.Body.Jupiter, dataRS);
            const saturno = longitudeEclipticaReal(Astronomy.Body.Saturn, dataRS);
            const urano = longitudeEclipticaReal(Astronomy.Body.Uranus, dataRS);
            const netuno = longitudeEclipticaReal(Astronomy.Body.Neptune, dataRS);
            const plutao = longitudeEclipticaReal(Astronomy.Body.Pluto, dataRS);

            // Retrogradação dos planetas: compara a posição no instante exato da RS
            // com a posição 1 dia depois. Sol, Lua, ângulos, nodos, Lilith, Roda da
            // Fortuna e estrelas fixas nunca entram aqui (não retrogradam de
            // verdade, ou o conceito não se aplica a eles).
            const dataSeguinteRS = new Date(dataRS.getTime() + 86400000);
            const RETROGRADOS = {
                "Mercúrio": ehRetrogrado(mercurio, longitudeEclipticaReal(Astronomy.Body.Mercury, dataSeguinteRS)),
                "Vênus": ehRetrogrado(venus, longitudeEclipticaReal(Astronomy.Body.Venus, dataSeguinteRS)),
                "Marte": ehRetrogrado(marte, longitudeEclipticaReal(Astronomy.Body.Mars, dataSeguinteRS)),
                "Júpiter": ehRetrogrado(jupiter, longitudeEclipticaReal(Astronomy.Body.Jupiter, dataSeguinteRS)),
                "Saturno": ehRetrogrado(saturno, longitudeEclipticaReal(Astronomy.Body.Saturn, dataSeguinteRS)),
                "Urano": ehRetrogrado(urano, longitudeEclipticaReal(Astronomy.Body.Uranus, dataSeguinteRS)),
                "Netuno": ehRetrogrado(netuno, longitudeEclipticaReal(Astronomy.Body.Neptune, dataSeguinteRS)),
                "Plutão": ehRetrogrado(plutao, longitudeEclipticaReal(Astronomy.Body.Pluto, dataSeguinteRS))
            };

            // Ângulos Derivados
            const dc = normalizar(asc + 180);
            const ic = normalizar(mc + 180);
            // Vertex/Anti-vertex — fórmula trigonométrica real (método da co-latitude,
            // usado por softwares e tabelas de casas tradicionais): calcula-se um
            // "Ascendente" com a MESMA fórmula do Ascendente comum, mas usando a
            // co-latitude (90° − latitude) no lugar da latitude. O resultado disso é o
            // Anti-vertex; o Vertex é o ponto oposto (+180°). Substituiu a fórmula
            // simplificada anterior (asc + 180 − seno(asc)×12), que não era a fórmula
            // astronômica padrão.
            const antiVertex = normalizar(radToDeg(Math.atan2(Math.cos(degToRad(lst)), -Math.sin(degToRad(lst)) * Math.cos(obliq) - Math.tan(degToRad(90 - lat)) * Math.sin(obliq))));
            const vertex = normalizar(antiVertex + 180);

            // Pontos e Nodos
            // Roda da Fortuna (Parte da Fortuna): a fórmula tradicional muda entre mapa
            // diurno (Sol acima do horizonte) e noturno (Sol abaixo do horizonte).
            const mapaDiurno = normalizar(sol - asc) >= 180;
            const rodaFortuna = mapaDiurno
                ? normalizar(asc + lua - sol)
                : normalizar(asc + sol - lua);
            const nodoNorte = normalizar(125.044558 - 1934.1361849 * TRS);
            const nodoSul = normalizar(nodoNorte + 180);

            // Centauros, Asteroides e TNOs — mecânica orbital kepleriana REAL (elementos
            // orbitais osculadores + posição heliocêntrica real da Terra), substituindo
            // as antigas curvas senoidais/lineares fictícias. Ver ELEMENTOS_KEPLER e
            // calcularLongitudeKepleriana() no topo do script.
            const quiron = calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Quíron"], dataRS);
            // Lilith (Lua Negra média) = longitude média do apogeu lunar (fórmula real, Meeus)
            const meanPerigeuLunar = 83.3532465 + 4069.0137287 * TRS - 0.0103200 * TRS * TRS
                                    - Math.pow(TRS, 3) / 80053 + Math.pow(TRS, 4) / 18999000;
            const lilith = normalizar(meanPerigeuLunar + 180);
            const ceres = calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Ceres"], dataRS);
            const pallas = calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Pallas"], dataRS);
            const juno = calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Juno"], dataRS);
            const vesta = calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Vesta"], dataRS);
            const pholus = calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Pholus"], dataRS);
            // "Cápulo" foi removido: não corresponde a nenhum corpo celeste catalogado
            // (IAU/JPL) — era um deslocamento simbólico arbitrário sem base real.

            // Transnetunianos (TNOs)
            const eris = calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Éris"], dataRS);
            const sedna = calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Sedna"], dataRS);
            const haumea = calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Haumea"], dataRS);
            const makemake = calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Makemake"], dataRS);

            // Retrogradação dos corpos menores (mesma técnica: compara com 1 dia depois)
            RETROGRADOS["Quíron"] = ehRetrogrado(quiron, calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Quíron"], dataSeguinteRS));
            RETROGRADOS["Ceres"] = ehRetrogrado(ceres, calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Ceres"], dataSeguinteRS));
            RETROGRADOS["Pallas"] = ehRetrogrado(pallas, calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Pallas"], dataSeguinteRS));
            RETROGRADOS["Juno"] = ehRetrogrado(juno, calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Juno"], dataSeguinteRS));
            RETROGRADOS["Vesta"] = ehRetrogrado(vesta, calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Vesta"], dataSeguinteRS));
            RETROGRADOS["Pholus"] = ehRetrogrado(pholus, calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Pholus"], dataSeguinteRS));
            RETROGRADOS["Éris"] = ehRetrogrado(eris, calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Éris"], dataSeguinteRS));
            RETROGRADOS["Sedna"] = ehRetrogrado(sedna, calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Sedna"], dataSeguinteRS));
            RETROGRADOS["Haumea"] = ehRetrogrado(haumea, calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Haumea"], dataSeguinteRS));
            RETROGRADOS["Makemake"] = ehRetrogrado(makemake, calcularLongitudeKepleriana(ELEMENTOS_KEPLER["Makemake"], dataSeguinteRS));

            // Estrelas Fixas — precessão real: ~50,29"/ano = 1,39697°/século (constante IAU).
            // O valor anterior (0,01396) estava ~100x menor que o correto.
            const precessao = TRS * 1.39697;
            const aldebaran = normalizar(69.78 + precessao);
            const regulus = normalizar(149.83 + precessao);
            const antares = normalizar(249.76 + precessao);
 
            const astros = [
                { nome: "Sol", grau: sol }, { nome: "Lua", grau: lua },
                { nome: "Mercúrio", grau: mercurio }, { nome: "Vênus", grau: venus },
                { nome: "Marte", grau: marte }, { nome: "Júpiter", grau: jupiter },
                { nome: "Saturno", grau: saturno }, { nome: "Urano", grau: urano },
                { nome: "Netuno", grau: netuno }, { nome: "Plutão", grau: plutao },

                { nome: "Ascendente (AC)", grau: asc }, { nome: "Descendente (DC)", grau: dc },
                { nome: "Meio do Céu (MC)", grau: mc }, { nome: "Fundo do Céu (IC)", grau: ic },
                { nome: "Vertex", grau: vertex }, { nome: "Anti-vertex", grau: antiVertex },

                { nome: "Roda da Fortuna", grau: rodaFortuna },
                { nome: "Nodo Norte", grau: nodoNorte }, { nome: "Nodo Sul", grau: nodoSul },
                { nome: "Quíron", grau: quiron }, { nome: "Lilith", grau: lilith },

                { nome: "Ceres", grau: ceres }, { nome: "Pallas", grau: pallas },
                { nome: "Juno", grau: juno }, { nome: "Vesta", grau: vesta },

                { nome: "Pholus", grau: pholus },

                { nome: "Éris", grau: eris }, { nome: "Sedna", grau: sedna },
                { nome: "Haumea", grau: haumea }, { nome: "Makemake", grau: makemake },

                { nome: "Aldebaran", grau: aldebaran }, { nome: "Regulus", grau: regulus },
                { nome: "Antares", grau: antares }
            ];

            astros.forEach(a => { a.retrogrado = RETROGRADOS[a.nome] || false; });
 
            const casas = Array.from({ length: 12 }, (_, i) => normalizar(asc + (i * 30)));
 
            // Atribuição de casa considerando a passagem por 0°/360°: a cúspide de uma
            // casa pode "virar o zero" (ex: Casa 9 em 350° e Casa 10 em 20°). A versão
            // anterior comparava apenas casas[i] < grau < casas[i+1] assumindo ordem
            // crescente, então QUALQUER casa em que essa virada ocorresse jogava os
            // astros incorretamente para a Casa 12 (fallback), em vez da casa correta.
            astros.forEach(a => {
                let casaEncontrada = 12;
                for (let i = 0; i < 12; i++) {
                    const inicio = casas[i];
                    const fim = casas[(i + 1) % 12];
                    if (fim > inicio) {
                        if (a.grau >= inicio && a.grau < fim) { casaEncontrada = i + 1; break; }
                    } else {
                        if (a.grau >= inicio || a.grau < fim) { casaEncontrada = i + 1; break; }
                    }
                }
                a.casa = casaEncontrada;
            });
 
            return { astros, casas, asc };
        }
 
        function calcularAspectos(astros) {
            const aspectos = [];
            for (let i = 0; i < astros.length; i++) {
                for (let j = i + 1; j < astros.length; j++) {
                    const a1 = astros[i], a2 = astros[j];
                    let diff = Math.abs(a1.grau - a2.grau);
                    if (diff > 180) diff = 360 - diff;
 
                    DEFINICAO_ASPECTOS.forEach(asp => {
                        const orbeAtual = Math.abs(diff - asp.angulo);
                        if (orbeAtual <= asp.orbe) {
                            aspectos.push({
                                astro1: a1.nome, astro2: a2.nome, aspecto: asp.nome,
                                classe: asp.classe, simbolo: asp.simbolo, iconClass: asp.iconClass, orbe: orbeAtual.toFixed(1)
                            });
                        }
                    });
                }
            }
            return aspectos;
        }
 
        function renderizarBalanço(astros) {
            const elementos = { Fogo: 0, Terra: 0, Ar: 0, Água: 0 };
            const ritmos = { Cardinal: 0, Fixo: 0, Mutável: 0 };
            const polaridades = { Yang: 0, Yin: 0 };
 
            const planetasPrincipais = astros.filter(a => ["Sol", "Lua", "Mercúrio", "Vênus", "Marte", "Júpiter", "Saturno", "Urano", "Netuno", "Plutão"].includes(a.nome));
            
            planetasPrincipais.forEach(a => {
                const sIdx = Math.floor(a.grau / 30) % 12;
                const signo = SIGNOS_DADOS[sIdx];
                elementos[signo.elemento]++;
                ritmos[signo.ritmo]++;
                polaridades[signo.polaridade]++;
            });
 
            const total = planetasPrincipais.length;
            ULTIMO_BALANCO = { elementos, ritmos, polaridades };
            const coresElementos = { Fogo: "var(--fogo)", Terra: "var(--terra)", Ar: "var(--ar)", Água: "var(--agua)" };
 
            document.getElementById('elementosBars').innerHTML = Object.keys(elementos).map(k => {
                const pct = Math.round((elementos[k] / total) * 100);
                return `
                    <div class="progress-item">
                        <div class="progress-info"><span>${k} (${elementos[k]})</span><span>${pct}%</span></div>
                        <div class="bar-bg"><div class="bar-fill" style="width:${pct}%; background:${coresElementos[k]}"></div></div>
                    </div>
                `;
            }).join('');
 
            document.getElementById('ritmosBars').innerHTML = Object.keys(ritmos).map(k => {
                const pct = Math.round((ritmos[k] / total) * 100);
                return `
                    <div class="progress-item">
                        <div class="progress-info"><span>${k} (${ritmos[k]})</span><span>${pct}%</span></div>
                        <div class="bar-bg"><div class="bar-fill" style="width:${pct}%; background:var(--destaque)"></div></div>
                    </div>
                `;
            }).join('');
 
            document.getElementById('polaridadesBars').innerHTML = Object.keys(polaridades).map(k => {
                const pct = Math.round((polaridades[k] / total) * 100);
                const label = k === "Yang" ? "Yang (Masculino/Ativo)" : "Yin (Feminino/Receptivo)";
                return `
                    <div class="progress-item">
                        <div class="progress-info"><span>${label}</span><span>${pct}%</span></div>
                        <div class="bar-bg"><div class="bar-fill" style="width:${pct}%; background:var(--sol)"></div></div>
                    </div>
                `;
            }).join('');
        }
 
        function renderizarAstrosExpansivel(astros) {
            const container = document.getElementById('astrosExpandList');
            const ordensSalvas = obterOrdensSalvas();
            container.innerHTML = astros.map(a => {
                const sIdx = Math.floor(a.grau / 30) % 12;
                const signo = SIGNOS_DADOS[sIdx];
                const simAstro = SIMBOLOS_ASTROS[a.nome] || '';
                const explicacaoAstro = DEFINICAO_ASTROS[a.nome] || "";
                const nivel = NIVEL_PRECISAO[a.nome] || "alta";
                const corNivel = CORES_PRECISAO[nivel];
                const rotuloNivel = nivel === 'alta' ? 'Confiabilidade alta' : (nivel === 'media' ? 'Confiabilidade média' : 'Confiabilidade mais baixa');
                const jaFeito = ordensSalvas.has(2000 + ORDEM_ASTROS_BASE.indexOf(a.nome));
                const marcaR = a.retrogrado ? '<span class="marca-retrogrado" title="Retrógrado">℞</span>' : '';

                return `
                    <div class="expand-card">
                        <div class="expand-header" onclick="this.parentElement.classList.toggle('open')">
                            <div class="expand-title">
                                <span title="${rotuloNivel}" style="display:inline-block; width:8px; height:8px; border-radius:50%; background:${corNivel}; flex-shrink:0;"></span>
                                <span style="color:var(--sol); font-size:1.1rem;">${simAstro}</span>
                                <span>${a.nome}${marcaR} em ${signo.nome} ${signo.simbolo}</span>
                            </div>
                            <div style="display:flex; align-items:center; gap:8px;">
                                ${indicadorFeitoHtml(jaFeito)}
                                <span class="expand-badge">Casa ${a.casa}</span>
                                <span class="arrow-icon">▼</span>
                            </div>
                        </div>
                        <div class="expand-content">
                            <p style="margin-bottom: 8px;"><strong>Efeito Anual:</strong> ${explicacaoAstro}</p>
                            <p style="margin-bottom: 8px;"><strong>Foco no Ano (${PERIODO_SELECIONADO}):</strong> Esta energia atua com a atitude de <strong>${signo.nome}</strong> e concentrará eventos e aprendizados na <strong>Casa ${a.casa}</strong> ao longo do ano.${a.retrogrado ? ' Está <strong>retrógrado</strong> nesta Revolução Solar, o que muda a forma como essa energia se expressa no ciclo.' : ''}</p>
                            <p style="margin-bottom: 6px;"><strong>Posição Exata:</strong> ${formatarDMS(a.grau)}${a.retrogrado ? ' ℞' : ''}</p>
                            <p style="margin-bottom: 6px;"><strong>${rotuloNivel}</strong></p>
                            
                            <button class="btn-ia btn-ia-inline" onclick="event.stopPropagation(); dispararAnaliseIA('${a.nome}', '${signo.nome}', ${a.casa}, ${a.retrogrado ? 'true' : 'false'})">
                                ✦ Previsão Anual da IA
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
        }

        function renderizarCasasExpansivel(casas, astros) {
            const container = document.getElementById('casasExpandList');
            const ordensSalvas = obterOrdensSalvas();
            container.innerHTML = casas.map((grauCasa, index) => {
                const numCasa = index + 1;
                const sIdx = Math.floor(grauCasa / 30) % 12;
                const signoCuspide = SIGNOS_DADOS[sIdx];
                
                const astrosNaCasa = astros.filter(a => a.casa === numCasa);
                const nomesAstros = astrosNaCasa.length > 0 
                    ? astrosNaCasa.map(a => `${SIMBOLOS_ASTROS[a.nome] || ''} ${a.nome}${a.retrogrado ? ' ℞' : ''}`).join(', ')
                    : 'Nenhum planeta presente (Casa Vazia)';

                const ocupantesNomes = astrosNaCasa.map(a => `${a.nome}${a.retrogrado ? ' (retrógrado)' : ''}`).join(', ') || 'nenhum astro relevante';
                const jaFeito = ordensSalvas.has(3000 + numCasa);

                return `
                    <div class="expand-card">
                        <div class="expand-header" onclick="this.parentElement.classList.toggle('open')">
                            <div class="expand-title">
                                <span style="color:var(--destaque); font-weight:bold;">Casa ${numCasa}</span>
                                <span>em ${signoCuspide.nome} ${signoCuspide.simbolo}</span>
                            </div>
                            <div style="display:flex; align-items:center; gap:8px;">
                                ${indicadorFeitoHtml(jaFeito)}
                                <span class="expand-badge">${astrosNaCasa.length} astro(s)</span>
                                <span class="arrow-icon">▼</span>
                            </div>
                        </div>
                        <div class="expand-content">
                            <p style="margin-bottom: 8px;"><strong>Área de Foco no Ano:</strong> ${DEFINICAO_CASAS[numCasa]}</p>
                            <p style="margin-bottom: 8px;"><strong>Cúspide do Ano:</strong> ${signoCuspide.nome} (${formatarDMS(grauCasa)})</p>
                            <p style="margin-bottom: 6px;"><strong>Ocupantes Anuais:</strong> ${nomesAstros}</p>
                            
                            <button class="btn-ia btn-ia-inline" onclick="event.stopPropagation(); dispararAnaliseCasaIA(${numCasa}, '${signoCuspide.nome}', '${ocupantesNomes}')">
                                ✦ Análise da Casa no Ano com IA
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
        }
 
        function renderizarAspectosExpansivel(aspectos) {
            const container = document.getElementById('aspectosExpandList');
            const ordensSalvas = obterOrdensSalvas();
            container.innerHTML = aspectos.map((asp, indice) => {
                const sim1 = SIMBOLOS_ASTROS[asp.astro1] || '';
                const sim2 = SIMBOLOS_ASTROS[asp.astro2] || '';
                const jaFeito = ordensSalvas.has(5000 + indice);

                return `
                    <div class="expand-card">
                        <div class="expand-header" onclick="this.parentElement.classList.toggle('open')">
                            <div class="expand-title">
                                <span>${sim1} ${asp.astro1} ${asp.simbolo} ${asp.astro2} ${sim2}</span>
                            </div>
                            <div style="display:flex; align-items:center; gap:8px;">
                                ${indicadorFeitoHtml(jaFeito)}
                                <span class="badge-aspecto ${asp.classe}">${asp.aspecto}</span>
                                <span class="arrow-icon">▼</span>
                            </div>
                        </div>
                        <div class="expand-content">
                            <p style="margin-bottom: 8px;"><strong>Dinâmica do Ano:</strong> Conexão em <strong>${asp.aspecto}</strong> impactando os eventos e clima do ano de ${PERIODO_SELECIONADO}.</p>
                            <p style="margin-bottom: 6px;"><strong>Orbe de Precisão:</strong> ${asp.orbe}°</p>
                            
                            <button class="btn-ia btn-ia-inline" onclick="event.stopPropagation(); dispararAnaliseAspectoIA('${asp.astro1}', '${asp.aspecto}', '${asp.astro2}')">
                                ✦ Interpretar Dinâmica Anual com IA
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
        }
 
        function renderizarTemas(astros) {
            const container = document.getElementById('temasExpandList');
            if (!container) return;
            const ordensSalvas = obterOrdensSalvas();

            container.innerHTML = TEMAS_COMBINACOES.map((tema, indice) => {
                const astrosEncontrados = tema.astros
                    .map(nome => astros.find(a => a.nome === nome))
                    .filter(Boolean);

                const resumoPosicoes = astrosEncontrados.map(a => {
                    const sIdx = Math.floor(a.grau / 30) % 12;
                    const signo = SIGNOS_DADOS[sIdx];
                    const sim = SIMBOLOS_ASTROS[a.nome] || '';
                    return `${sim} ${a.nome}${a.retrogrado ? ' ℞' : ''} em ${signo.nome} (Casa ${a.casa})`;
                }).join(' · ');

                const jaFeito = ordensSalvas.has(6000 + indice);

                return `
                    <div class="expand-card">
                        <div class="expand-header" onclick="this.parentElement.classList.toggle('open')">
                            <div class="expand-title">
                                <span>${tema.titulo}</span>
                            </div>
                            <div style="display:flex; align-items:center; gap:8px;">
                                ${indicadorFeitoHtml(jaFeito)}
                                <span class="expand-badge">${tema.astros.length} astros</span>
                                <span class="arrow-icon">▼</span>
                            </div>
                        </div>
                        <div class="expand-content">
                            <p style="margin-bottom: 8px;"><strong>Sobre este tema:</strong> ${tema.descricao}</p>
                            <p style="margin-bottom: 8px; font-size:0.8rem;">${resumoPosicoes || 'Calcule a Revolução Solar para ver as posições.'}</p>

                            <button class="btn-ia btn-ia-inline" onclick="event.stopPropagation(); dispararAnaliseTemaIA(${indice})">
                                ✦ Analisar este Tema com IA
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
        }

        function gerarMatrizHtml(astros, aspectos) {
            let html = "";
            const total = astros.length;
 
            for (let i = 0; i < total; i++) {
                html += "<tr>";
                for (let j = 0; j < total; j++) {
                    if (i === j) {
                        html += `<th class="header-astro" title="${astros[i].nome}">${SIMBOLOS_ASTROS[astros[i].nome]}</th>`;
                    } else if (i > j) {
                        const asp = aspectos.find(a => (a.astro1 === astros[i].nome && a.astro2 === astros[j].nome) || (a.astro2 === astros[i].nome && a.astro1 === astros[j].nome));
                        if (asp) {
                            html += `<td class="cell-aspect ${asp.iconClass}" title="${asp.aspecto}">${asp.simbolo}</td>`;
                        } else {
                            html += `<td class="cell-aspect"></td>`;
                        }
                    } else {
                        html += `<td class="empty-cell"></td>`;
                    }
                }
                html += "</tr>";
            }
 
            document.getElementById('matrixAspectos').innerHTML = html;
        }
 
        function desenharRodaSVG(astros, casas, asc) {
            const svg = document.getElementById('chartSvg');
            svg.innerHTML = '';
            const cx = 300, cy = 300, rOuter = 285, rInner = 230, rCasas = 160, rCore = 80;
 
            const grauParaAngulo = (g) => (180 + (g - asc)) % 360;
            const polarToCart = (r, a) => {
                const rad = (a - 180) * Math.PI / 180;
                return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
            };
 
            for (let i = 0; i < 12; i++) {
                const aIn = grauParaAngulo(i * 30), aFim = grauParaAngulo((i + 1) * 30);
                const p1 = polarToCart(rOuter, aIn), p2 = polarToCart(rOuter, aFim);
                const p3 = polarToCart(rInner, aFim), p4 = polarToCart(rInner, aIn);
 
                const d = `M ${p1.x} ${p1.y} A ${rOuter} ${rOuter} 0 0 1 ${p2.x} ${p2.y} L ${p3.x} ${p3.y} A ${rInner} ${rInner} 0 0 0 ${p4.x} ${p4.y} Z`;
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('d', d);
                path.setAttribute('fill', i % 2 === 0 ? '#161b22' : '#0d1117');
                path.setAttribute('stroke', '#30363d');
                svg.appendChild(path);
 
                const pTxt = polarToCart((rOuter + rInner) / 2, grauParaAngulo(i * 30 + 15));
                const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                txt.setAttribute('x', pTxt.x); txt.setAttribute('y', pTxt.y);
                txt.setAttribute('class', 'signo-symbol');
                txt.textContent = SIGNOS_DADOS[i].simbolo;
                svg.appendChild(txt);
            }
 
            casas.forEach((c, i) => {
                const p1 = polarToCart(rInner, grauParaAngulo(c)), p2 = polarToCart(rCore, grauParaAngulo(c));
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', p1.x); line.setAttribute('y1', p1.y);
                line.setAttribute('x2', p2.x); line.setAttribute('y2', p2.y);
                line.setAttribute('stroke', (i % 3 === 0) ? '#58a6ff' : '#30363d');
                svg.appendChild(line);
            });
 
            const coreCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            coreCircle.setAttribute('cx', cx); coreCircle.setAttribute('cy', cy); coreCircle.setAttribute('r', rCore);
            coreCircle.setAttribute('fill', '#0b0e14'); coreCircle.setAttribute('stroke', '#30363d');
            svg.appendChild(coreCircle);
 
            astros.forEach(a => {
                const p = polarToCart(rCasas, grauParaAngulo(a.grau));
                const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                g.setAttribute('class', 'planet-node');
                g.setAttribute('transform', `translate(${p.x}, ${p.y})`);

                const nivel = NIVEL_PRECISAO[a.nome] || "alta";
                const corNivel = CORES_PRECISAO[nivel];
 
                const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                c.setAttribute('r', 14);
                c.setAttribute('stroke', corNivel);
                c.setAttribute('stroke-width', 2);
 
                const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                t.setAttribute('y', 1); 
                t.setAttribute('fill', a.nome === "Sol" ? 'var(--sol)' : 'var(--destaque)');
                t.setAttribute('font-size', '15px');
                t.textContent = SIMBOLOS_ASTROS[a.nome] || a.nome[0];
 
                g.appendChild(c); 
                g.appendChild(t);

                if (a.retrogrado) {
                    const rTxt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    rTxt.setAttribute('x', 10);
                    rTxt.setAttribute('y', -8);
                    rTxt.setAttribute('font-size', '8px');
                    rTxt.setAttribute('font-weight', 'bold');
                    rTxt.setAttribute('fill', '#f0883e');
                    rTxt.textContent = 'R';
                    g.appendChild(rTxt);
                }
                
                const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
                title.textContent = `${a.nome}: ${formatarDMS(a.grau)} — confiabilidade ${nivel === 'alta' ? 'alta' : (nivel === 'media' ? 'média' : 'mais baixa')}${a.retrogrado ? ' — Retrógrado' : ''}`;
                g.appendChild(title);
 
                svg.appendChild(g);
            });
        }
 
        // ==========================================
        // INTEGRAÇÃO COM A IA
        // ==========================================
 
        // Ordem canônica dos astros, igual à ordem em que aparecem na lista
        // "Posições Planetárias da RS" — usada para ordenar as leituras salvas na
        // mesma sequência dos blocos do app.
        const ORDEM_ASTROS_BASE = [
            "Sol", "Lua", "Mercúrio", "Vênus", "Marte", "Júpiter", "Saturno", "Urano", "Netuno", "Plutão",
            "Ascendente (AC)", "Descendente (DC)", "Meio do Céu (MC)", "Fundo do Céu (IC)", "Vertex", "Anti-vertex",
            "Roda da Fortuna", "Nodo Norte", "Nodo Sul", "Quíron", "Lilith",
            "Ceres", "Pallas", "Juno", "Vesta",
            "Pholus",
            "Éris", "Sedna", "Haumea", "Makemake",
            "Aldebaran", "Regulus", "Antares"
        ];

        function iniciarAnaliseIA(titulo, promptText, ordem) {
            ULTIMO_TITULO_ANALISE = titulo;
            ULTIMO_ORDEM_ANALISE = (ordem !== undefined && ordem !== null) ? ordem : 9999;
            document.getElementById('modalTitle').textContent = `✦ ${titulo}`;
            document.getElementById('modalBody').innerHTML = `
                <div class="loading-spinner">
                    <div class="spinner"></div>
                    <p>Calculando previsão com a IA...</p>
                </div>`;
            document.getElementById('aiModal').classList.add('active');
            gerarAnaliseIA(promptText);
        }
 
        // Diretriz de tom compartilhada por todas as análises de IA: sem introdução,
        // com profundidade filosófica/psicológica/simbólica, mas sem citar escolas de
        // pensamento, tradições ou termos técnicos de sistemas específicos — o texto
        // deve soar como uma leitura pessoal, nunca uma aula teórica.
        const DIRETRIZ_TOM_IA = `Escreva com profundidade filosófica e psicológica, atento às camadas simbólicas, aos padrões ocultos por trás dos acontecimentos e ao significado mais profundo por trás das tendências do ano — como uma leitura séria, intuitiva e madura. NÃO cite nomes de escolas de pensamento, tradições, sistemas ou termos técnicos de nenhuma linha teórica específica; o foco deve estar inteiramente na pessoa e na energia analisada, com linguagem natural e envolvente.
            NÃO escreva introduções, saudações, contextualizações iniciais ou frases como "vamos analisar" — a primeira frase já deve estar dentro do assunto central do tema, sem nenhum preâmbulo antes disso.
            NÃO use títulos, cabeçalhos ou listas numeradas visíveis no texto final — apenas parágrafos corridos.
            Escreva em tom de conversa direta com quem está lendo, como se estivesse falando pessoalmente com essa pessoa sobre o ano dela — dirija-se a ela usando "você", nunca em terceira pessoa distante ("esta pessoa", "o consulente") nem como um texto acadêmico impessoal.
            Use formatação HTML básica com parágrafos <p> e destaques em <strong>.`;

        function dispararAnaliseIA(nomeAstro, nomeSigno, numCasa, retrogrado) {
            const notaRetrogrado = retrogrado
                ? `\n\nImportante: ${nomeAstro} está RETRÓGRADO nesta Revolução Solar. Isso muda o tom da leitura — considere isso ao longo de toda a análise (energia mais internalizada, revisitada, reprocessada, em vez de expressa diretamente para fora, ao longo deste ciclo), sem citar o termo técnico "retrógrado" como se fosse um jargão à parte, apenas incorporando esse matiz na interpretação.`
                : '';

            const promptText = `Faça uma leitura astrológica sobre a posição de ${nomeAstro} em ${nomeSigno}, na Casa ${numCasa}, na Revolução Solar do ano ${PERIODO_SELECIONADO} desta pessoa.${notaRetrogrado}

            Siga rigorosamente esta estrutura, sem indicar os números ou nomes das etapas no texto final:
            1. Um parágrafo breve sobre o que ${nomeAstro} representa como força ativa durante este ano pessoal.
            2. Um parágrafo sobre como ${nomeSigno} colore, direciona ou qualifica essa energia ao longo do ciclo.
            3. Um parágrafo sobre o que a Casa ${numCasa} revela sobre onde e como essa energia se manifesta na vida prática deste ano.
            4. Uma análise geral, mais longa e rica, que une os três elementos acima como uma tendência coerente para o ano de ${PERIODO_SELECIONADO}, com uma reflexão prática.

            ${DIRETRIZ_TOM_IA}`;
 
            iniciarAnaliseIA(`${nomeAstro}${retrogrado ? ' ℞' : ''} em ${nomeSigno} — Casa ${numCasa}`, promptText, 2000 + ORDEM_ASTROS_BASE.indexOf(nomeAstro));
        }

        function dispararAnaliseAspectoIA(astro1, aspecto, astro2) {
            const a1 = ULTIMO_ASTROS.find(a => a.nome === astro1);
            const a2 = ULTIMO_ASTROS.find(a => a.nome === astro2);
            const notasRetrogrado = [
                a1 && a1.retrogrado ? `${astro1} está retrógrado nesta Revolução Solar.` : '',
                a2 && a2.retrogrado ? `${astro2} está retrógrado nesta Revolução Solar.` : ''
            ].filter(Boolean).join(' ');

            const promptText = `Faça uma leitura astrológica sobre o aspecto de ${aspecto} entre ${astro1} e ${astro2} na Revolução Solar do ano ${PERIODO_SELECIONADO} desta pessoa.${notasRetrogrado ? '\n\nImportante: ' + notasRetrogrado + ' Considere esse matiz (energia mais internalizada/reprocessada) na leitura, sem tratar o termo como jargão à parte.' : ''}

            Siga rigorosamente esta estrutura, sem indicar os números ou nomes das etapas no texto final:
            1. Um parágrafo breve sobre o que ${astro1} representa como força ativa neste ano.
            2. Um parágrafo breve sobre o que ${astro2} representa como força ativa neste ano.
            3. Um parágrafo sobre a natureza do aspecto de ${aspecto} e como ele aproxima, tensiona ou funde essas duas energias ao longo do ciclo.
            4. Uma análise geral, mais longa e rica, sobre o que esse encontro de forças revela sobre os altos e baixos previsíveis do ano de ${PERIODO_SELECIONADO}.

            ${DIRETRIZ_TOM_IA}`;
 
            const indiceAspecto = ULTIMO_ASPECTOS.findIndex(asp =>
                (asp.astro1 === astro1 && asp.astro2 === astro2 && asp.aspecto === aspecto) ||
                (asp.astro1 === astro2 && asp.astro2 === astro1 && asp.aspecto === aspecto)
            );
            iniciarAnaliseIA(`${astro1} ${aspecto} ${astro2}`, promptText, 5000 + (indiceAspecto >= 0 ? indiceAspecto : 0));
        }

        function dispararAnaliseCasaIA(numCasa, nomeSigno, ocupantes) {
            const promptText = `Faça uma leitura astrológica sobre a Casa ${numCasa} da Revolução Solar do ano ${PERIODO_SELECIONADO} desta pessoa, com cúspide em ${nomeSigno}, contendo: ${ocupantes}.

            Siga rigorosamente esta estrutura, sem indicar os números ou nomes das etapas no texto final:
            1. Um parágrafo breve sobre o que a Casa ${numCasa} representa como área de vida ativada neste ano.
            2. Um parágrafo sobre como ${nomeSigno}, na cúspide, qualifica a forma como essa área se expressa durante o ciclo.
            3. Um parágrafo sobre o papel dos astros presentes nessa casa (${ocupantes}) e como eles atuam nessa área específica ao longo do ano.
            4. Uma análise geral, mais longa e rica, unindo os três elementos acima em uma tendência coerente para o ano de ${PERIODO_SELECIONADO}.

            ${DIRETRIZ_TOM_IA}`;

            iniciarAnaliseIA(`Casa ${numCasa} em ${nomeSigno} — ${PERIODO_SELECIONADO}`, promptText, 3000 + numCasa);
        }
 
        function dispararAnaliseBalanco(tipo) {
            if (!ULTIMO_ASTROS.length) return;
 
            let titulo, rotulo, dados, ordemBalanco;
            if (tipo === 'elementos') {
                titulo = `Elementos do Ano ${PERIODO_SELECIONADO}`;
                rotulo = 'elementos';
                dados = ULTIMO_BALANCO.elementos;
                ordemBalanco = 1000;
            } else if (tipo === 'ritmos') {
                titulo = `Modalidades do Ano ${PERIODO_SELECIONADO}`;
                rotulo = 'modalidades';
                dados = ULTIMO_BALANCO.ritmos;
                ordemBalanco = 1001;
            } else {
                titulo = `Polaridades do Ano ${PERIODO_SELECIONADO}`;
                rotulo = 'polaridades';
                dados = ULTIMO_BALANCO.polaridades;
                ordemBalanco = 1002;
            }
 
            const dadosTexto = Object.entries(dados).map(([k, v]) => `${k}: ${v}`).join(', ');
 
            const promptText = `Faça uma leitura sobre o peso e o temperamento do ano pessoal de ${PERIODO_SELECIONADO} desta pessoa, com base nesta distribuição de ${rotulo} na Revolução Solar: ${dadosTexto}.
            Escreva de 3 a 4 parágrafos, explicando o ritmo e a energia predominante que a pessoa sentirá no dia a dia durante esse ciclo.
            ${DIRETRIZ_TOM_IA}`;
 
            iniciarAnaliseIA(titulo, promptText, ordemBalanco);
        }
 
        function dispararAnaliseMapaCompleto() {
            if (!ULTIMO_ASTROS.length) return;
 
            const listaPosicoes = ULTIMO_ASTROS.map(a => {
                const sIdx = Math.floor(a.grau / 30) % 12;
                const signo = SIGNOS_DADOS[sIdx];
                return `${a.nome} em ${signo.nome} na Casa ${a.casa}`;
            }).join('; ');
 
            const listaAspectosResumo = ULTIMO_ASPECTOS
                .map(asp => `${asp.astro1} em ${asp.aspecto} com ${asp.astro2}`)
                .join('; ');
 
            const promptText = `Elabore um relatório de previsão anual completo para o ano de ${PERIODO_SELECIONADO} desta pessoa, baseado nas posições a seguir:
 
            Posições anuais: ${listaPosicoes}.
            Aspectos anuais: ${listaAspectosResumo || 'sem aspectos maiores'}.
 
            Escreva de 5 a 7 parágrafos, destacando o Ascendente da Revolução Solar e onde o Sol do ano está localizado (foco central do ano), analisando onde estarão as maiores oportunidades e os maiores desafios práticos/emocionais ao longo do ciclo, e conclua com um conselho síntese para o ano.
            ${DIRETRIZ_TOM_IA}`;
 
            iniciarAnaliseIA(`Relatório de Previsão Anual - ${PERIODO_SELECIONADO}`, promptText, 0);
        }
 
        function dispararAnaliseAspectosCompleta() {
            if (!ULTIMO_ASPECTOS.length) return;
 
            const lista = ULTIMO_ASPECTOS
                .map(asp => `${asp.astro1} em ${asp.aspecto} com ${asp.astro2}`)
                .join('; ');
 
            const promptText = `Faça uma leitura dos aspectos atuantes na Revolução Solar do ano de ${PERIODO_SELECIONADO} desta pessoa:
 
            ${lista}
 
            Escreva de 4 a 5 parágrafos, conectando as tensões e a fluidez para explicar os altos e baixos previsíveis do ano.
            ${DIRETRIZ_TOM_IA}`;
 
            iniciarAnaliseIA(`Aspectos e Tensões do Ano ${PERIODO_SELECIONADO}`, promptText, 4000);
        }

        function dispararAnaliseTemaIA(indice) {
            if (!ULTIMO_ASTROS.length) return;
            const tema = TEMAS_COMBINACOES[indice];
            if (!tema) return;

            const astrosEncontrados = tema.astros
                .map(nome => ULTIMO_ASTROS.find(a => a.nome === nome))
                .filter(Boolean);
            if (!astrosEncontrados.length) return;

            const descricaoPosicoes = astrosEncontrados.map(a => {
                const sIdx = Math.floor(a.grau / 30) % 12;
                const signo = SIGNOS_DADOS[sIdx];
                return `${a.nome}${a.retrogrado ? ' (retrógrado)' : ''} em ${signo.nome} (Casa ${a.casa})`;
            }).join('; ');

            const nomesEnvolvidos = astrosEncontrados.map(a => a.nome);
            const aspectosRelevantes = ULTIMO_ASPECTOS.filter(asp =>
                nomesEnvolvidos.includes(asp.astro1) && nomesEnvolvidos.includes(asp.astro2)
            );
            const descricaoAspectos = aspectosRelevantes.length
                ? aspectosRelevantes.map(asp => `${asp.astro1} em ${asp.aspecto} com ${asp.astro2}`).join('; ')
                : 'nenhum aspecto direto relevante entre esses pontos específicos';

            const promptText = `Faça uma leitura astrológica sobre o tema "${tema.titulo}" (${tema.descricao}) na Revolução Solar do ano ${PERIODO_SELECIONADO} desta pessoa, considerando os seguintes astros e suas posições: ${descricaoPosicoes}.

            Aspectos relevantes entre esses astros: ${descricaoAspectos}.

            Siga rigorosamente esta estrutura, sem indicar os números ou nomes das etapas no texto final:
            1. Um parágrafo comentando brevemente a posição de cada astro envolvido (signo e casa) e o que cada um contribui especificamente para esse tema durante este ciclo.
            2. Um parágrafo sobre a dinâmica formada pelos aspectos entre esses astros e como essa tensão ou fluidez atua especificamente nessa área da vida ao longo do ano.
            3. Uma análise geral, rica e integrada, sobre como esse conjunto tende a se expressar nessa área da vida durante o ano de ${PERIODO_SELECIONADO}.

            ${DIRETRIZ_TOM_IA}`;

            iniciarAnaliseIA(`${tema.titulo} — ${PERIODO_SELECIONADO}`, promptText, 6000 + indice);
        }
 
        async function gerarAnaliseIA(promptText) {
            const modalBody = document.getElementById('modalBody');
            try {
                const response = await fetch('https://astro-gns-proxy.genesisgns.workers.dev/', {
                    method: 'POST',
                    cache: 'no-store',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ prompt: promptText })
                });
 
                const data = await response.json();
 
                if (response.ok && data.resposta) {
                    exibirResultadoIA(data.resposta);
                } else {
                    modalBody.innerHTML = `<p style="color:var(--fogo);"><strong>Erro:</strong> ${data.error || "Não foi possível obter a resposta da IA."}</p>`;
                }
            } catch (err) {
                console.error(err);
                modalBody.innerHTML = `<p style="color:var(--fogo);"><strong>Erro de Conexão:</strong> ${err.message}</p>`;
            }
        }
 
        function exibirResultadoIA(texto) {
            let htmlFormatado = texto.replace(/```html/g, '').replace(/```/g, '');
            document.getElementById('modalBody').innerHTML = htmlFormatado;
            if (PESSOA_ATIVA_ID && ULTIMO_TITULO_ANALISE) {
                salvarLeituraNaPessoaAtiva(ULTIMO_TITULO_ANALISE, htmlFormatado, ULTIMO_ORDEM_ANALISE);
            }
        }
 
        function fecharModal() {
            document.getElementById('aiModal').classList.remove('active');
            pararLeituraVoz();
        }
 
        function fecharModalOuter(e) {
            if (e.target.id === 'aiModal') fecharModal();
        }

        // ==========================================
        // LEITURA EM VOZ ALTA (Web Speech API — nativa do navegador, sem custo)
        // ==========================================
        // A qualidade da voz depende só do que o aparelho/navegador oferece — não
        // dá pra trocar por uma "biblioteca melhor" sem sair do modelo 100%
        // gratuito e client-side. Em compensação, aqui a gente: (1) tenta escolher
        // automaticamente a MELHOR voz em português disponível (vozes "de rede",
        // tipo Google/Microsoft neurais, soam bem mais humanas que as vozes locais
        // básicas do sistema); (2) deixa a pessoa escolher manualmente entre todas
        // as vozes em português do aparelho, e lembra a escolha pra próxima vez.
        let vozAtiva = false;
        let VOZES_DISPONIVEIS = [];
        const CHAVE_VOZ_PREFERIDA = 'astro_voz_preferida_v1';

        // Nomes de vozes de rede (neurais/WaveNet) conhecidas por soarem mais
        // naturais, usadas para ordenar a lista com as melhores primeiro.
        const PISTAS_VOZ_BOA = ['google', 'wavenet', 'neural', 'natural', 'online', 'luciana', 'microsoft'];

        function pontuarVoz(v) {
            const nome = (v.name || '').toLowerCase();
            let pontos = 0;
            if (v.lang && v.lang.toLowerCase() === 'pt-br') pontos += 10;
            else if (v.lang && v.lang.toLowerCase().startsWith('pt')) pontos += 5;
            PISTAS_VOZ_BOA.forEach(pista => { if (nome.includes(pista)) pontos += 3; });
            if (!v.localService) pontos += 2; // vozes de rede tendem a soar melhor que as locais
            return pontos;
        }

        function carregarVozes() {
            if (!('speechSynthesis' in window)) return;
            const todas = speechSynthesis.getVoices();
            let candidatas = todas.filter(v => v.lang && v.lang.toLowerCase().startsWith('pt'));
            if (!candidatas.length) candidatas = todas; // aparelho sem voz em pt: mostra todas como fallback

            VOZES_DISPONIVEIS = candidatas.slice().sort((a, b) => pontuarVoz(b) - pontuarVoz(a));
            popularSeletorVozes();
        }

        function popularSeletorVozes() {
            const select = document.getElementById('vozSelect');
            if (!select || !VOZES_DISPONIVEIS.length) return;

            const preferida = localStorage.getItem(CHAVE_VOZ_PREFERIDA);

            select.innerHTML = VOZES_DISPONIVEIS.map(v =>
                `<option value="${v.name}">${v.name}${v.lang ? ' (' + v.lang + ')' : ''}</option>`
            ).join('');

            if (preferida && VOZES_DISPONIVEIS.some(v => v.name === preferida)) {
                select.value = preferida;
            } else {
                select.value = VOZES_DISPONIVEIS[0].name; // já vem ordenada com a melhor primeiro
            }
        }

        function salvarVozPreferida() {
            const select = document.getElementById('vozSelect');
            if (!select) return;
            localStorage.setItem(CHAVE_VOZ_PREFERIDA, select.value);
        }

        function extrairTextoParaVoz() {
            const clone = document.getElementById('modalBody').cloneNode(true);
            return clone.textContent.replace(/\s+/g, ' ').trim();
        }

        function alternarLeituraVoz() {
            if (!('speechSynthesis' in window)) {
                alert('Seu navegador não suporta leitura em voz alta.');
                return;
            }
            const btn = document.getElementById('btnOuvir');
            if (vozAtiva) {
                pararLeituraVoz();
                return;
            }
            const texto = extrairTextoParaVoz();
            if (!texto) return;

            const utterance = new SpeechSynthesisUtterance(texto);
            utterance.lang = 'pt-BR';
            // Um pouco mais lenta que o padrão (1.0) costuma soar mais natural e
            // menos "robótica" na leitura de textos longos.
            utterance.rate = 0.93;
            utterance.pitch = 1;

            const select = document.getElementById('vozSelect');
            const nomeEscolhido = select ? select.value : '';
            const vozEscolhida = VOZES_DISPONIVEIS.find(v => v.name === nomeEscolhido) || VOZES_DISPONIVEIS[0];
            if (vozEscolhida) utterance.voice = vozEscolhida;

            utterance.onend = () => { vozAtiva = false; btn.textContent = '🔊'; };
            utterance.onerror = () => { vozAtiva = false; btn.textContent = '🔊'; };

            speechSynthesis.cancel();
            speechSynthesis.speak(utterance);
            vozAtiva = true;
            btn.textContent = '⏹️';
        }

        function pararLeituraVoz() {
            if ('speechSynthesis' in window) speechSynthesis.cancel();
            vozAtiva = false;
            const btn = document.getElementById('btnOuvir');
            if (btn) btn.textContent = '🔊';
        }
 
        // ==========================================
        // MECANISMO DE TRANSIÇÃO ENTRE MAPA NATAL E REVOLUÇÃO SOLAR
        // ==========================================
        // Os dados de nascimento (data, hora, fuso, cidade e coordenadas) são salvos
        // no localStorage do navegador. Assim, ao clicar na aba "Mapa Natal", aquela
        // página já abre com os mesmos dados natais preenchidos, sem precisar digitar
        // tudo de novo. Não envolve nenhum servidor, apenas o navegador local. (O ano
        // da Revolução Solar em si NÃO é compartilhado, pois é específico desta página.)
        const CHAVE_DADOS_NATAIS = 'astro_dados_natais_v1';

        function salvarDadosNatais() {
            try {
                const dados = {
                    date: document.getElementById('date').value,
                    time: document.getElementById('time').value,
                    fuso: document.getElementById('fuso').value,
                    lat: document.getElementById('lat').value,
                    lon: document.getElementById('lon').value,
                    cidade: document.getElementById('cidadeInput').value
                };
                localStorage.setItem(CHAVE_DADOS_NATAIS, JSON.stringify(dados));
            } catch (err) {
                console.warn('Não foi possível salvar os dados natais localmente:', err);
            }
        }

        function carregarDadosNatais() {
            try {
                const raw = localStorage.getItem(CHAVE_DADOS_NATAIS);
                if (!raw) return false;
                const dados = JSON.parse(raw);
                if (dados.date) document.getElementById('date').value = dados.date;
                if (dados.time) document.getElementById('time').value = dados.time;
                if (dados.fuso !== undefined && dados.fuso !== '') document.getElementById('fuso').value = dados.fuso;
                if (dados.lat !== undefined && dados.lat !== '') document.getElementById('lat').value = dados.lat;
                if (dados.lon !== undefined && dados.lon !== '') document.getElementById('lon').value = dados.lon;
                if (dados.cidade) document.getElementById('cidadeInput').value = dados.cidade;
                return true;
            } catch (err) {
                console.warn('Não foi possível carregar os dados natais salvos:', err);
                return false;
            }
        }

        // ==========================================
        // PESSOAS SALVAS + HISTÓRICO DE LEITURAS DE IA (localStorage do navegador)
        // ==========================================
        // Usa a MESMA chave de armazenamento do Mapa Natal, então uma pessoa salva
        // em uma página aparece também na outra, com o histórico de leituras de
        // ambos os contextos (Mapa Natal e Revolução Solar) reunido no mesmo lugar.
        const CHAVE_PESSOAS_SALVAS = 'astro_pessoas_salvas_v1';
        // Identificador fixo desta página, salvo em cada leitura de IA gerada aqui.
        // É o que permite os selos "✓ já feito" do Mapa Natal e da Revolução Solar
        // serem contados de forma totalmente independente, mesmo a pessoa sendo
        // compartilhada entre as duas páginas.
        const CONTEXTO_PAGINA = 'solar';
        let PESSOA_ATIVA_ID = null;
        let ULTIMO_TITULO_ANALISE = '';
        let ULTIMO_ORDEM_ANALISE = 9999;

        function carregarPessoasSalvas() {
            try {
                const raw = localStorage.getItem(CHAVE_PESSOAS_SALVAS);
                return raw ? JSON.parse(raw) : [];
            } catch (err) { return []; }
        }

        function salvarPessoasSalvas(lista) {
            try { localStorage.setItem(CHAVE_PESSOAS_SALVAS, JSON.stringify(lista)); }
            catch (err) { console.warn('Não foi possível salvar pessoas:', err); }
        }

        function salvarOuAtivarPessoa() {
            const nome = (document.getElementById('nomePessoaInput').value || '').trim();
            if (!nome) { alert('Digite um nome para salvar.'); return; }

            const dados = {
                date: document.getElementById('date').value,
                time: document.getElementById('time').value,
                fuso: document.getElementById('fuso').value,
                lat: document.getElementById('lat').value,
                lon: document.getElementById('lon').value,
                cidade: document.getElementById('cidadeInput').value
            };

            const lista = carregarPessoasSalvas();
            let pessoa = lista.find(p => p.nome.toLowerCase() === nome.toLowerCase() && p.dados.date === dados.date && p.dados.time === dados.time);

            if (!pessoa) {
                pessoa = { id: 'p_' + Date.now(), nome, dados, criadoEm: new Date().toISOString(), leituras: [] };
                lista.push(pessoa);
            } else {
                pessoa.dados = dados;
            }

            salvarPessoasSalvas(lista);
            PESSOA_ATIVA_ID = pessoa.id;
            atualizarIndicadorPessoaAtiva();
            renderizarPessoasSalvas();
            atualizarTodosIndicadores();
        }

        function atualizarIndicadorPessoaAtiva() {
            const el = document.getElementById('pessoaAtivaIndicador');
            if (!el) return;
            if (!PESSOA_ATIVA_ID) { el.style.display = 'none'; return; }
            const lista = carregarPessoasSalvas();
            const pessoa = lista.find(p => p.id === PESSOA_ATIVA_ID);
            if (pessoa) {
                el.style.display = 'block';
                el.textContent = `💾 Gravando leituras para: ${pessoa.nome} (clique para parar)`;
            }
        }

        function desativarPessoa() {
            PESSOA_ATIVA_ID = null;
            atualizarIndicadorPessoaAtiva();
            atualizarTodosIndicadores();
        }

        // Identifica de qual página uma leitura salva veio ('natal' ou 'solar').
        // Leituras novas já trazem o campo 'contexto' gravado diretamente. Leituras
        // antigas (salvas antes dessa separação existir) não têm esse campo — nesse
        // caso, inferimos pelo texto de 'origem' salvo junto com a leitura.
        function obterContextoDaLeitura(l) {
            if (l.contexto) return l.contexto;
            return (l.origem || '').startsWith('Revolução Solar') ? 'solar' : 'natal';
        }

        // Retorna o conjunto de "ordem" já salvas para a pessoa ativa, filtrando
        // apenas leituras do CONTEXTO desta página (Revolução Solar). Isso garante
        // que um selo "✓ já feito" aqui não apareça por causa de uma leitura
        // equivalente feita no Mapa Natal, e vice-versa — cada página passa a ter
        // seu próprio controle de "já feito", independente da outra.
        function obterOrdensSalvas() {
            if (!PESSOA_ATIVA_ID) return new Set();
            const lista = carregarPessoasSalvas();
            const pessoa = lista.find(p => p.id === PESSOA_ATIVA_ID);
            if (!pessoa) return new Set();
            return new Set(
                pessoa.leituras
                    .filter(l => obterContextoDaLeitura(l) === CONTEXTO_PAGINA)
                    .map(l => l.ordem)
            );
        }

        function indicadorFeitoHtml(jaFeito) {
            return jaFeito ? '<span class="indicador-feito" title="Já existe uma leitura de IA salva para este item">✓</span>' : '';
        }

        // Atualiza os selos "✓" fixos (fora das listas expansíveis): Análise Anual
        // completa, Matriz de Aspectos completa e os 3 balanços.
        function atualizarIndicadoresEstaticos() {
            const ordensSalvas = obterOrdensSalvas();
            const mapa = {
                indicadorSintese: 0,
                indicadorAspectosCompleta: 4000,
                indicadorBalancoElementos: 1000,
                indicadorBalancoRitmos: 1001,
                indicadorBalancoPolaridades: 1002
            };
            Object.entries(mapa).forEach(([idEl, ordem]) => {
                const el = document.getElementById(idEl);
                if (el) el.innerHTML = indicadorFeitoHtml(ordensSalvas.has(ordem));
            });
        }

        // Atualiza TODOS os selos "já feito": as listas expansíveis (astros, casas,
        // aspectos, temas) e os indicadores fixos — sem precisar recalcular o mapa
        // inteiro, usando os dados já calculados (ULTIMO_ASTROS, etc).
        function atualizarTodosIndicadores() {
            if (!ULTIMO_ASTROS.length) return;
            renderizarAstrosExpansivel(ULTIMO_ASTROS);
            renderizarCasasExpansivel(ULTIMO_CASAS, ULTIMO_ASTROS);
            renderizarAspectosExpansivel(ULTIMO_ASPECTOS);
            renderizarTemas(ULTIMO_ASTROS);
            atualizarIndicadoresEstaticos();
        }

        function salvarLeituraNaPessoaAtiva(titulo, html, ordem) {
            if (!PESSOA_ATIVA_ID) return;
            const lista = carregarPessoasSalvas();
            const pessoa = lista.find(p => p.id === PESSOA_ATIVA_ID);
            if (!pessoa) return;
            pessoa.leituras.unshift({
                id: 'l_' + Date.now(),
                titulo,
                origem: `Revolução Solar ${PERIODO_SELECIONADO}`,
                contexto: CONTEXTO_PAGINA,
                html,
                ordem: (ordem !== undefined && ordem !== null) ? ordem : 9999,
                criadoEm: new Date().toISOString()
            });
            salvarPessoasSalvas(lista);
            renderizarPessoasSalvas();
            atualizarTodosIndicadores();
        }

        // Ordena as leituras salvas seguindo a MESMA ordem em que os blocos
        // aparecem no app (Síntese → Balanços → Posições → Casas → Aspectos →
        // Temas), em vez da ordem cronológica de quando foram geradas. Leituras
        // salvas antes desse recurso existir (sem "ordem") ficam ao final,
        // ordenadas por data.
        function ordenarLeituras(leituras) {
            return leituras.slice().sort((a, b) => {
                const oa = (a.ordem !== undefined && a.ordem !== null) ? a.ordem : Infinity;
                const ob = (b.ordem !== undefined && b.ordem !== null) ? b.ordem : Infinity;
                if (oa !== ob) return oa - ob;
                return new Date(b.criadoEm) - new Date(a.criadoEm);
            });
        }

        function excluirPessoa(id) {
            if (!confirm('Excluir esta pessoa e todas as leituras salvas dela?')) return;
            let lista = carregarPessoasSalvas();
            lista = lista.filter(p => p.id !== id);
            salvarPessoasSalvas(lista);
            if (PESSOA_ATIVA_ID === id) desativarPessoa();
            renderizarPessoasSalvas();
            atualizarTodosIndicadores();
        }

        function excluirLeitura(idPessoa, idLeitura) {
            const lista = carregarPessoasSalvas();
            const pessoa = lista.find(p => p.id === idPessoa);
            if (!pessoa) return;
            pessoa.leituras = pessoa.leituras.filter(l => l.id !== idLeitura);
            salvarPessoasSalvas(lista);
            renderizarPessoasSalvas();
            atualizarTodosIndicadores();
        }

        function carregarMapaDaPessoa(id) {
            const lista = carregarPessoasSalvas();
            const pessoa = lista.find(p => p.id === id);
            if (!pessoa) return;
            document.getElementById('date').value = pessoa.dados.date;
            document.getElementById('time').value = pessoa.dados.time;
            document.getElementById('fuso').value = pessoa.dados.fuso;
            document.getElementById('lat').value = pessoa.dados.lat;
            document.getElementById('lon').value = pessoa.dados.lon;
            document.getElementById('cidadeInput').value = pessoa.dados.cidade;
            document.getElementById('nomePessoaInput').value = pessoa.nome;
            PESSOA_ATIVA_ID = pessoa.id;
            atualizarIndicadorPessoaAtiva();
            executarTudo();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function reabrirLeituraSalva(idPessoa, idLeitura) {
            const lista = carregarPessoasSalvas();
            const pessoa = lista.find(p => p.id === idPessoa);
            if (!pessoa) return;
            const leitura = pessoa.leituras.find(l => l.id === idLeitura);
            if (!leitura) return;
            document.getElementById('modalTitle').textContent = `✦ ${leitura.titulo}`;
            document.getElementById('modalBody').innerHTML = leitura.html;
            document.getElementById('aiModal').classList.add('active');
        }

        function extrairTextoDeHtml(html) {
            const div = document.createElement('div');
            div.innerHTML = html;
            return div.textContent.replace(/\n{3,}/g, '\n\n').trim();
        }

        function exportarTxtPessoa(id) {
            const lista = carregarPessoasSalvas();
            const pessoa = lista.find(p => p.id === id);
            if (!pessoa) return;

            let conteudo = `LEITURAS ASTROLÓGICAS — ${pessoa.nome}\n`;
            conteudo += `Nascimento: ${pessoa.dados.date} às ${pessoa.dados.time} (UTC${pessoa.dados.fuso >= 0 ? '+' : ''}${pessoa.dados.fuso}) — ${pessoa.dados.cidade}\n`;
            conteudo += `${'='.repeat(60)}\n\n`;

            if (!pessoa.leituras.length) {
                conteudo += 'Nenhuma leitura salva ainda.\n';
            } else {
                ordenarLeituras(pessoa.leituras).forEach(l => {
                    conteudo += `${l.titulo}\n`;
                    conteudo += `${l.origem} — ${new Date(l.criadoEm).toLocaleString('pt-BR')}\n`;
                    conteudo += `${'-'.repeat(40)}\n`;
                    conteudo += `${extrairTextoDeHtml(l.html)}\n\n`;
                });
            }

            const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${pessoa.nome.replace(/\s+/g, '_')}_leituras.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        // Extrai o período (ex: "2026-2027") do texto salvo em "origem" de uma
        // leitura da Revolução Solar. Leituras sem período identificável caem em
        // "Outros períodos" (ex: leituras muito antigas, salvas antes desse texto
        // existir no campo "origem").
        function extrairPeriodoDeOrigem(origem) {
            const match = (origem || '').match(/(\d{4}-\d{4})/);
            return match ? match[1] : 'Outros períodos';
        }

        // Agrupa as leituras de uma pessoa para o PDF: um capítulo único para o
        // Mapa Natal, e um capítulo "Revolução Solar" subdividido por período
        // (já que a mesma pessoa pode ter mais de um período salvo). Cada grupo
        // sai na mesma sequência dos blocos do app (ordenarLeituras).
        function agruparLeiturasParaPdf(leituras) {
            const ordenadas = ordenarLeituras(leituras);
            const natal = ordenadas.filter(l => obterContextoDaLeitura(l) === 'natal');
            const solar = ordenadas.filter(l => obterContextoDaLeitura(l) === 'solar');

            const solarPorPeriodo = {};
            solar.forEach(l => {
                const periodo = extrairPeriodoDeOrigem(l.origem);
                if (!solarPorPeriodo[periodo]) solarPorPeriodo[periodo] = [];
                solarPorPeriodo[periodo].push(l);
            });

            // Períodos ordenados pelo ano inicial (mais antigo primeiro). Períodos
            // sem ano identificável ("Outros períodos") ficam sempre por último.
            const periodosOrdenados = Object.keys(solarPorPeriodo).sort((a, b) => {
                const anoA = parseInt(a, 10);
                const anoB = parseInt(b, 10);
                if (isNaN(anoA) && isNaN(anoB)) return 0;
                if (isNaN(anoA)) return 1;
                if (isNaN(anoB)) return -1;
                return anoA - anoB;
            });

            return { natal, solarPorPeriodo, periodosOrdenados };
        }

        function exportarPdfPessoa(id) {
            const lista = carregarPessoasSalvas();
            const pessoa = lista.find(p => p.id === id);
            if (!pessoa) return;

            // Caminho absoluto do ícone do app, usado como logo na capa do PDF
            // (resolvido a partir da própria página, já que a janela do PDF abre
            // em branco e não tem uma URL base própria para caminhos relativos).
            const logoUrl = new URL('icon-192.png', window.location.href).href;

            const renderizarLeitura = (l) => `
                <div class="pdf-leitura">
                    <h2>${l.titulo}</h2>
                    <p class="pdf-meta">${l.origem} — ${new Date(l.criadoEm).toLocaleString('pt-BR')}</p>
                    <div class="pdf-texto">${l.html}</div>
                </div>
                <hr class="pdf-divisor">
            `;

            let corpoHtml = '';

            if (!pessoa.leituras.length) {
                corpoHtml = '<p>Nenhuma leitura salva ainda.</p>';
            } else {
                const { natal, solarPorPeriodo, periodosOrdenados } = agruparLeiturasParaPdf(pessoa.leituras);
                let primeiroCapitulo = true;

                // Capítulo Mapa Natal — todas as leituras natais juntas, na mesma
                // ordem dos blocos do app.
                if (natal.length) {
                    corpoHtml += `<div class="pdf-chapter">
                        <h1 class="pdf-chapter-title">🌟 Mapa Natal</h1>
                        ${natal.map(renderizarLeitura).join('')}
                    </div>`;
                    primeiroCapitulo = false;
                }

                // Capítulo Revolução Solar — começa em folha nova (se não for o
                // primeiro capítulo do documento) e cada período salvo abre sua
                // própria folha nova, identificado no título.
                if (periodosOrdenados.length) {
                    corpoHtml += `<div class="pdf-chapter"${primeiroCapitulo ? '' : ' style="page-break-before:always;"'}>
                        <h1 class="pdf-chapter-title">☀️ Revolução Solar</h1>
                        ${periodosOrdenados.map((periodo, idx) => `
                            <h2 class="pdf-period-title"${idx === 0 ? '' : ' style="page-break-before:always;"'}>Período ${periodo}</h2>
                            ${solarPorPeriodo[periodo].map(renderizarLeitura).join('')}
                        `).join('')}
                    </div>`;
                }
            }

            const documentoHtml = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8">
                <title>${pessoa.nome} — Leituras Astrológicas</title>
                <style>
                    body { font-family: Georgia, 'Times New Roman', serif; padding: 30px; color:#222; }
                    .pdf-cover { text-align:center; padding-top:120px; page-break-after:always; }
                    .pdf-cover img { width:140px; height:140px; object-fit:contain; margin-bottom:24px; }
                    .pdf-cover h1 { font-size:2.6rem; font-weight:bold; letter-spacing:6px; color:#5b3a00; margin-bottom:6px; }
                    .pdf-cover .pdf-subtitulo { font-size:1rem; color:#888; letter-spacing:2px; text-transform:uppercase; margin-bottom:70px; }
                    .pdf-cover .pdf-nome-pessoa { font-size:1.4rem; color:#222; margin-bottom:6px; }
                    .pdf-cover .pdf-nascimento { font-size:0.9rem; color:#666; }
                    .pdf-chapter-title { font-size:1.7rem; font-weight:bold; color:#5b3a00; border-bottom:3px solid #e3b341; padding-bottom:10px; margin-bottom:20px; }
                    .pdf-period-title { font-size:1.2rem; font-weight:bold; color:#8957e5; margin:26px 0 12px 0; border-bottom:1px solid #ccc; padding-bottom:4px; }
                    .pdf-leitura { margin-bottom:24px; page-break-inside:avoid; }
                    .pdf-leitura h2 { color:#5b3a00; font-size:1.1rem; font-weight:bold; margin-bottom:2px; }
                    .pdf-meta { font-size:0.8rem; color:#666; margin-bottom:10px; }
                    .pdf-texto { font-size:0.95rem; line-height:1.6; color:#222; }
                    .pdf-divisor { border:none; border-top:1px solid #ccc; margin:20px 0; }
                    strong { color:#5b3a00; }
                    @media print { body { padding: 10mm; } }
                </style>
                </head><body>
                <div class="pdf-cover">
                    <img src="${logoUrl}" alt="Logo Astro">
                    <h1>ASTRO</h1>
                    <p class="pdf-subtitulo">Leituras Astrológicas</p>
                    <p class="pdf-nome-pessoa"><strong>${pessoa.nome}</strong></p>
                    <p class="pdf-nascimento">Nascimento: ${pessoa.dados.date} às ${pessoa.dados.time} (UTC${pessoa.dados.fuso >= 0 ? '+' : ''}${pessoa.dados.fuso}) — ${pessoa.dados.cidade}</p>
                </div>
                ${corpoHtml}
                </body></html>`;

            const janela = window.open('', '_blank');
            if (!janela) { alert('Permita pop-ups neste site para exportar em PDF.'); return; }
            janela.document.open();
            janela.document.write(documentoHtml);
            janela.document.close();
            const dispararImpressao = () => { janela.focus(); janela.print(); };
            janela.onload = dispararImpressao;
            setTimeout(dispararImpressao, 400);
        }

        function renderizarPessoasSalvas() {
            const container = document.getElementById('pessoasSalvasList');
            if (!container) return;
            const lista = carregarPessoasSalvas();

            if (!lista.length) {
                container.innerHTML = '<p style="color:#8b949e; font-size:0.85rem; padding: 8px 0;">Nenhuma pessoa salva ainda. Preencha os dados acima, digite um nome no campo "Nome da Pessoa" e clique em "Salvar / Ativar".</p>';
                return;
            }

            container.innerHTML = lista.slice().reverse().map(p => {
                const leiturasHtml = p.leituras.length
                    ? ordenarLeituras(p.leituras).map(l => `
                        <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid var(--border); gap:8px;">
                            <div style="cursor:pointer; flex:1;" onclick="reabrirLeituraSalva('${p.id}', '${l.id}')">
                                <div style="font-size:0.82rem; font-weight:600;">${l.titulo}</div>
                                <div style="font-size:0.7rem; color:#8b949e;">${l.origem} · ${new Date(l.criadoEm).toLocaleString('pt-BR')}</div>
                            </div>
                            <button class="modal-close" style="font-size:1rem;" title="Excluir leitura" onclick="event.stopPropagation(); excluirLeitura('${p.id}', '${l.id}')">🗑️</button>
                        </div>`).join('')
                    : '<p style="font-size:0.8rem; color:#8b949e; padding: 6px 0;">Nenhuma leitura salva ainda para esta pessoa.</p>';

                return `
                    <div class="expand-card">
                        <div class="expand-header" onclick="this.parentElement.classList.toggle('open')">
                            <div class="expand-title">
                                <span>👤 ${p.nome}</span>
                            </div>
                            <div style="display:flex; align-items:center; gap:8px;">
                                <span class="expand-badge">${p.leituras.length} leitura(s)</span>
                                <span class="arrow-icon">▼</span>
                            </div>
                        </div>
                        <div class="expand-content">
                            <p style="margin-bottom:8px;"><strong>Nascimento:</strong> ${p.dados.date} às ${p.dados.time} (UTC${p.dados.fuso >= 0 ? '+' : ''}${p.dados.fuso}) — ${p.dados.cidade}</p>
                            <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:10px;">
                                <button class="btn-ia" onclick="carregarMapaDaPessoa('${p.id}')">📂 Carregar este Mapa</button>
                                <button class="btn-ia" onclick="exportarTxtPessoa('${p.id}')">📄 Exportar TXT</button>
                                <button class="btn-ia" onclick="exportarPdfPessoa('${p.id}')">🧾 Exportar PDF</button>
                                <button class="btn-ia" style="background: linear-gradient(135deg, #da3633, #8b2020);" onclick="excluirPessoa('${p.id}')">🗑️ Excluir Pessoa</button>
                            </div>
                            <p style="margin-bottom:6px; font-size:0.8rem; color:#8b949e;"><strong>Leituras salvas:</strong></p>
                            ${leiturasHtml}
                        </div>
                    </div>
                `;
            }).join('');
        }

        function executarTudo() {
            const { astros, casas, asc } = calcularRevolucaoSolar();
            const aspectos = calcularAspectos(astros);
 
            ULTIMO_ASTROS = astros;
            ULTIMO_CASAS = casas;
            ULTIMO_ASC = asc;
            ULTIMO_ASPECTOS = aspectos;
 
            renderizarBalanço(astros);
            renderizarAstrosExpansivel(astros);
            renderizarCasasExpansivel(casas, astros);
            renderizarAspectosExpansivel(aspectos);
            renderizarTemas(astros);
            gerarMatrizHtml(astros, aspectos);
            desenharRodaSVG(astros, casas, asc);
            atualizarIndicadoresEstaticos();

            salvarDadosNatais();
        }
 
        function popularSelectAno() {
            const select = document.getElementById('anoRevolucao');
            const anoAtual = new Date().getFullYear();
            let html = '';
            for (let ano = anoAtual - 10; ano <= anoAtual + 10; ano++) {
                html += `<option value="${ano}">${ano}-${ano + 1}</option>`;
            }
            select.innerHTML = html;
            select.value = anoAtual;
        }

        // ==========================================
        // LIMPAR CACHE TÉCNICO (sem apagar pessoas salvas)
        // ==========================================
        // Importante: as "Pessoas Salvas" e suas leituras ficam no localStorage —
        // uma gaveta de armazenamento totalmente separada do cache do Service
        // Worker (que guarda cópias de HTML/ícones para o app abrir rápido/offline).
        // Esta função remove APENAS a segunda gaveta: desregistra o Service Worker
        // e apaga o Cache Storage, depois recarrega a página forçando uma busca
        // nova ao servidor. O localStorage (pessoas salvas) não é tocado.
        async function limparCacheDoApp() {
            const confirmou = confirm(
                'Isso vai limpar o cache técnico do app e recarregar a página, para ' +
                'garantir que você veja a versão mais recente.\n\n' +
                'Suas Pessoas Salvas e leituras de IA NÃO serão apagadas — ficam ' +
                'guardadas em outro lugar, separado desse cache.\n\nContinuar?'
            );
            if (!confirmou) return;

            try {
                if ('serviceWorker' in navigator) {
                    const registros = await navigator.serviceWorker.getRegistrations();
                    await Promise.all(registros.map((registro) => registro.unregister()));
                }
                if ('caches' in window) {
                    const chaves = await caches.keys();
                    await Promise.all(chaves.map((chave) => caches.delete(chave)));
                }
            } catch (err) {
                console.warn('Erro ao limpar cache técnico:', err);
            }

            window.location.href = window.location.pathname + '?atualizado=' + Date.now();
        }

        window.onload = () => {
            const agora = new Date();
            popularSelectAno();
            const dadosCarregados = carregarDadosNatais();
            if (!dadosCarregados) {
                document.getElementById('date').value = agora.toISOString().split('T')[0];
                document.getElementById('time').value = agora.toTimeString().split(' ')[0].substring(0, 5);
            }

            document.getElementById('cidadeInput').addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    buscarCoordenadas();
                }
            });
 
            renderizarPessoasSalvas();
            executarTudo();

            if ('speechSynthesis' in window) {
                carregarVozes();
                speechSynthesis.onvoiceschanged = carregarVozes;
            }

            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('./sw.js').then((registro) => {
                    registro.update();
                }).catch(err => console.warn('Falha ao registrar Service Worker:', err));

                let jaRecarregou = false;
                navigator.serviceWorker.addEventListener('controllerchange', () => {
                    if (jaRecarregou) return;
                    jaRecarregou = true;
                    window.location.reload();
                });
            }
        };
    </script>

// AQUI TERMINA O CODIGO JS DO ARQUIVO REVOLUCAO_SOLAR.HTML

// AQUI COMEÇA O CÓDIGO JA DO ARQUIVO TRANSITOS_DIARIOS.HTML
<script src="https://cdn.jsdelivr.net/npm/astronomy-engine/astronomy.browser.min.js"></script>
    <script>
        const SIGNOS = ["Áries","Touro","Gêmeos","Câncer","Leão","Virgem","Libra","Escorpião","Sagitário","Capricórnio","Aquário","Peixes"];
        const REGENTES_SIGNOS = { Áries: "Marte", Touro: "Vênus", Gêmeos: "Mercúrio", Câncer: "Lua", Leão: "Sol", Virgem: "Mercúrio", Libra: "Vênus", Escorpião: "Plutão", Sagitário: "Júpiter", Capricórnio: "Saturno", Aquário: "Urano", Peixes: "Netuno" };
        const SIMBOLOS_SIGNOS = ["♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓"];
        const SIMBOLOS_PLANETAS = { Sol: "☉", Lua: "☽", Mercúrio: "☿", Vênus: "♀", Marte: "♂", Júpiter: "♃", Saturno: "♄", Urano: "♅", Netuno: "♆", Plutão: "♇", Asc: "ASC", MC: "MC", Dsc: "DSC", Ic: "IC" };
        const PLANETAS_SEMANA = ["Sol", "Lua", "Marte", "Mercúrio", "Júpiter", "Vênus", "Saturno"];
        const ORDEM_CALDAICA = ["Saturno", "Júpiter", "Marte", "Sol", "Vênus", "Mercúrio", "Lua"];

        const PROPRIEDADES_SIGNOS = {
            "Áries": { elemento: "Fogo", ritmo: "Cardinal", polaridade: "Masculina" },
            "Touro": { elemento: "Terra", ritmo: "Fixo", polaridade: "Feminina" },
            "Gêmeos": { elemento: "Ar", ritmo: "Mutável", polaridade: "Masculina" },
            "Câncer": { elemento: "Água", ritmo: "Cardinal", polaridade: "Feminina" },
            "Leão": { elemento: "Fogo", ritmo: "Fixo", polaridade: "Masculina" },
            "Virgem": { elemento: "Terra", ritmo: "Mutável", polaridade: "Feminina" },
            "Libra": { elemento: "Ar", ritmo: "Cardinal", polaridade: "Masculina" },
            "Escorpião": { elemento: "Água", ritmo: "Fixo", polaridade: "Feminina" },
            "Sagitário": { elemento: "Fogo", ritmo: "Mutável", polaridade: "Masculina" },
            "Capricórnio": { elemento: "Terra", ritmo: "Cardinal", polaridade: "Feminina" },
            "Aquário": { elemento: "Ar", ritmo: "Fixo", polaridade: "Masculina" },
            "Peixes": { elemento: "Água", ritmo: "Mutável", polaridade: "Feminina" }
        };

        const SIGNIFICADO_CASAS = {
            1: "Identidade, Vitalidade, Aparência e Impulso Vital",
            2: "Finanças, Valores Pessoais e Recursos Materiais",
            3: "Comunicação, Mente Prática, Estudos e Irmãos",
            4: "Lar, Família, Origens e Bases Emocionais",
            5: "Criatividade, Expressão Pessoal, Filhos e Romances",
            6: "Rotina Diária, Saúde, Trabalho e Hábitos",
            7: "Relacionamentos, Parcerias, Sociedades e Casamento",
            8: "Transformações Profundas, Recursos Compartilhados e Sexualidade",
            9: "Expansão da Consciência, Viagens Longas e Filosofia de Vida",
            10: "Carreira, Propósito de Vida, Imagem Pública e Conquistas",
            11: "Amizades, Projetos de Futuro, Grupos e Redes",
            12: "Inconsciente, Espiritualidade, Isolamento Regenerador e Síntese Psíquica"
        };

        // ==========================================
        // DADOS NATAIS COMPARTILHADOS ENTRE AS TELAS (Mapa Natal / Revolução Solar)
        // ==========================================
        // Usa a MESMA chave de localStorage que index.html e revolucao_solar.html.
        // Assim, se a pessoa já preencheu seus dados de nascimento em uma dessas
        // telas, eles já aparecem pré-preenchidos aqui também, sem precisar digitar
        // tudo de novo. Um "Perfil Guardado" selecionado manualmente nesta tela
        // sempre tem prioridade sobre esse preenchimento automático.
        const CHAVE_DADOS_NATAIS = 'astro_dados_natais_v1';

        function carregarDadosNataisCompartilhados() {
            try {
                const raw = localStorage.getItem(CHAVE_DADOS_NATAIS);
                if (!raw) return false;
                const dados = JSON.parse(raw);
                if (dados.date) document.getElementById('date').value = dados.date;
                if (dados.time) document.getElementById('time').value = dados.time;
                if (dados.fuso !== undefined && dados.fuso !== '') document.getElementById('fuso').value = dados.fuso;
                if (dados.lat !== undefined && dados.lat !== '') document.getElementById('latNatal').value = dados.lat;
                if (dados.lon !== undefined && dados.lon !== '') document.getElementById('lonNatal').value = dados.lon;
                if (dados.cidade) document.getElementById('cidadeNatalInput').value = dados.cidade;
                return true;
            } catch (err) {
                console.warn('Não foi possível carregar os dados natais compartilhados:', err);
                return false;
            }
        }

        function salvarDadosNataisCompartilhados() {
            try {
                const dados = {
                    date: document.getElementById('date').value,
                    time: document.getElementById('time').value,
                    fuso: document.getElementById('fuso').value,
                    lat: document.getElementById('latNatal').value,
                    lon: document.getElementById('lonNatal').value,
                    cidade: document.getElementById('cidadeNatalInput').value
                };
                localStorage.setItem(CHAVE_DADOS_NATAIS, JSON.stringify(dados));
            } catch (err) {
                console.warn('Não foi possível salvar os dados natais compartilhados:', err);
            }
        }

        window.onload = () => {
            const hoje = new Date();
            document.getElementById('dataTransito').value = hoje.toISOString().split('T')[0];
            document.getElementById('horaTransito').value = hoje.toTimeString().split(' ')[0].substring(0, 5);
            carregarDadosNataisCompartilhados();
            carregarPerfisSalvos();
            executarAnalise();

            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('./sw.js').then((registro) => {
                    registro.update();
                }).catch(err => console.warn('Falha ao registrar Service Worker:', err));

                let jaRecarregou = false;
                navigator.serviceWorker.addEventListener('controllerchange', () => {
                    if (jaRecarregou) return;
                    jaRecarregou = true;
                    window.location.reload();
                });
            }
        };

        function normalizarGraus(deg) {
            let res = deg % 360;
            return res < 0 ? res + 360 : res;
        }

// =========================================================
// POSIÇÕES PLANETÁRIAS — ASTRONOMY ENGINE
// Mesma abordagem usada em revolucao_solar.html:
// longitude eclíptica geocêntrica aparente, com correções
// calculadas pela própria efeméride do Astronomy Engine.
// =========================================================
function calcularPosicaoPlaneta(nome, dataUtc) {
    const corpos = {
        "Sol": Astronomy.Body.Sun,
        "Mercúrio": Astronomy.Body.Mercury,
        "Vênus": Astronomy.Body.Venus,
        "Marte": Astronomy.Body.Mars,
        "Júpiter": Astronomy.Body.Jupiter,
        "Saturno": Astronomy.Body.Saturn,
        "Urano": Astronomy.Body.Uranus,
        "Netuno": Astronomy.Body.Neptune,
        "Plutão": Astronomy.Body.Pluto
    };

    if (nome === "Lua") {
        return normalizarGraus(Astronomy.EclipticGeoMoon(dataUtc).lon);
    }

    const corpo = corpos[nome];
    if (!corpo) return 0;

    const vetor = Astronomy.GeoVector(corpo, dataUtc, true);
    return normalizarGraus(Astronomy.Ecliptic(vetor).elon);
}

        function calcularCasasEAngulos(lat, lon, dataUtc) {
            const jd = (dataUtc.getTime() / 86400000) + 2440587.5;
            const d = jd - 2451545.0;
            let gmst = normalizarGraus(280.46061837 + 360.98564736629 * d);
            let lst = normalizarGraus(gmst + lon);

            let radLat = lat * (Math.PI / 180);
            let radLst = lst * (Math.PI / 180);
            let eps = 23.439 * (Math.PI / 180);

            let mc = Math.atan2(Math.sin(radLst), Math.cos(radLst) * Math.cos(eps)) * (180 / Math.PI);
            mc = normalizarGraus(mc);

            let asc = Math.atan2(Math.cos(radLst), -Math.sin(radLst) * Math.cos(eps) - Math.tan(radLat) * Math.sin(eps)) * (180 / Math.PI);
            asc = normalizarGraus(asc);

            let dsc = normalizarGraus(asc + 180);
            let ic = normalizarGraus(mc + 180);

            let casas = [];
            for(let i=0; i<12; i++) {
                casas.push(normalizarGraus(asc + (i * 30)));
            }
            return { asc, mc, dsc, ic, casas };
        }

        function obterInfoSigno(graus) {
            const idx = Math.floor(graus / 30);
            const g = Math.floor(graus % 30);
            const m = Math.floor(((graus % 30) - g) * 60);
            return { signo: SIGNOS[idx], simbolo: SIMBOLOS_SIGNOS[idx], grau: g, min: m, idx };
        }

        function acharCasa(grauPlaneta, casas) {
            for (let i = 0; i < 12; i++) {
                let prox = (i === 11) ? casas[0] : casas[i + 1];
                let cAtual = casas[i];
                if (prox < cAtual) {
                    if (grauPlaneta >= cAtual || grauPlaneta < prox) return i + 1;
                } else {
                    if (grauPlaneta >= cAtual && grauPlaneta < prox) return i + 1;
                }
            }
            return 1;
        }

        function calcularAspecto(g1, g2) {
            let diff = Math.abs(g1 - g2);
            if (diff > 180) diff = 360 - diff;

            const aspectos = [
                { nome: "Conjunção", simbolo: "☌", angulo: 0 },
                { nome: "Sextil", simbolo: "✶", angulo: 60 },
                { nome: "Quadratura", simbolo: "☐", angulo: 90 },
                { nome: "Trígono", simbolo: "△", angulo: 120 },
                { nome: "Oposição", simbolo: "☍", angulo: 180 }
            ];

            for (let asp of aspectos) {
                let orbe = Math.abs(diff - asp.angulo);
                if (orbe <= 2.5) {
                    let estado = "Aplicativo";
                    if (orbe <= 0.3) estado = "Exato";
                    else if (g1 > g2) estado = "Separativo";

                    return {
                        nome: asp.nome,
                        simbolo: asp.simbolo,
                        orbeVal: orbe,
                        orbeFormat: `${Math.floor(orbe)}°${Math.floor((orbe % 1) * 60)}'`,
                        estado: estado
                    };
                }
            }
            return null;
        }

        function determinarTemporalidade(planeta) {
            if (["Plutão", "Netuno", "Urano", "Saturno"].includes(planeta)) return "LONGO PRAZO";
            if (["Júpiter", "Marte"].includes(planeta)) return "MÉDIO PRAZO";
            if (["Vênus", "Mercúrio", "Sol"].includes(planeta)) return "CURTO PRAZO";
            return "GATILHO DO DIA";
        }

        function alternarCard(headerElement) {
            const card = headerElement.closest('.expand-card');
            card.classList.toggle('open');
        }

        let contextoTransitosAtual = null;

        const CORRESPONDENCIAS_ALQUIMICAS = {
            Sol: { metal: 'Ouro', principio: 'consciência, vitalidade, centralidade e manifestação do propósito' },
            Lua: { metal: 'Prata', principio: 'receptividade, memória, imaginação e sensibilidade' },
            Marte: { metal: 'Ferro', principio: 'ação, coragem, corte, impulso e enfrentamento' },
            Mercúrio: { metal: 'Mercúrio', principio: 'mediação, inteligência, movimento e comunicação' },
            Júpiter: { metal: 'Estanho', principio: 'expansão, ordem, confiança e crescimento' },
            Vênus: { metal: 'Cobre', principio: 'atração, conciliação, prazer, valor e vínculo' },
            Saturno: { metal: 'Chumbo', principio: 'limite, estrutura, tempo, responsabilidade e condensação' }
        };

        const PRINCIPIOS_PLANETARIOS = {
            Sol:'vitalidade e consciência', Lua:'sensibilidade e adaptação', Mercúrio:'mente e comunicação', Vênus:'vínculo e valores', Marte:'ação e iniciativa', Júpiter:'expansão e sentido', Saturno:'estrutura e responsabilidade'
        };

        function formatarHoraLocal(dataUtc, fuso) {
            const d = new Date(dataUtc.getTime() + fuso * 3600000);
            return d.toISOString().substring(11,16);
        }

        function calcularFaseLunar(lonLua, lonSol) {
            const elongacao = normalizarGraus(lonLua - lonSol);
            if (elongacao < 22.5 || elongacao >= 337.5) return 'Lua Nova';
            if (elongacao < 67.5) return 'Crescente';
            if (elongacao < 112.5) return 'Quarto Crescente';
            if (elongacao < 157.5) return 'Gibosa Crescente';
            if (elongacao < 202.5) return 'Lua Cheia';
            if (elongacao < 247.5) return 'Gibosa Minguante';
            if (elongacao < 292.5) return 'Quarto Minguante';
            return 'Minguante';
        }

        function obterDadosHoraPlanetaria(utcAtual, lat, lon, fuso, regenteDia) {
            const observer = new Astronomy.Observer(lat, lon, 0);
            const inicioDiaUtc = new Date(`${document.getElementById('dataTransito').value}T00:00:00Z`);
            let nascer, por;
            try {
                nascer = Astronomy.SearchRiseSet(Astronomy.Body.Sun, observer, +1, inicioDiaUtc, 1);
                por = Astronomy.SearchRiseSet(Astronomy.Body.Sun, observer, -1, new Date(inicioDiaUtc.getTime()+86400000), 1);
            } catch(e) { nascer = null; por = null; }
            const diaIdx = new Date(`${document.getElementById('dataTransito').value}T12:00:00`).getDay();
            const regentesDias = ['Saturno','Sol','Lua','Marte','Mercúrio','Júpiter','Vênus'];
            const regente = regentesDias[diaIdx];
            let numero = 1, horaPlaneta = regente, periodo = 'diurna';
            if (nascer && por) {
                const sunrise = nascer.date.getTime();
                const sunset = por.date.getTime();
                const t = utcAtual.getTime();
                if (t >= sunrise && t < sunset) {
                    numero = Math.min(12, Math.floor((t-sunrise)/((sunset-sunrise)/12))+1);
                    horaPlaneta = ORDEM_CALDAICA[(ORDEM_CALDAICA.indexOf(regente)+numero-1)%7];
                } else {
                    periodo = 'noturna';
                    let proximoNascer = sunrise + 86400000;
                    const inicioNoite = t >= sunset ? sunset : sunrise-86400000;
                    const fimNoite = t >= sunset ? proximoNascer : sunrise;
                    numero = Math.min(12, Math.floor((t-inicioNoite)/((fimNoite-inicioNoite)/12))+1);
                    horaPlaneta = ORDEM_CALDAICA[(ORDEM_CALDAICA.indexOf(regente)+12+numero-1)%7];
                }
            }
            return { regente, horaPlaneta, numero, periodo, nascer, por };
        }

        function executarAnalise() {
            try {
                executarAnaliseInterna();
            } catch (erro) {
                console.error('Erro ao processar análise astrológica:', erro);
                const ids = ['climaGeralTexto','solExplicacaoTexto','luaDetalhesTexto'];
                ids.forEach(id => { const el=document.getElementById(id); if(el) el.innerHTML=`<strong style="color:var(--fogo);">Não foi possível concluir o cálculo.</strong> Verifique se a biblioteca Astronomy Engine foi carregada e tente processar novamente.`; });
                const lista=document.getElementById('posicoesPrincipaisList');
                if(lista) lista.innerHTML='<p style="color:var(--fogo);font-size:.82rem;">Erro no cálculo. Abra o console do navegador para detalhes.</p>';
            }
        }

        function executarAnaliseInterna() {
            if (typeof Astronomy === 'undefined') throw new Error('Astronomy Engine não carregado.');
            // Data Natal
            const dNatal = document.getElementById('date').value;
            const hNatal = document.getElementById('time').value;
            const fusoNatal = parseFloat(document.getElementById('fuso').value);
            const latN = parseFloat(document.getElementById('latNatal').value);
            const lonN = parseFloat(document.getElementById('lonNatal').value);
            const utcNatal = new Date(new Date(`${dNatal}T${hNatal}:00Z`).getTime() - (fusoNatal * 3600000));
            salvarDadosNataisCompartilhados();

            // Data Trânsito
            const dAtual = document.getElementById('dataTransito').value;
            const hAtual = document.getElementById('horaTransito').value;
            const fusoAtual = parseFloat(document.getElementById('fusoAtual').value);
            const latA = parseFloat(document.getElementById('latAtual').value);
            const lonA = parseFloat(document.getElementById('lonAtual').value);
            const utcAtual = new Date(new Date(`${dAtual}T${hAtual}:00Z`).getTime() - (fusoAtual * 3600000));

            // Posições Natais
            const angulosNatais = calcularCasasEAngulos(latN, lonN, utcNatal);
            const planetasNatais = {};
            const listaP = ["Sol", "Lua", "Mercúrio", "Vênus", "Marte", "Júpiter", "Saturno", "Urano", "Netuno", "Plutão"];
            listaP.forEach(p => { planetasNatais[p] = calcularPosicaoPlaneta(p, utcNatal); });
            planetasNatais["Asc"] = angulosNatais.asc;
            planetasNatais["MC"] = angulosNatais.mc;
            planetasNatais["Dsc"] = angulosNatais.dsc;
            planetasNatais["Ic"] = angulosNatais.ic;

            // Posições Atual
            const planetasHoje = {};
            listaP.forEach(p => { planetasHoje[p] = calcularPosicaoPlaneta(p, utcAtual); });

            // Roda Astrológica Integrada
            desenharRodaAstrologica(planetasNatais, planetasHoje, angulosNatais.casas);

            // 1. VISÃO GERAL DO CÉU
            const solHojeInfo = obterInfoSigno(planetasHoje["Sol"]);
            const luaHojeInfo = obterInfoSigno(planetasHoje["Lua"]);
            const horaDia = obterDadosHoraPlanetaria(utcAtual, latA, lonA, fusoAtual);
            const regenteDia = horaDia.regente;
            const alquimiaDia = CORRESPONDENCIAS_ALQUIMICAS[regenteDia] || { metal:'—', principio:PRINCIPIOS_PLANETARIOS[regenteDia] || '—' };
            const faseLunar = calcularFaseLunar(planetasHoje["Lua"], planetasHoje["Sol"]);
            const ascMomento = calcularCasasEAngulos(latA, lonA, utcAtual).asc;
            const ascMomentoInfo = obterInfoSigno(ascMomento);

            document.getElementById('climaGeralTexto').innerHTML =
                `O céu do momento apresenta <strong>Sol em ${solHojeInfo.signo} ${solHojeInfo.grau}°</strong> e <strong>Lua em ${luaHojeInfo.signo} ${luaHojeInfo.grau}°</strong>. ` +
                `O Sol mostra o eixo de consciência, vitalidade e direção do dia; a Lua mostra o ritmo subjetivo, a sensibilidade e aquilo que tende a ser sentido com maior imediatismo. ` +
                `O <strong>regente do dia</strong> fornece a tônica simbólica geral, enquanto a <strong>hora planetária</strong> funciona como uma tonalidade mais específica dentro desse dia. ` +
                `A correspondência alquímica não é uma causa física: é uma linguagem simbólica para compreender a qualidade da experiência. ` +
                `O ponto decisivo desta tela é a comparação com o mapa natal: o mesmo céu coletivo ganha significado diferente conforme as casas e os planetas natais que ele toca.`;
            document.getElementById('regenteDiaVal').innerText = regenteDia;
            document.getElementById('regenteDiaHelp').innerText = `O ${regenteDia} colore simbolicamente o dia com ${PRINCIPIOS_PLANETARIOS[regenteDia] || 'sua função tradicional'}. Não é uma causa física, mas uma chave interpretativa tradicional.`;
            document.getElementById('horaPlanetariaVal').innerText = `${horaDia.horaPlaneta} — ${horaDia.periodo}`;
            document.getElementById('numeroHoraVal').innerText = `${horaDia.numero}ª hora ${horaDia.periodo}`;
            document.getElementById('horaPlanetariaHelp').innerText = `A ${horaDia.numero}ª hora ${horaDia.periodo} é regida por ${horaDia.horaPlaneta}; a sequência é simbólica e segue a ordem caldaica a partir do regente do dia.`;
            document.getElementById('governanteAlquimicoVal').innerText = `${alquimiaDia.metal} — ${regenteDia}`;
            document.getElementById('governanteAlquimicoHelp').innerText = `Na correspondência alquímica tradicional, ${regenteDia} relaciona-se a ${alquimiaDia.metal}. O simbolismo aponta para ${alquimiaDia.principio}.`;
            document.getElementById('principioRegenteVal').innerText = PRINCIPIOS_PLANETARIOS[regenteDia] || '—';
            document.getElementById('ascMomentoVal').innerText = `${ascMomentoInfo.simbolo} ${ascMomentoInfo.signo} ${ascMomentoInfo.grau}°`;
            document.getElementById('faseLunarVal').innerText = faseLunar;
            document.getElementById('luzDiaVal').innerText = (horaDia.nascer && horaDia.por) ? `${formatarHoraLocal(horaDia.nascer.date,fusoAtual)} → ${formatarHoraLocal(horaDia.por.date,fusoAtual)}` : 'Não calculada';

            // 10 astros principais: posições do céu atual projetadas sobre as casas natais.
            const ordemAstros = ["Sol","Lua","Mercúrio","Vênus","Marte","Júpiter","Saturno","Urano","Netuno","Plutão"];
            document.getElementById('posicoesPrincipaisList').innerHTML = ordemAstros.map(p => {
                const info = obterInfoSigno(planetasHoje[p]);
                const casa = acharCasa(planetasHoje[p], angulosNatais.casas);
                return `<span class="position-line">${SIMBOLOS_PLANETAS[p]} <strong>${p}</strong> - ${info.simbolo} <strong>${info.signo}</strong> - <strong>Casa ${casa}</strong></span>`;
            }).join('');

            contextoTransitosAtual = {
                data: dAtual, hora: hAtual, local: {lat:latA,lon:lonA},
                regenteDia, horaPlanetaria: horaDia.horaPlaneta, numeroHora: horaDia.numero, periodoHora: horaDia.periodo,
                metalAlquimico: alquimiaDia.metal, principioRegente: alquimiaDia.principio, faseLunar,
                sol: {signo:solHojeInfo.signo, grau:solHojeInfo.grau, casa:null}, lua:{signo:luaHojeInfo.signo,grau:luaHojeInfo.grau,casa:null},
                planetasHoje, planetasNatais, casasNatais: angulosNatais.casas, trânsitosEncontrados: []
            };

            // Agora que o contexto-base existe, podemos calcular e renderizar os
            // comparativos de elementos, ritmos e polaridades sem interromper o fluxo.
            calcularElementosERitmos(planetasHoje, planetasNatais);

            // 2. SOL
            const casaSolNatal = acharCasa(planetasHoje["Sol"], angulosNatais.casas);
            const signoCuspideSol = SIGNOS[Math.floor(angulosNatais.casas[casaSolNatal - 1] / 30)];
            const regenteCasaSol = REGENTES_SIGNOS[signoCuspideSol];
            document.getElementById('solPosicaoVal').innerText = `${solHojeInfo.simbolo} ${solHojeInfo.signo} ${solHojeInfo.grau}°${String(solHojeInfo.min).padStart(2,'0')}'`;
            document.getElementById('solCasaVal').innerText = `Casa ${casaSolNatal} Natal`;
            document.getElementById('solRegenteCasaVal').innerText = regenteCasaSol;
            const aspectosSolHoje = listaP.concat(["Asc","MC"]).map(pNatal => {
                const asp=calcularAspecto(planetasHoje["Sol"],planetasNatais[pNatal]);
                return asp ? `${asp.nome} ${pNatal} (${asp.orbeFormat})` : null;
            }).filter(Boolean);
            document.getElementById('solExplicacaoTexto').innerHTML =
                `O Sol em trânsito em <strong>${solHojeInfo.signo}</strong> percorre a <strong>Casa ${casaSolNatal} Natal</strong>, portanto ilumina hoje o campo de <strong>${SIGNIFICADO_CASAS[casaSolNatal].toLowerCase()}</strong>. ` +
                `A casa responde à pergunta <em>“em que área da vida minha consciência está sendo chamada a estar presente?”</em>. ` +
                `O signo mostra <em>como</em> essa energia solar tende a se expressar, enquanto o Sol natal mostra a identidade e a vontade de base com as quais esse trânsito precisa dialogar. ` +
                `${aspectosSolHoje.length ? `Hoje, o Sol também forma <strong>${aspectosSolHoje.join(', ')}</strong> com o mapa natal, tornando essa ativação mais específica.` : 'Hoje não há aspecto maior do Sol dentro da orbe utilizada; a principal leitura vem da casa natal atravessada e da relação com o Sol natal.'}`;

            // 3. LUA
            const casaLuaNatal = acharCasa(planetasHoje["Lua"], angulosNatais.casas);
            document.getElementById('luaPosicaoVal').innerText = `${luaHojeInfo.simbolo} ${luaHojeInfo.signo} ${luaHojeInfo.grau}°${String(luaHojeInfo.min).padStart(2,'0')}'`;
            document.getElementById('luaCasaVal').innerText = `Casa ${casaLuaNatal} Natal`;
            document.getElementById('luaDetalhesTexto').innerHTML =
                `A Lua em <strong>${luaHojeInfo.signo}</strong> atravessa a <strong>Casa ${casaLuaNatal} Natal</strong>, ativando <strong>${SIGNIFICADO_CASAS[casaLuaNatal].toLowerCase()}</strong>. ` +
                `Ela funciona como o relógio subjetivo do trânsito: mostra onde a experiência tende a ficar mais sensível, onde necessidades de segurança podem aparecer e onde a pessoa pode reagir antes mesmo de formular racionalmente o que está acontecendo. ` +
                `O significado pessoal aumenta quando a Lua atual encontra a <strong>Lua natal</strong> e os demais pontos do mapa; por isso os aspectos listados abaixo mostram quais padrões emocionais natais estão sendo tocados hoje.`;

            contextoTransitosAtual.sol.casa = casaSolNatal;
            contextoTransitosAtual.lua.casa = casaLuaNatal;

            let htmlLuaAspectos = "";
            listaP.concat(["Asc","MC"]).forEach(pNatal => {
                let asp = calcularAspecto(planetasHoje["Lua"], planetasNatais[pNatal]);
                if (asp) {
                    let numCasa = (["Asc","MC","Dsc","Ic"].includes(pNatal)) ? "Ângulo Estrutural" : `Casa ${acharCasa(planetasNatais[pNatal], angulosNatais.casas)}`;
                    let idIa = `ia-lua-${pNatal}`;
                    htmlLuaAspectos += `
                        <div class="expand-card card-natal-border">
                            <div class="expand-header" onclick="alternarCard(this)">
                                <span class="expand-title">🔵 ☽ Lua Trânsito ${asp.simbolo} ${pNatal} Natal</span>
                                <div style="display:flex; align-items:center; gap:8px;">
                                    <span class="expand-badge badge-tempo">GATILHO DO DIA</span>
                                    <span class="arrow-icon">▼</span>
                                </div>
                            </div>
                            <div class="expand-content">
                                <div class="detail-row">
                                    <div class="detail-cell"><span>CASA TRANSITADA</span>Casa ${casaLuaNatal}</div>
                                    <div class="detail-cell"><span>POSIÇÃO NATAL</span>${numCasa}</div>
                                    <div class="detail-cell"><span>PRECISÃO</span>${asp.orbeFormat} (${asp.estado})</div>
                                </div>
                                <p><strong>Área Mobilizada:</strong> ${SIGNIFICADO_CASAS[casaLuaNatal]}</p>
                                <div style="margin-top: 10px; display: flex; gap: 8px;">
                                    <button type="button" class="btn-ia" onclick="gerarLeituraIA('Lua em Trânsito', '${pNatal} Natal', 'Casa ${casaLuaNatal}', '${idIa}')">✨ Leitura IA</button>
                                    <button type="button" class="btn-ia" style="background:var(--bg-card); border:1px solid var(--border);" onclick="ouvirTexto('${idIa}')">🔊 Ouvir</button>
                                </div>
                                <div class="painel-resposta-ia" id="${idIa}"></div>
                            </div>
                        </div>
                    `;
                }
            });
            document.getElementById('luaAspectosList').innerHTML = htmlLuaAspectos || "<p style='font-size:0.8rem; color:#8b949e;'>A Lua não faz aspectos exatos com seus planetas pessoais no dia de hoje.</p>";

            // 4. ATIVAÇÕES INDIVIDUAIS
            let trânsitosEncontrados = [];
            const planetasTransitantes = ["Plutão", "Netuno", "Urano", "Saturno", "Júpiter", "Marte", "Vênus", "Mercúrio", "Sol"];
            const alvos = ["Sol", "Lua", "Mercúrio", "Vênus", "Marte", "Asc", "MC", "Dsc", "Ic"];

            planetasTransitantes.forEach(pHoje => {
                alvos.forEach(pNatal => {
                    let asp = calcularAspecto(planetasHoje[pHoje], planetasNatais[pNatal]);
                    if (asp && asp.orbeVal <= 2.0) {
                        let casaTrans = acharCasa(planetasHoje[pHoje], angulosNatais.casas);
                        let casaNatalAtiv = (["Asc","MC","Dsc","Ic"].includes(pNatal)) ? "Ângulo Estrutural" : `Casa ${acharCasa(planetasNatais[pNatal], angulosNatais.casas)}`;
                        let temp = determinarTemporalidade(pHoje);

                        trânsitosEncontrados.push({
                            pHoje, pNatal, asp, casaTrans, casaNatalAtiv, temp,
                            peso: (temp === "LONGO PRAZO" ? 4 : temp === "MÉDIO PRAZO" ? 3 : 2) + (asp.estado === "Exato" ? 2 : 0)
                        });
                    }
                });
            });

            trânsitosEncontrados.sort((a, b) => b.peso - a.peso);

            let htmlProvas = "";
            trânsitosEncontrados.forEach((item, index) => {
                let idIa = `ia-trans-${index}`;
                htmlProvas += `
                    <div class="expand-card card-natal-border">
                        <div class="expand-header" onclick="alternarCard(this)">
                            <span class="expand-title">🔵 ${SIMBOLOS_PLANETAS[item.pHoje]} ${item.pHoje} em Trânsito ${item.asp.simbolo} ${item.pNatal} Natal</span>
                            <div style="display:flex; align-items:center; gap:8px;">
                                <span class="expand-badge badge-tempo">${item.temp}</span>
                                <span class="arrow-icon">▼</span>
                            </div>
                        </div>
                        <div class="expand-content">
                            <div class="detail-row">
                                <div class="detail-cell"><span>CASA TRANSITADA</span>Casa ${item.casaTrans}</div>
                                <div class="detail-cell"><span>CASA NATAL ATIVADA</span>${item.casaNatalAtiv}</div>
                                <div class="detail-cell"><span>ORBE / ESTADO</span>${item.asp.orbeFormat} (${item.asp.estado})</div>
                            </div>
                            <p><strong>Área da Vida Atingida:</strong> ${SIGNIFICADO_CASAS[item.casaTrans]}</p>
                            <div style="margin-top: 10px; display: flex; gap: 8px;">
                                <button type="button" class="btn-ia" onclick="gerarLeituraIA('${item.pHoje} em Trânsito', '${item.pNatal} Natal', 'Casa ${item.casaTrans}', '${idIa}')">✨ Leitura IA</button>
                                <button type="button" class="btn-ia" style="background:var(--bg-card); border:1px solid var(--border);" onclick="ouvirTexto('${idIa}')">🔊 Ouvir</button>
                            </div>
                            <div class="painel-resposta-ia" id="${idIa}"></div>
                        </div>
                    </div>
                `;
            });

            document.getElementById('transitosRelevantesList').innerHTML = htmlProvas ||
                `<div class="expand-card card-natal-border open">
                    <div class="expand-header" onclick="alternarCard(this)">
                        <span class="expand-title">🔵 Integração sem Atritos Dominantes</span>
                        <span class="arrow-icon">▼</span>
                    </div>
                    <div class="expand-content">
                        <p>Nenhuma prova dominante identificada hoje; o momento é de observação e equilíbrio interno.</p>
                    </div>
                </div>`;

            contextoTransitosAtual.trânsitosEncontrados = trânsitosEncontrados;

            // 5. CONVERGÊNCIA
            let casasFoco = {};
            trânsitosEncontrados.forEach(t => { casasFoco[t.casaTrans] = (casasFoco[t.casaTrans] || 0) + 1; });
            let casaMaisAtiva = Object.keys(casasFoco).sort((a,b) => casasFoco[b] - casasFoco[a])[0];
            const aspectosExatos = trânsitosEncontrados.filter(t=>t.asp.estado==='Exato').length;
            const longos = trânsitosEncontrados.filter(t=>t.temp==='LONGO PRAZO').length;
            const tensionantes = trânsitosEncontrados.filter(t=>['Quadratura','Oposição'].includes(t.asp.nome));
            const facilitadores = trânsitosEncontrados.filter(t=>['Trígono','Sextil'].includes(t.asp.nome));
            const maiorTensao = tensionantes[0];
            const maiorFacilidade = facilitadores[0];
            const casaTexto = casaMaisAtiva ? `Casa ${casaMaisAtiva} Natal — ${SIGNIFICADO_CASAS[casaMaisAtiva]}` : 'Nenhuma casa concentrou aspectos dentro da orbe usada.';

            document.getElementById('convergenciaConteudo').innerHTML = `
                <div class="sintese-metrics">
                    <div class="sintese-metric"><span>Área mais ativada</span><strong>${casaTexto}</strong></div>
                    <div class="sintese-metric"><span>Aspectos exatos</span><strong>${aspectosExatos}</strong></div>
                    <div class="sintese-metric"><span>Processos de longo prazo</span><strong>${longos}</strong></div>
                </div>
                <p><strong>Convergência:</strong> ${casaMaisAtiva ? `o maior agrupamento de ativações recai na Casa ${casaMaisAtiva}.` : 'o dia não apresenta concentração clara por casa.'} Isso não significa que essa área determine os acontecimentos; indica onde o mapa recebe maior densidade simbólica no recorte analisado.</p>
                <p style="margin-top:8px;"><strong>Tensão predominante:</strong> ${maiorTensao ? `${maiorTensao.pHoje} ${maiorTensao.asp.simbolo} ${maiorTensao.pNatal}, ${maiorTensao.asp.nome}, envolvendo a Casa ${maiorTensao.casaTrans}.` : 'nenhuma quadratura ou oposição principal dentro da orbe considerada.'}</p>
                <p style="margin-top:8px;"><strong>Via de integração:</strong> ${maiorFacilidade ? `${maiorFacilidade.pHoje} ${maiorFacilidade.asp.simbolo} ${maiorFacilidade.pNatal}, ${maiorFacilidade.asp.nome}, oferece um canal de fluidez para trabalhar conscientemente as ativações.` : 'a integração depende sobretudo da observação dos temas ativados e dos aspectos maiores do dia.'}</p>
            `;

            contextoTransitosAtual.convergencia={casaMaisAtiva,casaTexto,aspectosExatos,longos,tensao:maiorTensao?{planeta:maiorTensao.pHoje,aspecto:maiorTensao.asp.nome,alvo:maiorTensao.pNatal,casa:maiorTensao.casaTrans}:null,facilidade:maiorFacilidade?{planeta:maiorFacilidade.pHoje,aspecto:maiorFacilidade.asp.nome,alvo:maiorFacilidade.pNatal,casa:maiorFacilidade.casaTrans}:null};

            // 6. SÍNTESE FINAL — leitura estrutural local; a IA acrescenta a síntese interpretativa profunda.
            const casaFoco = casaMaisAtiva || casaSolNatal;
            const estadoTensao = tensionantes.length > facilitadores.length ? 'mais desafiador e exigente' : facilitadores.length > tensionantes.length ? 'mais fluido e cooperativo' : 'misto, alternando abertura e tensão';
            document.getElementById('sinteseFinalConteudo').innerHTML = `
                <div class="sintese-metrics">
                    <div class="sintese-metric"><span>Área central</span><strong>Casa ${casaFoco} — ${SIGNIFICADO_CASAS[casaFoco]}</strong></div>
                    <div class="sintese-metric"><span>Clima de aspectos</span><strong>${estadoTensao}</strong></div>
                    <div class="sintese-metric"><span>Ritmo subjetivo</span><strong>Lua em ${luaHojeInfo.signo} · Casa ${casaLuaNatal}</strong></div>
                </div>
                <div class="sintese-section"><strong>☉ Consciência e identidade:</strong> o Sol percorre a Casa ${casaSolNatal}, colocando foco consciente em ${SIGNIFICADO_CASAS[casaSolNatal].toLowerCase()}. O dia tende a pedir presença nesse território, mas sua expressão deve ser lida em relação ao Sol natal e aos aspectos ativos.</div>
                <div class="sintese-section"><strong>🌙 Estado emocional:</strong> a Lua em ${luaHojeInfo.signo}, na Casa ${casaLuaNatal}, descreve o campo de sensibilidade e necessidade de segurança do momento. Ela pode tornar ${SIGNIFICADO_CASAS[casaLuaNatal].toLowerCase()} emocionalmente mais perceptível.</div>
                <div class="sintese-section"><strong>⚔️ Conflitos:</strong> ${maiorTensao ? `${maiorTensao.pHoje} em ${maiorTensao.asp.nome.toLowerCase()} com ${maiorTensao.pNatal} natal cria uma zona de fricção que pede consciência em vez de reação automática.` : 'não há um conflito dominante claramente isolado; a tensão deve ser lida pela combinação dos aspectos e pela casa mais ativada.'}</div>
                <div class="sintese-section"><strong>✦ Bençãos e recursos:</strong> ${maiorFacilidade ? `${maiorFacilidade.pHoje} em ${maiorFacilidade.asp.nome.toLowerCase()} com ${maiorFacilidade.pNatal} natal indica um ponto de cooperação que pode facilitar a integração do processo.` : 'a principal força disponível está na observação consciente e na capacidade de trabalhar a área central do dia sem agir por automatismo.'}</div>
                <div class="sintese-section"><strong>🜂 Estado de consciência:</strong> o momento é melhor compreendido como ${estadoTensao}; a pergunta central é como transformar a pressão ou abertura do céu em escolha consciente dentro da área mais ativada.</div>
                <div class="sintese-section"><strong>🜁 Relação consigo mesmo:</strong> o mapa não determina um sentimento único. Ele mostra tendências simbólicas: hoje a pessoa pode perceber com mais intensidade a distância entre o modo habitual de funcionar e aquilo que o céu está solicitando que seja revisto, desenvolvido ou integrado.</div>
            `;
        }

        // --- CÁLCULO DOS ELEMENTOS, RITMOS E POLARIDADES ---
        function calcularElementosERitmos(planetasHoje, planetasNatais) {
            const calcular = (mapa) => {
                const elem={Fogo:0,Terra:0,Ar:0,Água:0}, ritmos={Cardinal:0,Fixo:0,Mutável:0}, pol={Masculina:0,Feminina:0};
                Object.keys(mapa).forEach(p=>{ const info=obterInfoSigno(mapa[p]); const prop=PROPRIEDADES_SIGNOS[info.signo]; if(prop){elem[prop.elemento]++;ritmos[prop.ritmo]++;pol[prop.polaridade]++;} });
                return {elem,ritmos,pol};
            };
            const hoje=calcular(planetasHoje), natal=calcular(planetasNatais);
            const render=(atual,origem,cores)=>Object.keys(atual).map(k=>{
                const a=Math.round(atual[k]/10*100), n=Math.round(origem[k]/10*100), delta=a-n;
                const sinal=delta>0?`+${delta}`:delta;
                return `<div class="element-bar-row" style="display:block;margin-bottom:10px;">
                    <div style="display:flex;justify-content:space-between;font-size:.76rem;margin-bottom:4px;"><span>${k}</span><span style="color:#8b949e;">Dia ${a}% · Natal ${n}% · Δ ${sinal} p.p.</span></div>
                    <div class="bar-bg" style="margin:0 0 4px 0;"><div class="bar-fill" style="width:${a}%;background:${cores[k]||'var(--destaque)'};"></div></div>
                    <div class="bar-bg" style="margin:0;opacity:.55;"><div class="bar-fill" style="width:${n}%;background:${cores[k]||'var(--destaque)'};"></div></div>
                </div>`;
            }).join('');
            const coresElem={Fogo:'var(--fogo)',Terra:'var(--terra)',Ar:'var(--ar)',Água:'var(--agua)'};
            document.getElementById('elementosContainer').innerHTML=render(hoje.elem,natal.elem,coresElem);
            document.getElementById('modalidadesContainer').innerHTML=render(hoje.ritmos,natal.ritmos,{Cardinal:'var(--destaque)',Fixo:'var(--destaque)',Mutável:'var(--destaque)'});
            document.getElementById('polaridadesContainer').innerHTML=render(hoje.pol,natal.pol,{Masculina:'var(--sol)',Feminina:'var(--ia-color)'});
            contextoTransitosAtual.elementos={dia:hoje.elem,natal:natal.elem};
            contextoTransitosAtual.ritmos={dia:hoje.ritmos,natal:natal.ritmos};
            contextoTransitosAtual.polaridades={dia:hoje.pol,natal:natal.pol};
        }

        // --- RENDERIZAÇÃO GRÁFICA DA RODA ASTROLÓGICA ---
// --- RENDERIZAÇÃO GRÁFICA DA RODA ASTROLÓGICA ---
// A roda agora possui explicitamente o anel zodiacal e os 12 símbolos.
// O código anterior desenhava apenas círculos/linhas e planetas, portanto
// os signos nunca eram inseridos no SVG.
function desenharRodaAstrologica(natal, hoje, casas) {
    const svg=document.getElementById('chartSvg');
    svg.innerHTML='';
    const NS='http://www.w3.org/2000/svg';
    const cx=300,cy=300,rOuter=282,rMid=204,rInner=124,rCore=62;
    const angle=(grau)=>(-90+normalizarGraus(grau))*Math.PI/180;
    const point=(r,grau)=>({x:cx+r*Math.cos(angle(grau)),y:cy+r*Math.sin(angle(grau))});
    const add=(tag,attrs,text='')=>{const e=document.createElementNS(NS,tag);Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,v));if(text)e.textContent=text;svg.appendChild(e);return e;};
    const textAt=(r,grau,text,attrs={})=>add('text',{x:point(r,grau).x,y:point(r,grau).y,'text-anchor':'middle','dominant-baseline':'central',...attrs},text);

    add('circle',{cx,cy,r:rOuter,fill:'#0b0e14',stroke:'#30363d','stroke-width':2});
    add('circle',{cx,cy,r:rMid,fill:'#0d1117',stroke:'#30363d','stroke-width':1.5});
    add('circle',{cx,cy,r:rInner,fill:'#161b22',stroke:'#30363d','stroke-width':1.5});

    // Anel externo: os 12 signos fixos do zodíaco.
    for(let i=0;i<12;i++){
        const a=i*30, p1=point(rOuter,a), p2=point(rMid,a);
        add('line',{x1:p1.x,y1:p1.y,x2:p2.x,y2:p2.y,stroke:'#30363d','stroke-width':1});
        textAt((rOuter+rMid)/2,a+15,SIMBOLOS_SIGNOS[i],{fill:'#e3b341','font-family':'Segoe UI Symbol, sans-serif','font-size':25,'font-weight':'bold'});
    }

    // Divisões das casas natais sobre todos os anéis.
    casas.forEach((c,i)=>{
        const p1=point(rMid,c),p2=point(rCore,c);
        add('line',{x1:p1.x,y1:p1.y,x2:p2.x,y2:p2.y,stroke:(i===0?'#58a6ff':'#30363d'),'stroke-width':i===0?2:1});
        const pc=point(rInner+18,c+15);
        add('text',{x:pc.x,y:pc.y,'text-anchor':'middle','dominant-baseline':'central',fill:'#8b949e','font-size':8,'font-weight':'600'},String(i+1));
    });

    // Aspectos entre o céu atual e o mapa natal.
    const lista=Object.keys(hoje);
    lista.forEach((pHoje,idx)=>{
        lista.forEach(pNatal=>{
            const asp=calcularAspecto(hoje[pHoje],natal[pNatal]);
            if(!asp || asp.orbeVal>2.5) return;
            const a=point(rMid-3,hoje[pHoje]), b=point(rInner+4,natal[pNatal]);
            const cor={Conjunção:'#3fb950',Sextil:'#a371f7',Quadratura:'#d29922',Trígono:'#58a6ff',Oposição:'#f85149'}[asp.nome]||'#8b949e';
            add('line',{x1:a.x,y1:a.y,x2:b.x,y2:b.y,stroke:cor,'stroke-width':asp.estado==='Exato'?2:1,'stroke-opacity':.48,'stroke-dasharray':asp.nome==='Oposição'?'4 3':'none'});
        });
    });

    // Anel médio: posições do céu do dia.
    Object.keys(hoje).forEach((p,i)=>{
        const info=obterInfoSigno(hoje[p]), rr=rMid-23-(i%3)*7, pos=point(rr,hoje[p]);
        const g=add('g',{transform:`translate(${pos.x},${pos.y})`});
        const c=document.createElementNS(NS,'circle');c.setAttribute('r',11);c.setAttribute('fill','#161b22');c.setAttribute('stroke','#a371f7');c.setAttribute('stroke-width',2);g.appendChild(c);
        const t=document.createElementNS(NS,'text');t.setAttribute('text-anchor','middle');t.setAttribute('dominant-baseline','central');t.setAttribute('fill','#a371f7');t.setAttribute('font-family','Segoe UI Symbol, sans-serif');t.setAttribute('font-size','13');t.setAttribute('font-weight','bold');t.textContent=SIMBOLOS_PLANETAS[p]||p;g.appendChild(t);
        const sg=document.createElementNS(NS,'text');sg.setAttribute('text-anchor','middle');sg.setAttribute('y','19');sg.setAttribute('fill','#a371f7');sg.setAttribute('font-size','7');sg.textContent=info.simbolo;g.appendChild(sg);
        const title=document.createElementNS(NS,'title');title.textContent=`${p}: ${info.signo} ${info.grau}°${String(info.min).padStart(2,'0')}' — Céu do dia`;g.appendChild(title);svg.appendChild(g);
    });

    // Anel interno: posições natais.
    Object.keys(natal).forEach((p,i)=>{
        const info=obterInfoSigno(natal[p]), rr=rInner-18-(i%3)*5, pos=point(rr,natal[p]);
        const g=add('g',{transform:`translate(${pos.x},${pos.y})`});
        const c=document.createElementNS(NS,'circle');c.setAttribute('r',10);c.setAttribute('fill','#0d1117');c.setAttribute('stroke','#58a6ff');c.setAttribute('stroke-width',2);g.appendChild(c);
        const t=document.createElementNS(NS,'text');t.setAttribute('text-anchor','middle');t.setAttribute('dominant-baseline','central');t.setAttribute('fill','#58a6ff');t.setAttribute('font-family','Segoe UI Symbol, sans-serif');t.setAttribute('font-size','12');t.setAttribute('font-weight','bold');t.textContent=SIMBOLOS_PLANETAS[p]||p;g.appendChild(t);
        const sg=document.createElementNS(NS,'text');sg.setAttribute('text-anchor','middle');sg.setAttribute('y','17');sg.setAttribute('fill','#58a6ff');sg.setAttribute('font-size','7');sg.textContent=info.simbolo;g.appendChild(sg);
        const title=document.createElementNS(NS,'title');title.textContent=`${p}: ${info.signo} ${info.grau}°${String(info.min).padStart(2,'0')}' — Mapa natal`;g.appendChild(title);svg.appendChild(g);
    });

    add('text',{x:cx,y:cy-12,'text-anchor':'middle','dominant-baseline':'central',fill:'#e3b341','font-size':11,'font-weight':'700'},'NATAL × TRÂNSITO');
    add('text',{x:cx,y:cy+6,'text-anchor':'middle','dominant-baseline':'central',fill:'#8b949e','font-size':8},'aspectos e ativações');
    add('text',{x:cx,y:cy+22,'text-anchor':'middle','dominant-baseline':'central',fill:'#8b949e','font-size':7},'externo: signos · médio: hoje · interno: natal');
}

        // --- BUSCA GEO CIDADES ---
        async function buscarCoordenadasNatal() {
            const cidade = document.getElementById('cidadeNatalInput').value.trim();
            const statusEl = document.getElementById('geoStatusNatal');
            if (!cidade) return;

            statusEl.style.display = 'block';
            statusEl.style.color = 'var(--destaque)';
            statusEl.textContent = 'Buscando cidade natal...';

            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(cidade)}`);
                const data = await response.json();

                if (data && data.length > 0) {
                    const local = data[0];
                    document.getElementById('latNatal').value = parseFloat(local.lat).toFixed(4);
                    document.getElementById('lonNatal').value = parseFloat(local.lon).toFixed(4);

                    statusEl.style.color = 'var(--terra)';
                    statusEl.textContent = `✓ Localizado: ${local.display_name.split(',')[0]} (${parseFloat(local.lat).toFixed(2)}°, ${parseFloat(local.lon).toFixed(2)}°)`;
                } else {
                    statusEl.style.color = 'var(--fogo)';
                    statusEl.textContent = '✕ Cidade não encontrada.';
                }
            } catch (e) {
                statusEl.style.color = 'var(--fogo)';
                statusEl.textContent = 'Erro ao buscar coordenadas.';
            }
        }

        async function buscarCoordenadasAtual() {
            const cidade = document.getElementById('cidadeAtualInput').value.trim();
            const statusEl = document.getElementById('geoStatusAtual');
            if (!cidade) return;

            statusEl.style.display = 'block';
            statusEl.style.color = 'var(--destaque)';
            statusEl.textContent = 'Buscando cidade atual...';

            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(cidade)}`);
                const data = await response.json();

                if (data && data.length > 0) {
                    const local = data[0];
                    document.getElementById('latAtual').value = parseFloat(local.lat).toFixed(4);
                    document.getElementById('lonAtual').value = parseFloat(local.lon).toFixed(4);

                    statusEl.style.color = 'var(--terra)';
                    statusEl.textContent = `✓ Localizado: ${local.display_name.split(',')[0]} (${parseFloat(local.lat).toFixed(2)}°, ${parseFloat(local.lon).toFixed(2)}°)`;
                } else {
                    statusEl.style.color = 'var(--fogo)';
                    statusEl.textContent = '✕ Cidade não encontrada.';
                }
            } catch (e) {
                statusEl.style.color = 'var(--fogo)';
                statusEl.textContent = 'Erro ao buscar coordenadas.';
            }
        }

        // --- GERADOR DE LEITURA IA & SÍNTESE DE VOZ ---
// --- GERADOR DE LEITURA IA & SÍNTESE DE VOZ ---
// A leitura é enviada ao mesmo proxy real usado em revolucao_solar.html.
// Não existe mais setTimeout nem texto simulado.
const DIRETRIZ_TOM_IA_TRANSITOS = `Escreva com profundidade filosófica e psicológica, atento às camadas simbólicas, aos padrões ocultos por trás dos acontecimentos e ao significado mais profundo por trás das tendências do momento — como uma leitura séria, intuitiva e madura. NÃO cite nomes de escolas de pensamento, tradições, sistemas ou termos técnicos de nenhuma linha teórica específica; o foco deve estar inteiramente na pessoa e na energia analisada, com linguagem natural e envolvente.
    NÃO escreva introduções, saudações, contextualizações iniciais ou frases como "vamos analisar" — a primeira frase já deve estar dentro do assunto central do tema, sem nenhum preâmbulo antes disso.
    NÃO use títulos, cabeçalhos ou listas numeradas visíveis no texto final — apenas parágrafos corridos.
    Escreva em tom de conversa direta com quem está lendo, como se estivesse falando pessoalmente com essa pessoa sobre o momento dela — dirija-se a ela usando "você", nunca em terceira pessoa distante ("esta pessoa", "o consulente") nem como um texto acadêmico impessoal.
    Use formatação HTML básica com parágrafos <p> e destaques em <strong>.`;

function resumoContextoIA() {
    if (!contextoTransitosAtual) return 'Contexto ainda não calculado.';
    const c=contextoTransitosAtual;
    const fmt=(mapa)=>Object.entries(mapa).map(([p,g])=>{const i=obterInfoSigno(g);return `${p}: ${i.signo} ${i.grau}°${String(i.min).padStart(2,'0')}'`;}).join('; ');
    const aspectos=(c.trânsitosEncontrados||[]).slice(0,18).map(t=>`${t.pHoje} ${t.asp.simbolo} ${t.pNatal} (${t.asp.nome}, orbe ${t.asp.orbeFormat}, ${t.asp.estado}, casa ${t.casaTrans})`).join('; ');
    const percentual=(obj)=>Object.entries(obj||{}).map(([k,v])=>`${k}: ${Math.round(v/10*100)}%`).join(', ');
    return `DATA/HORA: ${c.data} ${c.hora}.
REGENTE DO DIA: ${c.regenteDia}. HORA PLANETÁRIA: ${c.horaPlanetaria}, ${c.numeroHora}ª hora ${c.periodoHora}. METAL ALQUÍMICO: ${c.metalAlquimico}. PRINCÍPIO: ${c.principioRegente}. FASE LUNAR: ${c.faseLunar}.
SOL DO DIA: ${c.sol.signo} ${c.sol.grau}°, casa natal ${c.sol.casa}. LUA DO DIA: ${c.lua.signo} ${c.lua.grau}°, casa natal ${c.lua.casa}.
POSIÇÕES DO DIA: ${fmt(c.planetasHoje)}
POSIÇÕES NATAIS: ${fmt(c.planetasNatais)}
ELEMENTOS — DIA: ${percentual(c.elementos?.dia)} | NATAL: ${percentual(c.elementos?.natal)}
RITMOS — DIA: ${percentual(c.ritmos?.dia)} | NATAL: ${percentual(c.ritmos?.natal)}
POLARIDADES — DIA: ${percentual(c.polaridades?.dia)} | NATAL: ${percentual(c.polaridades?.natal)}
ASPECTOS DE TRÂNSITO/NATAL RELEVANTES: ${aspectos||'nenhum dentro da orbe analisada.'}
CONVERGÊNCIA: ${JSON.stringify(c.convergencia||{})}`;
}

const PROMPTS_BLOCOS_IA = {
    panorama: `Faça um panorama integrado do céu do dia comparado ao mapa natal. Considere simultaneamente os dez planetas, casas natalmente ativadas, aspectos relevantes, Sol, Lua, elementos, ritmos, polaridades, regente do dia e hora planetária. Não analise os fatores como uma lista isolada: encontre os padrões que se repetem, a área de maior ativação, tensões, facilidades, conflitos e possibilidades de integração. Explique como o céu coletivo se torna experiência pessoal quando encontra o mapa natal.`,
    dia: `Explique profundamente o significado do céu coletivo deste dia. Interprete regente do dia, hora planetária, correspondência alquímica, fase lunar, Sol, Lua e ascendente do momento. Explique o que esses símbolos representam e, principalmente, como mudam de significado quando comparados ao mapa natal apresentado.`,
    elementos: `Compare Fogo, Terra, Ar e Água do céu do dia com a distribuição do mapa natal. Explique onde há excesso, ausência ou deslocamento de ênfase, como isso pode alterar a maneira de agir, sentir, pensar e materializar, e qual elemento natal pode estar sendo desafiado ou compensado.`,
    ritmos: `Compare Cardinal, Fixo e Mutável no céu do dia com o mapa natal. Explique a relação entre impulso para iniciar, capacidade de sustentar e necessidade de adaptar. Identifique possíveis atritos entre o ritmo natural da pessoa e o ritmo simbólico do dia.`,
    polaridades: `Compare a polaridade Masculina/Yang e Feminina/Yin do céu do dia com o mapa natal. Explique iniciativa versus receptividade, exteriorização versus interiorização, e como o desequilíbrio relativo pode ser percebido psicologicamente.`,
    sol: `Interprete o Sol em trânsito em relação ao Sol natal, à casa natal atravessada e aos aspectos do dia. Explique o que o foco consciente, vitalidade, identidade e vontade estão sendo convidados a perceber, desenvolver ou reorganizar.`,
    lua: `Interprete a Lua em trânsito em relação à Lua natal, à casa natal atravessada e aos aspectos relevantes. Explique ritmo emocional, necessidade de segurança, sensibilidade, reatividade, memória e estado subjetivo, sem transformar símbolo astrológico em diagnóstico psicológico.`,
    ativacoes: `Analise as ativações individuais como um sistema. Identifique os trânsitos mais importantes por duração, exatidão, planeta e casa, e explique como eles se combinam. Destaque conflitos, apoios e o tema central que emerge da interação dos aspectos.`,
    convergencia: `Analise a convergência dos trânsitos. Descubra qual casa ou tema recebe maior densidade, quais forças apontam na mesma direção, quais entram em conflito e qual processo psicológico ou existencial parece dominar o dia. Não invente acontecimentos concretos.`,
    sintese: `Produza uma síntese total, rica e integrada de todo o mapa natal ativado neste dia. Responda explicitamente: qual área da vida está mais afetada; quais são os principais conflitos; quais são as bênçãos, recursos e vias de fluidez; qual pode ser o clima emocional; que estado de consciência o momento favorece ou desafia; como a pessoa pode se sentir consigo mesma; o que pede transformação, disciplina, expressão ou recolhimento; e qual atitude consciente integra melhor o conjunto. Diferencie tendências simbólicas de fatos concretos e não faça determinismo.`
};

async function alternarAnaliseIABloco(tipo, botao) {
    const ids={panorama:'iaPanorama',dia:'iaDia',elementos:'iaElementos',ritmos:'iaRitmos',polaridades:'iaPolaridades',sol:'iaSol',lua:'iaLua',ativacoes:'iaAtivacoes',convergencia:'iaConvergencia',sintese:'iaSintese'};
    const painel=document.getElementById(ids[tipo]);
    if(!painel) return;
    const visivel = getComputedStyle(painel).display !== 'none';
    if(visivel) {
        painel.style.display='none';
        if(botao) botao.setAttribute('aria-expanded','false');
        return;
    }
    if(botao) botao.setAttribute('aria-expanded','true');
    if(painel.dataset.carregado === '1') { painel.style.display='block'; return; }
    await gerarAnaliseIABloco(tipo);
}

async function gerarAnaliseIABloco(tipo) {
    const ids={panorama:'iaPanorama',dia:'iaDia',elementos:'iaElementos',ritmos:'iaRitmos',polaridades:'iaPolaridades',sol:'iaSol',lua:'iaLua',ativacoes:'iaAtivacoes',convergencia:'iaConvergencia',sintese:'iaSintese'};
    const painel=document.getElementById(ids[tipo]);
    if(!painel) return;
    painel.style.display='block';
    painel.innerHTML='<em>Consultando a inteligência astrológica...</em>';
    const promptText=`${PROMPTS_BLOCOS_IA[tipo]}

DADOS CALCULADOS PELO APLICATIVO — USE SOMENTE ESTES DADOS:
${resumoContextoIA()}

${DIRETRIZ_TOM_IA_TRANSITOS}`;
    try {
        const response=await fetch('https://astro-gns-proxy.genesisgns.workers.dev/',{method:'POST',cache:'no-store',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt:promptText})});
        const data=await response.json();
        if(response.ok && data.resposta) { painel.innerHTML=`<p><strong>✨ Interpretação IA:</strong></p>${data.resposta}`; painel.dataset.carregado='1'; }
        else painel.innerHTML=`<p style="color:var(--fogo);"><strong>Erro:</strong> ${data.error||'Não foi possível obter a resposta da IA.'}</p>`;
    } catch(err) {
        console.error('Erro na análise IA:',err);
        painel.innerHTML=`<p style="color:var(--fogo);"><strong>Erro de conexão:</strong> ${err.message}</p>`;
    }
}

async function gerarLeituraIA(astroTransito, alvoNatal, casa, idPainel) {
    const painel = document.getElementById(idPainel);
    if (!painel) return;

    painel.style.display = 'block';
    painel.innerHTML = '<em>Consultando a inteligência astrológica...</em>';

    const promptText = `Faça uma leitura astrológica integrada sobre ${astroTransito} ativando ${alvoNatal}, na ${casa} desta pessoa.

    Explique:
    1. O significado do planeta em trânsito e o tipo de força que ele movimenta.
    2. O significado do ponto natal ativado e o que isso representa no mapa individual.
    3. O significado da casa indicada e onde essa ativação tende a se manifestar concretamente.
    4. Integre os três elementos em uma leitura profunda, prática e psicológica, explicando como a pessoa pode vivenciar essa ativação e qual atitude consciente pode ajudar a trabalhar melhor essa energia.

    Não invente posições, aspectos ou acontecimentos que não estejam presentes nos dados fornecidos.
    ${DIRETRIZ_TOM_IA_TRANSITOS}`;

    try {
        const response = await fetch('https://astro-gns-proxy.genesisgns.workers.dev/', {
            method: 'POST',
            cache: 'no-store',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: promptText })
        });

        const data = await response.json();

        if (response.ok && data.resposta) {
            painel.innerHTML = `<p><strong>✨ Interpretação Iniciática IA:</strong></p>${data.resposta}`;
        } else {
            painel.innerHTML = `<p style="color:var(--fogo);"><strong>Erro:</strong> ${data.error || 'Não foi possível obter a resposta da IA.'}</p>`;
        }
    } catch (err) {
        console.error('Erro na leitura de IA dos trânsitos:', err);
        painel.innerHTML = `<p style="color:var(--fogo);"><strong>Erro de Conexão:</strong> ${err.message}</p>`;
    }
}

        function ouvirTexto(idPainel) {
            const painel = document.getElementById(idPainel);
            if (!painel || !painel.innerText) return alert('Gere a leitura de IA primeiro para poder ouvir.');

            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const ut = new SpeechSynthesisUtterance(painel.innerText);
                ut.lang = 'pt-BR';
                window.speechSynthesis.speak(ut);
            } else {
                alert('Recurso de síntese de voz não suportado neste navegador.');
            }
        }

        // --- GESTÃO DE PERFIS SALVOS ---
        function salvarPerfilPessoa() {
            const nome = document.getElementById('nomePessoaInput').value.trim();
            if (!nome) return alert('Por favor, digite o nome da pessoa.');

            const perfil = {
                nome,
                date: document.getElementById('date').value,
                time: document.getElementById('time').value,
                fuso: document.getElementById('fuso').value,
                cidade: document.getElementById('cidadeNatalInput').value,
                lat: document.getElementById('latNatal').value,
                lon: document.getElementById('lonNatal').value
            };

            let salvas = JSON.parse(localStorage.getItem('astro_perfis') || '[]');
            salvas = salvas.filter(p => p.nome !== nome);
            salvas.push(perfil);
            localStorage.setItem('astro_perfis', JSON.stringify(salvas));
            carregarPerfisSalvos();
            alert('Perfil salvo com sucesso!');
        }

        function carregarPerfisSalvos() {
            const salvas = JSON.parse(localStorage.getItem('astro_perfis') || '[]');
            const container = document.getElementById('pessoasSalvasList');
            if (salvas.length === 0) {
                container.innerHTML = "<p style='font-size:0.8rem; color:#8b949e;'>Nenhum perfil guardado.</p>";
                return;
            }
            container.innerHTML = salvas.map((p, index) => `
                <div class="pessoa-item">
                    <span>${p.nome} (${p.date})</span>
                    <div>
                        <button type="button" class="btn-sm btn-use" onclick="carregarPerfil(${index})">Usar</button>
                        <button type="button" class="btn-sm btn-del" onclick="apagarPerfil(${index})">✕</button>
                    </div>
                </div>
            `).join('');
        }

        function carregarPerfil(idx) {
            const salvas = JSON.parse(localStorage.getItem('astro_perfis') || '[]');
            const p = salvas[idx];
            if (!p) return;
            document.getElementById('date').value = p.date;
            document.getElementById('time').value = p.time;
            document.getElementById('fuso').value = p.fuso;
            document.getElementById('cidadeNatalInput').value = p.cidade;
            document.getElementById('latNatal').value = p.lat;
            document.getElementById('lonNatal').value = p.lon;
            executarAnalise();
        }

        function apagarPerfil(idx) {
            let salvas = JSON.parse(localStorage.getItem('astro_perfis') || '[]');
            salvas.splice(idx, 1);
            localStorage.setItem('astro_perfis', JSON.stringify(salvas));
            carregarPerfisSalvos();
        }

        // ==========================================
        // LIMPAR CACHE TÉCNICO (mesmo padrão das outras telas do app)
        // ==========================================
        // Os "Perfis Guardados" (localStorage) não são tocados por esta função —
        // ela apenas força o Service Worker a buscar a versão mais recente dos
        // arquivos do app (HTML, CSS, ícones).
        async function limparCacheDoApp() {
            const confirmou = confirm(
                'Isso vai limpar o cache técnico do app e recarregar a página, para ' +
                'garantir que você veja a versão mais recente.\n\n' +
                'Seus Perfis Guardados NÃO serão apagados — ficam guardados em outro ' +
                'lugar, separado desse cache.\n\nContinuar?'
            );
            if (!confirmou) return;

            try {
                if ('serviceWorker' in navigator) {
                    const registros = await navigator.serviceWorker.getRegistrations();
                    await Promise.all(registros.map((registro) => registro.unregister()));
                }
                if ('caches' in window) {
                    const chaves = await caches.keys();
                    await Promise.all(chaves.map((chave) => caches.delete(chave)));
                }
            } catch (err) {
                console.warn('Erro ao limpar cache técnico:', err);
            }

            window.location.href = window.location.pathname + '?atualizado=' + Date.now();
        }
    </script>

// AQUI TERMINA O CODIGO JS DO ARQUIVO TRANSITOS_DIARIOS.HTML

//AQUI COMEÇA O CODIGO JS DO ARQUIVO TAROT.HTML


