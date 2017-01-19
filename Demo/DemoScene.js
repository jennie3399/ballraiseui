function DemoScene() {
	
  /////////////////////////////// BASIC SETUP ///////////////////////////////
	
  Scene.call(this); //Necessary for all custom scenes calls the default Scene constructor
  
  attrs = {size:25, leading:25}; //Redefining the size of text for smaller text fields
  
  //Setting maximum variables
  this.maxDistance = 200;
  
  //Creating the colorful "Mondrian" border and adding it to the scene
  this.bgBorder = new BackgroundBorder();
  this.addActor(this.bgBorder);
  
  //Creating and adding the HomeButton and giving it the homeAction defined in sketch.js
  this.homeButton = new HomeButton(homeAction);
  this.addActor(this.homeButton);
  
  //Creating and adding the title text
  this.title = new Label(windowWidth/2, windowHeight*0.16, "Move the Arm", {size:70, leading:50, fill:YELLOW});
  this.addActor(this.title);
  
  /////////////////////////////// BUTTONS /////////////////////////////////
  
  // Create custom buttons to add to scene using "Textbutton" constructor
  // function TextButton(x pos, y pos, width, height, bgColor, text, textattrs, action, shape, nudge) {
  
  this.DemoButton = new TextButton(
                  windowWidth*0.25 - 100, // x position
									windowHeight*0.4 - 50, // y position
									300, // width of button
									200, // height of button
									BLUE, // color of button
									"Demo the ball lifter", // text on button
									attrs, // text attributes
									this.demoAction.bind(this), // action to call
									'rect'); // shape
  this.addActor(this.DemoButton); // Adds button "actor" to the scenes
	
}

_inherits(DemoScene, Scene); // NECESSARY, DO NOT FORGET - PUT AT END OF CONSTRUCTOR

///////////////////////////////// BUTTON SUB FUNCTIONS //////////////////////////////////


// Turns on the demo to run the mechnsim
DemoScene.prototype.demoAction = function() {
 BALLRAISE.master.events.demo();
 console.log("move up");
}
// goes home
DemoScene.prototype.homeAction = function() {
  
  stage.transitionTo('ConsoleInstructionScene');
  console.log("go home");
}//steps

/* Changes the value "dynamicPosition" on the arduino side in reaction to the slider changing

DemoScene.prototype.dynamicChangePosition = function(dynamicSlidePosition) {
  console.log("Curret value of Dslider is " + dynamicSlidePosition);
   console.log("Curret value of Dslider is " + BALLRAISE.master.values.dynamicPosition);
  manager.change(BALLRAISE.master.values.dynamicPosition, dynamicSlidePosition);
    //console.log("Curret value of the variable is " + PERPETUALBALLEVENTTT.master.values.dynamicPosition);
  
} */
//This happens when the tablet event finishedAction() is called by the Arduino
//It simply resumes the scene
DemoScene.prototype.finishedAction = function() {
  stage.resume();
}