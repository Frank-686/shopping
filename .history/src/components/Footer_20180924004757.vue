<template>
  <footer class="footer">
    <div class="container">
      <ul class="text-center">
        <li>百度</li>
        <li>阿里云</li>
        <li>腾讯云</li>
        <li>搜狗</li>
        <li>360搜索</li>
        <li>淘宝联盟</li>
        <li>品诺官网</li>
      </ul>
      <p class="mt-3">
        <a href="">关于我们</a>
        <a href="">关于我们</a>
        <a href="">关于我们</a>
        <a href="">关于我们</a>
        <a href="">关于我们</a>
      </p>
      <p class="mt-2">@品诺商城 京ICP备11007961号-1 <span class="ml-2">京公网安备110105018822</span></p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
	background-color: #E3004D;
  height: 140px;
  font-size: 14px;
  padding: 2.5rem 0;
  color: #FFF;
}

ul {
  list-style: none;
  display: inline-flex;
  justify-content: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid #D991A3;
}

ul li {
  padding: 0 10px;
  border-right: 1px solid #D991A3;
}

ul li:first-child {
  padding-left: 0;
}

ul li:last-child {
  border-right: none;
}

p {
  width: 450px;
  text-align: left;
  margin:  0 auto;
}
</style>
