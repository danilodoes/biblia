# Eternização das Vozes - Projeto Bíblico
- Versão Biblica Utilizada: Nova Almeida Atualizada(NAA)
- Referência de Coleta dos Textos Biblicos: https://www.bibliaonline.com.br/naa/

## Sobre o projeto

Este projeto tem como objetivo **eternizar as vozes** de membros mais idosos da igreja através de gravações de áudios de versículos bíblicos. A ideia é criar uma aplicação web onde os áudios de diferentes capítulos da Bíblia possam ser acessados, com a vantagem de serem interpretados pelas vozes dos membros da comunidade, garantindo um legado que transcende gerações.

A plataforma permitirá aos usuários escutarem a Bíblia sendo lida em áudio, por capítulos, com um simples clique em um botão de *play*. Cada gravação de áudio será associada ao capítulo correspondente.

## Objetivos

- **Eternizar a voz de membros idosos** da igreja, preservando sua memória e contribuindo para a história da comunidade.
- **Criar uma aplicação acessível**, onde qualquer pessoa possa ouvir os versículos bíblicos, como parte de um projeto de valor cultural e emocional.
- **Contribuir com o conhecimento**, utilizando tecnologias simples e acessíveis para a criação de um banco de dados que armazena os textos da Bíblia e os arquivos de áudio das gravações.

## Funcionalidades

- **Banco de dados MySQL**: O projeto utiliza um banco de dados MySQL para armazenar os textos da Bíblia, organizados por livros, capítulos e versículos.
- **Áudio por capítulo**: O áudio pode ser reproduzido por capítulos inteiros, simplificando a interação e tornando a navegação mais eficiente.
- **Interface Web simples**: Uma interface simples, onde o usuário pode selecionar o livro e o capítulo e, com um único clique, ouvir o capítulo selecionado.

## Como funciona

O projeto é dividido em algumas etapas principais:

1. **Banco de Dados**: Utiliza um banco de dados MySQL, onde a Bíblia está organizada de forma estruturada (livros, capítulos e versículos).
2. **Interface Web**: A página permite que o usuário selecione o livro e capítulo da Bíblia, e com um clique no botão de play, o áudio correspondente ao capítulo é reproduzido.
3. **Armazenamento de Áudios**: Os arquivos de áudio que estão armazenados em núvem são associados aos capítulos específicos. 
4. **ETL**: O processo de coleta dos dados (Capítulos e Versículos) foi realizado através de um formulário fechado, onde apenas duas pessoas ficaram responsáveis pelo preenchimento. Visando manter o controle dos dados inputados e possíveis erros. Através de script esses dados coletados foram utilizados para popular o banco de dados.

## Tecnologias Utilizadas

- **MySQL** para armazenamento de dados (Bíblia, livros, capítulos, versículos e áudio).
- **HTML, CSS e JavaScript** para a criação da interface web e a lógica computacional do back-end.
- **Python** para inserção dos dados no banco de dados MySQL.

## Como rodar o projeto
Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
- ```bash git clone https://github.com/danilodoes/biblia.git```
- Instale o MySQL e crie um banco de dados chamado biblia (ou qualquer outro nome que preferir, mas você precisaram mudar partes do código também para que funcione corretamente).

2. **Importe o banco de dados:**
- Use as queries SQL fornecidas neste repositório para criar as tabelas necessárias.
- Utilize o script para inserção dos dados ao seu banco de dados.
- Caso não queria fazer manualmente, baixe aqui o dump do banco já populado: dump.sql

3. **Configure o ambiente local:**
- Garanta que sua página web consiga se conectar ao banco de dados local (ou de hospedagem remota, se preferir).

4. **Inicie o servidor:**
- Caso esteja utilizando uma solução como o XAMPP ou WAMP, inicie o Apache e o MySQL.
- Abra a página local do projeto no navegador para começar a testar.

