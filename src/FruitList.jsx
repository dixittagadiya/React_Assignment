import React from "react";

const FruitList = () => {
    const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

    return (
        <div>
            <h1>Fruit List</h1>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
};

export default FruitList;
