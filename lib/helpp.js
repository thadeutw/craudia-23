// NÃO REMOVA OS CREDITOS POR FAVOR, LEVOU MUITO TEMPO PRA SE FAZER UM BOT ASSIM!
// SEGUNDO A LICENÇA MIT, REMOVER OS CREDITOS É CRIME, DÊ OS DIREITOS AO CRIADOR!
const config = require('./config/config.json')
const prefix = config.prefix

exports.help = help()
function help() {
return `
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
░░░░CRAUDIA░░░░
░░░░░MENUS░░░░░
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●

→${prefix}animes
(comandos de animes)

→${prefix}grupo
(menu de grupo)

→${prefix}aleatorios
(menu aleatoris"que n entra nos outros topicos")

→${prefix}figurinhas
(menu pra fazer figurinhas)

→${prefix}fotos
(menu de imagens

→${prefix}apostas
(menu de apostas de xp)

→${prefix}dono
(pra ver quem me criou)

→${prefix}donate
(me ajudaaaa a pagar o cafeeee

→${prefix}grupoof
(pra ver meu grupo oficial)

●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
░░░░CRAUDIA░░░░
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
`}
exports.animesmenu = animesmenu()
function animesmenu() {
return `
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
░░░░ANIMES░░░░
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
 →${prefix}waitt
(pesquisa o anime da imagem)
 
 →${prefix}anime
 (pesquisa sobre o anime ex: .anime no game no life)

 →${prefix}loli
 (pega uma imagem de uma loli)

 →${prefix}neko
 (pega uma imagem de uma neko)

 →${prefix}waifu
 (pega a imagem de uma best waifu)

 →${prefix}yaoi
 (pega uma "tortura" yaoi)

 →${prefix}yuri
 (pega uma imagem yuri "yurification"

 →${prefix}papel
 (ta sem um wallpaper bom a craudia pega um aleatorio)

 →${prefix}randomAnime
 (mandarei uma foto de um anime aleatorio)

 →${prefix}husb
 (reverse waifu)

 →${prefix}pokemon
("pikachu eu escolho voce" mandarei uma foto de algum pokemon)

 →${prefix}baka
(oni-chan bakaaaaa)

 →${prefix}yamete
(vc ja sabe hehe)

 →${prefix}ahegao
(yamete)

 →${prefix}Truth
(Algumas verdades sobre o universo dos animes.)

 →${prefix}Icon
(Icones para por no perfil)

 →${prefix}cosplay 
(faz uma plaquina com alguma garota)

 →${prefix}shuvi
(manda a melhor personagem do mundo s2)


 
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
░░░░CRAUDIA░░░░
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
 
 
 
 `}
 
 exports.figurinhasmenu = figurinhasmenu()
function figurinhasmenu() {
return `
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
░░░░FIGURINHAS░░░░
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
 →${prefix}sticker
 (farei uma figurinha de imagem)
 
 →${prefix}gif
 (farei uma figurinha animada)
 
 →${prefix}mafig
 (farei uma fiq do que vc pedir)
 
 →${prefix}img
 (marque a figurinha q eu transformo ela em uma image)
 
 →${prefix}Giphy (link)
 (faça figurinhas pelo link do giphy
 
 →${prefix}ttp <frase>*
(Transforme frases em stickers)
 ●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
░░░░CRAUDIA░░░░
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
 
 
 
 `}
 
 
 
