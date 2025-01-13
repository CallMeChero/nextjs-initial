export default function BlogPostPage({ params }) {
    return (
        <main>
            <h1>Blog post 1</h1>
            <p>{ params.slug }</p>
        </main>
    )
}