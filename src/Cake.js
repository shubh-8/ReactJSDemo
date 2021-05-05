import { useState } from "react";

function Cake() {
    //define some data
    const [cakeData, setCakeData] = useState({
        name: "Choco",
        price: 500,
        qty: 3
    });
    //style - button 
    // const btnColor = { backgroundColor: "lightgreen", color: "green" };

    // buy action
    /*function buyCake() {
        if (cakeData.qty > 0) {
            // reduce qty by 1
            //cloning the object
            const copyOfCake = { ...cakeData };
            copyOfCake.qty--;

            //set copy of cake to original state
            setCakeData(copyOfCake);
            console.log('Cake is Ordered');
        }
        else {
            console.log('No Cake left');
        }*/

    // buy action
    const buyCake = () => {
        if (cakeData.qty > 0) {
            setTimeout(() => {

                setCakeData(previousCakeData => {
                    return { ...previousCakeData, qty: previousCakeData.qty - 1 }
                })
                /* ASYNC CODE
                                //reduce the qty by 1 : cloning
                                const copyOfCake = { ...cakeData };
                                copyOfCake.qty--;
                                //set the copy to the original state
                                setCakeData(copyOfCake);
                */
                console.log("Your Order has been confirmed");
            }, 5000)
        } else {
            console.log("Cake is out of stock");
        }
    }

    return (
        // style={btnColor}
        <div>
            Name: {cakeData.name} <br />
            Price: {cakeData.price} <br />
            Qty: {cakeData.qty} <br />
            <button onClick={buyCake} className={(cakeData.qty > 0) ? "btn btn-success" : "btn btn-danger"}>Buy Cake</button>
        </div>
    );
}

export default Cake;