exports.grupomenu = grupomenu()
function grupomenu() {
return ` 
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
░░░░░grupo░░░░░░
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
 →${prefix}help
(informe um erro da craudia)

 →${prefix}craudia
(quer conversar um pouco?)

 →${prefix}speak
(vamos conversar por voz?)

 →${prefix}dono
(veja meu criador)
 
 →${prefix}donate
ajude a comprar meu café)
 
 →${prefix}ping
(pra veer minha velocidade)

 →${prefix}tts
(tambem posso falar oq voce pedir)

 →${prefix}idiomas
(isso é pra usar o .tts)

 →${prefix}groupinfo
(sobre o grupo)

 →${prefix}botstat
(minhas informaçoes)

 →${prefix}marcar
(eu te marco pra voce usar algum comando em voce)

 →${prefix}ownergroup
(pra ver o dono do grupo)

 →${prefix}link
(pra pegar o link do grupo)

 →${prefix}adms
(mostro os ademiros e ademiras do grupo)

 →${prefix}poll
(verifique enquetes ativas)

 →${prefix}vote (numero)
(vote em alguem da enquetes ativas)

 →${prefix}newpoll
(crie uma enquete (votaçao))

 →${prefix}ins
(adicione uma opçao a esquete)

 →${prefix}kiss
(vamos beijar outras pessoas ?)

 →${prefix}slap @pessoa
(la vai o tapao)

 →${prefix}google
(vou pesquisar no google)

 →${prefix}poke
(Tome uns petelecos!)

 →${prefix}cafune
(Todos amamos cafune...)

 →${prefix}Kisu
Umas fotinhas de beijo..

 →${prefix}Tapa
(Fotos de tapinhas!)

 →${prefix}Resposta <frase>
(Adicione respostas na Craudia.)

 →${prefix}Face
(Icon do rosto de garotas de anime)

 →${prefix}ptt <marque um audio>*
(Faça a bot gravar audios do grupo/pessoas como se fosse dela)

 →${prefix}get <marque um arquivo>
(Peça pra bot reenviar um arquivo)

 →${prefix}gado <@pessoa>
(Veja o quanto ela é gada)

 →${prefix}oculto
(????????)

 →${prefix}detector
(Detecta gostosas no grupo)

 →${prefix}gamemode <tipo>*
(Comando de minecraft só de zoas)

 →${prefix}Chance <Do que>
(Calcule as chances)

 →${prefix}data
(data do sistema)

 →${prefix}coins
(Veja a lista de moedas pra usar no comando 113, é uma lista gigante)

 →${prefix}Level
(Veja seu ranking e nível)

 →${prefix}Players
(Veja o TOP 10 do Ranking)

 →${prefix}nivel*
(Obtenha informações do seu XP e Ranking em forma de texto)

 →${prefix}Video <nome>
(Procure videos do YouTube)

 →${prefix}Encode <frase>
(Converta frases e números para Binario)

 →${prefix}Decode <nome>
(Traduza Binario)

 →${prefix}Covid <País em Inglês>
(Obtenha o total de casos do Covid-19)

 →${prefix}encurtar <link>
(Encurte links sem aqueles montes de propagandas)

 →${prefix}translate <sigla de idioma> <frase ou mensagem marcada>
(Traduza mesnsagens para algum idioma especifico)

●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
░░░░CRAUDIA░░░░
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●

 `}
 
 
 
 
 
 
 
 exports.aleatoriomenu = aleatoriomenu()
