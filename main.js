/*
 __  __  _____ _____  __  __        _      _ _     
|  \/  |/ ____|  __ \|  \/  |      | |    (_) |    
| \  / | |    | |__) | \  / |______| |     _| |__  
| |\/| | |    |  ___/| |\/| |______| |    | | '_ \ 
| |  | | |____| |    | |  | |      | |____| | |_) |
|_|  |_|\_____|_|    |_|  |_|      |______|_|_.__/ 
                                                   
第一版 2016-01/25
第二版 2017-06/14
第三版 2017-08/24

SH(えすえいち):
GitHub:
http://github.com/SH-OToS/
*/

/*

MIT License

Copyright (c) 2016 OToS(SH)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

const MCPM = 0.1;

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

  function _getHealth() {
    return Entity.getHealth(getPlayerEnt());
  }

  function _setMotion(vec) {
    setVelX(getPlayerEnt(), vec.x);
    setVelY(getPlayerEnt(), vec.y);
    setVelZ(getPlayerEnt(), vec.z);
    return vec;
  }

  function _setHealth(amount) {
    Player.setHealth(amount);
    return getPlayerEnt();
  }

  function _attack(amount) {
    this._setHealth(Entity.getHealth(getPlayerEnt()) - amount);
  }

  function _teleport(pos, yaw, pitch) {
    setPosition(getPlayerEnt(), pos.x, pos.y, pos.z);
    Entity.setRot(getPlayerEnt(), yaw, pitch);
    return getPlayerEnt();
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
    setMotion: _setMotion,
    setHealth: _setHealth,
    attack: _attack,
    teleport: _teleport
  };
})
//End