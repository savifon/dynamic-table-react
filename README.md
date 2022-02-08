## Dynamic Table React 🧾

🔗 Link do exemplo: [https://dynamic-table-react.vercel.app/](https://dynamic-table-react.vercel.app/)

Componente desenvolvido para gerar uma `<table>` estilizada e responsiva a partir de um conjunto de dados carregado.\
Independente do número de atributos (colunas), o componente renderiza toda a tabela, incluindo o `<thead>` e `<tbody>`.

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
            function: myFunction,
            label: "Action" />",
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

\
![Capturar](https://user-images.githubusercontent.com/31941701/151913331-4ffb0e78-5d6a-4a24-9834-a0b38630fd54.JPG)
![Capturar2](https://user-images.githubusercontent.com/31941701/151913338-db65f48d-9af5-4e8f-84fb-a822a5bf997d.JPG)
