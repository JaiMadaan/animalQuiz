class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(displayWidth/2-420,displayHeight-680);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(displayWidth/2-420,displayHeight-680+40);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code1")
        this.access2.position(displayWidth/2+180,displayHeight-580);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(displayWidth/2+180,displayHeight-540);
        this.button2.style('background', 'lightgrey');

this.access3 = createInput('Code1');
this.access3.position(displayWidth/2-420,displayHeight-530);
this.access3.style('background', 'white');

this.button3 = createButton('Check');
this.button3.position(displayWidth/2-420,displayHeight-490);
this.button3.style('background', 'lightgrey');

this.access4 = createInput('Code1');
this.access4.position(displayWidth/2+180,displayHeight-420);
this.access4.style('background', 'white');

this.button4 = createButton('Check');
this.button4.position(displayWidth/2+180,displayHeight-380);
this.button4.style('background', 'lightgrey');
        
this.access5 = createInput('Code1');
this.access5.position(displayWidth/2-420,displayHeight-290);
this.access5.style('background', 'white');

this.button5 = createButton('Check');
this.button5.position(displayWidth/2-420,displayHeight-250);
this.button5.style('background', 'lightgrey');
    }

    display(){

       this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score+=2;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score+=2;
            }
        });
//add code for what happens when the third button is pressed
this.button3.mousePressed(() => {
    if(system.authenticate(accessCode3,this.access3.value())){
        this.button3.hide();
        this.access3.hide();
        score+=2;
    }
});

this.button4.mousePressed(() => {
    if(system.authenticate(accessCode4,this.access4.value())){
        this.button4.hide();
        this.access4.hide();
        score+=2;
    }
});
this.button5.mousePressed(() => {
    if(system.authenticate(accessCode5,this.access5.value())){
        this.button5.hide();
        this.access5.hide();
        score+=2;
    }
});
        

    }
}