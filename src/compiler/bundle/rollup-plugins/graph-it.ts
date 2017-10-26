export default function graphIt() {

  return {
    name: 'graphItPlugin',
    resolveId(importee: string, importer: string) {
      console.log(`${importer} imports ${importee}`);
    },
    load(sourcePath: string) {
      console.log(sourcePath);
    }
  };
}