function aleatoriomenu() {
return `
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
░░░aleatorias░░░
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
 →${prefix}frase
(vamos falar frases inspiradoras)

 →${prefix}quote
(cria ai uma frase das brabas)

 →${prefix}roll
(jogar uns dados)

 →${prefix}math
(realiza calculos matematicos)

 →${prefix}msg
(vamos brincar de musica por texto)

 →${prefix}gender (name)
(se quiser saber sobre o nome de alguem use isso)

 →${prefix}deathe (nome)
(calcule quanto tempo a pessoa vai viver)

 →${prefix}store
(obter informaçoes de apps da paystore)

 →${prefix}contar (mensagem)
(quer contas as letras que tem em um texto?)

 →${prefix}inverter (frase)
(inverta uma frase)

 →${prefix}ball
(8 ball de frases aleatorias)

 →${prefix}Look
(Olhos na tela eheheh)

 →${prefix}Holo
(Fotinhas da personagem Holo.)

 →${prefix}pornhub <texto 1 | texto 2>*
(Crie sua propria logo do PornHub)

 →${prefix}3D <texto>*
(Crie textos em 3D.)

 →${prefix}Logo <nome>*
(Crie logos em preto e pink.)

 →${prefix}gaming <nome>*
(Crie logos de jogador)

 →${prefix}brainly <pergunta>*
(Pesquise no brainly)
 
 →${prefix}Neon <Frase1|Frase2|Frase3>
(Uma logo de neon estilo hackerman)

 →${prefix}Fogareu <Nick>
(Crie logos do fogo gratuito)

 →${prefix}Thunder <frase>
(Uma logo do céu com trovões)

 →${prefix}Wolf <Frase1|Frase2>
(Logo de Lobos)

 →${prefix}Light <Frase>
(Uma logo de neon em luz)

 →${prefix}moddroid <nome>
(Busque aplicativos de android na moddroid)

 →${prefix}happymod <nome>
(Busque apps na happymod)
 
 →${prefix}maps <local>
(Mostra o mapa de um local)

 →${prefix}clima <cidade>
(Saiba sobre o clima atual da sua cidade)
 
 →${prefix}nasa -data <ano/mês/dia>
(Obtenha informações da nasa)

 →${prefix}conv -h*
(Converta temperatura ou distância)

 →${prefix}fatos
(Conta fatos de animais)

 →${prefix}qr <Texto>
(Cria QR Codes com textos)

 →${prefix}curiosidade
(Adquira curiosidades)

 →${prefix}valor <Quantia/Tipo de Moeda>
(Converta moedas de outros países em real)
 
 →${prefix}trecho
(frases de pessoas)

 →${prefix}placa (aaa1111)
(puxe informaçoesde um veiculo)
 
 →${prefix}wasted <foto>
(Cria uma imagem de wasted igual ao GTA V)

 →${prefix}letra <nome da música>
(Busque letras de música)
 
 
 
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
░░░░CRAUDIA░░░░
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
 
 
 
 `}
 
 
 
 
 
 
 
  exports.apostasmenu = apostasmenu()
function apostasmenu() {
return `
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
░░░░APOSTAS░░░░
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
 →${prefix}flip (cara/coroa) (valor)
 aposte no cara ou coroa
 
 →${prefix}roleta <valor>
(Aposte na roleta-russa)

 →${prefix}cassino <valor>*
(Aposte no cassino para ganhar XP!!!!)

 
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
░░░░CRAUDIA░░░░
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
 
 
 
 `}
 
 
 
 
 
 
 
 
  exports.fotosmenu = fotosmenu()
function fotosmenu() {
return `
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
░░░░imagens░░░░
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
 →${prefix}dog
 (pega ai uma imagem de um doguinho)
 
 →${prefix}getmeme
(ta afim de um meme)

 →${prefix}light
(uma logo em neon)

 →${prefix}hug
(abraço fofinho entre animes)

 →${prefix}girl
(uma fotinha de uma garota?)

 →${prefix}screenshot
(tiro a print do site que vc pediu)

 →${prefix}fox
(raposinhas bonitas)

 →${prefix}image (assunto)
(pego uma foto do que voce pedir)

 →${prefix}gato
(pega fotinhas de gatos)

 →${prefix}make
 (vamos escrever no meu diario DEATH NOTE)
 
 →${prefix}dog
 (pega ai uma imagem de um doguinho)
 
 →${prefix}getmeme
(ta afim de um meme)

 →${prefix}light
(uma logo em neon)

 →${prefix}hug
(abraço fofinho entre animes)

 →${prefix}girl
(uma fotinha de uma garota?)

 →${prefix}screenshot
(tiro a print do site que vc pediu)

 →${prefix}fox
(raposinhas bonitas)

 →${prefix}image (assunto)
(pego uma foto do que voce pedir)

 →${prefix}gato
(pega fotinhas de gatos)

 →${prefix}send (link)
(posso enviar fotos de um link)

 →${prefix}macaco
(deus macaco)

 →${prefix}upimg
(uparei a imagem com duraçao de 1 dia)

 →${prefix}cocegas
(hummm cacegas em um anime eu acho)
 
 →${prefix}lizard
(Fotinhas de lagarto nerr)

 →${prefix}feed
(Eventos que tem haver com comida em animes)

 →${prefix}quack
(Ui ui, vai uns patos ~gansos~ ou sei la...?)

 →${prefix}reedit <nome>*
(Obtenha publicações de algum subreedit)

 →${prefix}reverter <foto>
(Reverta uma foto)

●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
░░░░CRAUDIA░░░░
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●

 `}
 


