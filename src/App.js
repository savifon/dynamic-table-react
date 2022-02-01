import "./App.css";

import Table from "./components/Table";

import employees from "./data/employees.json";
import images from "./data/images.json";
import vehicles from "./data/vehicles.json";

function App() {
    const dataEmployees = employees;
    const dataImages = images;
    const dataVehicles = vehicles;

    return (
        <>
            <Table
                data={dataEmployees}
                title="Employees"
                lastLarger
                money="salary"
            />
            <Table data={dataImages} title="Images" money="salary" />
            <Table
                data={dataVehicles}
                title="Vehicles"
                money="value"
                tag="status"
            />
        </>
    );
}

export default App;
