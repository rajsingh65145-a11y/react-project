// Child.jsx
import React from 'react'

const Child = React.memo(({ name }) => {
    console.log("Child rendered!");
    return <p>Hello, {name}</p>;
});

export default Child