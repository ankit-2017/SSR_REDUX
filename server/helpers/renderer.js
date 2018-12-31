import React from 'react'
import {renderToString} from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../../src/routes'
import path from 'path'
import fs from 'fs'
import Helmet from 'react-helmet'

import {Provider}  from 'react-redux'


 // helper to prepare HTML markup
 const prepHtml =(data, {html, head, body}) =>{
    data = data.replace('<html lang="en">', `<html ${html} `);
    data = data.replace('</head>', `${head}</head>`);
    data = data.replace('<div id="root"></div>', `<div id="root">${body}</div>`)

    return data
}




export default (req, res, store)=>{
    
    const filepath = path.resolve(__dirname, '../../build/index.html');

    fs.readFile(filepath, 'utf-8',(err, htmlData)=>{
        if(err){
            console.log('read error')
            return res.status(404).end()
        }

        

        // routes
        const content = renderToString(
            <Provider store={store} >
                <StaticRouter location={req.path} context={{}} >
                        <Routes />
                </StaticRouter>
            </Provider>
        )

        // Let Helmet know to insert the right tags
        const helmet = Helmet.renderStatic();

        const html = prepHtml(htmlData,{
            html:helmet.htmlAttributes.toString(),
            head:
                helmet.title.toString() +
                helmet.meta.toString() +
                helmet.link.toString(),
            body:content
        } )

        res.send(html)
    })

}
