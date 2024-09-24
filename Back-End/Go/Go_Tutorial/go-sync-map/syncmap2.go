package main

import(
  "sync"
)

type Def struct{
	m sync.Map
}

func Add(d *Def,i int){
   //m2 *sync.Map	
   d.m.Store(i,i)
}

func main(){
   var d Def
   for i:=0;i<5;i++{
	  Add(&d,i)
   }
   d.m.Range(func(key,value interface{})bool{
	  k,_:=key.(int)
	  v,_:=key.(int)
	  print(k," ",v,"\n")
	  return true
   })
}