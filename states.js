
var IDLE = {
  id: 0,
  master: {
    values: {
      
    },
    events: {
      
    }
  },
  tablet: {
    values: {
      
    },
    events: {
      
    }
  }
};
var STATE_IDLE = 0;
var BALLRAISE = {
  id: 1,
  master: {
    values: {
      stepperPosition: new HardwareValue(1, 0, Manager.TYPE_UINT32)
    },
    events: {
      demo: function demo() { manager.sendEvent(0, 1); },
      liftLeftWall: function liftLeftWall() { manager.sendEvent(1, 1); },
      liftRightWall: function liftRightWall() { manager.sendEvent(2, 1); },
      lowerLeftWall: function lowerLeftWall() { manager.sendEvent(3, 1); },
      lowerRightWall: function lowerRightWall() { manager.sendEvent(4, 1); },
      leftWall: function leftWall() { manager.sendEvent(5, 1); },
      rightWall: function rightWall() { manager.sendEvent(6, 1); }
    }
  },
  tablet: {
    values: {
      
    },
    events: {
      finishedAction: new LocalEvent(1, 0)
    }
  }
};
var STATE_BALLRAISE = 1;
var OFF = {
  id: 2,
  master: {
    values: {
      
    },
    events: {
      
    }
  },
  tablet: {
    values: {
      
    },
    events: {
      
    }
  }
};
var STATE_OFF = 2;

var STATES = {
  IDLE: IDLE,
  BALLRAISE: BALLRAISE,
  OFF: OFF
};
var manager = new Manager([IDLE, BALLRAISE, OFF]);
