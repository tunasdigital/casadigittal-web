"use client"
import Link from "next/link";
import HeaderTwo from "../../components/layout/headers/header-2"
import FooterOne from "../../components/layout/footers/FooterOne"
import Breadcrumb  from "../../components/common/breadcrumbs/breadcrumb"

const Error = () => {
    return (
        <>
             <HeaderTwo style={true} />
             <main>
                <Breadcrumb top_title="Error Page" title="Error" />
                 <div className="pt-95 pb-95 text-center">
                    <h3>404 Página não encontrada!</h3>
                    <Link href={"/"}>
                    <button className="btn error-btn">Ir para a Home</button>
                    </Link>
                 </div>               
             </main>
             <FooterOne />
        </>
    );
};

export default Error;