exports.down = down()
function down() {
    return `
	*☾ Downloads ☽*
	
*Caso algum comando não funcione significa que o servidor caiu e é necessário esperar.*

*1 - ${prefix}Play <nome>*
_Baixe musicas pelo nome._

*2 - ${prefix}Mp3 <link do YouTube>*
_Baixe audios por link._

*3 - ${prefix}Mp4 <link do YouTube>*
_Baixe videos por link._

*4 - ${prefix}fb <link facebook>*
_Baixe videos do facebook._`
}

exports.adult = adult()
function adult() {
    return `

☾ Comandos do PV - Grupos NSFW ☽

*1 - ${prefix}RandomNeko*
_Temos hentai de nekos por aqui e.e_

*2 - ${prefix}iHentai*
_Mas se nõ gostar, temos aleatorios também!_

*3 - ${prefix}nh (codigo)*
_Seja feliz vendo NHentai comigo e.e_

*4 - ${prefix}trap*
_Se você gosta de traps, isso é pra você e.e_

*5 - ${prefix}blowjob*
_Fotinhas de blowjob em anime._

*6 - ${prefix}iecchi*
_Umas fotos de ecchi que tenho aqui..._

*7 - ${prefix}feet*
_Hentai para os amantes de pezinho._

*8 - ${prefix}Lick*
_"Lambidinha..."_

*9 - ${prefix}Femdom*
_Meio que um yuri...hentai..._

*10 - ${prefix}futanari*
_Vai uma futanari?_

*11 - ${prefix}boobs*
_Olha a tetinhaaa..._

*12 - ${prefix}masturb*
_Hmmm, garotas solo..._

*13 - ${prefix}Anal*
_Hentai "padrão" de anal claro._

*14 - ${prefix}nsfwicon*
_Foto de perfil +18 por aqui..._

*15 - ${prefix}randomLoli*
_Hentai do tipo Lolicon._

*16 - ${prefix}Hard*
_Hentai de diciplinação, por exemplo, hentai de tapas na bunda._

*17 - ${prefix}Pezinho*
_Fotos de pezinho._

*18 - ${prefix}Porn*
_Pornografia real._

*19 - ${prefix}Lesbian*
_Lesbicas reais se pegando._

*20 - ${prefix}Pgay*
_Pornografia gay para quem curte._

*21 - ${prefix}Tits*
_Fotos de peitos reais._

*22 - ${prefix}bsdm*
_Fotos BDSM._

*23 - ${prefix}Milf*
_Milfs reais._

*24 - ${prefix}Pussy*
_Belas maças cortadas pela metade..._

*25 - ${prefix}Ass*
_Bundas..._

*26 - ${prefix}sporn*
_Pesquise no Xvideos._

*27 - ${prefix}xvideos <link>
_Baixe pornografia do xvideos._`
}

