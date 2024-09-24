package APIs
import(
	"sync"
	"mutex/Account"
)

/*type Account struct{
	x int
    mu sync.Mutex
}*/


func Create(num int,arr *[]Account.Account)(){
	for i:=0;i<num;i++{
		(*arr)[i].X=i
	}
	return 
}

func Create_Map(mymap map[int]Account.Account,i int,lock1 *sync.Map,lock2 *map[int]*sync.Mutex,muptr *sync.Mutex){
   mymap[i]=Account.Account{
	  X: i,
	  Mu: sync.Mutex{},
   }
   lock1.Store(i,&sync.Mutex{})
   ptr:=new(sync.Mutex)
   (*lock2)[i]=ptr
   //muptr =new(sync.Mutex)
}

func CreateLocks(mymap map[int]Account.Account,lock3 *sync.Map)(){
	var wg sync.WaitGroup
	for k:=range mymap{
	  wg.Add(1)
	  go func(k int){
		(*lock3).Store(k,&sync.Mutex{})
		wg.Done()
	  }(k)
	}
	wg.Wait()
  }