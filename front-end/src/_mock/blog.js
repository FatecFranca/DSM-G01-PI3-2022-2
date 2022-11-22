import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Whiteboard Templates By Industry Leaders',
  'Tesla Cybertruck-inspired camper trailer for Tesla fans who can’t just wait for the truck!',
  'Designify Agency Landing Page Design',
  '✨What is Done is Done ✨',
  'Fresh Prince',
  'Six Socks Studio',
  'vincenzo de cotiis’ crossing over showcases a research on contamination',
  'Simple, Great Looking Animations in Your Project | Video Tutorial',
  '40 Free Serif Fonts for Digital Designers',
  'Examining the Evolution of the Typical Web Design Client',
  'Katie Griffin loves making that homey art',
  'The American Dream retold through mid-century railroad graphics',
  'Illustration System Design',
  'CarZio-Delivery Driver App SignIn/SignUp',
  'How to create a client-serverless Jamstack app using Netlify, Gatsby and Fauna',
  'Tylko Organise effortlessly -3D & Motion Design',
  'RAYO ?? A expanded visual arts festival identity',
  'Anthony Burrill and Wired mag’s Andrew Diprose discuss how they made January’s Change Everything cover',
  'Inside the Mind of Samuel Day',
  'Portfolio Review: Is This Portfolio Too Creative?',
  'Akkers van Margraten',
  'Gradient Ticket icon',
  'Here’s a Dyson motorcycle concept that doesn’t ‘suck’!',
  'How to Animate a SVG with border-image',
];

