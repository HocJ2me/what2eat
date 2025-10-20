## Layouts

Các component Vue trong thư mục này được sử dụng làm layouts.

Theo mặc định, `default.vue` sẽ được sử dụng trừ khi có layout khác được chỉ định trong route meta.

```vue
<script setup lang="ts">
definePageMeta({
  layout: 'home',
})
</script>
```

Tìm hiểu thêm tại https://nuxt.com/docs/guide/directory-structure/layouts