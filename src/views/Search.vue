<template>
  <div class="container search">
    <div class="text-left">
      <ul class="filters">
        <li v-for="item in ['全部', '女装', '母婴', '美妆', '居家日用', '鞋包装饰']" :key="item.id">
          <a href="" :class="{'color-red': item == '女装'}">{{ item }}</a>
        </li>
      </ul>
      <div class="types">
        <div class="form-check">
          <input class="form-check-input" type="radio" v-model="type" name="exampleRadios" id="Radios1" value="1">
          <label class="form-check-label" for="Radios1">
            聚划算
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" v-model="type" name="exampleRadios" id="Radios2" value="2">
          <label class="form-check-label" for="Radios2">
            淘优购
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" v-model="type" name="exampleRadios" id="Radios3" value="3">
          <label class="form-check-label" for="Radios3">
            金牌卖家
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" v-model="type" name="exampleRadios" id="Radios4" value="4">
          <label class="form-check-label" for="Radios4">
            旗舰
          </label>
        </div>
        <button class="btn btn-sm text-light bg-tm-red">确定</button>
      </div>
      <div class="sort">
        <button class="btn btn-sm bg-tm-red text-light">默认</button>
        <button class="btn btn-sm">价格排序</button>
        <button class="btn btn-sm">销量排序</button>
        <button class="btn btn-sm">佣金排序</button>
      </div>
      <div class="data-list">
        <div class="row">
          <div v-for="item in dataList" :key="item.id" class="col-3">
            <div class="card">
              <div class="position-absolute">
                <label for="" class="zk_final_price">
                  领券立减
                  <p>{{ item.zk_final_price - item.reserve_price }}元</p>
                </label><br>
                <label for="" class="reserve_price">
                  去领券 >
                </label>
              </div>
              <img class="card-img-top" :src="item.pict_url" alt="Card image cap" width="100%">
              <div class="card-body">
                <h4 class="title">
                  {{ item.title }}
                </h4>
                <div class="content">
                  <span class="price">&#65509;{{ item.price }}</span>
                  <button class="float-right btn btn-sm btn-danger">立即购买</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example" class="page">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">上一页</a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">4</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">5</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">6</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">…</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">下一页</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
	data() {
		return {
			type: '',
			dataList: [
				{
					title: 'CacheCache秋新款chic韩版减龄甜美卡通休闲简约舒适短袖T恤女潮',
					pict_url:
						'https://img.alicdn.com/imgextra/i4/1041248422/O1CN012C5K7uLAUWFMjYA_!!1041248422.jpg_430x430q90.jpg',
					price: '9.9',
					zk_final_price: '44.56',
					reserve_price: '4.56',
				},
				{
					title: 'CacheCache秋新款chic韩版减龄甜美卡通休闲简约舒适短袖T恤女潮',
					pict_url:
						'https://img.alicdn.com/imgextra/i4/1041248422/O1CN012C5K7uLAUWFMjYA_!!1041248422.jpg_430x430q90.jpg',
					price: '9.9',
					zk_final_price: '44.56',
					reserve_price: '4.56',
				},
				{
					title: 'CacheCache秋新款chic韩版减龄甜美卡通休闲简约舒适短袖T恤女潮',
					pict_url:
						'https://img.alicdn.com/imgextra/i4/1041248422/O1CN012C5K7uLAUWFMjYA_!!1041248422.jpg_430x430q90.jpg',
					price: '9.9',
					zk_final_price: '44.56',
					reserve_price: '4.56',
				},
				{
					title: 'CacheCache秋新款chic韩版减龄甜美卡通休闲简约舒适短袖T恤女潮',
					pict_url:
						'https://img.alicdn.com/imgextra/i4/1041248422/O1CN012C5K7uLAUWFMjYA_!!1041248422.jpg_430x430q90.jpg',
					price: '9.9',
					zk_final_price: '44.56',
					reserve_price: '4.56',
				},
				{
					title: 'CacheCache秋新款chic韩版减龄甜美卡通休闲简约舒适短袖T恤女潮',
					pict_url:
						'https://img.alicdn.com/imgextra/i4/1041248422/O1CN012C5K7uLAUWFMjYA_!!1041248422.jpg_430x430q90.jpg',
					price: '9.9',
					zk_final_price: '44.56',
					reserve_price: '4.56',
				},
				{
					title: 'CacheCache秋新款chic韩版减龄甜美卡通休闲简约舒适短袖T恤女潮',
					pict_url:
						'https://img.alicdn.com/imgextra/i4/1041248422/O1CN012C5K7uLAUWFMjYA_!!1041248422.jpg_430x430q90.jpg',
					price: '9.9',
					zk_final_price: '44.56',
					reserve_price: '4.56',
				},
				{
					title: 'CacheCache秋新款chic韩版减龄甜美卡通休闲简约舒适短袖T恤女潮',
					pict_url:
						'https://img.alicdn.com/imgextra/i4/1041248422/O1CN012C5K7uLAUWFMjYA_!!1041248422.jpg_430x430q90.jpg',
					price: '9.9',
					zk_final_price: '44.56',
					reserve_price: '4.56',
				},
				{
					title: 'CacheCache秋新款chic韩版减龄甜美卡通休闲简约舒适短袖T恤女潮',
					pict_url:
						'https://img.alicdn.com/imgextra/i4/1041248422/O1CN012C5K7uLAUWFMjYA_!!1041248422.jpg_430x430q90.jpg',
					price: '9.9',
					zk_final_price: '44.56',
					reserve_price: '4.56',
				},
				{
					title: 'CacheCache秋新款chic韩版减龄甜美卡通休闲简约舒适短袖T恤女潮',
					pict_url:
						'https://img.alicdn.com/imgextra/i4/1041248422/O1CN012C5K7uLAUWFMjYA_!!1041248422.jpg_430x430q90.jpg',
					price: '9.9',
					zk_final_price: '44.56',
					reserve_price: '4.56',
				},
				{
					title: 'CacheCache秋新款chic韩版减龄甜美卡通休闲简约舒适短袖T恤女潮',
					pict_url:
						'https://img.alicdn.com/imgextra/i4/1041248422/O1CN012C5K7uLAUWFMjYA_!!1041248422.jpg_430x430q90.jpg',
					price: '9.9',
					zk_final_price: '44.56',
					reserve_price: '4.56',
				},
				{
					title: 'CacheCache秋新款chic韩版减龄甜美卡通休闲简约舒适短袖T恤女潮',
					pict_url:
						'https://img.alicdn.com/imgextra/i4/1041248422/O1CN012C5K7uLAUWFMjYA_!!1041248422.jpg_430x430q90.jpg',
					price: '9.9',
					zk_final_price: '44.56',
					reserve_price: '4.56',
				},
			],
		};
	},
};
</script>

