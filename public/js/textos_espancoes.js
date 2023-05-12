
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
    } else if (valor_select.value == "Espada e Escudo") {
        geracao_E_e_E() 
    }
}
function geracao_S_e_M() {
    logo_geracao.setAttribute('src', 'imagens/sun&moon.png')
    div_linha_do_tempo.innerHTML = `<img src="imagens/Linha do tempo.png" alt="" class="linha_do_tempo">
            <div class="icones_colecoes" onmouseout="remover_animacao()">
                <img src="imagens/icones_sm/icone_s&m.png" alt="" id="isunmoon" onmouseover="sun_moon()">
                <img src="imagens/icones_sm/icone_prisma.png" alt="" id="iprisma" onmouseover="guardians_risng()">
                <img src="imagens/icones_sm/icone_burning.png" alt="" id="iburning" onmouseover="burning_shadows()">
                <img src="imagens/icones_sm/icone_v.png" alt="" id="iv" onmouseover="shining_legends()">
                <img src="imagens/icones_sm/asa_icone.png" alt="" id="iasa" onmouseover="crimson_invasion()">
                <img src="imagens/icones_sm/icone_prismatico.png" alt="" id="iprismatico" onmouseover="ultra_prism()">
                <img src="imagens/icones_sm/icone_crisis.png" alt="" id="icrisis" onmouseover="forbidden_light()">
                <img src="imagens/icones_sm/icone_bola.png" alt="" id="ibola" onmouseover="celestial_storm()">
                <img src="imagens/icones_sm/icone_dragao.png" alt="" id="idragao" onmouseover="dragon_majesty()">
                <img src="imagens/icones_sm/icone_thunder.png" alt="" id="ithunder" onmouseover="lost_thunder()">
                <img src="imagens/icones_sm/icone_bonds.png" alt="" id="ibonds" onmouseover="team_up()">
                <img src="imagens/icones_sm/icone_planta.png" alt="" id="iplanta" onmouseover="unbroken_bonds()">
                <img src="imagens/icones_sm/icone_bonds_2.png" alt="" id="ibonds_2" onmouseover="unified_minds()">
                <img src="imagens/icones_sm/icone_shiny.png" alt="" id="ishiny" onmouseover="shiny_vault()">
                <img src="imagens/icones_sm/icone_hexagono.png" alt="" id="ihexagono" onmouseover="cosmic_eclipse()">`
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
function sun_moon() {
    div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_sm/icone_s&m.png" alt="">
    <h2>Expansão Sun & Moon - SM1</h2>
    `
    div_colecao_detalhe.classList.add("transicao")
    div_texto_detalhe.classList.add("transicao")
    img_banner_detalhe.setAttribute('src', 'imagens/Banner_S&M.png')
    ptxt.innerHTML = `The battles heat up with Pokémon from the tropical Alola region in the Pokémon TCG: Sun & Moon
                expansion. Start your journey with Rowlet, Litten, and Popplio, then seek out the Legendary Pokémon
                Solgaleo-GX and Lunala-GX to witness the awesome power of a new kind of Pokémon: each Pokémon-GX
                brings an attack so devastating that you can use only one of them per game. Discover dozens of
                never-before-seen Pokémon, Alola forms of some familiar favorites, and new ways to battle in the
                Pokémon TCG: Sun & Moon expansion.
        `
}
function guardians_risng() {
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
}
function burning_shadows() {
    div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_sm/icone_burning.png">
    <h2>Expansão Sombras ardentes - SM3</h2>
    `
    div_colecao_detalhe.classList.add("transicao")
    div_texto_detalhe.classList.add("transicao")
    img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/07/pokemon-sun-and-moon-burning-shadows-set-list-1024x171.jpg')
    ptxt.innerHTML = `Fiery Battles and Deep Shadows! What strange fires lurk in the shadows? Minions of Team Skull and a cavalcade of new Pokémon stand ready to battle in the dark of night and in the blazing sun! Slug it out with new titans like Necrozma-GX, Marshadow-GX, and Tapu Fini-GX, or battle with trusty allies from Machamp-GX and Charizard-GX to Darkrai-GX and Ho-Oh-GX. Fight for what's right with the Pokémon TCG: Sun & Moon—Burning Shadows expansion!
        `
}
function shining_legends() {
    div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_sm/icone_v.png">
    <h2>Expansão Lendas Luminecentes - SM4</h2>
    `
    div_colecao_detalhe.classList.add("transicao")
    div_texto_detalhe.classList.add("transicao")
    img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/07/pokemon-sun-and-moon-shining-legends-set-list-1024x171.jpg')
    ptxt.innerHTML = `Blaze a Bright Trail with Shining Pokémon! In each region, a handful of Pokémon stand apart as creatures of heroic stories and wild adventures: Zekrom, Latios, Mewtwo-GX, Entei-GX. Others are just whispers and rumors: mysterious Pokémon such as Keldeo, Shining Jirachi, Shining Volcanion—and many more! See and collect these astounding Pokémon of myth and legend with the Pokémon TCG: Shining Legends expansion!   `
}
function crimson_invasion() {
    div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_sm/asa_icone.png">
    <h2>Expansão Invasão Carmesin - SM5</h2>
    `
    div_colecao_detalhe.classList.add("transicao")
    div_texto_detalhe.classList.add("transicao")
    img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/07/pokemom-sun-and-moon-crimson-invasion-set-1024x171.jpg')
    ptxt.innerHTML = `Crimson Chaos Across Alola! The mysterious Ultra Beasts have arrived, invading the Alola region as crimson-tinged Pokémon-GX: Nihilego-GX, Buzzwole-GX, Kartana-GX, and the ravenous Guzzlord-GX! Can Silvally-GX and the other allies of Alola defend the islands—or will the Ultra Beasts take control? Find out when you battle for the prize with the Pokémon TCG: Sun & Moon—Crimson Invasion expansion!`
}
function ultra_prism() {
    div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_sm/icone_prismatico.png">
    <h2>Expansão Ultra Prisma - SM6</h2>
    `
    div_colecao_detalhe.classList.add("transicao")
    div_texto_detalhe.classList.add("transicao")
    img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/07/pokemom-sun-and-moon-ultra-prism-set-1024x171.jpg')
    ptxt.innerHTML = `An Unknown New Dimension! Pass through the Ultra Wormhole into a bizarre new Pokémon world, where familiar sights become strange and new powers are unlocked! Watch Necrozma's power grow, and marvel as brand-new Prism Star cards reveal their astounding effects on play. Meet Dialga-GX and Palkia-GX, and encounter bizarre Ultra Beasts and wild new forms of Alola's Legendary Pokémon. Explore a new dimension in the Pokémon TCG: Sun & Moon—Ultra Prism expansion!`
}
function forbidden_light() {
    div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_sm/icone_crisis.png">
    <h2>Expansão Luz Proibida - SM7</h2>
    `
    div_colecao_detalhe.classList.add("transicao")
    div_texto_detalhe.classList.add("transicao")
    img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/07/pokemom-sun-and-moon-forbidden-light-expansion-set-1024x171.jpg')
    ptxt.innerHTML = `Necrozma's Power Knows No Limits! Taking the Pokémon world by surprise, Necrozma has absorbed a Legendary Pokémon and taken on a new form as Ultra Necrozma-GX! Other Pokémon gather to welcome this new light...or to resist it. Lucario-GX, Greninja-GX, Zygarde-GX, Yveltal-GX, Naganadel-GX, even Volcanion Prism Star and the majestic Arceus Prism Star must choose a side. Discover awesome Pokémon and mysterious treasures in the Pokémon TCG: Sun & Moon—Forbidden Light expansion!`
}
function celestial_storm() {
    div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_sm/icone_bola.png">
    <h2>Expansão Tempestade Celestial - SM8</h2>
    `
    div_colecao_detalhe.classList.add("transicao")
    div_texto_detalhe.classList.add("transicao")
    img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/08/pokemon-sun-moon-celestial-storm-set-list-1024x171.jpg')
    ptxt.innerHTML = `Tomem cuidado! Está aberta a temporada de furiosas tempestades esmeralda e um céu vívido com prodígios: Pokémon e criaturas do Ultra Espaço se enfrentando! Alguns seguem a tempestade, outros a desafiam, com uma sequência incluindo Articuno-GX, Blaziken-GX, Scizor-GX, Stakataka-GX, e o impressionante Rayquaza-GX, e mais novos cards Prisma estrelando Latios, Latias e Jirachi. Encare os ventos da mudança de cabeça erguida na expansão Sol e Lua — Tempestade Celestial do Pokémon Estampas Ilustradas!`
}
function dragon_majesty() {
    div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_sm/icone_dragao.png">
    <h2>Expansão Dragões Soberanos- SM9</h2>
    `
    div_colecao_detalhe.classList.add("transicao")
    div_texto_detalhe.classList.add("transicao")
    img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/09/pokemon-dragon-majesty-set-1024x171.jpg')
    ptxt.innerHTML = `Nobres Pokémon de asas e garras voando alto! Dragões Soberanos trazem consigo uma poderosa horda de Pokémon dragão: Reshiram-GX, Salamence-GX, Dragonite-GX e mais uma dúzia, incluindo Charizard! Seu comando de fogo, na batalha e no céu, subirá até o topo para colecionadores e competidores. Prepare-se para voar alto com estes incríveis Pokémon na mini-expansão Dragões Soberanos do Pokémon TCG!`
}
function lost_thunder() {
    div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_sm/icone_thunder.png">
    <h2>Expansão Trovões Perdidos - SM10</h2>
    `
    div_colecao_detalhe.classList.add("transicao")
    div_texto_detalhe.classList.add("transicao")
    img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/10/pokemon-lost-thunder-set-1024x171.jpg')
    ptxt.innerHTML = `Poder antigo ecoando do topo das montanhas! Viaje por colinas embrenhadas, onde a fragrância do incenso de templos antigos enche o ar junto com as faíscas do Pokémon de alta voltagem! A expansão Trovões Perdidos do Pokémon TCG soma o novo com o tradicional, estrelando Celebi e Ditto, ao lado de Blacephalon-GX, Lugia-GX, Tyranitar-GX, e o mais novo Pokémon Mítico, Zeraora-GX! Invoque os grandes trovões e recarregue seu baralho com Pokémon de alta potência na expansão Sol e Lua — Trovões Perdidos do Pokémon Estampas Ilustradas!`
}
function team_up() {
    div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_sm/icone_bonds.png">
    <h2>Expansão União de Aliados - SM11</h2>
    `
    div_colecao_detalhe.classList.add("transicao")
    div_texto_detalhe.classList.add("transicao")
    img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2019/01/pokemon-team-up-set-1024x171.jpg')
    ptxt.innerHTML = `Pokémon Team Up for Battle! TAG TEAM Pokémon-GX are here, brand-new cards that feature paired-up and powered-up Pokémon! The Pokémon TCG: Sun & Moon—Team Up expansion offers amazing battle teams like Pikachu & Zekrom-GX, Eevee & Snorlax-GX, and Gengar & Mimikyu-GX, plus even more Pokémon-GX: Lycanroc-GX, Hoopa-GX, Cobalion-GX, and others! When the teams put their moves into motion, it's a total free-for-all. Check out the awesome action and dynamic duos in the Sun & Moon—Team Up expansion!`
}
function unbroken_bonds() {
    div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_sm/icone_planta.png">
    <h2>Expansão Elos Inquebráveis - SM12</h2>
    `
    div_colecao_detalhe.classList.add("transicao")
    div_texto_detalhe.classList.add("transicao")
    img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2019/04/pokemon-unbroken-bonds-set-list-1024x171.jpg')
    ptxt.innerHTML = `Bonds Tempered in Battle! When you have a partner you can count on, nothing can stop you! The TAG TEAM Pokémon-GX in the Pokémon TCG: Sun & Moon—Unbroken Bonds expansion show the colossal power of teamwork, including Reshiram & Charizard-GX, the Ultra Beasts Pheromosa & Buzzwole-GX, and Gardevoir & Sylveon-GX...plus, Lucario teams up with the newly discovered Melmetal! With trust and practice, these Pokémon can tackle just about anything, so check out the amazing Pokémon pairings in the Sun & Moon—Unbroken Bonds expansion!`
}
function unified_minds() {
    div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_sm/icone_bonds_2.png">
    <h2>Expansão Sintonia Mental - SM13</h2>
    `
    div_colecao_detalhe.classList.add("transicao")
    div_texto_detalhe.classList.add("transicao")
    img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2019/07/pokemon-unified-minds-set-list-and-set-symbol-1024x171.jpg')
    ptxt.innerHTML = `Great Minds Work in Unity! To stay on top, your team must work as one! New TAG TEAM Pokémon-GX battle in flawless harmony in the Pokémon TCG: Sun & Moon—Unified Minds expansion, including Mewtwo & Mew-GX, Rowlet & Alolan Exeggutor-GX, Espeon & Deoxys-GX, Garchomp & Giratina-GX, Umbreon & Darkrai-GX, and more! True teammates take aim at a single goal—find your perfect partners in the Sun & Moon—Unified Minds expansion!`
}
function shiny_vault() {
    div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_sm/icone_shiny.png">
    <h2>Expansão Destinos Ocultos - SM14</h2>
    `
    div_colecao_detalhe.classList.add("transicao")
    div_texto_detalhe.classList.add("transicao")
    img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2019/09/pokemon-hidden-fates-set-list-1024x171.jpg')
    ptxt.innerHTML = `Your Fate Shines Bright! A wild set loaded with all-time favorites, the Pokémon TCG: Hidden Fates expansion is a collector's dream and a player's paradise! Soar to new heights with the first TAG TEAM trio, Moltres & Zapdos & Articuno-GX, as well as Gyarados-GX and more than 75 Pokémon in their Shiny forms—including Mewtwo-GX and Charizard-GX! Reach out for the unusual, astonishing power of Pokémon, and discover your own Hidden Fates!`
}
function cosmic_eclipse() {
    div_colecao_detalhe.innerHTML = `
    <img src="imagens/icones_sm/icone_hexagono.png">
    <h2>Expansão Eclípse Cósmico- SM15</h2>
    `
    div_colecao_detalhe.classList.add("transicao")
    div_texto_detalhe.classList.add("transicao")
    img_banner_detalhe.setAttribute('src', 'https://cdn-cardmavin.mavin.io/wp-content/uploads/2019/12/pokemon-cosmic-eclipse-set-1024x171.jpg')
    ptxt.innerHTML = `A Supreme Connection of Stars and Pokémon! At the apex of the Sun & Moon Series, the Pokémon TCG: Sun & Moon—Cosmic Eclipse expansion boosts the connection of Pokémon and Trainers, and it launches TAG TEAM combinations to new levels! Jump into battle with Charizard & Braixen-GX, Venusaur & Snivy-GX, Blastoise & Piplup-GX, and Solgaleo & Lunala-GX, along with the triple TAG TEAM of Arceus & Dialga & Palkia-GX, plus many more! Feel the stellar power of Pokémon with the Sun & Moon—Cosmic Eclipse expansion!`
}

function geracao_E_e_E() {
    logo_geracao.setAttribute('src', 'imagens/Sword_Shield.png')
    div_linha_do_tempo.innerHTML = `<img src="imagens/Linha do tempo.png" alt="" class="linha_do_tempo">
            <div class="icones_colecoes" onmouseout="remover_animacao()">
                <img src="imagens/icones_es/Sword_shield_symbol.png" alt="" id="isunmoon" onmouseover="sun_moon()">
                <img src="imagens/icones_es/Rebel_clash_symbol.png" alt="" id="iprisma" onmouseover="guardians_risng()">
                <img src="imagens/icones_es/Darkness_ablaze_symbol.png" alt="" id="iburning" onmouseover="burning_shadows()">
                <img src="imagens/icones_es/Champions_path_symbol.png" alt="" id="iv" onmouseover="shining_legends()">
                <img src="imagens/icones_es/Vivid_voltage_symbol.png" alt="" id="iasa" onmouseover="crimson_invasion()">
                <img src="imagens/icones_es/Shining_fates_symbol.png" alt="" id="iprismatico" onmouseover="ultra_prism()">
                <img src="imagens/icones_es/Battle_styles_symbol.png" alt="" id="icrisis" onmouseover="forbidden_light()">
                <img src="imagens/icones_es/Chilling_reign_symbol.png" alt="" id="ibola" onmouseover="celestial_storm()">
                <img src="imagens/icones_es/Evolving_skies_symbol.png" alt="" id="idragao" onmouseover="dragon_majesty()">
                <img src="imagens/icones_es/Fusion_strike_symbol.png" alt="" id="ithunder" onmouseover="lost_thunder()">
                <img src="imagens/icones_es/Brilliant_stars_symbol.png" alt="" id="ibonds" onmouseover="team_up()">
                <img src="imagens/icones_es/Astral_radiance_symbol.png" alt="" id="iplanta" onmouseover="unbroken_bonds()">
                <img src="imagens/icones_es/Lost_origin_symbol.png" alt="" id="ibonds_2" onmouseover="unified_minds()">
                <img src="imagens/icones_es/Silver_tempest_symbol.png" alt="" id="ishiny" onmouseover="shiny_vault()">
                <img src="imagens/icones_es/Crown_zenith_symbol.png" alt="" id="ihexagono" onmouseover="cosmic_eclipse()">`
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