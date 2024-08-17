import Heading from "@/components/ui/layout/Heading";
import Layout from "@/components/ui/layout/Layout";
import { FC } from "react";
import { Text, View } from "react-native";
import { useCategory } from "./useCategory";
import Loader from "@/components/ui/Loader";
import Catalog from "@/components/ui/catalog/Catalog";


const Category: FC = () => {

    const { category, products, isLoding } = useCategory()

    if (isLoding) return <Loader />

    return (
        <Layout>
            {category
                ? <Catalog title={category.name} products={products} />
                : <Text>Category not found</Text>
            }
        </Layout>
    )
}
export default Category