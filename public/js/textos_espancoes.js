
function dropdown(p) {
    var elementos = document.querySelectorAll('.dropDown')
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
        }, 0)
    }
    if (valor_select.value == "Sun e Moon") {
        geracao_S_e_M()
    } else if (valor_select.value == "Sword e Shield") {
        geracao_S_e_S() 
    } else if (valor_select.value == "Scarlet e Violet") {
        geracao_S_e_V() 
    }
}
function geracao_S_e_M() {
    logo_geracao.setAttribute('src', 'imagens/sun&moon.png')
    logo_geracao.setAttribute('class', 'logo_geracao')
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
                <img src="imagens/icones_sm/icone_hexagono.png" alt="" id="ihexagono" onmouseover="mostrar_expansao_SM(15)">`
        div_detalhes.innerHTML = `<div class="colecao_detalhe transicao" id="div_colecao_detalhe">
                <img src="imagens/icones_sm/icone_s&m.png" alt="">
                <h2>Expansão Sun & Moon - SM1</h2>
            </div>
            
            <div class="texto_detalhe transicao" id="div_texto_detalhe">
                <p id="ptxt">The battles heat up with Pokémon from the tropical Alola region in the Pokémon TCG: Sun &
                    Moon
                    expansion. Start your journey with Rowlet, Litten, and Popplio, then seek out the Legendary Pokémon
                    Solgaleo-GX and Lunala-GX to witness the awesome power of a new kind of Pokémon: each Pokémon-GX
                    brings an attack so devastating that you can use only one of them per game. Discover dozens of
                    never-before-seen Pokémon, Alola forms of some familiar favorites, and new ways to battle in the
                    Pokémon TCG: Sun & Moon expansion. </p>
                <img src="imagens/Banner_S&M.png" alt="" id="img_banner_detalhe">`
}
function mostrar_expansao_SM(icone) {
    if (icone == 1) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_sm/icone_s&m.png" alt="">
        <h2>Expansão Sun & Moon - SM1</h2>
        `
        img_banner_detalhe.setAttribute('src', 'imagens/Banner_S&M.png')
        ptxt.innerHTML = `The battles heat up with Pokémon from the tropical Alola region in the Pokémon TCG: Sun & Moon
                    expansion. Start your journey with Rowlet, Litten, and Popplio, then seek out the Legendary Pokémon
                    Solgaleo-GX and Lunala-GX to witness the awesome power of a new kind of Pokémon: each Pokémon-GX
                    brings an attack so devastating that you can use only one of them per game. Discover dozens of
                    never-before-seen Pokémon, Alola forms of some familiar favorites, and new ways to battle in the
                    Pokémon TCG: Sun & Moon expansion.
            `
    } else if(icone == 2) {
        div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_sm/icone_prisma.png">
    <h2>Expansão Guardiões Ascendentes - SM2</h2>
    `
    div_colecao_detalhe.classList.add("transicao")
    div_texto_detalhe.classList.add("transicao")
    img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/07/pokemon-sun-and-moon-guardians-rising-set-list-1024x171.jpg')
    ptxt.innerHTML = `Visit Alola for Pokémon fun, from the beaches to the mountain
         peaks—and discover new traditions and new challenges! Meet the island guardians Tapu Koko-GX
        and Tapu Lele-GX , and sharpen your skills with Kahuna Hala and Captain Mallow! Be amazed by the
         secret powers of Kommo-o-GX , Lycanroc-GX , Metagross-GX , Sylveon-GX , Toxapex-GX , Vikavolt-GX ,
          and many more! Come to the islands, and seize the power of the Pokémon TCG: Sun & Moon—Guardians Rising 
          expansion!
        `
    } else if (icone == 3) {
        div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_sm/icone_burning.png">
    <h2>Expansão Sombras ardentes - SM3</h2>
    `
    div_colecao_detalhe.classList.add("transicao")
    div_texto_detalhe.classList.add("transicao")
    img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/07/pokemon-sun-and-moon-burning-shadows-set-list-1024x171.jpg')
    ptxt.innerHTML = `Fiery Battles and Deep Shadows! What strange fires lurk in the shadows? Minions of Team Skull and a cavalcade of new Pokémon stand ready to battle in the dark of night and in the blazing sun! Slug it out with new titans like Necrozma-GX, Marshadow-GX, and Tapu Fini-GX, or battle with trusty allies from Machamp-GX and Charizard-GX to Darkrai-GX and Ho-Oh-GX. Fight for what's right with the Pokémon TCG: Sun & Moon—Burning Shadows expansion!
        `
    } else if (icone == 4) {
        div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_sm/icone_v.png">
    <h2>Expansão Lendas Luminecentes - SM4</h2>
    `
    div_colecao_detalhe.classList.add("transicao")
    div_texto_detalhe.classList.add("transicao")
    img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/07/pokemon-sun-and-moon-shining-legends-set-list-1024x171.jpg')
    ptxt.innerHTML = `Blaze a Bright Trail with Shining Pokémon! In each region, a handful of Pokémon stand apart as creatures of heroic stories and wild adventures: Zekrom, Latios, Mewtwo-GX, Entei-GX. Others are just whispers and rumors: mysterious Pokémon such as Keldeo, Shining Jirachi, Shining Volcanion—and many more! See and collect these astounding Pokémon of myth and legend with the Pokémon TCG: Shining Legends expansion!   `
    } else if (icone == 5) {
        div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_sm/asa_icone.png">
    <h2>Expansão Invasão Carmesin - SM5</h2>
    `
    div_colecao_detalhe.classList.add("transicao")
    div_texto_detalhe.classList.add("transicao")
    img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/07/pokemom-sun-and-moon-crimson-invasion-set-1024x171.jpg')
    ptxt.innerHTML = `Crimson Chaos Across Alola! The mysterious Ultra Beasts have arrived, invading the Alola region as crimson-tinged Pokémon-GX: Nihilego-GX, Buzzwole-GX, Kartana-GX, and the ravenous Guzzlord-GX! Can Silvally-GX and the other allies of Alola defend the islands—or will the Ultra Beasts take control? Find out when you battle for the prize with the Pokémon TCG: Sun & Moon—Crimson Invasion expansion!`
    } else if (icone == 6) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_sm/icone_prismatico.png">
        <h2>Expansão Ultra Prisma - SM6</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/07/pokemom-sun-and-moon-ultra-prism-set-1024x171.jpg')
        ptxt.innerHTML = `An Unknown New Dimension! Pass through the Ultra Wormhole into a bizarre new Pokémon world, where familiar sights become strange and new powers are unlocked! Watch Necrozma's power grow, and marvel as brand-new Prism Star cards reveal their astounding effects on play. Meet Dialga-GX and Palkia-GX, and encounter bizarre Ultra Beasts and wild new forms of Alola's Legendary Pokémon. Explore a new dimension in the Pokémon TCG: Sun & Moon—Ultra Prism expansion!`    
    } else if (icone == 7) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_sm/icone_crisis.png">
        <h2>Expansão Luz Proibida - SM7</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/07/pokemom-sun-and-moon-forbidden-light-expansion-set-1024x171.jpg')
        ptxt.innerHTML = `Necrozma's Power Knows No Limits! Taking the Pokémon world by surprise, Necrozma has absorbed a Legendary Pokémon and taken on a new form as Ultra Necrozma-GX! Other Pokémon gather to welcome this new light...or to resist it. Lucario-GX, Greninja-GX, Zygarde-GX, Yveltal-GX, Naganadel-GX, even Volcanion Prism Star and the majestic Arceus Prism Star must choose a side. Discover awesome Pokémon and mysterious treasures in the Pokémon TCG: Sun & Moon—Forbidden Light expansion!`    
    } else if (icone == 8) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_sm/icone_bola.png">
        <h2>Expansão Tempestade Celestial - SM8</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/08/pokemon-sun-moon-celestial-storm-set-list-1024x171.jpg')
        ptxt.innerHTML = `Tomem cuidado! Está aberta a temporada de furiosas tempestades esmeralda e um céu vívido com prodígios: Pokémon e criaturas do Ultra Espaço se enfrentando! Alguns seguem a tempestade, outros a desafiam, com uma sequência incluindo Articuno-GX, Blaziken-GX, Scizor-GX, Stakataka-GX, e o impressionante Rayquaza-GX, e mais novos cards Prisma estrelando Latios, Latias e Jirachi. Encare os ventos da mudança de cabeça erguida na expansão Sol e Lua — Tempestade Celestial do Pokémon Estampas Ilustradas!`
    
    } else if (icone == 9) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_sm/icone_dragao.png">
        <h2>Expansão Dragões Soberanos- SM9</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/09/pokemon-dragon-majesty-set-1024x171.jpg')
        ptxt.innerHTML = `Nobres Pokémon de asas e garras voando alto! Dragões Soberanos trazem consigo uma poderosa horda de Pokémon dragão: Reshiram-GX, Salamence-GX, Dragonite-GX e mais uma dúzia, incluindo Charizard! Seu comando de fogo, na batalha e no céu, subirá até o topo para colecionadores e competidores. Prepare-se para voar alto com estes incríveis Pokémon na mini-expansão Dragões Soberanos do Pokémon TCG!`
    
    } else if (icone == 10) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_sm/icone_thunder.png">
        <h2>Expansão Trovões Perdidos - SM10</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/10/pokemon-lost-thunder-set-1024x171.jpg')
        ptxt.innerHTML = `Poder antigo ecoando do topo das montanhas! Viaje por colinas embrenhadas, onde a fragrância do incenso de templos antigos enche o ar junto com as faíscas do Pokémon de alta voltagem! A expansão Trovões Perdidos do Pokémon TCG soma o novo com o tradicional, estrelando Celebi e Ditto, ao lado de Blacephalon-GX, Lugia-GX, Tyranitar-GX, e o mais novo Pokémon Mítico, Zeraora-GX! Invoque os grandes trovões e recarregue seu baralho com Pokémon de alta potência na expansão Sol e Lua — Trovões Perdidos do Pokémon Estampas Ilustradas!`    
    } else if (icone == 11) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_sm/icone_bonds.png">
        <h2>Expansão União de Aliados - SM11</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2019/01/pokemon-team-up-set-1024x171.jpg')
        ptxt.innerHTML = `Pokémon Team Up for Battle! TAG TEAM Pokémon-GX are here, brand-new cards that feature paired-up and powered-up Pokémon! The Pokémon TCG: Sun & Moon—Team Up expansion offers amazing battle teams like Pikachu & Zekrom-GX, Eevee & Snorlax-GX, and Gengar & Mimikyu-GX, plus even more Pokémon-GX: Lycanroc-GX, Hoopa-GX, Cobalion-GX, and others! When the teams put their moves into motion, it's a total free-for-all. Check out the awesome action and dynamic duos in the Sun & Moon—Team Up expansion!`
    
    } else if (icone == 12) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_sm/icone_planta.png">
        <h2>Expansão Elos Inquebráveis - SM12</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2019/04/pokemon-unbroken-bonds-set-list-1024x171.jpg')
        ptxt.innerHTML = `Bonds Tempered in Battle! When you have a partner you can count on, nothing can stop you! The TAG TEAM Pokémon-GX in the Pokémon TCG: Sun & Moon—Unbroken Bonds expansion show the colossal power of teamwork, including Reshiram & Charizard-GX, the Ultra Beasts Pheromosa & Buzzwole-GX, and Gardevoir & Sylveon-GX...plus, Lucario teams up with the newly discovered Melmetal! With trust and practice, these Pokémon can tackle just about anything, so check out the amazing Pokémon pairings in the Sun & Moon—Unbroken Bonds expansion!`
    
    } else if (icone == 13) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_sm/icone_bonds_2.png">
        <h2>Expansão Sintonia Mental - SM13</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2019/07/pokemon-unified-minds-set-list-and-set-symbol-1024x171.jpg')
        ptxt.innerHTML = `Great Minds Work in Unity! To stay on top, your team must work as one! New TAG TEAM Pokémon-GX battle in flawless harmony in the Pokémon TCG: Sun & Moon—Unified Minds expansion, including Mewtwo & Mew-GX, Rowlet & Alolan Exeggutor-GX, Espeon & Deoxys-GX, Garchomp & Giratina-GX, Umbreon & Darkrai-GX, and more! True teammates take aim at a single goal—find your perfect partners in the Sun & Moon—Unified Minds expansion!`
    
    } else if (icone == 14) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_sm/icone_shiny.png">
        <h2>Expansão Destinos Ocultos - SM14</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2019/09/pokemon-hidden-fates-set-list-1024x171.jpg')
        ptxt.innerHTML = `Your Fate Shines Bright! A wild set loaded with all-time favorites, the Pokémon TCG: Hidden Fates expansion is a collector's dream and a player's paradise! Soar to new heights with the first TAG TEAM trio, Moltres & Zapdos & Articuno-GX, as well as Gyarados-GX and more than 75 Pokémon in their Shiny forms—including Mewtwo-GX and Charizard-GX! Reach out for the unusual, astonishing power of Pokémon, and discover your own Hidden Fates!`
    
    } else if (icone == 15) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_sm/icone_hexagono.png">
        <h2>Expansão Eclípse Cósmico- SM15</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2019/12/pokemon-cosmic-eclipse-set-1024x171.jpg')
        ptxt.innerHTML = `A Supreme Connection of Stars and Pokémon! At the apex of the Sun & Moon Series, the Pokémon TCG: Sun & Moon—Cosmic Eclipse expansion boosts the connection of Pokémon and Trainers, and it launches TAG TEAM combinations to new levels! Jump into battle with Charizard & Braixen-GX, Venusaur & Snivy-GX, Blastoise & Piplup-GX, and Solgaleo & Lunala-GX, along with the triple TAG TEAM of Arceus & Dialga & Palkia-GX, plus many more! Feel the stellar power of Pokémon with the Sun & Moon—Cosmic Eclipse expansion!`
    
    }
    div_colecao_detalhe.classList.add("transicao")
    div_texto_detalhe.classList.add("transicao")
   
}

