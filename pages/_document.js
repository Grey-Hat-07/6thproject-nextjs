import Document, { Head, Main, NextScript, Html } from 'next/document'
export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" type="text/css" href="css/style.css" />
                    <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
                    <link rel="stylesheet" type="text/css" href="css/animate.css" />
                    <link rel="stylesheet" type="text/css" href="css/font-awesome.css" />
                    <link rel="stylesheet" type="text/css" href="css/owl.carousel.css" />
                    <link rel="stylesheet" type="text/css" href="css/owl.theme.css" />

                </Head>
                <body>
                    <script src="js/jQuery.js" type="text/javascript"></script>
                    <script src="js/script.js" type="text/javascript"></script>
                    <script src="js/bootstrap.js" type="text/javascript"></script>
                    <script src="js/owl.carousel.js" type="text/javascript"></script>
                    <script src="js/popper.min.js" type="text/javascript"></script>
                    <script src="js/popper.min.js" type="text/javascript"></script>
                    <script src="js/wow.js"type="text/javascript"></script>
                    <script src="js/wow.min.js" type="text/javascript"></script>
                    <script>
                        new WOW().init();
                    </script>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}