<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Saven — Do'koningizga yangi mijozlar oqimini ulang</title>
    <style>
      :root {
        --bg-mint: #eef9ea;
        --bg-mint-deep: #e3f7dc;
        --green-btn: #86e37e;
        --green-btn-hover: #6fd766;
        --green-text: #3fae3a;
        --green-eyebrow: #4caf42;
        --ink: #10241a;
        --ink-soft: #5b6b62;
        --gray: #8a938e;
        --white: #ffffff;
        --line: #d7ecd1;
        --purple: #7c6ff0;
        --orange: #ffb443;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        font-family:
          "Inter",
          -apple-system,
          BlinkMacSystemFont,
          "Segoe UI",
          Roboto,
          Helvetica,
          Arial,
          sans-serif;
        color: var(--ink);
        background: var(--white);
        -webkit-font-smoothing: antialiased;
      }

      a {
        text-decoration: none;
        color: inherit;
      }
      ul {
        list-style: none;
      }
      button {
        font-family: inherit;
        cursor: pointer;
        border: none;
        background: none;
      }
      img {
        max-width: 100%;
        display: block;
      }

      .wrap {
        max-width: 1180px;
        margin: 0 auto;
        padding: 0 40px;
      }

      /* ---------- HEADER ---------- */
      header {
        background: var(--white);
        border-bottom: 1px solid #f0f0f0;
      }
      .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 76px;
      }
      .logo {
        font-size: 22px;
        font-weight: 800;
        color: var(--green-text);
        letter-spacing: -0.02em;
      }
      .nav-links {
        display: flex;
        align-items: center;
        gap: 36px;
      }
      .nav-links li a {
        font-size: 14.5px;
        font-weight: 500;
        color: var(--ink);
        opacity: 0.85;
        transition: opacity 0.15s ease;
      }
      .nav-links li a:hover {
        opacity: 1;
      }

      .nav-right {
        display: flex;
        align-items: center;
        gap: 28px;
      }
      .lang-switch {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 13.5px;
        font-weight: 700;
      }
      .lang-switch .active {
        color: var(--green-text);
      }
      .lang-switch .divider {
        color: #c9d3cd;
        font-weight: 400;
      }
      .lang-switch .inactive {
        color: var(--gray);
        font-weight: 600;
      }

      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 100px;
        font-weight: 700;
        white-space: nowrap;
        transition:
          transform 0.12s ease,
          background 0.15s ease,
          box-shadow 0.15s ease;
      }
      .btn:active {
        transform: scale(0.97);
      }

      .btn-primary {
        background: var(--green-btn);
        color: #0d2c0b;
        padding: 12px 22px;
        font-size: 14.5px;
      }
      .btn-primary:hover {
        background: var(--green-btn-hover);
      }

      .btn-header {
        padding: 10px 20px;
        font-size: 14px;
      }

      .btn-hero {
        padding: 16px 30px;
        font-size: 16px;
        box-shadow: 0 10px 24px -8px rgba(76, 175, 66, 0.45);
      }

      .menu-toggle {
        display: none;
        width: 22px;
        height: 16px;
        flex-direction: column;
        justify-content: space-between;
      }
      .menu-toggle span {
        display: block;
        height: 2px;
        width: 100%;
        background: var(--ink);
        border-radius: 2px;
      }

      /* ---------- HERO ---------- */
      .hero-section {
        background: radial-gradient(
          120% 100% at 100% 0%,
          var(--bg-mint-deep) 0%,
          var(--bg-mint) 55%,
          #ffffff 100%
        );
        padding: 64px 0 0 0;
        border: 2px solid #cdeec3;
        border-radius: 28px;
        margin: 14px auto 40px auto;
        max-width: calc(1180px + 80px);
        overflow: hidden;
        position: relative;
      }

      .hero-grid {
        display: grid;
        grid-template-columns: 1fr 460px;
        gap: 20px;
        align-items: end;
      }

      .hero-copy {
        padding-bottom: 56px;
        max-width: 560px;
      }

      .eyebrow {
        font-size: 12.5px;
        font-weight: 800;
        letter-spacing: 0.08em;
        color: var(--green-eyebrow);
        margin-bottom: 18px;
      }

      h1 {
        font-size: 44px;
        line-height: 1.14;
        font-weight: 800;
        letter-spacing: -0.02em;
        color: var(--ink);
        margin-bottom: 22px;
      }

      .hero-desc {
        font-size: 16px;
        line-height: 1.6;
        color: var(--ink-soft);
        max-width: 460px;
        margin-bottom: 30px;
      }

      .hero-actions {
        display: flex;
        align-items: center;
        gap: 26px;
        margin-bottom: 34px;
        flex-wrap: wrap;
      }

      .link-arrow {
        font-size: 15px;
        font-weight: 700;
        color: var(--green-text);
        display: inline-flex;
        align-items: center;
        gap: 6px;
        transition: gap 0.15s ease;
      }
      .link-arrow:hover {
        gap: 10px;
      }

      .stats {
        display: flex;
        gap: 28px;
        flex-wrap: wrap;
      }
      .stats li {
        font-size: 13.5px;
        font-weight: 600;
        color: var(--ink-soft);
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .stats li::before {
        content: "";
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: var(--green-btn);
        display: inline-block;
        position: relative;
        flex-shrink: 0;
      }
      .stats li::after {
        content: "";
        position: absolute;
        width: 5px;
        height: 9px;
        border-right: 2px solid #0d2c0b;
        border-bottom: 2px solid #0d2c0b;
        transform: translate(-13px, -1px) rotate(45deg);
      }

      /* ---------- PHONE MOCKUP ---------- */
      .phone-col {
        display: flex;
        justify-content: center;
        align-self: end;
      }
      .phone {
        width: 300px;
        background: #0e0e0e;
        border-radius: 44px;
        padding: 14px;
        box-shadow: 0 40px 70px -25px rgba(20, 50, 10, 0.35);
        position: relative;
      }
      .phone-screen {
        background: #fafffa;
        border-radius: 30px;
        overflow: hidden;
        position: relative;
        height: 560px;
        display: flex;
        flex-direction: column;
      }
      .status-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 22px 6px 22px;
        font-size: 14px;
        font-weight: 700;
        color: #111;
      }
      .status-icons {
        display: flex;
        gap: 5px;
        align-items: center;
      }
      .app-topbar {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 6px 20px 12px 20px;
      }
      .back-chevron {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: #f1f4ef;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        color: #333;
        flex-shrink: 0;
      }
      .app-title {
        font-size: 19px;
        font-weight: 800;
        color: #0d160c;
      }

      .filter-row {
        display: flex;
        gap: 10px;
        padding: 2px 20px 14px 20px;
      }
      .pill {
        font-size: 12.5px;
        font-weight: 700;
        padding: 8px 14px;
        border-radius: 100px;
        white-space: nowrap;
      }
      .pill-active {
        background: var(--green-btn);
        color: #0d2c0b;
      }
      .pill-outline {
        background: #f2f4f0;
        color: #3a453e;
      }

      .result-count {
        font-size: 12px;
        color: #8b968f;
        font-weight: 600;
        padding: 0 20px 10px 20px;
      }

      .list {
        padding: 0 16px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex: 1;
        overflow: hidden;
      }
      .card {
        display: flex;
        align-items: center;
        gap: 12px;
        background: #fff;
        border: 1px solid #eef2ec;
        border-radius: 16px;
        padding: 10px 12px;
        position: relative;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
      }
      .avatar {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-size: 17px;
        color: #fff;
        flex-shrink: 0;
      }
      .card-body {
        flex: 1;
        min-width: 0;
      }
      .card-title {
        font-size: 13.5px;
        font-weight: 700;
        color: #12201a;
        display: flex;
        align-items: center;
        gap: 6px;
        white-space: nowrap;
      }
      .discount-chip {
        background: #ddf8d6;
        color: #2f9c27;
        font-size: 10px;
        font-weight: 800;
        padding: 2px 6px;
        border-radius: 6px;
      }
      .card-sub {
        font-size: 11.5px;
        color: #8b968f;
        margin-top: 3px;
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .card-rating {
        font-size: 11.5px;
        color: #8b968f;
        margin-top: 2px;
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .star {
        color: #ffb443;
      }
      .dot-open {
        color: #3fae3a;
        font-weight: 700;
      }

      .bottom-nav {
        margin-top: auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 10px 6px 14px 6px;
        border-top: 1px solid #eef2ec;
        background: #fff;
      }
      .nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        font-size: 9.5px;
        font-weight: 600;
        color: #a3ada6;
      }
      .nav-item.active {
        color: #12201a;
      }
      .nav-icon {
        width: 22px;
        height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .nav-icon.qr {
        background: #86e37e;
        border-radius: 8px;
        color: #0d2c0b;
        width: 34px;
        height: 34px;
        margin-top: -16px;
      }
      .home-bar {
        position: absolute;
        bottom: 6px;
        left: 50%;
        transform: translateX(-50%);
        width: 120px;
        height: 4px;
        border-radius: 4px;
        background: #0e0e0e;
      }

      /* ---------- RESPONSIVE ---------- */
      @media (max-width: 980px) {
        .wrap {
          padding: 0 24px;
        }
        .hero-section {
          margin: 10px 12px 32px 12px;
          max-width: none;
          padding-top: 36px;
          border-radius: 22px;
        }
        .nav {
          height: 64px;
        }
        .nav-links {
          display: none;
        }
        .btn-header {
          display: none;
        }
        .menu-toggle {
          display: flex;
        }
        h1 {
          font-size: 32px;
        }
        .hero-grid {
          grid-template-columns: 1fr;
          gap: 34px;
        }
        .hero-copy {
          padding-bottom: 0;
          max-width: none;
        }
        .hero-desc {
          max-width: none;
        }
        .phone-col {
          justify-content: center;
        }
        .phone {
          width: 260px;
        }
        .phone-screen {
          height: 480px;
        }
        .stats {
          flex-direction: column;
          gap: 10px;
        }
      }

      @media (max-width: 420px) {
        .wrap {
          padding: 0 18px;
        }
        h1 {
          font-size: 27px;
        }
        .eyebrow {
          font-size: 11.5px;
        }
        .hero-desc {
          font-size: 14.5px;
        }
        .hero-section {
          margin: 8px 8px 26px 8px;
          padding-top: 28px;
        }
        .btn-hero {
          width: 100%;
        }
        .hero-actions {
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
        }
        .phone {
          width: 230px;
        }
        .phone-screen {
          height: 440px;
        }
      }
    </style>
  </head>
  <body>
    <header>
      <div class="wrap nav">
        <div class="logo">saven</div>
        <ul class="nav-links">
          <li><a href="#qanday">Qanday ishlaydi</a></li>
          <li><a href="#afzal">Afzalliklar</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div class="nav-right">
          <div class="lang-switch">
            <span class="active">UZ</span>
            <span class="divider">·</span>
            <span class="inactive">RU</span>
          </div>
          <a href="#ariza" class="btn btn-primary btn-header"
            >Ariza qoldirish</a
          >
          <div class="menu-toggle" aria-label="menu">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    </header>

    <main class="wrap">
      <section class="hero-section">
        <div class="wrap">
          <div class="hero-grid">
            <div class="hero-copy">
              <div class="eyebrow">BIZNESLAR UCHUN</div>
              <h1>Do'koningizga yangi mijozlar oqimini ulang</h1>
              <p class="hero-desc">
                Saven a'zolari — chegirma qidirayotgan minglab faol xaridorlar.
                Ariza qoldiring, 24 soat ichida hamkorlikni boshlaymiz.
              </p>
              <div class="hero-actions">
                <a href="#ariza" class="btn btn-primary btn-hero"
                  >Ariza qoldirish</a
                >
                <a href="#qanday" class="link-arrow">Qanday ishlaydi →</a>
              </div>
              <ul class="stats">
                <li>400+ hamkor</li>
                <li>50 000+ faol a'zo</li>
                <li>Ulanish bepul</li>
              </ul>
            </div>

            <div class="phone-col">
              <div class="phone">
                <div class="phone-screen">
                  <div class="status-bar">
                    <span>9:41</span>
                    <span class="status-icons">📶 📡 🔋</span>
                  </div>
                  <div class="app-topbar">
                    <div class="back-chevron">‹</div>
                    <div class="app-title">Barber</div>
                  </div>
                  <div class="filter-row">
                    <span class="pill pill-active">Yaqin atrofda</span>
                    <span class="pill pill-outline">Yuqori reyting</span>
                  </div>
                  <div class="result-count">24 ta biznes topildi</div>
                  <div class="list">
                    <div class="card">
                      <div class="avatar" style="background: #4caf42">F</div>
                      <div class="card-body">
                        <div class="card-title">
                          Fresh Cut Barber
                          <span class="discount-chip">-20%</span>
                        </div>
                        <div class="card-sub">📍 Chilonzor · 0.4 km</div>
                        <div class="card-rating">
                          <span class="star">★</span> 4.9 ·
                          <span class="dot-open">Hozir ochiq</span>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="avatar" style="background: #7c6ff0">P</div>
                      <div class="card-body">
                        <div class="card-title">
                          Premium Style <span class="discount-chip">-30%</span>
                        </div>
                        <div class="card-sub">📍 Yunusobod · 1.2 km</div>
                        <div class="card-rating">
                          <span class="star">★</span> 4.8 ·
                          <span class="dot-open">Hozir ochiq</span>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="avatar" style="background: #ffb443">B</div>
                      <div class="card-body">
                        <div class="card-title">
                          Barbershop №7 <span class="discount-chip">-15%</span>
                        </div>
                        <div class="card-sub">📍 Mirzo Ulug'bek · 0.9 km</div>
                        <div class="card-rating">
                          <span class="star">★</span> 4.7 ·
                          <span class="dot-open">Hozir ochiq</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bottom-nav">
                    <div class="nav-item active">
                      <div class="nav-icon">🏠</div>
                      Asosiy
                    </div>
                    <div class="nav-item">
                      <div class="nav-icon">🏷️</div>
                      Katalog
                    </div>
                    <div class="nav-item">
                      <div class="nav-icon qr">▦</div>
                      QR
                    </div>
                    <div class="nav-item">
                      <div class="nav-icon">👛</div>
                      Hamyon
                    </div>
                    <div class="nav-item">
                      <div class="nav-icon">👤</div>
                      Profil
                    </div>
                  </div>
                  <div class="home-bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </body>
</html>
