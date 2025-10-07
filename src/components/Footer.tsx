import { Facebook, Instagram, Youtube, Mail } from "lucide-react";
import logoBranco from "@/assets/logo-branco.png";

const Footer = () => {
  const socialLinks = [
    
    { icon: Instagram, href: "https://instagram.com/iprcm", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@iprcm", label: "YouTube" },
    
  ];

  return (
    

    <footer className="bg-primary text-primary-foreground py-6">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          
            <img 
              src={logoBranco} 
              alt="IPRCM Logo" 
              className="h-10 md:h-12 w-auto mx-auto"
            />
            <h3 className="text-lg md:text-xl font-bold">IPRCM Arena</h3>
            
            <p className="text-sm font-light max-w-2xl mx-auto">
              Um espaço de integração e comunhão entre irmãos.
            </p>
            
            <div className="flex items-center justify-center gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          
          
          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-xs font-light">
              © 2025 IPRCM. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
    // <footer className="bg-primary text-primary-foreground py-6">
    //   <div className="container mx-auto px-4">
    //     <div className="max-w-6xl mx-auto space-y-8">
    //       <div className="text-center space-y-6">
    //         <img 
    //           src={logoBranco} 
    //           alt="IPRCM Logo" 
    //           className="h-12 md:h-14 w-auto mx-auto"
    //         />
    //         <h3 className="text-2xl md:text-3xl font-bold">IPRCM Arena</h3>
            
    //         <p className="text-lg font-light max-w-2xl mx-auto">
    //           Um espaço de integração e comunhão entre irmãos.
    //         </p>
            
    //         <div className="flex items-center justify-center gap-6 pt-4">
    //           {socialLinks.map((social) => (
    //             <a
    //               key={social.label}
    //               href={social.href}
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all hover:scale-110"
    //               aria-label={social.label}
    //             >
    //               <social.icon className="h-6 w-6" />
    //             </a>
    //           ))}
    //         </div>
    //       </div>
          
    //       <div className="border-t border-primary-foreground/20 pt-8 text-center">
    //         <p className="text-sm font-light">
    //           © 2025 IPRCM. Todos os direitos reservados.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
