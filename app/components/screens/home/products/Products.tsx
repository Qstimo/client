
import { FC } from "react";
import { Text, View } from "react-native";
import { useProducts } from "./useProducts";
import Heading from "@/components/ui/layout/Heading";
import Loader from "@/components/ui/Loader";
import Catalog from "@/components/ui/catalog/Catalog";


const Products: FC = () => {
    const { products, isLoading } = useProducts()

    return isLoading ? <Loader /> : (
        <Catalog title="Products" products={products}/>
    )
}
export default Products