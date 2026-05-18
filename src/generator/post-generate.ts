import * as p from '@clack/prompts';
import { execa } from 'execa';

export async function runPostGenerate(outputDir: string): Promise<void> {
  const s = p.spinner();

  try {
    s.start('Installing dependencies...');
    await execa('pnpm', ['install', '--ignore-scripts'], { cwd: outputDir });
    s.stop('Dependencies installed.');
  } catch (error) {
    s.stop('Dependency installation failed.');
    p.log.warning(
      `Could not install dependencies: ${error instanceof Error ? error.message : String(error)}`,
    );
  }

  try {
    s.start('Initializing git repository...');
    await execa('git', ['init'], { cwd: outputDir });
    await execa('git', ['add', '.'], { cwd: outputDir });
    await execa('git', ['-c', 'commit.gpgsign=false', 'commit', '-m', 'chore: initial commit'], {
      cwd: outputDir,
    });
    s.stop('Git repository initialized.');
  } catch (error) {
    s.stop('Git initialization failed.');
    p.log.warning(
      `Could not initialize git: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}
