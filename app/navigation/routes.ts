
import Home from '@/components/screens/home/Home'
import { IRoute } from './navigation.types'
import { Auth } from '@/components/screens/auth/Auth'
import Profile from '@/components/screens/Profile/Profile'
import Explorer from '@/components/screens/Explorer/Explorer'
import Favorites from '@/components/screens/Favorites/Favorites'
import Category from '@/components/screens/category/Category'
import Product from '@/components/screens/product/Product'
import Search from '@/components/screens/search/Search'
import Cart from '@/components/cart/Cart'

export const routes: IRoute[] = [
	{ 
		name: 'Home',
		component: Home
	},
	{
		name: 'Auth',
		component: Auth
	},
	{
		name: 'Favorites',
		component: Favorites
	},
	{
		name: 'Search',
		component: Search
	},
	{
		name: 'Explorer',
		component: Explorer
	},
	{
		name: 'Profile',
		component: Profile
	},
	{
		name: 'Cart',
		component: Cart
	},
	{
		name: 'Category',
		component: Category
	},
	{
		name: 'Product',
		component: Product
	},
	// {
	// 	name: 'Thanks',
	// 	component: Thanks
	// }
]
