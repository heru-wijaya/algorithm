package main

import "fmt"

// GetCharacterIndexByTerm a simple implementation linear search algorithm
func GetCharacterIndexByTerm(collection []string, term string) (index int) {
	for index, value := range collection {
		if value == term {
			return index
		}
	}
	return index
}

func main() {
	charCollection := []string{"a", "b", "c", "d"}
	charIndex := GetCharacterIndexByTerm(charCollection, "b")
	fmt.Println(charIndex)
}
