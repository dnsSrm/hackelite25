import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "HackElite'25 - Developer Network Space | SRMIST",
  description: "Join HackElite'25, the premier cyberpunk-themed hackathon organized by DNS at SRMIST Vadapalani. 24 hours of coding, innovation, and competition. Register now for free!",
  keywords: "hackathon, coding competition, DNS, SRMIST, cyberpunk, programming, innovation, Chennai, HackElite",
  authors: [{ name: "Developer Network Space" }],
  creator: "DNS - Developer Network Space",
  publisher: "SRM Institute of Science and Technology",
  robots: "index, follow",
  openGraph: {
    title: "HackElite'25 - Premier Cyberpunk Hackathon",
    description: "24 hours of coding excellence. Join the elite coding community at SRMIST's biggest hackathon.",
    url: "https://hackelite.dns.srmist.edu.in",
    siteName: "HackElite'25",
    images: [
      {
        url: "/media/dns logo1.jpg",
        width: 800,
        height: 600,
        alt: "HackElite'25 - DNS Hackathon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HackElite'25 - Premier Cyberpunk Hackathon",
    description: "24 hours of coding excellence. Join the elite coding community.",
    creator: "@dns_srmist",
    images: ["/media/dns logo1.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#00d4ff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/media/dns logo1.jpg" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={`${orbitron.variable} ${rajdhani.variable} rajdhani`}>
        <div id="matrix-bg"></div>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Matrix rain background effect
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
              canvas.id = 'matrix-canvas';
              canvas.style.position = 'fixed';
              canvas.style.top = '0';
              canvas.style.left = '0';
              canvas.style.width = '100vw';
              canvas.style.height = '100vh';
              canvas.style.zIndex = '-10';
              canvas.style.pointerEvents = 'none';
              canvas.style.opacity = '0.1';
              document.body.appendChild(canvas);

              function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
              }
              
              resizeCanvas();

              const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{|}";
              const matrixArray = matrix.split("");
              const fontSize = 10;
              let columns = Math.floor(canvas.width/fontSize);
              const drops = [];

              function initDrops() {
                for(let x = 0; x < columns; x++) {
                  drops[x] = 1;
                }
              }
              
              initDrops();

              function draw() {
                ctx.fillStyle = 'rgba(10, 10, 10, 0.04)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                ctx.fillStyle = '#00d4ff';
                ctx.font = fontSize + 'px monospace';
                
                for(let i = 0; i < drops.length; i++) {
                  const text = matrixArray[Math.floor(Math.random()*matrixArray.length)];
                  ctx.fillText(text, i*fontSize, drops[i]*fontSize);
                  
                  if(drops[i]*fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                  }
                  drops[i]++;
                }
              }

              setInterval(draw, 35);

              window.addEventListener('resize', () => {
                resizeCanvas();
                columns = Math.floor(canvas.width/fontSize);
                drops.length = 0;
                initDrops();
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
