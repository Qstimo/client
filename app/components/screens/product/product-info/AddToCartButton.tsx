
import Button from "@/components/ui/button/button";
import { FC } from "react";
import { View } from "react-native";

interface IAddToCartButton {
    productId: string
}

const AddToCartButton: FC<IAddToCartButton> = ({ productId }) => {

    return (
        <Button>Add to cart</Button>

    )
}
export default AddToCartButton