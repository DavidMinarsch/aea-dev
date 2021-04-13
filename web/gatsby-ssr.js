/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */


 import { wrapPageElement as wrapPage, wrapRootElement as wrapRoot } from './src/root-wrapper'
 
 export const wrapPageElement = wrapPage
 
 export const wrapRootElement = wrapRoot