import "./App.css";

import Table from "./components/Table";
import { BsFillPencilFill, BsFillSaveFill, BsTrashFill } from "react-icons/bs";

import employees from "./data/employees.json";
import images from "./data/images.json";
import vehicles from "./data/vehicles.json";

const handleSave = (param) => {
    alert(param);
};

const handleEdit = (param) => {
    alert(param);
};

const handleDelete = (param) => {
    alert(param);
};

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
                actions={[
                    {
                        function: handleSave,
                        label: <BsFillSaveFill color="#FFFFFF" />,
                        param: "cpf",
                    },
                    {
                        function: handleEdit,
                        label: <BsFillPencilFill color="#FFFFFF" />,
                        param: "cpf",
                    },
                    {
                        function: handleDelete,
                        label: <BsTrashFill color="#FFFFFF" />,
                        param: "cpf",
                    },
                ]}
            />
            <Table title="Images" data={dataImages} />
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
