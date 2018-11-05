<template>
  <footer class="footer">
    <div class="container">
      <ul class="text-center">
        <li v-for="link in friendLink" :key="link.id">
          <a :href="link.url" target="_blank" rel="noopener noreferrer">
            {{ link.bShow }}
          </a>
        </li>
      </ul>
      <p class="mt-3">
        <a href="#">关于我们</a>
        <a href="#">联系我们</a>
        <a href="#">广告合作</a>
        <a href="#">商务合作</a>
        <a href="#">友情链接</a>
      </p>
      <p class="mt-2 text-center">{{ config.record }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      friendLink: [],
      config: ''
    }
  },
  created () {
    this.getFriendLink()
    this.getConfig()
  },
  methods: {
    getFriendLink() {
      this.$axios.post('homePage/friendLink?url=www.test.com').then((response)=>{
        this.friendLink = response.data.data
      })
    },
    // 获取配置信息
    getConfig () {
      this.$axios.post('homePage/config?url=www.test.com').then((response)=>{
        this.config = response.data.data
      })
    }
  },
}
</script>



<style scoped>
.footer {
	background-color: #E3004D;
  height: 140px;
  font-size: 14px;
  padding: 2.5rem 0;
  color: #FFF;
}

a {
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
  width: 400px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin:  0 auto;
}
</style>