exports.owner = owner()
function owner() {
    return `
*⚠ [Meu dono Apenas] ⚠*

*1 - ${prefix}Clearall*
_Com isso todas as mensagens são limpas._

*2 - ${prefix}Broad <-all/-gp> (mensagem)*
_Posso enviar uma mensagem para todos ou apenas os grupos usando, mas cuidado com BAN (se for muitos)._

*3 - ${prefix}Leaveall*
_Se desejar saio de todos os grupos._

*4 - ${prefix}Tela*
_Peça-me um print da tela._

*5 - ${prefix}Blocklist*
_Saiba quem tentou me ligar, atacar ou floodar._

*6 - ${prefix}mutepv <número sem + ou ->*
_Mande a Craudia ignorar pessoas no PV._

*7 - ${prefix}encerrar*
_Faz com que eu me desligue._

*8 - ${prefix}give <@Pessoa> <Quantidade>*
_Adquira ou dê XP para as pessoas e si mesmo (também remove XP se usar com <-quantidade>._

*9 - ${prefix}kickall*
_Remova todos os membros._

*10 - ${prefix}cmd <comando>*
_Rode terminal/programação pelo WhatsApp._

*11 - ${prefix}block <numero> ou <marque uma mensagem>*
_Bloqueia pessoas._

*12 - ${prefix}unblock <numero> ou <marque uma mensagem>*
_Desbloqueia pessoas._`
}

exports.admins = admins()
function admins() {
    return `
*⚠ [Administradores Apenas] ⚠*
_Comandos que apenas os ademiros podem usar!_

*1 - ${prefix}kick @user ou <Marque uma mensagem>*
_Expulse bebados do bar (pode ser mais de 1)._

*2 - ${prefix}promote @user ou <Marque uma mensagem>*
_Faça os bebados do bar virarem administradores._

*3 - ${prefix}leave*
_Se quiser eu saio do barzinho._

*4 - ${prefix}demote @user ou <Marque uma mensagem>*
_Isso é pra você demitir administradores do barzinho._

*5 - ${prefix}everyone <assunto>*
_Marque todos os bebados para uma porradaria! ~Brincadeira, ou não~_

*6 - ${prefix}del [Marque a mensagem do BOT]*
_Se precisar deletar minhas mensagens, use isso._

*7 - ${prefix}onlyadms [on|off]*
_Com isso eu fecho o bar apenas para os administradores, e vice versa._

*8 - ${prefix}setimage*
_Dê ao seu bar uma cara nova!_

*9 - ${prefix}revoke*
_Se usar isso, eu irei resetar o link._

*10 - ${prefix}Bomb <número sem espaco, + e - >*
_Ataque com spam SMS quem vier fazer gracinhas em seu grupo._

*11 - ${prefix}blacklist <on/off>*
_Bane quem tiver nela quando entrarem no grupo._

*12 - ${prefix}fake <on/off>*
_Bane números de fora do seu país._

*13 - ${prefix}bklist <on/off número>*
_Adicione ou remova pessoas da blacklist._

*14 - ${prefix}mute <on/off>*
_Faz com que eu pare de fazer comandos no grupo de quem usou._

*15 - ${prefix}unkick <Marque uma mensagem>*
_Desfaz um ban._

*16 - ${prefix}autosticker <on/off>*
_Faz stickers com todas as fotos que mandarem._

*17 - ${prefix}welcome [enable|disable]*
_Me faz dar Boas-Vindas e Good-Bye._

*18 - ${prefix}rank <On/Off>*
_Ativa o sistema de "RPG"._

*19 - ${prefix}softban @pessoa ou <Marque uma mensagem>*
_Bane o usuário e o adiciona novamente em 30 minutos._

*20 - ${prefix}add (numero)*
_Com isso você pode adicionar as pessoas._

*21 - ${prefix}Exclusive [on|off]*
_Ativa os comandos exclusivos como bomb, anti links/porno._`
}

exports.readme = readme()
function readme() {
    return `
☾ Menu de ajuda ☽

Caso não entenda, chame o meu dono, use o comando ${prefix}criador ou pergunte no grupo que alguém com certeza te ajudará! XD

`
}

