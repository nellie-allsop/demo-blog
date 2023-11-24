import { getPets, typePets } from "../../lib/petsLib"
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Adoption r us",
	description: "You can adopt pets here",
};

type petSearchQuery = {
  sortByAge: string
}

function comparePets(a: typePets , b: typePets) {
  if (a.age < b.age) {
      return -1;
      // swapping
  } else if (a.age > b.age) {
      return 1;
      // swapping
  } else {
      return 0
      // not getting swapped
  }
}

export default function Page({searchParams} : {searchParams : petSearchQuery}) {
  const pets = getPets()

  let sortedPets = [...pets]

  if (searchParams.sortByAge == 'asc') {
    sortedPets.sort(comparePets).reverse()
  } else if
      (searchParams.sortByAge == 'desc') {
sortedPets.sort(comparePets)
      }


	return (
		<div className="flex flex-col items-center">
			<h1 className="text-lg p-8">Checkout the pets:</h1>
      <br/>
      <div className="flex flex-col items-center">
<Link href='/pets'>Remove the sort</Link>
<Link href='/pets?sortByAge=asc'>Sort by ascending age</Link>
<Link href='/pets?sortByAge=desc'>Sort by descending age</Link>
      </div>
      <br/>
			{sortedPets.map((pet, index) => {
				return (
          <div key={index}>
          <Link href={`/pets/${pet.name}`}>{pet.name}</Link>;
          </div>
        )

			})}
		</div>
	);
}