const posts = [
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Animação",
    "createdAt": "Conjunto de imagens que, apresentadas em seqüência, dão efeito de animação. As animações visam chamar a atenção do usuário."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Apresentação",
    "createdAt": "Saída de dados de um computador para o usuário. Geralmente, esse termo denota uma saída de dados visual, mas pode ser qualificada para indicar uma modalidade diferente, como por exemplo, uma apresentação sonora."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Apresentação Analógica",
    "createdAt": "Estilo de apresentação gráfica baseada em analogias com dispositivos físicos de apresentação, como velocímetros, altímetros, etc."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Apresentação Digital",
    "createdAt": "Estilo de apresentação baseada em dígitos."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Apresentação Sonora",
    "createdAt": "Apresentação de dados e informações realizadas através de dispositivos de apresentação sonora."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Área",
    "createdAt": "Região ou seção de uma tela ou janela que está localizada em uma posição consistente e é utilizada consistentemente para atingir um objetivo específico."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Atributo",
    "createdAt": "Propriedade de um objeto ou sua representação que pode ser modificado pelo usuário em determinados contextos, por exemplo, cor, tamanho, padrão ou fonte."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Barra de Rolagem",
    "createdAt": "Controle que permite ao usuário visualizar objetos que extrapolam o tamanho da área disponível para visualização."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Botão",
    "createdAt": "Figura representando botões materiais e que, normalmente, é selecionada por um dispositivo de apontamento (mouse) ou teclas de cursor, e executada por um botão do dispositivo de apontamento ou a tecla \"Enter\"."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Botão de Rádio",
    "createdAt": "Componente gráfico que simula os botões de um rádio real. Cada botão representa uma alternativa mutuamente exclusiva."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Cabeçalho",
    "createdAt": "Rótulo identificativo posicionado na parte superior de uma tabela ou lista."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Caixa de agrupamento",
    "createdAt": "Linhas que formam um retângulo vazado envolvendo um conjunto de objetos relacionados."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Caixa de Diálogo",
    "createdAt": "Painel que apresenta um conjunto de diferentes tipos de mostradores de dados, informações, mensagens, controles e comandos para apoiar o usuário em uma ação específica."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Caixa de Mensagem",
    "createdAt": "Nome genérico dado a qualquer caixa de diálogo que forneça informação, ou o estado corrente de um processamento em andamento, ou faça uma pergunta, ou apresente um aviso, ou chame atenção para um erro."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Caixa de Atribuição",
    "createdAt": "Os seletores são espaços na tela que são sensíveis às ações dos usuários para a seleção de valores pré-definidos pelos projetistas. Em grupos, os seletores se diferenciam entre os de escolha não exclusivas, aqui chamados de caixas de atribuição (check-box) e os de escolha exclusiva, ou botões de seleção (radio button)."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Campo",
    "createdAt": "Campos de dados são espaços na tela que permitem ao usuário a entrada de dados e informações numéricas e alfanuméricas. Os campos são espaços sensíveis às ações de edição por parte do usuário. Os campos complexos podem ser textuais, para a entrada de linhas (mais de uma) de texto, ou gráficos, para a edição de figuras."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Campo Opcional",
    "createdAt": "Campo que não precisa ser necessariamente preenchido."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Campo Obrigatório",
    "createdAt": "Campo de um formulário que deve ser preenchido."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Código",
    "createdAt": "Números, palavras, fíguras, cores e outras formas de representar objetos e dados associados ao sistema."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Comandos",
    "createdAt": "Os comandos editáveis (linha de comando) ou selecionáveis (botão de comando) permitem a entrada de instruções do usuário que disparam funcionalidades específicas de um programa aplicativo."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Controles",
    "createdAt": "Os controles são objetos sensíveis às ações dos usuários proporcionando a edição ou seleção de parâmetros que regulam os comandos."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Cursor",
    "createdAt": "Indicação visual do ponto corrente de entrada de dados."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Dado",
    "createdAt": "Mostradores de dados são espaços na tela que apresentam ao usuário o conteúdo de registros de memória ligados às evoluções do sistema informatizado ou do sistema de referência. Eles são, por definição, insensíveis às ações do usuário. Os mostradores complexos podem organizar seus elementos de dados segundo diferentes arranjos e formas, constituindo, em particular, os mostradores de listas, de tabelas e de gráficos."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Default",
    "createdAt": "Valor pré-determinado ou entrada de controle, freqüentemente usado com o objetivo de reduzir as ações de entrada do usuário."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Dialogo",
    "createdAt": "Interação entre um usuário e um sistema para atingir um determinado objetivo."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Dispositivo de apontamento",
    "createdAt": "Dispositivo tal como mouse e trackball que permitem ao usuário mover um apontador (cursor) em um espaço de trabalho e apontar para objetos gráficos."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Equivalente de teclado",
    "createdAt": "Tecla modificadora (Control, Alt), ou combinação de teclas ( por exemplo Control-C ) que executa uma função imediatamente, sem a necessidade de operações intermediárias. Excluem-se dessa definição as teclas de função (F1, F2, F3,...)."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Estrutura de menu",
    "createdAt": "Conjunto de menus relacionados hierarquicamente (como uma estrutura de árvore) ou estruturado como uma rede."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Execução de opção",
    "createdAt": "Ação que o usuário comanda ao computador para execução da(s) opção(ões) selecionada(s)."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Foco",
    "createdAt": "Indicação da janela ou do objeto que receberá a entrada corrente."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Formulário de entrada de dados",
    "createdAt": "Caixa de diálogo empregado para fins de entrada de conjuntos de dados relacionados. Apresenta uma organização de diferentes tipos de dados, informações, mensagens, controles e comandos para apoiar o usuário em sua entrada de dados."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Fonte",
    "createdAt": "Conjunto de caracteres específico, para o qual são definidas variações de tamanho e de estilo."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Grupo de opções",
    "createdAt": "Grupo de opções de menu que normalmente estão relacionadas funcionalmente. Menus e painéis de menu podem conter mais de um grupo de opções."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Ícone",
    "createdAt": "Pequena imagem gráfica usada para representar uma janela ou uma função do sistema computacional."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Identificador de opção",
    "createdAt": "Código, abreviação, mnemônico, ou uma porção do nome de uma opção que é utilizada para identificar unicamente cada opção de um menu."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Ilustração",
    "createdAt": "Figura que complementa uma informação textual."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Indicação de seleção",
    "createdAt": "Qualquer característica visual que indica o elemento selecionado na tela, ao qual o usuário pode aplicar uma ação subseqüente."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Informação",
    "createdAt": "Rótulos, mensagens, instruções, convites e informações sobre dados processados, que o usuário necessita utilizar para realizar as suas tarefas."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Intermitência visual",
    "createdAt": "Pisca-pisca ou recurso que define os itens que aparecem piscando nas telas."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Item de Dado",
    "createdAt": "Um conjunto de caracteres de tamanho fixo ou variável que forma uma unidade de dado simples. Por exemplo: nome, CEP (código de endereçamento postal)."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Janela",
    "createdAt": "Área controlável independentemente na tela, utilizada para apresentar objetos e/ou conduzir um diálogo com o usuário."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Linguagem de comando",
    "createdAt": "Tipo de diálogo no qual o usuário edita linhas de comandos que são interpretadas pelo sistema."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Lista",
    "createdAt": "Uma sucessão horizontal ou vertical de itens."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Lista de Seleção",
    "createdAt": "As listas de seleção apresentam, segundo um arranjo de lista, diversos seletores, que podem ser exclusivos ou não exclusivos."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Manipulação Direta",
    "createdAt": "Estilo de diálogo na qual o usuário age diretamente sobre o objeto na tela."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Mapa de Menu",
    "createdAt": "Representação gráfica de uma estrutura de menu."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Menu",
    "createdAt": "Conjunto de opções selecionáveis apresentadas ao usuário pelo computador. As opções pode ser apresentadas ao usuário através de dispositivos visuais (textual ou simbolicamente) ou verbais."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Metáfora",
    "createdAt": "Analogia a conceitos que já são familiares ao usuário e a partir dos quais o usuário pode derivar o uso e o comportamento do sistema."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Modal",
    "createdAt": "Atributo que define a caixa de diálogo que retém o foco das ações dos usuários. Desse modo, o usuário é obrigado a fechar a caixa modal para poder continuar seu trabalho em outras caixas ou janelas. A caixa amodal pode permanecer aberta enquanto o usuário continua trabalhando sobre outras."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Mostrador de Dados",
    "createdAt": "São espaços na tela que apresentam ao usuário o conteúdo de registros de memória ligados às evoluções do sistema informatizado ou do sistema de referência. Eles são, por definição, insensíveis às ações do usuário. Os mostradores complexos podem organizar seus elementos de dados segundo diferentes arranjos e formas, constituindo em particular os mostradores de listas, de tabelas."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Mostrador de Gráficos",
    "createdAt": "Dados especialmente formatados para mostrar relações espaciais, temporais, etc., entre conjuntos de dados."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Mostrador de Texto",
    "createdAt": "São espaços na tela que apresentam informação ou dados ocupando mais de uma linha de texto."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Mouse",
    "createdAt": "Dispositivo de apontamento normalmente utilizado em conjunto com um teclado em interfaces de usuário do tipo apontar-e-clicar orientadas a objeto."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Navegação",
    "createdAt": "Movimento de uma opção para outra opção dentro de um painel de menu, ou movimento de um painel de menu para outro painel de menu em uma estrutura de menu."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Níveis de experiência",
    "createdAt": "Descreve as diferentes experiências de uma população de usuários. Um usuário pode, com o uso continuado, passar de aprendiz para expert no software. Ao contrário, com a falta de uso, ele pode regredir à condição de aprendiz. Esse vai-e-vem caracteriza o usuário intermitente."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Níveis de Menu",
    "createdAt": "Subestrutura em uma hierarquia de menu. Por exemplo, o menu inicial na hierarquia é o menu de nível 1."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Objeto de Apresentação",
    "createdAt": "São objetos de software cujo processamento gera uma imagem na tela que é insensível as ações do usuário."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Objeto de Controle",
    "createdAt": "São objetos de software que permitem a interação do usuário com o sistema informatizado. Seu processamento gera uma imagem na tela que também recebe as ações de edição textual ou gráfica ou de seleção do usuário."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Objeto de Interação",
    "createdAt": "São objetos de software que permitem a interação do usuário com o sistema informatizado. Seu processamento gera uma imagem na tela que pode também receber as ações de edição textual ou gráfica ou de seleção do usuário."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Opção Crítica",
    "createdAt": "Opção que, quando escolhida, resulta em ações que tem impacto significativo sobre o sistema ou no desempenho da tarefa, ou em ações que podem degradar significativamente o sistema ou o desempenho da tarefa."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Opção de Menu",
    "createdAt": "Uma opção selecionável (textual, simbólica ou verbal) apresentada em um painel de menu."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Página de Menu",
    "createdAt": "Porção de uma estrutura de menu que é apresentada ao usuário ocupando uma página inteira."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Painel de Menu",
    "createdAt": "Porção de uma estrutura de menu apresentada ao usuário em uma porção específica da tela."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Rótulo",
    "createdAt": "Etiquetas, títulos, cabeçalhos e outros elementos empregados para identificar e descrever os objetos e dados associados ao sistema. Em suas relações com outros objetos, os rótulos desempenham funções de identificações, descrição, indicação e incitação ao usuário."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Seleção",
    "createdAt": "Escolha de um ou mais objetos dentre um conjunto apresentado de objetos."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Seleção de Opção",
    "createdAt": "Meio através do qual o usuário indica a escolha de uma ou mais opções de um menu."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Seleção Múltipla",
    "createdAt": "Seleção de mais de uma opção em um mesmo menu antes da execução."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Separador",
    "createdAt": "Seqüência de um ou mais caracteres, linhas ou uma pausa (para voz), utilizada para separar elementos organizados."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Sinal Sonoro",
    "createdAt": "Bips, sirenes e sons emitidos pelo sistema para informar, chamar atenção ou dar feedback ao usuário."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Sistema",
    "createdAt": "Ferramenta orientada à tarefa baseada em computador que auxilia o usuário a desenvolver tarefas de manipulação de informação."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Sistema Operacional",
    "createdAt": "Conjunto de programas e instruções de software que controlam os dispositivos físicos e periféricos de um computador."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Tarefa",
    "createdAt": "Uma série de transações que compreende parte ou o todo de uma atividade do usuário."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Tecla aceleradora",
    "createdAt": "Tecla modificadora (Control, Alt), ou combinação de teclas ( por exemplo Control-C ) que executa uma função imediatamente, sem a necessidade de operações intermediárias. Excluem-se dessa definição as teclas de função (F1, F2, F3,...)."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Tecla de Função",
    "createdAt": "Tecla cuja ativação afeta a entrada de controle. Por exemplo: F1, F2, F3,..."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Tela",
    "createdAt": "Todo o espaço de apresentação de um dispositivo. Uma tela inclui todas as janelas e caixas de diálogo apresentadas simultaneamente."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Valor Default",
    "createdAt": "Valor pré determinado ou entrada de controle, freqüentemente usado com o objetivo de reduzir as ações de entrada do usuário."
  },
  {
    "id": faker.datatype.uuid(),
    "cover": "/assets/images/covers/cover_18.jpg",
    "title": "Zona Funcional",
    "createdAt": "Área ou seção de uma tela ou janela que está localizada em uma posição consistente e é utilizada consistentemente para atingir um objetivo específico."
  },
  
];


export default posts;