exports.donate = donate()
function donate() {
    return `
_Ola obg por nos ajudar temos 2 formas de doaçao temos via Tik Tok usando o codigo (J5830035181)
ou chame meu dono no .dono se quiser doar via pix ou algo do tipo ( todo dinheiro é usado pra melhorar a craudia e deixar ela online ex o numeiro br pra tirar lag e banimentos) .

.
❤️`
}

exports.lang = lang()
function lang() {
    return `
☾ Linguas do comando de Voz ☽
       ☾ Use sem ' ' ☽
	
'af' =  'Africano'

'ar' =  'Arabico'

'au' =  'Inglês da Australia'

'br' =  'Português do Brasil'

'ca' =  'Catalã (Catalonia)'

'cn' =  'Chinês (Mandarin/China)'

'cs' =  'Tcheca'

'cy' =  'Galês'

'da' =  'Dinamarquês'

'de' =  'Germanico/Alemão'

'el' =  'Grega'

'en' =  'Inglês'

'eo' =  'Esperanto'

'es' =  'Espanhol'

'fi' =  'Finlandês'

'fr' =  'Francês'

'hi' =  'Hindi'

'hr' =  'Croácio'

'ht' =  'Haitiano'

'hu' =  'Húngaro'

'hy' =  'Armenico'

'id' =  'Indonesio'

'is' =  'islandês'

'it' =  'Italiano'

'jp' =  'Japonês'

'ko' =  'Coreano'

'la' =  'Latim'

'lv' =  'Letonês'

'mk' =  'Macedónio'

'nl' =  'Holandês'

'no' =  'Norueguês'

'pl' =  'Polonês'

'pt' =  'Português de Portugal'

'ro' =  'Romeno'

'ru' =  'Russo'

'sk' =  'Eslovaco'

'sp' =  'Espanhol da Espanha'

'sq' =  'Albanês'

'sr' =  'Servia'

'su' =  'Espanhol dos Estados Unidos'

'sv' =  'Sueco'

'sw' =  'Suaíli'

'ta' =  'Tamil'

'th' =  'Thailandês'

'tr' =  'Turco'

'tw' =  'Chinês (Mandarin/Taiwan)'

'uk' =  'Inglês do Reino Unido)'

'us' =  'Inglês dos Estados Unidos'

'vi' =  'Vietnamita'

'yu' =  'Chinês (Cantonesa)'

'zh' =  'Chinês'`
}

exports.convh = convh()
function convh() {
	return `_Para usar você deve digitar_ *${prefix}conv [-sigla] [Número para conversão]* _, confira abaixo as siglas e um exemplo._
	
*-h* _= Esse menu._

*-c* _= Converte de Fahfenheit para Celsius._

*-f* _= Converte Celsius para Fahfenheit._

*-q* _= Converte Milhas para Quilômetros._

*-m* _= Converte Quilômetros para Milhas._

_Exemplo de uso:_ *${prefix}conv -c 113*
`}

