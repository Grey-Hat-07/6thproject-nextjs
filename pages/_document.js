import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
            </Head>
            <body>
                <Main />
                <NextScript />
                <script src="js/script.js" type="text/javascript" defer/>
                {/* <script src="js/jQuery.js" type="text/javascript" async></script> */}
                <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.js" type="text/javascript" defer/>
                <script src="js/admin.js" type="text/javascript" async/>
                <script>
                    new WOW().init();
                </script>
                
            </body>
        </Html>
    )
}
