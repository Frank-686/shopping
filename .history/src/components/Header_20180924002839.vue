<template>
  <div class="header">
    <header>
      <div class="top-header">
        <p>
          淘宝、天猫购物之前记得来领券哦,你的网管只是比别人多操作一步，就可以比别人少花好多钱
        </p>
      </div>
      <div class="container" style="position: relative;height: 168px;">
        <div class="row">
          <div class="col-6 text-left mt-4">
            <img class="" src="http://www.pinnuo888.cn/static/images/icons/logo.jpg" width="180px" alt="">
          </div>
          <div class="col-6 mt-5">
            <div class="d-flex search">
              <form class="form-inline">
                <input class="form-control form-control-sm" type="search" placeholder="搜索" aria-label="Search">
                <button class="btn btn-sm pl-3 pr-3" type="submit">搜索</button>
              </form>
            </div>
          </div>
        </div>
        <div class="row menu">
          <div class="col">{{ $route }}
            <button class="btn btn-sm btn-default all-categories">所有分类</button>
            <ul class="">
              <li v-for="item in menu" :key="item.id">
                {{ item.show }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
	name: 'HeaderView',
	data: function() {
		return {
			menu: [
				{ show: '首页', url: '', remark: '' },
				{ show: '8.8元包邮', url: '', remark: '' },
				{ show: '20元封底', url: '', remark: '' },
				{ show: '大额券', url: '', remark: '' },
				{ show: '特价好货', url: '', remark: '' },
			],
		};
	},
	methods: {
		name() {},
	},
	watch: {
		data(newValue, oldValue) {},
	},
};
</script>
<style scoped>
header {
	height: 200px;
	border-bottom: 2px solid #e3004d;
}
.top-header {
	letter-spacing: 0.9rem;
	height: 30px;
	line-height: 30px;
	font-size: 14px;
	color: #fff;
	font-weight: 600;
	background: -webkit-linear-gradient(left, #dd664a, #d94748); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(right, #dd664a, #d94748); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(right, #dd664a, #d94748); /* Firefox 3.6 - 15 */
	background: linear-gradient(to right, #dd664a, #d94748); /* 标准的语法（必须放在最后） */
}

.d-flex {
	justify-content: flex-end;
}

.search input {
	width: 300px;
	line-height: 20px;
	border-width: 1px;
	border-color: #E3004D;
	border-radius: 0;
}

.search button {
	border-radius: 0;
	border-width: 1px;
	border-color: #E3004D;
	color: #fff;
	font-weight: 600;
	background-color: #E3004D;
}

.menu {
	position: absolute;
	height: 40px;
	bottom: 0;
}

.menu ul {
	padding-top: 10px;
	display: inline-flex;
	justify-content: center;
}

.menu ul li {
	margin-right: 40px;
	color: #010101;
	font-size: 18px;
}

.all-categories {
	padding-bottom: 0;
	padding-top: 5px;
	height: 40px;
	font-size: 18px;
	margin-right: 40px;
	width: 200px;
	margin-top: 0px;
	color: #fff;
	background-color: #e3004d;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
}
</style>


