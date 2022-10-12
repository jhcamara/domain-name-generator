/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let domainOptions = [];
  let pronouns = ["the", "thelast", "onemore"];
  let adjectives = ["wacky", "chubby", "small"];
  let nouns = ["geek", "undertaker", "instagrammer"];
  let domains = [".geocities.com", ".cjb.net"];

  for (let p in pronouns)
    for (let n in nouns)
      for (let a in adjectives)
        for (let d in domains)
          domainOptions.push(
            pronouns[p] + adjectives[a] + nouns[n] + domains[d]
          );
  console.log(domainOptions);

  let outputDomains = "";
  for (let domain of domainOptions) {
    outputDomains += `<li class="listItem">${domain}</li>`;
  }
  document.querySelector("#finalResults").innerHTML = outputDomains;
};
