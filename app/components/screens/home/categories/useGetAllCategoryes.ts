import { CategoryService } from "@/services/categories.service"
import { useQuery } from "@tanstack/react-query"

export const useGetAllCategoryes = () => {
    const { data: categories, isLoading } = useQuery({
        queryKey: ['get categories'],
        queryFn: () => CategoryService.getAll(),
        select: data => data
    })

    return { categories, isLoading }
}