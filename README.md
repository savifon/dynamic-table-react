## Dynamic Table React 🧾

🔗 Link do exemplo: [https://dynamic-table-react.vercel.app/](https://dynamic-table-react.vercel.app/)

Componente desenvolvido para gerar uma `<table>` estilizada e responsiva a partir de um conjunto de dados carregado.\
Independente do número de atributos (colunas), o componente renderiza toda a tabela, incluindo o `<thead>` e `<tbody>`.

Também é possível passar uma lista de ações `actions`, conforme exemplo abaixo, que serão renderizadas na última coluna da tabela. Você pode passar como `label` uma string ou um componente, como um ícone, além do `param`, que será o valor retornado para sua `function`.

```
...
import data from "./data/vehicles.json";
...
const dataTable = data;
...
<Table
    data={dataTable}
    title="My Table"
    actions={[
        {
            function: myFunction1,
            label: "Action1" />",
            param: "my_id",
        },
        {
            function: myFunction2,
            label: "Action2" />",
            param: "my_id",
        },
    ]}
/>
...
```

## Tecnologias

-   React
-   CSS

## Configuração para desenvolvimento e contribuições

Siga os passos:

1. `git clone` neste projeto
2. `cd <PastaDoProjeto>`
3. `npm install` ou `yarn install`
4. `npm start` ou `yarn start`



https://user-images.githubusercontent.com/31941701/152903615-06e90e03-eb73-43a6-80a4-a1acffef60a9.mp4

