import { ORDER_NOW_OPEN, ORDER_NOW_CLOSE } from './actionTypes'

export const orderNowOpen = () => {
	return {
		type: ORDER_NOW_OPEN
	}
}

export const orderNowClose = () => {
	return {
		type: ORDER_NOW_CLOSE
	}
}
