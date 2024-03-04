/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      'main-black': '#161616',
      'second-black': '#1c1c1c',
      'main-gray': '#7c7f82',
      'second-gray': '#2b2b2b',
      white: '#fff',
      green: '#22c55e'
    },
    backgroundImage: {
      tictactoe: "url('/tictactoe-app.png')",
      shooping: "url('/shopping-app.png')",
      skullbombs: "url('/skullbombs-app.png')",
      buda: "url('/budatravel-app.png')",
      movies: "url('/movies-app.png')",
      batabit: "url('/batatabit-app.png')",

      react: "url('/reactjs-remastered.jpeg')",
      next: "url('/nextjs-remastered.jpeg')",
      node: "url('/nodejs-remastered.jpeg')",
      js: "url('/javascript.jpeg')",
      typescript: "url('/typescript.jpeg')",
      github: "url('/github-remastered.jpg')",
      tailwind: "url('/tailwindcss.jpeg')",
      bootstrap: "url('/bootstrap.jpeg')",
      sass: "url('/sass.jpeg')",
      vscode: "url('/vscode-remastered.png')",
      hyper: "url('/hyperterminal-remastered.png')",
      figma: "url('/figma.jpeg')",
      notion: "url('/notion.png')",
      adobe: "url('/adobe.png')",

      about: "url('/about.jpg')"
    }
  },
  plugins: []
}
