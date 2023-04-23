export default function ConsoleButton({ prop }: { prop: any }) {
  return <button onClick={() => console.log(prop)}>Console</button>;
}
