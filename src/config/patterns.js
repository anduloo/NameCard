export const patterns = {
  'none': { 
    name: '无纹理', 
    svg: '' 
  },
  'diagonal-hatch': { 
    name: '细斜线', 
    svg: '<path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" style="stroke: rgba(0,0,0,0.15); stroke-width: 1"/>' 
  },
  'dots-sm': { 
    name: '小圆点', 
    svg: '<circle cx="5" cy="5" r="1" style="fill: rgba(0,0,0,0.2);"/>' 
  },
  'dots-lg': { 
    name: '大圆点', 
    svg: '<circle cx="10" cy="10" r="2" style="fill: rgba(0,0,0,0.2);"/>' 
  },
  'grid': { 
    name: '网格', 
    svg: '<path d="M 5 0 L 5 10 M 0 5 L 10 5" style="stroke: rgba(0,0,0,0.1); stroke-width: 1"/>'
  },
  'zigzag': {
    name: '之字形',
    svg: '<path d="M 0 2.5 L 2.5 0 L 5 2.5 L 7.5 0 L 10 2.5" style="stroke: rgba(0,0,0,0.1); stroke-width: 1; fill: none;"/>'
  }
}; 