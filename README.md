# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
import { WINNER_COMBOS } from './constants'

export const checkWinner = (boardToCheack) => {
	//check all the winner combinations to see who wons
	for (const combo of WINNER_COMBOS) {
		const [a, b, c] = combo

		if (
			boardToCheack[a] &&
      boardToCheack[a] === boardToCheack[b] &&
      boardToCheack[a] === boardToCheack[c]
		) {
			return boardToCheack[a]
		}
	}

	//if there's no winner
	return null
}
