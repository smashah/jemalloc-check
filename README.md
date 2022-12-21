# jemalloc-check

![npm](https://img.shields.io/npm/v/jemalloc-check)
![chatgpt](https://img.shields.io/badge/ChatGPT-Made%20with%20assistant-brightgreen)

A simple utility for checking whether [`jemalloc`](https://github.com/jemalloc/jemalloc) is installed on a system.

## Installation

```bash
npm install jemalloc-check
```

## API & Usage

### `jemallocCheck()`

Returns a promise that resolves to the file path of the stable version of jemalloc if it is available, or false if it is not available. The promise will resolve with false on Windows systems, as jemalloc is a Linux/Unix tool.

```js
const { jemallocCheck } = require('jemalloc-check');

jemallocCheck().then((result) => {
  if (result) {
    console.log(`jemalloc is installed at ${result}`);
  } else {
    console.log('jemalloc is not installed');
  }
});
```

## Command-line usage

You can run the checker with the following one liner:

```bash
> npx jemalloc-check
```

Or ou can also use jemalloc-check as a command-line tool by installing it globally:

```bash
> npm install -g jemalloc-check
```

Then, you can run the jemalloc-check command to check for the presence of jemalloc on the system:

```bash
> jemalloc-check
```

## Debugging

To enable debug logs, set the `DEBUG` environment variable to `jemalloc-check:*` before running the `jemalloc-check` command or calling the `jemallocCheck` function:

```bash
DEBUG=jemalloc-check:* jemalloc-check
```

```js
process.env.DEBUG = 'jemalloc-check:*';
const jemallocCheck = require('jemalloc-check');

jemallocCheck().then((result) => {
  if (result) {
    console.log(`jemalloc is installed at ${result}`);
  } else {
    console.log('jemalloc is not installed');
  }
});
```


## License

MIT

## Credits

This package was created with the help of [Assistant](https://openai.com/blog/assistant/)
