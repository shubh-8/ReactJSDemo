import { useEffect, useState } from "react";
import User from "./User";

const Customers = () => {
    const [users, setUsers] = useState([{
        name: 'Anna',
        email: "anna_g@gmail.com",
        user: 'Ag'
    }, {
        name: 'Bret',
        email: "bret_j@gmail.com",
        username: 'Bj'
    }]);


    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    //useEffect -> side effect
    useEffect(() => {
        console.log('USeEffect fired!');

        const getUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');//AJAX : GET
                const userData = await response.json();
                console.log(userData);
            } catch (err) {
                //if promise fails
                console.log('Something went wrong while getting users');
            }
        }

        getUsers();

        return () => {
            //clean up
            console.log('All clean up code here');
        }
    },
        [counter2]); //[] => dependencies array (fired only once when component loads)

    return (
        <div>
            <div>
                <h1> My customers</h1> <hr />
                {
                    users.map((eachUser, index) =>
                        <User key={index} {...eachUser}
                        />)
                }
            </div>
            <div>
                Counter1 : {counter1} &nbsp;
                <button className="btn btn-warning" onClick={() => { setCounter1(counter1 + 1) }}>Inc Count 1</button>
                <br />
                Counter2 : {counter2} &nbsp;
                <button className="btn btn-warning" onClick={() => { setCounter2(counter2 + 1) }}>Inc Count 2</button>
            </div>
        </div>
    );
}
export default Customers;