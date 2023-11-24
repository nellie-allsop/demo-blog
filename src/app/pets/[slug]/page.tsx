export default function Page({ params }: { params: { slug: string } }) {
	return <h1>These are the params: {params.slug}</h1>;
}
