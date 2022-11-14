![Logo Aluroni](/src/assets/logo.svg)

# Descrição do Projeto
Aplicação React do cardápio do restaurante Aluroni (restaurante fictício) com preços, nomes, descrição, peso, categoria e porções, além de funcionalidades como filtros, ordenador e buscador. Projeto utilizando o template TypeScript.

# Funcionalidades
* ## Filtros

* ## Buscador

* ## Ordenador

# Tecnologias Utilizadas
* ## React 
Atualmente é a biblioteca mais utilizada de JavaScript segundo pesquisas. Para criar o projeto foi utilizada a biblioteca Create React App para criar a estrutura inicial com base nos padrões comuns adotados pela comunidade, juntamente com o template Typescript pois possui todas as configurações necessárias para usar Typecript no projeto. Foram utilizados na aplicação: conceito de DRY (Dont Repeat Yoursel), usado para criar componentes reaproveitáveis. Conceito de SRP (Single Responsability Principal), cada função (componentes) do código deve ter uma responsabilidade. Conceito das Props para comunicação entre componentes e Hooks para comunicação com estado interno. Pasta `public` para arquivos estáticos, como imagens, que serão referenciados dinamicamente.

* #### useState
O React só irá renderizar ou atualizar um componente quando avisarmos que algo mudou e fazemos isso usando o Hook `useState()`. O state é uma variável que adiciona um valor a ela, porém sempre que esse "estado da variável" muda, o componente, também muda. O `useState` precisa receber uma variável com o `state` em si e uma função para alterar esse estado (comumemente usamos o `setState`), ao alterar o estado dessa função (setar um novo item) o React entende que o componente mudou e o atualiza. 
* ### Importação de imagens como componente
Para importar imagens como componente React, deve-se primeiramente utilizar uma imagem em formato `.svg`, o ideal  é que a imagem fique dentro de `src` em uma pasta `assets`. Para utiliza-lá deve-se fazer o import como um ReactComponent no arquivo onde ela será usada através da seguinte linha de código `import { ReactComponent as NomeDaImagem } from 'assets/nomedaimagem.svg'`
* ### Absolute Imports
Para não importar de formar relativa mas sim absoluta. O Typescript e o Javascript possuem uma forma para importar de forma absoluta, sem a necessidade de voltar muitas pastas ou colocar vários paths `'../../'` para importar um arquivo, através do arquivo `tsconfig.json` ou `jsconfig.json`. , entre no arquivo e dentro de `compilerOptions` acrescente a seguinte linha de código:
        
        "compilerOptions": {
            "baseUrl": "src",
            //continuação do código
        } 
* ### Pacote React Icons
Pacote do React que adiciona ícones para serem usados na aplicação, necessita que sejam importados dentro do arquivo que vão ser utilizados. Para instalar, abra o terminal e digite `npm install react-icons`. Para verificar os ícones disponíveis acesse este [link](#https://react-icons.github.io/react-icons)
* ## TypeScript
É uma biblioteca para tipar variáveis em JavaScript. Para criar uma aplicação React utilizando o template padrão de typescript, basta digitar no terminal `npx create-react-app nome-do-app --template typescript`
* ## Biblioteca Classnames
Essa biblioteca auxilia na adição condicional de classes CSS, pode-se utilizar sintaxe de objetos para definir quais classes devem ser aplicadas, faz com que seja uma melhor forma de trabalhar com CSS Modules sem precisar fazer a concatenação com template string's. Para instalar basta abrir o terminal e executar o comando `npm install classnames`
* ## Sass
É um pré-processador que melhora e agiliza o CSS oferecendo algumas ferramentas que facilitam a escrita, porém os navegadores interpretam apenas CSS portanto o arquivo Sass é compilado para CSS puro.

Para instalar, abra o terminal no diretório do projeto, digite `npm install --save-dev sass` e pressionar Enter.
Para conferir se está instalado, verifique no arquivo `package.json` se terá uma `devDepencies`.

    "devDependencies": {

        "sass": "^1.55.0",

        "typescript-plugin-css-modules": "^3.4.0"
    }

reset.css básico no arquivo index.css
* ## CSS Modules
Solução para não haver sobreposição de código CSS entre componentes. Sass, CSS Modules e Typescript trabalham todas juntas, fazendo conversões para que o código seja compreendido pelos navegadores. Enquanto o Sass facilita a escrita de estilos, o CSS Modules facilita a aplicação desses estilos e o Typescript ajuda na experiência de desenvolvimento dos componentes

`typescript-plugin-css-module` é um plugin TypeScript, pode ser encontrado no site da NPM

Para instalar, abra o terminal no diretório do projeto, digite `npm install -D typescrypt-plugin-css-modules` e execute o comando. Também é obrigátorio adicionar um plugin no arquivo `tsconfig.json`, para que a aplicação funcione corretamente, pois é onde está a configuração de TypeScript. Então copia-se apenas a linha `"plugins:"` fornecida no site da NPM e cole-a dentro do `compilerOptions:`, pois ele já existe no arquivo:

    {
        "compilerOptions": {
            "plugins": [{"name":"typescript-plugin-css-modules"}],
            ...
        }
    }

Com isso terá terminado a instalação e poderá usar o CSS Modules.

Para utiliza-lo, ao criar arquivos de Sass, crie-os com a extensão `app.modules.scss`. Será importado no `index.tsx`como um objeto. Portanto no topo do código teremos `import style from './app.module.scss'`. O `className` passará a ser uma variável JavaScript `style.app`
* ### Padronização do CSS com BEN
Por utilizar CSS Modules, para gerar classes únicas para cada componente, temos uma maior facilidade em nomea-las, por isso optamos por um estilo simples de nomeação de classes dentro de cada tag. 

# Autor
| [<img src="https://github.com/pedromessetti.png" width=115><br><sub>Pedro Vinicius Messetti</sub>](https://github.com/pedromessetti) |
| :---: |
