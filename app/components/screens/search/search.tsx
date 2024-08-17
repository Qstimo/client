import { FC } from "react";
import { Text, View } from "react-native";
import { ISearchFormData } from "./seacrh.interface";
import Layout from "@/components/ui/layout/Layout";
import { useSearch } from "./useSeacrh";
import Heading from "@/components/ui/layout/Heading";
import Field from "@/components/ui/field/Field";
import Loader from "@/components/ui/Loader";
import Catalog from "@/components/ui/catalog/Catalog";

const Search: FC = () => {
    const { searchTerm, isLoading, control, products } = useSearch()

    return (
        <Layout>
            <Heading>Search</Heading>
            <View className="mt-3">
                <Field
                    control={control}
                    placeholder="Type something..."
                    name="searchTerm"
                    keyboardType="web-search"
                />
            </View>

            {!!searchTerm
                ? <View className="mt-2">
                    {isLoading ? <Loader /> : <Catalog products={products} />}
                </View>
                : null
            }
        </Layout>
    )
}
export default Search