exports.paises = paises()
function paises() {
	return `_Nomes aceitados no comando_ *${prefix}covid*\n\nAfghanistan\n\nAlbania\n\nAlgeria\n\nAndorra\n\nAngola\n\nAnguilla\n\nAntigua and Barbuda\n\nArgentina\n\nArmenia\n\nAruba\n\nAustralia\n\nAustria\n\nAzerbaijan\n\nBahamas\n\nBahrain\n\nBangladesh\n\nBarbados\n\nBelarus\n\nBelgium\n\nBelize\n\nBenin\n\nBermuda\n\nBhutan\n\nBolivia\n\nBosnia and Herzegovina\n\nBotswana\n\nBrazil\n\nBritish Virgin Islands\n\nBrunei\n\nBulgaria\n\nBurkina Faso\n\nBurundi\n\nCAR\n\nCabo Verde\n\nCambodia\n\nCameroon\n\nCanada\n\nCaribbean Netherlands\n\nCayman Islands\n\nChad\n\nChannel Islands\n\nChile\n\nChina\n\nColombia\n\nComoros\n\nCongo\n\nCosta Rica\n\nCroatia\n\nCuba\n\nCuraçao\n\nCyprus\n\nCzechia\n\nDRC\n\nDenmark\n\nDiamond Princess\n\nDjibouti\n\nDominica\n\nDominican Republic\n\nEcuador\n\nEgypt\n\nEl Salvador\n\nEquatorial Guinea\n\nEritrea\n\nEstonia\n\nEswatini\n\nEthiopia\n\nFaeroe Islands\n\nFalkland Islands\n\nFiji\n\nFinland\n\nFrance\n\nFrench Guiana\n\nFrench Polynesia\n\nGabon\n\nGambia\n\nGeorgia\n\nGermany\n\nGhana\n\nGibraltar\n\nGreece\n\nGreenland\n\nGrenada\n\nGuadeloupe\n\nGuatemala\n\nGuinea-Bissau\n\nGuinea\n\nGuyana\n\nHaiti\n\nHonduras\n\nHong Kong\n\nHungary\n\nIceland\n\nIndia\n\nIndonesia\n\nIran\n\nIraq\n\nIreland\n\nIsle of Man\n\nIsrael\n\nItaly\n\nIvory Coast\n\nJamaica\n\nJapan\n\nJordan\n\nKazakhstan\n\nKenya\n\nKuwait\n\nKyrgyzstan\n\nLaos\n\nLatvia\n\nLebanon\n\nLesotho\n\nLiberia\n\nLibya\n\nLiechtenstein\n\nLithuania\n\nLuxembourg\n\nMS Zaandam\n\nMacao\n\nMadagascar\n\nMalawi\n\nMalaysia\n\nMaldives\n\nMali\n\nMalta\n\nMarshall Islands\n\nMartinique\n\nMauritania\n\nMauritius\n\nMayotte\n\nMexico\n\nMicronesia\n\nMoldova\n\nMonaco\n\nMongolia\n\nMontenegro\n\nMontserrat\n\nMorocco\n\nMozambique\n\nMyanmar\n\nNamibia\n\nNepal\n\nNetherlands\n\nNew Caledonia\n\nNew Zealand\n\nNicaragua\n\nNiger\n\nNigeria\n\nNorth Macedonia\n\nNorway\n\nOman\n\nPakistan\n\nPalestine\n\nPanama\n\nPapua New Guinea\n\nParaguay\n\nPeru\n\nPhilippines\n\nPoland\n\nPortugal\n\nQatar\n\nRomania\n\nRussia\n\nRwanda\n\nRéunion\n\nS. Korea\n\nSaint Kitts and Nevis\n\nSaint Lucia\n\nSaint Martin\n\nSaint Pierre Miquelon\n\nSamoa\n\nSan Marino\n\nSao Tome and Principe\n\nSaudi Arabia\n\nSenegal\n\nSerbia\n\nSeychelles\n\nSierra Leone\n\nSingapore\n\nSint Maarten\n\nSlovakia\n\nSlovenia\n\nSolomon Islands\n\nSomalia\n\nSouth Africa\n\nSouth Sudan\n\nSpain\n\nSri Lanka\n\nSt. Barth\n\nSt. Vincent Grenadines\n\nSudan\n\nSuriname\n\nSweden\n\nSwitzerland\n\nSyria\n\nTaiwan\n\nTajikistan\n\nTanzania\n\nThailand\n\nTimor-Leste\n\nTogo\n\nTrinidad and Tobago\n\nTunisia\n\nTurkey\n\nTurks and Caicos\n\nUAE\n\nUK\n\nUSA\n\nUganda\n\nUkraine\n\nUruguay\n\nUzbekistan\n\nVanuatu\n\nVatican City\n\nVenezuela\n\nVietnam\n\nWallis and Futuna\n\nWestern Sahara\n\nWorld\n\nYemen\n\nZambia\n\nZimbabwe`
}
