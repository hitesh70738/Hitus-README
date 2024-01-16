// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ---
  ## Description 
  ${data.Description}
  ---
  ## Contents
  - [Installation] #installation
  - [Usage] #usage
  - [Licence] #licence
  - [Contribution] #contributing
  - [Tests] #tests
  - [Questions] #questions
  ---
  # Installation  
  ${data.installation}
  ---
  # Usage
  ${data.usage}
  To add an image you need to use the following command:
  
  ---
  # Licences
  The licences held are ${data.licence}
  ---
  # Contribution
  ${data.contribution}, has contributed to the project.
  ---
  # Tests
  The testing comands for the project are: ${data.test}
  ---
  # Questions
  For more information reach out to me on the following:
  Github: [${data.github}](www.github.com/${data.github})
  Email: [${data.email}](${data.email})
  
`
}

module.exports = generateMarkdown;


