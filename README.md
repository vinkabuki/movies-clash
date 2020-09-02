# Movies Clash

LIVE: https://vinkabuki.github.io/movies-clash/

Simple tinderalike app for matching you with movies you would love.

## About this README

I've tried to make this readme as short and concise as possible, trying not to duplicate create-react-app bootstrap readme. I suggest you to check these [resources](#learn-more)

## Getting Started

### Quick start

For those who are familiar with development:

`git clone https://github.com/vinkabuki/movies-clash.git`  
`cd movies-clash`  
`yarn install`  
`yarn start`

### Prerequisities

The only mandatory thing you must have installed on your local machine is node package manager. At this moment the two most popular are.

- [Yarn](https://yarnpkg.com/) (In this readme I'll be using yarn commands, but feel free to use npm equivalents if you wish)
- [NPM](https://www.npmjs.com/)

Second, optional, but highly recommended thing is a git version control system

- [Git](https://git-scm.com/)

### Installing

First you must download this repository to your local machine, either using git (recommended)

`git clone https://github.com/vinkabuki/movies-clash.git`

or as a ZIP package.

Next, make sure that you're in project directory and install dependencies by running this command

`yarn install`

or if you using npm

`npm install`

### Running

The app is ready, just run this command and enjoy!

`yarn start`

#### Running app in Docker

You can also run the app in docker by using this command (you must have docker and docker-compose installed on your machine)

`docker-compose up`

## Testing

App has only very basic tests, but was thoroughly manually tested. You can run them by running this command:

`yarn test`

## Built with

Beside being bootstrapped with [Create React App](https://github.com/facebook/create-react-app), this app uses following dependencies:

### Dependencies

- [Axios](https://github.com/axios/axios) - For HTTP requests.
- [Styled-components](https://styled-components.com/) - For styling components.
- [Typescript](https://www.typescriptlang.org/) - For extending js by adding types
- [React-swipeable](https://github.com/FormidableLabs/react-swipeable) - For adding swipe functionalit

### Dev dependencies

- [Jest](https://jestjs.io/) - For testing
- [Jest Styled Components](https://reactjs.org/) - Fixes issue with styled-components and testing.
- [Eslint](https://eslint.org/) - For linting code.
- [Prettier](https://prettier.io/) - For formating code
- [Gh-pages](https://github.com/tschaub/gh-pages) - For deploying repository to github pages

## Future improvements

- [ ] Filter Total income, Average income and Last month income by range rather than exact value.

## Contributing

Feel free to contribute to this project.

## Versioning

This app uses [git](https://git-scm.com/) versioning system

## Authors

- Bartosz Chyra - [Vin Kabuki](https://github.com/vinkabuki/)

## License

This project is licensed under the MIT License.

## Learn More

- You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- Here you will find the original readme file [Create React App Readme](https://github.com/facebook/create-react-app/blob/master/README.md).
- To learn React, check out the [React documentation](https://reactjs.org/).
