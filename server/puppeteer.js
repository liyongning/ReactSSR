/**
 * 通过puppeteer解决csr应用的seo问题
 * 也可以通过puppeteer做页面预渲染
 */
const express = require('express')
const puppeteer = require('puppeteer')

const app = express()

async function spider (url) {
  const browser = await puppeteer.launch()
  const newPage = await browser.newPage()
  await newPage.goto(url, {
    timeout: 300000,
    waitUntil: ['networkidle2']
  })
  // await newPage.screenshot({path: './example.png'})
  const html = await newPage.content()
  await browser.close()
  return html
}

const preRender = {}

app.get('*', async (req, res) => {
  if (req.url === '/favicon.ico') {
    return res.send({code: 1})
  }
  console.log(preRender)
  if (!preRender[req.url]) {
    // 没有预渲染该页面, 获取该页面，并保存该页面, 如果缓存太多，可以考虑lru算法
    const html = await spider('http://localhost:3000' + req.url)
    preRender[req.url] = html
  }
  res.send(preRender[req.url])
})

app.listen(3002, () => {
  console.log('puppeteer server start')
})