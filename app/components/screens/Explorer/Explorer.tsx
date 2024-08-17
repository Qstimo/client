import Layout from "@/components/ui/layout/Layout";
import { FC } from "react";
import { Text, View } from "react-native";
import { useGetAllProducts } from "./useGetAllProducts";
import Catalog from "@/components/ui/catalog/Catalog";
import Loader from "@/components/ui/Loader";

const Explorer: FC = () => {
    const { isLoading, products } = useGetAllProducts()

    return isLoading ? <Loader /> : (
        <Catalog title="Exlorer" products={products} />
    )
}
export default Explorer