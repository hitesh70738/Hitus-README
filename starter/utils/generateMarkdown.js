// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # [![License: MIT](https://img.shields.io/badge/License-${data.licence}-yellow.svg)](https://opensource.org/licenses/${data.licence})

  # ${data.title}

  ## Description 
  ${data.Description}
  
  ## Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Licence](#licence)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation  
  How to install:
  ${data.installation}
  
  ## Usage
  ${data.usage}
  

  ## Licence
  The licences held are <strong>${data.licence}</strong> 
  [![License: MIT](https://img.shields.io/badge/License-${data.licence}-yellow.svg)](https://opensource.org/licenses/${data.licence})

  
  

  ## Contribution
  <strong>${data.contribution}</strong>, has contributed to the project.
  

  ## Tests
  The testing comands for the project are: 
  ~~~
  ${data.test}
  ~~~

  ## Questions
  For more information reach out to me on the following: <br>
  Github: [${data.github}](www.github.com/${data.github})
  Email: [${data.email}](${data.email})
  
`
}

module.exports = generateMarkdown;


