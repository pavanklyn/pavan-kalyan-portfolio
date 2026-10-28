/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#070A12', panel: '#0E1320', line: '#1E2638', bone: '#E8EBF2', mute: '#8D96AB', sky: '#6FA8FF', amber: '#FFB45A' },
      fontFamily: { display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'], body: ['"Instrument Sans"', 'system-ui', 'sans-serif'] }
    }
  },
  plugins: []
}
