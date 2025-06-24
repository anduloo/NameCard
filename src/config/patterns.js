export const patterns = {
  none: {
    name: '无纹理',
    svg: '',
    width: 0,
    height: 0,
  },
  cloud: {
    name: '云纹',
    svg: "<path d='M40,40 Q70,20 100,40 T160,40 Q180,70 160,100 T40,100 Q20,70 40,40' fill='none' stroke='rgba(240, 231, 231, 0.26)' stroke-width='1'/>",
    width: 200,
    height: 200,
  },
  halo: {
    name: '光晕',
    svg: "<circle cx='100' cy='100' r='60' fill='none' stroke='rgba(233, 243, 142, 0.2)' stroke-width='1'/><circle cx='100' cy='100' r='80' fill='none' stroke='rgba(239, 255, 92, 0.08)' stroke-width='1'/><circle cx='100' cy='100' r='100' fill='none' stroke='rgba(0,0,0,0.05)' stroke-width='1'/>",
    width: 200,
    height: 200,
  },
  wave: {
    name: '波浪',
    svg: "<path d='M0,50 Q25,55 50,50 T100,55 T150,50 T200,55' fill='none' stroke='rgba(216, 216, 216, 0.2)' stroke-width='1'/><path d='M0,60 Q25,70 50,60 T100,60 T150,60 T200,60' fill='none' stroke='rgba(211, 211, 211, 0.38)' stroke-width='1'/><path d='M0,80 Q25,90 50,80 T100,80 T150,80 T200,80' fill='none' stroke='rgba(211, 211, 211, 0.38)' stroke-width='1'/>",
    width: 200,
    height: 200,
  },
  scale: {
    name: '鳞片',
    svg: "<path d='M0,10 L10,0 L20,10 L10,20 Z' fill='rgba(230, 227, 227, 0.06)'/><path d='M20,10 L30,0 L40,10 L30,20 Z' fill='rgba(206, 206, 206, 0.14)'/><path d='M0,30 L10,20 L20,30 L10,40 Z' fill='rgba(65, 64, 64, 0.05)'/><path d='M20,30 L30,20 L40,30 L30,40 Z' fill='rgba(82, 81, 81, 0.05)'/>",
    width: 40,
    height: 40,
  },
  key: {
    name: '回纹',
    svg: "<path d='M0,0 H20 V20 H40 V40 H0 V0' fill='none' stroke='rgba(236, 234, 234, 0.05)' stroke-width='2'/>",
    width: 40,
    height: 40,
  },
  floral: {
    name: '花卉',
    svg: "<circle cx='50' cy='50' r='10' fill='none' stroke='rgba(255, 255, 255, 0.15)' stroke-width='1'/><path d='M50,40 Q60,20 50,10 Q40,20 50,40' fill='none' stroke='rgba(255, 255, 255, 0.15)' stroke-width='1'/><path d='M50,60 Q60,80 50,90 Q40,80 50,60' fill='none' stroke='rgba(255, 255, 255, 0.15)' stroke-width='1'/><path d='M40,50 Q20,60 10,50 Q20,40 40,50' fill='none' stroke='rgba(255, 255, 255, 0.15)' stroke-width='1'/><path d='M60,50 Q80,60 90,50 Q80,40 60,50' fill='none' stroke='rgba(255, 255, 255, 0.15)' stroke-width='1'/>",
    width: 100,
    height: 100,
  },
  'diagonal-hatch': { 
    name: '细斜线', 
    svg: '<path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" style="stroke: rgba(255, 255, 255, 0.17); stroke-width: 1"/>',
    width: 5,
    height: 5,
  },
  'dots-sm': { 
    name: '小圆点', 
    svg: '<circle cx="5" cy="5" r="1" style="fill: rgba(211, 235, 79, 0.2);"/>',
    width: 10,
    height: 10,
  },
  'dots-lg': { 
    name: '大圆点', 
    svg: '<circle cx="10" cy="10" r="2" style="fill: rgba(241, 229, 50, 0.2);"/>',
    width: 20,
    height: 20,
  },
  'grid': { 
    name: '网格', 
    svg: '<path d="M 5 0 L 5 10 M 0 5 L 10 5" style="stroke: rgba(255, 255, 255, 0.1); stroke-width: 1"/>',
    width: 10,
    height: 10,
  },
  'zigzag': {
    name: '之字形',
    svg: '<path d="M 0 5.5 L 2.5 0 L 5 2.5 L 7.5 0 L 10 2.5" style="stroke: rgba(255, 255, 255, 0.1); stroke-width: 1; fill: none;"/>',
    width: 10,
    height: 5,
  },
  'Yuling': {
    name: '鱼鳞纹',
    svg: '<path d="M0,0 L15,5 L15,15 L0,10 Z" fill="rgba(255,255,255,0.5)" opacity="0.1"/><path d="M15,5 L30,0 L30,10 L15,15 Z" fill="rgba(255,255,255,0.5)" opacity="0.1"/>',
    width: 25,
    height: 25,
  },
  'ICE': {
    name: '冰裂纹',
    svg: '<path d="M0,0 L30,70 L50,20 L70,50 L100,0" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1" stroke-opacity="0.2"/><path d="M0,20 L40,100 L60,40 L80,70 L100,30" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1" stroke-opacity="0.2"/><path d="M0,50 L20,0 L50,60 L70,10 L100,60" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1" stroke-opacity="0.2"/><path d="M0,80 L10,30 L30,90 L60,30 L100,90" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1" s4roke-opacity="0.2"/>',
    width: 150,
    height: 150,
  },
  'Fangge': {
    name: '方格',
    svg: '<path d="M0,0 L20,0 M0,20 L20,20 M0,0 L0,20 M20,0 L20,20" fill="none" stroke="rgb(255, 255, 255)" stroke-width="1" stroke-opacity="0.1"/><path d="M10,0 L10,20 M0,10 L20,10" fill="none" stroke="rgb(180, 243, 33)" stroke-width="0.3" stroke-opacity="0.1"/>',
    width: 25,
    height: 25,
  },
  'Cloud1': {
    name: '云纹',
    svg: '<path d="M10,30 Q15,20 25,25 Q30,10 40,20 Q50,5 60,20 Q70,10 80,25 Q85,15 95,25 Q100,20 110,30 Q100,40 95,35 Q85,45 80,35 Q70,50 60,40 Q50,55 40,40 Q30,50 25,35 Q15,40 10,30 Z" fill="none" stroke="rgb(255, 255, 255)" stroke-width="0.5" stroke-opacity="0.2"/><path d="M60,10 Q65,0 75,5 Q80,-10 90,0 Q100,-15 110,0 Q120,-10 130,5 Q135,-5 145,5 Q150,0 160,10 Q150,20 145,15 Q135,25 130,15 Q120,30 110,20 Q100,35 90,20 Q80,30 75,15 Q65,20 60,10 Z" fill="none" stroke="rgba(255,255,255,1)" stroke-width="0.8" stroke-opacity="0.2"/>',
    width: 210,
    height: 70,
  },
  'HUIZI': {
    name: '回字形',
    svg: '<path d="M0,0 L20,0 L20,20 L0,20 Z M5,5 L15,5 L15,15 L5,15 Z" fill="rgba(255, 255, 255, 0.2)" opacity="0.1" stroke="rgb(255, 255, 255,0.5)" stroke-width="1" stroke-opacity="1"/>',
    width: 30,
    height: 30,
  },
  'WaveTexture': {
    name: '波浪纹',
    svg: '<path d="M0,20 Q10,10 20,20 Q30,10 40,20 Q50,10 60,20 Q70,10 80,20 Q90,10 100,20" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1" stroke-opacity="0.2"/><path d="M0,25 Q10,15 20,25 Q30,15 40,25 Q50,15 60,25 Q70,15 80,25 Q90,15 100,25" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1" stroke-opacity="0.2"/><path d="M0,30 Q10,20 20,30 Q30,20 40,30 Q50,20 60,30 Q70,20 80,30 Q90,20 100,30" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1" stroke-opacity="0.2"/>',
    width: 100,
    height: 30,
  },
  'custom-image': {
    name: '自定义图片',
    type: 'image',
    image: null,
    width: 400,
    height: 200,
    opacity: 1
  }
}; 