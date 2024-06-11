import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.css']
})
export class InformacoesComponent {

  informacoes = [
    { texto:  'Mesa auxiliar, que deve ficar próxima ao altar. Nessa mesa auxiliar é onde estarão todos os objetos que serão utilizados durante a celebração. A credência é preparada pelos ministros da eucaristia, assim como os demais objetos'
    , fotoUrl: 'https://moveiscardeal.com.br/wp-content/uploads/2021/08/Credencia-2.png' },
    { texto: 'O primeiro objeto a ser entregue ao padre na hora do ofertório é o cálice. Esse cálice também tem uma preparação de forma especial. Ele contém um sanguíneo, a patena com a partícula, que é apresentada à assembleia, aquela que o padre eleva, tem a pala que fica sobre a patena e o corporal (pano). É entregue primeiro porque o padre vai estender sobre o altar o corporal, e depois sobre o corporal serão colocados todos os demais objetos. Após a entrega do cálice, vem a entrega das âmbulas, que são aqueles recipientes onde vão as partículas que depois de consagradas serão distribuídas para a comunidade. Essas âmbulas, os coroinhas tiram as tampas dela e entregam ao padre para que ele coloque-as sobre o corporal. Em seguida vem as galhetas, onde uma delas contém o vinho e a outra contém a água. É colocado o vinho primeiro, pode ser o padre a colocar, como pode ser o coroinha a colocar o vinho dentro do cálice, e em seguida é colocada uma gota de água.', 
    fotoUrl: 'https://images.tcdn.com.br/img/img_prod/280297/conjunto_ambula_e_calice_534g_6267_1_07918679e83bde44900d77256bc3ad32_20220621175926.jpg' },
    { texto: 'Na credência também podem estar a caldeirinha (pequeno recipiente) e o aspersório, que é utilizado com a finalidade de aspergir água benta Mas Precisa Ser Verificado se de fato será utilziado nesta Missa.    ', 
    fotoUrl: 'https://images.tcdn.com.br/img/img_prod/280297/caldeira_cromada_com_aspersorio_700_1177_1_8c83e75a98bbf1215df05962f5a2cbba.jpg' },
    { texto: 'Nas missas solenes são utilizadas também o turíbulo (vaso onde se coloca o incenso para as celebrações) e a naveta. (vasilha em formato de barco onde se transporta o incenso para as celebrações litúrgicas). O cerimoniário que manuseia o turíbulo é chamado de turiferário e o coroinha ou cerimoniário que utiliza a naveta é chamado de naveteiro. É uma função específica para algumas missas. Incensa-se o altar, o crucifixo, o ofertório e a assembleia.', 
    fotoUrl: 'https://assets.holyart.it/images/TN000089/pt/500/R/SN039381/CLOSEUP01_HD/h-bf427201/conjunto-turibulo-e-naveta-estilo-classico-decorado.jpg' },
    { texto: 'Algumas celebrações tem também o ostensório, que é aquele objeto que os cerimoniários entregam ao padre para que ele coloque o Santíssimo. Quando tem a bênção do Santíssimo, quando o sacerdote circula entre os fiéis, numa missa específica para dar a bênção do Santíssimo.',
     fotoUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbvmBUeh4Se2OqXR0qZyh6Jxek3ZNuuIhSVxWSpao-UrKT4j2L6hVxzblGVnDbudU_WHip3D7lGTU77bUqjxldskur5oQRL-9sCI_ZK_JhRbH4iFAEvPCoui3V04p_Gq1hImQ6HE5_JpEX/s1600/Ostens%25C3%25B3rio-636-R%25C3%25A9plica.png' },
    { texto: 'É um objeto, uma âmbula específica, onde fica o Santíssimo dentro do sacrário. Então quando tem a missa, quando tem a benção do Santíssimo, o ministro busca no sacrário essa teca com o Santíssimo e traz ao padre. Ele coloca no ostensório para então fazer aquela benção do Santíssimo Sacramento.',
     fotoUrl: 'https://images.tcdn.com.br/img/img_prod/280297/teca_dourada_interna_50_1859_1_25573b7f385b2a98a8909a566db4d592_20220621171641.jpg' },
    { texto: 'Missas onde são realizados Batismo e Crisma tem um objeto que se chama crismera, que é um suporte onde são guardados os santos óleos. ', 
    fotoUrl: 'https://www.gruppoliturgico.com/wp-content/uploads/2022/05/2829.jpg' },
    { texto: 'Em seguida, os meninos já levam o jarro com água e uma pequena bacia ou lavabo, como a gente costuma chamar. É o manustérgio, que é uma pequena toalha utilizada quando o padre tem as mãos purificadas.', 
    fotoUrl: 'https://http2.mlstatic.com/D_NQ_NP_755353-MLB52820311842_122022-O.webp' },
    { texto: 'É uma cruz que tem o cabo bem longo e é utilizada nas procissões de entrada nas missas. Em todas as celebrações é utilizada essa cruz processional. Raras são as missas que essa cruz não é utilizada.',
     fotoUrl: 'https://images.tcdn.com.br/img/img_prod/280297/2032_1_20220621171611.jpg' },
    { texto: 'É aquele livro que contém o roteiro da missa, o rito da missa com aquelas fitinhas coloridas, que servem na verdade para facilitar o vai e vem das páginas. Os meninos separam ali a oração eucarística, o prefácio, a bênção solene. Enfim, e o coloridodas fitas facilita esse manuseio. O missal, na verdade, é a menina dos olhos de todo cerimoniário. É talvez o objeto de longe que eles mais gostam de manusear. Tem algumas dificuldades no início, mas depois pegam o gosto. Realmente é um encantamento eles trabalhando com o missal.',
     fotoUrl: 'https://images.tcdn.com.br/img/img_prod/1076813/missal_romano_traducao_da_3a_edicao_tipica_1927_1_eca08c813d04f83c2fbe7f1a5e3d03fb.png' },
    { texto: 'É um paninho branco tipo uma toalhinha que vai sobre as âmbulas. Ali está indicando que tem o Santíssimo, que estão as hóstias consagradas, que estão na reserva do sacrário. Aquelas hóstias que não foram consumidas durante a missa, as sobras são guardadas no sacrário e as âmbulas são cobertas com esse paninho branco.', 
    fotoUrl: 'https://cimparamentos.com.br/images/Produtos/CN_03_-_CONOPEU_BRANC0_ESCUDO_MARIANO.jpg' },
    { texto: 'É utilizado pelo padre somente quando ele está com o ostensório com o Santíssimo.  O cerimoniário geralmente o auxilia a colocar esse véu sobre os ombros. E nesse véu pela parte interna tem um espaço, tipo dois bolsões por debaixo desse véu, que é onde o padre coloca as mãos, porque ele não toca o Santíssimo com as mãos nuas. Então, ele fica com esse véu e cobre as suas mãos para poder segurar o Santíssimo.',
     fotoUrl: 'https://cdn.awsli.com.br/2500x2500/2537/2537878/produto/194047004/v-u-umeral-comprar-dourado-cg-670-pyhuxg6z8o.png' },
    { texto: 'Em missas com a presença do bispo, tem alguns objetos específicos que pertencem a ele: o báculo (cajado), a mitra (uma espécie de chapéu) e o solidéu (pequena boina). A função do cerimoniário que auxilia o bispo segurando o báculo, se chama baculífero; a função do cerimoniário que segura a mitra, que é aquele chapéu do bispo mais o solidéu, tem a função chamada de mitrífero.    ',
     fotoUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZZTemDLgK3Q4b-em4Ly0NJCOqWIDNyIJhda2g2FbfNrIv6anUiQWIFmMg-Vd_67Y-SiurGolqgLUZj5kwcXRbbAvYhba6P2tBIlCRhn4KwMOSqm4fk5monQ8by9A8S_gHzZUV1ZuImpM/s1600/Episcopal.jpg' },
    { texto: 'É um objeto bastante interessante e que atrai bastante as crianças. Os coroinhas gostam muito desse objeto. É utilizado na época da Semana Santa. Um objeto de madeira que tem um ferrinho pregado nessa tábua e quando as crianças agitam faz um enorme barulho. Geralmente é utilizada no tríduo pascal (quinta, sexta e sábado santos).',
     fotoUrl: 'https://m.media-amazon.com/images/I/71+-XuPQgmL._AC_UF894,1000_QL80_.jpg' },
    { texto: 'É aquele livro que contém todas as leituras do dia. Tem o lecionário dominical, o lecionário semanal e o lecionário específico dos santos, que é chamado de santoral. Então, de acordo com o dia, os meninos separam o lecionário, preparam a página correta para o leitor se preparar e fazer a leitura diante da assembleia.', 
    fotoUrl: 'https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/betanial/catalog/paulus/sem-titulo.jpg' },
    { texto: 'Algumas paróquias e padres têm essa preferência por utilizar esse livro de preces, específico para anos pares e anos ímpares. Geralmente é utilizado de segunda a sexta-feira, nos dias que não tem folhetos. Então é opcional cada padre fazer uso dele. Substitui aqueles livretos “Deus Conosco” e “Liturgia Diária”. Portanto é um livro que dá para acompanhar bem, porque tem datas específicas, preces específicas, por exemplo, em dias para Nossa Senhora, para santos tradicionais da Igreja.', 
    fotoUrl: 'https://images.tcdn.com.br/img/img_prod/479347/livro_de_oracoes_preces_472_2_20160816114100.jpg' },
    { texto: 'É um livro bem grande, que contém os evangelhos para os domingos e também para as festas do ano litúrgico. É opcional para os padres utilizarem aos finais de semana., nas missas dominicais. Caso não queira utilizá-lo, pode se proceder a proclamação do evangelho através do lecionário. Mas normalmente os padres utilizam nas missas dominicais e também nas festas do ano litúrgico.', 
    fotoUrl: 'https://images.tcdn.com.br/img/img_prod/280297/evangeliario_capa_verde_2269_1_b97c578e3755b8adcade6378e02064d7_20220621175527.jpg' },
    { texto: 'É um livro bem grande, que contém os evangelhos para os domingos e também para as festas do ano litúrgico. É opcional para os padres utilizarem aos finais de semana., nas missas dominicais. Caso não queira utilizá-lo, pode se proceder a proclamação do evangelho através do lecionário. Mas normalmente os padres utilizam nas missas dominicais e também nas festas do ano litúrgico.', 
    fotoUrl: '' },
  ];

  informacaoVisivel: boolean[] = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]; // Inicialmente todas as informações estão ocultas

  constructor(private renderer: Renderer2, private router: Router) {}

  voltarParaHome() {
    this.router.navigate(['/home']);
  }

  toggleInformacao(botaoNumero: number) {
    const index = botaoNumero - 1;
    const infoDivId = `info${botaoNumero}`;
    const infoDiv = document.getElementById(infoDivId);
  
    // Se as informações estiverem visíveis, oculte-as. Caso contrário, exiba-as.
    if (this.informacaoVisivel[index]) {
      infoDiv!.innerHTML = ''; // Limpa o conteúdo
      this.informacaoVisivel[index] = false;
    } else {
      const info = this.informacoes[index];
      // Cria e adiciona o texto
      const texto = this.renderer.createText(info.texto);
      this.renderer.appendChild(infoDiv!, texto);
  
      // Cria e adiciona a imagem
      const imagem = this.renderer.createElement('img');
      this.renderer.setAttribute(imagem, 'src', info.fotoUrl);
      this.renderer.setAttribute(imagem, 'alt', `Imagem ${botaoNumero}`);
      this.renderer.setStyle(imagem, 'display', 'block'); // Exibe a imagem abaixo do texto
      this.renderer.setStyle(imagem, 'margin', '0 auto'); // Centraliza a imagem
      this.renderer.appendChild(infoDiv!, imagem);
  
      this.informacaoVisivel[index] = true;
      } 
    } 
  }
