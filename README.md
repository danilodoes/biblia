# Eternização das Vozes - Projeto Bíblico
- Versão Biblica Utilizada: Nova Almeida Atualizada(NAA)
- Referência de Coleta dos Textos Biblicos: https://www.bibliaonline.com.br/naa/

## Sobre o projeto
Este projeto tem como objetivo **eternizar memórias** dos membros da igreja através de gravações de áudio e vídeo de versículos bíblicos. A ideia é criar uma aplicação web onde os áudios de diferentes capítulos da Bíblia possam ser acessados, com a vantagem de serem interpretados pelas vozes dos membros da comunidade, garantindo um legado que transcende gerações.  
A aplicação permitirá aos usuários assistirem e escutarem a Bíblia sendo lida por um dos membros, com um simples clique em um botão de *play*. 

## Objetivos
- **Eternizar os membros** da igreja, preservando sua memória e contribuindo para a história da comunidade.
- **Criar uma aplicação acessível**, onde qualquer pessoa possa ouvir os versículos bíblicos, como parte de um projeto de valor cultural e emocional.
- **Aplicar conceitos que estou estudando**, através de problemas reais e soluções para o dia-a-dia.

## Funcionalidades
- **Funcionalidade única da aplicação:** Buscar um livro e capítulo específico para ouvir em vídeo.
- **Banco de dados MySQL**: O projeto utiliza um banco de dados MySQL para armazenar os textos da Bíblia, organizados por livros, capítulos e versículos.
- **Áudio e vídeo por capítulo**: O áudio/vídeo poderá ser reproduzido por capítulos inteiros, simplificando a interação e tornando a navegação mais eficiente.
- **Interface Web simples**: Uma interface simples, onde o usuário pode selecionar o livro e o capítulo e, com um único clique, ouvir o capítulo selecionado.

## Como funciona
***O projeto é dividido em algumas etapas principais:***  
1. **Banco de Dados**: Utiliza um banco de dados MySQL, onde a Bíblia está organizada de forma estruturada (livros, capítulos e versículos).
2. **Interface Web**: A página permite que o usuário selecione o livro e capítulo da Bíblia, e com um clique no botão de play, o áudio correspondente ao capítulo é reproduzido.
3. **Armazenamento dos vídeos**: Os arquivos de vídeo que serão armazenados no YouTube estarão associados aos capítulos específicos. 
4. **ETL**: O processo de coleta dos dados (Capítulos e Versículos) foi realizado através de um formulário fechado, onde apenas duas pessoas ficaram responsáveis pelo preenchimento. Visando manter o controle dos dados inputados e possíveis erros. Através de script esses dados coletados foram utilizados para popular o banco de dados.

## Tecnologias Utilizadas  
- **MySQL** para armazenamento de dados (Bíblia, livros, capítulos, versículos e áudio).
- **HTML, CSS e JavaScript** para a criação da interface web e a lógica computacional do back-end.
- **Python** para inserção dos dados(versículos) no banco de dados MySQL.

## Como rodar o projeto  
***Para rodar o projeto localmente, siga os passos abaixo:***

1. **Clone o repositório:**
- ```bash git clone https://github.com/danilodoes/biblia.git```
- **Instale o MySQL** e crie um banco de dados chamado biblia (ou qualquer outro nome que preferir, mas você precisará também, alterar esse nome em partes do código para que funcione corretamente).

2. **Importe o banco de dados:**
- Use as queries SQL fornecidas neste repositório para criar as tabelas necessárias.
- Utilize o script para inserção dos dados ao seu banco de dados.  
*<a href="https://www.google.com/" target="_blank"> Caso não queira fazer manualmente, baixe aqui o dump do banco já populado.</a>*

3. **Configure o ambiente local:**
- Garanta que sua página web consiga se conectar ao banco de dados local (ou de hospedagem remota, se preferir).

4. **Inicie o servidor:**
- Caso esteja utilizando uma solução como o XAMPP ou WAMP, inicie o Apache e o MySQL.
- Abra a página local do projeto no navegador para começar a testar.

## Implementações futuras:
- Permitir a busca por nome dos membros;
- Criar "perfil do membro", onde mostrará quantos e quais capitulos ele tem gravado na aplicação;

## Conheça os bastidores:
- Para saber mais como esse projeto foi *organizado e desenvolvido"   
<a href="https://fluff-bull-bfa.notion.site/1d7ae4a3765580e0b55eda1ab5907e93?v=1d7ae4a3765580b68b9f000c838d9e14" target="_blank"> Click aqui!</a>
