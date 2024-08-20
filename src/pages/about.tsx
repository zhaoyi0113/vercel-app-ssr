// // This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()

  // // Pass data to the page via props
  console.log('hello');
  return { props: { name: 'hello' } };
}

export default function About({ name }: { name: string }) {
  return <div>About {name} </div>;
}
