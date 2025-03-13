import React, { useEffect, useState } from "react";
import { getBowlers } from "../api";

const BowlerTable = () => {
    const [bowlers, setBowlers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getBowlers();
            setBowlers(data);
        };
        fetchData();
    }, []);

    return (
        <table className="border-collapse border w-full mt-4">
            <thead>
                <tr>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Team</th>
                    <th className="border p-2">City</th>
                    <th className="border p-2">State</th>
                    <th className="border p-2">Phone</th>
                </tr>
            </thead>
            <tbody>
                {bowlers.map((b) => (
                    <tr key={b.bowlerID}>
                        <td className="border p-2">{`${b.bowlerFirstName} ${b.bowlerLastName}`}</td>
                        <td className="border p-2">{b.teamID === 1 ? "Marlins" : "Sharks"}</td>
                        <td className="border p-2">{b.bowlerCity}</td>
                        <td className="border p-2">{b.bowlerState}</td>
                        <td className="border p-2">{b.bowlerPhoneNumber}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BowlerTable;