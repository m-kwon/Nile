import { useContext, useEffect, useState } from "react";
import { IOrderItem } from "../../../interfaces/IOrderItem";
import axios from "axios";
import { IItem } from "../../../interfaces/IItem";
import { UserContext } from "../../../App";
import { useNavigate } from "react-router-dom";

interface IProps {
    item: IOrderItem,
    total: number,
    setTotal: React.Dispatch<React.SetStateAction<number>>
}

function SummaryRow({item, total, setTotal}: IProps) {

    const { userId } = useContext(UserContext);
    const [itemData, setItemData] = useState<IItem>();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/items/${item.itemId}`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'userId': userId
            }
        })
        .then(response => {
            setItemData(response.data);
            if (item.quantity > response.data.stock) {
                alert("Sorry, we don't have that many " + response.data.name + " in stock!");
                setTimeout(() => navigate('/CartPage'), 1000);
            }
            setTotal(total + (response.data.price * item.quantity));
        })
        .catch(error => {
            console.log(error);
        })

    }

    ,[]);

    return (
        <>
        {itemData && <div>
            <h3>{itemData.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${itemData.price * item.quantity}</p>
            <p>{itemData.name} x {item.quantity}    ${itemData.price * item.quantity}</p>
        </div>}
        </>
    );

}

export default SummaryRow;