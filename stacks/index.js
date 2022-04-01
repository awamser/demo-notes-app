// import MyStack from './MyStack';
import StorageStack from './StorageStack';

export default function main(app) {
  new StorageStack(app, 'storage');
}

// export default function main(app) {
//   // Set default runtime for all functions
//   app.setDefaultFunctionProps({
//     runtime: 'nodejs14.x'
//   });

//   new MyStack(app, 'my-stack');

//   // Add more stacks
// }
