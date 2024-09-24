package main

import(
   "fmt"
)
type Speaker interface{
	Speak()string
    //Speak()int32
}

type Cat struct{
   Name string
}

func (c Cat) Speak() string {
    return "Meow!"
}

type Dog struct{
   Name string
}

func (d Dog) Speak() string {
    return "Woof!"
}

/*Polymorphism*/
func Echo(speaker Speaker) {
    fmt.Println(speaker.Speak())
}

/*The PrintAnything function can accept any type of value, 
  from ints to custom structs, thanks to the empty interface.*/
func PrintAnything(value interface{}) {
    fmt.Println(value)
}

func main(){
	d := Dog{Name: "Rex"}
	c := Cat{Name: "Whiskers"}
	
	Echo(d)  // Outputs: Woof!
	Echo(c)  // Outputs: Meow!	
}