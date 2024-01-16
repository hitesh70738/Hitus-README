// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description 
  ${data.Description}
  
  ## Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Licence](#licence)
  - [Contribution](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation  
  How to install:
  ${data.installation}
  
  ## Usage
  ${data.usage}
  

  ## Licences
  The licences held are <strong>${data.licence}</strong> 
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  

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


