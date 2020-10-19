import { registerFunctionComponent } from './webact.js';

function BeeswaxCandle () {
  const { html, css } = this;

  html`
    <div class="candle">
      <div class="blinking-glow"></div>
      <div class="thread"></div>
      <div class="glow"></div>
      <div class="flame"></div>
    </div>
  `;

  css`
  :host {
    display: block;
    width: 150px;
    height: 200px;
    position: relative;
    contain: layout;
  }

  :host *, :host *:before, :host *:after {
    position: absolute;
    content: "";
  }

  .candle {
    bottom: 0;
    width: 4cm;
    height: 2.5cm;
    border-radius: 150px / 40px;
    box-shadow: inset 20px -30px 50px 0 rgba(0, 0, 0, 0.4), inset -20px 0 50px 0 rgba(0, 0, 0, 0.4);
    background: #190f02;
    background: -moz-linear-gradient(var(--yellow), var(--yellow), var(--yellow-dark), #4c1a03 50%, #1c0900);
    background: -webkit-linear-gradient(var(--yellow), var(--yellow), var(--yellow-dark), #4c1a03 50%, #1c0900);
    background: -o-linear-gradient(var(--yellow), var(--yellow), var(--yellow-dark), #4c1a03 50%, #1c0900);
    background: -ms-linear-gradient(var(--yellow), var(--yellow), var(--yellow-dark), #4c1a03 50%, #1c0900);
    background: linear-gradient(var(--yellow), var(--yellow-dark));
  }

  .candle:before {
    width: 97%;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #d47401;
    background: #b86409;
    background: -moz-radial-gradient(var(--yellow), var(--yellow) 45%, var(--yellow-dark) 80%);
    background: -webkit-radial-gradient(var(--yellow), var(--yellow) 45%, var(--yellow-dark) 80%);
    background: -o-radial-gradient(var(--yellow), var(--yellow) 45%, var(--yellow-dark) 80%);
    background: -ms-radial-gradient(var(--yellow), var(--yellow) 45%, var(--yellow-dark) 80%);
    background: radial-gradient(#ffef80, var(--yellow-dark) 60%);
    background: radial-gradient(var(--yellow), var(--yellow) 45%, var(--yellow-dark) 80%);
  }

  .candle:after {
    width: 34px;
    height: 10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    top: 14px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
    background: -moz-radial-gradient(rgba(0, 0, 0, 0.6), transparent 45%);
    background: -webkit-radial-gradient(rgba(0, 0, 0, 0.6), transparent 45%);
    background: -o-radial-gradient(rgba(0, 0, 0, 0.6), transparent 45%);
    background: -ms-radial-gradient(rgba(0, 0, 0, 0.6), transparent 45%);
    background: radial-gradient(rgba(0, 0, 0, 0.6), transparent 45%);
  }

  .thread {
    width: 6px;
    height: 36px;
    top: -17px;
    left: 50%;
    z-index: 1;
    border-radius: 40% 40% 0 0;
    transform: translateX(-50%);
    background: #121212;
    background: -moz-linear-gradient(#d6994a, #4b232c, #121212, black, #e8bb31 90%);
    background: -webkit-linear-gradient(#d6994a, #4b232c, #121212, black, #e8bb31 90%);
    background: -o-linear-gradient(#d6994a, #4b232c, #121212, black, #e8bb31 90%);
    background: -ms-linear-gradient(#d6994a, #4b232c, #121212, black, #e8bb31 90%);
    background: linear-gradient(#d6994a, #4b232c, #121212, black, #e8bb31 90%);
  }

  .flame {
    width: 24px;
    height: 1cm;
    left: 50%;
    transform-origin: 50% 100%;
    transform: translateX(-50%);
    bottom: 100%;
    border-radius: 50% 50% 20% 20%;
    background: rgba(255, 255, 255, 1);
    background: -moz-linear-gradient(white 80%, transparent);
    background: -webkit-linear-gradient(white 80%, transparent);
    background: -o-linear-gradient(white 80%, transparent);
    background: -ms-linear-gradient(white 80%, transparent);
    background: linear-gradient(white 80%, transparent);
    animation: moveFlame 6s linear infinite, enlargeFlame 5s linear infinite;
  }

  .flame:before {
    width: 100%;
    height: 100%;
    border-radius: 50% 50% 20% 20%;
    box-shadow: 0 0 15px 0 rgba(247, 93, 0, .4), 0 -6px 4px 0 rgba(247, 128, 0, .7);
  }

  @keyframes moveFlame {
    0%, 100% {
      transform: translateX(-50%) rotate(-2deg);
    }
    50% {
      transform: translateX(-50%) rotate(2deg);
    }
  }

  @keyframes enlargeFlame {
    0%, 100% {
      height: 1.5cm;
    }
    50% {
      height: 1.8cm;
    }
  }

  .glow {
    width: 26px;
    height: 60px;
    border-radius: 50% 50% 35% 35%;
    left: 50%;
    top: -48px;
    transform: translateX(-50%);
    background: rgba(0, 133, 255, .7);
    box-shadow: 0 -40px 30px 0 #dc8a0c, 0 40px 50px 0 #dc8a0c, inset 3px 0 2px 0 rgba(0, 133, 255, .6), inset -3px 0 2px 0 rgba(0, 133, 255, .6);
  }

  .glow:before {
    width: 70%;
    height: 60%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.35);
  }

  .blinking-glow {
    width: 100px;
    height: 180px;
    left: 50%;
    top: -55%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: #ff6000;
    -webkit-filter: blur(50px);
    -moz-filter: blur(60px);
    -o-filter: blur(60px);
    -ms-filter: blur(60px);
    filter: blur(60px);
    animation: blinkIt 2s infinite;
  }

  @keyframes blinkIt {
    50% { opacity: .8;}
  }
  `;
}

export default registerFunctionComponent(BeeswaxCandle);