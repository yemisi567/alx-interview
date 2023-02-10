#!/usr/bin/node
// https://swapi-api.alx-tools.com/api/films/
// using Star Wars API, prints all `characters` of a given film, in order
const request = require("request");

function getCharName(url) {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) {
        reject(error);
      }
      resolve(JSON.parse(body).name);
    });
  });
}

async function charsInFilm(urlList) {
  try {
    let name;
    for (const url of urlList) {
      name = await getCharName(url);
      console.log(name);
    }
  } catch (error) {
    console.error(error);
  }
}

const filmsURL = "https://swapi-api.alx-tools.com/api/films/3";
request(filmsURL, function (error, response, body) {
  if (error) {
    console.error(error);
  }
  const urlList = JSON.parse(body).characters;
  charsInFilm(urlList);
});
