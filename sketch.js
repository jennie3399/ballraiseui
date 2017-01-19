'use strict'; //This causes it to be executed in "strict" mode which prevents some unsafe syntax

var floor = Math.floor;
var stage = new Stage();
var master = true;

// manager variables
var manager;

//We need to declare each scene
var MenuScene, DemoScene, ManualScene;
var attrs;

//This function would preload any images used by p5
//Since there are no images in this project, it is empty
//You can see an example of this in the Console 4 or 10 code
function preload() {
}

//This is one of the first functions that gets called when you load the interface
//It is the function that should initialize any variables you want to access from any scene
//and it should construct the scenes in the next heirarchy level down (Such as menu scenes and custom control scenes)
function setup() {
  resizeCanvas(windowWidth, windowHeight);
  initMenuVariables();
  attrs = {fill:255, size:50, align:CENTER, style:BOLD, leading:50, strokeWeight:10, strokeColor:0}; //This is our text attributes variable
  
  //Here we create the menu scene. It a simple ButtonScene with 2 buttons with the following names and button actions
  var menuButtonNames = ["Demo", "Manual"];
  var menuButtonActions = [this.demoButtonAction.bind(this), this.manualButtonAction.bind(this)];
  this.MenuScene = new ButtonsScene("Ball Lift Menu", null, menuButtonNames, menuButtonActions, null, null, null, {size:50, leading:50});
  stage.addScene("MenuScene", this.MenuScene);
  
  //We construct all of our custom scenes and add them to the stage
  DemoScene = new DemoScene();
  stage.addScene("DemoScene", DemoScene);
  ManualScene = new ManualScene();
  stage.addScene("ManualScene", ManualScene);
  //HomingScene = new HomingScene();
  //stage.addScene("HomingScene", HomingScene);
  
  
  //Finally we transition to our menu scene once everything has been created
  stage.transitionTo('MenuScene');  
}

//Required draw function. Dont change
function draw() {
  stage.draw();
}

//This is our HomeButton action. We can reference this action from any scene we create
//It tries to reset the current scene if it contains a function named "resetScene()"
//Then it changes the state back to IDLE and transitions to the menu.
function homeAction() {
  try { 
    stage.getScene(stage.activeSceneName).resetScene(); 
  } catch(e) {
      console.log("no reset function");
  }
  manager.forceChangeState(STATE_IDLE);
  stage.transitionTo('MenuScene');
}

//The following actions are for eeach of our menu buttons
//They all change the current state and scene
function demoButtonAction() {
 
  stage.transitionTo('DemoScene');
}
function manualButtonAction() {

  stage.transitionTo('ManualScene');
}
/*function homingAction() {
  manager.forceChangeState(STATE_HOMING);
  stage.transitionTo('HomingScene');
}*/


//All these are needed to handle touch/mouse events properly
window.touchStarted = stage.touchStarted.bind(stage);
window.touchMoved = stage.touchMoved.bind(stage);
window.touchEnded = stage.touchEnded.bind(stage);
window.mousePressed = stage.mousePressed.bind(stage);
window.mouseDragged = stage.mouseDragged.bind(stage);
window.mouseReleased = stage.mouseReleased.bind(stage);
