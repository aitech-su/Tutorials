package main

import(
   "os"
   "log"
   "encoding/json"	
)

type Person struct{
   Name string
   Id string
}

func Write(p map[int]Person)(error){
     file, err:=os.OpenFile("file.json",os.O_WRONLY|os.O_CREATE|os.O_TRUNC,0644)
     if err !=nil{
       return err
     }
     defer file.Close()

     encoder:=json.NewEncoder(file)
     if err:=encoder.Encode(p);err!=nil{
       return err
     }

    return nil
}

func Read()(map[int]Person,error){
  file, err:=os.Open("file.json")
  if err!=nil{
     return nil,err
  }
  defer file.Close()

  var p_tmp map[int]Person
  decoder:=json.NewDecoder(file)
  if err:=decoder.Decode(&p_tmp);err!=nil{
      return nil, err
  }

  return p_tmp,nil
}

func main(){
   	p1:=make(map[int]Person)
    /*p1[1]=Person{
      Name: "A",
      Id:"a",
    }
    p1[2]=Person{
      Name: "B",
      Id:"b",
    }
    p1[3]=Person{
      Name: "C",
      Id:"c",
    }
    Write(p1)
    for key := range p1{
       delete(p1,key)  
    }
    for key, value:= range p1{
      print(key," ",value.Name," ",value.Id,"\n")
    }*/
    //Write(p1)
    p1, err:=Read()
    if err!=nil{
      log.Fatal(err)
    }
    for key, value:= range p1{
      print(key," ",value.Name," ",value.Id,"\n")
    }
}