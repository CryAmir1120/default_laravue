<script setup>
import { ref, computed } from "vue";
import { Link } from "@inertiajs/vue3";

const props = defineProps({
  data: Object,
  totalVisible: {
    type: Boolean,
    default: false,
  },
});

const links = computed(() => {
  if (props.data?.links) {
    return props.data?.links.map((item) => {
      if (item.label.includes("&raquo;")) {
        item.label = item.label.replace("次へ &raquo;", "»");
      }
      if (item.label.includes("&laquo;")) {
        item.label = item.label.replace("&laquo; 前へ", "«");
      }
      return item;
    });
  }
});

const total = props.data?.total;
const perPage = props.data?.per_page;
const currentPage = props.data?.current_page;
</script>
<template>
  <div v-if="total > 0 && links" class="flex items-end w-full paginator"
    :class="totalVisible ? 'justify-between' : 'justify-center'">
    <div v-if="totalVisible">
      全 {{ total?.toLocaleString() }} 件中 {{ (currentPage - 1) * perPage + 1 }} -
      {{ total < perPage ? total : perPage }} 件目 </div>
        <ul class="flex items-center justify-center rounded-md flex-wrap">
          <li v-for="(item, index) in links" class="shrink-0">
            <Link :href="item.url ?? '#'" class="flex items-center justify-center w-full shrink-0">
            <span class="page-link-text" :class="{ active: item.label == currentPage }">
              {{ item.label }}
            </span>
            </Link>
          </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
li {
  &:first-child {
    .page-link-text {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
  }

  &:last-child {
    .page-link-text {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  .page-link-text {
    position: relative;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    margin-left: -1px;
    line-height: 1.5;
    font-size: 1rem;
    color: #e0e0e0;
    text-decoration: none;

    &:hover {
      background-color: #7e22ce;
      background: linear-gradient(to bottom, #7e22ce30, #c026d330);
    }

    &.active {
      background-color: #7e22ce;
      background: linear-gradient(to bottom, #7e22ce, #c026d3);
      border-color: #337ab7;
      color: white;
      font-weight: 900;
      scale: 1.05;
      z-index: 10;
      border-radius: 3px;
    }
  }
}
.dark-theme {
  li .page-link-text {
    background-color: #232b35;
    color: #f0f0f0;
  }
}
.light-theme {
  li .page-link-text {
    color: #002030;
    background-color: #7e22ce20;
    &.active {
      color: #f0f0f0;
    }
  }
}
</style>
