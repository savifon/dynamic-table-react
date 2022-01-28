import "./App.css";

import Table from "./components/Table";

// import data from "./data/employees.json";
// import data from "./data/images.json";
import data from "./data/vehicles.json";

function App() {
    const dataTable = data;

    return (
        <>
            <Table
                data={dataTable}
                title="Exemplo de tabela"
                // lastLarger
                money="salary"
            />
        </>
    );
}

export default App;
