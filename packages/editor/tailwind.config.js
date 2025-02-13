/** @type {import('tailwindcss').Config} */
module.exports = {
  namespace: 'swc-tiptap',
  // 配置需要扫描的文件
  content: ['./src/**/*.{js,jsx,ts,tsx,html,css}', './src/components/**/*.{js,jsx,ts,tsx}', './src/index.html'],
  // 禁用未使用的核心插件以减小包大小
  corePlugins: {
    preflight: false, // 禁用基础样式重置，避免与 Shadow DOM 冲突
    opacity: true,
    container: false, // 如果不需要 container 类，可以禁用
    float: true, // 启用 float 类
    clear: false, // 如果不需要 clear 类，可以禁用
    objectFit: false, // 如果不需要 object-fit 类，可以禁用
    objectPosition: false, // 如果不需要 object-position 类，可以禁用
  },
  darkMode: 'class',
  // 主题配置
  theme: {
    // 移除未使用的断点
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      // 'xl': '1280px', // 如果不需要，可以注释掉
      // '2xl': '1536px', // 如果不需要，可以注释掉
    },
    // 移除未使用的颜色
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
      // 添加你的自定义颜色
    },
    extend: {
      // 在这里添加自定义扩展
    },
  },
  // 变体配置
  variants: {
    extend: {
      // 只启用需要的变体
      opacity: ['hover', 'focus'],
      backgroundColor: ['hover', 'focus'],
      borderColor: ['hover', 'focus'],
      textColor: ['hover', 'focus'],
      float: ['hover', 'focus'], // 添加 float 的变体
    },
  },
  // 插件配置
  plugins: [
    // 添加自定义插件
  ],
  // 优化选项
  future: {
    removeDeprecatedGapUtilities: true, // 移除废弃的 gap 工具类
    purgeLayersByDefault: true, // 默认清除未使用的图层
    defaultLineHeights: true, // 使用默认行高
    standardFontWeights: true, // 使用标准字重
  },
  // 实验性功能
  experimental: {
    optimizeUniversalDefaults: true, // 优化通用默认值
  },
  // 确保在 Shadow DOM 中正确应用样式
  // important: true,
};