function geracao_S_e_S() {
    logo_geracao.setAttribute('src', 'imagens/Sword_Shield.png')
    logo_geracao.setAttribute('class', 'logo_geracao')
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
                <img src="imagens/icones_es/Crown_zenith_symbol.png" alt="" id="ihexagono" onmouseover="mostrar_expansao_SWSH(15)">`
        div_detalhes.innerHTML = `<div class="colecao_detalhe transicao" id="div_colecao_detalhe">
                <img src="imagens/icones_es/Sword_shield_symbol.png">
                <h2>Expansão Espada e Escudo - SWSH1</h2>
            </div>
            
            <div class="texto_detalhe transicao" id="div_texto_detalhe">
                <p id="ptxt">Start a New Journey & Meet New Pokémon V!
        Welcome to the Galar region! Meet more than a dozen powerful new Pokémon V, including the Legendary Zacian and Zamazenta—and some, like Stonjourner and Snorlax, that can evolve into enormous Pokémon VMAX for even more power! You'll also find first partners Grookey, Scorbunny, and Sobble, little cuties like Wooloo and Yamper, and a handful of familiar Pokémon in their new Galarian forms. Catch up with a new generation in the Pokémon TCG: Sword & Shield expansion!</p>
                <img src="https://cdn-cardmavin.mavin.io/wp-content/uploads/2020/01/pokemon-sword-and-shield-set-list-1024x171.jpg" alt="" id="img_banner_detalhe">`
}
function mostrar_expansao_SWSH(icone) {
    if (icone == 1) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Sword_shield_symbol.png">
        <h2>Expansão Espada e Escudo - SWSH1</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2020/01/pokemon-sword-and-shield-set-list-1024x171.jpg')
        ptxt.innerHTML = `Start a New Journey & Meet New Pokémon V!
        Welcome to the Galar region! Meet more than a dozen powerful new Pokémon V, including the Legendary Zacian and Zamazenta—and some, like Stonjourner and Snorlax, that can evolve into enormous Pokémon VMAX for even more power! You'll also find first partners Grookey, Scorbunny, and Sobble, little cuties like Wooloo and Yamper, and a handful of familiar Pokémon in their new Galarian forms. Catch up with a new generation in the Pokémon TCG: Sword & Shield expansion!`
    
    } else if (icone == 2) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Rebel_clash_symbol.png">
        <h2>Expansão Rixa Rebelde - SWSH2</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2020/04/pokemon-sword-and-shield-rebel-clash-set-1024x171.jpg')
        ptxt.innerHTML = `Galarian Pokémon Are Ready to Rock! Rock out with new Pokémon! Crank it loud and blast the beat-you'll find rebellion, chaos, and punk attitude galore in the Pokémon TCG: Sword & Shield—Rebel Clash expansion, loaded with Pokémon V including Toxtricity V, Dubwool V, Boltund V, Sandaconda V, and more! You'll also find a handful of Pokémon VMAX, including the final Evolutions of all three first partners, plus Copperajah VMAX and Dragapult VMAX. Take to the stage and the streets with the Sword & Shield—Rebel Clash expansion!`
    
    } else if (icone == 3) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Darkness_ablaze_symbol.png">
        <h2>Expansão Escuridão incadescente - SWSH3</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2020/09/pokemon-darkness-ablaze-set-1024x171.jpg')
        ptxt.innerHTML = `A Brilliant Flame on the Darkest Day! The velvet night glows, burns, and blazes astoundingly bright as the Legendary Pokémon Eternatus arrives as a Pokémon V alongside Centiskorch V, Mew V, Galarian Slowbro V, and many others. You'll also find towering Pokémon VMAX in their Gigantamax forms: Charizard VMAX, Grimmsnarl VMAX, Butterfree VMAX, and more! Light a fire with the Pokémon TCG: Sword & Shield—Darkness Ablaze expansion!`
    
    } else if (icone == 4) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Champions_path_symbol.png">
        <h2>Expansão Caminho do Campeão - SWSH4</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2020/10/pokemon-champions-path-set-list-1024x171.jpg')
        ptxt.innerHTML = `Do You Have the Heart of a Champion?

        Take the first step to defeating all rivals and proving your worth! Trainers like Bede and Marnie will challenge you throughout your journey in the Galar region, and wild new Pokémon power your strategies to take on mighty Gym Leaders in stadiums packed with cheering fans. Discover Venusaur, Lucario, and Incineroar as new Pokémon V—plus Gigantamax Pokémon like Drednaw VMAX and Alcremie VMAX! Show your skill and mastery with the Pokémon TCG: Champion's Path expansion!`
    
    } else if (icone == 5) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Vivid_voltage_symbol.png">
        <h2>Expansão Voltagem Vívida - SWSH5</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2020/11/pokemon-vivid-voltage-set-1024x171.jpg')
        ptxt.innerHTML = `Massive Energy & Wild Color!

        Discover new brilliance and maximum power in the Pokémon TCG: Sword & Shield—Vivid Voltage expansion as more Pokémon V appear, including the newly discovered Mythical Pokémon Zarude! Unique new Amazing Pokémon burst onto the scene with a rainbow splash, alongside more Pokémon VMAX...including the splendor, the majesty, the delight round wonder that is Gigantamax Pikachu! Put a little color and a lot of spark into your deck or collection with the Sword & Shield—Vivid Voltage expansion!`
    
    } else if (icone == 6) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Shining_fates_symbol.png">
        <h2>Expansão Destinos Brilhantes - SWSH6</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2021/02/pokemon-shining-fates-set-list-1024x171.jpg')
        ptxt.innerHTML = `Reveal A Shining Destiny!

        Shiny Pokémon are so extraordinary that they're almost never seen, and Trainers who catch them are considered quite lucky—and yet they can be yours in the Pokémon TCG: Shining Fates expansion! More than 100 Shiny Pokémon appear on beautiful etched cards—alongside more than 30 Pokémon V and Pokémon VMAX, including the spectacular Shiny Charizard in its Gigantamax form! Seize your destiny and expand your collection with the Shining Fates expansion!`
    
    } else if (icone == 7) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Battle_styles_symbol.png">
        <h2>Expansão Estilos de batalha - SWSH7</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2021/04/pokemon-battle-styles-set-list-1024x171.jpg')
        ptxt.innerHTML = `Choose Your Battle Style Wisely!

        Be a titan full of power, or strike with impossible speed—it all depends on your martial mastery! Channel the power of Pokémon V like Mimikyu V, Tyranitar V, Empoleon V, and more. You’ll also find a handful of impressive Pokémon VMAX, including Gigantamax Urshifu in both Single Strike and Rapid Strike styles! Unleash epic smashups with the Sword & Shield—Battle Styles expansion!`
    
    } else if (icone == 8) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Chilling_reign_symbol.png">
        <h2>Expansão Reinos Arrepiantes - SWSH8</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2021/06/pokemon-chilling-reign-set-1024x171.jpg')
        ptxt.innerHTML = `Rule the Frozen Tundra!

        Seize the advantage with Pokémon of the frozen lands, with the powerful Ice Rider Calyrex VMAX and Shadow Rider Calyrex VMAX—plus the Galarian forms of Articuno, Zapdos, and Moltres! Phantom hauntings, howling blizzards, and wild battles—expand the realms of your Pokémon strategy with new powers and new possibilities. Press on despite ghostly opposition, and claim total victory in the land of spectral snow with the Pokémon TCG: Sword & Shield—Chilling Reign expansion!`
    
    } else if (icone == 9) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Evolving_skies_symbol.png">
        <h2>Expansão Céus em Evolução - SWSH9</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2021/09/pokemon-evolving-skies-set-list-1024x171.jpg')
        ptxt.innerHTML = `Dynamic Power on the Horizon!

        Feel the power of the shifting winds, and brace for an epic storm as mighty Dragon-type Pokémon make their triumphant return! Rayquaza VMAX leads the surge from on high, and Duraludon VMAX towers above the land in its Gigantamax form, joined by Dragonite V, Noivern V, and more. As the clouds part, Eevee's Evolutions appear in a full rainbow of Pokémon V and Pokémon VMAX to signal a bright new day in Pokémon TCG: Sword & Shield—Evolving Skies!`
    
    } else if (icone == 10) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Fusion_strike_symbol.png">
        <h2>Expansão Golpe Fusão - SWSH10</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2022/02/pokemon-fusion-strike-set-list-1024x171.jpg')
        ptxt.innerHTML = `Styles Combine in a New Strategy!

        The road ahead reveals limitless potential as the new Fusion Strike style emerges to harness the unbound spirit of Pokémon and Trainers alike! Adaptable new Pokémon V like Genesect V, Hoopa V, and Mew VMAX are eager for battle, while Single Strike and Rapid Strike Pokémon loom large as Rillaboom VMAX, Cinderace VMAX, and Inteleon VMAX appear in their Gigantamax forms. Go with the flow and discover powerful new strategies in Pokémon TCG: Sword & Shield—Fusion Strike!`
    
    } else if (icone == 11) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Brilliant_stars_symbol.png">
        <h2>Expansão Astros Cintilantes - SWSH11</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2022/08/pokemon-brilliant-stars-set-list-1024x171.jpg')
        ptxt.innerHTML = `Overflowing with light, Arceus VSTAR descends from on high to share its celestial powers with other Pokémon V. Discover glimmering constellations and start your journey toward stellar greatness in the Pokémon TCG: Sword & Shield—Brilliant Stars expansion!`
    
    } else if (icone == 12) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Astral_radiance_symbol.png">
        <h2>Expansão Estrelas Radiantes - SWSH12</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2022/08/pokemon-astral-radiance-set-list-1024x171.jpg')
        ptxt.innerHTML = `Charge courageously into battle in a new world with the Pokémon TCG: Sword & Shield—Astral Radiance expansion!

        Travel back to a land of myths, legends, and wilderness as Origin Forme Dialga VSTAR and Origin Forme Palkia VSTAR shape the fabric of time and space! Decidueye, Typhlosion, and Samurott arrive as Hisuian Pokémon VSTAR, joining more Pokémon and Trainers from the ancient region of Hisui. Meanwhile, Shiny Pokémon reappear as Radiant Pokémon, with Radiant Greninja leading the charge in the Pokémon TCG: Sword & Shield—Astral Radiance expansion!`
    
    } else if (icone == 13) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Lost_origin_symbol.png">
        <h2>Expansão Origem perdida - SWSH13</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2022/10/pokemon-lost-origins-set-list-1024x171.jpg')
        ptxt.innerHTML = `As the boundary between dimensions tears apart, Giratina VSTAR plunges the world into the abyssal shadow of the Lost Zone! Be wary of the Lost Zone's power—unlike the discard pile, cards that are sent here cannot be recovered. While Aerodactyl VSTAR harnesses this distorted power, Magnezone, Drapion, Hisuian Goodra, and Hisuian Zoroark also appear as Pokémon VSTAR to show off their own astonishing skills, joined by Kyurem VMAX. Above the shadows, Enamorus V and Radiant Gardevoir conjure up dazzling magic in the Sword & Shield—Lost Origin expansion!`
    
    } else if (icone == 14) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Silver_tempest_symbol.png">
        <h2>Expansão Tempestade Prateada - SWSH14</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2022/12/pokemon-silver-tempest-set-list-1024x171.jpg')
        ptxt.innerHTML = `An ominous rumble echoes in the distance, and Lugia VSTAR emerges from the ocean's dark depths to answer its call! Explore uncharted territory with adventurous expedition companions including Alolan Vulpix VSTAR, Serperior VSTAR, Unown VSTAR, and Mawile VSTAR. Meanwhile, a legendary battle awaits as Regieleki VMAX and Regidrago VSTAR awaken from slumber. Discover powerful partnerships in the Trainer Gallery, and set a course for adventure with the Pokémon TCG: Sword & Shield—Silver Tempest expansion!`
    
    } else if (icone == 15) {
        div_colecao_detalhe.innerHTML = `
        <img src="imagens/icones_es/Crown_zenith_symbol.png">
        <h2>Expansão Realeza Absoluta- SWSH15</h2>
        `
        img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2023/01/pokemon-crown-zenith-set-list-1024x171.jpg')
        ptxt.innerHTML = `The Legendary heroes Zacian and Zamazenta shine with new VSTAR Powers, and an all-star assembly of Pokémon and Trainers arrive to celebrate the era of Pokémon V! Discover dazzling special illustrations in the Galarian Gallery, and wield the strength of rare and powerful Pokémon, including Charizard as both a Pokémon VSTAR and Radiant Pokémon. Many more Pokémon have their own tales to tell in battle as the Sword & Shield Series reaches its towering peak in the Pokémon TCG: Crown Zenith expansion!`
    
    }
    div_colecao_detalhe.classList.add("transicao")
    div_texto_detalhe.classList.add("transicao")
}
function geracao_S_e_V() {
    logo_geracao.setAttribute('src', 'imagens/Pokemon_TCG_Scarlet_Violet_Logo.png')
    logo_geracao.setAttribute('class', 'SV_logo')
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
                <img src="imagens/icones_es/Crown_zenith_symbol.png" alt="" id="ihexagono" onmouseover="mostrar_expansao_SWSH(15)">`
        div_detalhes.innerHTML = `<div class="colecao_detalhe transicao" id="div_colecao_detalhe">
                <img src="imagens/icones_es/Sword_shield_symbol.png">
                <h2>Expansão Espada e Escudo - SWSH1</h2>
            </div>
            
            <div class="texto_detalhe transicao" id="div_texto_detalhe">
                <p id="ptxt">Start a New Journey & Meet New Pokémon V!
        Welcome to the Galar region! Meet more than a dozen powerful new Pokémon V, including the Legendary Zacian and Zamazenta—and some, like Stonjourner and Snorlax, that can evolve into enormous Pokémon VMAX for even more power! You'll also find first partners Grookey, Scorbunny, and Sobble, little cuties like Wooloo and Yamper, and a handful of familiar Pokémon in their new Galarian forms. Catch up with a new generation in the Pokémon TCG: Sword & Shield expansion!</p>
                <img src="https://cdn-cardmavin.mavin.io/wp-content/uploads/2020/01/pokemon-sword-and-shield-set-list-1024x171.jpg" alt="" id="img_banner_detalhe">`
}