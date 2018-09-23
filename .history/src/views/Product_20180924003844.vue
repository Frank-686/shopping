<template>
  <div class="container product pt-3">
    <label for="" class="float-left">您现在的位置：</label>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav>
  </div>
</template>
<script>
export default {
	data() {
		return {};
	},
	methods: {
		name() {},
	},
};
</script>

<style scoped>
.product {
  color: #4D4C59;
}
.breadcrumb {
  padding: 0;
	background-color: transparent;
}
</style>

