package main

import(
  "sync"
  "time"
  "mutex/APIs"
  "mutex/Account"	
)

var wg sync.WaitGroup
var count=1
var lock1 sync.Map
var lock2 map[int]*sync.Mutex
var lock3 sync.Map
var muptr *sync.Mutex
/* slice/arr?*/
/*func printx(acc *Account.Account,i int)(){
  acc.Mu.Lock()	
  time.Sleep(1*time.Second)
  print(count," ",acc.X,"\n")
  count++
  acc.Mu.Unlock()
  wg.Done()
}*/

/*map*/
func printx(mymap_value Account.Account,i int)(){
  mymap_value.Mu.Lock()	
  time.Sleep(1*time.Second)
  print(count," ",mymap_value.X,"\n")
  count++
  mymap_value.Mu.Unlock()
  //wg.Done()
}
func send(mymap_value Account.Account)(string){
  if(mymap_value.X%2==1){
    return "commit"
  }else{
    return "abort"
  }
}
func begin(mymap_value Account.Account,i int){
    //mymap_value.X
    value, _:=lock3.Load(mymap_value.X)
    value.(*sync.Mutex).Lock()
    //lock2[mymap_value.X].Lock()
    msg:=send(mymap_value)
    if(msg=="commit"){
      commit(mymap_value)
    }else{
      abort(mymap_value)
    }
}

func commit(mymap_value Account.Account){
  time.Sleep(1*time.Second)
  print("odd"," ",mymap_value.X,"\n")
  value, _:=lock3.Load(mymap_value.X)
  value.(*sync.Mutex).Unlock()
  //lock2[mymap_value.X].Unlock()
  wg.Done()
}

func abort(mymap_value Account.Account){
  time.Sleep(1*time.Second)
  print("even"," ",mymap_value.X,"\n")
  value, _:=lock3.Load(mymap_value.X)
  value.(*sync.Mutex).Unlock()
  //lock2[mymap_value.X].Unlock()
  wg.Done()
}

func main(){
  /*slice*/
  /*arr :=make([] Account.Account,100)
  for i:=0;i<100;i++{
	  arr[i].x=i
  }
  APIs.Create(100,&arr) 
  for i:=0;i<100;i++{
    go printx(&acc[i],i)
    wg.Add(1)
  } 
  for i:=0;i<100;i++{
    go printx(mymap[i],i)
    wg.Add(1)
  } 
  wg.Wait()*/

  /*map*/
  lock2=make(map[int]*sync.Mutex)
  //lock3:=sync.Map{}
  mymap :=make(map[int]Account.Account)
  for i:=0;i<100000;i++{
    APIs.Create_Map(mymap,i,&lock1,&lock2,muptr)
  }
  APIs.CreateLocks(mymap,&lock3)
  for key, value:= range mymap{
    wg.Add(1)    
    //go printx(value,key)
    go begin(value,key)
  }
  wg.Wait()
}