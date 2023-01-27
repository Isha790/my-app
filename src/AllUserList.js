import React from "react";

const AlluserList = () => {
    let allusers = [{
        name: "John",
        email: "johan@gmail.com",
        phoneNumber: "9876543210",
    },
    {
        name: "priya",
        email: "priya@gmail.com",
        phoneNumber: "9876459210",
    },
    {
        name: "kabir",
        email: "kabir@gmail.com",
        phoneNumber: "9321456710",
    },
];
return (
    <div>
        <Userdetails user={allusers[0]}/>
        <Userdetails user={allusers[1]}/>
        <Userdetails user={allusers[2]}/>
        <Userdetails />
    </div>
)
};

export default AlluserList;