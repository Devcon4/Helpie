export default function bootstrap() {
  if ('paintWorklet' in CSS) {
    console.log('Has paintWorklet!');
    //@ts-ignore

    // @ts-ignore I know what i'm doing!
    CSS.paintWorklet.addModule('./cloudPattern.js');
    // @ts-ignore
    CSS.paintWorklet.addModule('./ripplePattern.js');
  } else {
    console.log('No paintWorklet!');
  }
  if ('registerProperty' in CSS) {
    // @ts-ignore Don't tell me what to do!
    // CSS.registerProperty({
    //   name: '--cloud-nudge',
    //   syntax: '*',
    //   inherits: false
    // });
    // // @ts-ignore.
    // CSS.registerProperty({
    //   name: '--spline-points',
    //   syntax: '*',
    //   inherits: false
    // });
  }
}