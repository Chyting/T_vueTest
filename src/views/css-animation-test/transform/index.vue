<template>
  <div id="transform">
    <div class="transform-2d">
      <span>2D转换</span>
      <div class="transform-2d--top">
        <div>
          <p>快来看我~</p>
        </div>
        <div>
          <p>快来看我~</p>
        </div>
        <div>
          <p>快来看我~</p>
        </div>
        <div>
          <p>快来看我~</p>
        </div>
      </div>
    </div>
    <div class="tansform-3d">
      <span>3D转换</span>
      <div class="transform-3d--bottom">
        <div class="parent">
          <div class="son">
            <p>我是3D图形</p>
          </div>
        </div>
        <div class="parent1">
          <div class="son1">
            <p>我是3D图形</p>
          </div>
        </div>
        <div class="parent2">
          <div class="son2">
            <p>我是3D图形</p>
          </div>
        </div>
        <div class="parent3">
          <div class="son3">
            <p>我是3D图形</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="less" scoped>
span {
  background: linear-gradient(blue, red);
  font-size: 28px;
  background-clip: none;
  -webkit-background-clip: text;
  color: transparent;
  &:hover {
    cursor: pointer;
    background: linear-gradient(to top, blue, red);
    background-clip: none;
    -webkit-background-clip: text;
    color: transparent;
  }
}
.transform-2d--top {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 50px;
  justify-content: space-around;
  div {
    width: 200px;
    height: 200px;
    margin: 0 20px;
    cursor: pointer;
    background: radial-gradient(red, black);
    p {
      font-size: 25px;
      color: white;
      line-height: 200px;
      text-align: center;
    }
  }
  div:nth-child(1) {
    &:hover {
      transform: translate(0, 15px);
      box-shadow: 0 0 15px gray;
    }
  }
  div:nth-child(2) {
    &:hover {
      transform: rotate(30deg);
    }
  }
  div:nth-child(3) {
    &:hover {
      transform: scale(1.2, 1.2);
    }
  }
  div:last-child {
    &:hover {
      //倾斜
      transform: skew(20deg, 20deg);
    }
  }
}
.transform-3d--bottom {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 50px;
  justify-content: space-around;
  .parent3 {
    width: 200px;
    height: 200px;
    perspective: 400px;
    margin: 0 20px;
    background-color: rgb(18, 167, 167);
    .son3 {
      width: 100%;
      height: 100%;
      cursor: pointer;
      background: radial-gradient(rgb(220, 93, 236), black);
      transform: translate3d(0, 0, -60px) rotateZ(360deg);
      transition: all 0.8s;

      &:hover {
        transform: translate3d(0, 0, -15px);
      }
      p {
        font-size: 25px;
        color: white;
        line-height: 200px;
        text-align: center;
      }
    }
  }
  .parent1 {
    width: 200px;
    height: 200px;
    perspective: 400px;
    margin: 0 20px;
    background-color: rgb(21, 201, 90);
    .son1 {
      width: 100%;
      height: 100%;
      cursor: pointer;
      background: radial-gradient(rgb(10, 120, 209), black);
      transform: perspective(400px) translate3d(0, 0, -60px) rotateZ(360deg) scaleZ(1);
      transition: all 0.8s;

      &:hover {
        transform: translate3d(0, 0, -15px);
      }
      p {
        font-size: 25px;
        color: white;
        line-height: 200px;
        text-align: center;
      }
    }
  }
  .parent2 {
    width: 200px;
    height: 200px;
    perspective: 400px;
    margin: 0 20px;
    background-color: rgb(12, 15, 11);
    transition: all 0.8s;

    &:hover {
      background: rgb(202, 140, 140);
    }
    .son2 {
      width: 100%;
      height: 100%;
      cursor: pointer;
      background: radial-gradient(rgb(236, 104, 155), rgb(84, 224, 178));
      &:hover {
        transform: translateY(20px);
        transition: all 0.8s;
      }
      p {
        font-size: 25px;
        color: white;
        line-height: 200px;
        text-align: center;
      }
    }
  }
  .parent {
    width: 200px;
    height: 200px;
    perspective: 400px;
    margin: 0 20px;
    background-color: rgb(12, 15, 11);
    transition: all 0.8s;

    &:hover {
      background: rgb(202, 140, 140);
    }
    .son {
      width: 100%;
      height: 100%;
      cursor: pointer;
      background: radial-gradient(rgb(236, 104, 155), rgb(75, 183, 226));
      &:hover {
        transform: translateY(20px);
        transition: all 0.8s;
      }
      p {
        font-size: 25px;
        color: white;
        line-height: 200px;
        text-align: center;
      }
    }
  }
}
</style>