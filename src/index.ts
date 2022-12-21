import { exec } from 'child_process';
import { platform } from 'os';
import debug from 'debug';

const log = debug('jemalloc-check:jemallocCheck');

export function jemallocCheck(): Promise<string | false> {
  return new Promise((resolve) => {
    let command: string;
    const currentPlatform = platform();
    log(`Running on platform: ${currentPlatform}`);
    if (currentPlatform === 'linux' || currentPlatform === 'darwin') {
      // Use the find command on Linux and macOS systems
      command = 'find /usr/lib/ -maxdepth 2 -name "libjemalloc*.so*" 2>/dev/null';
      exec(command, (error, stdout) => {
        if (error) {
          log(`Command error: ${error}`);
        }
        log(`Command output: ${stdout}`);
        // Check if the command produced any output
        if (stdout) {
          // Return the first line of the output (which should be the path to the jemalloc library)
          resolve(stdout.split('\n')[0]);
        } else {
          // Return false if the command did not find the jemalloc library
          log('jemalloc library not found');
          resolve(false);
        }
      });
    } else {
      // Return false on other platforms (e.g. Windows)
      log('jemalloc not available on this platform');
      resolve(false);
    }
  });
}
