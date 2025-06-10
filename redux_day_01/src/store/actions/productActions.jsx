import axios from "axios";
import { load } from "../reducers/productSlice";

export const asyncloadproduct = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get("https://fakestoreapi.com/products/");
        dispatch(load(data));
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}