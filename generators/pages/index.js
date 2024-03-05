module.exports = (plop) => {
  plop.setGenerator('pages', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/views/pages/{{pascalCase name}}Page/index.tsx',
        templateFile: 'templates/Page.tsx.hbs'
      },
      {
        type: 'add',
        path: '../../src/views/pages/{{pascalCase name}}Page/test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })
}
