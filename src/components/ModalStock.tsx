import React, { useEffect } from 'react';

interface ModalStockProps {
  width: number;
  height: number;
  symbol: string;
  locale: string;
}

const ModalStock: React.FC<ModalStockProps> = ({
  width,
  height,
  symbol,
  locale,
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      width,
      height,
      isTransparent: false, // Adjust if needed
      colorTheme: 'dark', // Adjust if needed
      symbol,
      locale,
    });
    const container = document.getElementById('tradingview-widget-container');
    if (container) {
      container.appendChild(script);
    } else {
      console.error('TradingView container element not found');
    }
  }, [width, height, symbol, locale]);

  return (
    <div id="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
        </a>
      </div>
    </div>
  );
};

export default ModalStock;
