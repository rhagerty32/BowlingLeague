import React from "react";
import Heading from "./components/Heading";
import BowlerTable from "./components/BowlerTable";

function App() {
    return (
        <div className="container mx-auto" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <Heading />
            <BowlerTable />
        </div>
    );
}

export default App;