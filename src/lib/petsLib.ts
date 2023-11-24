import PETS from "./pets.json";

//JSON is automatically parsed

export type typePets = {
	name: string;
	species: string;
	breed: string;
	age: number;
	color: string;
	slug: string,
	fun_fact: string;
	image?: string;
};

// The : tells you what we need to return
export function getPets(): typePets[] {
	return PETS;
}

export function findPetBySlug(slug: string){
	return PETS.find(pet => pet.slug === slug)
}
//map or filter?
//accepts a slug as an argument
//check if slug matches one of the slugs in the PETS array