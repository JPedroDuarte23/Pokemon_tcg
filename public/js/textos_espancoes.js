function dropdown(p) {
  var elementos = document.querySelectorAll(".dropDown");
  var estilo_display;
  var estilo_transform;
  if (p === 0) {
    estilo_display = "block";
    estilo_transform = "0px";
  } else {
    estilo_display = "none";
    estilo_transform = "0px,-10px";
  }

  for (var id = 0; id < elementos.length; id++) {
    var elemento = elementos[id];
    elemento.style.display = estilo_display;

    setTimeout(function () {
      elemento.style.transform = `translate(${estilo_transform})`;
    }, 0);
  }
  if (valor_select.value == "Base") {
    geracao_Base();
  } else if (valor_select.value == "Ruby e Sapphire") {
    geracao_RS();
  } else if (valor_select.value == "Platinum, Pearl e Diamond") {
    geracao_PPD();
  } else if (valor_select.value == "HeartGold SoulSilver") {
    geracao_HGSS();
  } else if (valor_select.value == "Black e White") {
    geracao_BW();
  } else if (valor_select.value == "XY") {
    geracao_XY();
  } else if (valor_select.value == "Sun e Moon") {
    geracao_SM();
  } else if (valor_select.value == "Sword e Shield") {
    geracao_SWSH();
  } else if (valor_select.value == "Scarlet e Violet") {
    geracao_SVI();
  }
}
function geracao_XY() {
  logo_geracao.setAttribute("src", "imagens/logoXY.png");
  logo_geracao.setAttribute("class", "SV_logo");
  div_linha_do_tempo.innerHTML = `<img src="imagens/Linha do tempo.png" alt="" class="linha_do_tempo">
            <div class="icones_colecoes" onmouseout="remover_animacao()">
                <img src="imagens/icones_xy/40px-SetSymbolKalos_Starter_Set.png" alt="" id="isunmoon" onmouseover="mostrar_expansao_XY(1)">
                <img src="imagens/icones_xy/40px-SetSymbolXY.png" alt="" id="iprisma" onmouseover="mostrar_expansao_XY(2)">
                <img src="imagens/icones_xy/40px-SetSymbolFlashfire.png" alt="" id="iburning" onmouseover="mostrar_expansao_XY(3)">
                <img src="imagens/icones_xy/40px-SetSymbolFurious_Fists.png" alt="" id="iv" onmouseover="mostrar_expansao_XY(4)">
                <img src="imagens/icones_xy/40px-SetSymbolPhantom_Forces.png" alt="" id="iasa" onmouseover="mostrar_expansao_XY(5)">
                <img src="imagens/icones_xy/40px-SetSymbolPrimal_Clash.png" alt="" id="iprismatico" onmouseover="mostrar_expansao_XY(6)">
                <img src="imagens/icones_xy/40px-SetSymbolDouble_Crisis.png" alt=""id="icrisis" onmouseover="mostrar_expansao_XY(7)">
                <img src="imagens/icones_xy/40px-SetSymbolRoaring_Skies.png" alt="" id="ibola"  onmouseover="mostrar_expansao_XY(8)">
                <img src="imagens/icones_xy/40px-SetSymbolAncient_Origins.png" alt="" id="idragao" onmouseover="mostrar_expansao_XY(9)">
                <img src="imagens/icones_xy/40px-SetSymbolBREAKthrough.png" alt="" id="ithunder" onmouseover="mostrar_expansao_XY(10)">
                <img src="imagens/icones_xy/40px-SetSymbolBREAKpoint.png" alt="" id="ibonds" onmouseover="mostrar_expansao_XY(11)">
                <img src="imagens/icones_xy/40px-SetSymbolGenerations.png" alt="" id="iplanta" onmouseover="mostrar_expansao_XY(12)">
                <img src="imagens/icones_xy/40px-SetSymbolFates_Collide.png" alt="" id="ibonds_2" onmouseover="mostrar_expansao_XY(13)">
                <img src="imagens/icones_xy/40px-SetSymbolSteam_Siege.png" alt="" id="ishiny" onmouseover="mostrar_expansao_XY(14)">
                <img src="imagens/icones_xy/40px-SetSymbolEvolutions.png" alt="" id="ihexagono" onmouseover="mostrar_expansao_XY(15)">`;
  div_detalhes.innerHTML = `<div class="colecao_detalhe transicao" id="div_colecao_detalhe">
                <img src="imagens/icones_xy/40px-SetSymbolXY.png" alt="">
                <h2>Expansão XY - XY1</h2>
            </div>
            
            <div class="texto_detalhe transicao" id="div_texto_detalhe">
                <p id="ptxt">Abra seus olhos para um novo tipo de Pokémon!
                Kalos foi revelado, mas muito ainda não foi visto! Novos treinadores, novas táticas e os inspiradores Xerneas e Yveltal aguardam - assim como outra coisa. Algo diferente. Algo para fazer até o mais poderoso dos Pokémon-EX tremer! Uma nova era começa no Pokémon Estampas Ilustradas com Mega Evolução!</p>
                <img src="https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/08/pokemon-xy-set-1024x171.jpg" alt="" id="img_banner_detalhe">`;
}
function mostrar_expansao_XY(icone) {
  if (icone == 1) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_xy/40px-SetSymbolKalos_Starter_Set.png" alt="">
        <h2>Expansão Kit Inicial de Kalos</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/08/pokemon-xy-kalos-starter-set-list-1024x171.jpg"
    );
    ptxt.innerHTML = `Sua aventura começa!
        Primeiras aparições do tão esperado Pokémon e uma estratégia de batalha totalmente nova! Qual Pokémon você escolherá para começar esta emocionante jornada: Chespin, Fennekin ou Froakie? Escolha o seu Pokémon e prepare-se para a batalha!
            `;
  } else if (icone == 2) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_xy/40px-SetSymbolXY.png">
        <h2>Expansão XY - XY1</h2>
        `;
    div_colecao_detalhe.classList.add("transicao");
    div_texto_detalhe.classList.add("transicao");
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/08/pokemon-xy-set-1024x171.jpg"
    );
    ptxt.innerHTML = `Abra seus olhos para um novo tipo de Pokémon!
    Kalos foi revelado, mas muito ainda não foi visto! Novos treinadores, novas táticas e os inspiradores Xerneas e Yveltal aguardam - assim como outra coisa. Algo diferente. Algo para fazer até o mais poderoso dos Pokémon-EX tremer! Uma nova era começa no Pokémon Estampas Ilustradas com Mega Evolução!
            `;
  } else if (icone == 3) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_xy/40px-SetSymbolFlashfire.png">
        <h2>Expansão Flash de Fogo - XY2</h2>
        `;
    div_colecao_detalhe.classList.add("transicao");
    div_texto_detalhe.classList.add("transicao");
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/08/pokemon-xy-flashfire-set-1024x171.jpg"
    );
    ptxt.innerHTML = `Reine com Fogo!
        Abra caminho para a glória e veja as faíscas voarem ao jogar Pokémon Estampas Ilustradas: XY—Flashfire! Acenda a ação com uma tempestade de tipos de fogo e assista a surpresa aterrorizada de seus oponentes enquanto o incrível Mega Charizard-EX faz sua estréia escaldante nesta expansão de tirar o fôlego! Suas aventuras explosivas continuarão enquanto seus inimigos fogem do campo com certa desgraça piscando diante de seus olhos!
            `;
  } else if (icone == 4) {
    div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_xy/40px-SetSymbolFurious_Fists.png">
    <h2>Expansão Punhos Furiosos - XY4</h2>
    `;
    div_colecao_detalhe.classList.add("transicao");
    div_texto_detalhe.classList.add("transicao");
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/08/pokemon-xy-furious-fists-set-1024x171.jpg"
    );
    ptxt.innerHTML = `Torne-se o Rei do Anel!
    Treinadores, entrem no ringue e aumentem sua ferocidade para a expansão Pokémon TCG: XY—Furious Fists! Prepare-se para um grande torneio diferente de todos os anteriores com Mega Lucario-EX e Mega Heracross-EX! E, à medida que a competição se intensifica, uma série de Pokémon aparece pela primeira vez no Pokémon TCG - cada um ansioso para provar que é um mestre da batalha! Com uma equipe apoiada por novas cartas de Treinador para fortalecer seu Pokémon do tipo Lutador, seus oponentes ficarão se perguntando o que os atingiu!`;
  } else if (icone == 5) {
    div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_xy/40px-SetSymbolPhantom_Forces.png">
    <h2>Expansão Forças Fantasmas - XY5</h2>
    `;
    div_colecao_detalhe.classList.add("transicao");
    div_texto_detalhe.classList.add("transicao");
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/08/pokemon-xy-phantom-forces-set-1024x171.jpg"
    );
    ptxt.innerHTML = `Domine Poderes Misteriosos!

    Reúna sua coragem e perscrute o vazio assombrado com a expansão Pokémon TCG: XY—Phantom Forces! Mega Manectric-EX faz uma aparição chocante para iluminar o caminho, enquanto o sorriso fantasmagórico de Mega Gengar-EX assusta os adversários próximos e distantes. Leve Aegislash-EX para lhe dar uma vantagem, ultrapasse os limites da Mega Evolução com novas cartas Skill Link e convoque todo o seu conhecimento de Treinador para escapar das forças misteriosas em ação!`;
  } else if (icone == 6) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_xy/40px-SetSymbolPrimal_Clash.png">
        <h2>Expansão Conflito Primitivo - SM6</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/08/pokemon-xy-primal-clash-set-1024x171.jpg"
    );
    ptxt.innerHTML = `Antigos Rivais Despertam!

    Depois de séculos adormecidos, o poder profundo de Primal Groudon-EX irrompe da terra quando Primal Kyogre-EX cai do mar, cavalgando ondas titânicas para a batalha! Com novidades colossais como Mega Gardevoir-EX e Mega Aggron-EX, o Pokémon Estampas Ilustradas: XY—a expansão Primal Clash está vivo com o poder primordial de Ancient Traits—além de todos os novos cards Spirit Link e Special Energy! Deixe a terra tremer e os oceanos trovejarem, e prepare-se para um confronto primordial como nenhum outro!`;
  } else if (icone == 7) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_xy/40px-SetSymbolDouble_Crisis.png">
        <h2>Expansão Crise Dupla - XY7</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/08/pokemon-xy-double-crisis-set-1024x171.jpg"
    );
    ptxt.innerHTML = `Ambições rivais: Aqua vs. Magma!

    Duas equipes de vilões emergem de seus esconderijos para enfrentar o destino do mundo em Pokémon Estampas Ilustradas: Crise Dupla! A Equipe Aqua traz pura força e força de vontade, enquanto a Equipe Magma aproveita a lógica, e ambas estão dispostas a mover terra e mar para atingir seus objetivos. Enquanto o Kyogre-EX do Team Aqua luta contra o Groudon-EX do Team Magma, suas ambições rivais podem mudar a região de Hoenn para sempre!`;
  } else if (icone == 8) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_xy/40px-SetSymbolRoaring_Skies.png">
        <h2>Expansão Céus Estrondosos - XY8</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/08/pokemon-xy-roaring-skies-set-1024x171.jpg"
    );
    ptxt.innerHTML = `Cavalgue os Ventos da Batalha!

    Mergulhando da borda do espaço, Mega Rayquaza-EX faz sua estréia magnífica enquanto Mega Latios-EX e uma horda de tipos de dragão lançam seu desafio! Com superestrelas voadoras como Deoxys, Dragonite, Zekrom, Hydreigon-EX e Thundurus-EX, a expansão Pokémon TCG: XY—Roaring Skies chama você para uma batalha mais alta, mais rápida, mais forte e com todos os novos impulsos como Mega Turbo e Double Dragon Cartões de energia, o céu é o limite! Suba às nuvens e voe para a vitória!`;
  } else if (icone == 9) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_xy/40px-SetSymbolAncient_Origins.png">
        <h2>Expansão Origens Ancestrais - XY9</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/08/pokemon-xy-ancient-origins-set-1024x171.jpg"
    );
    ptxt.innerHTML = `Poder dos Dias Antigos!

    Pronto para alguns novos truques? Hoopa-EX traz um novo poder mítico ao mundo Pokémon, junto com novos e ferozes desafiantes como Mega Tyranitar-EX, Mega Ampharos-EX e Mega Sceptile-EX! A expansão Pokémon TCG: XY—Ancient Origins transforma segredos antigos em técnicas de batalha modernas, com novas cartas de Energia Especial, novos Traços Antigos e versões Shiny de Primal Kyogre-EX, Primal Groudon-EX e Mega Rayquaza-EX! O poder dos antigos é ilimitado!`;
  } else if (icone == 10) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_xy/40px-SetSymbolBREAKthrough.png">
        <h2>Expansão Turbo Revolução - XY10</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/08/pokemon-xy-breakthrough-set-1024x171.jpg"
    );
    ptxt.innerHTML = `Mundos Paralelos: Dois Caminhos para o Poder!

    Uma descoberta incrível! Pokémon BREAK Evolution abre um novo caminho para o poder que se baseia nas forças existentes de um Pokémon e cria novas opções de batalha! Esses novos Pokémon BREAK vêm de mundos gêmeos, lar de Zoroark BREAK, Mega Mewtwo X e Mega Mewtwo Y. Um mundo de tecnologia, um mundo de natureza e todas as maravilhas de BREAK Evolution são suas para explorar no Pokémon Estampas Ilustradas: XY —BREAKatravés da expansão!`;
  } else if (icone == 11) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_xy/40px-SetSymbolBREAKpoint.png">
        <h2>Expansão Turbo Colisão - XY11</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/08/pokemon-xy-breakpoint-set-1-1024x171.jpg"
    );
    ptxt.innerHTML = `Uma fenda dividida entre mundos!

    A hora se torna desesperadora e dois mundos estão à beira! A expansão Pokémon TCG: XY—BREAKpoint revela a crescente divisão entre os mundos gêmeos, descoberta pela primeira vez por Shiny Mega Gyarados-EX. À medida que a fenda rasga os céus, mais Pokémon são atraídos para a luta, incluindo Greninja BREAK, Luxray BREAK e Mega Scizor-EX! Eles podem consertar a fenda e salvar os dois mundos do caos da colisão?`;
  } else if (icone == 12) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_xy/40px-SetSymbolGenerations.png">
        <h2>Expansão Gerações - XY12</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/08/pokemon-xy-generations-set-list-1024x171.jpg"
    );
    ptxt.innerHTML = `Treine com Pokémon Estampas Ilustradas: Gerações!

    Comemore 20 anos de Pokémon com a expansão Pokémon TCG: Generations, abrangendo todas as etapas da jornada de um Treinador, desde a escolha do primeiro Pokémon parceiro até as batalhas de Elite dos Treinadores. Apresentando Pikachu, Snorlax, Ninetales-EX e Jolteon-EX, além de Mega Charizard-EX, Mega Blastoise-EX e Mega Venusaur-EX, a expansão Generations é um poder a ser considerado! Train On`;
  } else if (icone == 13) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_xy/40px-SetSymbolFates_Collide.png">
        <h2>Expansão Colisão de Destinos - XY13</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/08/pokemon-xy-fates-collide-set-list-1024x171.jpg"
    );
    ptxt.innerHTML = `A realidade muda - e é refeita!

    Mega Alakazam-EX vê o futuro - e o molda para unificar dois mundos! O Pokémon Lendário Zygarde chega em muitas formas diferentes para trazer ordem, juntamente com Lugia BREAK, Mega Altaria-EX e Umbreon-EX. Os destinos são selados e dois mundos Pokémon se unem no Pokémon Estampas Ilustradas: expansão XY—Fates Collide!`;
  } else if (icone == 14) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_xy/40px-SetSymbolSteam_Siege.png">
        <h2>Expansão Cerco de Vapor - XY14</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/08/pokemon-xy-steam-siege-set-1024x171.jpg"
    );
    ptxt.innerHTML = `Choque de poderes duplos!

    Longos anos de estabilidade chegam ao fim quando Shiny Mega Gardevoir-EX sitia o poderoso Gear Palace com uma série de forças gananciosas. O Pokémon Vapor Mítico Volcanion deve exercer os poderes duplos de fogo e água para detê-los! À medida que a batalha avança, Xerneas BREAK e Yveltal BREAK se enfrentam na expansão Pokémon TCG: XY—Steam Siege!`;
  } else if (icone == 15) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_xy/40px-SetSymbolEvolutions.png">
        <h2>Expansão Evoluções - CY15</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/08/pokemon-xy-evolutions-set-768x128.jpg"
    );
    ptxt.innerHTML = `O Legado Pokémon Evolui!

    Todos os Treinadores e Pokémon crescem e evoluem - e esta expansão restaura as primeiras cartas colecionáveis ​​de Pokémon à glória! Com o poder emocionante de Mega Venusaur-EX, Mega Charizard-EX e Mega Blastoise-EX, além de algumas surpresas selvagens como Dragonite-EX, Ninetales BREAK, Machamp BREAK e Mega Slowbro-EX, o clássico Pokémon de batalha difícil e antigo -School Trainers são reinventados para uma nova geração. Peça ao Professor Oak para começar e alcance novos patamares com a expansão Pokémon TCG: XY—Evolutions!`;
  }
  div_colecao_detalhe.classList.add("transicao");
  div_texto_detalhe.classList.add("transicao");
}

