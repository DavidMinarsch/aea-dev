/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

 import { wrapPageElement as wrap } from './src/root-wrapper'
 import React from "react"
 import theme from "./src/theme"
 import { ColorModeScript } from "@chakra-ui/react"
 
 export const wrapPageElement = wrap
 
 export const onRenderBody = ({ setPreBodyComponents }) => {
   setPreBodyComponents([
     <ColorModeScript
       initialColorMode={theme.config.initialColorMode}
       key="chakra-ui-no-flash"
     />
   ])
 }