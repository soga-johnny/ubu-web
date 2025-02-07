'use client';

import { useEffect, useRef } from 'react';

export default function MorphLine() {
  const svgRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!pathRef.current) return;
      
      // スクロール位置の割合を計算（0から1の値）
      const scrollRatio = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      
      // より大胆な変形を実現
      const y1 = 100 + scrollRatio * 1000; // 上部の変形範囲を拡大
      const y2 = 700 - scrollRatio * 1000; // 下部の変形範囲を拡大
      const x1 = 600 + scrollRatio * 200; // x軸方向にも変形を追加
      const x2 = 600 - scrollRatio * 200;
      
      // スクロール位置に応じてパスを変形
      const path = `M0 400 
        C300 ${400 + scrollRatio * 200} ${x1} ${y1} 600 400 
        C${x2} ${y2} 900 ${400 - scrollRatio * 200} 1200 400`;
      
      pathRef.current.setAttribute('d', path);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={svgRef} className="fixed inset-0 pointer-events-none">
      <svg 
        className="w-full h-full" 
        viewBox="0 0 1200 800" 
        fill="none" 
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          ref={pathRef}
          d="M0 400 C300 400 600 100 600 400 C600 700 900 400 1200 400"
          stroke="currentColor"
          strokeWidth="1"
          className="path-morph"
        />
      </svg>
    </div>
  );
} 