import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
	:root {

		--white: #ffffff;
		--black: #000000;
	}
	body{
		min-height: 100vh;
		font-family: 'Montserrat', sans-serif;
		background: rgba(255,255,255,0.2)
				/* #2F302F */
		/* color: #EEEEEE; */
	}

	*, *::after, *::before {
		margin: 0;
		box-sizing: border-box;
	}


	

`
