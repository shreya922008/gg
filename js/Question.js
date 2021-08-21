class Question {
  constructor(){
    this.ques1=createButton("COLD")
    this.ques2=createButton("COUGH")
    this.ques3=createButton("Difficulties while breathing")
    this.ques4=createButton("NONE OF THE FOLLOWING!!")
    this.ques=createElement("h2")
    this.next=createButton("NEXT")
    this.q2=createElement("h2")
    this.q3=createButton("Diabetes")
    this.q4=createButton("Hypertension")
    this.q6=createButton("Lung disease")
   this.q5=createButton("none of the following ")
  }
hide(){
  
}
    
   //text("Are u experiencing any of the following symptoms ? ",190,120)
display(){


 //ques1=createButton("COLD")
 this.ques1.position(250,130)

 //ques2=createButton("COUGH")
 this.ques2.position(250,170)

 //ques3=createButton("Difficulties while breathing")
 this.ques3.position(250,215)

 //ques4=createButton("NONE OF THE FOLLOWING!!")
 this.ques4.position(250,260)

 this.next.position(550,350)


 this.ques.html("Are u experiencing any of the following symptoms ?")
 this.ques.position(190,120)
 this.q3.hide()

 this.q4.hide()
 
 this.q5.hide()
 this.q6.hide()


 this.ques4.mousePressed(()=>{
   console.log("working")
   this.ques1.hide()
   this.ques2.hide()
   this.ques3.hide()
   this.ques4.hide()
   this.ques.hide()
   clear()
background(bg7)
  // image(bg7,100,100,50,50)
 })

 this.next.mousePressed(()=>{
  background(bg1)
  //clear()
  this.ques1.hide()
  this.ques2.hide()
  this.ques3.hide()
  this.ques4.hide()
  this.ques.hide()
  //Fill("yellow")
  this.q3.show()

  this.q4.show()
  
  this.q5.show()
  this.q6.show()
this.q2.html("Have you ever had any one of the following?")
//var q3=createButton("Diabetes")
//var q4=createButton("Hypertensio")
//var q5=createButton("Lung disease")
//var q6=createButton("NONE OF THE FOLLOWING!")
this.q2.position(100,10)
this.q3.position(250,130)
this.q4.position(250,170)
this.q5.position(250,215)
this.q6.position(250,260)


  
  
 

 
})
this.q6.mousePressed(()=>{
  
  background(bg7)
  q2.hide()
q3.hide()
  q4.hide()
 q5.hide()
 q6.hide()
})

  
}

}

