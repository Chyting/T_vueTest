<template>
  <div class="niangkou">
    <div class="mao">
      <div class="mao_head">
        <div class="mao_head--huawen">
          <div class="mao_head--huawen_1"></div>
        </div>
      </div>
      <div class="mao_erduo">
        <div></div>
        <div></div>
      </div>
      <div class="mao_eyes">
        <div class="mao_eyes--left">
          <div class="mao_eyes--yanquan">
            <div></div>
          </div>
          <div class="mao_eyes--hedding"></div>
          <div class="mao_eyes--red"></div>
        </div>
        <div class="mao_eyes--right">
          <div class="mao_eyes--yanquan">
            <div></div>
          </div>
          <div class="mao_eyes--hedding"></div>
          <div class="mao_eyes--red"></div>
        </div>
      </div>
      <div class="mao_face">
        <div class="face_huawen">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="face_huawen huawen_right">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="mao_mouse">
        <div></div>
        <div></div>
      </div>
      <div class="mao_zuiba">
        <div class="zuiba_box">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.niangkou {
  width: 100%;
  height: 100%;
  background-color: #F6F7A7;
  overflow: hidden;
}
.mao {
  width: 400px;
  height: 340px;
  margin: 100px auto;
  position: relative;
  &_head {
    width: 400px;
    height: 340px;
    position: relative;
    border: 2px solid black;
    border-radius: 50% 50% 35% 35%;
    background-color: white;
    overflow: hidden;
    z-index: 10;

    &--huawen {
      position: absolute;
      width: 180px;
      height: 160px;
      left: 110px;
      border-radius: 0% 0% 50% 50%;
      background-color: #8d8d8d;
      overflow: hidden;
      &_1 {
        width: 90px;
        height: 160px;
        border-radius: 0% 0% 0 50%;
        background-color: #F7AE6E;
      }
    }
  }
  &_erduo {
    width: 374px;
    height: 120px;
    top: -6px;
    left: 50%;
    margin-left: -187px;
    position: absolute;
    & > div:first-child {
      width: 160px;
      height: 200px;
      background-color: white;
      border: 2px solid black;
      position: absolute;
      left: -20px;
      border-radius: 4% 65% 0 60%;
      transform: rotate(-10deg);
      transition: all 1s linear;
    }
    & > div:last-child {
      width: 160px;
      height: 200px;
      background-color: white;
      border: 2px solid black;
      position: absolute;
      right: -20px;
      border-radius: 65% 4% 60% 0;
      transform: rotate(10deg);
      transition: all 1s linear;
    }
  }
  &_eyes {
    width: 300px;
    height: 60px;
    position: absolute;
    z-index: 20;
    top: 55%;
    left: 50%;
    margin-left: -150px;
    overflow: hidden;
    &--yanquan {
      width: 100px;
      height: 100px;
      border: 2px solid black;
      border-radius: 50%;
      position: absolute;
      overflow: hidden;
      & > div:first-child {
        width: 30px;
        height: 100px;
        margin-left: 33px;
        background-color: black;
        transition: all 1s linear;
      }
    }
    &--hedding {
      width: 160px;
      height: 100px;
      border: 2px solid black;
      border-radius: 50%;
      position: absolute;
      top: 48px;
      left: -30px;
      background-color: white;
      transition: all 1s linear;
    }
    &--red {
      width: 60px;
      height: 20px;
      position: absolute;
      top: 42px;
      left: 20px;
      border-radius: 50%;
      background-color: #FFC7D1;
      opacity: 0;
      transition: all 1s linear;
    }
  }
  &_face {
    width: 380px;
    height: 80px;
    position: absolute;
    top: 185px;
    left: 50%;
    margin-left: -190px;
    z-index: 20;
    // background-color: blue;
    .face_huawen > div:first-child {
      width: 30px;
      height: 10px;
      border-top: 4px #e53941 solid;
      border-radius: 47% 80% 18% 7%;
      transform: rotate(26deg);
      margin-left: 20px;
    }
    .face_huawen > div:nth-child(2) {
      width: 20px;
      height: 6px;
      margin-left: 20px;
      background-color: #e53941;
      border-radius: 50%;
      transform: rotate(25deg);
    }
    .face_huawen > div:nth-child(3) {
      width: 32px;
      height: 10px;
      border-bottom: 4px #e53941 solid;
      border-radius: 54% 5% 84% 29%;
      transform: rotate(25deg);
      margin-left: 8px;
    }
    .face_huawen > div:nth-child(4) {
      width: 26px;
      height: 20px;
      margin-left: 22px;
      margin-top: 24px;
      border-bottom: 4px #e53941 solid;
      border-radius: 30% 0% 90% 30%;
      transform: rotate(30deg);
    }
    .face_huawen > div:last-child {
      width: 22px;
      height: 10px;
      margin-left: 33px;
      margin-top: -5px;
      border-bottom: 3px #e53941 solid;

      border-radius: 0 0 46% 54%;
      transform: rotate(-19deg);
    }
  }
  &_mouse {
    width: 30px;
    height: 36px;
    position: absolute;
    top: 245px;
    left: 50%;
    margin-left: -15px;
    z-index: 20;
    & > div:first-child {
      width: 30px;
      height: 10px;
      border-bottom: 9px solid black;
      border-radius: 0 0 50% 50%;
    }
  }
  &_zuiba {
    width: 200px;
    height: 36px;
    position: absolute;
    top: 255px;
    left: 50%;
    margin-left: -100px;
    z-index: 20;
    overflow: hidden;
    .zuiba_box {
      & > div:first-child {
        width: 5px;
        height: 8px;
        margin-left: 97px;
        background-color: black;
      }
      & > div:nth-child(2) {
        width: 50px;
        height: 40px;
        border-bottom: 4px solid black;
        border-left: 4px solid black;
        border-radius: 40% 0% 20% 50%;
        margin-left: 49%;
        top: -14px;
        position: absolute;
        transition: all 1s linear;
      }
      & > div:last-child {
        width: 50px;
        height: 40px;
        border-bottom: 4px solid black;
        border-left: 4px solid black;
        border-radius: 40% 0% 20% 50%;
        margin-left: 25%;
        top: -14px;
        transform: rotateY(180deg);
        position: absolute;
        transition: all 1s linear;
      }
    }
  }
  &:hover .mao_erduo > div:first-child {
    left: -10px;
    transform: rotate(0);
    border-radius: 5% 66% 0 60%;
  }
  &:hover .mao_erduo > div:last-child {
    right: -10px;
    transform: rotate(0);
    border-radius: 65% 3% 65% 0;
  }
  &:hover .mao_eyes--yanquan > div:first-child {
    width: 38px;
    height: 100px;
    margin-left: 30px;
  }
  &:hover .mao_eyes--hedding {
    top: 36px;
  }
  &:hover .mao_eyes--red {
    top: 35;
    opacity: 1;
  }
  &:hover .zuiba_box > div:nth-child(2) {
    border-radius: 50%;
    width: 40px;
  }
  &:hover .zuiba_box > div:last-child {
    border-radius: 50%;
    width: 40px;
    margin-left: 30%;
  }
  .mao_eyes--right {
    position: absolute;
    left: 200px;
    top: 0;
  }
  .huawen_right {
    position: absolute;
    right: 0;
    top: 0;
    transform: rotateY(180deg);
  }
}
</style>