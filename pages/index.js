
export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  return {
    props: {},
  };
}