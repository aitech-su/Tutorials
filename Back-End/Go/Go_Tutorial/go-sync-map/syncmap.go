package main

import(
   //"os"
   "fmt"
   "sync"	
)

type Def struct{
	x int
	y int
}

func SyncMapToMap(syncm sync.Map)map[int]Def {
   m:=make(map[int]Def)
   syncm.Range(func (key,value interface{}) bool{
	  k,ok:=key.(int)
	  if !ok{
		print("Type Error")
		return true
	  }
	  v,ok:=value.(Def)
	  if !ok{
		print("Type Error")
		return true
	  }
	  m[k]=v
	  return true
   })
   return m
}

func MapToSyncMap(m map[int]Def) sync.Map{
	 var syncm sync.Map
     for k,v :=range m{
        syncm.Store(k,v)
	 }
	 return syncm
}

func main(){
	var m sync.Map
	//m2:=make(map[int]int)
	m.Store(1,Def{x:1,y:1})
	m.Store(2,Def{x:2,y:2})
	m.Store(3,Def{x:3,y:3})
	m.Store(4,Def{x:4,y:4})
	m.Store(5,Def{x:5,y:5})
	m.Store(6,Def{x:6,y:6})
	m.Range(func (k,v interface{})bool{
		fmt.Println(k,v)
		return true
	})
	print("---","\n")
	m.Delete(6)
	m.Range(func(k,v interface{}) bool{
		fmt.Println(k,v)
		return true
	})
	print("---","\n")
	var wg sync.WaitGroup
	for i:=1;i<=5;i++{	
	   wg.Add(1)	
	   go func(i int){
		 m.Store(i,Def{x:i+10,y:i+10})
		 wg.Done()
	   }(i)
	}
	wg.Wait()
	m.Range(func(k,v interface{}) bool{
		fmt.Println(k,v)
		return true
	})
	print("---","\n")
	m2:=SyncMapToMap(m)
	length:=len(m2)
	print("Map m2 長度"," ",length,"\n")
	print("---","\n")
	for k,v:=range m2{
		print(k," (",v.x,",",v.y,")","\n")
	}
	print("---","\n")
	m3:=MapToSyncMap(m2)
	m3.Range(func(k,v interface{}) bool{
		fmt.Println(k,v)
		return true
	})
	print("---","\n")
}