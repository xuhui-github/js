var util=require('util');
var events=require('events');

var AudioDevice ={
  play: function(track){
  }
  ,
  stop: function(){
  }
};

function MusicPlayer(){
  this.playing=false;
  events.EventEmitter.call(this);
}

util.inherits(MusicPlayer,events.EventEmitter);

var musicPlayer=new MusicPlayer();
musicPlayer.on('play',function(track){
  this.playing=true;
  AudioDevice.play(track);
}
