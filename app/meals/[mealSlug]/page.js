export default function MealDetailsPage({params}) {
    console.log(params)
    return <main>
        <h1>Meal - {params.mealSlug}</h1>
    </main>
}