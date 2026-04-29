# 🎮 TikTok Canlı Oyunu - Three.js

Yeşil küpü kontrol ederek renkli engelleri kaçın! Bu, TikTok canlı yayınları için hazırlanmış interaktif bir 3D oyunudur.

## 🚀 Hızlı Başlangıç

### Gereksinimler
- Node.js (v14 veya üstü)
- npm veya yarn

### Kurulum

```bash
# 1. Bağımlılıkları yükle
npm install

# 2. Geliştirme sunucusunu başlat
npm run dev

# 3. Tarayıcıda aç
# http://localhost:5173
```

### Production Build

```bash
npm run build
# Çıktı: dist/ klasöründe
```

## 🎮 Oyun Kuralları

- **Amaç:** Düşen engelleri kaçınarak puan topla
- **Kontroller:**
  - ⌨️ **Klavye:** WASD veya Yön Tuşları
  - 📱 **Mobil:** Ekran üzerinde kaydırarak hareket et

- **Mekanikler:**
  - Her kaçırdığın engel = **10 puan**
  - Toplam **3 can** var
  - Engelle çarpışırsan 1 can kaybedersin
  - Puan arttıkça zorluk seviyesi artar

## 📁 Proje Yapısı

```
oyun/
├── public/
│   └── index.html          # Ana HTML sayfası
├── src/
│   ├── index.js            # Giriş noktası
│   ├── scene.js            # Three.js sahne yönetimi
│   ├── game.js             # Oyun mantığı & puanlandırma
│   └── controls.js         # Klavye & dokunmatik kontroller
├── package.json            # Node bağımlılıkları
├── vite.config.js          # Vite konfigürasyonu
└── README.md               # Bu dosya
```

## 🎨 Özellikler

✅ **3D Grafik** - Three.js ile modern 3D render
✅ **Dinamik Zorluk** - Puan arttıkça engeller hızlanır
✅ **Mobil Destek** - Dokunmatik ekran kontrolleri
✅ **Işık ve Gölge** - Profesyonel görünüm
✅ **Responsive** - Her ekran boyutuna uyum sağlar
✅ **Puan Sistemi** - Skor ve can takibi

## 🛠️ Özelleştirme

### Renkleri Değiştir
`src/scene.js` dosyasında:
```javascript
const colors = [0xff3333, 0xffaa00, 0xff6bb6, 0xff00ff];
```

### Zorluk Oranını Ayarla
`src/game.js` dosyasında:
```javascript
this.baseSpawnInterval = 60; // Daha düşük = daha hızlı engeller
```

### Oyuncu Hızını Değiştir
`src/scene.js` dosyasında:
```javascript
const speed = 0.5; // Daha yüksek = daha hızlı hareket
```

## 🎯 Geliştirme Fikirleri

- [ ] Farklı oyun modları (Sandbox, Time Attack vb.)
- [ ] Multiplayer desteği (WebSocket ile)
- [ ] Ses efektleri ve müzik
- [ ] Farklı karakterler ve skins
- [ ] Leaderboard sistemi
- [ ] Power-up'lar ve özel etkileri
- [ ] Particles ve explosion efektleri

## 📊 Performans

- **FPS:** 60 FPS hedefi
- **Minimum Desteklenen Cihazlar:** Chrome, Firefox, Safari
- **Mobil Desteği:** iOS 12+, Android 8+

## 📝 Lisans

MIT License - Özgürce kullan ve özelleştir!

## 🤝 Katkı

Kodu geliştirmek ve yeni özellikler eklemek için PR açmaktan çekinme!

---

**Yapımcı:** ermishamide90-star
**Başlama:** 2026-04-29
