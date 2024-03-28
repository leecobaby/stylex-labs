import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  button: {
    backgroundColor: {
      default: 'lightblue',
      ':hover': 'blue',
      ':active': 'darkblue',
    },
  },
});

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="text-yellow-500 text-center">Stylex Labs</h1>
        <button {...stylex.props(styles.button)}>Active</button>
      </div>
    </div>
  );
}
