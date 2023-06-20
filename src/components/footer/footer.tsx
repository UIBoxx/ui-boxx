import "./footer.css";
function MyFooter() {
  return (
    <div className="footer">
      <div className="f-icons">
        <span>Social Link:</span>
        <a href="https://github.com/">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEX////4+Pi3ubtvcnZNUVU+Q0cpLjLr6+x3en0sMTYkKS59gIORk5aUl5n8/Pzw8PFTV1tbX2Pc3d5DSEzn5+g3PECLjpFKTlKFh4qxs7XCxMUwNTq/wcLh4uPV1tZzd3o/Q0jOz9CmqKpjZ2qfoaSrd37mAAABPUlEQVR4AW3TBZKEMBAF0B8GCHzcnbW5/xm30qEyknklcU/DgQpuYRTHUXgLFHw6SemkmcYrlcd8kRYlnlQ1PU0Fp434Qde75Qd+1FUQKiRZjyGfTGNjKhWMmSQXYO3Ibao3MlqBnSRzADhk/ycAdcqclSSHnEUD+KLt8KalMQMqpl3izU5jKxHQGCq8Ud80fq4VfuFZaIyQO4wVPEre5g+RrIAPJrkQSL8OPjv3htQmH8guU5uwgseeP7ITMYBnpdFgvlJPcx0zoLjjzS/FDrVRvH6xsqDYlLx29huRUaFx6YuI1mhKMbddf9trEzca7rmRk/FxpiRXiJO8FDBURyb4yfO7glC8TOpacmAc4ElMEWlc2oGckjwvYVFEB5wjouE6uLBwquypQym/scKrM4njElYaJy182q15aDj/oQMZkS8JH3IAAAAASUVORK5CYII="
            alt=""
          />
        </a>
        <a href="https://www.instagram.com/">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </a>
        <a href="https://www.facebook.com/">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD30lEQVR4AayShW4cMRCGLQgzHArKDK9xor5KnyDMSZmZmZmZRWWuKMy8e3y7U8/KvXG6PlR+6dM3Wtv/tElYulnzHXI918HnvQZ7PNfgGfdvz1XQEJzFtz14B++y+crCO+D2XoG97ssw475swhwuGWSOK26T3zX24luWbZbehTxe1uS+YOiuCzGwOB+3mA2yAvcFU8cO7Mrsf30R3Lz4nfMcL+eglZyNkm3QGXZhJ0snzrOw3nE61uc4zQs4wmKOxC3PaIszZA4/I2On6zSsY8ni4P9Kx6loX/WJMCCOk5G47dCZ+r79HLtxR8LfueN45F318TDEORYiW4TJHBcvbf8QhT/TJoRiJkQME2bCJvRpJnwaM8TbuX24Q/k3wS82VR0JwRwOB8nSjF5xJgRvhgxIEtEj3kngLibHcQzc1YdDetWhICSj8iD5UW8MUsX+PoBGdNzJ/qXqQHBv5f4AVHCEBX4yp1LMG26EIJ2I+2hpFn18J8OsuQi5lXv9MxV7/ZAul35HIY0k7cCduJtV7tN95bt0sNgdt5g1sjR/GrX/+E9+j8DyI35xV7eh6q/cpftY2Q5tDwfSoVxYj5jwf5Yf4qV0j+bknXtY2bbZZxxIh9KtlkERfjaD52QFcgdSvl17xkq3zP4u3TwDSAlZAZ2pgmeZgrtZ6aZpraRrGpR0kuVZFTpXv1eBu1lpx5RW3DEFFu1kmWzSM21AiehC04wWc/uUxorbpn4XtU6CiuLWKcvZ5HVPxN7ZQkZwNytqnnxW1DwBSGETWSabnPsSkjuV4G5W2DC+hwPJyCZdL/22ngLJYt7DihonfAW1Y2BRR5bJJhtvaeL9OFoJ7mZrGiC3sHb8b6vlcdswFATRL2ZCDagAX12H+3DOOWe7A8d2fFQZlsRMXpzu6z8kVnGdPcDgDbRJ5InP/nFB3lFOTMlck1TVuW8gD8wzcRO3FeQfFvfeQUbeQU5M2K0yOGBJXlVjcmaO1HFTsernecPZTd/c3ZQ0CeTM7M+S3L0MNWbpT/a94abql7ebXDrburidECiZa5LsspZUZO+kzNI2Z31r9JPsmlx7M2namzHZG7J1vaQkp6qBff09csYN3FKS6jt5w1mPA2stos8sCb/b6zFzIPMcduOG+kzORjpurUaBtRKRuRwSsz8LqnpWQuaoV8MAu9V3VF/MG9Zi2DQXAxrwUlhSENeZA7aWwyY/+bc1tkKu/hOXxkLwZswHVLlTUlINNW0mjFnswC71W+FtGLOd+9ps+7k2qw/MtEmSrlNZB+c6z5jBrPo3nZNjzXQm1FTrjgSp6dYDakr3oFd9U+9y1lO9tTZT6gAAAABJRU5ErkJggg=="
            alt=""
          />
        </a>
        <a href="https://www.linkedin.com/">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABDUlEQVR4AWP4////gOLB44D6nTcsGIo33QHi/zTGd0B2YTiAPpYjHIHNAf/piQk6wGPW8f/rLz8HYRCbXg5AWI4GQGJ0cwDY12gAJDbcHUA4CkZAIqQUK7Ts/m/SfxBMs5RupswBaACr+P47b/5zlG/5DyzZ/r/+8hNF7vuvP//nn3r0X6JhJ+0ccPrR+/+H7735jw9cf/n5v0D1Nuo5gBxQve06zR0AjoL7b7/+//zjN4bc+ScfaOeA33///k9Yfg4mDw7u/Xdeo6uhnQP6D93FMNxlxjF0ZbRzgMXEQ9iyI90cALIMJoccDXRzAK6CZog6YNQBow6gIx54Bwx4x2RAu2bAysoEZu9o7xgAQrvkxt3WZi0AAAAASUVORK5CYII="
            alt=""
          />
        </a>
      </div>
      <div className="f-desc">
        <p>UIBOXX, 2023 All right reserved.</p>
        <span>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-and-conditions">Terms and Conditions</a>
          <a href="/disclaimer">Disclaimer</a>
          <a href="/about-us">About Us</a></span>
      </div>
    </div>
  );
}

export default MyFooter;
