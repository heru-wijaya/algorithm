package main

import "fmt"

// BubbleSort algorithm
func BubbleSort(items []int) []int {

	totalItems := len(items)

	for i := 0; i < totalItems; i++ {

		for j := 0; j < (totalItems - 1 - i); j++ {
			if items[j] > items[j+1] {
				items[j], items[j+1] = items[j+1], items[j]
			}
		}
	}

	return items
}

func main() {
	items := []int{3, 1, 4, 2}
	sortedItems := BubbleSort(items)
	fmt.Println(sortedItems)
}