function geracao_SM() {
  logo_geracao.setAttribute("src", "imagens/sun&moon.png");
  logo_geracao.setAttribute("class", "logo_geracao");
  div_linha_do_tempo.innerHTML = `<img src="imagens/Linha do tempo.png" alt="" class="linha_do_tempo">
            <div class="icones_colecoes" onmouseout="remover_animacao()">
                <img src="imagens/icones_sm/icone_s&m.png" alt="" id="isunmoon" onmouseover="mostrar_expansao_SM(1)">
                <img src="imagens/icones_sm/icone_prisma.png" alt="" id="iprisma" onmouseover="mostrar_expansao_SM(2)">
                <img src="imagens/icones_sm/icone_burning.png" alt="" id="iburning" onmouseover="mostrar_expansao_SM(3)">
                <img src="imagens/icones_sm/icone_v.png" alt="" id="iv" onmouseover="mostrar_expansao_SM(4)">
                <img src="imagens/icones_sm/asa_icone.png" alt="" id="iasa" onmouseover="mostrar_expansao_SM(5)">
                <img src="imagens/icones_sm/icone_prismatico.png" alt="" id="iprismatico" onmouseover="mostrar_expansao_SM(6)">
                <img src="imagens/icones_sm/icone_crisis.png" alt="" id="icrisis" onmouseover="mostrar_expansao_SM(7)">
                <img src="imagens/icones_sm/icone_bola.png" alt="" id="ibola" onmouseover="mostrar_expansao_SM(8)">
                <img src="imagens/icones_sm/icone_dragao.png" alt="" id="idragao" onmouseover="mostrar_expansao_SM(9)">
                <img src="imagens/icones_sm/icone_thunder.png" alt="" id="ithunder" onmouseover="mostrar_expansao_SM(10)">
                <img src="imagens/icones_sm/icone_bonds.png" alt="" id="ibonds" onmouseover="mostrar_expansao_SM(11)">
                <img src="imagens/icones_sm/icone_planta.png" alt="" id="iplanta" onmouseover="mostrar_expansao_SM(12)">
                <img src="imagens/icones_sm/icone_bonds_2.png" alt="" id="ibonds_2" onmouseover="mostrar_expansao_SM(13)">
                <img src="imagens/icones_sm/icone_shiny.png" alt="" id="ishiny" onmouseover="mostrar_expansao_SM(14)">
                <img src="imagens/icones_sm/icone_hexagono.png" alt="" id="ihexagono" onmouseover="mostrar_expansao_SM(15)">`;
  div_detalhes.innerHTML = `<div class="colecao_detalhe transicao" id="div_colecao_detalhe">
                <img src="imagens/icones_sm/icone_s&m.png" alt="">
                <h2>Expansão Sun & Moon - SM1</h2>
            </div>
            
            <div class="texto_detalhe transicao" id="div_texto_detalhe">
                <p id="ptxt">As batalhas esquentam com Pokémon da região tropical de Alola no Pokémon TCG: Sun &
                Lua
                expansão. Comece sua jornada com Rowlet, Litten e Popplio, depois procure o Pokémon Lendário
                Solgaleo-GX e Lunala-GX para testemunhar o incrível poder de um novo tipo de Pokémon: cada Pokémon-GX
                traz um ataque tão devastador que você pode usar apenas um deles por jogo. Descubra dezenas de
                Pokémon nunca antes vistos, formas Alola de alguns favoritos familiares e novas maneiras de lutar no
                Pokémon Estampas Ilustradas: Expansão Sol e Lua. </p>
                <img src="imagens/Banner_S&M.png" alt="" id="img_banner_detalhe">`;
}
function mostrar_expansao_SM(icone) {
  if (icone == 1) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_sm/icone_s&m.png" alt="">
        <h2>Expansão Sun & Moon - SM1</h2>
        `;
    img_banner_detalhe.setAttribute("src", "imagens/Banner_S&M.png");
    ptxt.innerHTML = `As batalhas esquentam com Pokémon da região tropical de Alola no Pokémon TCG: Sun &
    Lua
    expansão. Comece sua jornada com Rowlet, Litten e Popplio, depois procure o Pokémon Lendário
    Solgaleo-GX e Lunala-GX para testemunhar o incrível poder de um novo tipo de Pokémon: cada Pokémon-GX
    traz um ataque tão devastador que você pode usar apenas um deles por jogo. Descubra dezenas de
    Pokémon nunca antes vistos, formas Alola de alguns favoritos familiares e novas maneiras de lutar no
    Pokémon Estampas Ilustradas: Expansão Sol e Lua.
            `;
  } else if (icone == 2) {
    div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_sm/icone_prisma.png">
    <h2>Expansão Guardiões Ascendentes - SM2</h2>
    `;
    div_colecao_detalhe.classList.add("transicao");
    div_texto_detalhe.classList.add("transicao");
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/07/pokemon-sun-and-moon-guardians-rising-set-list-1024x171.jpg"
    );
    ptxt.innerHTML = `Visite Alola para diversão Pokémon, das praias à montanha
    picos - e descubra novas tradições e novos desafios! Conheça os guardiões da ilha Tapu Koko-GX
   e Tapu Lele-GX , e aprimore suas habilidades com Kahuna Hala e o Capitão Mallow! Surpreenda-se com o
    poderes secretos de Kommo-o-GX, Lycanroc-GX, Metagross-GX, Sylveon-GX, Toxapex-GX, Vikavolt-GX,
     e muitos mais! Venha para as ilhas e aproveite o poder do Pokémon TCG: Sun & Moon—Guardians Rising
     expansão!
        `;
  } else if (icone == 3) {
    div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_sm/icone_burning.png">
    <h2>Expansão Sombras ardentes - SM3</h2>
    `;
    div_colecao_detalhe.classList.add("transicao");
    div_texto_detalhe.classList.add("transicao");
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/07/pokemon-sun-and-moon-burning-shadows-set-list-1024x171.jpg"
    );
    ptxt.innerHTML = `Batalhas de fogo e sombras profundas! Que fogos estranhos se escondem nas sombras? Os lacaios da Equipe Skull e uma cavalgada de novos Pokémon estão prontos para lutar na escuridão da noite e sob o sol escaldante! Lute com novos titãs como Necrozma-GX, Marshadow-GX e Tapu Fini-GX, ou lute com aliados confiáveis ​​de Machamp-GX e Charizard-GX a Darkrai-GX e Ho-Oh-GX. Lute pelo que é certo com a expansão Pokémon TCG: Sun & Moon—Burning Shadows!
        `;
  } else if (icone == 4) {
    div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_sm/icone_v.png">
    <h2>Expansão Lendas Luminecentes - SM4</h2>
    `;
    div_colecao_detalhe.classList.add("transicao");
    div_texto_detalhe.classList.add("transicao");
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/07/pokemon-sun-and-moon-shining-legends-set-list-1024x171.jpg"
    );
    ptxt.innerHTML = `Abra uma trilha brilhante com Pokémon brilhantes! Em cada região, um punhado de Pokémon se destaca como criaturas de histórias heróicas e aventuras selvagens: Zekrom, Latios, Mewtwo-GX, Entei-GX. Outros são apenas sussurros e rumores: Pokémon misteriosos como Keldeo, Shining Jirachi, Shining Volcanion - e muitos mais! Veja e colecione esses incríveis Pokémon de mitos e lendas com a expansão Pokémon TCG: Shining Legends! `;
  } else if (icone == 5) {
    div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_sm/asa_icone.png">
    <h2>Expansão Invasão Carmesin - SM5</h2>
    `;
    div_colecao_detalhe.classList.add("transicao");
    div_texto_detalhe.classList.add("transicao");
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/07/pokemom-sun-and-moon-crimson-invasion-set-1024x171.jpg"
    );
    ptxt.innerHTML = `Crimson Chaos em Alola! As misteriosas Ultra Beasts chegaram, invadindo a região de Alola como Pokémon-GX tingidos de carmesim: Nihilego-GX, Buzzwole-GX, Kartana-GX e o voraz Guzzlord-GX! Silvally-GX e os outros aliados de Alola podem defender as ilhas - ou as Ultra Beasts assumirão o controle? Descubra quando você batalha pelo prêmio com a expansão Pokémon TCG: Sun & Moon—Crimson Invasion!`;
  } else if (icone == 6) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_sm/icone_prismatico.png">
        <h2>Expansão Ultra Prisma - SM6</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/07/pokemom-sun-and-moon-ultra-prism-set-1024x171.jpg"
    );
    ptxt.innerHTML = `Uma nova dimensão desconhecida! Passe pelo Ultra Wormhole para um novo mundo Pokémon bizarro, onde visões familiares se tornam estranhas e novos poderes são desbloqueados! Veja o poder de Necrozma crescer e maravilhe-se com as novas cartas Prism Star revelando seus efeitos surpreendentes em jogo. Conheça Dialga-GX e Palkia-GX e encontre Ultra Beasts bizarras e novas formas selvagens do Pokémon Lendário de Alola. Explore uma nova dimensão na expansão Pokémon TCG: Sun & Moon—Ultra Prism!`;
  } else if (icone == 7) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_sm/icone_crisis.png">
        <h2>Expansão Luz Proibida - SM7</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/07/pokemom-sun-and-moon-forbidden-light-expansion-set-1024x171.jpg"
    );
    ptxt.innerHTML = `O poder de Necrozma não conhece limites! Pegando o mundo Pokémon de surpresa, Necrozma absorveu um Pokémon Lendário e assumiu uma nova forma como Ultra Necrozma-GX! Outros Pokémon se reúnem para receber esta nova luz... ou para resistir a ela. Lucario-GX, Greninja-GX, Zygarde-GX, Yveltal-GX, Naganadel-GX, até mesmo Volcanion Prism Star e o majestoso Arceus Prism Star devem escolher um lado. Descubra Pokémon incríveis e tesouros misteriosos na expansão Pokémon TCG: Sun & Moon—Forbidden Light!`;
  } else if (icone == 8) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_sm/icone_bola.png">
        <h2>Expansão Tempestade Celestial - SM8</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/08/pokemon-sun-moon-celestial-storm-set-list-1024x171.jpg"
    );
    ptxt.innerHTML = `Tomem cuidado! Está aberta a temporada de furiosas tempestades esmeralda e um céu vívido com prodígios: Pokémon e criaturas do Ultra Espaço se enfrentando! Alguns seguem a tempestade, outros a desafiam, com uma sequência incluindo Articuno-GX, Blaziken-GX, Scizor-GX, Stakataka-GX, e o impressionante Rayquaza-GX, e mais novos cards Prisma estrelando Latios, Latias e Jirachi. Encare os ventos da mudança de cabeça erguida na expansão Sol e Lua — Tempestade Celestial do Pokémon Estampas Ilustradas!`;
  } else if (icone == 9) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_sm/icone_dragao.png">
        <h2>Expansão Dragões Soberanos- SM9</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/09/pokemon-dragon-majesty-set-1024x171.jpg"
    );
    ptxt.innerHTML = `Nobres Pokémon de asas e garras voando alto! Dragões Soberanos trazem consigo uma poderosa horda de Pokémon dragão: Reshiram-GX, Salamence-GX, Dragonite-GX e mais uma dúzia, incluindo Charizard! Seu comando de fogo, na batalha e no céu, subirá até o topo para colecionadores e competidores. Prepare-se para voar alto com estes incríveis Pokémon na mini-expansão Dragões Soberanos do Pokémon TCG!`;
  } else if (icone == 10) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_sm/icone_thunder.png">
        <h2>Expansão Trovões Perdidos - SM10</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/10/pokemon-lost-thunder-set-1024x171.jpg"
    );
    ptxt.innerHTML = `Poder antigo ecoando do topo das montanhas! Viaje por colinas embrenhadas, onde a fragrância do incenso de templos antigos enche o ar junto com as faíscas do Pokémon de alta voltagem! A expansão Trovões Perdidos do Pokémon TCG soma o novo com o tradicional, estrelando Celebi e Ditto, ao lado de Blacephalon-GX, Lugia-GX, Tyranitar-GX, e o mais novo Pokémon Mítico, Zeraora-GX! Invoque os grandes trovões e recarregue seu baralho com Pokémon de alta potência na expansão Sol e Lua — Trovões Perdidos do Pokémon Estampas Ilustradas!`;
  } else if (icone == 11) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_sm/icone_bonds.png">
        <h2>Expansão União de Aliados - SM11</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2019/01/pokemon-team-up-set-1024x171.jpg"
    );
    ptxt.innerHTML = `Pokémon Team Up for Battle! TAG TEAM Pokémon-GX estão aqui, novas cartas que apresentam Pokémon emparelhados e poderosos! A expansão Pokémon TCG: Sun & Moon—Team Up oferece equipes de batalha incríveis como Pikachu & Zekrom-GX, Eevee & Snorlax-GX e Gengar & Mimikyu-GX, além de ainda mais Pokémon-GX: Lycanroc-GX, Hoopa-GX, Cobalion-GX e outros! Quando as equipes colocam seus movimentos em movimento, é um free-for-all total. Confira a incrível ação e duplas dinâmicas na expansão Sun & Moon—Team Up!`;
  } else if (icone == 12) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_sm/icone_planta.png">
        <h2>Expansão Elos Inquebráveis - SM12</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2019/04/pokemon-unbroken-bonds-set-list-1024x171.jpg"
    );
    ptxt.innerHTML = `Laços Temperados em Batalha! Quando você tem um parceiro com quem pode contar, nada pode te parar! O TAG TEAM Pokémon-GX na expansão Pokémon TCG: Sun & Moon—Unbroken Bonds mostra o poder colossal do trabalho em equipe, incluindo Reshiram & Charizard-GX, as Ultra Beasts Pheromosa & Buzzwole-GX e Gardevoir & Sylveon-GX... além disso, Lucario se une ao recém-descoberto Melmetal! Com confiança e prática, esses Pokémon podem enfrentar praticamente qualquer coisa, então confira os incríveis pares de Pokémon na expansão Sun & Moon—Unbroken Bonds!`;
  } else if (icone == 13) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_sm/icone_bonds_2.png">
        <h2>Expansão Sintonia Mental - SM13</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2019/07/pokemon-unified-minds-set-list-and-set-symbol-1024x171.jpg"
    );
    ptxt.innerHTML = `Grandes Mentes Trabalham em Unidade! Para se manter no topo, sua equipe deve trabalhar como uma só! Nova batalha Pokémon-GX TAG TEAM em perfeita harmonia na expansão Pokémon TCG: Sun & Moon—Unified Minds, incluindo Mewtwo & Mew-GX, Rowlet & Alolan Exeggutor-GX, Espeon & Deoxys-GX, Garchomp & Giratina-GX, Umbreon & Darkrai-GX, e muito mais! Os verdadeiros companheiros de equipe miram em um único objetivo - encontre seus parceiros perfeitos na expansão Sun & Moon - Unified Minds!`;
  } else if (icone == 14) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_sm/icone_shiny.png">
        <h2>Expansão Destinos Ocultos - SM14</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2019/09/pokemon-hidden-fates-set-list-1024x171.jpg"
    );
    ptxt.innerHTML = `Seu destino brilha! Um conjunto selvagem repleto de favoritos de todos os tempos, a expansão Pokémon TCG: Hidden Fates é o sonho de um colecionador e o paraíso de um jogador! Suba a novas alturas com o primeiro trio TAG TEAM, Moltres & Zapdos & Articuno-GX, bem como Gyarados-GX e mais de 75 Pokémon em suas formas brilhantes - incluindo Mewtwo-GX e Charizard-GX! Alcance o poder incomum e surpreendente de Pokémon e descubra seus próprios Destinos Ocultos!`;
  } else if (icone == 15) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_sm/icone_hexagono.png">
        <h2>Expansão Eclípse Cósmico- SM15</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2019/12/pokemon-cosmic-eclipse-set-1024x171.jpg"
    );
    ptxt.innerHTML = `Uma Conexão Suprema de Estrelas e Pokémon! No ápice da série Sun & Moon, a expansão Pokémon TCG: Sun & Moon—Cosmic Eclipse aumenta a conexão entre Pokémon e Treinadores e lança combinações de TAG TEAM para novos níveis! Entre na batalha com Charizard & Braixen-GX, Venusaur & Snivy-GX, Blastoise & Piplup-GX e Solgaleo & Lunala-GX, junto com o triplo TAG TEAM de Arceus & Dialga & Palkia-GX, e muitos mais! Sinta o poder estelar de Pokémon com a expansão Sun & Moon—Cosmic Eclipse!`;
  }
  div_colecao_detalhe.classList.add("transicao");
  div_texto_detalhe.classList.add("transicao");
}

function geracao_SWSH() {
  logo_geracao.setAttribute("src", "imagens/Sword_Shield.png");
  logo_geracao.setAttribute("class", "logo_geracao");
  div_linha_do_tempo.innerHTML = `<img src="imagens/Linha do tempo.png" alt="" class="linha_do_tempo">
            <div class="icones_colecoes" onmouseout="remover_animacao()">
                <img src="imagens/icones_es/Sword_shield_symbol.png" alt="" id="isunmoon" onmouseover="mostrar_expansao_SWSH(1)">
                <img src="imagens/icones_es/Rebel_clash_symbol.png" alt="" id="iprisma" onmouseover="mostrar_expansao_SWSH(2)">
                <img src="imagens/icones_es/Darkness_ablaze_symbol.png" alt="" id="iburning" onmouseover="mostrar_expansao_SWSH(3)">
                <img src="imagens/icones_es/Champions_path_symbol.png" alt="" id="iv" onmouseover="mostrar_expansao_SWSH(4)">
                <img src="imagens/icones_es/Vivid_voltage_symbol.png" alt="" id="iasa" onmouseover="mostrar_expansao_SWSH(5)">
                <img src="imagens/icones_es/Shining_fates_symbol.png" alt="" id="iprismatico" onmouseover="mostrar_expansao_SWSH(6)">
                <img src="imagens/icones_es/Battle_styles_symbol.png" alt="" id="icrisis" onmouseover="mostrar_expansao_SWSH(7)">
                <img src="imagens/icones_es/Chilling_reign_symbol.png" alt="" id="ibola" onmouseover="mostrar_expansao_SWSH(8)">
                <img src="imagens/icones_es/Evolving_skies_symbol.png" alt="" id="idragao" onmouseover="mostrar_expansao_SWSH(9)">
                <img src="imagens/icones_es/Fusion_strike_symbol.png" alt="" id="ithunder" onmouseover="mostrar_expansao_SWSH(10)">
                <img src="imagens/icones_es/Brilliant_stars_symbol.png" alt="" id="ibonds" onmouseover="mostrar_expansao_SWSH(11)">
                <img src="imagens/icones_es/Astral_radiance_symbol.png" alt="" id="iplanta" onmouseover="mostrar_expansao_SWSH(12)">
                <img src="imagens/icones_es/Lost_origin_symbol.png" alt="" id="ibonds_2" onmouseover="mostrar_expansao_SWSH(13)">
                <img src="imagens/icones_es/Silver_tempest_symbol.png" alt="" id="ishiny" onmouseover="mostrar_expansao_SWSH(14)">
                <img src="imagens/icones_es/Crown_zenith_symbol.png" alt="" id="ihexagono" onmouseover="mostrar_expansao_SWSH(15)">`;
  div_detalhes.innerHTML = `<div class="colecao_detalhe transicao" id="div_colecao_detalhe">
                <img src="imagens/icones_es/Sword_shield_symbol.png">
                <h2>Expansão Espada e Escudo - SWSH1</h2>
            </div>
            
            <div class="texto_detalhe transicao" id="div_texto_detalhe">
                <p id="ptxt">Comece uma nova jornada e conheça o novo Pokémon V!
                Bem-vindo à região de Galar! Conheça mais de uma dúzia de poderosos novos Pokémon V, incluindo os Lendários Zacian e Zamazenta - e alguns, como Stonjourner e Snorlax, que podem evoluir para enormes Pokémon VMAX para ainda mais poder! Você também encontrará os primeiros parceiros Grookey, Scorbunny e Sobble, gracinhas como Wooloo e Yamper, e um punhado de Pokémon familiares em suas novas formas Galarian. Acompanhe uma nova geração na expansão Pokémon TCG: Sword & Shield!</p>
                <img src="https://cdn-cardmavin.mavin.io/wp-content/uploads/2020/01/pokemon-sword-and-shield-set-list-1024x171.jpg" alt="" id="img_banner_detalhe">`;
}
function mostrar_expansao_SWSH(icone) {
  if (icone == 1) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Sword_shield_symbol.png">
        <h2>Expansão Espada e Escudo - SWSH1</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2020/01/pokemon-sword-and-shield-set-list-1024x171.jpg"
    );
    ptxt.innerHTML = `Comece uma nova jornada e conheça o novo Pokémon V!
    Bem-vindo à região de Galar! Conheça mais de uma dúzia de poderosos novos Pokémon V, incluindo os Lendários Zacian e Zamazenta - e alguns, como Stonjourner e Snorlax, que podem evoluir para enormes Pokémon VMAX para ainda mais poder! Você também encontrará os primeiros parceiros Grookey, Scorbunny e Sobble, gracinhas como Wooloo e Yamper, e um punhado de Pokémon familiares em suas novas formas Galarian. Acompanhe uma nova geração na expansão Pokémon TCG: Sword & Shield!`;
  } else if (icone == 2) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Rebel_clash_symbol.png">
        <h2>Expansão Rixa Rebelde - SWSH2</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2020/04/pokemon-sword-and-shield-rebel-clash-set-1024x171.jpg"
    );
    ptxt.innerHTML = `Os Pokémon Galarian estão prontos para o rock! Rock com novos Pokémon! Aumente o volume e exploda a batida - você encontrará rebelião, caos e atitude punk em abundância no Pokémon Estampas Ilustradas: Espada & Escudo - expansão Rebel Clash, carregada com Pokémon V, incluindo Toxtricity V, Dubwool V, Boltund V, Sandaconda V, e mais! Você também encontrará um punhado de Pokémon VMAX, incluindo as evoluções finais dos três primeiros parceiros, além de Copperajah VMAX e Dragapult VMAX. Suba ao palco e às ruas com a expansão Sword & Shield—Rebel Clash!`;
  } else if (icone == 3) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Darkness_ablaze_symbol.png">
        <h2>Expansão Escuridão incadescente - SWSH3</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2020/09/pokemon-darkness-ablaze-set-1024x171.jpg"
    );
    ptxt.innerHTML = `Uma Chama Brilhante no Dia Mais Escuro! A noite aveludada brilha, queima e brilha de forma surpreendente quando o Pokémon Lendário Eternatus chega como um Pokémon V ao lado de Centiskorch V, Mew V, Galarian Slowbro V e muitos outros. Você também encontrará Pokémon imponentes VMAX em suas formas Gigantamax: Charizard VMAX, Grimmsnarl VMAX, Butterfree VMAX e muito mais! Acenda uma fogueira com a expansão Pokémon TCG: Sword & Shield—Darkness Ablaze!`;
  } else if (icone == 4) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Champions_path_symbol.png">
        <h2>Expansão Caminho do Campeão - SWSH4</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2020/10/pokemon-champions-path-set-list-1024x171.jpg"
    );
    ptxt.innerHTML = `Você tem o coração de um campeão?

    Dê o primeiro passo para derrotar todos os rivais e provar o seu valor! Treinadores como Bede e Marnie irão desafiá-lo ao longo de sua jornada na região de Galar, e novos Pokémon selvagens potencializarão suas estratégias para enfrentar poderosos Gym Leaders em estádios lotados de torcedores entusiasmados. Descubra Venusaur, Lucario e Incineroar como novos Pokémon V—além de Pokémon Gigantamax como Drednaw VMAX e Alcremie VMAX! Mostre sua habilidade e maestria com a expansão Pokémon TCG: Champion's Path!`;
  } else if (icone == 5) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Vivid_voltage_symbol.png">
        <h2>Expansão Voltagem Vívida - SWSH5</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2020/11/pokemon-vivid-voltage-set-1024x171.jpg"
    );
    ptxt.innerHTML = `Energia maciça e cor selvagem!

    Descubra um novo brilho e poder máximo na expansão Pokémon TCG: Sword & Shield—Vivid Voltage à medida que mais Pokémon V aparecem, incluindo o recém-descoberto Pokémon Mítico Zarude! Novos Pokémon Incríveis únicos entram em cena com um respingo de arco-íris, ao lado de mais Pokémon VMAX... incluindo o esplendor, a majestade, a maravilha redonda que é Gigantamax Pikachu! Coloque um pouco de cor e muita faísca em seu baralho ou coleção com a expansão Sword & Shield—Vivid Voltage!`;
  } else if (icone == 6) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Shining_fates_symbol.png">
        <h2>Expansão Destinos Brilhantes - SWSH6</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2021/02/pokemon-shining-fates-set-list-1024x171.jpg"
    );
    ptxt.innerHTML = `Revele um destino brilhante!

    Os Pokémon brilhantes são tão extraordinários que quase nunca são vistos, e os treinadores que os pegam são considerados sortudos - e ainda assim eles podem ser seus na expansão Pokémon Estampas Ilustradas: Destinos Brilhantes! Mais de 100 Pokémon Shiny aparecem em belos cartões gravados - ao lado de mais de 30 Pokémon V e Pokémon VMAX, incluindo o espetacular Shiny Charizard em sua forma Gigantamax! Agarre seu destino e expanda sua coleção com a expansão Shining Fates!`;
  } else if (icone == 7) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Battle_styles_symbol.png">
        <h2>Expansão Estilos de batalha - SWSH7</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2021/04/pokemon-battle-styles-set-list-1024x171.jpg"
    );
    ptxt.innerHTML = `Escolha seu estilo de batalha com sabedoria!

    Seja um titã cheio de poder ou ataque com velocidade impossível - tudo depende do seu domínio marcial! Canalize o poder de Pokémon V como Mimikyu V, Tyranitar V, Empoleon V e muito mais. Você também encontrará um punhado de impressionantes Pokémon VMAX, incluindo Gigantamax Urshifu nos estilos Single Strike e Rapid Strike! Libere confrontos épicos com a expansão Sword & Shield—Battle Styles!`;
  } else if (icone == 8) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Chilling_reign_symbol.png">
        <h2>Expansão Reinos Arrepiantes - SWSH8</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2021/06/pokemon-chilling-reign-set-1024x171.jpg"
    );
    ptxt.innerHTML = `Domine a Tundra Congelada!

    Aproveite a vantagem com Pokémon das terras congeladas, com o poderoso Ice Rider Calyrex VMAX e Shadow Rider Calyrex VMAX - além das formas Galarian de Articuno, Zapdos e Moltres! Assombrações fantasmas, nevascas uivantes e batalhas selvagens - expanda os domínios de sua estratégia Pokémon com novos poderes e novas possibilidades. Continue apesar da oposição fantasmagórica e conquiste a vitória total na terra da neve espectral com a expansão Pokémon TCG: Sword & Shield—Chilling Reign!`;
  } else if (icone == 9) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Evolving_skies_symbol.png">
        <h2>Expansão Céus em Evolução - SWSH9</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2021/09/pokemon-evolving-skies-set-list-1024x171.jpg"
    );
    ptxt.innerHTML = `Poder Dinâmico no Horizonte!

    Sinta o poder dos ventos inconstantes e prepare-se para uma tempestade épica com poderosos Pokémon do tipo Dragão fazendo seu retorno triunfante! Rayquaza VMAX lidera a onda do alto e Duraludon VMAX eleva-se acima da terra em sua forma Gigantamax, acompanhado por Dragonite V, Noivern V e muito mais. À medida que as nuvens se abrem, as Evoluções de Eevee aparecem em um arco-íris completo de Pokémon V e Pokémon VMAX para sinalizar um novo dia brilhante em Pokémon Estampas Ilustradas: Espada e Escudo — Céus em Evolução!`;
  } else if (icone == 10) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Fusion_strike_symbol.png">
        <h2>Expansão Golpe Fusão - SWSH10</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2022/02/pokemon-fusion-strike-set-list-1024x171.jpg"
    );
    ptxt.innerHTML = `Estilos se combinam em uma nova estratégia!

    A estrada à frente revela um potencial ilimitado à medida que o novo estilo Fusion Strike surge para aproveitar o espírito ilimitado de Pokémon e treinadores! Novos Pokémon V adaptáveis ​​como Genesect V, Hoopa V e Mew VMAX estão ansiosos para a batalha, enquanto os Pokémon Single Strike e Rapid Strike aparecem como Rillaboom VMAX, Cinderace VMAX e Inteleon VMAX aparecem em suas formas Gigantamax. Siga o fluxo e descubra novas estratégias poderosas em Pokémon TCG: Sword & Shield—Fusion Strike!`;
  } else if (icone == 11) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Brilliant_stars_symbol.png">
        <h2>Expansão Astros Cintilantes - SWSH11</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2022/08/pokemon-brilliant-stars-set-list-1024x171.jpg"
    );
    ptxt.innerHTML = `Transbordando de luz, Arceus VSTAR desce do alto para compartilhar seus poderes celestiais com outros Pokémon V. Descubra constelações cintilantes e comece sua jornada rumo à grandeza estelar na expansão Pokémon TCG: Sword & Shield—Brilliant Stars!`;
  } else if (icone == 12) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Astral_radiance_symbol.png">
        <h2>Expansão Estrelas Radiantes - SWSH12</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2022/08/pokemon-astral-radiance-set-list-1024x171.jpg"
    );
    ptxt.innerHTML = `Avance corajosamente para a batalha em um novo mundo com a expansão Pokémon TCG: Sword & Shield—Astral Radiance!

    Viaje de volta para uma terra de mitos, lendas e selvageria enquanto Origin Forme Dialga VSTAR e Origin Forme Palkia VSTAR moldam o tecido do tempo e do espaço! Decidueye, Typhlosion e Samurott chegam como Pokémon Hisuian VSTAR, juntando-se a mais Pokémon e Treinadores da antiga região de Hisui. Enquanto isso, Pokémon Shiny reaparecem como Pokémon Radiant, com Radiant Greninja liderando o ataque na expansão Pokémon TCG: Sword & Shield—Astral Radiance!`;
  } else if (icone == 13) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Lost_origin_symbol.png">
        <h2>Expansão Origem perdida - SWSH13</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2022/10/pokemon-lost-origins-set-list-1024x171.jpg"
    );
    ptxt.innerHTML = `À medida que a fronteira entre as dimensões se desfaz, Giratina VSTAR mergulha o mundo na sombra abissal da Zona Perdida! Cuidado com o poder da Zona Perdida - ao contrário da pilha de descarte, as cartas que são enviadas aqui não podem ser recuperadas. Enquanto Aerodactyl VSTAR aproveita esse poder distorcido, Magnezone, Drapion, Hisuian Goodra e Hisuian Zoroark também aparecem como Pokémon VSTAR para mostrar suas próprias habilidades surpreendentes, acompanhados por Kyurem VMAX. Acima das sombras, Enamorus V e Radiant Gardevoir conjuram magia deslumbrante na expansão Sword & Shield—Lost Origin!`;
  } else if (icone == 14) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Silver_tempest_symbol.png">
        <h2>Expansão Tempestade Prateada - SWSH14</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2022/12/pokemon-silver-tempest-set-list-1024x171.jpg"
    );
    ptxt.innerHTML = `Um estrondo sinistro ecoa à distância, e Lugia VSTAR emerge das profundezas escuras do oceano para responder ao seu chamado! Explore um território desconhecido com companheiros de expedição aventureiros, incluindo Alolan Vulpix VSTAR, Serperior VSTAR, Unown VSTAR e Mawile VSTAR. Enquanto isso, uma batalha lendária aguarda enquanto Regieleki VMAX e Regidrago VSTAR despertam do sono. Descubra parcerias poderosas na Galeria do Treinador e defina um rumo para a aventura com a expansão Pokémon TCG: Sword & Shield—Silver Tempest!`;
  } else if (icone == 15) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Crown_zenith_symbol.png">
        <h2>Expansão Realeza Absoluta- SWSH15</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2023/01/pokemon-crown-zenith-set-list-1024x171.jpg"
    );
    ptxt.innerHTML = `Os heróis lendários Zacian e Zamazenta brilham com novos VSTAR Powers, e uma assembléia estelar de Pokémon e Treinadores chega para celebrar a era do Pokémon V! Descubra ilustrações especiais deslumbrantes na Galarian Gallery e use a força de Pokémon raros e poderosos, incluindo Charizard como Pokémon VSTAR e Pokémon Radiante. Muitos outros Pokémon têm suas próprias histórias para contar na batalha, pois a série Sword & Shield atinge seu pico na expansão Pokémon TCG: Crown Zenith!`;
  }
  div_colecao_detalhe.classList.add("transicao");
  div_texto_detalhe.classList.add("transicao");
}
function geracao_SVI() {
  logo_geracao.setAttribute(
    "src",
    "imagens/Pokemon_TCG_Scarlet_Violet_Logo.png"
  );
  logo_geracao.setAttribute("class", "SV_logo");
  div_linha_do_tempo.innerHTML = `<img src="imagens/linha_ev.png" alt="" class="linha_do_tempo">
            <div class="icones_colecoes" onmouseout="remover_animacao()">
                <img src="imagens/icones_ev/SetSymbolScarlet_and_Violet.png" alt="" id="isunmoon" onmouseover="mostrar_expansao_SVI(1)">
                <img src="imagens/icones_ev/SetSymbolPaldea_Evolved.png" alt="" id="iprisma" onmouseover="mostrar_expansao_SVI(2)">
                <img src="imagens/icones_ev/200px-Icon-round-Question_mark.svg.png" alt="" id="iburning">`;
  div_detalhes.innerHTML = `
            <div class="colecao_detalhe transicao" id="div_colecao_detalhe">
                <img src="imagens/icones_ev/SetSymbolScarlet_and_Violet.png">
                <h2>Expansão Escarlate & Violeta - SVI1</h2>
            </div>
            
            <div class="texto_detalhe transicao" id="div_texto_detalhe">
                <p id="ptxt">Expansão em lançamento, mas informações estão por vir!</p>
                <img src="https://cdn-cardmavin.mavin.io/wp-content/uploads/2023/04/pokemon-scarlet-violet-set-list-1024x171.jpg" alt="" id="img_banner_detalhe">`;
}
function mostrar_expansao_SVI(icone) {
  if (icone == 1) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_ev/SetSymbolScarlet_and_Violet.png">
        <h2>Expansão Escarlate & Violeta - SVI1</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://cdn-cardmavin.mavin.io/wp-content/uploads/2023/04/pokemon-scarlet-violet-set-list-1024x171.jpg"
    );
    ptxt.innerHTML = `Expansão em lançamento, mas informações estão por vir!`;
  } else if (icone == 2) {
    div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_ev/SetSymbolPaldea_Evolved.png">
        <h2>Expansão Evoluções em Paldea - SVI2</h2>
        `;
    img_banner_detalhe.setAttribute(
      "src",
      "https://www.totalcards.net/media/catalog/category/paldea-evolved-banner-new.jpg"
    );
    ptxt.innerHTML = `Expansão em lançamento, mas informações estão por vir!`;
  }

  div_colecao_detalhe.classList.add("transicao");
  div_texto_detalhe.classList.add("transicao");
}
