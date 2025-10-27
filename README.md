# What2Eat - Hôm Nay Ăn Gì?

> Công cụ quyết định "Hôm nay ăn gì?" giúp bạn nhanh chóng lựa chọn món ăn phù hợp.


## Giới thiệu dự án

What2Eat là một ứng dụng được xây dựng trên nền tảng Nuxt, nhằm giải quyết khó khăn trong việc lựa chọn món ăn hàng ngày. Thông qua việc cung cấp dữ liệu món ăn Việt Nam phong phú, giúp người dùng có thể lựa chọn ngẫu nhiên hoặc lọc các món ăn phù hợp, dễ dàng giải quyết câu hỏi "Hôm nay ăn gì?".

## Bắt đầu nhanh

### Trải nghiệm trực tuyến

Truy cập trực tiếp [Trải nghiệm](https://what2eat.hocj2me.com/)

### Chạy local

1. Clone repository

```bash
git clone https://github.com/hocj2me/what2eat.git
cd what2eat
```

2. Cài đặt dependencies

```bash
pnpm install
```

3. Khởi động development server

```bash
pnpm dev
```

4. Truy cập `http://localhost:3000` trên trình duyệt

## Build và Deploy

### Build production

```bash
pnpm build
```

### Preview build

```bash
pnpm preview
```

### Tùy chọn deploy

[![Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/hocj2me/what2eat)
[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hocj2me/what2eat)

## Nguồn dữ liệu

Dữ liệu món ăn được cung cấp từ danh sách món ăn Việt Nam truyền thống, được xử lý thông qua `server/api/recipes.ts`.

## Tính năng

- 🍜 **30+ món ăn Việt Nam**: Từ phở bò đến bánh xèo, đầy đủ các món ăn truyền thống
- 🎲 **Lựa chọn ngẫu nhiên**: Giúp bạn quyết định nhanh chóng
- 📱 **Responsive Design**: Hoạt động tốt trên mọi thiết bị
- ⚡ **PWA Support**: Có thể cài đặt như ứng dụng di động
- 🌟 **UI/UX hiện đại**: Giao diện đẹp mắt và dễ sử dụng

## Công nghệ sử dụng

- **Frontend**: Nuxt 3, Vue 3, TypeScript
- **Styling**: UnoCSS
- **PWA**: Vite PWA
- **Deployment**: Netlify/Vercel

## Đóng góp

Mọi đóng góp đều được chào đón! Hãy tạo issue hoặc pull request để cải thiện dự án.

## License

Dự án này được phát hành dưới [MIT License](LICENSE).

## Tác giả

**Lê Chí Tuyền** - [hocj2me](https://github.com/hocj2me)

---

⭐ Nếu dự án này hữu ích, hãy cho một star nhé!
