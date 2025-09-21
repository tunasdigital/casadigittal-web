"use client"
import "../../styles/index.css"; 
import { useEffect } from "react";
import ScrollToTop from "../../components/hooks/scroll-to-top";
import { animationCreate } from "../../components/utils/utils";

// Importando os arquivos CSS diretamente aqui
import '../../public/assets/css/bootstrap.min.css';
import '../../public/assets/css/default.css';
import '../../public/assets/css/responsive.css';
import '../../public/assets/css/meanmenu.css';
import '../../public/assets/css/animate.min.css';
import '../../public/assets/css/fontawesome.min.css';
import 'slick-carousel/slick/slick.css';
import 'react-modal-video/css/modal-video.css';
import '../../public/assets/css/main.css';


if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({
  children,
}: { children: React.ReactNode }) 
{
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  
  return (
    <html lang="en">
      <head>
        <title>Piohost Next js Template</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet" />
      </head> 
      <body>
        {children}
        <ScrollToTop />
        </body>
    </html>
  )
}