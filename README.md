#  **PhantomImageGuard**

> *Because broken images shouldn’t break the experience.*

![Demo GIF](assets/demo.gif) 

---

## ✨ Overview

**PhantomImageGuard** is a unique, lightweight solution to gracefully handle failed image loading in web apps.
Instead of ugly broken icons ❌, it **dynamically transforms** your UI with stylish fallbacks, animations, and optional interactivity.

* 🌈 **Modern CSS Power** → Uses `:has()` pseudo-class for elegant styling.
* 🔄 **JavaScript Fallback** → Ensures compatibility with older browsers.
* ⚡ **Zero Dependencies** → Works out-of-the-box.
* 🎨 **Customizable** → Easily replace text, colors, and animations.

---

## 🚀 Features

✅ CSS-only handling for **modern browsers**
✅ JavaScript fallback for **legacy browsers**
✅ Smooth animations & pulse effects
✅ Hover & click interactivity
✅ Clean, responsive, and accessible

---

## 🖼️ Demo

### Broken Image (Handled)

![Broken Image Demo](assets/broken-demo.png) 

### Valid Image (Styled)

![Valid Image Demo](assets/valid-demo.png) 

---

## 📂 Project Structure

```
PhantomImageGuard/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── demo.gif
    ├── broken-demo.png
    └── valid-demo.png
```

---

## ⚙️ Setup

1. Clone the repo

   ```bash
   git clone https://github.com/your-username/PhantomImageGuard.git
   cd PhantomImageGuard
   ```

2. Open `index.html` in your browser 

---

## 🧑‍💻 How It Works

### 🔹 CSS-Only (Modern Browsers)

```css
.image-container:has(img[src=""]) {
  background: #eee url("fallback.jpg") center/cover no-repeat;
  content: "Image not available";
}
```

### 🔹 JavaScript Fallback (Older Browsers)

```javascript
document.querySelectorAll('img').forEach(img => {
  img.onerror = () => {
    img.parentElement.classList.add('fallback');
    img.remove();
  };
});
```

---

## 🌍 Browser Support

| Browser    | `:has()` Support | Works with JS  |
| ---------- | ---------------- | -------------- |
| Chrome ✅   | Yes              | Yes            |
| Safari ✅   | Yes              | Yes            |
| Edge ✅     | Yes              | Yes            |
| Firefox ⚠️ | Partial          | Yes            |
| IE ❌       | No               | Yes (fallback) |

---

## 🎨 Customization

* Change fallback text/icon in `styles.css`
* Swap animation with your own (`fade`, `bounce`, `zoom`)
* Add a **click-to-retry** feature in `script.js`

---

## 🏆 Why PhantomImageGuard?

Unlike traditional “image not found” hacks, PhantomImageGuard:

* Blends **modern CSS power** + **universal JS support**
* Makes broken images **look intentional**
* Gives your UI a **professional polish**

---

## 💡 Future Enhancements

* 🔄 Retry loading button on fallback
* 🎭 Theme-aware fallbacks (light/dark mode)
* 🎨 Dynamic SVG placeholder generation

---

## 🤝 Contributing

PRs welcome! If you have cool animations, drop them in 🎉

---

## 📜 License

MIT © 2025 — Crafted with ❤️ by [YourName](https://github.com/your-username)

---