<style scoped>
ul.filters {
	margin-top: 30px;
	display: inline-block;
	list-style: none;
}

ul.filters li {
	float: left;
	font-size: 18px;
	margin-right: 30px;
}

.types {
	margin-top: 20px;
}

.types .form-check-input {
	margin-top: -2px;
}

.types .form-check {
	display: inline-block;
	margin-right: 30px;
	font-size: 18px;
}

.types button {
	padding: 2px 0.6rem;
	border-radius: 0;
}

.sort {
	margin-top: 30px;
}

.sort button {
	border-radius: 0;
	padding: 3px 0.8rem;
	font-size: 18px;
	background: transparent;
}

.color-red {
	color: #d00204;
}

.data-list {
	margin-top: 20px;
}

.data-list .col-3 {
	padding: 0 10px;
}

.data-list .row {
	margin-left: -10px;
	margin-right: -10px;
}

.data-list .card {
	margin-bottom: 20px;
	height: 390px;
	cursor: pointer;
	transition: all 0.6s;
	position: relative;
}

.data-list .card:hover {
	-moz-box-shadow: 0px 5px 10px #a1a0a0;
	-webkit-box-shadow: 0px 5px 10px #a1a0a0;
	box-shadow: 0px 5px 10px #a1a0a0;
	transform: scale(1.01);
	z-index: 1000;
}

.data-list .title {
	font-size: 14px;
	color: #444443;
	line-height: 1.4;
}

.data-list .card-body {
	padding: 10px 20px;
}

.data-list .price {
	font-size: 14px;
}

.data-list .content {
	margin-top: 25px;
}

.data-list .content button {
	padding: 0;
	width: 75px;
	border-radius: 20px;
	font-size: 12px;
}

.data-list .position-absolute {
	top: 5px;
	display: inline-block;
	height: auto;
	width: auto;
	background-color: transparent;
	left: 10px;
}

.data-list .zk_final_price {
	background-color: #dc202c;
	font-size: 14px;
	padding: 8px;
	width: 76px;
	text-align: center;
	color: #fff;
	border-bottom: 2px dashed #fff;
}

.data-list .zk_final_price p {
	font-size: 18px;
	margin-top: 5px;
	font-weight: 600;
	text-align: center;
}

.data-list .reserve_price {
	background-color: #805fb0;
	width: 76px;
	padding: 5px;
	font-size: 14px;
	color: #fff;
	text-align: center;
}

nav.page {
  margin-top: 20px;
  margin-bottom: 60px;
}

.pagination {
  justify-content: center;
}

.pagination .page-item {
  margin: 0 2px;
}

.pagination .page-item a {
  color: #7d7d7d;
}

.page-item.active .page-link {
  background-color: #E3004D !important;
  border-color: #E3004D;
  color: #FFF;
}
</style>


