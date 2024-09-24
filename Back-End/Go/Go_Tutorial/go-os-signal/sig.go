package main

import(
   "time"
   "os"
   "os/signal"
   "syscall"
)
func Add(i int)(int){
    i+=5
	return i
}

func main(){
	i:=5
	c:=make(chan os.Signal,1)
	signal.Notify(c, os.Interrupt, syscall.SIGINT,syscall.SIGTERM)

	go func(){
		<- c
		i:=Add(i)
        print(i,"\n")
		os.Exit(1)
	}()

	time.Sleep(1000*time.Second)
}