/*
  ___   ______         _______
 /   \ |      |  ___  /   ___/
|     ||_    _| /   \ (   \_ 
|  O  |  |  |  |  O  | \__  \
|     |  |  |  |     | /  \  \
!     !  |  |   \___/  \      |
 \___/   l__j           \_____/
  ____  ____  ____           
 /    ||    \l    j          
|  o  ||  o  )|  T           
|     ||   _/ |  |           
|  _  ||  |   |  |           
|  |  ||  |   j  l           
l__j__jl__j  |____j  
  
*/

/*

第一版 2016-01/25
第二版 2017-06/14
第三版 2017-08/24

SH(えすえいち):
GitHub:
http://github.com/SH-OToS/

SH:
GitHub:http://github.com/SH-OToS/

sanaehururu1200:
Twitter:http://twitter.com/OToS_SH/
Google+:https://plus.google.com/u/0/+%E3%81%9F%E3%81%91%E3%81%AF%E3%82%8B0221/

*/

const Vector3 = (function (x, y, z) {
  this.x;
  this.y;
  this.z;

  function _getX() {
    return this.x;
  }

  function _getY() {
    return this.y;
  }

  function _getZ() {
    return this.z;
  }

  function _multiply(number) {
    return new Vector3(this.x * number, this.y * number, this.z * number);
  }

  function _divide(nnumber) {
    return new Vector3(this.x / number, this.y / number, this.z / number);
  }

  function _ceil() {
    return new Vector3(Math.ceil(this.x), Math.ceil(this.y), Math.ceil(this.z))
  }

  function _floor() {
    return new Vector3(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z))
  }

  function _round() {
    return new Vector3(Math.round(this.x), Math.round(this.y), Math.round(this.z))
  }

  function _abs() {
    return new Vector3(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z))
  }

  function _getRight() {
    return this.x;
  }

  function _getUp() {
    return this.y;
  }

  function _getForward() {
    return this.z;
  }

  function _getSouth() {
    return this.x;
  }

  function _getWest() {
    return this.z;
  }

  return {
    getX: _getX,
    getY: _getY,
    getZ: _getZ,
    multiply: _multiply,
    divide: _divide,
    ceil: _ceil,
    floor: _floor,
    round: _round,
    abs: _abs,
    getRight: _getRight,
    getUp: _getUp,
    getForward: _getForward,
    getSouth: _getSouth,
    getWest: _getWest
  };
});


const SinglePlayer = (function () {
  this.x = Player.getX();
  this.y = Player.getY();
  this.z = Player.getZ();

  function _getEntity() {
    return getPlayerEnt();
  }

  function _getX() {
    return this.x;
  }

  function _getY() {
    return this.y;
  }

  function _getZ() {
    return this.z;
  }

  function _setGamemode(number) {
    setGamemode(number);
    return true;
  }

  function _isSurvival() {
    return getGamemode() = 0 ? true : false;
  }

  function _isCreative() {
    return getGamemode() = 1 ? true : false;
  }

  function _isAdventure() {
    return getGamemode() = 2 ? true : false;
  }

  function _isSpectator() {
    return getGamemode() = 3 ? true : false;
  }

  function _getVector3() {
    return new Vector3(this.x, this.y, this.z);
  }

  function getHealth() {
    return Entity.getHealth(this._getEntity());
  }

  function _setMotion(vec) {
    setVelX(getPlayerEnt(), vec.x);
    setVelY(getPlayerEnt(), vec.y);
    setVelZ(getPlayerEnt(), vec.z);
    return vec;
  }

  function setHealth(amount) {
    Player.setHealth(amount);
    return this._getEntity();
  }

  return {
    getEntity: _getEntity,
    getX: _getX,
    getY: _getY,
    getZ: _getZ,
    isSurvival: _isSurvival,
    isCreative: _isCreative,
    isAdventure: _isAdventure,
    isSpectator: _isSpectator,
    getVector3: _getVector3,
    getHealth: _getHealth,
    setHealth: _setHealth,
    setMotion: _setMotion
  };
})