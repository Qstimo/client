import { ProductService } from "@/services/product.service"
import { useQuery } from "@tanstack/react-query"
import { useSearchForm } from "./useSearchForm"

export const useSearch = ()=>{
    const {searchTerm, debouncedSeach, control}= useSearchForm()

    const { data: products, isLoading } = useQuery({
        queryKey: ['get search products', debouncedSeach],
        queryFn: () => ProductService.getAll(debouncedSeach),
        enabled: !!debouncedSeach
    })

    return { products, isLoading, control, searchTerm }
}