import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';


//npx nx workspace-generator prisma-generator --name=Test --dry-run

export default async function (tree: Tree, schema: any) {
  await libraryGenerator(tree, { name: schema.name });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
