import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  button: {
    backgroundColor: {
      default: 'lightblue',
      ':hover': 'blue',
      ':active': 'darkblue',
    },
    border: {
      default: '1px solid black',
      ':hover': '2px solid black',
      ':active': '3px solid black',
    },
    borderRadius: '4px',
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
      <div className="container p-2">
        <h1 className="text-yellow-500 text-center">Stylex Labs</h1>
        <div className="flex justify-center py-4">
          <button {...stylex.props(styles.button)}>Active</button>
        </div>
      </div>
    </div>
  );
}
