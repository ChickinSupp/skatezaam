// const http = require('http');
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

const site = 'https://www.skatevideosite.com/songsearch';

const search = (q) => {
  const search = q.replace(" ", "+");
  return new Promise((resolve, reject) => {
    axios.get(`${site}/${search}`)
    .then(response => {
      return resolve(response.data)
    })
    .catch(error => {
      return reject(error.message)
    })
  })
}

(async () => {
  const searchTerm = 'David Bowie';
  const html = await search(searchTerm);
  const $ = cheerio.load(html);
  const searchResult = $('.skatevideolist').text();
  const searchResultWithDividers = searchResult.replace(/\n\n\n\n/g, '--------------------------');
  const searchResultWithoutTabs = searchResultWithDividers.replace(/\t+/g, '');
  const searchResultWithoutNewLines = searchResultWithoutTabs.replace(/\n+/g, ' ');
  const searchResultClean = searchResultWithoutNewLines.replace(/\s+/g, ' ');
  const arr = searchResultClean.split('--------------------------');
  console.log(arr);
})();