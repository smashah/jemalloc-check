const test = require('ava');
const { platform } =  require('os');
const { jemallocCheck } = require('./dist/index.js');

test('finds jemalloc on Linux', async (t) => {
  if (platform() !== 'linux') {
    t.log('Skipping test: not running on Linux');
    t.pass();
    return;
  }

  execSync('apt-get install -y libjemalloc2');
  const result = await jemallocCheck();
  console.log("🚀 ~ file: test.js:13 ~ test ~ result", result)
  t.true(result.endsWith('libjemalloc.so.2'));
});

test('does not find jemalloc on macOS', async (t) => {
  if (platform() !== 'darwin') {
    t.log('Skipping test: not running on macOS');
    t.pass();
    return;
  }

  const result = await jemallocCheck();
  t.false(result);
});

test('does not find jemalloc on Windows', async (t) => {
  if (platform() !== 'win32') {
    t.log('Skipping test: not running on Windows');
    t.pass();
    return;
  }

  const result = await jemallocCheck();
  t.false(result);
});

test('does not find jemalloc on other platforms', async (t) => {
  if (platform() === 'linux' || platform() === 'darwin' || platform() === 'win32') {
    t.log('Skipping test: running on Linux, macOS, or Windows');
    t.pass();
    return;
  }

  const result = await jemallocCheck();
  t.false(result);
});