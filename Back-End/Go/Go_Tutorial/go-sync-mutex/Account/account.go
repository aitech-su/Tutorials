package Account
import(
	"sync"
)

type Account struct{
	X int
    Mu sync.Mutex
}