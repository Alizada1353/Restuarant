# Restuarant

This a simple demonstration of a restaurant application with a reservation service which has some has some security bugs, dose not follow code quality and best practices.
I will have fixed some of the bugs on each commit.
finally this application won't have any issues and bugs.

## Getting Started

```bash
npm install
npm start
```

The server runs on port 3000.

- http://localhost:3000 - homepage
- http://localhost:3000/reservation - submit a reservation booking request
- http://localhost:3000/admin - view all the booking requests: basic auth login/password `admin`

The server persists using a SQLite3 database name `database.sqlite` in the site root.

## Development

This project uses EditorConfig to standerdized editor configuation.
Visit http://editorconfig.org for details.

This project uses ESlint to detect suspicious code in JavaScript files.
Visit http://eslint.org for details.

### Testing

This project uses Mocha and Chai for testing.
Visit http://mochajs.com and http://chaijs.com for details.

To execute tests:

```bash
npm test
```

### Debugging

This project uses https://www.npmjs.com/package/debug for development logging.

To start `nodemond` and enable logging:

```bash
npm run debug
```
