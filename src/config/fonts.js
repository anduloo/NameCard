import fangzhengfangsong from '../assets/fonts/Fangzhengfangsong.woff2';
import jiangxizhuokai from '../assets/fonts/JiangXiZhuoKai.woff2';
import alibabapuhuiti from '../assets/fonts/Alibaba-PuHuiTi-Regular.woff2';
import lxgwneoxiheiplus from '../assets/fonts/LXGWNeoXiHeiPlus.woff2';
import kuaikanshijie from '../assets/fonts/kuaikanshijie.woff2';
import huxiaobozhenshuai from '../assets/fonts/huxiaobozhenshuai.woff2';
import smileysansoblique from '../assets/fonts/SmileySans-Oblique.ttf.woff2';
import AlimamaDongFangDaKai from '../assets/fonts/AlimamaDongFangDaKai-Regular.woff2';

export const standardFonts = [
  { name: '微软雅黑', value: 'Microsoft YaHei, sans-serif' },
  { name: '宋体', value: 'SimSun, serif' },
  { name: '楷体', value: 'KaiTi, cursive' },
  { name: '仿宋', value: 'FangSong, serif' },
  { name: '隶书', value: 'LiSu, cursive' },
  { name: '幼圆', value: 'YouYuan, cursive' },
  { name: 'Arial', value: 'Arial, sans-serif' },
  { name: 'Verdana', value: 'Verdana, sans-serif' },
  { name: 'Helvetica', value: 'Helvetica, sans-serif' },
  { name: 'Times New Roman', value: 'Times New Roman, serif' },
  { name: 'Georgia', value: 'Georgia, serif' },
  { name: 'Courier New', value: 'Courier New, monospace' },
];

export const customFonts = [
  { name: '方正仿宋', value: 'Fangzhengfangsong', path: fangzhengfangsong },
  { name: '江西拙楷', value: 'JiangXiZhuoKai', path: jiangxizhuokai },
  { name: '阿里巴巴普惠体', value: 'Alibaba-PuHuiTi-Regular', path: alibabapuhuiti },
  { name: '霞鹜新晰黑', value: 'LXGWNeoXiHeiPlus', path: lxgwneoxiheiplus },
  { name: '快看世界体', value: 'kuaikanshijie', path: kuaikanshijie },
  { name: '胡晓波真帅体', value: 'huxiaobozhenshuai', path: huxiaobozhenshuai },
  { name: '得意黑', value: 'SmileySans-Oblique', path: smileysansoblique },
  { name: '阿里妈妈东方大楷', value:'AlimamaDongFangDaKai-Regular',path:AlimamaDongFangDaKai },
];

export const fonts = [...standardFonts, ...customFonts]; 