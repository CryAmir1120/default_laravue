<script setup>
import { Link, Head } from "@inertiajs/vue3";
import { onMounted, onUnmounted, ref } from "vue";

onMounted(() => {
  let themeColor = "";
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    themeColor = "dark";
  } else {
    themeColor = "light";
  }
  Particles.init({
    selector: ".particle",
    color: themeColor == "dark" ? "#ffffff" : "#4caf50",
    sizeVariations: 8,
    connectParticles: false,
    speed: 0.1,
  });
});

onUnmounted(() => {
  Particles.destroy();
});

const mouseMoveAction = (e) => {
  let title = document.querySelector(".notfound-title");
  let xValue = Math.abs(e.movementX) > 30 ? 30 : e.movementX * 2;
  let yValue = Math.abs(e.movementY) > 30 ? 30 : e.movementY * 2;
  title.style.transform = `translate(${xValue}px, ${yValue}px)`;
  title.style.backgroundPosition = `calc(50% - ${xValue * 2}px) calc(50% - ${
    yValue * 2
  }px)`;
};
</script>

<template>
  <Head title="404 - ページが見つかりません。" />
  <div class="page-404 relative">
    <div ref="container" id="notfound" @mousemove="mouseMoveAction" class="relative z-20">
      <div class="notfound">
        <div class="notfound-404">
          <h1 class="notfound-title">404</h1>
        </div>
        <h2 class="wf-sans text-white gradient-txt">
          申し訳ございません。お客様がお探しのページは削除されたか、存在しない可能性があります。
        </h2>
        <Link :href="route('role.provider')" class="mt-4 go-to-top gradient-txt">
          <i class="pi pi-chevron-left"></i>
          <span>トップページへ戻る</span>
        </Link>
      </div>
    </div>
    <canvas class="particle absolute top-0 left-0 z-10 w-full h-screen"></canvas>
  </div>
</template>
<style lang="scss" scoped>
@import "../../../scss/theme";
@import "../../../scss/break";

#notfound {
  position: relative;
  width: 100%;
  height: 100vh;
  .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    max-width: 710px;
    width: 100%;
    text-align: center;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 100;

    @include mq-down(sm) {
      max-width: 100%;
    }

    .notfound-404 {
      position: relative;
      z-index: -1;

      h1 {
        font-family: "Montserrat", sans-serif;
        font-size: 260px;
        margin: 0px;
        font-weight: 900;
        -webkit-user-select: none;
        transition: 1s ease;
        text-shadow: 0 0 10px #ffffff70;

        @include mq-down() {
          font-size: 160px;
        }

        @include mq-down(sm) {
          font-size: 100px;
        }

      }
    }

    h2 {
      font-size: 26px;
      text-transform: uppercase;
      margin-top: 30px;
      font-weight: 700;

      @include mq-down(sm) {
        font-size: 16px;
      }
    }
    .gradient-txt {
      background-clip: text;
      -webkit-background-clip: text;
      background-image: linear-gradient(to right, #fbbf24, #ea580c);
      -webkit-text-fill-color: transparent;
    }

    .go-to-top {
      display: flex;
      align-items: center;
      gap: 1rem;
      line-height: 1;
      justify-content: center;
      font-size: 18px;
      text-decoration: none;
      text-transform: uppercase;
      padding: 10px;
      border-radius: 40px;
      font-weight: 700;
      i {
        margin-top: 4px;
      }
    }
  }
}
.dark-theme {
  .page-404 {
    background-color: #1a223f;
  }
  #notfound {
    .notfound-404 {
      h1 {
        color: white;
      }
    }
  }
}
.light-theme {
  .page-404 {
    background-color: #b1badd;
  }
  #notfound {
    .notfound-404 {
      h1 {
        color: #1a223f;
      }
    }
  }
}
</style>
